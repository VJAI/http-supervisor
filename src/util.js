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
  return time < 500 ? `${time} ms` : `${time / 1000} s`;
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
