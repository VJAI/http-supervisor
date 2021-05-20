<p align="center">
  <img src="https://github.com/VJAI/http-supervisor/blob/main/assets/http.png" width="200" />
</p>

# http-supervisor

## Intro

A simple library also available as [chrome addon](https://chrome.google.com/webstore/detail/http-supervisor/ilfhanegmhjioandehhnopokeoeefonj) that helps to audit HTTP requests and identify the requests that exceeds the set quota. It also helps to find duplicate requests. Not only that you can group, sort, search and export requests.

The tool renders a simple UI that provides controls to capture the requests and print to console in a better readable format. It also provides a global object for you 
to work with requests from developer console.

Last but not least it also provides visualization support using the chart.js library.

## Motivation

I was working in improving the performance of a single page e-commerce app. One of the task was to figure out the duplicate AJAX calls made during a particular period by 
different components. It seemed to be so challenging to do it through Chrome network tab because it lacks abilities to group requests. 

I created a simple script that wrapped the XHR calls and helped to group requests based on url, method and payload and printed them in console. This easily helped us to identify the duplicate calls 
made by the app and eliminate them easier. I improved the script and made it as a library and addon that can do more extra things other than finding duplicate requests.

Please feel free to use it and share your feedback.


## Demo

[https://vjai.github.io/http-supervisor/](https://vjai.github.io/http-supervisor/)


## Screenshots

### Enable / Disable In Any Page Using Addon

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/addon.png)

### UI with controls

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/ui.png)

### Console Output

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/console.png)

### Data Visualization

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/visualization.png)


## Features

- Auditing Requests By Setting Quota
- Finding Duplicate Requests
- Searching Requests Based On Different Criteria
- Nested Grouping
- Multi Sorting
- Printing Requests
- Exporting Requests As CSV
- Exporting / Importing Configuration
- Visualization Through Charts
- Watching Requests
- Copying Requests


## Install

You can install the library from npm as shown below.

```shell
npm i http-supervisor --save-dev
``` 

The library exports a single object called `http` through which you can control the audit and manage the requests.


## Chrome Addon

