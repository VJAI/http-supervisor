import http from './src';

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
    //sendCall6();
    //sendCall7();
    sendCall8();
  }, 600);
}

function sendCall1() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?fake=1');
  xhr.setRequestHeader('x-auth-token', '123');
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
  xhr.setRequestHeader('Authorization', 'Bearer 00D3I0000008n7g!AQIAQPsMoEEciH88UMtNm2ioL3vo068j5MOJAfYvLZDloIHppIajILl7IPLeVYjvAYkXBbjGhuLLwrfu1l9bLM7tDfbkuLqA');
  xhr.setRequestHeader('Something', '456');
  xhr.send({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  });
}

function sendCall5() {
  fetch('https://jsonplaceholder.typicode.com/posts?query=lorem_ipsum_dolor_smir_ameit&arg1=lorem_ipsum_dolor_smir_ameit&atg3=lorem_ipsum_dolor_smir_ameit', {
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

function sendCall7() {
  fetch('https://jsonplaceholder.typicode.com/posts1', {
    method: 'POST',
    body: JSON.stringify({
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
  });
}

function sendCall8() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send();
}

window.http = http;
http.init({
  include: ['https://jsonplaceholder.typicode.com', 'https://eng-ecom.apttuscloud.io'],
  urlConfig: {
    'https://jsonplaceholder.typicode.com': {
      '/posts': {
        GET: { label: 'Fetching Posts' },
        POST: { labelPending: 'Creating Post', label: 'Post Created, Id: {$response.id}' },
        DELETE: 'Deleting Post',
        PUT: 'Updating Post',
        category: 'POSTS',
        tags: ['post', 'posts']
      },
      '/posts/{id}': {
        GET: 'Getting Post Of #{id}',
        category: 'POSTS',
        tags: ['post', 'posts']
      },
      '/comments': {
        GET: 'Fetching Comments',
        POST: 'Creating Comment',
        DELETE: 'Deleting Comment',
        PUT: 'Updating Comment',
        category: 'COMMENTS',
        tags: ['comment', 'comments']
      },
      '/users': {
        GET: {
          label: 'Fetching Users {$query.fake}'
        }
      }
    }
  }
});
makeAjaxCalls();
setTimeout(makeAjaxCalls, 100);
/*window.http = http;
http.init();*/
