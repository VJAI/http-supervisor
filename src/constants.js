const HTTP_SUPERVISOR_EMOJI = '👮';

/**
 * Collection of messages used by supervisor.
 */
export const Messages = {
  ACTIVE: `‍${HTTP_SUPERVISOR_EMOJI} HTTP SUPERVISOR STARTED`,
  SLEEP: `${HTTP_SUPERVISOR_EMOJI}‍ HTTP SUPERVISOR STOPPED`,
  LOG_START: `------------------------ LOG STARTS ------------------------`,
  LOG_END: `------------------------- LOG ENDS -------------------------`,
  NO_REQUEST: `No Request Found`,
  NO_REQUESTS: `No Requests Found`,
  METRICS_SUMMARY: 'Metrics Summary',
  TOTAL_REQUESTS: 'Total Requests',
  FAILED_REQUESTS: 'Failed Requests',
  REQUESTS_EXCEEDED_QUOTA: 'Requests Exceeded Quota',
  REQUESTS_INFO: 'Requests Details',
  REQUEST_INFO: 'Request Details',
  MAX_PAYLOAD_SIZE: 'Max Payload Size',
  MAX_RESPONSE_SIZE: 'Max Response Size',
  MAX_DURATION: 'Max Duration',
  TOTAL_PAYLOAD_SIZE: 'Total Payload Size',
  TOTAL_RESPONSE_SIZE: 'Total Response Size',
  TOTAL_DURATION: 'Total Duration',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  REQUEST_NO: 'Request No',
  URL: 'Url',
  PATH: 'Path',
  QUERY: 'Query',
  METHOD: 'Type',
  PAYLOAD: 'Payload',
  PAYLOAD_SIZE: 'Payload Size',
  PAYLOAD_SIZE_WITH_BYTES: 'Payload Size (bytes)',
  DURATION: 'Duration',
  DURATION_WITH_MS: 'Duration (ms)',
  RESPONSE: 'Response',
  RESPONSE_SIZE: 'Response Size',
  RESPONSE_SIZE_WITH_BYTES: 'Response Size (bytes)',
  RESPONSE_STATUS: 'Status',
  IS_ERROR: 'Is Error?',
  ERROR_DESC: 'Error Description',
  EXCEEDS_QUOTA: 'Exceeds Quota?',
  INITIATOR_TYPE: 'Initiator Type',
  DURATION_WITH_QUEUING: 'Queuing Time Included?',
  SIZE_BY_PERFORMANCE: 'Accurate Response Size?',
  CHART_NOT_FOUND: 'Chart.js library not found',
  TIME_START: 'Time Start',
  TIME_END: 'Time End',
  IMPORTED_SUCCESS: 'Configuration Imported Successsfully!',
  IMPORTED_FAILURE: 'Failed to import configuration!',
  NO_DUPLICATE_REQUESTS: 'No duplicate requests found',
  HAS_DUPLICATES: 'Has Duplicates?',
  DUPLICATE_REQUESTS: 'Duplicate Requests',
  CATEGORY: 'Category',
  TAGS: 'Tags',
  AVERAGE_PAYLOAD_SIZE: 'Average Payload',
  AVERAGE_RESPONSE_SIZE: 'Average Response',
  AVERAGE_DURATION: 'Average Duration',
  MAX_PAYLOAD_REQUEST: 'Max Payload Request',
  MAX_RESPONSE_REQUEST: 'Max Response Request',
  MAX_DURATION_REQUEST: 'Max Duration Request'
};

/**
 * The different color codes by supervisor.
 */
