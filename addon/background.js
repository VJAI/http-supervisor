function enable(cb) {
  sendMessage(true);
  persist(true, cb);
}

function disable(cb) {
  sendMessage(false);
  persist(false, cb);
}

function sendMessage(enabled) {
  getActiveTab(function (tab) {
    chrome.tabs.sendMessage(tab.id, enabled);
  });
}

function persist(enabled, cb) {
  getActiveTab(function (tab) {
    chrome.storage.local.get(['supervisor_domain_status'], function (result) {
      const url = new URL(tab.url);
      result[url.host] = enabled;
      chrome.storage.local.set({ supervisor_domain_status: result }, cb);
    });
  });
}

function getActiveTab(cb) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    cb(tabs[0]);
  });
}

function isSupervisorEnabled(cb) {
  getActiveTab(function (tab) {
    chrome.storage.local.get(['supervisor_domain_status'], function (result) {
      const url = new URL(tab.url);
      const t = result['supervisor_domain_status'] || {};
      cb(t[url.host] === true);
    });
  });
}
