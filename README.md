# 👮 http-supervisor

## Intro

A simple tool that helps to audit HTTP requests and identify the requests that exceeds the set quota. It also helps to group, sort, search and export requests.

The tool renders a simple UI that provides controls to capture the requests and print to console in a better readable format. It also provides a global object for you 
to work with requests from developer console.

Last but not least it also provides visualization support using the chart.js library.


## Demo

[https://vjai.github.io/http-supervisor/](https://vjai.github.io/http-supervisor/)


## Screenshots

### UI with controls

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/ui.png)

### Console Output

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/console.png)

### Data Visualization

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/visualization.png)


## Features

- Auditing Requests By Setting Quota
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

Currently it's available in `npm`. There are plans to make it available as a browser addon.

```shell
npm i http-supervisor --save-dev
``` 

The library exports a single object called `http` through which you can control the audit and manage the requests.


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

**print()** - Prints the log to the passed reporter.

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



#### `query()`

Returns the captured requests.

**getRequestsByType(method)** - Filters the requests based on the passed type and returns as collection.

**getRequestsByUrl(url)** - Returns requests initiated for the passed url.

**getRequestsOfStatus(status)** - Returns requests matches the passed status code.

**getFailedRequests()** - Returns the failed requests.

**getRequestsExceededQuota()** - Returns the requests that exceeded the quota.

**getLastFailedRequest()** - Returns the last failed request.

**getLastRequest()** - Returns the last request.

**getMaxSizeRequest()** - Returns the request that has maximum response size.

**getMaxDurationRequest()** - Returns the request that took maximum time to complete.

**groupRequests(...groupArgs)** - Groups the requests based on the passed arguments.

**sortRequests(...sortArgs)** - Sorts the requests based on the passed arguments.

**groupSortRequests(groupArgs, sortArgs)** - Groups and sorts the requests.

**searchRequests(...query)** - Filters requests based on the passed query.

**searchRequestsContainsUrl(part)** - Returns requests that contains the passed string.

**searchRequestsOfSizeGreaterThan(size)** - Returns requests that contains response size greater than the passed value.

**searchGroupSortRequests(query, groupArgs, sortArgs)** - Get requests matches the query; group and sort the results based on the passed parameters.

**getTotalPayloadSize()** - Returns the total payload size summing all requests.

**getTotalResponseSize()** - Returns the total response size summing all requests.

**maxPayloadSize()** - Returns the max payload size of the requests.

**maxResponseSize()** - Returns the max response size of the requests.

**maxDuration()** - Returns the max duration.

**printRequests()** - Prints all the requests in the passed reporter.

**printRequestById(id)** - Prints the request for the passed id.

**printRequestsByType(method)** - Prints the requests matched the passed method (GET, POST etc.).

**printRequestsByUrl(url)** - Prints the requests that's been issued against the passed url.

**printRequestsOfStatus(status)** - Print requests that has the passed response status.

**printFailedRequests()** - Prints failed requests.

**printRequestsExceededQuota()** - Prints requests exceeds quota.

**printLastFailedRequest()** - Prints the last failed request.

**printLastRequest()** - Prints the last request.

**printRequestsExceededQuota()** - Prints requests exceeds quota.

**printMaxSizeRequest()** - Prints the request that has maximum size.

**printMaxDurationRequest()** - Prints the request that took maximum time.

**groupAndPrintRequests(...groupArgs)** - Groups and prints the requests.

**sortAndPrintRequests(...sortArgs)** - Sorts and prints the requests.

**groupSortAndPrintRequests(groupArgs, sortArgs)** - Groups, sorts and prints the requests.

**searchAndPrintRequests(...query)** - Searches and prints the requests matches the search query.

**printRequestsContainsUrl(part)** - Print requests that has url contains the passed string.

**printRequestsOfSizeGreaterThan(size)** - Print requests that has response size greater than the passed value.

**searchGroupSortAndPrintRequests(query, groupArgs, sortArgs)** - Searches and then groups, sorts and finally prints the collection.

**displayResponseSizeChart()** - Displays the bar chart of responsive size.

**displayResponseTimeChart()** - Displays the bar chart of responsive size.

**displaySizeTimeChart()** - Displays bubble chart for response size and time.

**displaySizeDistribution()** - Displays the response size distribution.

**export()** - Export requests to a CSV file.

**watchOn(...args)** - Alert request that matches the passed arguments.

**removeWatch(watchId)** - Remove the watch for the passed id.

**clearWatches()** - Clear all watches.

**clearStore()** - Removes the stored config from session storage.

## License

MIT