export const Colors = {
  BRAND: '#f54284',
  SUCCESS: '#09b809',
  ERROR: '#e62e5c',
  INFO: '#4d4b46',
  WARN: '#e6b225',
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#aaa',
  MEDIUM_GRAY: '#ccc',
  LIGHT_GRAY: '#eee',
  ERROR_MEDIUM: '#ff6e92',
  WARN_MEDIUM: '#e3b842',
  WARN_DARK: '#bd8f15',
  YELLOW: '#f5e340',
  LIGHT_BLUE: '#b3d0f2',
  DARK_BLUE: '#082f5e',
  CHART_COLOR_1: '#558be0',
  CHART_COLOR_2: '#5cd44a',
  CHART_COLOR_3: '#f5f05b',
  CHART_COLOR_4: '#c876f5',
  CHART_COLOR_5: '#ed544c',
  CHART_BG_COLOR_1: '#fff1c9',
  CHART_BG_COLOR_2: '#f7d6d0',
  CHART_BG_COLOR_3: '#eaffd1',
  CHART_BG_COLOR_4: '#cff6ff'
};

/**
 * The different statuses of supervisor.
 */
export const SupervisorStatus = {
  Busy: 'busy',
  Idle: 'idle',
  NotReady: 'not-ready',
  Retired: 'retired'
};

/**
 * Different events fired by supervisor.
 */
export const SupervisorEvents = {
  READY: 'ready',
  START: 'start',
  STOP: 'stop',
  CLEAR: 'clear',
  RETIRE: 'retire',
  REQUEST_START: 'request-start',
  REQUEST_END: 'request-end',
  REQUEST_ERROR: 'request-error',
  EXCEEDS_QUOTA: 'exceeds-quota',
  CONFIG_CHANGE: 'config-change'
};

/**
 * Proxy object that allows to call any method in an object that not even exists.
 */
export const FAKE = new Proxy({}, { get: function () { return function () { }; } });

/**
 * The property name used in xhr object to store additional request info.
 * @type {string}
 */
export const XHR_METADATA_KEY = '__supervisor__';

/**
 * The query string added to request for capturing accurate size and response time.
 * @type {string}
 */
export const SUPERVISOR_QUERY_KEY = 'hs_rid';

/**
 * Different ajax methods.
 */
export const InitiatorType = {
  XHR: 'xhr',
  FETCH: 'fetch'
};

// Chartjs and plugin cdn paths.
export const CHARTJS_LIB_PATH = 'https://cdn.jsdelivr.net/npm/chart.js';
export const CHARTJS_ANNOTATION_PLUGIN_PATH = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@1.0.2/dist/chartjs-plugin-annotation.min.js';

/**
 * Storage key for storing supervisor configuration.
 * @type {string}
 */
export const STORAGE_KEY = 'http-supervisor';

/**
 * Display labels for `HttpRequestInfo` class props.
 */
export const HTTP_REQUEST_INFO_DISPLAY_NAMES = {
  id: Messages.REQUEST_NO,
  url: Messages.URL,
  path: Messages.PATH,
  part: Messages.PATH,
  method: Messages.METHOD,
  payload: Messages.PAYLOAD,
  payloadSize: Messages.PAYLOAD_SIZE_WITH_BYTES,
  timeStart: Messages.TIME_START,
  timeEnd: Messages.TIME_END,
  duration: Messages.DURATION_WITH_MS,
  responseStatus: Messages.RESPONSE_STATUS,
  response: Messages.RESPONSE,
  responseSize: Messages.RESPONSE_SIZE_WITH_BYTES,
  error: Messages.IS_ERROR,
  errorDescription: Messages.ERROR_DESC,
  exceedsQuota: Messages.EXCEEDS_QUOTA,
  payloadByPerformance: Messages.SIZE_BY_PERFORMANCE
};

/**
 * Different HTTP request methods.
 */
export const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

/**
 * Search operators.
 */
export const SEARCH_OPERATOR = {
  EQUALS: '=',
  NOT_EQUALS: '!=',
  LESS: '<',
  GREATER: '>',
  LESS_EQUAL: '<=',
  GREATER_EQUAL: '>=',
  STARTS_WITH: '~',
  ENDS_WITH: '^',
  CONTAINS: '%',
  NOT_CONTAINS: '!%',
  MATCHES: '*',
  NOT_MATCHES: '!*',
  IN: 'in',
  OUT: 'out',
  INCLUDE: '[]',
  EXCLUDE: ']['
};

/**
 * Export file types.
 */
export const FILE_TYPE = {
  CSV: 'csv',
  JSON: 'json'
};
