(function () {
  let httpSupervisorScript = document.querySelector('#http-supervisor-script');

  if (httpSupervisorScript) {
    window.httpSupervisor.destroy();
    httpSupervisorScript.remove();
    return;
  }

  httpSupervisorScript = document.createElement('script');
  httpSupervisorScript.src = 'https://vjai.github.io/http-supervisor/http.supervisor-1.4.4.js';
  httpSupervisorScript.addEventListener('load', function () {
    window.httpSupervisor.init();
  });
  document.head.appendChild(httpSupervisorScript);
})();
