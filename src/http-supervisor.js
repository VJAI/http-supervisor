import HttpRequestInfo from './http-request-info';
import Collection      from './collection';
import EventEmitter    from './event.emitter';
import {
  SupervisorStatus,
  SupervisorEvents,
  Messages,
  SUPERVISOR_QUERY_KEY,
  FAKE,
  XHR_METADATA_KEY,
  InitiatorType,
  STORAGE_KEY,
  REQUEST_TYPE,
  SEARCH_OPERATOR,
  FILE_TYPE, Colors
}                      from './constants';
import {
  idGenerator,
  convertBytes,
  convertTime,
  byteSize,
  isAbsolute,
  formatBytes,
  formatTime,
  matchCriteria,
  isJsonResponse,
  safeParse,
  matchesGlob,
  copyText,
  mapToJson, readValue, trimEndSlash, timeout, poolColors
}                      from './util';

/**
 * Supervises HTTP Network Traffic. Helps to identify duplicate requests. Also helps to query, group,
 * sort, export, visualize requests and much more.
 */
export default class HttpSupervisor {

  static get defaultConfig() {
    return {
      include: null,
      exclude: null,
      renderUI: true,
      quota: {
        maxPayloadSize: 10240, // 10kb
        maxResponseSize: 10240, // 10kb
        maxDuration: 1000 // 1s
      },
      silent: false,
      traceEachRequest: true,
      alertOnError: true,
      alertOnExceedQuota: true,
      alertOnRequestStart: true,
      groupBy: ['pathQuery', 'method'],
      sortBy: [{ field: 'id', dir: 'asc' }],
      usePerformance: true,
      monkeyPatchFetch: true,
      loadChart: true,
      keyboardEvents: true,
      persistConfig: true,
      lockConsole: false,
      urlConfig: {},
      stopWatch: false
    }
  }

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
   * Event emitter.
   * @type {EventEmitter}
   * @private
   */
  _eventEmitter = null;

  /**
   * The url that matches these patterns will be captured.
   * @type {Set}
   * @private
   */
  _include = HttpSupervisor.defaultConfig.include;

  /**
   * The url that matches these patterns will be ignored.
   * @type {Set}
   * @private
   */
  _exclude = HttpSupervisor.defaultConfig.exclude;

  /**
   * True to render UI.
   * @type {boolean}
   * @private
   */
  _renderUI = HttpSupervisor.defaultConfig.renderUI;

  /**
   * Request Quota.
   * @type {object}
   * @private
   */
  _quota = HttpSupervisor.defaultConfig.quota;

  /**
   * True to not display any messages in console or the passed reporter.
   * @type {boolean}
   * @private
   */
  _silent = HttpSupervisor.defaultConfig.silent;

  /**
   * Displays each completed request.
   * @type {boolean}
   * @private
   */
  _traceEachRequest = HttpSupervisor.defaultConfig.traceEachRequest;

  /**
   * Displays failed request.
   * @type {boolean}
   * @private
   */
  _alertOnError = HttpSupervisor.defaultConfig.alertOnError;

  /**
   * Displays requests that exceeded quota.
   * @type {boolean}
   * @private
   */
  _alertOnExceedQuota = HttpSupervisor.defaultConfig.alertOnExceedQuota;

  /**
   * True to alert on request start.
   * @type {boolean}
   * @private
   */
  _alertOnRequestStart = HttpSupervisor.defaultConfig.alertOnRequestStart;

  /**
   * Grouping parameters used in displaying requests.
   * @type {string[]}
   * @private
   */
  _groupBy = HttpSupervisor.defaultConfig.groupBy;

  /**
   * Sorting parameters used in displaying requests.
   * @type {*[]}
   * @private
   */
  _sortBy = HttpSupervisor.defaultConfig.sortBy;

  /**
   * Uses `performance.getEntriesByType` for capturing accurate duration and payload size.
   * @type {boolean}
   * @private
   */
  _usePerformance = HttpSupervisor.defaultConfig.usePerformance;

  /**
   * True to monkey patch fetch requests.
   * @type {boolean}
   * @private
   */
  _monkeyPatchFetch = HttpSupervisor.defaultConfig.monkeyPatchFetch;

  /**
   * True to use `chart.js` library for data visualization.
   * @type {boolean}
   * @private
   */
  _loadChart = HttpSupervisor.defaultConfig.loadChart;

  /**
   * True to use keyboard events for operating control panel.
   * @type {boolean}
   * @private
   */
  _keyboardEvents = HttpSupervisor.defaultConfig.keyboardEvents;

  /**
   * True to persist config in local storage.
   * @type {boolean}
   * @private
   */
  _persistConfig = HttpSupervisor.defaultConfig.persistConfig;

  /**
   * True to lock dev console.
   * @type {boolean}
   * @private
   */
  _lockConsole = HttpSupervisor.defaultConfig.lockConsole;

  /**
   * The display labels for urls and other configuration for respective urls.
   * @type {object}
   * @private
   */
  _urlConfig = HttpSupervisor.defaultConfig.urlConfig;

  /**
   * True to display stop watch in the widget.
   * @type {boolean}
   * @private
   */
  _stopWatch = HttpSupervisor.defaultConfig.stopWatch;

  /**
   * Collection of captured requests.
   * @type {Set}
   * @private
   */
  _requests = new Set();

  /**
   * Collection of recorded sessions.
   * @type {Map}
   * @private
   */
  _sessions = new Map();

  /**
   * Collection of watches.
   * @type {Map}
   * @private
   */
  _watches = new Map();

  /**
   * Current status of the supervisor.
   * @type {string}
   * @private
   */
  _status = SupervisorStatus.NotReady;

  /**
   * Current on-going requests count.
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
   * The id generator function for watches.
   * @type {function}
   * @private
   */
  _watchId = idGenerator(1);

  /**
   * The id generator function for sessions.
   * @type {function}
   * @private
   */
  _sessionId = idGenerator(1);

  /**
   * The current active session id.
   * @type {number}
   * @private
   */
  _activeSessionId = null;

  /**
   * Native `fetch` method.
   * @type {function}
   * @private
   */
  _nativeFetch = fetch;

  /**
   * XMLHttpRequest native `open` method.
   * @type {function}
   * @private
   */
  _nativeOpen = XMLHttpRequest.prototype.open;

  /**
   * XMLHttpRequest native `send` method.
   * @type {function}
   * @private
   */
  _nativeSend = XMLHttpRequest.prototype.send;

  /**
   * XMLHttpRequest native `setRequestHeader` method.
   * @type {function}
   * @private
   */
  _nativeSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

  /**
   * Helps to find duplicates.
   * @type {Array}
   * @private
   */
  _callsSummary = [];

  /**
   * Returns `true` if busy.
   * @return {boolean}
   */
  get busy() {
    return this._status === SupervisorStatus.Busy;
  }

  /**
   * Returns the current status.
   * @returns {string}
   */
  get status() {
    return this._status;
  }

  /**
   * Returns the total no. of requests of the current session.
   * @return {number}
   */
  get totalRequests() {
    return this._requests.size;
  }

  /**
   * Returns the url patters to monitor.
   * @returns {Array}
   */
  get include() {
    return this._include ? [...this._include] : null;
  }

  /**
   * Set the url patterns to monitor.
   */
  set include(value) {
    this._include = new Set(value || []);
    this._updateStorage();
  }

  /**
   * Returns the url patters to ignore.
   * @returns {Array}
   */
  get exclude() {
    return this._exclude ? [...this._exclude] : null;
  }

  /**
   * Set the url patters to ignore.
   */
  set exclude(value) {
    this._exclude = new Set(value || []);
    this._updateStorage();
  }

  /**
   * Returns `true` if ui is required.
   * @returns {boolean}
   */
  get renderUI() {
    return this._renderUI;
  }

  /**
   * Shows/hides UI if `renderUI` is set as `true`.
   */
  set displayUI(value) {
    if (value) {
      this._widget.show();
    } else {
      this._widget.hide();
    }
  }

  /**
   * Returns true if no outputs in console.
   * @return {boolean}
   */
  get silent() {
    return this._silent;
  }

