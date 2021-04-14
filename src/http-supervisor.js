import HttpRequestInfo from './http-request-info';
import Collection      from './collection';
import EventEmitter    from './event.emitter';
import {
  SupervisorStatus,
  SupervisorEvents,
  Messages,
  SUPERVISOR_QUERY_KEY,
  FAKE,
  XHR_METADATA_KEY, InitiatorType, CHARTJS_LIB_PATH
}                      from './constants';
import {
  idGenerator,
  convertBytes,
  convertTime,
  byteSize,
  isAbsolute, loadScript
}                      from './util';

/**
 * Supervises HTTP Network Traffic. Helps to identify duplicate requests, analyze payload and much more.
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
    maxPayloadSize: 10240, // 10kb
    maxResponseSize: 10240, // 10kb
    maxDuration: 1000 // 1s
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
   * Uses performance.getEntriesByType for accurate duration and payload info.
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
   * True to use chart.js library for data visualization.
   * @type {boolean}
   * @private
   */
  _useVisualization = true;

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
   * Native fetch method.
   * @type {function}
   * @private
   */
  _nativeFetch = fetch;

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
   * Returns the passed domains.
   * @returns {Array}
   */
  get domains() {
    return this._domains ? [...this._domains] : null;
  }

  /**
   * Returns `true` if ui is required.
   * @returns {boolean}
   */
  get renderUI() {
    return this._renderUI;
  }

  /**
   * Returns `true` if trace each request is set.
   * @returns {boolean}
   */
  get traceEachRequest() {
    return this._traceEachRequest;
  }

  /**
   * Setting `true` will print each request.
   * @param {boolean} value
   */
  set traceEachRequest(value) {
    this._traceEachRequest = value;
  }

  /**
   * Returns `true` if alert on error is set.
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
  }

  /**
   * Returns `true` if print requests that exceeds quota is set.
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
  }

  /**
   * Returns the default group parameters.
   * @returns {string[]}
   */
  get defaultGroupBy() {
    return [...this._defaultGroupBy];
  }

  /**
   * Returns the default sort parameters.
   * @returns {*[]}
   */
  get defaultSortBy() {
    return [...this._defaultSortBy];
  }

  get usePerformance() {
    return this._usePerformance;
  }

  get monkeyPatchFetch() {
    return this._monkeyPatchFetch;
  }

  get useVisualization() {
    return this._useVisualization;
  }

  /**
   * Constructor.
   * @param {object} widget
   * @param {object} reporter
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
   * @param {Array} [config.defaultGroupBy] Default grouping parameters.
   * @param {Array} [config.defaultSortBy] Default sorting parameters.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.useVisualization] True to use chart.js library for data visualization.
   */
  init(config = {}) {
    if (this._status !== SupervisorStatus.NotReady) {
      return;
    }

    const {
      domains,
      renderUI,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      defaultGroupBy,
      defaultSortBy,
      usePerformance,
      monkeyPatchFetch,
      useVisualization
    } = config;

    Array.isArray(domains) && (this._domains = new Set(domains));
    typeof renderUI === 'boolean' && (this._renderUI = renderUI);
    typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
    typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
    typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
    typeof quota === 'object' && (this._quota = { ...this._quota, ...quota });
    Array.isArray(defaultGroupBy) && (this._defaultGroupBy = defaultGroupBy);
    Array.isArray(defaultSortBy) && (this._defaultSortBy = defaultSortBy);
    typeof usePerformance === 'boolean' && (this._usePerformance = usePerformance);
    typeof monkeyPatchFetch === 'boolean' && (this._monkeyPatchFetch = monkeyPatchFetch);
    typeof useVisualization === 'boolean' && (this._useVisualization = useVisualization);

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
    });

    const renderAndStart = () => {
      this._render();
      this._reporter.init(this._useVisualization);
      this._monkeyPatch();
      this._status = SupervisorStatus.Idle;
      this.start();
    };

    if (this._useVisualization) {
      loadScript(CHARTJS_LIB_PATH, () => renderAndStart());
      return;
    }

    renderAndStart();
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
    this._widget.start();
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
    this._widget.stop();
    this._reporter.printStatusMessage(Messages.SLEEP);
    this._triggerEvent(SupervisorEvents.STOP);
  }

  /**
   * Clears the requests log.
   */
  clear() {
    this._reporter.clear();
    this._requests.clear();
    this._widget.updateTotalRequestsCount(this._requests.size);
    this._triggerEvent(SupervisorEvents.CLEAR);
  }

  /**
   * Prints the log to the passed reporter.
   */
  print() {
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
    this._eventEmitter.on(eventName, handler);
  }

  /**
   * Un-subscribes from the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  off(eventName, handler) {
    this._eventEmitter.off(eventName, handler);
  }

  /**
   * Retires the supervisor.
   */
  retire() {
    this.stop();
    this._undoMonkeyPatch();
    this._widget.destroy();
    this._widget = null;
    this._reporter.destroy && this._reporter.destroy();
    this._reporter = null;
    this._triggerEvent(SupervisorEvents.RETIRE);
    this._eventEmitter.destroy();
    this._eventEmitter = null;
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
   * Returns request belongs to the id.
   * @param id
   * @returns {HttpRequestInfo}
   */
  getRequestById(id) {
    return [...this._requests].find(r => r.id === id);
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
   * Returns requests fired for the passed url.
   * @param url
   * @returns {Collection}
   */
  getRequestByUrl(url) {
    return this.requests().search({ field: isAbsolute(url) ? 'url' : 'path', operator: '=', value: url });
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
   * @returns {Collection}
   */
  getRequestsExceededQuota() {
    return this.requests().search({ field: 'exceedsQuota', operator: '=', value: true });
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
   * Prints requests exceeds quota.
   */
  printRequestsExceededQuota() {
    this._reporter.report(this.getRequestsExceededQuota());
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
      yAxisLabel: 'bytes'
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
      yAxisLabel: 'bytes'
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
    this._widget.subscribe('export', () => this.export());
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

    let payload;

    if (body) {
      try {
        payload = JSON.parse(body);
      } catch {
        payload = body;
      }
    }

    const requestInfo = new HttpRequestInfo(id, url, method, payload);
    requestInfo.initiatorType = InitiatorType.FETCH;
    requestInfo.payloadSize = byteSize(JSON.stringify(payload) || '');
    this._requests.add(requestInfo);
    this._widget.updateTotalRequestsCount(this._requests.size);

    return new Promise((resolve, reject) => {
      this._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

      let response;

      this._nativeFetch.call(window, this._isPerformanceSupported() ? this._appendRequestIdToUrl(url, id) : url, options)
        .then(r => {
          const contentType = r.headers.get('content-type'),
            isJsonResponse = contentType.toLowerCase().startsWith('application/json');

          response = r.clone();
          return isJsonResponse ? r.json() : null;
        })
        .then(data => {
          requestInfo.response = data;
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          requestInfo.responseStatus = response.status;
          this._fillResponseParameters(requestInfo, response);
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

    xhr[XHR_METADATA_KEY].payload = payload;
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
    this._widget.updateTotalRequestsCount(this._requests.size);

    xhr.addEventListener('load', () => {
      this._decrement();
      requestInfo.responseStatus = xhr.status;

      try {
        requestInfo.response = JSON.parse(xhr.response);
      } catch {
        requestInfo.response = xhr.response;
      }

      this._fillResponseParameters(requestInfo, xhr);
    });

    this._nativeSend.call(xhr, ...parameters);
    this._triggerEvent(SupervisorEvents.REQUEST_START, requestInfo, xhr);
  }

  /**
   * Fill duration and size parameters from response.
   * @param requestInfo
   * @param xhrOrResponse
   * @private
   */
  _fillResponseParameters(requestInfo, xhrOrResponse) {
    let performanceEntry;

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
    } = xhr[XHR_METADATA_KEY];

    const httpRequestInfo = new HttpRequestInfo(id, url, method, payload);
    httpRequestInfo.initiatorType = InitiatorType.XHR;
    httpRequestInfo.payloadSize = byteSize(payload ? JSON.stringify(payload) : '');

    return httpRequestInfo;
  }

  /**
   * Returns true if `performance.getEntriesByType` is supported.
   * @returns {boolean}
   * @private
   */
  _isPerformanceSupported() {
    return this._usePerformance && !!(window.performance && window.performance.getEntriesByType);
  }

  /**
   * Append request id to url.
   * @param url
   * @param id
   * @returns {string}
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
   * @param url
   * @returns {URL}
   * @private
   */
  _createUrl(url) {
    return isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin);
  }
}
