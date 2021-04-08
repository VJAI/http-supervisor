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
 * Return bytes in human readable format.
 */
function formatBytes(bytes, decimals) {
  if(bytes === 0) {
    return '0 bytes';
  }

  const k = 1024,
    dm = decimals || 2,
    sizes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Formats time in seconds.
 */
function formatTime(ms) {
  return ms < 500 ? `${ms} ms` : `${ms/1000} s`;
}

/**
 * Returns the byte size of the passed string.
 */
function byteSize(str) {
  return str ? new Blob([str]).size : 0;
}

/**
 * Id generator function.
 * @param seed
 * @returns {function(): number}
 */
function idGenerator(seed = 0) {
  return function() {
    return seed++;
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
  METRICS_SUMMARY: 'Metrics Summary',
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
const FAKE = new Proxy({}, { get : function() { return function()  { }; } });

/**
 * Holds the http request information.
 */
class HttpRequestInfo {

  /**
   * The request no.
   * @type {number}
   */
  id = -1;

  /**
   * The full url of the request.
   * @type {string}
   */
  url = null;

  /**
   * The path in the url excluding domain.
   * @type {string}
   */
  path = null;

  /**
   * The request type (GET, POST etc.)
   * @type {string}
   */
  method = 'GET';

  /**
   * The request payload.
   * @type {any}
   */
  payload = null;

  /**
   * The request payload size.
   * @type {number}
   */
  payloadSize = 0;

  /**
   * The request start time.
   * @type {number}
   */
  timeStart = performance.now();

  /**
   * The request end time.
   * @type {number}
   */
  timeEnd = performance.now();

  /**
   * The request duration.
   * @type {number}
   */
  duration = 0;

  /**
   * The response data.
   * @type {any}
   */
  response = null;

  /**
   * The response status.
   * @type {number}
   */
  responseStatus = null;

  /**
   * The response size.
   * @type {number}
   */
  responseSize = 0;

  /**
   * True if the request error-ed out.
   * @type {boolean}
   */
  error = false;

  /**
   * The error description.
   * @type {string}
   */
  errorDescription = null;

  /**
   * True if the request exceeds quota.
   * @type {boolean}
   */
  exceedsQuota = false;

  /**
   * Constructor.
   */
  constructor(id, url, method, payload) {
    this.id = id;
    this.url = url;
    this.path = new URL(url).pathname;
    this.method = method;
    this.payload = payload;
  }
}

/**
 * Represents a collection of records that can be groupable, sortable etc.
 */
class Node {

  /**
   * The name of the node.
   * @type {any}
   * @private
   */
  _name = null;

  /**
   * The items belongs to the node.
   * @type {Array}
   * @private
   */
  _items = [];

  /**
   * Array of sub-groups.
   * @type {Array}
   * @private
   */
  _groups = [];

  /**
   * The group arguments.
   * @type {Array}
   * @private
   */
  _groupArgs = [];

  /**
   * The field by which the collection's items are grouped by.
   * @type {string}
   * @private
   */
  _groupedBy = null;

  /**
   * The field by which the collection's groups are grouped by.
   * @type {null}
   * @private
   */
  _childrenGroupedBy = null;

  /**
   * The sort arguments.
   * @type {Array}
   * @private
   */
  _sortArgs = [];

  /**
   * Returns the name of the node.
   * @returns {any}
   */
  get name() {
    return this._name;
  }

  /**
   * Returns true if there are items.
   * @returns {boolean}
   */
  get hasItems() {
    return !!(this._items && this._items.length);
  }

  /**
   * Returns true if there are sub groups.
   * @returns {boolean}
   */
  get hasGroups() {
    return !!(this._groups && this._groups.length);
  }

  /**
   * Returns the items.
   * @returns {Array<object>}
   */
  get items() {
    return this.hasItems ? [...this._items] : null;
  }

  /**
   * Returns the sub-groups.
   * @returns {Array<Node>}
   */
  get groups() {
    return this.hasGroups ? [...this._groups] : null;
  }

  /**
   * Returns the group arguments.
   * @returns {Array}
   */
  get groupArgs() {
    return this._groupArgs;
  }

  /**
   * Returns the field by which the collection's items are grouped by.
   * @returns {string}
   */
  get groupedBy() {
    return this._groupedBy;
  }

  /**
   * Returns the sort arguments.
   * @returns {Array}
   */
  get sortArgs() {
    return this._sortArgs;
  }

  /**
   * Returns the items count.
   * @returns {number}
   */
  get count() {
    return this.hasItems ? this._items.length : 0;
  }

  /**
   * Returns the first item from the collection.
   * @returns {object}
   */
  get first() {
    return this.hasItems ? this._items[0] : null;
  }

  /**
   * Returns the last item from the collection.
   * @returns {object}
   */
  get last() {
    return this.hasItems ? this._items[this.count - 1] : null;
  }

  /**
   * Constructor.
   */
  constructor(name, items, groupedBy) {
    this._name = name;
    this._items = items;
    this._groupedBy = groupedBy;
  }

  /**
   * Groups the node and sub-nodes by the passed arguments.
   * @param args
   * @returns {Node}
   */
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

    this.sortBy(...this._sortArgs);

    return this;
  }

  /**
   * Sorts the node and sub-nodes by the passed arguments.
   * @param args
   * @returns {*}
   */
  sortBy(...args) {
    if (!args.length) {
      return;
    }

    if (this.hasGroups) {
      this._groups.forEach(group => group.sortBy(...args));
      return;
    }

    this._items.sort((r1, r2) => {
      for (let i = 0; i < args.length; i++) {
        const { field, dir } = args[i], v1 = r1[field], v2 = r2[field];
        if (v1 < v1) return dir === 'asc' ? -1 : 1;
        if (v1 > v2) return dir === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return this;
  }

  search(args) {

  }
}

/**
 * Represents a collection of records.
 */
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
   * @type {object}
   * @private
   */
  _widget = null;

  /**
   * The reporter that displays the metrics and requests info captured in a particular period.
   * @type {object}
   * @private
   */
  _reporter = null;

  /**
   * Array of domains to monitor.
   * @type {Set}
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
   * @type {object}
   * @private
   */
  _quota = {
    maxPayloadSize: Infinity,
    maxResponseSize: Infinity,
    maxDuration: Infinity
  };

  /**
   * Display each completed request.
   * @type {boolean}
   * @private
   */
  _traceEachRequest = true;

  /**
   * Display failed request.
   * @type {boolean}
   * @private
   */
  _alertOnError = true;

  /**
   * Display request that exceeded quota.
   * @type {boolean}
   * @private
   */
  _alertOnExceedQuota = true;

  /**
   * Default grouping parameters.
   * @type {string[]}
   * @private
   */
  _defaultGroupBy = ['path', 'method'];

  /**
   * Default sorting parameters.
   * @type {*[]}
   * @private
   */
  _defaultSortBy = [{ field: 'id', dir: 'asc' }];

  /**
   * Collection of captured requests.
   * @type {Set}
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
   * @type {function}
   * @private
   */
  _id = idGenerator(1);

  /**
   * The events and their associated handlers store.
   * @type {Map}
   * @private
   */
  _eventsHandlersMap = new Map();

  /**
   * XMLHttpRequest native open method.
   * @type {function}
   * @private
   */
  _nativeOpen = XMLHttpRequest.prototype.open;

  /**
   * XMLHttpRequest native send method.
   * @type {function}
   * @private
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
   * Setting `true` will print each request.
   * @param {boolean} value
   */
  set traceEachRequest(value) {
    this._traceEachRequest = value;
  }

  /**
   * Setting `true` will print error requests.
   * @param {boolean} value
   */
  set alertOnError(value) {
    this._alertOnError = value;
  }

  /**
   * Setting `true` will print requests that exceeds quota.
   * @param {boolean} value
   */
  set alertOnExceedQuota(value) {
    this._alertOnExceedQuota = value;
  }

  /**
   * Re-set the quota.
   * @param {object} value
   */
  set quota(value) {
    this._quota = {...this._quota, ...value};
  }

  /**
   * Constructor.
   * @param {object} widget
   * @param {object} reporter
   */
  constructor(widget, reporter) {
    this._widget = widget || FAKE;
    this._reporter = reporter || FAKE;
  }

  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   * @param {Array<string>} [config.domains] Array of domains to monitor.
   * @param {boolean} [config.renderUI] Passing `true` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing `true` will print each request.
   * @param {boolean} [config.alertOnError] Passing `true` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing `true` will print requests that exceeds quota.
   * @param {object} [config.quota] Request Quota.
   * @param {object} [config.defaultGroupBy] Default grouping parameters.
   * @param {object} [config.defaultSortBy] Default sorting parameters.
   */
  init(config = {}) {
    if (this._status !== SupervisorStatus.NotReady) {
      throw new Error(`Supervisor is already configured!`)
    }

    const {
      domains,
      renderUI,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      defaultGroupBy,
      defaultSortBy
    } = config;

    Array.isArray(domains) && (this._domains = new Set(domains));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);
    typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
    typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
    typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
    typeof quota === 'object' && (this._quota = {...this._quota, ...quota});
    Array.isArray(defaultGroupBy) && (this._defaultGroupBy = defaultGroupBy);
    Array.isArray(defaultSortBy) && (this._defaultSortBy = defaultSortBy);

    this.on(SupervisorEvents.REQUEST_END, (supervisor, xhr, request) => {
      if (this._traceEachRequest) {
        this._reporter.report(request);
        return;
      }

      if (this._alertOnError && request.error === true) {
        this._reporter.report(request);
        return;
      }

      if (this._alertOnExceedQuota && this._isExceededQuota(request)) {
        this._reporter.report(request);
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

    const collection = new Collection([...this._requests])
      .groupBy(...this._defaultGroupBy)
      .sortBy(...this._defaultSortBy);

    this._reporter.report({
      totalRequests: this.totalRequests,
      getRequestsCount: this.getRequestsByType('GET').count,
      postRequestsCount: this.getRequestsByType('POST').count,
      putRequestsCount: this.getRequestsByType('PUT').count,
      deleteRequestsCount: this.getRequestsByType('DELETE').count,
      failedRequests: this.getFailedRequests().count,
      requestsExceededQuota: this.getRequestsExceededQuota().count,
      maxPayloadSize: this.maxPayloadSize(),
      maxResponseSize: this.maxResponseSize(),
      maxDuration: this.maxDuration(),
      totalPayloadSize: this.getTotalPayloadSize(),
      totalResponseSize: this.getTotalResponseSize()
    }, collection);
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
      this._eventsHandlersMap.set(eventName, new Set());
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

  /**
   * Retires the supervisor.
   */
  retire() {
    this._undoMonkeyPatch();
    this._widget.destroy();
    this._reporter.destroy &&  this._reporter.destroy();
    this._triggerEvent(SupervisorEvents.RETIRE);
    this._eventsHandlersMap = {};
    this._status = SupervisorStatus.Retired;
  }

  /**
   * Displays the passed collection using the reporter.
   * @param {Collection} collection
   */
  report(collection) {
    this._reporter.report(collection);
  }

  /**
   * Returns the captured requests.
   * @returns {Collection}
   */
  requests() {
    return new Collection([...this._requests]);
  }

  /**
   * Filters the requests based on the passed type and returns as collection.
   * TODO: Need refactoring
   * @param method
   * @returns {Collection}
   */
  getRequestsByType(method) {
    return new Collection([...this._requests].filter(r => r.method === method));
  }

  /**
   * Returns the failed requests.
   * TODO: Need refactoring
   * @returns {Collection}
   */
  getFailedRequests() {
    const failedRequests = [...this._requests].filter(r => r.error === true);
    return new Collection(failedRequests);
  }

  /**
   * Returns the last failed request.
   * @returns {HttpRequestInfo}
   */
  getLastFailedRequest() {
    return this.getFailedRequests().last;
  }

  /**
   * Returns the last request.
   * @returns {HttpRequestInfo}
   */
  getLastRequest() {
    return this.requests().last;
  }

  /**
   * Returns the requests that exceeded the quota.
   * TODO: Need refactoring
   * @returns {Collection}
   */
  getRequestsExceededQuota() {
    return new Collection([...this._requests].filter(r => this._isExceededQuota(r)));
  }

  /**
   * Groups the requests based on the passed arguments.
   * @param {...string} groupArgs
   * @returns {Collection}
   */
  groupRequests(...groupArgs) {
    return this.requests().groupBy(...groupArgs);
  }

  /**
   * Sorts the requests based on the passed arguments.
   * @param {...string} sortArgs
   * @returns {Collection}
   */
  sortRequests(...sortArgs) {
    return this.requests().sortBy(...sortArgs);
  }

  /**
   * Groups and sorts the requests.
   * @param {Array<string>} groupArgs
   * @param {Array<string>} sortArgs
   * @returns {Collection}
   */
  arrangeRequests(groupArgs, sortArgs) {
    return this.groupRequests(...groupArgs).sortBy(...sortArgs);
  }

  /**
   * Filters requests based on the passed query.
   * @param {string} query
   * @returns {Collection}
   */
  searchRequests(query) {
    return this.requests.search(query);
  }

  /**
   * Get requests matches the query; group and sort the results based on the passed paramaters.
   * @param {*} query
   * @param {Array<string>} groupArgs
   * @param {Array<string>} sortArgs
   * @returns {Collection}
   */
  getRequestsBy(query, groupArgs, sortArgs) {
    return this.searchRequests(query).groupBy(...groupArgs).sortBy(...sortArgs);
  }

  /**
   * Returns the total payload size summing all requests.
   * @returns {number}
   */
  getTotalPayloadSize() {
    return [...this._requests].reduce((a, b) => a + b.payloadSize, 0);
  }

  /**
   * Returns the total response size summing all requests.
   * @returns {number}
   */
  getTotalResponseSize() {
    return [...this._requests].reduce((a, b) => a + b.responseSize, 0);
  }

  /**
   * Returns the max payload size of the requests.
   * @returns {number}
   */
  maxPayloadSize() {
    return Math.max(...[...this._requests].map(r => r.payloadSize));
  }

  /**
   * Returns the max response size of the requests.
   * @returns {number}
   */
  maxResponseSize() {
    return Math.max(...[...this._requests].map(r => r.responseSize));
  }

  /**
   * Returns the max duration.
   * @returns {number}
   */
  maxDuration() {
    return Math.max(...[...this._requests].map(r => r.duration));
  }

  /**
   * Prints all the requests in the passed reporter.
   */
  printRequests() {
    this._reporter.report(this.requests());
  }

  /**
   * Prints the requests matched the passed method (GET, POST etc.).
   * @param {string} method
   */
  printRequestsByType(method) {
    this._reporter.report(this.getRequestsByType(method));
  }

  /**
   * Prints failed requests.
   */
  printFailedRequests() {
    this._reporter.report(this.getFailedRequests());
  }

  /**
   * Prints the last failed request.
   */
  printLastFailedRequest() {
    this._reporter.report(this.getLastFailedRequest());
  }

  /**
   * Prints the last request.
   */
  printLastRequest() {
    this._reporter.report(this.getLastRequest());
  }

  /**
   * Groups and prints the requests.
   * @param {...string} groupArgs
   */
  groupAndPrintRequests(...groupArgs) {
    this._reporter.report(this.groupRequests(...groupArgs));
  }

  /**
   * Sorts and prints the requests.
   * @param {...string} sortArgs
   */
  sortAndPrintRequests(...sortArgs) {
    this._reporter.report(this.sortRequests(...sortArgs));
  }

  /**
   * Groups, sorts and prints the requests.
   * @param {Array<string>} groupArgs
   * @param {Array<string>} sortArgs
   */
  arrangeAndPrintRequests(groupArgs, sortArgs) {
    this._reporter.report(this.arrangeRequests(groupArgs, sortArgs));
  }

  /**
   * Searches and prints the requests matches the search query.
   * @param {*} query
   */
  searchAndPrintRequests(query) {
    this._reporter.report(this.searchRequests(query));
  }

  /**
   * Searches and then groups, sorts and finally prints the collection.
   * @param {*} query
   * @param {Array<string>} groupArgs
   * @param {Array<string>} sortArgs
   */
  searchArrangeAndPrintRequests(query, groupArgs, sortArgs) {
    this._reporter.report(this.getRequestsBy(query, groupArgs, sortArgs));
  }

  /**
   * Render the UI.
   * @private
   */
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
   * Monkey patches XHR's open and send methods.
   * @private
   */
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

  /**
   * Revert the monkey patching.
   * @private
   */
  _undoMonkeyPatch() {
    XMLHttpRequest.prototype.open = this._nativeOpen;
    XMLHttpRequest.prototype.send = this._nativeSend;
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
      requestInfo.responseSize = byteSize(xhr.responseText);
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
    httpRequestInfo.payloadSize = byteSize(payload);

    return httpRequestInfo;
  }

  /**
   * Returns `true` is the passed event is supported.
   * @private
   */
  _supportEvent(eventName) {
    return Object.values(SupervisorEvents).indexOf(eventName) > -1;
  }

  /**
   * Invokes the handlers registered for the event.
   * @private
   */
  _triggerEvent(eventName, ...args) {
    const handlers = this._eventsHandlersMap.get(eventName);
    if (!handlers) {
      return;
    }
    [...handlers].forEach(handler => handler(this, ...args));
  }

  /**
   * Returns true if the passed request exceeds the quota.
   * @private
   */
  _isExceededQuota(request) {
    return request.payloadSize > this._quota.payloadSize || request.responseSize > this._quota.responseSize || request.duration > this._quota.duration;
  }
}

/**
 * Represents the widget that helps to control the supervisor.
 */
class HttpSupervisorWidget {

  /**
   * The container or root element.
   */
  el = null;

  /**
   * The start button HTML element.
   */
  _startButton = null;

  /**
   * The stop button HTML element.
   */
  _stopButton = null;

  /**
   * The clear button HTML element.
   */
  _clearButton = null;

  /**
   * The print button HTML element.
   */
  _printButton = null;

  /**
   * The label that displays the calls count.
   */
  _callsCountLabel = null;

  /**
   * Events and buttons map.
   */
  _eventsAndButtons = null;

  /**
   * Renders the UI.
   */
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

  /**
   * Disables the stop and enables the start buttons.
   */
  start() {
    this._startButton.disabled = true;
    this._stopButton.disabled = false;
  }

  /**
   * Disables the start and enables the stop buttons.
   */
  stop() {
    this._stopButton.disabled = true;
    this._startButton.disabled = false;
  }

  /**
   * Update the calls counter label.
   * @param count
   */
  updateCalls(count) {
    this._callsCountLabel.innerText = count.toString();
  }

  /**
   * Shows the widget.
   */
  show() {
    this.el.style.display = 'none';
  }

  /**
   * Hides the widget.
   */
  hide() {
    this.el.style.display = 'flex';
  }

  /**
   * Subscribes to the corresponding button click event.
   */
  subscribe(evt, handler) {
    this._eventsAndButtons[evt].addEventListener('click', handler);
  }

  /**
   * Destroys the element.
   */
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

  print(message, color, bold = false, otherStyles) {
    const styles = [`color: ${color}`];
    bold && styles.push(`font-weight: bold`);
    otherStyles && styles.push(otherStyles);
    console.log(`%c${message}`, styles.join(';'));
  }

  printTitle(message) {
    this.print(message, Colors.INFO, true, `padding: 5px 250px; background-color: #aaa; color: #fff;margin-bottom: 10px;`);
  }

  printRow(message) {
    this.print(message, Colors.INFO);
  }

  printKeyValue(head, value) {
    if (typeof value === 'object') {
      console.log(`%c${this._getTitleWithSpaces(head)}:`, `font-weight: bold; color: ${Colors.INFO}`, value);
      return;
    }

    console.log(`%c${this._getTitleWithSpaces(head)}: %c${value}`, `font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
  }

  _getTitleWithSpaces(title) {
    return `${title}${Array(30 - title.length).fill(' ').join('')}`;
  }

  printKeyValueMany(obj) {
    let msgs = [];
    let styles = [];
    Object.entries(obj).forEach(([title, value], index) => {
      msgs.push(`%c${index === 0 ? this._getTitleWithSpaces(title) : title}: %c${value}`);
      styles.push(`font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
      index < Object.keys(obj).length - 1 && styles.push(`color: #ccc`);
    });

    console.log(msgs.join('%c | '), ...styles);
  }

  printMultiple(...messages) {
    console.log(...messages);
  }

  _reportStats({
    totalRequests,
    getRequestsCount,
    postRequestsCount,
    putRequestsCount,
    deleteRequestsCount,
    failedRequests,
    requestsExceededQuota,
    maxPayloadSize,
    maxResponseSize,
    maxDuration,
    totalPayloadSize,
    totalResponseSize
  }) {
    this.printKeyValueMany({
      [Messages.TOTAL_REQUESTS]: totalRequests,
      GET: getRequestsCount,
      POST: postRequestsCount,
      PUT: putRequestsCount,
      DELETE: deleteRequestsCount
    });
    this.printKeyValue(Messages.FAILED_REQUESTS, failedRequests);
    this.printKeyValue(Messages.REQUESTS_EXCEEDED_QUOTA, requestsExceededQuota);
    this.printKeyValue(Messages.MAX_PAYLOAD_SIZE, formatBytes(maxPayloadSize));
    this.printKeyValue(Messages.MAX_RESPONSE_SIZE, formatBytes(maxResponseSize));
    this.printKeyValue(Messages.MAX_DURATION, formatTime(maxDuration));
    this.printKeyValue(Messages.TOTAL_PAYLOAD_SIZE, formatBytes(totalPayloadSize));
    this.printKeyValue(Messages.TOTAL_RESPONSE_SIZE, formatBytes(totalResponseSize));
  }

  _reportObject(requestOrCollection) {
    if (requestOrCollection instanceof HttpRequestInfo) {
      this.printKeyValue(Messages.ID, requestOrCollection.id);
      this.printKeyValue(Messages.URL, requestOrCollection.url);
      this.printKeyValue(Messages.PATH, requestOrCollection.path);
      this.printKeyValue(Messages.METHOD, requestOrCollection.method);
      this.printKeyValue(Messages.PAYLOAD, requestOrCollection.payload || '-');
      this.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(requestOrCollection.payloadSize));
      this.printKeyValue(Messages.DURATION, formatTime(requestOrCollection.duration));
      this.printKeyValue(Messages.RESPONSE, requestOrCollection.response);
      this.printKeyValue(Messages.RESPONSE_SIZE, formatBytes(requestOrCollection.responseSize));
      this.printKeyValue(Messages.RESPONSE_STATUS, requestOrCollection.responseStatus);
      this.printKeyValue(Messages.IS_ERROR, requestOrCollection.error ? 'Yes' : 'No');
      this.printKeyValue(Messages.ERROR_DESC, requestOrCollection.errorDescription || '-');
      return;
    }

    if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
      return;
    }

    if (requestOrCollection.hasGroups) {
      requestOrCollection.groups.forEach(group => {
        const { name, groupedBy, items } = group;

        if (typeof name === 'undefined') {
          this.groupStart(`- %c[${items.length}]`, 'font-size: 0.6rem; color: #aaa;');
        } else if (typeof name === 'object') {
          this.groupStart(`${groupedBy}: %c[${items.length}]`, 'font-size: 0.6rem; color: #aaa;', name);
        } else {
          this.groupStart(`${name} %c- [${items.length}]`, 'font-size: 0.6rem; color: #aaa;');
        }

        this._reportObject(group);
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
  }

  report(statsOrObj, collection) {
    if (arguments.length === 1) {
      if (statsOrObj instanceof HttpRequestInfo || statsOrObj instanceof Collection) {
        this.printTitle(statsOrObj instanceof HttpRequestInfo ? Messages.REQUEST_INFO : Messages.REQUESTS_INFO);
        this._reportObject(statsOrObj);
      } else {
        this.printTitle(Messages.METRICS_SUMMARY);
        this._reportStats(statsOrObj);
      }

      return;
    }

    this.printTitle(Messages.METRICS_SUMMARY);
    this._reportStats(statsOrObj);
    this.break();
    this.printTitle(Messages.REQUESTS_INFO);
    this._reportObject(collection);
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
