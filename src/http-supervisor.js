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
  CHARTJS_LIB_PATH,
  STORAGE_KEY,
  REQUEST_TYPE,
  SEARCH_OPERATOR,
  FILE_TYPE
} from './constants';
import {
  idGenerator,
  convertBytes,
  convertTime,
  byteSize,
  isAbsolute,
  loadScript,
  formatBytes,
  formatTime,
  matchCriteria,
  isJsonResponse,
  safeParse,
  matchesGlob,
  copyText
} from './util';
import { Session }     from './session';

/**
 * Supervises HTTP Network Traffic. Helps to identify query, group, sort, export, visualize requests and much more.
 */
export default class HttpSupervisor {

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
  _include = null;

  /**
   * The url that matches these patterns will be ignored.
   * @type {Set}
   * @private
   */
  _exclude = null;

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
    maxPayloadSize: 10240, // 10kb
    maxResponseSize: 10240, // 10kb
    maxDuration: 1000 // 1s
  };

  /**
   * True to not display any messages in console or the passed reporter.
   * @type {boolean}
   * @private
   */
  _silent = false;

  /**
   * Displays each completed request.
   * @type {boolean}
   * @private
   */
  _traceEachRequest = false;

  /**
   * Displays failed request.
   * @type {boolean}
   * @private
   */
  _alertOnError = true;

  /**
   * Displays requests that exceeded quota.
   * @type {boolean}
   * @private
   */
  _alertOnExceedQuota = true;

  /**
   * True to alert on request start.
   * @type {boolean}
   * @private
   */
  _alertOnRequestStart = false;

  /**
   * Grouping parameters used in displaying requests.
   * @type {string[]}
   * @private
   */
  _groupBy = ['part', 'method'];

  /**
   * Sorting parameters used in displaying requests.
   * @type {*[]}
   * @private
   */
  _sortBy = [{ field: 'id', dir: 'asc' }];

  /**
   * Uses `performance.getEntriesByType` for capturing accurate duration and payload size.
   * @type {boolean}
   * @private
   */
  _usePerformance = true;

  /**
   * True to monkey patch fetch requests.
   * @type {boolean}
   * @private
   */
  _monkeyPatchFetch = true;

  /**
   * True to use `chart.js` library for data visualization.
   * @type {boolean}
   * @private
   */
  _loadChart = true;

  /**
   * True to use keyboard events for operating control panel.
   * @type {boolean}
   * @private
   */
  _keyboardEvents = true;

  /**
   * True to persist config in local storage.
   * @type {boolean}
   * @private
   */
  _persistConfig = true;

  /**
   * True to lock dev console.
   * @type {boolean}
   * @private
   */
  _lockConsole = false;

  /**
   * Collection of captured requests.
   * @type {Set}
   * @private
   */
  _requests = new Session();

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
   * @param {Array} [config.watches] Collection of watches.
   * @param {boolean} [config.lockConsole] True to lock console.
   * @param {boolean} [loadConfigFromStore = true] True to load the config from local storage.
   */
  init(config = {}, loadConfigFromStore = true) {
    if (this._status !== SupervisorStatus.NotReady) {
      return;
    }

    const storedConfig = loadConfigFromStore && localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {};
    this._setConfig({ ...storedConfig, ...config });

    // Listen to the `request-end` event to display request details based on the properties.
    this.on(SupervisorEvents.REQUEST_END, (supervisor, request) => {
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

    // Update the configuration to the storage.
    this._updateStorage();

    // Render the widget, initialize the reporter and start monitoring.
    this._render();
    this._monkeyPatch();
    this._status = SupervisorStatus.Idle;
    this._reporter.init(this);
    this.start();

    const initChart = () => {
      this._reporter.initChart();
      this._triggerEvent(SupervisorEvents.READY);
    };

    if (this._loadChart) {
      loadScript(CHARTJS_LIB_PATH, initChart, initChart);
      return;
    }

    initChart();
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
   * Returns the failed requests.
   * @returns {Collection}
   */
  failed() {
    return this.query('error', SEARCH_OPERATOR.EQUALS, true);
  }

  /**
   * Returns the requests that exceeded the quota.
   * @returns {Collection}
   */
  exceeded() {
    return this.query('exceedsQuota', SEARCH_OPERATOR.EQUALS, true);
  }

  /**
   * Returns the last failed request.
   * @returns {HttpRequestInfo}
   */
  lastFailed() {
    return this.failed().last;
  }

  /**
   * Returns the request that has maximum response size.
   * @returns {HttpRequestInfo}
   */
  maxSizeRequest() {
    return this.sort({ field: 'responseSize', dir: 'desc' }).first;
  }

  /**
   * Returns the request that took maximum time to complete.
   * @returns {HttpRequestInfo}
   */
  maxDurationRequest() {
    return this.sort({ field: 'duration', dir: 'desc' }).first;
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
    let args = [...sortArgs];

    if (typeof sortArgs[0] === 'string') {
      args = [{ field: sortArgs[0] , dir: sortArgs[1] }];
    }


    return this.query(null, null, args);
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
      const [arg] = args;
      let query;

      if (typeof arg === 'string') {
        if (REQUEST_TYPE.hasOwnProperty(arg)) {
          query = { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: arg };
        } else if (arg.indexOf('*') > -1) {
          query = { field: 'method', operator: SEARCH_OPERATOR.MATCHES, value: arg };
        } else {
          query = { field: isAbsolute(arg) ? 'url' : 'path', operator: SEARCH_OPERATOR.EQUALS, value: arg };
        }
      } else {
        query = { field: 'responseStatus', operator: SEARCH_OPERATOR.EQUALS, value: arg }
      }

      return this.query(query);
    }

    if (Array.isArray(args[0] || args[1] || args[2])) {
      const [query, groupArgs, sortArgs] = args;
      return this.query(...(query || [])).groupBy(...(groupArgs || [])).sortBy(...(sortArgs || []));
    }

    if (typeof args[0] === 'object') {
      const q = [];
      args.forEach(x => {
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

      return this.query().search(...q);
    }

    const [field, operator, value] = args;
    return this.query({ field, operator, value });
  }

  /**
   * Returns the total payload size summing all requests.
   * @returns {number}
   */
  totalPayload() {
    return [...this._requests].reduce((a, b) => a + b.payloadSize, 0);
  }

  /**
   * Returns the total response size summing all requests.
   * @returns {number}
   */
  totalSize() {
    return [...this._requests].reduce((a, b) => a + b.responseSize, 0);
  }

  /**
   * Returns the max payload size of the requests.
   * @returns {number}
   */
  maxPayload() {
    return Math.max(...[...this._requests].map(r => r.payloadSize));
  }

  /**
   * Returns the max response size of the requests.
   * @returns {number}
   */
  maxResponse() {
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
   * Prints the requests based on the passed arguments.
   */
  print(...args) {
    const [firstArg, secondArg, thirdArg, fourthArg] = args;

    if (typeof firstArg === 'number') {
      args.forEach(arg => this._reporter.report(this.get(arg)));
      return;
    }

    if (typeof firstArg === 'string') {
      const [, displayFields] = args;
      let query;

      if (REQUEST_TYPE.hasOwnProperty(firstArg)) {
        query = { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: firstArg };
      } else if (firstArg.indexOf('*') > -1) {
        query = { field: 'method', operator: SEARCH_OPERATOR.MATCHES, value: firstArg };
      } else {
        query = { field: isAbsolute(firstArg) ? 'url' : 'path', operator: SEARCH_OPERATOR.EQUALS, value: firstArg };
      }

      this._reporter.report(this.query(query), displayFields);
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

    if (firstArg && firstArg.displayFields) {
      this._reporter.report(this.query(), firstArg.displayFields);
      return;
    }

    if (Array.isArray(firstArg || secondArg || thirdArg)) {
      const lastArg = args[args.length - 1];

      let displayFields;
      if (!Array.isArray(lastArg) && typeof lastArg === 'object') {
        args.pop();
        displayFields = lastArg.displayFields;
      }

      const [query, groupArgs, sortArgs] = args;
      this._reporter.report(this.query(query, groupArgs, sortArgs), displayFields);
      return;
    }

    this._reporter.report({
      totalRequests: this.totalRequests,
      getRequestsCount: this.query(REQUEST_TYPE.GET).count,
      postRequestsCount: this.query(REQUEST_TYPE.POST).count,
      putRequestsCount: this.query(REQUEST_TYPE.PUT).count,
      deleteRequestsCount: this.query(REQUEST_TYPE.DELETE).count,
      failedRequests: this.failed().count,
      requestsExceededQuota: this.exceeded().count,
      maxPayloadSize: this.maxPayload(),
      maxResponseSize: this.maxResponse(),
      maxDuration: this.maxDuration(),
      totalPayloadSize: this.totalPayload(),
      totalResponseSize: this.totalSize()
    }, this.query(null, this._groupBy, this._sortBy));
  }

  /**
   * Prints failed requests.
   * @param {Array<string>} displayFields The fields to display.
   */
  printFailed(displayFields) {
    this._reporter.report(this.failed(), displayFields);
  }

  /**
   * Prints requests exceeds quota.
   * @param {Array<string>} displayFields The fields to display.
   */
  printExceeded(displayFields) {
    this._reporter.report(this.exceeded(), displayFields);
  }

  /**
   * Prints the last failed request.
   */
  printLastFailed() {
    this._reporter.report(this.lastFailed());
  }

  /**
   * Prints the last request.
   */
  printLast() {
    this._reporter.report(this.last());
  }

  /**
   * Prints the request that has maximum size.
   */
  printMaxSizeRequest() {
    this._reporter.report(this.maxSizeRequest());
  }

  /**
   * Prints the request that took maximum time.
   */
  printMaxDurationRequest() {
    this._reporter.report(this.maxDurationRequest());
  }

  /**
   * Displays the bar chart of responsive size.
   */
  sizeChart() {
    const labels = [...this._requests].map(r => r.id),
      data = [...this._requests].map(r => r.responseSize);

    this._reporter.visualize({
      type: 'bar',
      title: 'Response Size Of Requests',
      labels,
      data,
      format: formatBytes
    });
  }

  /**
   * Displays the bar chart of responsive size.
   */
  timeChart() {
    const labels = [...this._requests].map(r => r.id),
      data = [...this._requests].map(r => r.duration);

    this._reporter.visualize({
      type: 'bar',
      title: 'Response Time Of Requests',
      labels,
      data,
      format: formatTime
    });
  }

  /**
   * Displays bubble chart for response size and time.
   */
  sizeTimeChart() {
    const data = [...this._requests].map(r => ({
      x: r.id,
      y: r.responseSize,
      v: r.duration
    }));

    this._reporter.visualize({
      type: 'bubble',
      title: 'Response Size And Time Of Requests',
      data,
      format: formatBytes
    });
  }

  /**
   * Displays the response size distribution.
   */
  sizeDistributionChart() {
    const labels = [...this._requests].map(r => r.path),
      data = [...this._requests].map(r => r.responseSize);

    this._reporter.visualize({
      type: 'pie',
      title: 'Response Size Distribution',
      labels,
      data,
      format: formatBytes
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
        this._setConfig(content.config);
        this._updateStorage();
        window.alert(Messages.IMPORTED_SUCCESS);
        this._triggerEvent(SupervisorEvents.CONFIG_CHANGE, content.config);
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
          config: this._getConfig()
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

    if (args.length === 1 && typeof args[0] === 'string') {
      const [arg] = args;
      let watchArgs;

      if (REQUEST_TYPE.hasOwnProperty(arg)) {
        watchArgs = { field: 'method', operator: SEARCH_OPERATOR.EQUALS, value: arg };
      } else if (arg.indexOf('*') > -1) {
        watchArgs = { field: 'method', operator: SEARCH_OPERATOR.MATCHES, value: arg };
      } else {
        watchArgs = { field: isAbsolute(arg) ? 'url' : 'path', operator: SEARCH_OPERATOR.EQUALS, value: arg };
      }

      this._watches.set(watchId, watchArgs);
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
   * @param id
   * @param type
   * @param reqOptions
   */
  fire(id, type = InitiatorType.XHR, reqOptions = {}) {
    const request = this.get(id);
    request && request.fire(type, reqOptions);
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

    if (this._exclude !== null && [...this._exclude].filter(pattern => matchesGlob(pattern, xhr[XHR_METADATA_KEY].url)).length === 0) {
      return false;
    }

    return true;
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
   * Capture request information and opens network connection using fetch API.
   * @private
   */
  _fetch() {
    if (!this.busy) {
      return;
    }

    const id = this._id();

    let [url, options = {}] = [...arguments],
      { method = REQUEST_TYPE.GET, body, headers } = options;

    const payload = safeParse(body);
    const requestInfo = new HttpRequestInfo(id, url, method, payload);
    requestInfo.initiatorType = InitiatorType.FETCH;
    headers && (requestInfo.requestHeaders = new Map(Object.entries(headers)));
    this._addRequest(requestInfo);

    return new Promise((resolve, reject) => {
      this._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

      let response;

      this._alertOnRequestStart && this._reporter.report(requestInfo);

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

    const id = this._id();

    if (this._isPerformanceSupported()) {
      parameters[1] = this._appendRequestIdToUrl(url, id);
    }

    const httpRequestInfo = xhr[XHR_METADATA_KEY] || new HttpRequestInfo(id);
    httpRequestInfo.url = url.toLowerCase();
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

    if (!this.canAllowUrl(xhr[XHR_METADATA_KEY].url)) {
      this._nativeSend.call(xhr, ...parameters);
      return;
    }

    // Increment the call counter.
    this._increment();

    // Update the request.
    const httpRequestInfo = xhr[XHR_METADATA_KEY];
    httpRequestInfo.initiatorType = InitiatorType.XHR;
    httpRequestInfo.payload = safeParse(payload);
    httpRequestInfo.payloadSize = byteSize(httpRequestInfo.payload ? JSON.stringify(httpRequestInfo.payload) : '');
    this._addRequest(httpRequestInfo);

    // Listen to `onreadystatechange` event to capture the response info.
    xhr.addEventListener('readystatechange', () => {
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

      this._decrement();
      httpRequestInfo.responseStatus = xhr.status;
      httpRequestInfo.response = isJsonResponse(xhr.getResponseHeader('Content-Type')) ? safeParse(xhr.response) : xhr.response;
      this._fillParametersAndFireEvents(httpRequestInfo, xhr);
    });

    this._alertOnRequestStart && this._reporter.report(httpRequestInfo);
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

    const httpRequestInfo = xhr[XHR_METADATA_KEY] || new HttpRequestInfo(this._id());
    const { reqHeaders = new Map() } = httpRequestInfo;
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
      httpRequestInfo.timeStart = performanceEntry.startTime;
      httpRequestInfo.timeEnd = performanceEntry.responseEnd;
      httpRequestInfo.payloadByPerformance = !!performanceEntry.transferSize;
      httpRequestInfo.responseSize = httpRequestInfo.payloadByPerformance ? performanceEntry.transferSize : responseSize;
    } else {
      httpRequestInfo.payloadByPerformance = false;
      httpRequestInfo.timeEnd = performance.now();
      httpRequestInfo.responseSize = responseSize;
    }

    httpRequestInfo.duration = Math.round(httpRequestInfo.timeEnd - httpRequestInfo.timeStart);
    httpRequestInfo.exceedsQuota = this._isExceededQuota(httpRequestInfo);
    httpRequestInfo.pending = false;

    httpRequestInfo.error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, httpRequestInfo, xhrOrResponse);
    httpRequestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, httpRequestInfo, xhrOrResponse);
    this._triggerEvent(SupervisorEvents.REQUEST_END, httpRequestInfo, xhrOrResponse);
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
    this._eventEmitter.triggerEvent(eventName, this, ...args);
  }

  /**
   * Returns true if the passed request exceeds the quota.
   * @private
   */
  _isExceededQuota(request) {
    return request.payloadSize > this._quota.maxPayloadSize || request.responseSize > this._quota.maxResponseSize || request.duration > this._quota.maxDuration;
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._getConfig()));
  }

  /**
   * Returns the configuration of supervisor.
   * @private
   */
  _getConfig() {
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
      watches: JSON.stringify([...this._watches.entries()]),
      sessions: JSON.stringify([...this._sessions.entries()])
    };
  }

  /**
   * Sets the configuration of supervisor.
   * @param config
   * @private
   */
  _setConfig(config) {
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
      lockConsole
    } = config;

    Array.isArray(include) && (this._include = new Set(include));
    Array.isArray(exclude) && (this._exclude = new Set(exclude));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);
    typeof silent === 'boolean' && (this._silent = silent);
    typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
    typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
    typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
    typeof alertOnRequestStart === 'boolean' && (this._alertOnRequestStart = alertOnRequestStart);
    typeof quota === 'object' && (this._quota = { ...this._quota, ...quota });
    Array.isArray(groupBy) && (this._groupBy = groupBy);
    Array.isArray(sortBy) && (this._sortBy = sortBy);
    typeof usePerformance === 'boolean' && (this._usePerformance = usePerformance);
    typeof monkeyPatchFetch === 'boolean' && (this._monkeyPatchFetch = monkeyPatchFetch);
    typeof loadChart === 'boolean' && (this._loadChart = loadChart);
    typeof keyboardEvents === 'boolean' && (this._keyboardEvents = keyboardEvents);
    typeof persistConfig === 'boolean' && (this._persistConfig = persistConfig);
    Array.isArray(watches) && (this._watches = new Map(this._watches));
    typeof lockConsole === 'boolean' && (this._lockConsole = lockConsole);
  }

  /**
   * Returns `true` if the request matches the arguments.
   */
  _matchWatch(argsArray, request) {
    return matchCriteria(argsArray, request);
  }
}
