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
  const reg = /^https?:\/\/|^\/\//i;
  return reg.test(url);
}

export function loadScript(src, onload) {
  const script = document.createElement('script');
  script.src = src;
  script.addEventListener('load', onload);
  document.head.appendChild(script);
}

export function dynamicColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

export function poolColors(a) {
  const pool = [];

  for(let i = 0; i < a; i++) {
    pool.push(dynamicColors());
  }

  return pool;
}
