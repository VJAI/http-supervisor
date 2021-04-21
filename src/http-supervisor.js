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
  STORAGE_KEY
}                      from './constants';
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
  safeParse
} from './util';

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
   * The domains to monitor.
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
    maxPayloadSize: 10240, // 10kb
    maxResponseSize: 10240, // 10kb
    maxDuration: 1000 // 1s
  };

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
   * Grouping parameters used in displaying requests.
   * @type {string[]}
   * @private
   */
  _groupBy = ['path', 'method'];

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
  _useVisualization = true;

  /**
   * True to use keyboard events for operating control panel.
   * @type {boolean}
   * @private
   */
  _keyboardEvents = true;

  /**
   * Collection of captured requests.
   * @type {Set}
   * @private
   */
  _requests = new Set();

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
   * Returns the passed domains.
   * @returns {Array}
   */
  get domains() {
    return this._domains ? [...this._domains] : null;
  }

  /**
   * Set the domains.
   */
  set domains(value) {
    this._domains = new Set(value || []);
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
  get useVisualization() {
    return this._useVisualization;
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
   * @param {Array<string>} [config.domains] Array of domains to monitor.
   * @param {boolean} [config.renderUI] Passing `true` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing `true` will print each request.
   * @param {boolean} [config.alertOnError] Passing `true` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing `true` will print requests that exceeds quota.
   * @param {object} [config.quota] Request Quota.
   * @param {Array} [config.groupBy] Grouping parameters used in displaying requests.
   * @param {Array} [config.sortBy] Sorting parameters used in displaying requests.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.useVisualization] True to use chart.js library for data visualization.
   * @param {boolean} [config.keyboardEvents] True to use keyboard events for operating control panel.
   * @param {Array} [config.watches] Collection of watches.
   * @param {boolean} [loadConfigFromStore = true] True to load the config from local storage.
   */
  init(config = {}, loadConfigFromStore = true) {
    if (this._status !== SupervisorStatus.NotReady) {
      return;
    }

    config = loadConfigFromStore && localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : config;

    const {
      domains,
      renderUI,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      groupBy,
      sortBy,
      usePerformance,
      monkeyPatchFetch,
      useVisualization,
      keyboardEvents,
      watches
    } = config || {};

    Array.isArray(domains) && (this._domains = new Set(domains));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);
    typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
    typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
    typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
    typeof quota === 'object' && (this._quota = { ...this._quota, ...quota });
    Array.isArray(groupBy) && (this._groupBy = groupBy);
    Array.isArray(sortBy) && (this._sortBy = sortBy);
    typeof usePerformance === 'boolean' && (this._usePerformance = usePerformance);
    typeof monkeyPatchFetch === 'boolean' && (this._monkeyPatchFetch = monkeyPatchFetch);
    typeof useVisualization === 'boolean' && (this._useVisualization = useVisualization);
    typeof keyboardEvents === 'boolean' && (this._keyboardEvents = keyboardEvents);
    Array.isArray(watches) && (this._watches = new Map(this._watches));

    // Listen to the `request-end` event to display request details based on the properties.
    this.on(SupervisorEvents.REQUEST_END, (supervisor, request) => {
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
    this.start();

    const initReporterAndFireEvent = () => {
      this._reporter.init(this);
      this._triggerEvent(SupervisorEvents.READY);
    };

    if (this._useVisualization) {
      loadScript(CHARTJS_LIB_PATH, initReporterAndFireEvent, initReporterAndFireEvent);
      return;
    }

    initReporterAndFireEvent();
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
   * Prints the log to the passed reporter.
   */
  print() {
    const collection = new Collection([...this._requests])
      .groupBy(...this._groupBy)
      .sortBy(...this._sortBy);

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
    clearStore && this.clearStore();
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
   * Returns request of the id.
   * @param {number} id The request id.
   * @returns {HttpRequestInfo}
   */
  getRequestById(id) {
    return [...this._requests].find(r => r.id === id);
  }

  /**
   * Filters the requests based on the passed type and returns as collection.
   * @param {string} method The request method (GET / POST etc.)
   * @returns {Collection}
   */
  getRequestsByType(method) {
    return this.requests().search({ field: 'method', operator: '=', value: method });
  }

  /**
   * Returns requests initiated for the passed url.
   * @param {string} url The absolute or relative url.
   * @returns {Collection}
   */
  getRequestsByUrl(url) {
    return this.requests().search({ field: isAbsolute(url) ? 'url' : 'path', operator: '=', value: url });
  }

  /**
   * Returns requests matches the passed status code.
   * @param {number} status The status code.
   * @returns {Collection}
   */
  getRequestsOfStatus(status) {
    return this.requests().search({ field: 'responseStatus', operator: '=', value: status });
  }

  /**
   * Returns the failed requests.
   * @returns {Collection}
   */
  getFailedRequests() {
    return this.requests().search({ field: 'error', operator: '=', value: true });
  }

  /**
   * Returns the requests that exceeded the quota.
   * @returns {Collection}
   */
  getRequestsExceededQuota() {
    return this.requests().search({ field: 'exceedsQuota', operator: '=', value: true });
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
   * Returns the request that has maximum response size.
   * @returns {HttpRequestInfo}
   */
  getMaxSizeRequest() {
    return this.requests().sortBy({ field: 'responseSize', dir: 'desc' }).first;
  }

  /**
   * Returns the request that took maximum time to complete.
   * @returns {HttpRequestInfo}
   */
  getMaxDurationRequest() {
    return this.requests().sortBy({ field: 'duration', dir: 'desc' }).first;
  }

  /**
   * Groups the requests based on the passed fields.
   * @param {...string} groupArgs The group fields.
   * @returns {Collection}
   */
  groupRequests(...groupArgs) {
    return this.requests().groupBy(...groupArgs);
  }

  /**
   * Sorts the requests based on the passed arguments.
   * @param {...*} sortArgs The sort parameters.
   * @returns {Collection}
   */
  sortRequests(...sortArgs) {
    return this.requests().sortBy(...sortArgs);
  }

  /**
   * Groups and sorts the requests.
   * @param {Array<string>} groupArgs Array of fields.
   * @param {Array<*>} sortArgs Array of sort parameters.
   * @returns {Collection}
   */
  groupSortRequests(groupArgs, sortArgs) {
    return this.groupRequests(...groupArgs).sortBy(...sortArgs);
  }

  /**
   * Filters requests based on the passed query.
   * @param {...*} query The search query.
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
   * Returns requests that contains the passed string.
   * @param {string} part The url part.
   * @returns {Collection}
   */
  searchRequestsContainsUrl(part) {
    return this.requests().search({ field: 'url', operator: 'contains', value: part });
  }

  /**
   * Returns requests that contains response size greater than the passed value.
   * @param {number} size The size in bytes.
   * @returns {Collection}
   */
  searchRequestsOfSizeGreaterThan(size) {
    return this.requests().search({ field: 'responseSize', operator: '>=', value: size });
  }

  /**
   * Get requests matches the query; group and sort the results based on the passed parameters.
   * @param {Array<*>} query The search queries.
   * @param {Array<string>} groupArgs The group arguments.
   * @param {Array<string>} sortArgs The sort parameters.
   * @returns {Collection}
   */
  searchGroupSortRequests(query, groupArgs, sortArgs) {
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
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequests(displayFields) {
    this._reporter.report(this.requests(), displayFields);
  }

  /**
   * Prints the requests matched the passed method (GET, POST etc.).
   * @param {string} method
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsByType(method, displayFields) {
    this._reporter.report(this.getRequestsByType(method), displayFields);
  }

  /**
   * Prints the requests that's been issued against the passed url.
   * @param {string} url The absolute or relative url.
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsByUrl(url, displayFields) {
    this._reporter.report(this.getRequestsByUrl(url), displayFields);
  }

  /**
   * Print requests that has the passed response status.
   * @param {number} status The status code.
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsOfStatus(status, displayFields) {
    this._reporter.report(this.getRequestsOfStatus(status), displayFields);
  }

  /**
   * Prints failed requests.
   * @param {Array<string>} displayFields The fields to display.
   */
  printFailedRequests(displayFields) {
    this._reporter.report(this.getFailedRequests(), displayFields);
  }

  /**
   * Prints requests exceeds quota.
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsExceededQuota(displayFields) {
    this._reporter.report(this.getRequestsExceededQuota(), displayFields);
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
   * Prints the request that has maximum size.
   */
  printMaxSizeRequest() {
    this._reporter.report(this.getMaxSizeRequest());
  }

  /**
   * Prints the request that took maximum time.
   */
  printMaxDurationRequest() {
    this._reporter.report(this.getMaxDurationRequest());
  }

  /**
   * Groups and prints the requests.
   * @param {...string|Array<string>} args The group and display arguments.
   */
  groupAndPrintRequests(...args) {
    if (Array.isArray(args[0])) {
      return this._reporter.report(this.groupRequests(...args[0]), args[1]);
    }

    this._reporter.report(this.groupRequests(...args));
  }

  /**
   * Sorts and prints the requests.
   * @param {...string|Array<string>} args The group and sort arguments.
   */
  sortAndPrintRequests(...args) {
    if (Array.isArray(args[0])) {
      return this._reporter.report(this.sortRequests(...args[0]), args[1]);
    }

    this._reporter.report(this.sortRequests(...args));
  }

  /**
   * Groups, sorts and prints the requests.
   * @param {Array<string>} groupArgs Array of fields.
   * @param {Array<*>} sortArgs Array of sort parameters.
   * @param {Array<string>} displayFields The fields to display.
   */
  groupSortAndPrintRequests(groupArgs, sortArgs, displayFields) {
    this._reporter.report(this.groupSortRequests(groupArgs, sortArgs), displayFields);
  }

  /**
   * Searches and prints the requests matches the search query.
   * @param {...*} args The search query and display fields parameters.
   */
  searchAndPrintRequests(...args) {
    if (Array.isArray(args[0])) {
      return this._reporter.report(this.searchRequests(...args[0]), args[1]);
    }

    this._reporter.report(this.searchRequests(...args));
  }

  /**
   * Print requests that has url contains the passed string.
   * @param part The url part.
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsContainsUrl(part, displayFields) {
    this._reporter.report(this.searchRequestsContainsUrl(part), displayFields);
  }

  /**
   * Print requests that has response size greater than the passed value.
   * @param {number} size The size in bytes.
   * @param {Array<string>} displayFields The fields to display.
   */
  printRequestsOfSizeGreaterThan(size, displayFields) {
    this._reporter.report(this.searchRequestsOfSizeGreaterThan(size), displayFields);
  }

  /**
   * Searches and then groups, sorts and finally prints the collection.
   * @param {Array<*>} query The search queries.
   * @param {Array<string>} groupArgs The group arguments.
   * @param {Array<string>} sortArgs The sort parameters.
   * @param {Array<string>} displayFields The fields to display.
   */
  searchGroupSortAndPrintRequests(query, groupArgs, sortArgs, displayFields) {
    this._reporter.report(this.searchGroupSortRequests(...query, ...groupArgs, ...sortArgs), displayFields);
  }

  /**
   * Displays the bar chart of responsive size.
   */
  displayResponseSizeChart() {
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
  displayResponseTimeChart() {
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
  displaySizeTimeChart() {
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
  displaySizeDistribution() {
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
   * Exports the requests to excel.
   */
  export() {
    if (this.totalRequests === 0) {
      window.alert('No Requests to export');
      return;
    }

    let csvString = `Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\r\n`;
    [...this._requests].forEach(r => {
      csvString += `${r.id},${r.url},${r.path},${r.method},${r.payloadSize || 0},${r.duration || 0},${r.responseStatus},${r.responseSize},${r.error},${r.errorDescription},${r.exceedsQuota}\r\n`;
    });

    csvString += `\r\n`;
    csvString = `data:application/csv,${encodeURIComponent(csvString)}`;

    let exportLink = document.querySelector('#http-supervisor-export');

    if (exportLink) {
      exportLink.remove();
    }

    exportLink = document.createElement('a');
    exportLink.id = 'http-supervisor-export';
    exportLink.setAttribute('href', csvString);
    exportLink.setAttribute('download', 'HttpSupervisorRequestsLog.csv');
    document.body.appendChild(exportLink);
    exportLink.click();
  }

  /**
   * Alert request that matches the passed arguments.
   * @param {...*} args The watch arguments.
   * @returns {number}
   */
  watchOn(...args) {
    const watchId = this._watchId();
    this._watches.set(watchId, args);
    this._updateStorage();
    return watchId;
  }

  /**
   * Remove the watch for the passed id.
   * @param {number} watchId The watch id.
   */
  removeWatch(watchId) {
    this._watches.remove(watchId);
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
      send = this._send.bind(this);

    this._monkeyPatchFetch && (window.fetch = this._fetch.bind(this));

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
    this._monkeyPatchFetch && (window.fetch = this._nativeFetch);
    XMLHttpRequest.prototype.open = this._nativeOpen;
    XMLHttpRequest.prototype.send = this._nativeSend;
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
      { method = 'GET', body } = options;

    const payload = safeParse(body);
    const requestInfo = new HttpRequestInfo(id, url, method, payload);
    requestInfo.initiatorType = InitiatorType.FETCH;
    requestInfo.payloadSize = byteSize(JSON.stringify(payload) || '');
    this._requests.add(requestInfo);

    return new Promise((resolve, reject) => {
      this._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

      let response;

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

    xhr[XHR_METADATA_KEY] = {
      id: id,
      method: method.toUpperCase(),
      url: url.toLowerCase()
    };

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
      url = this._createUrl(xhr[XHR_METADATA_KEY].url);

    xhr[XHR_METADATA_KEY].payload = safeParse(payload);
    parameters.shift();

    if (this._domains !== null && !this._domains.has(url.origin)) {
      this._nativeSend.call(xhr, ...parameters);
      return;
    }

    // Increment the call counter.
    this._increment();

    // Capture the request.
    const requestInfo = this._createRequest(xhr);
    this._requests.add(requestInfo);

    // Listen to `onreadystatechange` event to capture the response info.
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      this._decrement();
      requestInfo.responseStatus = xhr.status;
      requestInfo.response = isJsonResponse(xhr.getResponseHeader('Content-Type')) ? safeParse(xhr.response) : xhr.response;
      this._fillParametersAndFireEvents(requestInfo, xhr);
    };

    this._nativeSend.call(xhr, ...parameters);
    this._triggerEvent(SupervisorEvents.REQUEST_START, requestInfo, xhr);
  }

  /**
   * Fill duration and size parameters from response.
   * @private
   */
  _fillParametersAndFireEvents(requestInfo, xhrOrResponse) {
    let performanceEntry;

    // If performance API is well supported read the duration and size leveraging it.
    if (this._isPerformanceSupported()) {
      const urlName = this._appendRequestIdToUrl(requestInfo.url, requestInfo.id);
      performanceEntry = performance.getEntriesByType('resource').find(e => e.name === urlName);
    }

    const responseSize = byteSize(JSON.stringify(requestInfo.response || ''));

    if (performanceEntry) {
      requestInfo.timeStart = performanceEntry.startTime;
      requestInfo.timeEnd = performanceEntry.responseEnd;
      requestInfo.payloadByPerformance = !!performanceEntry.transferSize;
      requestInfo.responseSize = requestInfo.payloadByPerformance ? performanceEntry.transferSize : responseSize;
    } else {
      requestInfo.payloadByPerformance = false;
      requestInfo.timeEnd = performance.now();
      requestInfo.responseSize = responseSize;
    }

    requestInfo.duration = Math.round(requestInfo.timeEnd - requestInfo.timeStart);
    requestInfo.exceedsQuota = this._isExceededQuota(requestInfo);

    requestInfo.error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, requestInfo, xhrOrResponse);
    requestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, requestInfo, xhrOrResponse);
    this._triggerEvent(SupervisorEvents.REQUEST_END, requestInfo, xhrOrResponse);
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
   * Creates request object from the XHR object.
   * @private
   */
  _createRequest(xhr) {
    const {
      id,
      url,
      method,
      payload
    } = xhr[XHR_METADATA_KEY];

    const httpRequestInfo = new HttpRequestInfo(id, url, method, payload);
    httpRequestInfo.initiatorType = InitiatorType.XHR;
    httpRequestInfo.payloadSize = byteSize(payload ? JSON.stringify(payload) : '');

    return httpRequestInfo;
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      traceEachRequest: this._traceEachRequest,
      alertOnError: this._alertOnError,
      alertOnExceedQuota: this._alertOnExceedQuota,
      usePerformance: this._usePerformance,
      quota: this._quota,
      domains: this._domains,
      watches: JSON.stringify([...this._watches.entries()])
    }));
  }

  /**
   * Returns `true` if the request matches the arguments.
   */
  _matchWatch(argsArray, request) {
    return matchCriteria(argsArray, request);
  }
}
