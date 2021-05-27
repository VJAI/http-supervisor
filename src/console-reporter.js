import HttpRequestInfo                                                         from './http-request-info';
import Collection                                                              from './collection';
import { formatBytes, formatTime, loadScript, poolColors, unloadScript }       from './util';
import { Messages, Colors, HTTP_REQUEST_INFO_DISPLAY_NAMES, CHARTJS_LIB_PATH } from './constants';
import './console-snapshot';

/**
 * Class that is responsible for displaying the requests info to console.
 */
export default class ConsoleReporter {

  /**
   * Http supervisor.
   * @type {HttpSupervisor}
   * @private
   */
  _supervisor = null;

  /**
   * True to lock console.
   * @type {boolean}
   * @private
   */
  _lockConsole = true;

  /**
   * Canvas element used for chart generation.
   * @type {HTMLCanvasElement}
   * @private
   */
  _canvasEl = null;

  /**
   * The chart font size.
   * @type {number}
   * @private
   */
  _chartFontSize = 9;

  /**
   * Chart height.
   * @type {number}
   * @private
   */
  _chartHeight = 300;

  /**
   * Chart width.
   * @type {number}
   * @private
   */
  _chartWidth = 500;

  /**
   * Native console object.
   * @type {Console}
   * @private
   */
  _originalConsole = window.console;

  /**
   * True to enable slow writing to console to avoid choking it.
   * @type {boolean}
   * @private
   */
  _delayWrite = true;

  /**
   * Number of ms to wait before writing the object to console.
   * @type {number}
   * @private
   */
  _writeDelay = 50;

  /**
   * Ctor.
   */
  constructor() {
    this._initChart = this._initChart.bind(this);
  }

  /**
   * Does initialization stuff.
   * @param {HttpSupervisor} httpSupervisor
   */
  init(httpSupervisor) {
    this._supervisor = httpSupervisor;
    const { lockConsole, loadChart } = httpSupervisor;
    this._lockConsole = lockConsole;
    this._lockConsole && this.acquireLock();
    loadChart && loadScript(CHARTJS_LIB_PATH, this._initChart, this._initChart, 'http-sup-chartjs');
  }

  printStatusMessage(message) {
    this.print(message, Colors.BRAND, true);
  }

  /**
   * Prints the metrics summary and the requests information in console.
   * @param arg1
   * @param arg2
   */
  async report(arg1, arg2) {
    if (arguments.length === 1) {
      if (!arg1) {
        this.print(Messages.NO_REQUEST, 'inherit', true);
        return;
      } else if (arg1 instanceof HttpRequestInfo || arg1 instanceof Collection) {
        if (arg1 instanceof Collection && !arg1.hasGroups && !arg1.hasItems) {
          this.print(Messages.NO_REQUESTS, 'inherit', true);
          return;
        }

        await this._reportObject(arg1.clone());
      } else {
        this.printTitle(Messages.METRICS_SUMMARY);
        this._reportStats(arg1);
      }

      return;
    }

    if (arguments.length === 2 && arg1 instanceof Collection) {
      if (!arg1.hasGroups && !arg1.hasItems) {
        this.print(Messages.NO_REQUESTS, 'inherit', true);
        return;
      }

      this.printTitle(Messages.REQUESTS_INFO);
      await this._reportObject(arg1.clone());
      return;
    }

    if (!arg2.hasGroups && !arg2.hasItems) {
      this.print(Messages.NO_REQUESTS, 'inherit', true);
      return;
    }

    this.printTitle(Messages.METRICS_SUMMARY);
    this._reportStats(arg1);
    this.break();
    this.printTitle(Messages.REQUESTS_INFO);
    await this._reportObject(arg2.clone());
  }

