/**
 * Supervises HTTP Network Traffic and helps to identify duplicate requests.
 */
class HttpSupervisor {

  /**
   * Array of domains to monitor.
   * @type {null|Array<string>}
   * @private
   */
  _domains = null;

  /**
   * Collection of captured requests.
   * @type {Array}
   * @private
   */
  _requests = [];

  /**
   * Status of the supervisor. It can be either "busy" or "idle".
   * @type {string}
   * @private
   */
  _status = 'idle';

  /**
   * The id count value.
   * @type {number}
   * @private
   */
  _idCount = 0;

  /**
   * Call count.
   * @type {number}
   * @private
   */
  _callsCount = 0;

  /**
   * Native XHR `open` method.
   * @type {function}
   * @private
   */
  _nativeOpen = XMLHttpRequest.prototype.open;

  /**
   * Native XHR `send` method.
   * @type {function}
   * @private
   */
  _nativeSend = XMLHttpRequest.prototype.send;

  /**
   * Container element.
   * @type {HTMLDivElement}
   * @private
   */
  _container = null;

  /**
   * The start button.
   * @type {HTMLButtonElement}
   * @private
   */
  _startButton = null;

  /**
   * The stop button.
   * @type {HTMLButtonElement}
   * @private
   */
  _stopButton = null;

  /**
   * The clear button.
   * @type {HTMLButtonElement}
   * @private
   */
  _clearButton = null;

  /**
   * The clear button.
   * @type {HTMLButtonElement}
   * @private
   */
  _printButton = null;

  /**
   * The span element.
   * @type {HTMLSpanElement}
   * @private
   */
  _callsCountLabel = null;

  /**
   * Returns `true` if busy.
   * @return {boolean}
   */
  get busy() {
    return this._status === 'busy';
  }

