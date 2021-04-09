# 👮 http-supervisor

## Intro

A simple tool that helps to audit HTTP requests and identify the requests that exceeds the set quota. It also helps to group, sort and query requests based upon 
a variety of parameters.

The tool renders a simple UI that provides controls to capture the requests and print to console in a better readable format. It also provides a global object for you 
to manage requests.

[DEMO](https://vjai.github.io/http-supervisor/)

### UI with controls

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/ui.png)

### Console Output

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/console.png)

## Install

Currently it's available in `npm`. There are plans to make it available as a browser addon.

```shell
npm i http-supervisor --save-dev
``` 

## Usage

Reference the script at the end of the body. Invoke `httpSupervisor.init()` to start the tool.

```html
<html>
  <body>
    ...
    <script src="node_modules/http-supervisor/http.supervisor-1.2.0.js"></script>
    <script>
      httpSupervisor.init();
    </script>
  </body>
</html>
```

The library exports a single object called `httpSupervisor` through which you can control the audit.

## Initializing Supervisor

The `init` method helps to configure and initialize the tool with parameters passed as input. You should call this method 
to start the audit and it can be called only once.

```js
httpSupervisor.init({
  domains: ['https://my.api.com'],
  alertOnError: true
})
```

You can pass a bunch of parameters to the `init` method to configure the tool which you can see at the API section.

## Starting Audit

Calling the `init` method start the audit. If you stopped it for some reason and you can restart it by calling the `start` method.

```js
httpSupervisor.start();
```

## Stopping Audit

You can temporarily stop auditing by calling `stop` method.

```js
httpSupervisor.stop();
```

## Printing Requests

The library provides bunch of methods to print the requests. Calling the plain `print` method displays the requests 
in console using the default group and sort parameters passed during the initialization. There are also methods that accepts 
group, sort and search parameters and does the printing after performing the necessary operations.

```js
httpSupervisor.print()
```

You can see other print methods in the API section.

## Sorting Requests

You can multi-sort the requests.

```js
httpSupervisor.sortAndPrintRequests({ field: 'method', dir: 'asc' }, { field: 'responseSize', dir: 'desc' });
```

## Grouping Requests

You can group and sub-group requests.

```js
httpSupervisor.groupAndPrintRequests('path', 'method');
```

There are also methods available that helps to group and sort in the same call.

## Searching Requests

You can also search requests on different fields passing different operators.

```js
httpSupervisor.searchAndPrintRequests({ field: 'responseSize', operator: '>', value: '1 kb' });
```

## API

### `HttpSupervisor` Properties

TODO

### `HttpSupervisor` Methods

TODO
