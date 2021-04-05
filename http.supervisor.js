/**
 * Polyfills
 */
Array.prototype.groupBy = function(key) {
  return this.reduce(function(rv, x) {
    rv.set(x[key], [...(rv.has(x[key]) ? rv.get(x[key]) : []), x]);
    return rv;
  }, new Map());
};

/**
 * Holds the http request information.
 */
class HttpRequestInfo {
  id = null;
  url = null;
  path = null;
  method = null;
  payload = null;
  timeStart = performance.now();
  timeEnd = performance.now();
  duration = 0;
  response = null;
  responseStatus = null;
  responseSize = 0;
  error = false;
  errorDescription = null;

  constructor(id, url, method, payload) {
    this.id = id;
    this.url = url;
    this.path = new URL(url).pathname;
    this.method = method;
    this.payload = payload;
  }
}

class Node {
  _name = null;
  _items = [];
  _groups = [];
  _groupArgs = [];
  _groupedBy = null;
  _childrenGroupedBy = null;
  _sortArgs = [];

  get name() {
    return this._name;
  }

  get hasItems() {
    return this._items && this._items.length;
  }

  get hasGroups() {
    return this._groups && this._groups.length;
  }

  get items() {
    return this.hasItems ? [...this._items] : null;
  }

  get groups() {
    return this.hasGroups ? [...this._groups] : null;
  }

  get groupArgs() {
    return this._groupArgs;
  }

  get groupedBy() {
    return this._groupedBy;
  }

  get sortArgs() {
    return this._sortArgs;
  }

  get count() {
    return this.hasItems ? this._items.length : 0;
  }

  constructor(name, items, groupedBy) {
    this._name = name;
    this._items = items;
    this._groupedBy = groupedBy;
  }

  groupBy(...args) {
    if (!args.length) {
      return;
    }

    this._groupArgs = args;
    this._groups = [];
    this._childrenGroupedBy = args.shift();
    const obj = this._items.groupBy(this._childrenGroupedBy);

    obj.forEach((key, value) => {
      const group = new Node(value, key, this._childrenGroupedBy);
      this._groups.push(group);
      group.groupBy(...args);
    });

    return this;
  }

  ungroup() {
    this._groupArgs = [];
    this._groups = [];
    this._groupedBy = null;
  }
}

class Collection extends Node {
  constructor(items) {
    super('root', items);
  }
}

const HTTP_SUPERVISOR_EMOJI = '💂';

/**
 * Collection of messages used by supervisor.
 */
