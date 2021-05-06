// Reference: https://stackoverflow.com/questions/39843647/keep-chrome-extension-running-on-page-reload
let toggle = false;
let status = 'off';
let the_tab_id = '';

function set_status() {
  toggle = !toggle;
  status = 'off';
  if (toggle) { status = 'on'; }
}

function toggle_extension(tab) {
  // Pass variable & execute script
  chrome.tabs.executeScript({ code: 'window.extension_status = "' + status + '"' });
  //chrome.tabs.executeScript({ file: 'http-supervisor.js', runAt: 'document_start' });
  // Set the tab id
  the_tab_id = tab.id;
}

function my_listener(tabId, changeInfo, tab) {
  // If updated tab matches this one
  if (changeInfo.status == "complete" && tabId == the_tab_id && status == 'on') {
    toggle_extension(tab);
  }
}

chrome.browserAction.onClicked.addListener(function (tab) {
  set_status();
  toggle_extension(tab);
});

chrome.tabs.onUpdated.addListener(my_listener);
