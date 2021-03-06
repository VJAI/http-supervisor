function makeAjaxCalls() {
  sendCall1();

  setTimeout(() => {
    sendCall2();
  }, 200);

  setTimeout(() => {
    sendCall2();
    sendCall3();
  }, 400);

  setTimeout(() => {
    sendCall4();
    sendCall5();
    sendCall6();
  }, 600);
}

function sendCall1() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
}

function sendCall2() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send();
}

function sendCall3() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
  xhr.send();
}

function sendCall4() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  });
}

function sendCall5() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
  });
}

function sendCall6() {
  fetch('https://jsonplaceholder.typicode.com/comments1');
}

http.init({
  domains: ['https://jsonplaceholder.typicode.com'],
  traceEachRequest: false,
  alertOnExceedQuota: false,
  alertOnError: false
});
makeAjaxCalls();
setTimeout(makeAjaxCalls, 100);
