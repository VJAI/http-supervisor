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
 * Converts human-readable payload size to bytes.
 */
function convertBytes(bytes) {
  return bytes;
}

/**
 * Formats time in seconds.
 */
function formatTime(time) {
  return time < 500 ? `${time} ms` : `${time/1000} s`;
}

/**
 * Converts human-readable time to milliseconds.
 */
function convertTime(time) {
  return time;
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
  ERROR_DESC: 'Error Description',
  EXCEEDS_QUOTA: 'Exceeds Quota?'
};

/**
 * The different color codes by supervisor.
 */
const Colors = {
  BRAND: '#f54284',
  SUCCESS: '#09b809',
  ERROR: '#e62e5c',
  INFO: '#4d4b46',
  WARN: '#e6b225',
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#aaa',
  MEDIUM_GRAY: '#ccc'
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
  REQUEST_ERROR: 'request-error',
  EXCEEDS_QUOTA: 'exceeds-quota'
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
class Collection {

  /**
   * The name of the collection.
   * @type {*}
   * @private
   */
  _name = null;

  /**
   * The items belongs to the collection.
   * @type {Array}
   * @private
   */
  _items = [];

  /**
   * Original items passed in ctor.
   * @type {Array}
   * @private
   */
  _originalItems = [];

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
   * Search query;
   * @type {object}
   * @private
   */
  _query = null;

  /**
   * Returns the name of the collection.
   * @returns {*}
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
   * @returns {Array<Collection>}
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
  constructor(items, name = 'root', groupedBy) {
    this._items = items;
    this._name = name;
    this._originalItems = [...items];
    this._groupedBy = groupedBy;
  }

  /**
   * Groups the collection and sub-collections by the passed arguments.
   * @param args
   * @returns {Collection}
   */
  groupBy(...args) {
    if (!args.length) {
      return this;
    }

    this._groupArgs = args;
    this._groups = [];
    this._childrenGroupedBy = args.shift();
    const obj = this._items.groupBy(this._childrenGroupedBy);

    obj.forEach((key, value) => {
      const group = new Collection(key, value, this._childrenGroupedBy);
      this._groups.push(group);
      group.groupBy(...args);
    });

    this.sortBy(...this._sortArgs);

    return this;
  }

  /**
   * Removes the grouping.
   * @returns {Collection}
   */
  ungroup() {
    this._groupArgs = [];
    this._groups = [];
    this._groupedBy = null;
    this._childrenGroupedBy = null;
    this._resetItems();
    return this;
  }

  /**
   * Sorts the collection and sub-collections by the passed arguments.
   * @param args
   * @returns {Collection}
   */
  sortBy(...args) {
    if (!args.length) {
      return this;
    }

    if (this.hasGroups) {
      this._groups.forEach(group => group.sortBy(...args));
      return this;
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

  /**
   * Removes the applied sort.
   * @returns {Collection}
   */
  removeSort() {
    this._sortArgs = [];
    this._resetItems();
    this._groups.forEach(group => group.removeSort());
    return this;
  }

  /**
   * Search the items based on the passed query.
   * @param args
   * @returns {Collection}
   */
  search(...args) {
    if (!args.length) {
      return this;
    }

    this._query = args;

    this._items = this._items.filter(r => {
      const results = [];
      args.forEach(({ field, operator, value }) => {
        const v = r[field];

        if (operator === '=') {
          results.push(v === value);
        } else if (operator === '!=') {
          results.push(v !== value);
        } else if (operator === '<') {
          results.push(v < value);
        } else if (operator === '>') {
          results.push(v > value);
        } else if (operator === '<=') {
          results.push(v <= value);
        } else if (operator === '>=') {
          results.push(v >= value);
        } else if (operator === '~') {
          results.push(typeof r[field] === 'string' && v.startsWith(value));
        } else if (operator === '^') {
          results.push(typeof r[field] === 'string' && v.endsWith(value));
        }
      });
      return results.filter(r => !r).length === 0;
    });

    this._groups.forEach(group => group.search(...args));

    return this;
  }

  /**
   * Reset the search.
   * @returns {Collection}
   */
  reset() {
    this._query = null;
    this._resetItems();
    this._groups.forEach(group => group.reset());
    return this;
  }

  /**
   * Reset the items.
   * @private
   */
  _resetItems() {
    this._items = [...this._originalItems];
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
   * @param method
   * @returns {Collection}
   */
  getRequestsByType(method) {
    return this.requests().search({ field: 'method', operator: '=', value: method });
  }

  /**
   * Returns the failed requests.
   * @returns {Collection}
   */
  getFailedRequests() {
    return this.requests().search({ field: 'error', operator: '=', value: true });
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
  searchRequests(...query) {
    const q = [...query];
    q.forEach(x => {
      const { field, value } = x;

      if (typeof value !== 'string') {
        return;
      }

      if (['payloadSize', 'responseSize'].indexOf(field) > -1) {
        x.value = convertBytes(value);
      } else if (field === 'duration') {
        x.value = convertTime(value);
      }
    });

    return this.requests().search(...query);
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
  searchAndPrintRequests(...query) {
    this._reporter.report(this.searchRequests(...query));
  }

  /**
   * Searches and then groups, sorts and finally prints the collection.
   * @param {*} query
   * @param {Array<string>} groupArgs
   * @param {Array<string>} sortArgs
   */
  searchArrangeAndPrintRequests(query, groupArgs, sortArgs) {
    this._reporter.report(this.getRequestsBy(...query, ...groupArgs, ...sortArgs));
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
      requestInfo.exceedsQuota = this._isExceededQuota(requestInfo);
      error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, xhr, requestInfo);
      requestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, requestInfo);
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
   * The start button HTML element.
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

    const linkStyle = `width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-right: solid 1px #666; background-color: #333`;

    const template = document.createRange()
      .createContextualFragment(`<div id="http-supervisor" style="position: fixed;z-index: 20000;top: 0;right: 0;text-align: center;width: 100%;">
                 <div style="display: flex;justify-content: center;align-items:center;color:#ddd;">
                   <a id="start" href="#" style="${linkStyle};border-bottom-left-radius: 5px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16" style="color: #fff;">
                       <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                   </a>
                   <a id="stop" href="#" style="${linkStyle};border-bottom-left-radius: 5px;display: none;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-stop" viewBox="0 0 16 16" style="color: #fff;">
                        <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
                      </svg>
                   </a>
                   <a id="clear" href="#" style="${linkStyle}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style="color: #fff;">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                   </a>
                   <a id="print" href="#" style="${linkStyle}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" style="color: #fff;">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                   </a>
                   <span id="calls-count" style="${linkStyle};font-size: 14px;border-bottom-right-radius: 5px;">
                     0
                   <span>
                </div>
           </div>`);

    document.body.appendChild(template);

    this.el = document.querySelector('#http-supervisor');
    [this._startButton, this._stopButton, this._clearButton, this._printButton, this._callsCountLabel] = Array.from(this.el.firstElementChild.children);
    this._eventsAndButtons = {
      start: this._startButton,
      stop: this._stopButton,
      clear: this._clearButton,
      print: this._printButton
    };
  }

  /**
   * Shows the stop and hides the start buttons.
   */
  start() {
    this._startButton.style.display = 'none';
    this._stopButton.style.display = 'flex';
  }

  /**
   * Shows the hide and hides the stop buttons.
   */
  stop() {
    this._startButton.style.display = 'flex';
    this._stopButton.style.display = 'none';
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

  /**
   * Fields to display.
   * @type {Map}
   * @private
   */
  _fieldsToDisplay = null;

  /**
   * Ctor.
   * @param {Object} fieldsConfig
   */
  constructor(fieldsConfig) {
    fieldsConfig && (this._fieldsToDisplay = new Map(Object.entries(fieldsConfig)));
  }

  /**
   * Prints the metrics summary and the requests information in console.
   * @param statsOrObj
   * @param collection
   */
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

  /**
   * Prints success message.
   * @param message
   */
  success(message) {
    this.print(message, Colors.SUCCESS);
  }

  /**
   * Prints error message.
   * @param message
   */
  error(message) {
    this.print(message, Colors.ERROR);
  }

  /**
   * Prints info message.
   * @param message
   */
  info(message) {
    this.print(message, Colors.INFO);
  }

  /**
   * Prints warning message.
   * @param message
   */
  warn(message) {
    this.print(message, Colors.WARN);
  }

  /**
   * Prints message with the passed color and styles.
   * @param message
   * @param color
   * @param bold
   * @param otherStyles
   */
  print(message, color, bold = false, otherStyles) {
    const styles = [`color: ${color}`];
    bold && styles.push(`font-weight: bold`);
    otherStyles && styles.push(otherStyles);
    console.log(`%c${message}`, styles.join(';'));
  }

  /**
   * Prints section title.
   * @param message
   */
  printTitle(message) {
    this.print(message, Colors.INFO, true, `padding: 5px 250px; background-color: ${Colors.GRAY}; color: ${Colors.WHITE};margin-bottom: 10px;`);
  }

  /**
   * Prints row.
   * @param message
   */
  printRow(message) {
    this.print(message, Colors.INFO);
  }

  /**
   * Prints field name and value.
   * @param head
   * @param value
   */
  printKeyValue(head, value) {
    if (typeof value === 'object') {
      console.log(`%c${this._getTitleWithSpaces(head)}:`, `font-weight: bold; color: ${Colors.INFO}`, value);
      return;
    }

    console.log(`%c${this._getTitleWithSpaces(head)}: %c${value}`, `font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
  }

  /**
   * Prints many fields and values in single row.
   * @param obj
   */
  printKeyValueMany(obj) {
    let msgs = [];
    let styles = [];
    Object.entries(obj).forEach(([title, value], index) => {
      msgs.push(`%c${index === 0 ? this._getTitleWithSpaces(title) : title}: %c${value}`);
      styles.push(`font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
      index < Object.keys(obj).length - 1 && styles.push(`color: ${Colors.MEDIUM_GRAY}`);
    });

    console.log(msgs.join('%c | '), ...styles);
  }

  /**
   * Prints multiple messages.
   * @param messages
   */
  printMultiple(...messages) {
    console.log(...messages);
  }

  /**
   * Prints table.
   * @param array
   * @param displayFields
   */
  table(array, displayFields) {
    array.length && console.table(array, displayFields);
  }

  /**
   * Starts a group.
   * @param group
   * @param args
   */
  groupStart(group, ...args) {
    console.group(group, ...args);
  }

  /**
   * Ends the active group.
   */
  groupEnd() {
    console.groupEnd();
  }

  /**
   * Clears the console.
   */
  clear() {
    console.clear();
  }

  /**
   * Creates empty line.
   */
  break() {
    console.log(`\n`);
  }

  destroy() {
    return 0;
  }

  _getTitleWithSpaces(title) {
    return `${title}${Array(30 - title.length).fill(' ').join('')}`;
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
      this.printKeyValue(Messages.EXCEEDS_QUOTA, requestOrCollection.exceedsQuota ? 'Yes' : 'No');
      return;
    }

    if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
      return;
    }

    if (requestOrCollection.hasGroups) {
      requestOrCollection.groups.forEach(group => {
        const { name, groupedBy, items } = group;

        if (typeof name === 'undefined') {
          this.groupStart(`- %c[${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
        } else if (typeof name === 'object') {
          this.groupStart(`${groupedBy}: %c[${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`, name);
        } else {
          this.groupStart(`${name} %c- [${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
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
}

const httpSupervisor = window.httpSupervisor = new HttpSupervisor(new HttpSupervisorWidget(), new ConsoleReporter({
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
    errorDescription: 'Error Description',
    exceedsQuota: 'Exceeds Quota?'
  }));
export default httpSupervisor;
