/**
 * Supervisor Control Panel Template.
 * @type {HTMLTemplateElement}
 */
import { SupervisorEvents, SupervisorStatus } from './constants';

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
    --popover-pointer-position: 0;
    color: var(--color);
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  .http-supervisor-container {
    position: fixed;
    top: 0;
    right: calc(50% - 100px);
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
    box-sizing: border-box;
    background: none;
    box-shadow: none;
    outline: none;
    border: none;
    border-right: solid 1px var(--border-color);
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

  .counts-label {
    width: auto;
    padding: 0 8px;
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
    background-color: var(--bg-color);
    right: calc(50% - 195px);
    border-radius: 6px;
    font-size: var(--font-size);
    box-shadow: var(--box-shadow);
    z-index: var(--index);
    display: none;
    --position: 0;
  }
  
  .popover-content > div {
    width: var(--popover-width);
    max-height: calc(100vh - 78px);
    overflow-y: scroll;
    padding: 20px;
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
    left: var(--position);
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

  .popover-content button {
    border: solid 1px var(--border-color);
  }

  .popover-content .fourth {
    margin-bottom: 0;
    display: none;
  }

  .popover-content .fourth.active {
    display: grid;
  }
  
  .fourth .span2 {
    grid-column: 1 / span 2;
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
  
  .stop-watch {
    display: flex;
  }
  
  .stop-watch input {
    display: none;
  }
  
  .stop-watch .timer {
    display: inline-block;
    border-right: solid 1px var(--border-color);
    padding: 0 8px;
  }
  
  .stop-watch .timer .cell {
    width: 0.6em;
    height: 26px;
    overflow: hidden;
    position: relative;
    float: left;
  }
  
  .stop-watch .timer .cell .numbers {
    width: 0.6em;
    line-height: 26px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .stop-watch .timer-controls {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .watch-running .timer .numbers {
    animation-play-state: running;
  }
  
  .watch-paused .timer .numbers {
    animation-play-state: paused;
  }
  
  .watch-stopped .timer .numbers {
    animation: none;
  }
  
  @keyframes moveten {
    0% {
      top: 0;
    }
    100% {
      top: -260px;
    }
  }
  
  @keyframes movesix {
    0% {
      top: 0;
    }
    100% {
      top: -156px;
    }
  }
  
  .moveten {
    animation: moveten 1s steps(10, end) infinite;
    animation-play-state: paused;
  }
  
  .movesix {
    animation: movesix 1s steps(6, end) infinite;
    animation-play-state: paused;
  }
  
  .tenminute {
    animation-duration: 3600s;
  }
  
  .minute {
    animation-duration: 600s;
  }
  
  .tensecond {
    animation-duration: 60s;
  }
  
  .second {
    animation-duration: 10s;
  }
  
  .millisecond {
    animation-duration: 1s;
  }
  
  .tenmillisecond {
    animation-duration: 0.1s;
  }
  
  .hundredmillisecond {
    animation-duration: 0.01s;
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
   </button>
   <button disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
      </svg>
  </button>
    <div class="stop-watch" style="display: none">
      <div class="timer-controls">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
          </svg>
        </button>
        <button>
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
      </div>
      <div class="timer">
        <div class="cell">
          <div class="numbers tenminute movesix">0 1 2 3 4 5 6</div>
        </div>
        <div class="cell">
          <div class="numbers minute moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div class="cell divider">
          <div class="numbers">:</div>
        </div>
        <div class="cell">
          <div class="numbers tensecond movesix">0 1 2 3 4 5 6</div>
        </div>
        <div class="cell">
          <div class="numbers second moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div class="cell divider">
          <div class="numbers">:</div>
        </div>
        <div class="cell">
          <div class="numbers millisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div class="cell">
          <div class="numbers tenmillisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
        <div class="cell">
          <div class="numbers hundredmillisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
        </div>
      </div>
    </div>
   <span class="counts-label">
     0 / 0
   </span>
   <button style="border:none;">
     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
   </svg>
   </button>
</div>
<div class="popover">
  <div class="popover-overlay"></div>
  <div class="popover-content">
    <div>
      <a href="#" class="popover-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ccc" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
      </a>
      <form>
        <h4>Options</h4>
        <fieldset class="first">
          <div>
            <label>Silent:</label>
            <input type="checkbox" />
          </div>
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
            <label>Alert Request Start:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Lock Console:</label>
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
          <div class="span2">
            <label>Include:</label>
            <input type="text" style="flex-grow: 1" />
          </div>
          <div class="span2">
            <label>Exclude:</label>
            <input type="text" style="flex-grow: 1" />
          </div>
          <div>
            <label>Keyboard Events:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Persist Config:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Use Performance:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>StopWatch:</label>
            <input type="checkbox" />
          </div>
          <div style="grid-column: span 2;">
            <button title="Import Configuration" style="margin-right: 5px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
              </svg>
            </button>
            <button title="Export Configuration" style="margin-right: 5px;">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
              </svg>
            </button>
            <button title="Apply Changes" style="margin-right: 5px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button title="Reset Changes">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
          <div style="grid-column: span 2;">
            <textarea rows="10" style="width: 100%;resize: vertical; font-size: 0.7rem;border-radius: 5px;"></textarea>
          </div>
        </fieldset>
      </form>
    </div>
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
    this._render = this._render.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onStop = this._onStop.bind(this);
    this._updateTotalRequestsCount = this._updateTotalRequestsCount.bind(this);
    this._updateLabelsCount = this._updateLabelsCount.bind(this);
    this._updateUI = this._updateUI.bind(this);
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
    if (this._httpSupervisor.status === SupervisorStatus.Retired) {
      return;
    }

    if (this._el) {
      return;
    }

    if (!document.body) {
      window.addEventListener('DOMContentLoaded', this._render);
      return;
    }

    this._render();
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
    window.removeEventListener('DOMContentLoaded', this._render);
    this._httpSupervisor.off(SupervisorEvents.START, this._onStart);
    this._httpSupervisor.off(SupervisorEvents.STOP, this._onStop);
    this._httpSupervisor.off(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateLabelsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);
    this._httpSupervisor.off(SupervisorEvents.REQUEST_END, this._updateLabelsCount);
    this._httpSupervisor.off(SupervisorEvents.CONFIG_CHANGE, this._updateUI);
    this._httpSupervisor = null;
    this._el.cleanup();
    this._el.remove();
    this._el = null;
  }

  /**
   * Renders the web component.
   * @private
   */
  _render() {
    document.body.appendChild(this._el = document.createElement('http-supervisor-widget'));

    const {
      status
    } = this._httpSupervisor;

    this._updateUI();

    // Listen to supervisor events.
    this._httpSupervisor.on(SupervisorEvents.START, this._onStart);
    this._httpSupervisor.on(SupervisorEvents.STOP, this._onStop);
    this._httpSupervisor.on(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateLabelsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);
    this._httpSupervisor.on(SupervisorEvents.REQUEST_END, this._updateLabelsCount);
    this._httpSupervisor.on(SupervisorEvents.CONFIG_CHANGE, this._updateUI);

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
    this._el.subscribe('responseSizeChart', () => this._httpSupervisor.sizeChart());
    this._el.subscribe('responseTimeChart', () => this._httpSupervisor.timeChart());
    this._el.subscribe('responseSizeTimeChart', () => this._httpSupervisor.sizeTimeChart());
    this._el.subscribe('responseSizeDistributionChart', () => this._httpSupervisor.distributionChart('responseSize'));
    this._el.subscribe('includeChange', (ctrl) => this._httpSupervisor.include = ctrl.value.split(',').map(x => x.trim()));
    this._el.subscribe('excludeChange', (ctrl) => this._httpSupervisor.exclude = ctrl.value.split(',').map(x => x.trim()));
    this._el.subscribe('keyboardEventsChange', ctrl => this._httpSupervisor.keyboardEvents = ctrl.checked);
    this._el.subscribe('persistConfigChange', ctrl => this._httpSupervisor.persistConfig = ctrl.checked);
    this._el.subscribe('lockConsoleChange', ctrl => this._httpSupervisor.lockConsole = ctrl.checked);
    this._el.subscribe('silentChange', ctrl => this._httpSupervisor.silent = ctrl.checked);
    this._el.subscribe('alertRequestStartChange', ctrl => this._httpSupervisor.alertOnRequestStart = ctrl.checked);
    this._el.subscribe('importConfig', () => this._httpSupervisor.import());
    this._el.subscribe('exportConfig', () => this._httpSupervisor.export('json', true));
    this._el.subscribe('applyConfig', () => this._httpSupervisor.setConfig(this._el.config));
    this._el.subscribe('stopWatchChange', (ctrl) => this._httpSupervisor.stopWatch = ctrl.checked);

    if (status === SupervisorStatus.Busy) {
      this._onStart();
    } else {
      this._onStop();
    }

    this._updateLabelsCount();
    this._updateTotalRequestsCount();
  }

  _updateUI() {
    const {
      include,
      exclude,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      usePerformance,
      keyboardEvents,
      persistConfig,
      lockConsole,
      silent,
      alertOnRequestStart,
      onGoingCallsCount,
      status,
      stopWatch
    } = this._httpSupervisor;

    this._el.setState({
      include,
      exclude,
      traceEachRequest,
      alertOnError,
      alertOnExceedQuota,
      quota,
      usePerformance,
      keyboardEvents,
      persistConfig,
      lockConsole,
      silent,
      alertOnRequestStart,
      stopWatch,
      config: this._httpSupervisor.getConfig()
    });
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
    this._el.updateCalls(this._httpSupervisor.onGoingCallsCount, this._httpSupervisor.totalRequests);
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

    this._el.updateCalls(this._httpSupervisor.onGoingCallsCount, this._httpSupervisor.totalRequests);
  }
}

/**
 * Supervisor Controls Panel Web Component.
 */
class HtmlSupervisorWidgetElement extends HTMLElement {

  _container = null;

  // Panel Controls
  _startButton = null;
  _stopButton = null;
  _clearButton = null;
  _printButton = null;
  _exportButton = null;
  _moreButton = null;
  _callsCountLabel = null;
  _toggleWatchButton = null;
  _resetWatchButton = null;

  // Popover Controls
  _popover = null;
  _popoverClose = null;
  _overlay = null;
  _traceEachRequestCheckbox = null;
  _alertOnErrorCheckbox = null;
  _alertOnQuotaExceedCheckbox = null;
  _usePerformanceAPICheckbox = null;
  _stopWatchCheckbox = null;
  _maxPayloadSizeTextbox = null;
  _maxResponseSizeTextbox = null;
  _maxDurationTextbox = null;
  _responseSizeChartButton = null;
  _responseTimeChartButton = null;
  _responseSizeTimeChartButton = null;
  _responseSizeDistributionChartButton = null;
  _includeTextbox = null;
  _excludeTextbox = null;
  _keyboardEventsCheckbox = null;
  _persistConfigCheckbox = null;
  _lockConsoleCheckbox = null;
  _expandButton = null;
  _collapisbleFieldSet = null;
  _silentCheckbox = null;
  _alertRequestStartCheckbox = null;
  _importConfigButton = null;
  _exportConfigButton = null;
  _applyConfigButton = null;
  _resetConfigButton = null;
  _configTextArea = null;

  _stopWatchContainer = null;

  _config = null;

  _watchState = 'stopped';

  get config() {
    return this._config;
  }

  constructor() {
    super();

    this._handleKeyPress = this._handleKeyPress.bind(this);

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this._container = shadowRoot.querySelector('.http-supervisor-container');
    this._popover = shadowRoot.querySelector('.popover-content');

    [
      this._startButton,
      this._stopButton,
      this._printButton,
      this._clearButton,
      this._exportButton,
      this._toggleWatchButton,
      this._resetWatchButton,
      this._callsCountLabel,
      this._moreButton,
      this._silentCheckbox,
      this._traceEachRequestCheckbox,
      this._alertOnErrorCheckbox,
      this._alertOnQuotaExceedCheckbox,
      this._alertRequestStartCheckbox,
      this._lockConsoleCheckbox,
      this._maxPayloadSizeTextbox,
      this._maxResponseSizeTextbox,
      this._maxDurationTextbox,
      this._responseSizeChartButton,
      this._responseTimeChartButton,
      this._responseSizeTimeChartButton,
      this._responseSizeDistributionChartButton,
      this._includeTextbox,
      this._excludeTextbox,
      this._keyboardEventsCheckbox,
      this._persistConfigCheckbox,
      this._usePerformanceAPICheckbox,
      this._stopWatchCheckbox,
      this._importConfigButton,
      this._exportConfigButton,
      this._applyConfigButton,
      this._resetConfigButton,
      this._configTextArea
    ] = [
      ...Array.from(this._container.querySelectorAll('button,span,.supervisor-action')),
      ...Array.from(this._popover.querySelectorAll('input,button,textarea'))
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
      includeChange: this._includeTextbox,
      excludeChange: this._excludeTextbox,
      keyboardEventsChange: this._keyboardEventsCheckbox,
      persistConfigChange: this._persistConfigCheckbox,
      lockConsoleChange: this._lockConsoleCheckbox,
      silentChange: this._silentCheckbox,
      alertRequestStartChange: this._alertRequestStartCheckbox,
      importConfig: this._importConfigButton,
      exportConfig: this._exportConfigButton,
      applyConfig: this._applyConfigButton,
      stopWatchChange: this._stopWatchCheckbox
    };

    this._expandButton = shadowRoot.querySelector('.expand');
    this._collapseButton = shadowRoot.querySelector('.collapse');
    this._collapisbleFieldSet = shadowRoot.querySelector('.fourth');
    this._popoverClose = shadowRoot.querySelector('.popover-close');
    this._overlay = shadowRoot.querySelector('.popover-overlay');
    this._stopWatchContainer = shadowRoot.querySelector('.stop-watch');

    this._silentCheckbox.addEventListener('change', () => {
      const checked = this._silentCheckbox.checked;
      [
        this._traceEachRequestCheckbox,
        this._alertOnErrorCheckbox,
        this._alertOnQuotaExceedCheckbox,
        this._alertRequestStartCheckbox
      ].forEach(c => c.disabled = checked);
    });

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

    this._resetConfigButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._configTextArea.value = this._config;
    });

    this._stopWatchCheckbox.addEventListener('change', () => this._handleStopWatchChange());

    this._toggleWatchButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this._watchState !== 'running') {
        this._stopWatchContainer.classList.remove('watch-paused', 'watch-stopped');
        this._stopWatchContainer.classList.add('watch-running');
        this._watchState = 'running';
      } else {
        this._stopWatchContainer.classList.remove('watch-running', 'watch-stopped');
        this._stopWatchContainer.classList.add('watch-paused');
        this._watchState = 'paused';
      }
    });

    this._resetWatchButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      this._stopWatchContainer.classList.remove('watch-paused', 'watch-running');
      this._stopWatchContainer.classList.add('watch-stopped');
      this._watchState = 'stopped';
    });
  }

  setState({
    include,
    exclude,
    traceEachRequest,
    alertOnError,
    alertOnExceedQuota,
    quota,
    usePerformance,
    keyboardEvents,
    persistConfig,
    lockConsole,
    silent,
    alertOnRequestStart,
    stopWatch,
    config
  }) {
    Array.isArray(include) && (this._includeTextbox.value = include.join(','));
    Array.isArray(exclude) && (this._excludeTextbox.value = exclude.join(','));
    this._traceEachRequestCheckbox.checked = traceEachRequest;
    this._alertOnErrorCheckbox.checked = alertOnError;
    this._alertOnQuotaExceedCheckbox.checked = alertOnExceedQuota;
    this._maxPayloadSizeTextbox.value = quota.maxPayloadSize;
    this._maxResponseSizeTextbox.value = quota.maxResponseSize;
    this._maxDurationTextbox.value = quota.maxDuration;
    this._usePerformanceAPICheckbox.checked = usePerformance;
    this._keyboardEventsCheckbox.checked = keyboardEvents;
    this._persistConfigCheckbox.checked = persistConfig;
    this._lockConsoleCheckbox.checked = lockConsole;
    this._silentCheckbox.checked = silent;
    this._alertRequestStartCheckbox.checked = alertOnRequestStart;
    keyboardEvents && this._listenToKeyPressEvent();
    [
      this._traceEachRequestCheckbox,
      this._alertOnErrorCheckbox,
      this._alertOnQuotaExceedCheckbox,
      this._alertRequestStartCheckbox
    ].forEach(c => c.disabled = silent);
    this._stopWatchCheckbox.checked = stopWatch;
    this._configTextArea.value = this._config = JSON.stringify(config, null, 2);
    this._handleStopWatchChange();
  }

  subscribe(evt, handler) {
    const ctrl = this._eventsAndControls[evt],
      evtName = ctrl instanceof HTMLButtonElement ? 'click' : 'change';

    ctrl.addEventListener(evtName, (e) => {
      if (ctrl instanceof HTMLButtonElement) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (evt === 'applyConfig') {
        this._config = JSON.parse(this._configTextArea.value);
      }

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

  updateCalls(count1, count2) {
    this._callsCountLabel.innerText = `${count1} / ${count2}`;
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
    this._positionPopover();
  }

  _hidePopover() {
    [this._popover, this._overlay].forEach(el => el.classList.remove('active'));
  }

  _positionPopover() {
    const { width: popoverWidth } = this._popover.getBoundingClientRect(),
      { left: mBLeft } = this._moreButton.getBoundingClientRect();

    this._popover.style.right = `calc(50% - ${popoverWidth / 2}px)`;
    this._popover.style.setProperty('--position', `${mBLeft - this._popover.getBoundingClientRect().left + 4}px`);
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

    if (event.key && (event.key.toUpperCase() === 'ESCAPE' || event.key.toUpperCase() === 'ESC')) {
      this._hidePopover();
    }
  }

  _handleStopWatchChange(ctrl) {
    this._stopWatchContainer.style.display = this._stopWatchCheckbox.checked ? 'flex' : 'none';

    const setWidth = () => {
      const { width } = this._container.getBoundingClientRect();
      this._container.style.right = `calc(50% - ${width / 2}px)`;
    };

    setWidth();

    setTimeout(() => setWidth(), 0);
    this._positionPopover();
  }
}

if (!window.customElements.get('http-supervisor-widget')) {
  window.customElements.define('http-supervisor-widget', HtmlSupervisorWidgetElement);
}
