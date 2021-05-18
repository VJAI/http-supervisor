import { byteSize, isAbsolute, mapToJson } from './util';
import { InitiatorType, REQUEST_TYPE }     from './constants';

/**
 * Holds the http request information.
 */
export default class HttpRequestInfo {

  /**
   * The URL object.
   * @type {URL}
   * @private
   */
  _urlObj = null;

  /**
   * The request no.
   * @type {number}
   */
  id = -1;

  /**
   * The url.
   * @type {string}
   * @private
   */
  _url = null;

  /**
   * Returns the url.
   * @return {string}
   */
  get url() {
    return this._urlObj ? this._urlObj.toString() : null;
  }

  /**
   * Sets the url.
   * @param value
   */
  set url(value) {
    this._url = value;

    if (value) {
      this._urlObj = isAbsolute(value) ? new URL(value) : new URL(value, document.location.origin);
    } else {
      this._urlObj = null;
    }
  }

  /**
   * Returns the domain.
   * @return {string}
   */
  get domain() {
    return this._urlObj ? this._urlObj.origin : null;
  }

  /**
   * Returns the path.
   * @return {string}
   */
  get path() {
    return this._urlObj ? this._urlObj.pathname : null;
  }

  /**
   * The query in the url.
   * @type {string}
   */
  get query() {
    return this._urlObj ? this._urlObj.search : null;
  }

  /**
   * The path with query.
   * @type {string}
   */
  get pathQuery() {
    if (!this._urlObj) {
      return null;
    }

    return this.query ? `${this.path}${this.query}` : this.path;
  }

  /**
   * The request type (GET, POST etc.)
   * @type {string}
   */
  method = 'GET';

  /**
   * The request payload.
   * @type {*}
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
   * @type {*}
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
  get error() {
    return this.responseStatus === 0 || this.responseStatus >= 400;
  }

  /**
   * The error description.
   * @type {*}
   */
  get errorDescription() {
    return this.error ? this.response : null;
  }

  /**
   * True if the request exceeds quota.
   * @type {boolean}
   */
  exceedsQuota = false;

  /**
   * Whether the ajax call is triggered by xhr or fetch.
   * @type {string}
   */
  initiatorType = InitiatorType.XHR;

  /**
   * True if the payload size is determined using performance api.
   * @type {boolean}
   */
  payloadByPerformance = true;

  /**
   * Request Headers.
   * @type {Map}
   */
  requestHeaders = new Map();

  /**
   * Response Headers.
   * @type {Map}
   */
  responseHeaders = new Map();

  /**
   * True if the request is pending.
   * @type {boolean}
   */
  pending = true;

  /**
   * Constructor.
   */
  constructor(id, url, method, payload) {
    this.id = id;
    this.url = url;
    this.method = method;
    this.payload = payload;
  }

  /**
   * Issues AJAX request using the property values.
   * @param type
   * @param reqOptions
   * @return {*}
   */
  fire(type = 'xhr', reqOptions = {}) {
    if (type === 'xhr') {
      const {
        onReadyStateChange
      } = reqOptions;
      const xhr = new XMLHttpRequest();
      onReadyStateChange && xhr.addEventListener('readystatechange', onReadyStateChange);
      xhr.open(this.method, this.url);
      Object.entries(this.requestHeaders).forEach(([header, value]) => xhr.setRequestHeader(header, value));
      this.method !== REQUEST_TYPE.GET && this.payload ? xhr.send(JSON.stringify(this.payload)) : xhr.send();
      return xhr;
    }

    const requestOptions = {
      method: this.method,
      headers: mapToJson(this.requestHeaders)
    };

    this.method !== REQUEST_TYPE.GET && this.payload && (requestOptions.body = JSON.stringify(this.payload));

    return window.fetch(this.url, requestOptions);
  }
}
