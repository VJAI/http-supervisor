import { isAbsolute } from './util';

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
    this.path = (isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin)).pathname;
    this.method = method;
    this.payload = payload;
  }
}
