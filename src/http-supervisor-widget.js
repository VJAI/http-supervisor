/**
 * Supervisor Control Panel Template.
 * @type {HTMLTemplateElement}
 */
import { SupervisorEvents } from './constants';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    --color: #eee;
    --bg-color: #333;
    --hover-color: #5ab7fa;
    --disabled-color: #ccc;
    --border-color: #666;
    --font-size: 12px;
    --index: 20000;
    --popover-width: 350px;
    --box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    color: var(--color);
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  .http-supervisor-container {
    position: fixed;
    top: 0;
    right: calc(50% - 91px);
    z-index: var(--index);
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: var(--bg-color);
    border: solid 1px var(--border-color);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: var(--font-size);
    box-sizing: border-box;
    color: var(--font-color);
    box-shadow: var(--box-shadow);
  }

   button, button:active, button:focus, button:hover, span {
    width: 30px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-sizing: border-box;
    background: none;
    box-shadow: none;
    outline: none;
  }

  button:not(:disabled) {
    cursor:pointer;
  }

  button svg {
    color: var(--color);
  }

  button:disabled svg {
    color: var(--disabled-color);
  }

  button:not(:disabled):hover svg {
    color: var(--hover-color);
  }

  button:not(last-child), span {
    border-right: solid 1px var(--border-color);
  }

  .popover-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ' ';
    display: none;
  }

  .popover-content {
    position: fixed;
    top: 38px;
    width: var(--popover-width);
    background-color: var(--bg-color);
    right: calc(50% - 216px);
    border-radius: 6px;
    padding: 20px;
    font-size: var(--font-size);
    box-shadow: var(--box-shadow);
    z-index: var(--index);
    display: none;
  }

  .popover-content .popover-close {
    position: absolute;
    right: 8px;
    top: 8px;
  }

  .active {
    display: block;
  }

  .popover-content:before {
    position: absolute;
    z-index: -1;
    content: "";
    right: calc(50% - 65px);
    top: -10px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent var(--bg-color) transparent;
  }

  .popover-content input[type="number"], .popover-content input[type="text"] {
    background-color: transparent;
    color: var(--color);
    outline: none;
    border: none;
    border-bottom: solid 1px var(--border-color);
    font-size: var(--font-size);
    width: 60px;
  }

  .popover-content form {
    margin-bottom: 0;
  }

  .popover-content form div {
    display: flex;
    align-items: center;
  }

  .popover-content h4 {
    margin: 0;
    margin-bottom: 8px;
    color: var(--disabled-color);
    text-transform: uppercase;
    font-size: 8px;
    letter-spacing: 1px;
  }

  .popover-content fieldset {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 5px;
    grid-row-gap: 4px;
    border: dashed 1px var(--border-color);
    margin-bottom: 15px;
    padding: 6px 12px;
  }

  .popover-content .first div label {
    width: 140px;
  }

  .popover-content .second div label {
    width: 80px;
  }

  .popover-content .third {
    display: flex;
    border: none;
    padding: 0;
  }

  .popover-content .third button {
    border: solid 1px var(--border-color);
  }

  .popover-content .fourth {
    border: none;
    padding: 0;
    display: none;
    margin-bottom: 0;
    grid-template-columns: 1fr;
  }

  .popover-content .fourth.active {
    display: grid;
  }

  .advanced-container {
    display: flex;
    align-items: center;
  }

  .advanced-container svg {
    width: 10px;
    height: 10px;
    position: relative;
    top: -5px;
    margin-left: 5px;
  }
</style>
<div class="http-supervisor-container">
   <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
       <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
    </svg>
   </button>
   <button style="display: none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
      </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
   </button>
   <button disabled>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
      </svg>
  </button>
   <span>
     0
   </span>
   <button>
     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
   </svg>
   </button>
