import { isAbsolute }    from './util';
import { InitiatorType } from './constants';

/**
 * Holds the http request information.
 */
export default class HttpRequestInfo {

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
   * The query in the url.
   * @type {string}
   */
  query = null;

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
   * Returns path with query.
   * @type {string}
   */
  get pathWithQuery() {
    return this.query ? `${this.path}${this.query}` : this.path;
  }

  /**
   * Returns the path's last part and query.
   * @type {string}
   */
  get partWithQuery() {
    const pathParts = (this.path || []).split('/'),
      lastPart = `/${pathParts[pathParts.length - 1]}` || '/';

    return this.query ? `${lastPart}${this.query}` : lastPart;
  }

  /**
   * True if the request error-ed out.
   * @type {boolean}
   */
  get error() {
    return this.responseStatus >= 400;
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
   * Constructor.
   */
  constructor(id, url, method, payload) {
    this.id = id;
    this.url = url;
    if (url) {
      const urlObject = isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin);
      this.path = urlObject.pathname;
      this.query = urlObject.search;
    }
    this.method = method;
    this.payload = payload;
  }
}
