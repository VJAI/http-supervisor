(function () {
  const httpSupervisorScript = document.querySelector('#http-supervisor-script');

  if (httpSupervisorScript) {
    window.httpSupervisor && window.httpSupervisor.retire();
    httpSupervisorScript.remove();
  }
})();
