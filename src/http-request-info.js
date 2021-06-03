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
   * Returns path with domain.
   * @return {string}
   */
  get pathDomain() {
    return this._urlObj ? `${this.domain}${this.path}` : null;
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
   * Returns url object.
   * @return {URL}
   */
  get urlObj() {
    return this._urlObj;
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
   * Request category.
   * @type {string}
   */
  category = null;

  /**
   * The display label for url.
   * @type {string}
   */
  label = null;

  /**
   * The display label for url when request is pending.
   * @type {string}
   */
  labelPending = null;

  /**
   * Error label.
   * @type {string}
   */
  errorLabel = null;

  /**
   * Collection of tags.
   * @type {Set<any>}
   */
  tags = new Set();

  /**
   * Request quota.
   * @type {object}
   */
  quota = null;

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
   * Returns a cloned copy.
   * @return {HttpRequestInfo}
   */
  clone() {
    return Object.assign(new HttpRequestInfo(), this);
  }
}
