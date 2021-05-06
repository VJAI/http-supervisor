var enabled = false;

function enable() {
  enabled = true;
  sendMessage();
  persist();
}

function disable() {
  enabled = false;
  sendMessage();
  persist();
}

function sendMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, enabled);
  });
}

function persist() {
  chrome.storage.local.set({ supervisor_enabled: enabled });
}
