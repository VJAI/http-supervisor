# 👮 http-supervisor

## Intro

A simple tool that helps to audit HTTP requests (fetch and XHR) and identify the requests that exceeds the set quota. It also helps to group, sort, query and export requests.

The tool renders a simple UI that provides controls to capture the requests and print to console in a better readable format. It also provides a global object for you 
to manage requests.

Last but not least it also provides visualization support using the chart.js library.

[DEMO](https://vjai.github.io/http-supervisor/)

### UI with controls

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/ui.png)

### Console Output

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/console.png)

### Data Visualization

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/assets/visualization.png)

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

## Exporting Requests

You can export requests as a CSV file by calling the `export` method.

```js
httpSupervisor.export();
```

## Visualizing Requests

The library provides methods to visualize data through charts.

```
httpSupervisor.displayResponseTimeChart()
```

## API

### `HttpSupervisor` Properties

**busy** - Returns `true` if the supervisor is busy audit.

**totalRequests** - Returns the total count of requests.

**domains** - Returns the domains that's configured to audit.

**renderUI** - Returns `true` if ui is required.

**traceEachRequest** - Gets/sets whether each request need to be printed in console.

**alertOnError** - Gets/sets whether we need to display the request on error in console.

**alertOnExceedQuota** - Gets/sets whether to display requests exceeded quota in console.

**quota** - Gets/sets the quota. It's an object that takes three parameters `maxPayloadSize`, `maxResponseSize` and `maxDuration`. The default values are 1 kb, 10 kb and 1 second respectively.

**defaultGroupBy** - Returns the array of grouping parameters.

**defaultSortBy** - Returns the array of sorting parameters.

**usePerformance** - Leveraged `performance.getEntriesByType` API for calculating more precise duration and resource size. Using this feature 
will add a new query parameter (hs_rid) in the url.

**monkeyPatchFetch** - `True` to Intercept fetch requests.

### `HttpSupervisor` Methods

**init(config)** - Configures the supervisor. You can pass the following parameters to the `config` object: `domains`, `renderUI`, `traceEachRequest`, `alertOnError`, `alertOnExceedQuota`, `quota`, `defaultGroupBy` and `defaultSortBy`.

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

**getFailedRequests()** - Returns the failed requests.

**getLastFailedRequest()** - Returns the last failed request.

**getLastRequest()** - Returns the last request.

**getRequestsExceededQuota()** - Returns the requests that exceeded the quota.

**getMaxSizeRequest()** - Returns the request that has maximum response size.

**getMaxDurationRequest()** - Returns the request that took maximum time to complete.

**groupRequests(...groupArgs)** - Groups the requests based on the passed arguments.

**sortRequests(...sortArgs)** - Sorts the requests based on the passed arguments.

**arrangeRequests(groupArgs, sortArgs)** - Groups and sorts the requests.

**searchRequests(...query)** - Filters requests based on the passed query.

**getRequestsBy(query, groupArgs, sortArgs)** - Get requests matches the query; group and sort the results based on the passed paramaters.

**getTotalPayloadSize()** - Returns the total payload size summing all requests.

**getTotalResponseSize()** - Returns the total response size summing all requests.

**maxPayloadSize()** - Returns the max payload size of the requests.

**maxResponseSize()** - Returns the max response size of the requests.

**maxDuration()** - Returns the max duration.

**printRequests()** - Prints all the requests in the passed reporter.

**printRequestsByType(method)** - Prints the requests matched the passed method (GET, POST etc.).

**printFailedRequests()** - Prints failed requests.

**printLastFailedRequest()** - Prints the last failed request.

**printLastRequest()** - Prints the last request.

**printRequestsExceededQuota()** - Prints requests exceeds quota.

**printMaxSizeRequest()** - Prints the request that has maximum size.

**printMaxDurationRequest()** - Prints the request that took maximum time.

**groupAndPrintRequests(...groupArgs)** - Groups and prints the requests.

**sortAndPrintRequests(...sortArgs)** - Sorts and prints the requests.

**arrangeAndPrintRequests(groupArgs, sortArgs)** - Groups, sorts and prints the requests.

**searchAndPrintRequests(...query)** - Searches and prints the requests matches the search query.

**searchArrangeAndPrintRequests(query, groupArgs, sortArgs)** - Searches and then groups, sorts and finally prints the collection.

**export()** - Export requests to a CSV file.

**displayResponseSizeChart()** - Displays bar chart that shows the response size of each request.

**displayResponseTimeChart()** - Displays bar chart that shows the response time of each request.

**displaySizeTimeChart** - Displays the bubble chart that shows the size and time of each request in the same chart.

**displaySizeDistribution** - Displays the response size distribution using pie chart.