  /**
   * Compare the requests and print the results.
   * @param req1
   * @param req2
   */
  printComparison(req1, req2) {
    this.printTitle(`Comparing Requests ${req1.id} and ${req2.id}`);
    this.printKeyValue('Property', 'Url');
    this.printKeyValue('Request 1', req1.url);
    this.printKeyValue('Request 2', req2.url);
    this.printKeyValue('Same', req1.url === req2.url ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Payload');
    this.printKeyValue('Request 1', req1.payload || '-');
    this.printKeyValue('Request 2', req2.payload || '-');
    this.printKeyValue('Same', JSON.stringify(req1.payload) === JSON.stringify(req2.payload) ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Payload Size');
    this.printKeyValue('Request 1', req1.payloadSize || '-');
    this.printKeyValue('Request 2', req2.payloadSize || '-');
    this.printKeyValue('Same', req1.payloadSize === req2.payloadSize ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Response');
    this.printKeyValue('Request 1', req1.response || '-');
    this.printKeyValue('Request 2', req2.response || '-');
    this.printKeyValue('Same', JSON.stringify(req1.response) === JSON.stringify(req2.response) ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Response Size');
    this.printKeyValue('Request 1', req1.responseSize || '-');
    this.printKeyValue('Request 2', req2.responseSize || '-');
    this.printKeyValue('Same', req1.responseSize === req2.responseSize ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Status');
    this.printKeyValue('Request 1', req1.responseStatus);
    this.printKeyValue('Request 2', req2.responseStatus);
    this.printKeyValue('Same', req1.responseStatus === req2.responseStatus ? 'Yes' : 'No');
    this.break();

    this.printKeyValue('Property', 'Duration');
    this.printKeyValue('Request 1', req1.duration);
    this.printKeyValue('Request 2', req2.duration);
    this.printKeyValue('Same', req1.duration === req2.duration ? 'Yes' : 'No');
  }

  /**
   * Create chart in canvans and render in console.
   * @param chartOptions
   */
  visualize(chartOptions) {
    if (!window.Chart) {
      this.print(Messages.CHART_NOT_FOUND, Colors.ERROR, true);
      return;
    }

    const {
      type,
      title,
      labels,
      data,
      format
    } = chartOptions;

    const ctx = this._canvasEl.getContext('2d');
    let myChart;

    if (type === 'bar') {
      myChart = new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: [{
            label: title,
            data: data,
            backgroundColor: poolColors(data.length),
            borderColor: poolColors(data.length),
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return format ? format(value) : value;
                }
              }
            }
          }
        }
      });
    } else if (type === 'bubble') {
      myChart = window.myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          datasets: [{
            label: title,
            data: data
          }]
        },
        options: {
          responsive: false,
          aspectRatio: 1,
          plugins: {
            legend: false,
            tooltip: false,
          },
          elements: {
            point: {
              backgroundColor: this._colorize.bind(this, false),
              borderColor: this._colorize.bind(this, true),
              borderWidth: function (context) {
                return Math.min(Math.max(1, context.datasetIndex + 1), 8);
              },
              radius: function (context) {
                const size = context.chart.width;
                const base = Math.abs(context.raw.v) / 1000;
                return (size / 24) * base;
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return format ? format(value) : value;
                }
              }
            }
          }
        }
      });
    } else if (type === 'pie') {
      myChart = window.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Dataset 1',
            data: data,
            backgroundColor: poolColors(data.length)
          }]
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: title
            }
          }
        }
      });
    }

    if (!myChart) {
      return;
    }

    setTimeout(() => {
      this._invokeConsole('screenshot', this._canvasEl, 500, 300);
      myChart.destroy();
      myChart = null;
    }, 500);
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
    this.print(message, 'inherit');
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
  print(message, color = 'inherit', bold = false, otherStyles = null) {
    const styles = [`color: ${color}`];
    bold && styles.push(`font-weight: bold`);
    otherStyles && styles.push(otherStyles);
    this._invokeConsole('log', `%c${message}`, styles.join(';'));
  }

  /**
   * Prints section title.
   * @param message
   * @param bgColor
   */
  printTitle(message, bgColor = Colors.DARK_BLUE) {
    this.print(message, 'inherit', true, `padding: 5px 250px; background-color: #237aa6; color: ${Colors.WHITE};margin-bottom: 10px;border-radius:3px;`);
  }

  /**
   * Prints row.
   * @param message
   */
  printRow(message) {
    this.print(message, 'inherit');
  }

  /**
   * Prints field name and value.
   * @param head
   * @param value
   * @param titleWidth
   * @param valueColor
   */
  printKeyValue(head, value, titleWidth = 30, valueColor = 'inherit') {
    if (value !== null && typeof value === 'object') {
      this._invokeConsole('log', `%c${this._appendTextWithSpaces(head, titleWidth)}:`, `font-weight: bold; color: inherit;`, value);
      return;
    }

    this._invokeConsole('log', `%c${this._appendTextWithSpaces(head, titleWidth)}: %c${value}`, `font-weight: bold; color: inherit;`, `color: ${valueColor};`);
  }

  /**
   * Prints many fields and values in single row.
   * @param obj
   * @param titleWidth
   */
  printKeyValueMany(obj, titleWidth = 30) {
    let msgs = [];
    let styles = [];
    Object.entries(obj).forEach(([title, value], index) => {
      msgs.push(`%c${index === 0 ? this._appendTextWithSpaces(title, titleWidth) : title}: %c${value}`);
      styles.push(`font-weight: bold; color: inherit`, `color: inherit;`);
      index < Object.keys(obj).length - 1 && styles.push(`color: ${Colors.MEDIUM_GRAY}`);
    });

    this._invokeConsole('log', msgs.join('%c | '), ...styles);
  }

  /**
   * Prints multiple messages.
   * @param messages
   */
  printMultiple(...messages) {
    this._invokeConsole('log', ...messages);
  }

  /**
   * Prints table.
   * @param array
   * @param displayFields
   */
  table(array, displayFields) {
    array.length && this._invokeConsole('table', array, displayFields);
  }

  /**
   * Starts a group.
   * @param group
   * @param args
   */
  groupStart(group, ...args) {
    this._invokeConsole('group', group, ...args);
  }

  /**
   * Ends the active group.
   */
  groupEnd() {
    this._invokeConsole('groupEnd');
  }

  /**
   * Clears the console.
   */
  clear() {
    this._invokeConsole('clear');
  }

  /**
   * Creates empty line.
   */
  break() {
    this._invokeConsole('log', '\n');
  }

  /**
   * Locks the dev console.
   */
  acquireLock() {
    window.console = new Proxy(window.console, {
      get(target, propKey, receiver) {
        const origMethod = target[propKey];
        return function (...args) {
          if (args[0] !== 'http-supervisor') {
            return;
          }

          args.shift();
          origMethod.apply(this, args);
        };
      }
    });
    this._lockConsole = true;
  }

  /**
   * Releases the lock on dev console.
   */
  releaseLock() {
    window.console = this._originalConsole;
    this._lockConsole = false;
  }

  destroy() {
    this._canvasEl.remove();
    this._canvasEl = null;
    unloadScript('http-sup-chartjs');
  }

  _initChart() {
    window.Chart && (window.Chart.defaults.font.size = this._chartFontSize);

    this._canvasEl = document.createElement('canvas');
    this._canvasEl.style.width = `${this._chartWidth}px`;
    this._canvasEl.style.height = `${this._chartHeight}px`;
    this._canvasEl.width = this._chartWidth;
    this._canvasEl.height = this._chartHeight;
    this._canvasEl.style.display = 'none';

    document.body.appendChild(this._canvasEl);
  }

  _appendTextWithSpaces(title, size, equal = false) {
    title = title || '-';
    const diff = size - title.toString().length, halfDiff = Math.round(diff / 2);
    return equal ? `${Array(halfDiff).fill(' ').join('')}${title}${Array(diff - halfDiff).fill(' ').join('')}` : `${title}${Array(diff).fill(' ').join('')}`;
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

  async _reportObject(requestOrCollection) {
    const code = async () => {
      if (requestOrCollection === null) {
        this.print(Messages.NO_REQUEST, 'inherit', true);
        return;
      }

      if (requestOrCollection instanceof HttpRequestInfo) {
        const {
          id,
          pending,
          error,
          url,
          label,
          labelPending,
          errorLabel,
          category,
          tags,
          path,
          query,
          pathQuery,
          method,
          payload,
          payloadSize,
          duration,
          response,
          responseSize,
          responseStatus,
          errorDescription,
          initiatorType,
          payloadByPerformance,
          exceedsQuota
        } = requestOrCollection;

        let borderColor = Colors.GRAY;
        if (pending) {
          borderColor = Colors.LIGHT_GRAY;
        } else if (error) {
          borderColor = Colors.ERROR_MEDIUM;
        } else if (exceedsQuota) {
          borderColor = Colors.WARN_MEDIUM;
        }

        let requestLabel;
        if (requestOrCollection.error) {
          requestLabel = errorLabel || label;
        } else {
          requestLabel = pending && labelPending ? labelPending : label;
        }

        let displayUrl;
        if (requestLabel) {
          displayUrl = requestLabel.length < 75 ? this._appendTextWithSpaces(requestLabel, 75) : `${requestLabel.substring(0, 72)}...`;
        } else {
          if (pathQuery.length <= 75) {
            displayUrl = pathQuery;
          } else {
            displayUrl = pathQuery.substring(0, 10) + '...' + pathQuery.substring(pathQuery.length - 62);
          }
        }

        const duplicates = [...this._supervisor.duplicates(id)],
          duplicatesCount = duplicates.length + 1,
          exceededParameters = this._supervisor.exceededParameters(requestOrCollection);

        let statusTextColor = Colors.LIGHT_GRAY;
        if (!pending) {
          statusTextColor = error ? Colors.ERROR : Colors.SUCCESS;
        }

        const payloadColor = exceededParameters.payload === true ? Colors.WARN_DARK : 'inherit',
          responseColor = exceededParameters.response === true ? Colors.WARN_DARK : 'inherit',
          durationColor = exceededParameters.duration === true ? Colors.WARN_DARK : 'inherit';

        this._invokeConsole(
          'groupCollapsed',
          `%c#${this._appendTextWithSpaces(id, 3)} %c${this._appendTextWithSpaces(method + ' %c', 9, true)}  %c${this._appendTextWithSpaces(displayUrl, 80)} %c${this._appendTextWithSpaces(pending ? '-' : responseStatus, 5)} %c${this._appendTextWithSpaces(pending ? '-' : formatBytes(responseSize), 10)} %c${this._appendTextWithSpaces(pending ? '-' : formatTime(duration), 10)} ${duplicatesCount > 1 ? '%c' + duplicatesCount + '' : '%c'}`,
          `color: ${Colors.GRAY}; padding: 5px; border-left: solid 4px ${borderColor}; font-size: 0.6rem;`,
          `color: ${Colors.WHITE};background-color: ${pending ? Colors.LIGHT_BLUE : Colors.DARK_BLUE};padding: 3px 10px;border-radius:3px;`,
          ``,
          `color: inherit;`,
          `color: ${statusTextColor}`,
          `color: ${responseColor}`,
          `color: ${durationColor}`,
          `background-color:${Colors.YELLOW};color: #666;font-size:0.6rem;padding: 3px;`);

        this.printKeyValue(Messages.REQUEST_NO, id);
        category && this.printKeyValue(Messages.CATEGORY, category);
        tags.size > 0 && this.printKeyValue(Messages.TAGS, [...tags].join(', '));
        this.printKeyValue(Messages.URL, url);
        this.printKeyValue(Messages.PATH, path);
        this.printKeyValue(Messages.QUERY, query || '-');
        this.printKeyValue(Messages.METHOD, method);
        this.printKeyValue(Messages.PAYLOAD, payload || '-');
        this.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(payloadSize), 30, payloadColor);
        this.printKeyValue(Messages.DURATION, pending ? '-' : formatTime(duration), 30, durationColor);
        this.printKeyValue(Messages.RESPONSE, response || '-');
        this.printKeyValue(Messages.RESPONSE_SIZE, pending ? '-' : formatBytes(responseSize), 30, responseColor);
        this.printKeyValue(Messages.RESPONSE_STATUS, pending ? '-' : responseStatus, 30, statusTextColor);
        this.printKeyValue(Messages.IS_ERROR, pending ? '-' : error ? 'Yes' : 'No');
        this.printKeyValue(Messages.ERROR_DESC, errorDescription || '-');
        this.printKeyValue(Messages.EXCEEDS_QUOTA, pending ? '-' : exceedsQuota ? 'Yes' : 'No');
        this.printKeyValue(Messages.INITIATOR_TYPE, initiatorType);
        this.printKeyValue(Messages.PAYLOAD_SIZE_BY_PERFORMANCE, pending ? '-' : payloadByPerformance ? 'Yes' : 'No');
        this.printKeyValue(Messages.HAS_DUPLICATES, duplicatesCount > 1);
        duplicatesCount > 1 && this.printKeyValue(Messages.DUPLICATE_REQUESTS, duplicates.map(r => r.id).join(', '));
        this._invokeConsole('groupEnd');
        return;
      }

      if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
        return;
      }

      if (requestOrCollection.hasGroups) {
        for (const group of requestOrCollection.groups) {
          const { name, groupedBy, count } = group;

          if (typeof name === 'undefined') {
            this.groupStart(`- %c[${count}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
          } else if (name !== null && typeof name === 'object') {
            this.groupStart(`${groupedBy}: %c[${count}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`, name);
          } else {
            let groupName = name;

            if (typeof name === 'number') {
              if (['payloadSize', 'responseSize'].has(groupedBy)) {
                groupName = formatBytes(name);
              } else if (groupedBy === 'duration') {
                groupName = formatTime(name);
              }
            }

            this.groupStart(`${groupName} %c- [${count}]`, `font-size: 0.6rem; color: ${Colors.GRAY};`);
          }

          await this._reportObject(group);
          this.groupEnd();
        }

        return;
      }

      for (const item of requestOrCollection.items) {
        await this._reportObject(item);
      }
    };

    if (!this._delayWrite) {
      return code();
    }

    return new Promise(res => {
      setTimeout(async () => {
        await code();
        res();
      }, this._writeDelay);
    });
  }

  _colorize(opaque, context) {
    const value = context.raw;
    const x = value.x / 100;
    const y = value.y / 100;
    const r = this._channelValue(x, y, [250, 150, 50, 0]);
    const g = this._channelValue(x, y, [0, 50, 150, 250]);
    const b = this._channelValue(x, y, [0, 150, 150, 250]);
    const a = opaque ? 1 : 0.5 * value.v / 1000;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  _channelValue(x, y, values) {
    return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];
  }

  _invokeConsole(method, ...args) {
    if (this._lockConsole) {
      args.unshift('http-supervisor');
    }

    console[method].call(console, ...args);
  }
}
