import HttpRequestInfo                         from './http-request-info';
import Collection                              from './collection';
import { formatBytes, formatTime, poolColors } from './util';
import { Messages, Colors }                    from './constants';
import './console-snapshot';

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
   * True to visualize data through charts.
   * @type {boolean}
   * @private
   */
  _useVisualization = true;

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
   * Ctor.
   * @param {Object} fieldsConfig
   */
  constructor(fieldsConfig) {
    fieldsConfig && (this._fieldsToDisplay = new Map(Object.entries(fieldsConfig)));
  }

  /**
   * Does initialization stuff.
   * @param {HttpSupervisor} httpSupervisor
   */
  init(httpSupervisor) {
    this._useVisualization = !!(httpSupervisor.useVisualization && Chart);

    if (!this._useVisualization) {
      return;
    }

    Chart && (Chart.defaults.font.size = this._chartFontSize);

    this._canvasEl = document.createElement('canvas');
    this._canvasEl.style.width = `${this._chartWidth}px`;
    this._canvasEl.style.height = `${this._chartHeight}px`;
    this._canvasEl.style.display = 'none';

    document.body.appendChild(this._canvasEl);
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
      if (statsOrObj === null) {
        this.print(Messages.NO_REQUEST, Colors.INFO, true);
        return;
      } else if (statsOrObj instanceof HttpRequestInfo || statsOrObj instanceof Collection) {
        if (statsOrObj instanceof Collection && !statsOrObj.hasGroups && !statsOrObj.hasItems) {
          this.print(Messages.NO_REQUESTS, Colors.INFO, true);
          return;
        }

        statsOrObj instanceof Collection && this.printTitle(Messages.REQUESTS_INFO);
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
   * Create chart in canvans and render in console.
   * @param chartOptions
   */
  visualize(chartOptions) {
    if (!this._useVisualization) {
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
                callback: function(value) {
                  return format ? format(value): value;
                }
              }
            }
          }
        }
      });
    } else if (type === 'bubble') {
      myChart = new Chart(ctx, {
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
              borderWidth: function(context) {
                return Math.min(Math.max(1, context.datasetIndex + 1), 8);
              },
              radius: function(context) {
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
                callback: function(value) {
                  return format ? format(value): value;
                }
              }
            }
          }
        }
      });
    } else if (type === 'pie') {
      myChart = new Chart(ctx, {
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
      console.screenshot(this._canvasEl, .5, .35);
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
  printTitle(message, bgColor = Colors.GRAY) {
    this.print(message, Colors.INFO, true, `padding: 5px 250px; background-color: ${bgColor}; color: ${Colors.WHITE};margin-bottom: 10px;`);
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
    this._canvasEl.remove();
    this._canvasEl = null;
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
    if (requestOrCollection === null) {
      this.print(Messages.NO_REQUEST, Colors.INFO, true);
      return;
    }

    if (requestOrCollection instanceof HttpRequestInfo) {
      let bgColor = Colors.GRAY;
      if (requestOrCollection.error) {
        bgColor = '#ff6e92';
      } else if (requestOrCollection.exceedsQuota) {
        bgColor = '#edca6b';
      }

      console.groupCollapsed(`%c${requestOrCollection.method}  ${requestOrCollection.path} | ${requestOrCollection.responseStatus} | ${formatBytes(requestOrCollection.responseSize)} | ${formatTime(requestOrCollection.duration)}`, `padding: 5px 10px; background-color: ${bgColor}; color: ${Colors.WHITE};margin-bottom: 10px;`);
      this.printKeyValue(Messages.ID, requestOrCollection.id);
      this.printKeyValue(Messages.URL, requestOrCollection.url);
      this.printKeyValue(Messages.PATH, requestOrCollection.path);
      this.printKeyValue(Messages.METHOD, requestOrCollection.method);
      this.printKeyValue(Messages.PAYLOAD, requestOrCollection.payload || '-');
      this.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(requestOrCollection.payloadSize));
      this.printKeyValue(Messages.DURATION, formatTime(requestOrCollection.duration));
      this.printKeyValue(Messages.RESPONSE, requestOrCollection.response || '-');
      this.printKeyValue(Messages.RESPONSE_SIZE, formatBytes(requestOrCollection.responseSize));
      this.printKeyValue(Messages.RESPONSE_STATUS, requestOrCollection.responseStatus);
      this.printKeyValue(Messages.IS_ERROR, requestOrCollection.error ? 'Yes' : 'No');
      this.printKeyValue(Messages.ERROR_DESC, requestOrCollection.errorDescription || '-');
      this.printKeyValue(Messages.EXCEEDS_QUOTA, requestOrCollection.exceedsQuota ? 'Yes' : 'No');
      this.printKeyValue(Messages.INITIATOR_TYPE, requestOrCollection.initiatorType);
      this.printKeyValue(Messages.PAYLOAD_SIZE_BY_PERFORMANCE, requestOrCollection.payloadByPerformance ? 'Yes' : 'No');
      console.groupEnd();
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
        } else {
          v = item[key];
        }
        displayObj[value] = v;
      });
      return displayObj;
    });

    this.table(items);
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
}