// Polyfill
import { Colors, SEARCH_OPERATOR } from './constants';

Array.prototype.has = function (item) {
  return this.indexOf(item) > -1;
};

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
  return time < 1000 ? `${time.toFixed(2)} ms` : `${(time / 1000).toFixed(2)} s`;
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
 * @param headEl
 */
export function loadScript(src, headEl) {
  return new Promise((res, rej) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', res);
    script.addEventListener('error', rej);
    (headEl || document.head || document.documentElement).appendChild(script);
  });
}

/**
 * Removes the script.
 * @param id
 */
export function unloadScript(id) {
  const script = document.getElementById('http-sup-chartjs');
  script && script.remove();
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
    pool.push(Colors[`CHART_COLOR_${i + 1}`] || dynamicColors());
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

    if (operator === SEARCH_OPERATOR.EQUALS) {
      results.push(v === value);
    } else if (operator === SEARCH_OPERATOR.NOT_EQUALS) {
      results.push(v !== value);
    } else if (operator === SEARCH_OPERATOR.LESS) {
      results.push(v < value);
    } else if (operator === SEARCH_OPERATOR.GREATER) {
      results.push(v > value);
    } else if (operator === SEARCH_OPERATOR.LESS_EQUAL) {
      results.push(v <= value);
    } else if (operator === SEARCH_OPERATOR.GREATER_EQUAL) {
      results.push(v >= value);
    } else if (operator === SEARCH_OPERATOR.STARTS_WITH) {
      results.push(typeof v === 'string' && v.startsWith(value));
    } else if (operator === SEARCH_OPERATOR.ENDS_WITH) {
      results.push(typeof v === 'string' && v.endsWith(value));
    } else if (operator === SEARCH_OPERATOR.CONTAINS) {
      results.push(typeof v === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === SEARCH_OPERATOR.NOT_CONTAINS) {
      results.push(typeof v === 'string' && !v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === SEARCH_OPERATOR.MATCHES) {
      results.push(typeof v === 'string' && matchesGlob(value, v));
    } else if (operator === SEARCH_OPERATOR.NOT_MATCHES) {
      results.push(typeof v === 'string' && !matchesGlob(value, v));
    } else if (operator === SEARCH_OPERATOR.IN) {
      results.push(Array.isArray(value) && value.indexOf(v) > -1);
    } else if (operator === SEARCH_OPERATOR.OUT) {
      results.push(Array.isArray(value) && value.indexOf(v) === -1);
    } else if (operator === SEARCH_OPERATOR.INCLUDE) {
      results.push(v instanceof Set && v.has(value));
    } else if (operator === SEARCH_OPERATOR.EXCLUDE) {
      results.push(v instanceof Set && !v.has(value));
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

/**
 * Converts JS map to plain object.
 * @param map
 */
export function mapToJson(map) {
  const obj = {};

  map.forEach(function(value, key){
    obj[key] = value
  });

  return obj;
}

/**
 * https://stackoverflow.com/questions/24558442/is-there-something-like-glob-but-for-urls-in-javascript
 * @private
 */
export function matchesGlob(pattern, input) {
  const re = new RegExp(pattern.toLowerCase().replace(/([.?+^$[\]\\(){}|\/-])/g, "\\$1").replace(/\*/g, '.*'));
  return re.test(input.toLowerCase());
}

/**
 * Copies text to clipboard.
 * @param content
 */
export function copyText(content) {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.value = content;
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  input.remove();
}

// https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path
export function readValue(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}

export function trimEndSlash(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
