/**
 * Polyfills
 */
Array.prototype.groupBy = function(key) {
  return this.reduce(function(rv, x) {
    rv.set(x[key], [...(rv.has(x[key]) ? rv.get(x[key]) : []), x]);
    return rv;
  }, new Map());
};

function formatBytes(bytes, decimals) {
  if(bytes == 0) {
    return '0 bytes';
  }

  const k = 1024,
    dm = decimals || 2,
    sizes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatTime(ms) {
  return ms < 500 ? `${ms} ms` : `${ms/1000} s`;
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
  FAILED_REQUESTS: 'Failed Requests',
  REQUESTS_EXCEEDED_QUOTA: 'Requests Exceeded Quota',
  REQUESTS_INFO: 'Requests Details',
  REQUEST_INFO: 'Request Details',
  MAX_PAYLOAD_SIZE: 'Max Payload Size',
  MAX_RESPONSE_SIZE: 'Max Response Size',
  MAX_DURATION: 'Max Duration',
  TOTAL_PAYLOAD_SIZE: 'Total Payload Size',
  TOTAL_RESPONSE_SIZE: 'Total Response Size',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  ID: 'Id',
  URL: 'Url',
  PATH: 'Path',
  METHOD: 'Type',
  PAYLOAD: 'Payload',
  PAYLOAD_SIZE: 'Payload Size',
  DURATION: 'Duration',
  RESPONSE: 'Response',
  RESPONSE_SIZE: 'Response Size',
  RESPONSE_STATUS: 'Status',
  IS_ERROR: 'Is Error?',
  ERROR_DESC: 'Error Description'
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
 * Holds the http request information.
 */
class HttpRequestInfo {
  id = null;
  url = null;
  path = null;
  method = null;
  payload = null;
  payloadSize = null;
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

  get first() {
    return this.hasItems ? this._items[0] : null;
  }

  get last() {
    return this.hasItems ? this._items[this.count - 1] : null;
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

  sortBy(...args) {
    if (!args.length) {
      return;
    }

    if (this.hasGroups) {
      return;
    }

    //this._items.sortBy()
  }

  search(args) {

  }
}

class Collection extends Node {
  constructor(items) {
    super('root', items);
  }
}

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
   * Request Quota.
   * @private
   */
  _quota = {
    maxPayloadSize: Infinity,
    maxResponseSize: Infinity,
    maxDuration: Infinity
  };

  /**
   * Display each completed request.
   * @private
   */
  _printEachRequest = false;

  /**
   * Display failed request.
   * @private
   */
  _alertOnError = true;

  /**
   * Display request that exceeded quota.
   * @private
   */
  _alertOnExceedQuota = true;

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
      renderUI,
      printEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota
    } = config;

    Array.isArray(domains) && (this._domains = new Set(domains));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);
    typeof printEachRequest === 'boolean' && (this._printEachRequest = printEachRequest);
    typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
    typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
    typeof quota === 'object' && (this._quota = {...this._quota, ...quota});

    this.on(SupervisorEvents.REQUEST_END, (xhr, request) => {
      if (this._printEachRequest) {
        this._reporter.print(request);
        return;
      }

      if (this._alertOnError && request.error) {
        this._reporter.print(request);
        return;
      }

      if (this._isExceededQuota(request)) {
        this._reporter.print(request);
        return;
      }
    });

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
    collection.groupBy('path', 'method')
    this._reporter.print(Messages.LOG_START, Colors.INFO, true);
    this._reporter.break();
    this._reporter.print(Messages.GENERAL_INFO, Colors.INFO, true);
    this._reporter.print(Array(Messages.GENERAL_INFO.length).fill('-').join(''), Colors.INFO, true);
    this._reporter.print(`${Messages.TOTAL_REQUESTS}: ${this.totalRequests} | GET: ${this.getRequestsByType('GET').count} | POST: ${this.getRequestsByType('POST').count} | PUT: ${this.getRequestsByType('PUT').count} | DELETE: ${this.getRequestsByType('DELETE').count}`, Colors.INFO);
    this._reporter.print(`${Messages.FAILED_REQUESTS}: ${this.getFailedRequests().length}`, Colors.INFO);
    this._reporter.print(`${Messages.REQUESTS_EXCEEDED_QUOTA}: ${this.getRequestsExceededQuota().length}`, Colors.INFO);
    this._reporter.print(`${Messages.MAX_PAYLOAD_SIZE}: ${formatBytes(this.maxPayloadSize())}`, Colors.INFO);
    this._reporter.print(`${Messages.MAX_RESPONSE_SIZE}: ${formatBytes(this.maxResponseSize())}`, Colors.INFO);
    this._reporter.print(`${Messages.MAX_DURATION}: ${formatTime(this.maxDuration())}`, Colors.INFO);
    this._reporter.print(`${Messages.TOTAL_PAYLOAD_SIZE}: ${formatBytes(this.getTotalPayloadSize())}`, Colors.INFO);
    this._reporter.print(`${Messages.TOTAL_RESPONSE_SIZE}: ${formatBytes(this.getTotalResponseSize())}`, Colors.INFO);
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

  getRequestsByType(method) {
    return new Collection([...this._requests].filter(r => r.method === method));
  }

  getFailedRequests() {
    const failedRequests = [...this._requests].filter(r => r.error === true);
    return new Collection(failedRequests);
  }

  getLastFailedRequest() {
    return this.getFailedRequests().last;
  }

  getLastRequest() {
    return this.requests().last;
  }

  getRequestsExceededQuota() {
    return [...this._requests].filter(r => this._isExceededQuota(r));
  }

  groupRequests(...groupArgs) {
    return this.requests().groupBy(...groupArgs);
  }

  sortRequests(...sortArgs) {
    return this.requests().sortBy(...sortArgs);
  }

  arrangeRequests(groupArgs, sortArgs) {
    return this.groupRequests(...groupArgs).sortBy(...sortArgs);
  }

  getRequestsBy(query, groupArgs, sortArgs) {
    return this.searchRequests(query).groupBy(...groupArgs).sortBy(...sortArgs);
  }

  searchRequests(query) {
    return this.requests.search(query);
  }

  getTotalPayloadSize() {
    return [...this._requests].reduce((a, b) => a + b.payloadSize, 0);
  }

  getTotalResponseSize() {
    return [...this._requests].reduce((a, b) => a + b.responseSize, 0);
  }

  maxPayloadSize() {
    return Math.max(...[...this._requests].map(r => r.payloadSize));
  }

  maxResponseSize() {
    return Math.max(...[...this._requests].map(r => r.responseSize));
  }

  maxDuration() {
    return Math.max(...[...this._requests].map(r => r.duration));
  }

  printRequests() {
    this._reporter.report(this.requests());
  }

  printRequestsByType(method) {
    this._reporter.report(this.getRequestsByType(method));
  }

  printFailedRequests() {
    this._reporter.report(this.getFailedRequests());
  }

  printLastFailedRequest() {
    this._printHeader(Messages.REQUEST_INFO);
    this._reporter.report(this.getLastFailedRequest());
  }

  printLastRequest() {
    this._printHeader(Messages.REQUEST_INFO);
    this._reporter.report(this.getLastRequest());
  }

  groupAndPrintRequests(groupArgs) {
    this._printHeader(Messages.REQUESTS_INFO);
    this._reporter.report(this.groupRequests(...groupArgs));
  }

  sortAndPrintRequests(sortArgs) {
    this._printHeader(Messages.REQUESTS_INFO);
    this._reporter.report(this.sortRequests(...sortArgs));
  }

  arrangeAndPrintRequests(groupArgs, sortArgs) {
    this._printHeader(Messages.REQUESTS_INFO);
    this._reporter.report(this.arrangeRequests(...groupArgs, ...sortArgs));
  }

  searchAndPrintRequests(query) {
    this._printHeader(Messages.REQUESTS_INFO);
    this._reporter.report(this.searchRequests(query));
  }

  searchArrangeAndPrintRequests(query, groupArgs, sortArgs) {
    this._printHeader(Messages.REQUESTS_INFO);
    this._reporter.report(this.getRequestsBy(query, groupArgs, sortArgs));
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
      requestInfo.responseSize = this._byteSize(xhr.responseText);
      error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, xhr, requestInfo);
      this._triggerEvent(SupervisorEvents.REQUEST_END, xhr, requestInfo);
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

    const httpRequestInfo = new HttpRequestInfo(id, url, method, payload);
    httpRequestInfo.payloadSize = this._byteSize(payload);

    return httpRequestInfo;
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

  _byteSize(str) {
    return str ? new Blob([str]).size : 0;
  }

  _isExceededQuota(request) {
    return request.payloadSize > this._quota.payloadSize || request.responseSize > this._quota.responseSize || request.duration > this._quota.duration;
  }

  _printHeader(title) {
    this.print(title, Colors.INFO, true);
    this.print(Array(title.length).fill('-').join(''), Colors.INFO, true);
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

  printMultiple(...messages) {
    console.log(...messages);
  }

  report(requestOrCollection) {
    if (requestOrCollection instanceof HttpRequestInfo) {
      this.print(`${Messages.ID}: ${requestOrCollection.id}`, Colors.INFO);
      this.print(`${Messages.URL}: ${requestOrCollection.url}`, Colors.INFO);
      this.print(`${Messages.PATH}: ${requestOrCollection.path}`, Colors.INFO);
      this.print(`${Messages.METHOD}: ${requestOrCollection.method}`, Colors.INFO);
      this.printMultiple(`${Messages.PAYLOAD}:`, requestOrCollection.payload);
      this.print(`${Messages.PAYLOAD_SIZE}: ${formatBytes(requestOrCollection.payloadSize)}`, Colors.INFO);
      this.print(`${Messages.DURATION}: ${formatTime(requestOrCollection.duration)}`, Colors.INFO);
      this.printMultiple(`${Messages.RESPONSE}:`, requestOrCollection.response);
      this.print(`${Messages.RESPONSE_SIZE}: ${formatBytes(requestOrCollection.responseSize)}`, Colors.INFO);
      this.print(`${Messages.RESPONSE_STATUS}: ${requestOrCollection.responseStatus}`);
      this.print(`${Messages.IS_ERROR}: ${requestOrCollection.error ? 'Yes' : 'No'}`);
      this.print(`${Messages.ERROR_DESC}: ${requestOrCollection.errorDescription}`);
      return;
    }

    if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
      return;
    }

    if (requestOrCollection.hasGroups) {
      requestOrCollection.groups.forEach(group => {
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

    const items = requestOrCollection.items.map(item => {
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
    payloadSize: 'Payload Size (bytes)',
    duration: 'Duration (ms)',
    response: 'Response',
    responseStatus: 'Status',
    responseSize: 'Size (bytes)',
    error: 'Is Error?',
    errorDescription: 'Error Description'
  }));
export default httpSupervisor;
