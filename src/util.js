/**
 * Return bytes in human readable format.
 */
export function formatBytes(bytes, decimals) {
  if (bytes === 0) {
    return '0 bytes';
  }

  const k = 1024,
    dm = decimals || 2,
    sizes = ['bytes', 'kb', 'mb', 'gb'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Converts human-readable payload size to bytes.
 */
export function convertBytes(bytes) {
  if (!bytes) {
    return 0;
  }

  if (bytes.endsWith('bytes')) {
    return parseFloat(bytes);
  }

  const map = {
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024
  };

  return parseFloat(bytes) * map[bytes.substr(bytes.length - 2, 2)];
}

/**
 * Formats time in seconds.
 */
export function formatTime(time) {
  return time < 1000 ? `${time} ms` : `${time / 1000} s`;
}

/**
 * Converts human-readable time to milliseconds.
 */
export function convertTime(time) {
  if (!time) {
    return 0;
  }

  return time.endsWith('ms') ? parseFloat(time) : parseFloat(time) * 1000;
}

/**
 * Returns the byte size of the passed string.
 */
export function byteSize(str) {
  return str ? new Blob([str]).size : 0;
}

/**
 * Id generator function.
 * @param seed
 * @returns {function(): number}
 */
export function idGenerator(seed = 0) {
  return function () {
    return seed++;
  }
}

/**
 * Returns `true` if url is absolute.
 * @param url
 * @returns {boolean}
 */
export function isAbsolute(url) {
  const reg = new RegExp('/^https?:\/\/|^\/\//i');
  return reg.test(url);
}

/**
 * Load script dynamically in a web page.
 * @param src
 * @param onload
 */
export function loadScript(src, onload, onerror) {
  const script = document.createElement('script');
  script.src = src;
  onload && script.addEventListener('load', onload);
  onerror && script.addEventListener('error', onerror);
  (document.head || document.documentElement).appendChild(script);
}

/**
 * Returns random color.
 * @return {string}
 */
export function dynamicColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

/**
 * Create array of random color.
 * @param a
 * @return {Array}
 */
export function poolColors(a) {
  const pool = [];

  for(let i = 0; i < a; i++) {
    pool.push(dynamicColors());
  }

  return pool;
}

/**
 * Returns `true` if the object matches the passed criteria.
 * @param criteria
 * @param object
 * @return {boolean}
 */
export function matchCriteria(criteria, object) {
  const results = [];

  criteria.forEach(({ field, operator, value }) => {
    const v = object[field];

    if (operator === '=') {
      results.push(v === value);
    } else if (operator === '!=') {
      results.push(v !== value);
    } else if (operator === '<') {
      results.push(v < value);
    } else if (operator === '>') {
      results.push(v > value);
    } else if (operator === '<=') {
      results.push(v <= value);
    } else if (operator === '>=') {
      results.push(v >= value);
    } else if (operator === '~') {
      results.push(typeof object[field] === 'string' && v.startsWith(value));
    } else if (operator === '^') {
      results.push(typeof object[field] === 'string' && v.endsWith(value));
    } else if (operator === 'contains') {
      results.push(typeof object[field] === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === '!contains') {
      results.push(typeof object[field] === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) === -1);
    }
  });

  return results.filter(r => !r).length === 0;
}

/**
 * Returns `true` if the content type is json.
 * @param contentType
 * @return {boolean}
 */
export function isJsonResponse(contentType) {
    return contentType ? contentType.toLowerCase().startsWith('application/json') : false;
}

/**
 * Safely parses string to JSON.
 * @param string
 * @return {any}
 */
export function safeParse(string) {
  let json;
  try {
    json = JSON.parse(string);
  } catch {
    json = string;
  }
  return json;
}