  init(config) {
    console.log('%c 💂‍ HTTP SUPERVISOR STARTED 💂‍', 'color: green; font-weight: bold;');

    if (typeof config === 'object') {
      const {domains} = config;
      Array.isArray(domains) && (this._domains = domains);
    }

    this._renderUI();

    const open = this._open.bind(this),
      send = this._send.bind(this);

    XMLHttpRequest.prototype.open = function () {
      open(this, ...arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      send(this, ...arguments);
    };

    this.start();
  }

  /**
   * Starts monitoring.
   */
  start() {
    this._status = 'busy';
    this._startButton.disabled = true;
    this._stopButton.disabled = false;
  }

  /**
   * Stops monitoring.
   */
  stop() {
    this._status = 'idle';
    this._startButton.disabled = false;
    this._stopButton.disabled = true;
  }

  /**
   * Clears the log.
   */
  clear() {
    console.clear();
    this._requests = [];
  }

  /**
   * Prints the log to console.
   */
  print() {
    if (this._requests.length === 0) {
      console.log('Log is empty!');
      return;
    }

    const requestsGroupedByPath = {},
      distinctUrls = [...new Set(this._requests.map(r => r.path))];

    distinctUrls.forEach(url => {
      requestsGroupedByPath[url] = {
        GET: this._getRequests(url, 'GET'),
        POST: this._getRequests(url, 'POST'),
        PUT: this._getRequests(url, 'PUT'),
        DELETE: this._getRequests(url, 'DELETE')
      };
    });

    console.log('%c ------------------------ LOG STARTS ------------------------', 'color: green; font-weight: bold;');

    console.group('General Observation');
    console.log(`Total Requests: ${this._requests.length}`);
    console.groupEnd();

    for (const group in requestsGroupedByPath) {
      const o = requestsGroupedByPath[group];
      const hasDuplicate = Object.values(o.GET).find(arr => arr.length > 1) || Object.values(o.POST)
                                                                                     .find(
                                                                                       arr => arr.length > 1) || Object.values(
        o.PUT).find(arr => arr.length > 1) || Object.values(o.DELETE).find(arr => arr.length > 1);
      hasDuplicate ? console.group(`%c ${group}`, 'color:red;') : console.group(group);
      this._logGroup('GET', o.GET);
      this._logGroup('POST', o.POST);
      this._logGroup('PUT', o.PUT);
      this._logGroup('DELETE', o.DELETE);
      console.groupEnd();
    }

    console.log('%c ------------------------ LOG ENDS ------------------------', 'color: green; font-weight: bold;');
  }

  /**
   * Renders the UI.
   * @private
   */
  _renderUI() {
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
                                          <span id="calls-count" style="width: 20px;">
                                            0
                                          <span>
                                    </div>`);

    document.body.appendChild(template);

    const $ = document.querySelector.bind(document);
    this._container = $('#http-supervisor');
    this._startButton = $('#start');
    this._stopButton = $('#stop');
    this._clearButton = $('#clear');
    this._printButton = $('#print');
    this._callsCountLabel = $('#calls-count');

    this._startButton.addEventListener('click', () => this.start());
    this._stopButton.addEventListener('click', () => this.stop());
    this._clearButton.addEventListener('click', () => this.clear());
    this._printButton.addEventListener('click', () => this.print());
  }

  /**
   * Capture request information and opens network connection using XHR.
   * @private
   */
  _open() {
    if (!this.busy) {
      return;
    }

    const [xhr, method, url] = arguments;

    xhr['id'] = this._id();
    xhr['method'] = method;
    xhr['url'] = url;

    [].shift.apply(arguments);
    this._nativeOpen.call(xhr, ...arguments);
  }

  /**
   * Sends XHR request.
   * @private
   */
  _send() {
    if (!this.busy) {
      return;
    }

    const [xhr, payload] = arguments,
      url = new URL(xhr.url);

    if (Array.isArray(this._domains) && this._domains.indexOf(url.origin) === -1) {
      this._nativeSend.call(...arguments);
      return;
    }

    this._increment();

    const requestInfo = {
      id: xhr.id,
      url: xhr.url,
      path: url.pathname,
      method: xhr.method,
      payload: payload,
      timeStart: Date.now(),
      timeEnd: null,
      error: false
    };

    this._requests.push(requestInfo);

    const handleComplete = () => {
        this._decrement();
      },
      onLoadEnd = () => {
        handleComplete();
        requestInfo.timeEnd = Date.now();
      },
      onAbort = () => {
        handleComplete();
        requestInfo.error = true;
        requestInfo.timeEnd = Date.now();
      },
      onError = () => {
        handleComplete();
        requestInfo.error = true;
        requestInfo.timeEnd = Date.now();
      },
      onTimeout = () => {
        handleComplete();
        requestInfo.error = true;
        requestInfo.timeEnd = Date.now();
      };

    xhr.addEventListener('loadend', onLoadEnd);
    xhr.addEventListener('abort', onAbort);
    xhr.addEventListener('error', onError);
    xhr.addEventListener('timeout', onTimeout);

    const args = [].shift.apply(arguments);
    this._nativeSend.call(xhr, ...arguments);
  }

  /**
   * Generates and returns unique id.
   * @return {string}
   * @private
   */
  _id() {
    return `REQ-COUNT-${this._idCount++}`;
  }

  /**
   * Increments the call counter.
   * @private
   */
  _increment() {
    this._callsCount++;
    this._updateCallsLabel();
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
    this._updateCallsLabel();
  }

  /**
   * Updates the call count label.
   * @private
   */
  _updateCallsLabel() {
    this._callsCountLabel.innerText = this._callsCount.toString();
  }

  /**
   * Group the requests by payload for the passed url and type.
   * @param url
   * @param type
   * @private
   */
  _getRequests(url, type) {
    const requestedGroupedByPayload = {},
      requests = this._requests.filter(r => r.path === url && r.method === type);

    requests.forEach(r => {
      let {payload} = r;
      payload = payload || 'empty';

      if (!requestedGroupedByPayload[payload]) {
        requestedGroupedByPayload[payload] = [];
      }

      requestedGroupedByPayload[payload].push(r);
    });

    return requestedGroupedByPayload;
  }

  /**
   * Log the requests of the passed group.
   * @param name
   * @param requestsGroup
   * @private
   */
  _logGroup(name, requestsGroup) {
    if (!Object.keys(requestsGroup).length) {
      return;
    }

    const hasDuplicate = Object.values(requestsGroup).find(arr => arr.length > 1);

    hasDuplicate ? console.group(`%c ${name}`, 'color:red;') : console.group(name);

    const hasMoreThanOne = Object.keys(requestsGroup).length > 1;

    Object.entries(requestsGroup).forEach(([key, value]) => {
      const payload = key.length > 50 ? `${key.substring(0, 50)}... }` : key;

      if (hasMoreThanOne) {
        value.length > 1 ? console.group(`%c paylod: ${payload}`, 'color: red;') : console.group(`paylod: ${payload}`);
      }

      value.forEach(x => {
        const duration = (x.timeEnd - x.timeStart) / 1000;
        x.duration = `${duration} s`;
        delete x.timeStart;
        delete x.timeEnd;
      });

      console.table(value);
      hasMoreThanOne && console.groupEnd();
    });

    console.groupEnd();
  }
}

const httpSupervisor = new HttpSupervisor();
export default httpSupervisor;
