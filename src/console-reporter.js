import HttpRequestInfo              from './http-request-info';
import Collection                  from './collection';
import { formatBytes, formatTime } from './util';
import { Messages, Colors }        from './constants';

/**
 * Class that is responsible for displaying the requests info to console.
 */
export default class ConsoleReporter {

  /**
   * Fields to display.
   * @type {Map}
   * @private
   */
  _fieldsToDisplay = null;

  /**
   * Ctor.
   * @param {Object} fieldsConfig
   */
  constructor(fieldsConfig) {
    fieldsConfig && (this._fieldsToDisplay = new Map(Object.entries(fieldsConfig)));
  }

  printStatusMessage(message) {
    this.print(message, Colors.BRAND, true);
  }

  /**
   * Prints the metrics summary and the requests information in console.
   * @param statsOrObj
   * @param collection
   */
  report(statsOrObj, collection) {
    if (arguments.length === 1) {
      if (statsOrObj instanceof HttpRequestInfo || statsOrObj instanceof Collection) {
        if (statsOrObj instanceof Collection && !statsOrObj.hasGroups && !statsOrObj.hasItems) {
          this.print(Messages.NO_REQUESTS, Colors.INFO, true);
          return;
        }

        this.printTitle(statsOrObj instanceof HttpRequestInfo ? Messages.REQUEST_INFO : Messages.REQUESTS_INFO);
        this._reportObject(statsOrObj);
      } else {
        this.printTitle(Messages.METRICS_SUMMARY);
        this._reportStats(statsOrObj);
      }

      return;
    }

    if (!collection.hasGroups && !collection.hasItems) {
      this.print(Messages.NO_REQUESTS, Colors.INFO, true);
      return;
    }

    this.printTitle(Messages.METRICS_SUMMARY);
    this._reportStats(statsOrObj);
    this.break();
    this.printTitle(Messages.REQUESTS_INFO);
    this._reportObject(collection);
  }

  /**
   * Prints success message.
   * @param message
   */
  success(message) {
    this.print(message, Colors.SUCCESS);
  }

  /**
   * Prints error message.
   * @param message
   */
  error(message) {
    this.print(message, Colors.ERROR);
  }

  /**
   * Prints info message.
   * @param message
   */
  info(message) {
    this.print(message, Colors.INFO);
  }

  /**
   * Prints warning message.
   * @param message
   */
  warn(message) {
    this.print(message, Colors.WARN);
  }

  /**
   * Prints message with the passed color and styles.
   * @param message
   * @param color
   * @param bold
   * @param otherStyles
   */
  print(message, color, bold = false, otherStyles) {
    const styles = [`color: ${color}`];
    bold && styles.push(`font-weight: bold`);
    otherStyles && styles.push(otherStyles);
    console.log(`%c${message}`, styles.join(';'));
  }

  /**
   * Prints section title.
   * @param message
   */
  printTitle(message) {
    this.print(message, Colors.INFO, true, `padding: 5px 250px; background-color: ${Colors.GRAY}; color: ${Colors.WHITE};margin-bottom: 10px;`);
  }

  /**
   * Prints row.
   * @param message
   */
  printRow(message) {
    this.print(message, Colors.INFO);
  }

