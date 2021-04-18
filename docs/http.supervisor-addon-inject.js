(function () {
  let httpSupervisorScript = document.querySelector('#http-supervisor-script');

  if (httpSupervisorScript) {
    return;
  }

  httpSupervisorScript = document.createElement('script');
  httpSupervisorScript.id = 'http-supervisor-script';
  httpSupervisorScript.src = 'https://vjai.github.io/http-supervisor/http.supervisor-2.0.5.js';
  httpSupervisorScript.addEventListener('load', function () {
    window.httpSupervisor && window.httpSupervisor.init();
  });
  document.head.appendChild(httpSupervisorScript);
})();
