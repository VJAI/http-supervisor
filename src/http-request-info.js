import { isAbsolute }                  from './util';
import { InitiatorType, REQUEST_TYPE } from './constants';

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
   * Returns the full url of the request.
   * @return {string}
   */
  get url() {
    return this._urlObj ? this._urlObj.toString() : null;
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
   * The path in the url excluding domain.
   * @type {string}
   */
  get part() {
    if (!this._urlObj) {
      return null;
    }

    const pathParts = this.path.split('/'),
      lastPart = `/${pathParts[pathParts.length - 1]}` || '/';

    return this.query ? `${lastPart}${this.query}` : lastPart;
  }

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
  get error() {
    return this.responseStatus === 0 || this.responseStatus >= 400;
  }

  /**
   * The error description.
   * @type {string}
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
    url && (this._urlObj = isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin));
    this.method = method;
    this.payload = payload;
  }

  /**
   * Issues AJAX request using the property values.
   * @param type
   * @return {XMLHttpRequest}
   */
  fire(type = 'xhr') {
    if (type === 'xhr') {
      const request = new XMLHttpRequest();
      request.open(this.method, this.url);
      Object.entries(this.requestHeaders).forEach(([header, value]) => request.setRequestHeader(header, value));
      this.method !== REQUEST_TYPE.GET && this.payload ? request.send(JSON.stringify(this.payload)) : request.send();
      return request;
    }

    const requestOptions = {
      method: this.method,
      headers: null
    };

    window.fetch(this.url, requestOptions);
  }
}