  /**
   * Prints field name and value.
   * @param head
   * @param value
   */
  printKeyValue(head, value) {
    if (value !== null && typeof value === 'object') {
      console.log(`%c${this._getTitleWithSpaces(head)}:`, `font-weight: bold; color: ${Colors.INFO}`, value);
      return;
    }

    console.log(`%c${this._getTitleWithSpaces(head)}: %c${value}`, `font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
  }

  /**
   * Prints many fields and values in single row.
   * @param obj
   */
  printKeyValueMany(obj) {
    let msgs = [];
    let styles = [];
    Object.entries(obj).forEach(([title, value], index) => {
      msgs.push(`%c${index === 0 ? this._getTitleWithSpaces(title) : title}: %c${value}`);
      styles.push(`font-weight: bold; color: ${Colors.INFO}`, `color: ${Colors.INFO};`);
      index < Object.keys(obj).length - 1 && styles.push(`color: ${Colors.MEDIUM_GRAY}`);
    });

    console.log(msgs.join('%c | '), ...styles);
  }

  /**
   * Prints multiple messages.
   * @param messages
   */
  printMultiple(...messages) {
    console.log(...messages);
  }

  /**
   * Prints table.
   * @param array
   * @param displayFields
   */
  table(array, displayFields) {
    array.length && console.table(array, displayFields);
  }

  /**
   * Starts a group.
   * @param group
   * @param args
   */
  groupStart(group, ...args) {
    console.group(group, ...args);
  }

  /**
   * Ends the active group.
   */
  groupEnd() {
    console.groupEnd();
  }

  /**
   * Clears the console.
   */
  clear() {
    console.clear();
  }

  /**
   * Creates empty line.
   */
  break() {
    console.log(`\n`);
  }

  destroy() {
    return 0;
  }

  _getTitleWithSpaces(title) {
    return `${title}${Array(30 - title.length).fill(' ').join('')}`;
  }

  _reportStats({
                 totalRequests,
                 getRequestsCount,
                 postRequestsCount,
                 putRequestsCount,
                 deleteRequestsCount,
                 failedRequests,
                 requestsExceededQuota,
                 maxPayloadSize,
                 maxResponseSize,
                 maxDuration,
                 totalPayloadSize,
                 totalResponseSize
               }) {
    this.printKeyValueMany({
      [Messages.TOTAL_REQUESTS]: totalRequests,
      GET: getRequestsCount,
      POST: postRequestsCount,
      PUT: putRequestsCount,
      DELETE: deleteRequestsCount
    });
    this.printKeyValue(Messages.FAILED_REQUESTS, failedRequests);
    this.printKeyValue(Messages.REQUESTS_EXCEEDED_QUOTA, requestsExceededQuota);
    this.printKeyValue(Messages.MAX_PAYLOAD_SIZE, formatBytes(maxPayloadSize));
    this.printKeyValue(Messages.MAX_RESPONSE_SIZE, formatBytes(maxResponseSize));
    this.printKeyValue(Messages.MAX_DURATION, formatTime(maxDuration));
    this.printKeyValue(Messages.TOTAL_PAYLOAD_SIZE, formatBytes(totalPayloadSize));
    this.printKeyValue(Messages.TOTAL_RESPONSE_SIZE, formatBytes(totalResponseSize));
  }

  _reportObject(requestOrCollection) {
    if (requestOrCollection instanceof HttpRequestInfo) {
      this.printKeyValue(Messages.ID, requestOrCollection.id);
      this.printKeyValue(Messages.URL, requestOrCollection.url);
      this.printKeyValue(Messages.PATH, requestOrCollection.path);
      this.printKeyValue(Messages.METHOD, requestOrCollection.method);
      this.printKeyValue(Messages.PAYLOAD, requestOrCollection.payload || '-');
      this.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(requestOrCollection.payloadSize));
      this.printKeyValue(Messages.DURATION, formatTime(requestOrCollection.duration));
      this.printKeyValue(Messages.RESPONSE, requestOrCollection.response);
      this.printKeyValue(Messages.RESPONSE_SIZE, formatBytes(requestOrCollection.responseSize));
      this.printKeyValue(Messages.RESPONSE_STATUS, requestOrCollection.responseStatus);
      this.printKeyValue(Messages.IS_ERROR, requestOrCollection.error ? 'Yes' : 'No');
      this.printKeyValue(Messages.ERROR_DESC, requestOrCollection.errorDescription || '-');
      this.printKeyValue(Messages.EXCEEDS_QUOTA, requestOrCollection.exceedsQuota ? 'Yes' : 'No');
      this.printKeyValue(Messages.INITIATOR_TYPE, requestOrCollection.initiatorType);
      this.printKeyValue(Messages.PAYLOAD_SIZE_BY_PERFORMANCE, requestOrCollection.payloadByPerformance ? 'Yes' : 'No');
      return;
    }

    if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
      return;
    }

    if (requestOrCollection.hasGroups) {
      requestOrCollection.groups.forEach(group => {
        const { name, groupedBy, items } = group;

        if (typeof name === 'undefined') {
          this.groupStart(`- %c[${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
        } else if (name !== null && typeof name === 'object') {
          this.groupStart(`${groupedBy}: %c[${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`, name);
        } else {
          let groupName = name;

          if (typeof name === 'number') {
            if (['payloadSize', 'responseSize'].indexOf(groupedBy) > -1) {
              groupName = formatBytes(name);
            } else if (groupedBy === 'duration') {
              groupName = formatTime(name);
            }
          }

          this.groupStart(`${groupName} %c- [${items.length}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
        }

        this._reportObject(group);
        this.groupEnd();
      });

      return;
    }

    const items = requestOrCollection.items.map(item => {
      const displayObj = {};
      this._fieldsToDisplay.forEach((value, key) => {
        let v;
        if (typeof item[key] === 'undefined') {
          v = null;
        } else if (item[key] !== null && typeof item[key] === 'object' || Array.isArray(item[key])) {
          v = JSON.stringify(item[key]);
        } else {
          v = item[key];
        }
        displayObj[value] = v;
      });
      return displayObj;
    });

    this.table(items);
  }
}
