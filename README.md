# 👮 http-supervisor

## Intro

A simple tool that helps to audit HTTP requests and identify the requests that exceeds the set quota. It also helps to group, sort and query requests based upon 
a variety of parameters.

The tool renders a simple UI that provides controls to capture the requests and print to console in a better readable format. It also provides a global object for you 
to manage requests.

<p align="center">
  <img width="460" src="https://github.com/VJAI/http-supervisor/blob/main/ui.png">
</p>

![Screen Shot](https://github.com/VJAI/http-supervisor/blob/main/console.png)

## Install

Currently it's available in `npm`. There are plans to make it available as a browser addon.

```shell
npm i http-supervisor --save-dev
``` 

## Usage

Reference the script at the end of the body. Invoke `httpSupervisor.default.init()` to start the tool.

```html
<html>
  <body>
    ...
    <script src="node_modules/http-supervisor/http.supervisor-1.2.0.js"></script>
    <script>
      httpSupervisor.default.init();
    </script>
  </body>
</html>
```

## API

-- TODO --