</div>
<div class="popover">
  <div class="popover-overlay"></div>
  <div class="popover-content">
    <a href="#" class="popover-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ccc" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg>
    </a>
    <form>
      <h4>Options</h4>
      <fieldset class="first">
        <div>
          <label>Trace Request:</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Alert Error:</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Alert Quota Exceed:</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Use Performance:</label>
          <input type="checkbox" />
        </div>
      </fieldset>

      <h4>Quota</h4>
      <fieldset class="second">
        <div>
          <label>Payload:</label>
          <input type="number" min="1" />
        </div>
        <div>
          <label>Response:</label>
          <input type="number" min="1" />
        </div>
        <div>
          <label>Duration:</label>
          <input type="number" min="1" />
        </div>
      </fieldset>

      <h4>Visualization</h4>
      <fieldset class="third">
        <button title="Response Size Chart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
        </button>
        <button title="Response Duration Chart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
        </button>
        <button title="Response Size And Duration Chart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
        </button>
        <button title="Response Size Distribution">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
              <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
            </svg>
        </button>
      </fieldset>

      <div class="advanced-container">
        <h4>Advanced</h4>
        <svg style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down expand" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
        <svg style="cursor:pointer; display: none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up collapse" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
          <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
      </div>

      <fieldset class="fourth">
        <div>
          <label>Domains:</label>
          <input type="text" style="flex-grow: 1" />
        </div>
        <div>
          <label>Keyboard Events:</label>
          <input type="checkbox" />
        </div>
      </fieldset>
    </form>
  </div>
