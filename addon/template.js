(function() {

  function install() {
    let script = document.querySelector('#supervisor-script');

    if (script) {
      window.dispatchEvent(new CustomEvent('init-supervisor'));
      return;
    }

    script = document.createElement('script');
    script.setAttribute('id', 'supervisor-script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = `<!--CONTENT-->`;
    (document.head || document.documentElement).appendChild(script);
  }

  function uninstall() {
    window.dispatchEvent(new CustomEvent('retire-supervisor'));
    const script = document.querySelector('#supervisor-script');
    script && script.remove();
  }

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request) {
        install();
      } else {
        uninstall();
      }
    }
  );

  chrome.storage.local.get(['supervisor_domain_status'], function(result) {
    const domainStatus = result['supervisor_domain_status'] || {};

    if (domainStatus[document.domain] === true) {
      install();
    } else {
      uninstall();
    }
  });
})();
