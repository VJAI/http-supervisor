import httpSupervisor from './http.supervisor';

function makeAjaxCalls() {
  sendCall();
}

function sendCall() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/todos');
  xhr.send();
}

httpSupervisor.init();
makeAjaxCalls();