  /**
   * Enables/disables the silent flag.
   * @param value
   */
  set silent(value) {
    this._silent = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if trace each request is set.
   * @returns {boolean}
   */
  get traceEachRequest() {
    return this._traceEachRequest;
  }

  /**
   * Setting `true` will print each completed request in console or the passed reporter.
   * @param {boolean} value
   */
  set traceEachRequest(value) {
    this._traceEachRequest = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if alert on error is enabled.
   * @returns {boolean}
   */
  get alertOnError() {
    return this._alertOnError;
  }

  /**
   * Setting `true` will print error requests.
   * @param {boolean} value
   */
  set alertOnError(value) {
    this._alertOnError = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if printing requests that exceeds quota is enabled.
   * @returns {boolean}
   */
  get alertOnExceedQuota() {
    return this._alertOnExceedQuota;
  }

  /**
   * Setting `true` will print requests that exceeds quota.
   * @param {boolean} value
   */
  set alertOnExceedQuota(value) {
    this._alertOnExceedQuota = value;
    this._updateStorage();
  }

  /**
   * Returns true if printing at request start is enabled.
   */
  get alertOnRequestStart() {
    return this._alertOnRequestStart;
  }

  /**
   * Setting `true` prints the request start message.
   * @param value
   */
  set alertOnRequestStart(value) {
    this._alertOnRequestStart = value;
    this._updateStorage();
  }

  /**
   * Returns the defined quota.
   * @returns {object}
   */
  get quota() {
    return { ...this._quota };
  }

  /**
   * Re-set the quota.
   * @param {object} value
   */
  set quota(value) {
    this._quota = { ...this._quota, ...value };
    this._updateStorage();
  }

  /**
   * Returns the group parameters.
   * @returns {string[]}
   */
  get groupBy() {
    return [...this._groupBy];
  }

  /**
   * Sets the group parameters.
   * @param value
   */
  set groupBy(value) {
    this._groupBy = value;
    this._updateStorage();
  }

  /**
   * Returns the sort parameters.
   * @returns {*[]}
   */
  get sortBy() {
    return [...this._sortBy];
  }

  /**
   * Set the sort parameters.
   * @param value
   */
  set sortBy(value) {
    this._sortBy = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if performance API is enabled for capturing accurate info.
   * @returns {boolean}
   */
  get usePerformance() {
    return this._usePerformance;
  }

  /**
   * Enable/Disable performance API.
   * @param value
   */
  set usePerformance(value) {
    this._usePerformance = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if capturing fetch API is enabled.
   * @returns {boolean}
   */
  get monkeyPatchFetch() {
    return this._monkeyPatchFetch;
  }

  /**
   * Enable/Disable intercepting fetch API.
   * @param value
   */
  set monkeyPatchFetch(value) {
    this._monkeyPatchFetch = value;
    this._updateStorage();
  }

  /**
   * Returns `true` if visualization is enabled.
   * @returns {boolean}
   */
  get loadChart() {
    return this._loadChart;
  }

  /**
   * Returns `true` if keyboard events enabled.
   * @return {boolean}
   */
  get keyboardEvents() {
    return this._keyboardEvents;
  }

  /**
   * Enables/disables keyboard events.
   * @param value
   */
  set keyboardEvents(value) {
    this._keyboardEvents = value;
    this._updateStorage();
  }

  /**
   * Returns the value of persist config.
   * @returns {boolean}
   */
  get persistConfig() {
    return this._persistConfig;
  }

  /**
   * Sets the persist config.
   * @param value
   */
  set persistConfig(value) {
    this._persistConfig = value;
    !value && this.clearStore();
  }

  /**
   * Returns the lock console status.
   * @returns {boolean}
   */
  get lockConsole() {
    return this._lockConsole;
  }

  /**
   * Locks console or not.
   * @param value
   */
  set lockConsole(value) {
    this._lockConsole = value;
    this._updateStorage();

    if (!this._reporter) {
      return;
    }

    if (value === true && this._reporter.acquireLock) {
      this._reporter.acquireLock();
    }

    if (value === false && this._reporter.releaseLock) {
      this._reporter.releaseLock();
    }
  }

  /**
   * Returns the current status of stop watch.
   * @returns {boolean}
   */
  get stopWatch() {
    return this._stopWatch;
  }

  /**
   * Sets the status of stop watch.
   * @param {boolean} value
   */
  set stopWatch(value) {
    this._stopWatch = value;
    this._updateStorage();
  }

  /**
   * Returns the current on-going calls count.
   * @returns {number}
   */
  get onGoingCallsCount() {
    return this._callsCount;
  }

  /**
   * Constructor.
   * @param {object} widget The control panel.
   * @param {object} reporter The reporter that's used for displaying requests info and charts.
   */
  constructor(widget, reporter) {
    this._widget = widget || FAKE;
    this._reporter = reporter || FAKE;
    this._eventEmitter = new EventEmitter();

    this.init = this.init.bind(this);
    this.retire = this.retire.bind(this);

    window.addEventListener('init-supervisor', this.init, false);
    window.addEventListener('retire-supervisor', this.retire, false);
  }

  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   * @param {Array<string>} [config.include] Array of url glob patterns to monitor.
   * @param {Array<string>} [config.exclude] Array of url glob patterns to ignore.
   * @param {boolean} [config.renderUI] Passing `true` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing `true` will print each request.
   * @param {boolean} [config.alertOnError] Passing `true` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing `true` will print requests that exceeds quota.
   * @param {boolean} [config.alertOnRequestStart] True to alert on request start.
   * @param {object} [config.quota] Request Quota.
   * @param {Array} [config.groupBy] Grouping parameters used in displaying requests.
   * @param {Array} [config.sortBy] Sorting parameters used in displaying requests.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.loadChart] True to use chart.js library for data visualization.
   * @param {boolean} [config.keyboardEvents] True to use keyboard events for operating control panel.
   * @param {boolean} [config.persistConfig] True to persist config in local storage.
   * @param {boolean} [config.lockConsole] True to lock console.
   * @param {object} [config.watches] Collection of watches.
   * @param {object} [config.urlConfig] User friendly labels with dynamic values for urls.
   * @param {boolean} [loadConfigFromStore = true] True to load the config from local storage.
   */
  init(config = {}, loadConfigFromStore = true) {
    if (this._status !== SupervisorStatus.NotReady) {
      return;
    }

    const storedConfig = loadConfigFromStore && localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {};
    this.setConfig({ ...config, ...storedConfig });

    // Listen to the `request-end` event to display request details based on the properties.
    this.on(SupervisorEvents.REQUEST_END, (request) => {
      if (this._silent) {
        return;
      }

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

      const watchMatches = [...this._watches.values()].filter(w => this._matchWatch(w, request));
      if (watchMatches.length) {
        this._reporter.report(request);
      }
    });

    // Render the widget, initialize the reporter and start monitoring.
    this._render();
    this._monkeyPatch();
    this._status = SupervisorStatus.Idle;
    this._reporter.init(this);
    this.start();
    this._triggerEvent(SupervisorEvents.READY);
  }

  /**
   * Starts network monitoring.
   */
  start() {
    if (this._status === SupervisorStatus.Busy) {
      return;
    }

    if (this._status === SupervisorStatus.NotReady) {
      this.init();
      return;
    }

    this._status = SupervisorStatus.Busy;
    this._reporter.printStatusMessage(Messages.ACTIVE);
    this._triggerEvent(SupervisorEvents.START);
  }

  /**
   * Stops network monitoring.
   */
  stop() {
    if (this._status === SupervisorStatus.Idle) {
      return;
    }

    this._status = SupervisorStatus.Idle;
    this._reporter.printStatusMessage(Messages.SLEEP);
    this._triggerEvent(SupervisorEvents.STOP);
  }

  /**
   * Clears the requests log.
   */
  clear() {
    this._reporter.clear();
    this._requests.clear();
    this._callsSummary = [];
    this._triggerEvent(SupervisorEvents.CLEAR);
  }

  /**
   * Subscribes to the passed event.
   * @param {string} eventName The event name.
   * @param {function} handler The event handler.
   */
  on(eventName, handler) {
    this._eventEmitter.on(eventName, handler);
  }

  /**
   * Un-subscribes from the passed event.
   * @param {string} eventName The event name.
   * @param {function} handler The event handler.
   */
  off(eventName, handler) {
    this._eventEmitter.off(eventName, handler);
  }

  /**
   * Retires the supervisor.
   */
  retire(clearStore = false) {
    this.stop();
    this._undoMonkeyPatch();
    this._widget.destroy();
    this._widget = null;
    this._reporter.destroy && this._reporter.destroy();
    this._reporter = null;
    this._triggerEvent(SupervisorEvents.RETIRE);
    this._eventEmitter.destroy();
    this._eventEmitter = null;
    this._watches = null;
    this._sessions = null;
    clearStore && this.clearStore();
    window.removeEventListener('init-supervisor', this.init);
    window.removeEventListener('retire-supervisor', this.retire);
    window.http = null;
    this._status = SupervisorStatus.Retired;
  }

  /**
   * Returns request for the passed arg (id/url).
   * @param {number} arg The request arg.
   * @returns {HttpRequestInfo}
   */
  get(arg) {
    if (typeof arg === 'number') {
      return [...this._requests].find(r => r.id === arg);
    }

    if (typeof arg === 'string') {
      return this.query(arg).first;
    }

    return this.first();
  }

  /**
   * Returns the first request.
   * @returns {HttpRequestInfo}
   */
  first() {
    return this.query().first;
  }

  /**
   * Returns the last request.
   * @returns {HttpRequestInfo}
   */
  last() {
    return this.query().last;
  }

  /**
   * Returns the last completed request.
   * @returns {HttpRequestInfo}
   */
  lastCompleted() {
    return this.sort({ field: 'timeEnd', order: 'desc' }).first;
  }

  /**
   * Returns the failed requests.
   * @param {Collection} [collection]
   * @returns {Collection}
   */
  failed(collection) {
    const query = { field: 'error', operator: SEARCH_OPERATOR.EQUALS, value: true };
    return collection ? collection.search(query) : this.query(query);
  }

  /**
   * Returns the requests that exceeded the quota.
   * @param {Collection} [collection]
   * @returns {Collection}
   */
  exceeded(collection) {
    const query = { field: 'exceedsQuota', operator: SEARCH_OPERATOR.EQUALS, value: true };
    return collection ? collection.search(query) : this.query(query);
  }

  /**
   * Returns the last failed request.
   * @param {Collection} [collection]
   * @returns {HttpRequestInfo}
   */
  lastFailed(collection) {
    return this.failed(collection).last;
  }

  /**
   * Returns the request that has maximum payload size.
   * @param {Collection} [collection]
   * @return {HttpRequestInfo}
   */
  maxPayloadRequest(collection) {
    const sortArg = { field: 'payloadSize', dir: 'desc' };
    return (collection ? collection.sortBy(sortArg) : this.sort(sortArg)).first;
  }

  /**
   * Returns the request that has maximum response size.
   * @param {Collection} [collection]
   * @returns {HttpRequestInfo}
   */
  maxSizeRequest(collection) {
    const sortArg = { field: 'responseSize', dir: 'desc' };
    return (collection ? collection.sortBy(sortArg) : this.sort(sortArg)).first;
  }

  /**
   * Returns the request that took maximum time to complete.
   * @param {Collection} [collection]
   * @returns {HttpRequestInfo}
   */
  maxDurationRequest(collection) {
    const sortArg = { field: 'duration', dir: 'desc' };
    return (collection ? collection.sortBy(sortArg) : this.sort(sortArg)).first;
  }

  /**
   * Returns the pending requests.
   * @param {Collection} collection.
   * @returns {Collection}
   */
  pending(collection) {
    return collection ? collection.search({ field: 'pending', operator: SEARCH_OPERATOR.EQUALS, value: true }) : this.query('pending', SEARCH_OPERATOR.EQUALS, true);
  }

  /**
   * Returns the completed requests.
   * @param {Collection} collection.
   * @returns {Collection}
   */
  completed(collection) {
    return collection ? collection.search({ field: 'pending', operator: SEARCH_OPERATOR.EQUALS, value: false }) : this.query('pending', SEARCH_OPERATOR.EQUALS, false);
  }

  /**
   * Groups the requests based on the passed fields.
   * @param {...string} groupArgs The group fields.
   * @returns {Collection}
   */
  group(...groupArgs) {
    return this.query(null, groupArgs);
  }

  /**
   * Sorts the requests based on the passed arguments.
   * @param {...*} sortArgs The sort parameters.
   * @returns {Collection}
   */
  sort(...sortArgs) {
    return this.query(null, null, [...sortArgs]);
  }

  /**
   * Search requests based on the passed arguments. Also, sorts and groups.
   * @param {...*} args The query, group and sort arguments.
   * @returns {Collection}
   */
  query(...args) {
    if (args.length === 0) {
      return new Collection([...this._requests]);
    }

    if (args.length === 1 && ['number', 'string'].has(typeof args[0])) {
      const [arg] = args,
        query = typeof arg === 'string' ? this._prepareQuery(arg) : {
          field: 'responseStatus',
          operator: SEARCH_OPERATOR.EQUALS,
          value: arg
        };
      return this.query(query);
    }

    if (Array.isArray(args[0] || args[1] || args[2])) {
      const [query, groupArgs, sortArgs] = args;
      const q = [];
      query && query.forEach(x => {
        let { field, value, operator } = x;

        if (typeof value !== 'string') {
          q.push(x);
          return;
        }

        if (typeof value === 'string') {
          if (['payloadSize', 'responseSize'].has(field)) {
            value = convertBytes(value);
          } else if (field === 'duration') {
            value = convertTime(value);
          }
        }

        q.push({ field, value, operator });
      });


      let modSortArgs = [...(sortArgs || [])];
      if (Array.isArray(sortArgs) && typeof sortArgs[0] === 'string') {
        modSortArgs = [{ field: sortArgs[0], dir: sortArgs[1] }];
      }
      return this.query().search(...(q || [])).groupBy(...(groupArgs || [])).sortBy(...modSortArgs);
    }

    if (typeof args[0] === 'object') {
      return this.query([...args]);
    }

    const [field, operator, value] = args;
    return this.query({ field, operator, value });
  }

  /**
   * Returns the total payload size summing all requests.
   * @param {Collection} [collection] The collection.
   * @returns {number}
   */
  totalPayload(collection) {
    return (collection || this.query()).total('payloadSize');
  }

  /**
   * Returns the total response size summing all requests.
   * @param {Collection} [collection] The collection.
   * @returns {number}
   */
  totalSize(collection) {
    return (collection || this.query()).total('responseSize');
  }

  /**
   * Returns the max payload size of the requests.
   * @param {Collection} [collection] The collection.
   * @returns {number}
   */
  maxPayload(collection) {
    return Math.max(...[...(collection || this._requests)].map(r => r.payloadSize));
  }

  /**
   * Returns the max response size of the requests.
   * @param {Collection} [collection] The collection.
   * @returns {number}
   */
  maxResponse(collection) {
    return Math.max(...[...(collection || this._requests)].map(r => r.responseSize));
  }

  /**
   * Returns the max duration.
   * @param {Collection} [collection] The collection.
   * @returns {number}
   */
  maxDuration(collection) {
    return Math.max(...[...(collection || this._requests)].map(r => r.duration));
  }

  /**
   * Returns duplicate requests. If id not passed then returns all the duplicate requests.
   * @param {Number} [id] The request id.
   * @param {Collection} [collection] The collection.
   * @return {Array}
   */
  duplicates(id, collection) {
    const groupArgs = ['pathQuery', 'method', 'payload'];

    if (!id) {
      let duplicateRequestIds;
      duplicateRequestIds = collection
        ? collection.groupBy(...groupArgs).groups
          .filter(g => g.groups[0].groups[0].items.length > 1)
          .reduce((a, c) => [...a, ...c.groups[0].groups[0].items], [])
          .map(r => r.id)
        : this._callsSummary.filter(r => r.count > 1)
          .reduce((a, c) => [...a, ...c.requests], [])
          .map(r => r.id);

      const query = { field: 'id', operator: SEARCH_OPERATOR.IN, value: duplicateRequestIds };
      return collection ? collection.search(query).groupBy(...groupArgs) : this.query([query], groupArgs);
    }

    const request = collection ? collection.find(item => item.id === id) : this.get(id);

    if (!request) {
      return null;
    }

    const { url, method, payload } = request;

    let requestIds;
    if (collection) {
      requestIds = collection.items.filter(item => item.url === url && item.method === method && JSON.stringify(item.payload) === JSON.stringify(payload))
    } else {
      const reqSummary = this._callsSummary.find(r => r.url === url && r.method === method && JSON.stringify(r.payload) === JSON.stringify(payload));
      requestIds = reqSummary ? [...reqSummary.requests] : [];
    }

    requestIds.splice(requestIds.indexOf(request), 1);

    return this.query([{ field: 'id', operator: SEARCH_OPERATOR.IN, value: requestIds.map(r => r.id) }]);
  }

  /**
   * Returns true if there are duplicate requests.
   * @param {number} [id] Request id.
   * @param {Collection} [collection]  The collection.
   * @return {boolean}
   */
  hasDuplicates(id, collection) {
    return this.duplicates(id, collection).length > 0;
  }

  /**
   * Returns the related requests.
   * @param {Number} id The request id.
   * @param {Collection} collection  The collection.
   * @return {Collection}
   */
  related(id, collection) {
    const request = this.get(id);

    if (!request) {
      return null;
    }

    const query = [
      { field: 'url', operator: SEARCH_OPERATOR.EQUALS, value: request.url },
      { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: request.method }
    ];

    return collection ? collection.search(...query) : this.query(query);
  }

  /**
   * Returns the parameters that exceeded quota.
   * @param request
   * @return {object}
   */
  exceededParameters(request) {
    const {
      maxPayloadSize = this._quota.maxPayloadSize,
      maxResponseSize = this._quota.maxResponseSize,
      maxDuration = this._quota.maxDuration
    } = request.quota || {};

    return {
      payload: request.payloadSize > maxPayloadSize,
      response: request.responseSize > maxResponseSize,
      duration: request.duration > maxDuration
    };
  }

  /**
   * Sorts the requests based on the passed arguments and print them.
   * @param {...*} sortArgs The sort parameters.
   */
  printSort(...sortArgs) {
    this.print(null, null, sortArgs);
  }

  /**
   * Groups the requests based on the passed fields and print them.
   * @param {...string} groupArgs The group fields.
   */
  printGroup(...groupArgs) {
    this.print(null, groupArgs);
  }

  /**
   * Search requests based on the passed arguments. Also, sorts and groups.
   * @param {...*} searchArgs The search arguments.
   */
  printQuery(...searchArgs) {
    this.print(searchArgs);
  }

  /**
   * Prints the requests based on the passed arguments.
   * @param {...*} [args] The print arguments.
   */
  print(...args) {
    const [firstArg, secondArg, thirdArg] = args;

    if (typeof firstArg === 'number') {
      args.forEach(arg => this._reporter.report(this.get(arg)));
      return;
    }

    if (typeof firstArg === 'string') {
      this._reporter.report(this.query(this._prepareQuery(firstArg)));
      return;
    }

    if (firstArg instanceof HttpRequestInfo) {
      args.forEach(arg => this._reporter.report(arg));
      return;
    }

    if (firstArg instanceof Collection) {
      this._reporter.report(firstArg, secondArg);
      return;
    }

    if (Array.isArray(firstArg || secondArg || thirdArg)) {
      const [query, groupArgs, sortArgs] = args;
      this._reporter.report(this.query(query, groupArgs, sortArgs));
      return;
    }

    this._reporter.report(this._getStats(), this.query(null, this._groupBy, this._sortBy));
  }

  /**
   * Print statistics.
   * @param {Collection} collection The collection.
   */
  printStats(collection) {
    this._reporter.reportStats(this._getStats(collection));
  }

  /**
   * Prints failed requests.
   * @param {Collection} collection The collection.
   */
  printFailed(collection) {
    this._reporter.report(this.failed(collection));
  }

  /**
   * Prints requests exceeds quota.
   * @param {Collection} collection The collection.
   */
  printExceeded(collection) {
    this._reporter.report(this.exceeded(collection));
  }

  /**
   * Prints the last failed request.
   * @param {Collection} collection The collection.
   */
  printLastFailed(collection) {
    this._reporter.report(this.lastFailed(collection));
  }

  /**
   * Prints the last request.
   */
  printLast() {
    this._reporter.report(this.last());
  }

  /**
   * Prints the last completed request.
   */
  printLastCompleted() {
    this._reporter.report(this.lastCompleted());
  }

  /**
   * Prints the request that has maximum payload.
   * @param {Collection} collection The collection.
   */
  printMaxPayloadRequest(collection) {
    this._reporter.report(this.maxPayloadRequest(collection));
  }

  /**
   * Prints the request that has maximum size.
   * @param {Collection} collection The collection.
   */
  printMaxSizeRequest(collection) {
    this._reporter.report(this.maxSizeRequest(collection));
  }

  /**
   * Prints the request that took maximum time.
   * @param {Collection} collection The collection.
   */
  printMaxDurationRequest(collection) {
    this._reporter.report(this.maxDurationRequest(collection));
  }

  /**
   * Prints the pending requests.
   * @param {Collection} collection
   */
  printPending(collection) {
    this._reporter.report(this.pending(collection));
  }

  /**
   * Prints the completed requests.
   * @param {Collection} collection
   */
  printCompleted(collection) {
    this._reporter.report(this.completed(collection));
  }

  /**
   * Prints duplicate requests.
   * @param {number} [id] Request id.
   * @param {Collection} [collection] The collection.
   */
  printDuplicates(id, collection) {
    this._reporter.report(this.duplicates(id, collection));
  }

  /**
   * Compares two requests and print the differences.
   * @param {Number} id1 First Request id.
   * @param {Number} id2 Second Request id.
   */
  compare(id1, id2) {
    const request1 = this.get(id1),
      request2 = this.get(id2);

    if (!request1 || !request2) {
      return;
    }

    this._reporter.printComparison(request1, request2);
  }

  /**
   * Print related requests.
   * @param {Number} id Request id.
   * @param {Collection} [collection] The collection.
   */
  printRelated(id, collection) {
    this._reporter.report(this.related(id, collection));
  }

  /**
   * Displays the bar chart of responsive size.
   * @param {...Collection} [collections].
   */
  sizeChart(...collections) {
    const datasets = [];
    let labels;

    if (collections.length) {
      collections.forEach((col, index) => {
        datasets.push({
          data: [...col.items].map(r => r.responseSize),
          title: `Collection ${index++}`,
          barColor: Colors[`CHART_COLOR_${index++}`]
        });
      });

      labels = Array.from({ length: collections[0].count }, (_, i) => i + 1);
    } else {
      labels = [...this._requests].map(r => r.id);
      datasets.push({
        data: [...this._requests].map(r => r.responseSize),
        title: 'All Requests',
        barColor: Colors.CHART_COLOR_1
      });
    }

    this._reporter.visualize({
      type: 'bar',
      title: 'Response Size Of Requests',
      labels,
      datasets,
      formatHor: formatBytes,
      lineAt: this._quota.maxResponseSize
    });
  }

  /**
   * Displays the bar chart of responsive size.
   * @param {...Collection} [collections].
   */
  timeChart(...collections) {
    const datasets = [];
    let labels;

    if (collections.length) {
      collections.forEach((col, index) => {
        datasets.push({
          data: [...col.items].map(r => r.duration),
          title: `Collection ${index++}`,
          barColor: Colors[`CHART_COLOR_${index++}`]
        });
      });

      labels = Array.from({ length: collections[0].count }, (_, i) => i + 1);
    } else {
      labels = [...this._requests].map(r => r.id);
      datasets.push({
        data: [...this._requests].map(r => r.duration),
        title: 'All Requests',
        barColor: Colors.CHART_COLOR_1
      });
    }

    this._reporter.visualize({
      type: 'bar',
      title: 'Response Time Of Requests',
      labels,
      datasets,
      formatHor: formatTime,
      lineAt: this._quota.maxDuration
    });
  }

  /**
   * Displays scatter chart for response size and time.
   * @param {...Collection} collections
   */
  sizeTimeChart(...collections) {
    const datasets = [];
    let labels;

    const getData = (col) => [...col.items].map(r => ({ x: r.duration, y: r.responseSize || 0 }));

    if (collections.length) {
      labels = Array.from({ length: collections[0].count }, (_, i) => i + 1);
      collections.forEach((col, index) => {
        datasets.push({
          data: getData(col),
          title: `Collection ${index++}`,
          bgColor: Colors[`CHART_COLOR_${index++}`]
        });
      });
    } else {
      labels = [...this._requests].map(r => r.id);
      datasets.push({
        data: getData(this.query()),
        title: 'All Requests',
        bgColor: Colors.CHART_COLOR_1
      });
    }

    this._reporter.visualize({
      type: 'scatter',
      title: 'Response Size And Time Of Requests',
      labels,
      datasets,
      formatHor: formatTime,
      formatVer: formatBytes,
    });
  }

  /**
   * Displays the distribution of the passed field in doughnut chart.
   * @param {string} distributeBy The field name.
   * @param {...Collection} [collections] The collection.
   */
  distributionChart(distributeBy, ...collections) {
    const datasets = [];
    let labels;

    const groupBy = col => {
      if (distributeBy === 'responseSize' || distributeBy === 'payloadSize') {
        const c = { groups: [] };
        c.groups.push({
          name: '<= 1 kb',
          items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 1024 })
        });
        c.groups.push({
          name: '> 1 kb AND <= 10 kb',
          items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 1024 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 10240 })
        });
        c.groups.push({
          name: '> 10 kb AND <= 1 mb',
          items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 10240 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 1024 * 1024 })
        });
        c.groups.push({
          name: '> 1 mb AND <= 10 mb',
          items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 1024 * 1024 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 1024 * 1024 * 10 })
        });
        c.groups.push({
          name: '> 10 mb',
          items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 1024 * 1024 * 10 })
        });
        return c;
      } else if (distributeBy === 'duration') {
        const c = { groups: [] };
        c.groups.push({ name: '<= 1 s', items: col.clone().search({ field: distributeBy, operator:SEARCH_OPERATOR.LESS_EQUAL, value: 1000 }) });
        c.groups.push({ name: '> 1 s AND <= 10 s', items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 1000 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 10000 }) });
        c.groups.push({ name: '< 10 s AND <= 1 min', items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 10000 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 60000 }) });
        c.groups.push({ name: '> 1 min AND <= 10 min', items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 60000 }, { field: distributeBy, operator: SEARCH_OPERATOR.LESS_EQUAL, value: 600000 }) });
        c.groups.push({ name: '> 10 min', items: col.clone().search({ field: distributeBy, operator: SEARCH_OPERATOR.GREATER, value: 600000 }) });
        return c;
      }

      return col.groupBy(distributeBy);
    },
    getLabels = groupedCol => groupedCol.groups.map(g => g.name && g.name !== '-' ? g.name : 'Other'),
    getData = groupedCol => groupedCol.groups.map(g => g.items ? g.items.length : 0);

    if (collections.length) {
      collections.forEach((col, index) => {
        const grouped = groupBy(col);
        labels = getLabels(grouped);
        datasets.push({
          data: getData(grouped),
          title: `Collection ${index++}`,
          bgColor: poolColors(labels.length)
        });
      });
    } else {
      const grouped = groupBy(this.query());
      labels = getLabels(grouped);
      datasets.push({
        data: getData(grouped),
        title: 'All Requests',
        bgColor: poolColors(labels.length)
      });
    }

    this._reporter.visualize({
      type: 'doughnut',
      title: `Requests Share by "${distributeBy}"`,
      labels,
      datasets
    });
  }

  /**
   * Imports config.
   */
  import() {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', '.json');
    fileInput.style.opacity = '0';
    fileInput.addEventListener('change', () => {
      const reader = new FileReader();
      reader.onload = () => {
        const content = JSON.parse(event.target.result || '{}');
        if (!content.config) {
          window.alert(Messages.IMPORTED_FAILURE);
          return;
        }
        this.setConfig(content.config);
        this._updateStorage();
        window.alert(Messages.IMPORTED_SUCCESS);
      };
      reader.readAsText(fileInput.files[0]);
      fileInput.remove();
    });
    document.body.appendChild(fileInput);
    fileInput.click();
  }

  /**
   * Exports the requests to excel.
   * Ref: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
   */
  export(...args) {
    let collection,
      type,
      exportConfig = false,
      defaultColl = new Collection([...this._requests]),
      fileName;

    if (args.length === 0) {
      collection = defaultColl;
      type = FILE_TYPE.CSV;
    }

    if (args.length === 1) {
      if (args[0] instanceof Collection) {
        collection = args[0];
        type = FILE_TYPE.CSV;
      } else {
        collection = defaultColl;
        type = args[0];
      }
    }

    if (args.length > 1) {
      if (args[0] instanceof Collection) {
        collection = args[0];
        type = args[1];
        exportConfig = args[2];
      } else {
        collection = defaultColl;
        type = args[0];
        exportConfig = args[1];
      }
    }

    if (collection.count === 0) {
      window.alert('No Requests to export');
      return;
    }

    let href;

    if (type === FILE_TYPE.CSV) {
      href = `Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\r\n`;
      [...collection].forEach(r => {
        href += `${r.id},${r.url},${r.path},${r.method},${r.payloadSize || 0},${r.duration || 0},${r.responseStatus},${r.responseSize},${r.error},${r.errorDescription},${r.exceedsQuota}\r\n`;
      });

      href += `\r\n`;
      href = `data:application/csv,${encodeURIComponent(href)}`;
      fileName = `HttpSupervisorRequestsLog.csv`;
    } else {
      let content;
      if (exportConfig) {
        content = {
          config: this.getConfig()
        };
        fileName = `HttpSupervisorConfiguration.json`;
      } else {
        content = {
          requests: [...collection]
        };
        fileName = `HttpSupervisorRequestsLog.json`;
      }
      const file = new Blob([JSON.stringify(content)], { type: 'text/plain' });
      href = URL.createObjectURL(file);
    }

    let exportLink = document.querySelector('#http-supervisor-export');

    if (exportLink) {
      exportLink.remove();
    }

    exportLink = document.createElement('a');
    exportLink.id = 'http-supervisor-export';
    exportLink.setAttribute('href', href);
    exportLink.setAttribute('download', fileName);
    document.body.appendChild(exportLink);
    exportLink.click();
  }

  /**
   * Alert request that matches the passed arguments.
   * @param {...*} args The watch arguments.
   * @returns {number}
   */
  watch(...args) {
    if (args.length === 0) {
      return -1;
    }

    const watchId = this._watchId();

    if (args.length === 1 && typeof args[0] === 'number' && this.get(args[0])) {
      const req = this.get(args[0]);
      this._watches.set(watchId, [
        { field: 'url', operator: SEARCH_OPERATOR.EQUALS, value: req.url },
        { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: req.method }
      ]);
    } else if (args.length === 1 && typeof args[0] === 'string') {
      this._watches.set(watchId, [this._prepareQuery(args[0])]);
    } else {
      this._watches.set(watchId, args);
    }

    this._updateStorage();
    return watchId;
  }

  /**
   * Remove the watch for the passed id.
   * @param {number} watchId The watch id.
   */
  removeWatch(watchId) {
    this._watches.delete(watchId);
    this._updateStorage();
  }

  /**
   * Clear all watches.
   */
  clearWatches() {
    this._watches.clear();
    this._updateStorage();
  }

  /**
   * Removes the stored config from session storage.
   */
  clearStore() {
    localStorage.removeItem(STORAGE_KEY);
  }

  /**
   * Re-issues ajax request for the passed http request.
   * @param {Number} idOrRequest Request id/Request.
   * @param {object} [requestOptions] Request options.
   * @returns {Promise<HttpRequestInfo|Array<HttpRequestInfo>>}
   */
  async fire(idOrRequest, requestOptions) {
    const request = typeof idOrRequest === 'number' ? this.get(idOrRequest) : idOrRequest;

    if (!request) {
      return null;
    }

    const {
      count = 1,
      parallel = true,
      delay = 0
    } = requestOptions || {};

    const ids = Array(count).map(() => this._id());

    setTimeout(async () => {
      for (let i = 0; i < ids.length; i++) {
        if (parallel) {
          this._makeAjaxCall(request, ids[i]);
        } else {
          await this._makeAjaxCall(request, ids[i]);
          delay && await timeout(delay);
        }
      }
    }, 0);

    return ids.length === 1 ? ids[0] : ids;
  }

  /**
   * Creates a new session.
   * @return {number}
   */
  record() {
    if (this._activeSessionId) {
      this.end();
    }

    const session = new Session();
    session.id = this._activeSessionId = this._sessionId();
    this._sessions.set(session.id, session);
    return this._activeSessionId;
  }

  /**
   * Ends the current session.
   */
  end() {
    this._activeSessionId = null;
  }

  /**
   * Returns session for the passed id.
   * @param id
   * @return {any}
   */
  getSession(id) {
    return this._sessions.get(id);
  }

  /**
   * Removes the passes session.
   * @param id
   */
  removeSession(id) {
    this._sessions.delete(id);
  }

  /**
   * Clear all sessions.
   */
  clearSessions() {
    this._sessions.clear();
  }

  /**
   * Copies the response, payload or the complete request to clipboard.
   */
  copy(id, content = 'response') {
    const req = this.get(id);

    if (!req) {
      return;
    }

    let text;

    switch (content) {
      case 'response':
        text = JSON.stringify(req.response);
        break;

      case 'payload':
        text = JSON.stringify(req.payload);
        break;

      case 'all':
        text = JSON.stringify(req);
        break;
    }

    copyText(text);
  }

  /**
   * Clears the copied content.
   */
  clearCopy() {
    copyText('');
  }

  /**
   * Returns `true` if the passed url is allowed to monitor.
   * @param url
   */
  canAllowUrl(url) {
    if (this._exclude !== null && [...this._exclude].filter(pattern => matchesGlob(pattern, url)).length) {
      return false;
    }

    if (this._include !== null && [...this._include].filter(pattern => matchesGlob(pattern, url)).length === 0) {
      return false;
    }

    return true;
  }

  /**
   * Returns the configuration of supervisor.
   * @returns {object}
   */
  getConfig() {
    return {
      include: this._include !== null ? [...this._include] : null,
      exclude: this._exclude !== null ? [...this._exclude] : null,
      silent: this._silent,
      traceEachRequest: this._traceEachRequest,
      alertOnError: this._alertOnError,
      alertOnExceedQuota: this._alertOnExceedQuota,
      alertOnRequestStart: this._alertOnRequestStart,
      renderUI: this._renderUI,
      groupBy: this._groupBy,
      sortBy: this._sortBy,
      keyboardEvents: this._keyboardEvents,
      lockConsole: this._lockConsole,
      usePerformance: this._usePerformance,
      quota: this._quota,
      watches: mapToJson(this._watches),
      urlConfig: this._urlConfig,
      stopWatch: this._stopWatch
    };
  }

  /**
   * Sets the configuration of supervisor.
   * @param config
   */
  setConfig(config) {
    const {
      include,
      exclude,
      renderUI,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      alertOnRequestStart,
      silent,
      quota,
      groupBy,
      sortBy,
      usePerformance,
      monkeyPatchFetch,
      loadChart,
      keyboardEvents,
      watches,
      persistConfig,
      lockConsole,
      urlConfig,
      stopWatch
    } = config;

    this._include = Array.isArray(include) ? new Set(include) : HttpSupervisor.defaultConfig.include;
    this._exclude = Array.isArray(exclude) ? new Set(exclude) : HttpSupervisor.defaultConfig.exclude;
    this._renderUI = typeof renderUI === 'boolean' ? renderUI : HttpSupervisor.defaultConfig.renderUI;
    this._silent = typeof silent === 'boolean' ? silent : HttpSupervisor.defaultConfig.silent;
    this._traceEachRequest = typeof traceEachRequest === 'boolean' ? traceEachRequest : HttpSupervisor.defaultConfig.traceEachRequest;
    this._alertOnError = typeof alertOnError === 'boolean' ? alertOnError : HttpSupervisor.defaultConfig.alertOnError;
    this._alertOnExceedQuota = typeof alertOnExceedQuota === 'boolean' ? alertOnExceedQuota : HttpSupervisor.defaultConfig.alertOnExceedQuota;
    this._alertOnRequestStart = typeof alertOnRequestStart === 'boolean' ? alertOnRequestStart : HttpSupervisor.defaultConfig.alertOnRequestStart;
    this._quota = typeof quota === 'object' ? { ...this._quota, ...quota } : HttpSupervisor.defaultConfig.quota;
    this._groupBy = Array.isArray(groupBy) ? groupBy : HttpSupervisor.defaultConfig.groupBy;
    this._sortBy = Array.isArray(sortBy) ? sortBy : HttpSupervisor.defaultConfig.sortBy;
    this._usePerformance = typeof usePerformance === 'boolean' ? usePerformance : HttpSupervisor.defaultConfig.usePerformance;
    this._monkeyPatchFetch = typeof monkeyPatchFetch === 'boolean' ? monkeyPatchFetch : HttpSupervisor.defaultConfig.monkeyPatchFetch;
    this._loadChart = typeof loadChart === 'boolean' ? loadChart : HttpSupervisor.defaultConfig.loadChart;
    this._keyboardEvents = typeof keyboardEvents === 'boolean' ? keyboardEvents : HttpSupervisor.defaultConfig.keyboardEvents;
    this._persistConfig = persistConfig ? typeof persistConfig === 'boolean' : HttpSupervisor.defaultConfig.persistConfig;
    this._watches = typeof watches === 'object' && watches !== null ? new Map(Object.entries(watches)) : new Map();
    this._lockConsole = typeof lockConsole === 'boolean' ? lockConsole : HttpSupervisor.defaultConfig.lockConsole;
    this._urlConfig = typeof urlConfig === 'object' ? urlConfig : {};
    this._stopWatch = typeof stopWatch === 'boolean' ? stopWatch : HttpSupervisor.defaultConfig.stopWatch;
    this._updateStorage();
  }

  /**
   * Creates and returns new collection from the passed requests.
   * @param requests
   * @return {Collection}
   */
  collection(...requests) {
    return new Collection(requests.map(r => typeof r === 'number' ? this.get(r) : r).filter(r => r !== null));
  }

  /**
   * Merge multiple collections into one.
   * @param {...Collection} collections Collections.
   * @returns {Collection}
   */
  merge(...collections) {
    const requests = collections.reduce((a, c) => [...a, ...c.items], []).filter((x, i, a) => a.indexOf(a.find(y => y.id === x.id)) === i);
    return new Collection(requests);
  }

  /**
   * Render the UI.
   * @private
   */
  _render() {
    if (!this._renderUI) {
      return;
    }

    this._widget.init(this);
    this._widget.render();
  }

  /**
   * Monkey patches XHR's open and send methods.
   * @private
   */
  _monkeyPatch() {
    const open = this._open.bind(this),
      send = this._send.bind(this),
      setRequestHeader = this._setRequestHeader.bind(this),
      idFunc = this._id.bind(this);

    this._monkeyPatchFetch && (window.fetch = this._fetch.bind(this));

    XMLHttpRequest.prototype.open = function () {
      open(this, ...arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      send(this, ...arguments);
    };

    XMLHttpRequest.prototype.setRequestHeader = function () {
      setRequestHeader(this, ...arguments);
    };
  }

  /**
   * Revert the monkey patching.
   * @private
   */
  _undoMonkeyPatch() {
    this._monkeyPatchFetch && (window.fetch = this._nativeFetch);
    XMLHttpRequest.prototype.open = this._nativeOpen;
    XMLHttpRequest.prototype.send = this._nativeSend;
    XMLHttpRequest.prototype.setRequestHeader = this._nativeSetRequestHeader;
  }

  /**
   * Capture request information and fire network connection using fetch API.
   * @private
   */
  _fetch() {
    if (!this.busy) {
      return;
    }

    let [url, options = {}, id = this._id()] = [...arguments],
      { method = REQUEST_TYPE.GET, body, headers } = options;

    const payload = safeParse(body);
    const requestInfo = new HttpRequestInfo(id, url, method, payload);
    requestInfo.payloadSize = byteSize(payload ? JSON.stringify(payload) : '');
    requestInfo.initiatorType = InitiatorType.FETCH;
    headers && (requestInfo.requestHeaders = new Map(Object.entries(headers)));
    this._addRequest(requestInfo);

    return new Promise((resolve, reject) => {
      this._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

      let response;

      !this._silent && this._alertOnRequestStart && this._reporter.report(requestInfo);

      // Make the fetch call and capture the response info.
      this._nativeFetch.call(window, this._isPerformanceSupported() ? this._appendRequestIdToUrl(url, id) : url, options)
        .then(r => {
          response = r.clone();
          return isJsonResponse(r.headers.get('content-type')) ? r.json() : null;
        })
        .then(data => {
          requestInfo.response = data;
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          if (this.status === SupervisorStatus.Retired) {
            return;
          }

          requestInfo.responseStatus = response ? response.status : 500;
          requestInfo.responseHeaders = new Map(Object.entries(response.headers.entries()));
          this._fillParametersAndFireEvents(requestInfo, response);
        });
    });
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

    if (!url || !this.canAllowUrl(url)) {
      delete xhr[XHR_METADATA_KEY];
      this._nativeOpen.call(xhr, ...parameters);
      return;
    }

    const id = this._id();

    if (this._isPerformanceSupported()) {
      parameters[1] = this._appendRequestIdToUrl(url, id);
    }

    const httpRequestInfo = xhr[XHR_METADATA_KEY] || new HttpRequestInfo();
    httpRequestInfo.id = id;
    httpRequestInfo.url = url;
    httpRequestInfo.method = method.toUpperCase();
    xhr[XHR_METADATA_KEY] = httpRequestInfo;

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
      [xhr, payload] = parameters;

    parameters.shift();

    const httpRequestInfo = xhr[XHR_METADATA_KEY];

    if (!httpRequestInfo || !httpRequestInfo.url) {
      delete xhr[XHR_METADATA_KEY];
      this._nativeSend.call(xhr, ...parameters);
      return;
    }

    httpRequestInfo.initiatorType = InitiatorType.XHR;
    httpRequestInfo.payload = safeParse(payload);
    httpRequestInfo.payloadSize = byteSize(httpRequestInfo.payload ? JSON.stringify(httpRequestInfo.payload) : '');
    this._addRequest(httpRequestInfo);

    // Listen to `onreadystatechange` event to capture the response info.
    xhr.addEventListener('readystatechange', () => {
      if (this.status === SupervisorStatus.Retired) {
        return;
      }

      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        const headers = xhr.getAllResponseHeaders(),
          arr = headers.trim().split(/[\r\n]+/),
          headersSet = new Map();

        arr.forEach(function (line) {
          const parts = line.split(': '),
            header = parts.shift(),
            value = parts.join(': ');

          headersSet.set(header, value);
        });

        httpRequestInfo.responseHeaders = headersSet;

        return;
      }

      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      httpRequestInfo.responseStatus = xhr.status;
      httpRequestInfo.response = isJsonResponse(xhr.getResponseHeader('Content-Type')) ? safeParse(xhr.response) : xhr.response;
      this._fillParametersAndFireEvents(httpRequestInfo, xhr);
    });

    !this._silent && this._alertOnRequestStart && this._reporter.report(httpRequestInfo);
    this._nativeSend.call(xhr, ...parameters);
    this._triggerEvent(SupervisorEvents.REQUEST_START, httpRequestInfo, xhr);
  }

  /**
   * Captures request header info.
   * @private
   */
  _setRequestHeader() {
    if (!this.busy) {
      return;
    }

    const parameters = [...arguments],
      [xhr, header, value] = parameters;

    parameters.shift();

    const httpRequestInfo = xhr[XHR_METADATA_KEY] || new HttpRequestInfo();
    const reqHeaders = httpRequestInfo.requestHeaders || new Map();
    reqHeaders.set(header, value);
    httpRequestInfo.requestHeaders = reqHeaders;
    xhr[XHR_METADATA_KEY] = httpRequestInfo;

    this._nativeSetRequestHeader.call(xhr, ...parameters);
  }

  /**
   * Fill duration and size parameters from response.
   * @private
   */
  _fillParametersAndFireEvents(httpRequestInfo, xhrOrResponse) {
    let performanceEntry;

    // If performance API is well supported read the duration and size leveraging it.
    if (this._isPerformanceSupported()) {
      const urlName = this._appendRequestIdToUrl(httpRequestInfo.url, httpRequestInfo.id);
      performanceEntry = performance.getEntriesByType('resource').find(e => e.name === urlName);
    }

    const responseSize = byteSize(JSON.stringify(httpRequestInfo.response || ''));

    if (performanceEntry) {
      const obj = {};

      for (let p in performanceEntry) {
        if (typeof performanceEntry[p] !== 'function') {
          if (p === 'serverTiming') {
            obj[p] = {};
            performanceEntry[p].forEach(entry => obj[p][entry.name] = entry);
          } else {
            obj[p] = performanceEntry[p];
          }
        }
      }

      httpRequestInfo.performance = obj;
      if (performanceEntry.requestStart > 0) {
        httpRequestInfo.queuingTimeIncluded = false;
        httpRequestInfo.timeStart = performanceEntry.requestStart;
      } else {
        httpRequestInfo.timeStart = performanceEntry.startTime;
      }

      httpRequestInfo.timeEnd = performanceEntry.responseEnd;
      httpRequestInfo.payloadByPerformance = !!performanceEntry.transferSize;
      httpRequestInfo.responseSize = httpRequestInfo.payloadByPerformance ? performanceEntry.transferSize : responseSize;
    } else {
      httpRequestInfo.payloadByPerformance = false;
      httpRequestInfo.timeEnd = performance.now();
      httpRequestInfo.responseSize = responseSize;
    }

    httpRequestInfo.duration = httpRequestInfo.timeEnd - httpRequestInfo.timeStart;
    httpRequestInfo.exceedsQuota = this._isExceededQuota(httpRequestInfo);
    httpRequestInfo.pending = false;

    httpRequestInfo.error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, httpRequestInfo, xhrOrResponse);
    httpRequestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, httpRequestInfo, xhrOrResponse);

    this._setUrlMeta(httpRequestInfo);
    this._decrement();
    this._triggerEvent(SupervisorEvents.REQUEST_END, httpRequestInfo, xhrOrResponse);
  }

  /**
   * Sets url metadata info to request object.
   * @param request
   * @private
   */
  _setUrlMeta(request) {
    let { pathDomain, method } = request;
    const regex1 = new RegExp(/{([a-zA-Z0-9_$.]+)}/g),
      regex2 = new RegExp(/[^{}]*(?=})/g);

    const urlConfigUpdated = {};
    Object.entries(this._urlConfig).forEach(([k, v]) => Object.keys(v).forEach(u => urlConfigUpdated[`${k}${u}`] = v[u]));

    const urlParts = trimEndSlash(pathDomain).split('/');

    const matchedEntry = Object.keys(urlConfigUpdated).find(u => {
      u = trimEndSlash(u).replace(regex1, '*');
      const uParts = u.split('/');

      if (urlParts.length !== uParts.length) {
        return false;
      }

      let isMatch = true;

      for (let i = 0; i < urlParts.length; i++) {
        if (uParts[i] !== '*' && uParts[i].toLowerCase() !== urlParts[i].toLowerCase()) {
          isMatch = false;
          break;
        }
      }

      return isMatch;
    });

    if (!matchedEntry) {
      return {};
    }

    const matchedValue = urlConfigUpdated[matchedEntry];

    if (typeof matchedValue === 'string') {
      request.label = matchedValue;
    } else if (typeof matchedValue === 'object' && matchedEntry !== null) {
      request.category = matchedValue.category;
      matchedValue.tags && (request.tags = new Set(matchedValue.tags));
      if (matchedValue.hasOwnProperty(method)) {
        const t = matchedValue[method];
        if (typeof t === 'string') {
          request.label = t;
        } else {
          request.label = t.label;
          request.labelPending = t.labelPending;
          request.errorLabel = t.error;
          request.quota = t.quota;
        }
      } else {
        request.label = matchedValue.label;
        request.labelPending = matchedValue.labelPending;
        request.errorLabel = matchedValue.error;
        request.quota = matchedValue.quota;
      }
    }

    const matchedEntryParts = matchedEntry.split('/'),
      tokensObj = {};

    matchedEntryParts.forEach((part, i) => {
      if (!regex1.test(part)) {
        return;
      }

      const [token] = part.match(regex2);
      tokensObj[token] = urlParts[i];
    });

    const replaceTokens = (str) => {
      [...str.matchAll(regex1)].forEach(([part1, part2]) => {
        if (part2.startsWith('$response') && request.response) {
          const val = readValue(request.response, part2.replace(/\$response./, ''));
          str = (val !== null && val !== undefined) ? str.replaceAll(part1, val) : str;
        } else if (part2.startsWith('$payload') && request.payload) {
          const val = readValue(request.payload, part2.replace(/\$payload./, ''));
          str = (val !== null && val !== undefined) ? str.replaceAll(part1, val) : str;
        } else if (part2.startsWith('$query')) {
          const queryParams = new Map(new URLSearchParams(request.query));
          const val = queryParams.get(part2.replace(/\$query./, ''));
          str = (val !== null && val !== undefined) ? str.replaceAll(part1, val) : str;
        } else {
          str = tokensObj.hasOwnProperty(part2) ? str.replaceAll(part1, tokensObj[part2]) : str;
        }
      });

      return str;
    };

    request.label && (request.label = replaceTokens(request.label));
    request.labelPending && (request.labelPending = replaceTokens(request.labelPending));
    request.errorLabel && (request.errorLabel = replaceTokens(request.errorLabel));
  }

  /**
   * Add the request to the summary request which helps to find duplicates.
   * @param request
   * @private
   */
  _addToCallsSummary(request) {
    const { url, method, payload } = request,
      reqSummary = this._callsSummary.find(r => r.url === url && r.method === method && JSON.stringify(r.payload) === JSON.stringify(payload));

    if (reqSummary) {
      reqSummary.count += 1;
      reqSummary.requests.push(request);
    } else {
      this._callsSummary.push({ url, method, payload, count: 1, requests: [request] });
    }
  }

  /**
   * Increments the call counter.
   * @private
   */
  _increment() {
    this._callsCount++;
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
  }

  /**
   * Adds the request to collection.
   * @param request
   * @private
   */
  _addRequest(request) {
    this._requests.add(request);
    this._activeSessionId && this._sessions.get(this._activeSessionId).add(request);
    this._setUrlMeta(request);
    this._addToCallsSummary(request);
    this._increment();
  }

  /**
   * Returns true if `performance.getEntriesByType` is supported.
   * @private
   */
  _isPerformanceSupported() {
    return this._usePerformance && !!(window.performance && window.performance.getEntriesByType);
  }

  /**
   * Append request id to url.
   * @private
   */
  _appendRequestIdToUrl(url, id) {
    const urlObj = this._createUrl(url);
    urlObj.searchParams.append(SUPERVISOR_QUERY_KEY, id.toString());
    return urlObj.toString();
  }

  /**
   * Invokes the handlers registered for the event.
   * @private
   */
  _triggerEvent(eventName, ...args) {
    this._eventEmitter.triggerEvent(eventName, ...args, this);
  }

  /**
   * Returns true if the passed request exceeds the quota.
   * @private
   */
  _isExceededQuota(request) {
    const {
      maxPayloadSize = this._quota.maxPayloadSize,
      maxResponseSize = this._quota.maxResponseSize,
      maxDuration = this._quota.maxDuration
    } = request.quota || {};
    return request.payloadSize > maxPayloadSize || request.responseSize > maxResponseSize || request.duration > maxDuration;
  }

  /**
   * Creates URL object.
   * @private
   */
  _createUrl(url) {
    return isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin);
  }

  /**
   * Stores the configuration in local storage.
   */
  _updateStorage() {
    if (!this._persistConfig) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getConfig()));
    [SupervisorStatus.Idle, SupervisorStatus.Busy].has(this._status) && this._triggerEvent(SupervisorEvents.CONFIG_CHANGE, this.getConfig());
  }

  /**
   * Returns `true` if the request matches the arguments.
   */
  _matchWatch(argsArray, request) {
    return matchCriteria(argsArray, request);
  }

  /**
   * Prepares query if input is string.
   * @param str
   */
  _prepareQuery(str) {
    let query;

    if (REQUEST_TYPE.hasOwnProperty(str)) {
      query = { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: str };
    } else if (str.startsWith('%')) {
      query = { field: 'label', operator: SEARCH_OPERATOR.CONTAINS, value: str.substring(1) };
    } else if (str.startsWith('$')) {
      query = { field: 'category', operator: SEARCH_OPERATOR.CONTAINS, value: str.substring(1) };
    } else if (str.startsWith('#')) {
      query = { field: 'tags', operator: SEARCH_OPERATOR.INCLUDE, value: str.substring(1) };
    } else if (str.indexOf('*') > -1) {
      query = { field: 'url', operator: SEARCH_OPERATOR.MATCHES, value: str };
    } else {
      query = { field: isAbsolute(str) ? 'url' : 'path', operator: SEARCH_OPERATOR.CONTAINS, value: str };
    }

    return query;
  }

  _getStats(collection) {
    return {
      allRequests: collection || this.query(),
      totalRequests: collection ? collection.count : this.totalRequests,
      getRequestsCount: collection ? collection.search({
        field: 'method',
        operator: SEARCH_OPERATOR.EQUALS,
        value: REQUEST_TYPE.GET
      }).count : this.query(REQUEST_TYPE.GET).count,
      postRequestsCount: collection ? collection.search({
        field: 'method',
        operator: SEARCH_OPERATOR.EQUALS,
        value: REQUEST_TYPE.POST
      }).count : this.query(REQUEST_TYPE.POST).count,
      putRequestsCount: collection ? collection.search({
        field: 'method',
        operator: SEARCH_OPERATOR.EQUALS,
        value: REQUEST_TYPE.PUT
      }).count : this.query(REQUEST_TYPE.PUT).count,
      deleteRequestsCount: collection ? collection.search({
        field: 'method',
        operator: SEARCH_OPERATOR.EQUALS,
        value: REQUEST_TYPE.DELETE
      }).count : this.query(REQUEST_TYPE.DELETE).count,
      failedRequests: this.failed(collection),
      requestsExceededQuota: this.exceeded(collection),
      maxPayloadSize: this.maxPayload(collection),
      maxResponseSize: this.maxResponse(collection),
      maxDuration: this.maxDuration(collection),
      totalPayloadSize: this.totalPayload(collection),
      totalResponseSize: this.totalSize(collection),
      maxPayloadRequest: this.maxPayloadRequest(collection),
      maxResponseRequest: this.maxSizeRequest(collection),
      maxDurationRequest: this.maxDurationRequest(collection),
      duplicates: this.duplicates(null, collection)
    };
  }

  _makeAjaxCall(request, id) {
    if (request.initiatorType === InitiatorType.XHR) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr['__request_id__'] = id;
        xhr.addEventListener('readystatechange', () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            resolve();
          }
        });
        xhr.open(request.method, request.url);
        request.requestHeaders.forEach((value, header) => {
          xhr.setRequestHeader(header, value);
        });
        request.method !== REQUEST_TYPE.GET && request.payload ? xhr.send(JSON.stringify(request.payload)) : xhr.send();
        return xhr;
      });
    }

    const requestOptions = {
      method: request.method,
      headers: mapToJson(request.requestHeaders)
    };

    request.method !== REQUEST_TYPE.GET && request.payload && (requestOptions.body = JSON.stringify(request.payload));

    return this._fetch(request.url, requestOptions, id);
  }
}