It's also available as chrome addon. By installing the addon you can enable it for any site for monitoring HTTP requests. 
You can install the addon from [here](https://chrome.google.com/webstore/detail/http-supervisor/ilfhanegmhjioandehhnopokeoeefonj).


## Initializing Supervisor

The `init` method helps to configure and initialize the tool. You should call this method to start the audit and it can be called only once.

```js
http.init({
  include: ['https://my.api.com'],
  alertOnError: true
})
```

You can pass a bunch of parameters to the `init` method to configure the tool which you can see at the API section.


## Starting Audit

Calling the `init` method start the audit. If you stopped it for some reason and you can restart it by calling the `start` method.

```js
http.start();
```


## Stopping Audit

You can temporarily stop auditing by calling `stop` method.

```js
http.stop();
```


## Getting Requests

The library provides a method called `query` that gives you all the captured requests in a custom collection.

```js
const requests = http.query();
```

The output of the `query` method is a custom collection extended from array that helps you to search, group and sort requests.

You can get a single request by passing the `id` to the `get` method.

```js
const request = http.get(1);
```

The output request is of type `HttpRequestInfo`.


## Sorting Requests

You can multi-sort the requests.

```js
const requests = http.sort({ field: 'method', dir: 'asc' }, { field: 'responseSize', dir: 'desc' });
```


## Grouping Requests

You can group and sub-group requests.

```js
const requests = http.group('part', 'method');
```

There are also methods available that helps to group and sort in the same call.


## Searching Requests

You can also search requests on different fields passing different operators.

```js
const requests = http.query('/token');
const requests = http.query('GET');
const requests = http.query('responseSize', '>', '1 kb');
const requests = http.query({ field: 'responseSize', operator: '>', value: '1 kb' });
```


## Printing Requests

Calling the `print` method displays the requests in console using the default group and sort parameters.

```js
http.print()
```

The method accepts different kind of parameters to search, group and sort the requests before printing. You can also 
pass a request or collection to this method and that'll be printed.

### Printing a request passing id

Each http request is associated with a unique id. You can print the details of a single request by just passing the id.

```js
http.print(id);
```

### Printing requests of a particular http method

You can print requests belongs to a particular http method (GET, POST etc.) by passing the http method name.

```js
http.print('GET');
```

### Printing requests matches an url

By passing an url (relative/absolute) the methods prints all the requests belongs to it.

```js
http.print('/api/v3');
```

You can also pass glob patterns.

```js
http.print('https://api.domain.com/v3/*');
```

### Search, group, sort and then print requests

The method also accepts search, group and sort parameters that'll be applied over the requests before printing them.

```js
http.print(
  [{field: 'method', operator: '=', value: 'GET'}], // search
  ['url', 'method'], // group
  [{ field: 'responseSize', dir: 'desc' }] //sort
);
```

If you want to only sort you can pass `null` to search and group parameters.

### Printing any request or collection

You can pass any request or collection to the print method and it'll print it.

```
http.print(request);
http.print(collection);
```

### Finding Duplicate Requests

You can find duplicate calls made during a particular session by calling `duplicates` method.

```
const duplicateRequests = http.duplicates();
```


## Exporting Requests

You can export requests as CSV/JSON by calling the `export` method.

```js
http.export(); // export as CSV
http.export('json') // export as JSON
```


## Exporting / Importing Configuration

You can export the configuration of supervisor by passing `true` as the last argument.

```js
http.export('json', true);
```

You can import a saved configuration by calling the `import` method.

```js
http.import();
```


## Visualizing Requests

The library provides methods to visualize data through charts. The `timeChart` method prints the time taken by each request through a bar chart. 
There are other methods to visualize different information please check the API section.

```
http.timeChart()
```


## API

### `HttpSupervisor` Properties

#### `busy`

Returns `true` if the supervisor is busy audit.

#### `status`

Returns the current status of the supervisor. It could be one of these values: "busy", "idle", "not-ready" or "retired".

#### `totalRequests`
 
Returns the total count of requests.

#### `include`

Gets/sets the url patters to monitor. As default monitors all requests.

#### `exclude` 

Gets/sets the url patters to ignore.

#### `renderUI`
 
Returns `true` if ui is required. As default the value is `true`.

#### `displayUI`

Shows/hides UI if `renderUI` is set as `true`.

#### `silent`

Gets/sets whether to display any messages to console or not. As default the value is `false`.

#### `traceEachRequest`

Gets/sets whether each request need to be printed in console. As default the value is `false`.

#### `alertOnError` 

Gets/sets whether we need to display the request on error in console. As default the value is `true`.

#### `alertOnExceedQuota`

Gets/sets whether to display requests exceeded quota in console. As default the value is `true`.

#### `alertOnRequestStart`

Gets/sets whether to alert the request info in console on request starting stage. As default the value is `false`.

#### `quota`

Gets/sets the quota. It's an object that takes three parameters `maxPayloadSize`, `maxResponseSize` and `maxDuration`. The default values are 10 kb, 10 kb and 1 second respectively.

#### `groupBy`

Gets/sets the group parameters that is used while displaying requests in console on calling `print` method. As default the requests are grouped by `part` and `method` (properties of `HttpRequestInfo` class; you'll see all the members of the class in API section).

#### `sortBy`

Gets/sets the sort parameters that is used while displaying requests in console. As default the requests are sorted by `id` in ascending order.

#### `usePerformance`

Gets/sets whether to use `performance.getEntriesByType` API for calculating more precise duration and resource size. Using this feature 
will add a new query parameter "hs_rid" in the url. As default the value is `true`.

#### `monkeyPatchFetch`

Gets/sets whether to monkey patch `window.fetch` method to capture fetch requests. As default the value is `true`.

#### `loadChart`

Returns `true` if visualization is enabled. As default the value is `true`.

#### `keyboardEvents` 

Gets/sets whether to control the supervisor through keyboard events. As default the value is `true`.

#### `persistConfig`

Gets/sets whether to persist configuration in browser storage. As default the value is `true`.

#### `lockConsole`

Gets/sets whether to lock developer console. Doing this will block all other messages to console by other scripts until the lock is released. As default the value is `false`.

#### `onGoingCallsCount`

Returns the numbers of calls in progress.


### `HttpSupervisor` Methods

#### `init(config: object, loadConfigFromStore = true)`

Configures the supervisor. You can pass the following parameters to the `config` object:

- `include` (Array<string>) - Array of url glob patterns to monitor.
- `exclude` (Array<string>) - Array of url glob patterns to ignore.
- `renderUI` (boolean) - Passing `true` will render UI.
- `traceEachRequest` (boolean) - Passing `true` will print each request.
- `alertOnError` (boolean) - Passing `true` will print error requests.
- `alertOnExceedQuota` (boolean) - Passing `true` will print requests that exceeds quota.
- `alertOnRequestStart` (boolean) - True to alert on request start.
- `quota` (object) - Request Quota. It's an object that can have three properties: `maxPayloadSize`, `maxResponseSize` and `maxDuration`. Any request that exceeds any of this value is assumed to be exceeded quota.
- `groupBy` (Array<string>) - Grouping parameters used in displaying requests.
- `sortBy` (Array<{field: string, dir: 'asc' | 'desc'}>) - Sorting parameters used in displaying requests.
- `usePerformance` (boolean) - True to use performance.getEntriesByType for accurate duration and payload info.
- `monkeyPatchFetch` (boolean) - True to monkey patch fetch requests.
- `loadChart` (boolean) - True to use chart.js library for data visualization.
- `keyboardEvents` (boolean) - True to use keyboard events for operating control panel.
- `persistConfig` (boolean) - True to persist config in local storage.
- `watches` (Array<{field: string, operator: string, value: any}>) - Collection of watches.
- `lockConsole` (boolean) - True to lock developer console so except supervisor other scripts can't print messages in console.

Passing `true` for `loadConfigFromStore` loads the config from local storage.

Example

```js
http.init({
  include: ['http://api.domain.com/v1/*'],
  exclude: ['*/token'],
  traceEachRequest: true,
  groupBy: ['part', 'method'],
  sortBy: [{ field: 'payloadSize', dir: 'asc' }]
});
```

#### `start()`

Starts network monitoring.

#### `stop()`

Stops network monitoring.

#### `clear()`

Clears the requests log.

#### `on(eventName: string, handler: function)`

Subscribes to the passed event. Below are the events emitted.

- `ready` - Fired when the supervisor is ready.
- `start` - Fired when the supervisor is started.
- `stop` - Fired when the supervisor is stopped.
- `clear` - Fired when the captured requests log is cleared.
- `retire` - Fired when the supervisor is destroyed.
- `request-start` - Fired when a HTTP request is started.
- `request-end` - Fired when a HTTP request is finished.
- `request-error` - Fired when a HTTP request errors out.
- `exceeds-quota` - Fired when a HTTP request exceeds quota.
- `config-change` - Fired when the configuration of the supervisor is changed.

#### `off(eventName: string, handler: function)`

Un-subscribes from the passed event.

#### `retire(clearStore = false)`

Retires the supervisor. Passing `clearStore` as `true` will clear the stored configuration from browser storage.

#### `get(arg)`

Returns request for the passed id or url.

```js
const firstRequest = http.get(1);
const tokenRequest = http.get('/token');
```

Returns object of type `HttpRequestInfo`. The `HttpRequestInfo` class is the one that captures all the information related to a single request.

Below are the properties of this class.

- `id` (number) - Unique id of the request.
- `url` (string) - The url of the request.
- `domain` (string) - The domain of the request.
- `path` (string) - The path from the url.
- `part` (string) - The last part of the path from url with search query.
- `method` (GET | POST | PUT | DELETE) - HTTP request method.
- `payload` (object) - The request payload.
- `payloadSize` (number) - The request payload size.
- `timeStart` (number) - The request start time.
- `timeEnd` (number) - The request end time.
- `duration` (number) - Time taken by the request.
- `response` (*) - The response of the request.
- `responseSize` (number) - The response size.
- `responseStatus` (number) - The response status.
- `error` (boolean) - True if the request error-ed out.
- `errorDescription` (*) -  The error description same as the response.
- `exceedsQuota` (boolean) - True if the request exceeds quota.
- `initiatorType` (xhr | fetch) - Whether the ajax call is triggered by xhr or fetch.
- `payloadByPerformance` (number) - True if the payload size is determined using performance api.
- `requestHeaders` (Map) - Request Headers.
- `responseHeaders` (Map) - Response Headers.
- `pending` (boolean) - True if the request is pending.

Below are the constructor and methods of this class.

- `constructor(id, url, method, payload)`
- `fire(type = 'xhr', reqOptions = {})` - Issues AJAX request using the property values.
- `clone()` - Returns a cloned copy.

#### `first()`

Returns the first request from the log.

#### `last()`

Returns the last request from the log.

#### `failed()`

Returns the failed requests.

#### `exceeded()`

Returns the requests that exceeded the quota.

#### `lastFailed()`

Returns the last failed request.

#### `maxSizeRequest()`

Returns the request that has maximum response size.

#### `maxDurationRequest()`

Returns the request that took maximum time to complete.

#### `group(...args)`

Groups the requests based on the passed fields.

Examples:

```js
const groupedByMethod = http.group('method');
const groupedByUrlMethodPayload = http.group('url', 'method', 'payload');
```

The output of the above method is of type `Collection` which is a custom class that extends Array and had methods to do multi-sorting, nested grouping and searching.

#### `sort(...args)`

Sorts the requests based on the passed arguments.

Examples:

```js
const sortedByResponseSize = http.sort('responseSize', 'asc');
const sortedByResponseSize = http.sort({ field: 'responseSize', dir: 'asc' });
const multiSorted = http.sort([{ field: 'id', dir: 'asc' }, { field: 'responseSize', dir: 'asc' }]);

```

#### `query()`

Returns the captured requests performing sorting, grouping as well.

Calling the `query` method without passing any argument returns all the requests.

```js
const allRequests = http.query();
```

Passing a string as input returns the requests that contains/matches the url.

```js
const requestsContainsTokenInUrl = http.query('/token');
const requestMatchesApi = http.query('*/api/*');
```

If the string matches the HTTP request method then it returns all the requests of that type.

```js
const getRequests = http.query('GET');
```

Passing search query.

```js
const requests = http.query('method', '=', 'GET');
```

The above method returns all the requests of method "GET".

Passing multiple search conditions.

```js
const maxSizeGetRequests = http.query([{ field: 'method', operator: '=', value: 'GET' }, { field: 'responseSize', operator: '>', value: '10 kb' }];
```

The different operators you can utilize are: "=", "!=", ">", "<", ">=", "<=", "~" (starts with), "^" (ends with), "contains", "!contains", "matches" and "!matches". 

#### `totalPayload()`

Returns the total payload size summing all requests.

#### `totalSize()`

Returns the total response size summing all requests.

#### `maxPayload()`

Returns the max payload size of the requests.

#### `maxResponse()`

Returns the max response size of the requests.

#### `maxDuration()`

Returns the max duration.

#### `duplicateRequests()`

Returns the duplicate requests made during the session.

#### `hasDuplicates`

Returns true if there are duplicate requests.

#### `print(...args)`

Prints the requests after searching, grouping and sorting. We can also pass a request or collection to the method and it prints it.

Printing a request by passing the id.

```js
http.print(1);
```

Printing all the POST requests.

```js
http.print('POST');
```

Printing all the request that matches "token".

```js
http.print('*/token');
```

Printing all the requests with the default `groupBy` and `sortBy` properties.

```js
http.print();
```

Printing requests after searching, grouping and sorting.

```js
http.print(
  [{field: 'method', operator: '=', value: 'GET'}], // search
  ['url', 'method'], // group
  [{ field: 'responseSize', dir: 'desc' }] //sort
);
```

#### `printFailed()`

Prints failed requests.

#### `printExceeded()`

Prints requests exceeds quota.

#### `printLastFailed()`

Prints the last failed request.

#### `printLast()`

Prints the last request.

#### `printMaxSizeRequest()`

Prints the request that has maximum size.

#### `printMaxDurationRequest()`

Prints the request that took maximum time.

#### `printDuplicates()`

Prints duplicate requests.

#### `compare(id1, id2)`

Compares two requests and print the differences.

#### `sizeChart()`

Displays the bar chart of responsive size.

#### `timeChart()`

Displays the bar chart of responsive size.

#### `sizeTimeChart()`

Displays bubble chart for response size and time.

#### `sizeDistributionChart()`

Displays the response size distribution.

#### `import()`

Calling this method will opens the system file dialog and selecting a persisted configuration file will imports the configuration to the supervisor.

### `export(...args)`

Export requests as a CSV / JSON file.

```js
http.export(); // Export as CSV
http.export('json'); // Export as JSON
http.export('json', true); // Export the configuration as JSON
http.export(collection); // Export the passed collection as CSV
http.export(collection, 'json'); // Export the passed collection as JSON
```

#### `watchOn(...args)`

Alert on console the request that matches the passed arguments.

Example:

```js
http.watch('*/token'); // watch any request that is fired for url matching "/token".
http.watch({ field: 'responseSize', operator: '>', value: '10 kb' }); // watch any request that exceeds 10 kb.
```

#### `removeWatch(watchId)`

Remove the watch for the passed id.

#### `clearWatches()`

Clear all watches.

#### `clearStore()`

Removes the stored config from session storage.

#### `fire(id, type = InitiatorType.XHR, reqOptions = {})`

Re-issues ajax request for the passed http request.

#### `record()`

Creates a new session.

#### `end()`

Ends the current session.

#### `getSession(id)`

Returns session for the passed id.

#### `removeSession(id)`

Removes the passes session.

#### `clearSessions()`

Clear all sessions.

#### `copy(id, content = 'response')`

Copies the response, payload or the complete request to clipboard.

#### `clearCopy()`

Clears the copied content.


## Contact

[http://prideparrot.com/contact](http://prideparrot.com/contact)


## License

MIT
