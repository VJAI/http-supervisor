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
- Searching, Grouping And Sorting Requests
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
const requests = http.group('path', 'method');
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

**status**

**totalRequests** - Returns the total count of requests.

**domains** - Returns the domains that's configured to audit.

**renderUI** - Returns `true` if ui is required.

**traceEachRequest** - Gets/sets whether each request need to be printed in console.

**alertOnError** - Gets/sets whether we need to display the request on error in console.

**alertOnExceedQuota** - Gets/sets whether to display requests exceeded quota in console.

**quota** - Gets/sets the quota. It's an object that takes three parameters `maxPayloadSize`, `maxResponseSize` and `maxDuration`. The default values are 1 kb, 10 kb and 1 second respectively.

**groupBy** - Returns the array of grouping parameters.

**sortBy** - Returns the array of sorting parameters.

**usePerformance** - Leveraged `performance.getEntriesByType` API for calculating more precise duration and resource size. Using this feature 
will add a new query parameter (hs_rid) in the url.

**monkeyPatchFetch** - `True` to Intercept fetch requests.

**loadChart** - `True` to use chart.js library for data visualization.

**keyboardEvents** - `True` to use keyboard events for operating control panel.


### `HttpSupervisor` Methods

**init(config, loadConfigFromStore = true)** - Configures the supervisor. You can pass the following parameters to the `config` object: `domains`, `renderUI`, `traceEachRequest`, `alertOnError`, `alertOnExceedQuota`, `quota`, `groupBy`, `sortBy`, `usePerformance`, `monkeyPatchFetch`, `loadChart` and `keyboardEvents`. Passing `true` for `loadConfigFromStore` loads the config from local storage.

**start()** - Starts network monitoring.

**stop()** - Stops network monitoring.

**clear()** - Clears the requests log.

**print()** - Prints the log to the passed reporter.

**on(eventName, handler)** - Subscribes to the passed event.

**off(eventName, handler)** - Un-subscribes from the passed event.

**retire()** - Retires the supervisor.

**report(collection)** - Displays the passed collection using the reporter.

**requests()** - Returns the captured requests.

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
