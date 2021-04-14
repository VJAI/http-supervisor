/**
 * Supervisor Control Panel Template.
 * @type {HTMLTemplateElement}
 */
const template = document.createElement('template');
template.innerHTML = `
<style>
  #http-supervisor-container {
    position: fixed;
    z-index: 20000;
    top: 0;
    right: calc(50% - 91px);
    display: flex;
    justify-content: center;
    align-items:center;color:#fff;
    background-color: #333;
    border: solid 1px #666;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
  }
  
  button, button:active, button:focus, button:hover, span {
    width: 36px; 
    height: 32px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border: none;
    border-right: solid 1px #666;
    box-sizing: border-box;
    background: none;
    box-shadow: none;
    outline: none;
  }
  
  button:not(:disabled) {
    cursor:pointer;
  }
  
  button svg {
    color: #fff;
  }
  
  button:disabled svg {
    color: #ccc;
  }
  
  button:not(:disabled):hover svg {
    color: #5ab7fa;
  }
</style>
<div id="http-supervisor-container">
   <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
       <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
    </svg>
   </button>
   <button style="display: none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
      </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
   </button>
   <button disabled>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
      </svg>
  </button>
   <span>
     0
   </span>
</div>
`;

/**
 * The wrapper class that controls the supervisor web component.
 */
export default class HttpSupervisorWidget {

  /**
   * The web component.
   */
  _el = null;

  /**
   * Renders the UI.
   */
  render() {
    if (this._el) {
      return;
    }

    this._el = document.createElement('http-supervisor-widget');
    document.body.appendChild(this._el);
  }

  /**
   * Shows the stop and hides the start buttons.
   */
  start() {
    this._el.start();
  }

  /**
   * Shows the hide and hides the stop buttons.
   */
  stop() {
    this._el.stop();
  }

  /**
   * Update the calls counter label.
   * @param count
   */
  updateCalls(count) {
    this._el.updateCalls(count);
  }

  /**
   * Update the total requests count.
   * @param count
   */
  updateTotalRequestsCount(count) {
    if (count > 0) {
      this._el.logIsNotEmpty();
    } else {
      this._el.logIsEmpty();
    }
  }

  /**
   * Shows the widget.
   */
  show() {
    delete this._el.style.display;
  }

  /**
   * Hides the widget.
   */
  hide() {
    this._el.style.display = 'none';
  }

  /**
   * Subscribes to the passed event.
   * @param {string} eventName
   * @param {function} handler
   */
  subscribe(eventName, handler) {
    this._el.subscribe(eventName, handler);
  }

  /**
   * Destroys the element.
   */
  destroy() {
    this._el.remove();
    this._el = null;
  }
}

/**
 * Supervisor Controls Panel Web Component.
 */
class HtmlSupervisorWidgetElement extends HTMLElement {

  _startButton = null;
  _stopButton = null;
  _clearButton = null;
  _printButton = null;
  _exportButton = null;
  _callsCountLabel = null;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    [
      this._startButton,
      this._stopButton,
      this._clearButton,
      this._printButton,
      this._exportButton,
      this._callsCountLabel
    ] = Array.from(shadowRoot.querySelector('#http-supervisor-container').children);

    this._eventsAndButtons = {
      start: this._startButton,
      stop: this._stopButton,
      clear: this._clearButton,
      print: this._printButton,
      export: this._exportButton
    };
  }

  subscribe(evt, handler) {
    this._eventsAndButtons[evt].addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handler();
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
}

window.customElements.define('http-supervisor-widget', HtmlSupervisorWidgetElement);