const Messages = {
  ACTIVE: `‍${HTTP_SUPERVISOR_EMOJI} HTTP SUPERVISOR STARTED`,
  SLEEP: `${HTTP_SUPERVISOR_EMOJI}‍ HTTP SUPERVISOR STOPPED`,
  LOG_START: `------------------------ LOG STARTS ------------------------`,
  LOG_END: `------------------------- LOG ENDS -------------------------`,
  NO_REQUESTS: `No Requests Found`,
  GENERAL_INFO: 'Metrics Summary',
  TOTAL_REQUESTS: 'Total Requests',
  REQUESTS_INFO: 'Requests Details',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

/**
 * The different color codes by supervisor.
 */
const Colors = {
  BRAND: '#f54284',
  SUCCESS: '#09b809',
  ERROR: '#e62e5c',
  INFO: '#4d4b46',
  WARN: '#e6b225'
};

/**
 * The different statuses of supervisor.
 */
const SupervisorStatus = {
  Busy: 'busy',
  Idle: 'idle',
  NotReady: 'not-ready',
  Retired: 'retired'
};

/**
 * Different events fired by supervisor.
 */
const SupervisorEvents = {
  START: 'start',
  STOP: 'stop',
  CLEAR: 'clear',
  RETIRE: 'retire',
  REQUEST_START: 'request-start',
  REQUEST_END: 'request-end',
  REQUEST_ERROR: 'request-error'
};

/**
 * HTTP Error status codes.
 */
const ERROR_STATUS_CODES = new Set([500, 401, 404]);

/**
 * Proxy object that allows to call any method in an object that not even exists.
 */
const CALL_ME_ANYTHING = new Proxy({}, { get : function() { return function()  { }; } });

/**
 * Supervises HTTP Network Traffic. Helps to identify duplicate requests, analyze payload and much more.
 */
class HttpSupervisor {

  /**
   * The UI widget through which user can interact with supervisor.
   */
  _widget = null;

  /**
   * The reporter that displays the metrics and requests info captured in a particular period.
   */
  _reporter = null;

  /**
   * Array of domains to monitor.
   * @type {null|Array<string>}
   * @private
   */
  _domains = null;

  /**
   * True to render UI.
   * @type {boolean}
   * @private
   */
  _renderUI = true;

  /**
   * Collection of captured requests.
   * @type {Array}
   * @private
   */
  _requests = new Set();

  /**
   * Current status of the supervisor.
   * @type {string}
   * @private
   */
  _status = SupervisorStatus.NotReady;

  /**
   * Requests count.
   * @type {number}
   * @private
   */
  _callsCount = 0;

  /**
   * The id generator function.
   */
  _id = idGenerator(1);

  /**
   * The events and their associated handlers store.
   */
  _eventsHandlersMap = new Map();

  /**
   * XMLHttpRequest native open method.
   */
  _nativeOpen = XMLHttpRequest.prototype.open;

    /**
   * XMLHttpRequest native send method.
   */
  _nativeSend = XMLHttpRequest.prototype.send;

  /**
   * Returns `true` if busy.
   * @return {boolean}
   */
  get busy() {
    return this._status === SupervisorStatus.Busy;
  }

  /**
   * Returns the total no. of requests of the current session.
   * @return {number}
   */
  get totalRequests() {
    return this._requests.size;
  }

  /**
   * Constructor.
   * @param {object} widget
   * @param {object} reporter
   */
  constructor(widget, reporter) {
    this._widget = widget || CALL_ME_ANYTHING;
    this._reporter = reporter || CALL_ME_ANYTHING;
  }

  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   */
  init(config = {}) {
    if (this._status !== SupervisorStatus.NotReady) {
      throw new Error(`Supervisor is already configured!`)
    }

    const {
      domains,
      renderUI
    } = config;

    Array.isArray(domains) && (this._domains = new Set(domains));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);

    this._render();
    this._monkeyPatch();
    this._status = SupervisorStatus.Idle;
    this.start();
  }

  /**
   * Starts network monitoring.
   */
  start() {
    if (this._status === SupervisorStatus.NotReady) {
      this.init();
      return;
    }

    this._status = SupervisorStatus.Busy;
    this._widget.start();
    this._reporter.print(Messages.ACTIVE, Colors.BRAND, true);
    this._triggerEvent(SupervisorEvents.START);
  }

  /**
   * Stops network monitoring.
   */
  stop() {
    this._status = SupervisorStatus.Idle;
    this._widget.stop();
    this._reporter.print(Messages.SLEEP, Colors.BRAND, true);
    this._triggerEvent(SupervisorEvents.STOP);
  }

  /**
   * Clears the requests log.
   */
  clear() {
    this._reporter.clear();
    this._requests.clear();
    this._triggerEvent(SupervisorEvents.CLEAR);
  }

  /**
   * Prints the log to the passed reporter.
   */
  print() {
    if (!this._requests.size) {
      this._reporter.print(Messages.NO_REQUESTS, Colors.INFO, true);
      return;
    }

    const collection = new Collection([...this._requests]);
    collection.groupBy('path', 'method', 'payload')
    this._reporter.print(Messages.LOG_START, Colors.INFO, true);
    this._reporter.break();
    this._reporter.print(Messages.GENERAL_INFO, Colors.INFO, true);
    this._reporter.print(Array(Messages.GENERAL_INFO.length).fill('-').join(''), Colors.INFO, true);
    this._reporter.print(`${Messages.TOTAL_REQUESTS}: ${this.totalRequests} | GET: ${this.requestsByType('GET').count} | POST: ${this.requestsByType('POST').count} | PUT: ${this.requestsByType('PUT').count} | DELETE: ${this.requestsByType('DELETE').count}`, Colors.INFO);
    this._reporter.break();
    this._reporter.print(Messages.REQUESTS_INFO, Colors.INFO, true);
    this._reporter.print(Array(Messages.REQUESTS_INFO.length).fill('-').join(''), Colors.INFO, true);
    this._reporter.report(collection);
    this._reporter.print(Messages.LOG_END, Colors.INFO, true);
  }

  /**
   * Subscribes to the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  on(eventName, handler) {
    if (!this._supportEvent(eventName)) {
      return;
    }

    if (!this._eventsHandlersMap.has(eventName)) {
      this._eventsHandlersMap.add(eventName, new Set());
    }

    this._eventsHandlersMap.get(eventName).add(handler);
  }

  /**
   * Un-subscribes from the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  off(eventName, handler) {
    if (!this._eventsHandlersMap.has(eventName)) {
      return;
    }

    const handlers = this._eventsHandlersMap.get(eventName);
    handlers && handlers.remove(handler);
  }

  retire() {
    this._undoMonkeyPatch();
    this._widget.destroy();
    this._reporter.destroy &&  this._reporter.destroy();
    this._triggerEvent(SupervisorEvents.RETIRE);
    this._eventsHandlersMap = {};
    this._status = SupervisorStatus.Retired;
  }

  report(collection) {
    this._reporter.report(collection);
  }

  /**
   * Returns the captured requests.
   */
  requests() {
    return new Collection([...this._requests]);
  }

  requestsByType(method) {
    return new Collection([...this._requests].filter(r => r.method === method));
  }

  _monkeyPatch() {
    const open = this._open.bind(this),
      send = this._send.bind(this);

    XMLHttpRequest.prototype.open = function () {
      open(this, ...arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      send(this, ...arguments);
    };
  }

  _undoMonkeyPatch() {
    XMLHttpRequest.prototype.open = this._nativeOpen;
    XMLHttpRequest.prototype.send = this._nativeSend;
  }

  _render() {
    if (!this._renderUI) {
      return;
    }

    this._widget.render();
    this._widget.subscribe('start', () => this.start());
    this._widget.subscribe('stop', () => this.stop());
    this._widget.subscribe('clear', () => this.clear());
    this._widget.subscribe('print', () => this.print());
  }

  /**
   * Capture request information and opens network connection using XHR.
   * @private
   */
  _open() {
    if (!this.busy) {
      return;
    }

    const parameters = [...arguments],
      [xhr, method, url] = parameters;

    parameters.shift();

    Object.assign(xhr, {
      id: this._id(),
      method: method,
      url: url
    });

    this._nativeOpen.call(xhr, ...parameters);
  }

  /**
   * Sends XHR request.
   * @private
   */
  _send() {
    if (!this.busy) {
      return;
    }

    const parameters = [...arguments],
      [xhr, payload] = parameters,
      url = new URL(xhr.url);

    xhr.payload = payload;
    parameters.shift();

    if (this._domains !== null && this._domains.has(url.origin) === -1) {
      this._nativeSend.call(...parameters);
      return;
    }

    // Increment the call counter.
    this._increment();

    // Capture the request.
    const requestInfo = this._createRequest(xhr);
    this._requests.add(requestInfo);

    xhr.addEventListener('load', () => {
      const statusCode = xhr.status,
        error = ERROR_STATUS_CODES.has(statusCode);

      this._decrement();
      requestInfo.responseStatus = statusCode;
      try {
        requestInfo.response = JSON.parse(xhr.response);
      } catch {
        requestInfo.response = xhr.response;
      }
      requestInfo.error = error;
      error && (requestInfo.error = xhr.response);
      requestInfo.timeEnd = performance.now();
      requestInfo.duration = Math.round(requestInfo.timeEnd - requestInfo.timeStart);
      requestInfo.responseSize = xhr.responseText.length;
      this._triggerEvent(error ? SupervisorEvents.REQUEST_ERROR : SupervisorEvents.REQUEST_END, xhr, requestInfo);
    });
    this._nativeSend.call(xhr, ...parameters);
    this._triggerEvent(SupervisorEvents.REQUEST_START, xhr, requestInfo);
  }

  /**
   * Increments the call counter.
   * @private
   */
  _increment() {
    this._callsCount++;
    this._widget.updateCalls(this._callsCount);
  }

  /**
   * Decrements the call counter.
   * @private
   */
  _decrement() {
    if (this._callsCount === 0) {
      return;
    }

    this._callsCount--;
    this._widget.updateCalls(this._callsCount);
  }

  /**
   * Creates request object from the XHR object.
   * @private
   */
  _createRequest(xhr) {
    const {
      id,
      url,
      method,
      payload
    } = xhr;

    return new HttpRequestInfo(id, url, method, payload);
  }

  /**
   * Returns `true` is the passed event is supported.
   */
  _supportEvent(eventName) {
    return SupervisorEvents.hasOwnProperty(eventName);
  }

  /**
   * Invokes the handlers registered for the event.
   */
  _triggerEvent(eventName, ...args) {
    const handlers = this._eventsHandlersMap.get(eventName);
    if (!handlers) {
      return;
    }
    [...handlers].forEach(handler => handler(this, ...args));
  }
}

/**
 * Represents the widget that helps to control the supervisor.
 */
class HttpSupervisorWidget {

  el = null;

  _startButton = null;

  _stopButton = null;

  _clearButton = null;

  _printButton = null;

  _callsCountLabel = null;

  _eventsAndButtons = null;

  render() {
    if (this.el) {
      return;
    }

    const template = document.createRange()
      .createContextualFragment(`<div id="http-supervisor" style="position: fixed;z-index: 20000;top: 0;right: 0;text-align: center;display: flex;width: 100%;justify-content: center;align-items:center;">
                 <button id="start">
                   Start
                 </button>
                 <button id="stop">
                   Stop
                 </button>
                 <button id="clear">
                   Clear
                 </button>
                 <button id="print">
                   Print
                 </button>
                 <span id="calls-count" style="width: 20px;border: solid 2px;display: block;">
                   0
                 <span>
           </div>`);

    document.body.appendChild(template);

    this.el = document.querySelector('#http-supervisor');
    [this._startButton, this._stopButton, this._clearButton, this._printButton, this._callsCountLabel] = this.el.children;
    this._eventsAndButtons = {
      start: this._startButton,
      stop: this._stopButton,
      clear: this._clearButton,
      print: this._printButton
    };
  }

  start() {
    this._startButton.disabled = true;
    this._stopButton.disabled = false;
  }

  stop() {
    this._stopButton.disabled = true;
    this._startButton.disabled = false;
  }

  updateCalls(count) {
    this._callsCountLabel.innerText = count.toString();
  }

  show() {
    this.el.style.display = 'none';
  }

  hide() {
    this.el.style.display = 'flex';
  }

  subscribe(evt, handler) {
    this._eventsAndButtons[evt].addEventListener('click', handler);
  }

  destroy() {
    this.el.remove();
  }
}

/**
 * Class that is responsible for displaying the requests info to console.
 */
class ConsoleReporter {

  _fieldsToDisplay = null;

  constructor(fieldsConfig) {
    fieldsConfig && (this._fieldsToDisplay = new Map(Object.entries(fieldsConfig)));
  }

  success(message) {
    this.print(message, Colors.SUCCESS);
  }

  error(message) {
    this.print(message, Colors.ERROR);
  }

  info(message) {
    this.print(message, Colors.INFO);
  }

  warn(message) {
    this.print(message, Colors.WARN);
  }

  print(message, color, bold = false) {
    const styles = [`color: ${color}`];
    bold && styles.push(`font-weight: bold`);
    console.log(`%c ${message}`, styles.join(';'));
  }

  report(collection) {
    if (!collection.hasItems && !collection.hasGroups) {
      return;
    }

    if (collection.hasGroups) {
      collection.groups.forEach(group => {
        const { name, groupedBy, items } = group;

        if (typeof name === 'undefined') {
          this.groupStart('-', `[${items.length}]`);
        } else if (typeof name === 'object') {
          this.groupStart(`${groupedBy}: [${items.length}]`, name);
        } else {
          this.groupStart(name, `[${items.length}]`);
        }

        this.report(group);
        this.groupEnd();
      });

      return;
    }

    const items = collection.items.map(item => {
      const displayObj = {};
      this._fieldsToDisplay.forEach((value, key) => {
        let v;
        if (typeof item[key] === 'undefined') {
          v = null;
        } else if (typeof item[key] === 'object' || Array.isArray(item[key])) {
          v = JSON.stringify(item[key]);
        } else {
          v = item[key];
        }
        displayObj[value] = v;
      });
      return displayObj;
    });
    this.table(items);
    return;
  }

  table(array, displayFields) {
    array.length && console.table(array, displayFields);
  }

  groupStart(group, ...args) {
    console.group(group, ...args);
  }

  groupEnd() {
    console.groupEnd();
  }

  clear() {
    console.clear();
  }

  break() {
    console.log(`\n`);
  }

  destroy() {
  }
}

function idGenerator(seed = 0) {
  return function() {
    return seed++;
  }
}

const httpSupervisor = new HttpSupervisor(new HttpSupervisorWidget(), new ConsoleReporter({
    id: 'Request No',
    url: 'URL',
    path: 'Path',
    method: 'Type',
    payload: 'Payload',
    duration: 'Duration (ms)',
    response: 'Response',
    responseStatus: 'Status',
    responseSize: 'Size (bytes)',
    error: 'Is Error?',
    errorDescription: 'Error Description'
  }));
export default httpSupervisor;