</div>
`;

/**
 * The wrapper class that controls the supervisor web component.
 */
export default class HttpSupervisorWidget {

  /**
   * The control panel web component.
   */
  _el = null;

  /**
   * The supervisor.
   * @type {HttpSupervisor}
   * @private
   */
  _httpSupervisor = null;

  /**
   * ctor.
   */
  constructor() {
    this._onStart = this._onStart.bind(this);
    this._onStop = this._onStop.bind(this);
    this._updateTotalRequestsCount = this._updateTotalRequestsCount.bind(this);
    this._updateLabelsCount = this._updateLabelsCount.bind(this);
  }

  /**
   * Initialize stuff.
   * @param httpSupervisor
   */
  init(httpSupervisor) {
    this._httpSupervisor = httpSupervisor;
  }

  /**
   * Renders the UI.
   */
  render() {
    if (this._el) {
      return;
    }

    document.body.appendChild(this._el = document.createElement('http-supervisor-widget'));

    const {
      domains,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      usePerformance,
      keyboardEvents
    } = this._httpSupervisor;

    this._el.setState({
      domains,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      usePerformance,
      keyboardEvents
    });

    // Listen to supervisor events.
    this._httpSupervisor.on(SupervisorEvents.START, this._onStart);
    this._httpSupervisor.on(SupervisorEvents.STOP, this._onStop);
    this._httpSupervisor.on(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateLabelsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_END, this._updateLabelsCount);

    // Listen to web component events.
    this._el.subscribe('start', () => this._httpSupervisor.start());
    this._el.subscribe('stop', () => this._httpSupervisor.stop());
    this._el.subscribe('clear', () => this._httpSupervisor.clear());
    this._el.subscribe('print', () => this._httpSupervisor.print());
    this._el.subscribe('export', () => this._httpSupervisor.export());
    this._el.subscribe('traceEachRequestChange', (ctrl) => this._httpSupervisor.traceEachRequest = ctrl.checked);
    this._el.subscribe('alertOnErrorChange', (ctrl) => this._httpSupervisor.alertOnError = ctrl.checked);
    this._el.subscribe('alertOnExceedQuotaChange', (ctrl) => this._httpSupervisor.alertOnExceedQuota = ctrl.checked);
    this._el.subscribe('usePerformanceAPIChange', (ctrl) => this._httpSupervisor.usePerformance = ctrl.checked);
    this._el.subscribe('maxPayloadSizeChange', (ctrl) => this._httpSupervisor.quota = { maxPayloadSize: parseInt(ctrl.value) });
    this._el.subscribe('maxResponseSizeChange', (ctrl) => this._httpSupervisor.quota = { maxResponseSize: parseInt(ctrl.value) });
    this._el.subscribe('maxDurationChange', (ctrl) => this._httpSupervisor.quota = { maxDuration: parseInt(ctrl.value) });
    this._el.subscribe('responseSizeChart', () => this._httpSupervisor.displayResponseSizeChart());
    this._el.subscribe('responseTimeChart', () => this._httpSupervisor.displayResponseTimeChart());
    this._el.subscribe('responseSizeTimeChart', () => this._httpSupervisor.displaySizeTimeChart());
    this._el.subscribe('responseSizeDistributionChart', () => this._httpSupervisor.displaySizeDistribution());
    this._el.subscribe('domainsChange', (ctrl) => this._httpSupervisor.domains = ctrl.value.split(',').map(x => x.trim()));
    this._el.subscribe('keyboardEventsChange', ctrl => this._httpSupervisor.keyboardEvents = ctrl.checked);
  }

  /**
   * Shows the widget.
   */
  show() {
    this._el.style.display = 'block';
  }

  /**
   * Hides the widget.
   */
  hide() {
    this._el.style.display = 'none';
  }

  /**
   * Destroys the element.
   */
  destroy() {
    this._httpSupervisor.off(SupervisorEvents.START, this._onStart);
    this._httpSupervisor.off(SupervisorEvents.STOP, this._onStop);
    this._httpSupervisor.off(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateLabelsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_END, this._updateLabelsCount);
    this._httpSupervisor = null;
    this._el.cleanup();
    this._el.remove();
    this._el = null;
  }

  /**
   * Supervisor start handler.
   */
  _onStart() {
    this._el.start();
  }

  /**
   * Supervisor stop handler.
   */
  _onStop() {
    this._el.stop();
  }

  /**
   * Update the calls counter label.
   */
  _updateLabelsCount() {
    this._el.updateCalls(this._httpSupervisor.onGoingCallsCount);
  }

  /**
   * Update the total requests count.
   */
  _updateTotalRequestsCount() {
    const count = this._httpSupervisor.totalRequests;

    if (count > 0) {
      this._el.logIsNotEmpty();
    } else {
      this._el.logIsEmpty();
    }
  }
}

/**
 * Supervisor Controls Panel Web Component.
 */
class HtmlSupervisorWidgetElement extends HTMLElement {

  // Panel Controls
  _startButton = null;
  _stopButton = null;
  _clearButton = null;
  _printButton = null;
  _exportButton = null;
  _moreButton = null;
  _callsCountLabel = null;

  // Popover Controls
  _popover = null;
  _popoverClose = null;
  _overlay = null;
  _traceEachRequestCheckbox = null;
  _alertOnErrorCheckbox = null;
  _alertOnQuotaExceedCheckbox = null;
  _usePerformanceAPICheckbox = null;
  _maxPayloadSizeTextbox = null;
  _maxResponseSizeTextbox = null;
  _maxDurationTextbox = null;
  _responseSizeChartButton = null;
  _responseTimeChartButton = null;
  _responseSizeTimeChartButton = null;
  _responseSizeDistributionChartButton = null;
  _domainsTextbox = null;
  _keyboardEventsCheckbox = null;
  _expandButton = null;
  _collapisbleFieldSet = null;

  constructor() {
    super();

    this._handleKeyPress = this._handleKeyPress.bind(this);

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this._popover = shadowRoot.querySelector('.popover-content');

    [
      this._startButton,
      this._stopButton,
      this._clearButton,
      this._printButton,
      this._exportButton,
      this._callsCountLabel,
      this._moreButton,
      this._traceEachRequestCheckbox,
      this._alertOnErrorCheckbox,
      this._alertOnQuotaExceedCheckbox,
      this._usePerformanceAPICheckbox,
      this._maxPayloadSizeTextbox,
      this._maxResponseSizeTextbox,
      this._maxDurationTextbox,
      this._responseSizeChartButton,
      this._responseTimeChartButton,
      this._responseSizeTimeChartButton,
      this._responseSizeDistributionChartButton,
      this._domainsTextbox,
      this._keyboardEventsCheckbox
    ] = [
      ...Array.from(shadowRoot.querySelector('.http-supervisor-container').children),
      ...Array.from(this._popover.querySelectorAll('input,button'))
    ];

    this._eventsAndControls = {
      start: this._startButton,
      stop: this._stopButton,
      clear: this._clearButton,
      print: this._printButton,
      export: this._exportButton,
      traceEachRequestChange: this._traceEachRequestCheckbox,
      alertOnErrorChange: this._alertOnErrorCheckbox,
      alertOnExceedQuotaChange: this._alertOnQuotaExceedCheckbox,
      usePerformanceAPIChange: this._usePerformanceAPICheckbox,
      maxPayloadSizeChange: this._maxPayloadSizeTextbox,
      maxResponseSizeChange: this._maxResponseSizeTextbox,
      maxDurationChange: this._maxDurationTextbox,
      responseSizeChart: this._responseSizeChartButton,
      responseTimeChart: this._responseTimeChartButton,
      responseSizeTimeChart: this._responseSizeTimeChartButton,
      responseSizeDistributionChart: this._responseSizeDistributionChartButton,
      domainsChange: this._domainsTextbox,
      keyboardEventsChange: this._keyboardEventsCheckbox
    };

    this._expandButton = shadowRoot.querySelector('.expand');
    this._collapseButton = shadowRoot.querySelector('.collapse');
    this._collapisbleFieldSet = shadowRoot.querySelector('.fourth');
    this._popoverClose = shadowRoot.querySelector('.popover-close');
    this._overlay = shadowRoot.querySelector('.popover-overlay');

    this._moreButton.addEventListener('click', () => this._isPopoverActive() ? this._hidePopover() : this._showPopover());

    this._expandButton.addEventListener('click', () => {
      this._collapisbleFieldSet.classList.add('active');
      this._expandButton.style.display = 'none';
      this._collapseButton.style.display = 'block';
    });

    this._collapseButton.addEventListener('click', () => {
      this._collapisbleFieldSet.classList.remove('active');
      this._expandButton.style.display = 'block';
      this._collapseButton.style.display = 'none';
    });

    this._popoverClose.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      this._hidePopover();
    });

    this._overlay.addEventListener('click', () => this._hidePopover());
    this._keyboardEventsCheckbox.addEventListener('change', () => {
      if (this._keyboardEventsCheckbox.checked) {
        this._listenToKeyPressEvent();
      } else {
        this._unlistenToKeyPressEvent();
      }
    });
  }

  setState({
    domains,
    traceEachRequest,
    alertOnError,
    alertOnExceedQuota,
    quota,
    usePerformance,
    keyboardEvents
  }) {
    Array.isArray(domains) && (this._domainsTextbox.value = domains.join(','));
    this._traceEachRequestCheckbox.checked = traceEachRequest;
    this._alertOnErrorCheckbox.checked = alertOnError;
    this._alertOnQuotaExceedCheckbox.checked = alertOnExceedQuota;
    this._maxPayloadSizeTextbox.value = quota.maxPayloadSize;
    this._maxResponseSizeTextbox.value = quota.maxResponseSize;
    this._maxDurationTextbox.value = quota.maxDuration;
    this._usePerformanceAPICheckbox.checked = usePerformance;
    this._keyboardEventsCheckbox.checked = keyboardEvents;
    keyboardEvents && this._listenToKeyPressEvent();
  }

  subscribe(evt, handler) {
    const ctrl = this._eventsAndControls[evt],
      evtName = ctrl instanceof HTMLButtonElement ? 'click' : 'change';

    ctrl.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      handler(ctrl, this);
    });
  }

  start() {
    this._startButton.style.display = 'none';
    this._stopButton.style.display = 'flex';
  }

  stop() {
    this._startButton.style.display = 'flex';
    this._stopButton.style.display = 'none';
  }

  updateCalls(count) {
    this._callsCountLabel.innerText = count.toString();
  }

  logIsEmpty() {
    [this._clearButton, this._printButton, this._exportButton].forEach(b => b.disabled = true);
  }

  logIsNotEmpty() {
    [this._clearButton, this._printButton, this._exportButton].forEach(b => b.disabled = false);
  }

  cleanup() {
    this._unlistenToKeyPressEvent();
  }

  _isPopoverActive() {
    return this._popover.classList.contains('active');
  }

  _showPopover() {
    [this._popover, this._overlay].forEach(el => el.classList.add('active'));
  }

  _hidePopover() {
    [this._popover, this._overlay].forEach(el => el.classList.remove('active'));
  }

  _listenToKeyPressEvent() {
    document.addEventListener('keydown', this._handleKeyPress);
  }

  _unlistenToKeyPressEvent() {
    document.removeEventListener('keydown', this._handleKeyPress);
  }

  _handleKeyPress(event) {
    if (event.ctrlKey) {
      if (event.key === 's') {
        if (this._startButton.style.display === 'none') {
          this._stopButton.click();
        } else {
          this._startButton.click();
        }
      } else if (event.key === 'c') {
        this._clearButton.click();
      } else if (event.key === 'p') {
        this._printButton.click();
      } else if (event.key === 'e') {
        this._exportButton.click();
      } else if (event.key === 'm') {
        if (this._isPopoverActive()) {
          this._hidePopover();
        } else {
          this._showPopover();
        }
      } else if (event.key === 't') {
        if (this.style.display === 'none') {
          this.style.display = 'block';
        } else {
          this.style.display = 'none';
        }
      }

      return;
    }

    if (event.key.toUpperCase() === 'ESCAPE' || event.key.toUpperCase() === 'ESC') {
      this._hidePopover();
    }
  }
}

window.customElements.define('http-supervisor-widget', HtmlSupervisorWidgetElement);
