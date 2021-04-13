!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.httpSupervisor=e():t.httpSupervisor=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){var n=r(12),s=r(13),o=r(6),i=r(14);t.exports=function(t){return n(t)||s(t)||o(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){var n=r(9),s=r(10),o=r(6),i=r(11);t.exports=function(t,e){return n(t)||s(t,e)||o(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){var n=r(7);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){"use strict";r.r(e);var n=r(5),s=r.n(n),o=r(3),i=r.n(o),a=r(4),u=r.n(a),l=r(2),c=r.n(l),p=r(0),h=r.n(p),f=r(1),d=r.n(f);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){h()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e){if(0===t)return"0 bytes";var r=e||2,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(r))+" "+["bytes","kb","mb","gb"][n]}function g(t){if(!t)return 0;if(t.endsWith("bytes"))return parseFloat(t);return parseFloat(t)*{kb:1024,mb:1048576,gb:1073741824}[t.substr(t.length-2,2)]}function S(t){return t<500?"".concat(t," ms"):"".concat(t/1e3," s")}function E(t){return t?t.endsWith("ms")?parseFloat(t):1e3*parseFloat(t):0}function m(t){return t?new Blob([t]).size:0}Array.prototype.groupBy=function(t){return this.reduce((function(e,r){return e.set(r[t],[].concat(d()(e.has(r[t])?e.get(r[t]):[]),[r])),e}),new Map)};var R={ACTIVE:"‍".concat("👮"," HTTP SUPERVISOR STARTED"),SLEEP:"".concat("👮","‍ HTTP SUPERVISOR STOPPED"),LOG_START:"------------------------ LOG STARTS ------------------------",LOG_END:"------------------------- LOG ENDS -------------------------",NO_REQUESTS:"No Requests Found",METRICS_SUMMARY:"Metrics Summary",TOTAL_REQUESTS:"Total Requests",FAILED_REQUESTS:"Failed Requests",REQUESTS_EXCEEDED_QUOTA:"Requests Exceeded Quota",REQUESTS_INFO:"Requests Details",REQUEST_INFO:"Request Details",MAX_PAYLOAD_SIZE:"Max Payload Size",MAX_RESPONSE_SIZE:"Max Response Size",MAX_DURATION:"Max Duration",TOTAL_PAYLOAD_SIZE:"Total Payload Size",TOTAL_RESPONSE_SIZE:"Total Response Size",GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",ID:"Id",URL:"Url",PATH:"Path",METHOD:"Type",PAYLOAD:"Payload",PAYLOAD_SIZE:"Payload Size",DURATION:"Duration",RESPONSE:"Response",RESPONSE_SIZE:"Response Size",RESPONSE_STATUS:"Status",IS_ERROR:"Is Error?",ERROR_DESC:"Error Description",EXCEEDS_QUOTA:"Exceeds Quota?"},x="#f54284",b="#09b809",T="#e62e5c",q="#4d4b46",k="#e6b225",O="#fff",A="#aaa",w="#ccc",M="busy",P="idle",z="not-ready",B="retired",I={START:"start",STOP:"stop",CLEAR:"clear",RETIRE:"retire",REQUEST_START:"request-start",REQUEST_END:"request-end",REQUEST_ERROR:"request-error",EXCEEDS_QUOTA:"exceeds-quota"},D=new Set([500,401,404]),U=new Proxy({},{get:function(){return function(){}}}),L=function t(e,r,n,s){c()(this,t),h()(this,"id",-1),h()(this,"url",null),h()(this,"path",null),h()(this,"method","GET"),h()(this,"payload",null),h()(this,"payloadSize",0),h()(this,"timeStart",performance.now()),h()(this,"timeEnd",performance.now()),h()(this,"duration",0),h()(this,"response",null),h()(this,"responseStatus",null),h()(this,"responseSize",0),h()(this,"error",!1),h()(this,"errorDescription",null),h()(this,"exceedsQuota",!1),this.id=e,this.url=r,this.path=(function(t){return/^https?:\/\/|^\/\//i.test(t)}(r)?new URL(r):new URL(r,document.location.origin)).pathname,this.method=n,this.payload=s},Q=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2?arguments[2]:void 0;c()(this,t),h()(this,"_name",null),h()(this,"_items",[]),h()(this,"_originalItems",[]),h()(this,"_groups",[]),h()(this,"_groupArgs",[]),h()(this,"_groupedBy",null),h()(this,"_childrenGroupedBy",null),h()(this,"_sortArgs",[]),h()(this,"_query",null),this._items=e,this._name=r,this._originalItems=d()(e),this._groupedBy=n}return u()(t,[{key:"name",get:function(){return this._name}},{key:"hasItems",get:function(){return!(!this._items||!this._items.length)}},{key:"hasGroups",get:function(){return!(!this._groups||!this._groups.length)}},{key:"items",get:function(){return this.hasItems?d()(this._items):null}},{key:"groups",get:function(){return this.hasGroups?d()(this._groups):null}},{key:"groupArgs",get:function(){return this._groupArgs}},{key:"groupedBy",get:function(){return this._groupedBy}},{key:"sortArgs",get:function(){return this._sortArgs}},{key:"count",get:function(){return this.hasItems?this._items.length:0}},{key:"first",get:function(){return this.hasItems?this._items[0]:null}},{key:"last",get:function(){return this.hasItems?this._items[this.count-1]:null}},{key:"groupBy",value:function(){for(var e=this,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];if(!n.length)return this;this._groupArgs=n,this._groups=[],this._childrenGroupedBy=n.shift();var o=this._items.groupBy(this._childrenGroupedBy);return o.forEach((function(r,s){var o=new t(r,s,e._childrenGroupedBy);e._groups.push(o),o.groupBy.apply(o,n)})),this.sortBy.apply(this,d()(this._sortArgs)),this}},{key:"ungroup",value:function(){return this._groupArgs=[],this._groups=[],this._groupedBy=null,this._childrenGroupedBy=null,this._resetItems(),this}},{key:"sortBy",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length?this.hasGroups?(this._groups.forEach((function(t){return t.sortBy.apply(t,e)})),this):(this._items.sort((function(t,r){for(var n=0;n<e.length;n++){var s=e[n],o=s.field,i=s.dir,a=t[o],u=r[o];if(a<a)return"asc"===i?-1:1;if(a>u)return"asc"===i?1:-1}return 0})),this):this}},{key:"removeSort",value:function(){return this._sortArgs=[],this._resetItems(),this._groups.forEach((function(t){return t.removeSort()})),this}},{key:"search",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length?(this._query=e,this._items=this._items.filter((function(t){var r=[];return e.forEach((function(e){var n=e.field,s=e.operator,o=e.value,i=t[n];"="===s?r.push(i===o):"!="===s?r.push(i!==o):"<"===s?r.push(i<o):">"===s?r.push(i>o):"<="===s?r.push(i<=o):">="===s?r.push(i>=o):"~"===s?r.push("string"==typeof t[n]&&i.startsWith(o)):"^"===s&&r.push("string"==typeof t[n]&&i.endsWith(o))})),0===r.filter((function(t){return!t})).length})),this._groups.forEach((function(t){return t.search.apply(t,e)})),this):this}},{key:"reset",value:function(){return this._query=null,this._resetItems(),this._groups.forEach((function(t){return t.reset()})),this}},{key:"_resetItems",value:function(){this._items=d()(this._originalItems)}}]),t}(),C=function(){function t(e,r){c()(this,t),h()(this,"_widget",null),h()(this,"_reporter",null),h()(this,"_domains",null),h()(this,"_renderUI",!0),h()(this,"_quota",{maxPayloadSize:10240,maxResponseSize:10240,maxDuration:1e3}),h()(this,"_traceEachRequest",!0),h()(this,"_alertOnError",!0),h()(this,"_alertOnExceedQuota",!0),h()(this,"_defaultGroupBy",["path","method"]),h()(this,"_defaultSortBy",[{field:"id",dir:"asc"}]),h()(this,"_usePerformance",!0),h()(this,"_requests",new Set),h()(this,"_status",z),h()(this,"_callsCount",0),h()(this,"_id",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return t++}}(1)),h()(this,"_eventsHandlersMap",new Map),h()(this,"_nativeOpen",XMLHttpRequest.prototype.open),h()(this,"_nativeSend",XMLHttpRequest.prototype.send),this._widget=e||U,this._reporter=r||U}return u()(t,[{key:"busy",get:function(){return this._status===M}},{key:"totalRequests",get:function(){return this._requests.size}},{key:"domains",get:function(){return this._domains?d()(this._domains):null}},{key:"renderUI",get:function(){return this._renderUI}},{key:"traceEachRequest",get:function(){return this._traceEachRequest},set:function(t){this._traceEachRequest=t}},{key:"alertOnError",get:function(){return this._alertOnError},set:function(t){this._alertOnError=t}},{key:"alertOnExceedQuota",get:function(){return this._alertOnExceedQuota},set:function(t){this._alertOnExceedQuota=t}},{key:"quota",get:function(){return _({},this._quota)},set:function(t){this._quota=_(_({},this._quota),t)}},{key:"defaultGroupBy",get:function(){return d()(this._defaultGroupBy)}},{key:"defaultSortBy",get:function(){return d()(this._defaultSortBy)}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._status===z){var r=e.domains,n=e.renderUI,s=e.traceEachRequest,o=e.alertOnError,a=e.alertOnExceedQuota,u=e.quota,l=e.defaultGroupBy,c=e.defaultSortBy,p=e.usePerformance;Array.isArray(r)&&(this._domains=new Set(r)),"boolean"==typeof n&&(this._renderUI=n),"boolean"==typeof s&&(this._traceEachRequest=s),"boolean"==typeof o&&(this._alertOnError=o),"boolean"==typeof a&&(this._alertOnExceedQuota=a),"object"===i()(u)&&(this._quota=_(_({},this._quota),u)),Array.isArray(l)&&(this._defaultGroupBy=l),Array.isArray(c)&&(this._defaultSortBy=c),"boolean"==typeof p&&(this._usePerformance=p),this.on(I.REQUEST_END,(function(e,r,n){(t._traceEachRequest||t._alertOnError&&!0===n.error||t._alertOnExceedQuota&&t._isExceededQuota(n))&&t._reporter.report(n)})),this._render(),this._monkeyPatch(),this._status=P,this.start()}}},{key:"start",value:function(){this._status!==M&&(this._status!==z?(this._status=M,this._widget.start(),this._reporter.printStatusMessage(R.ACTIVE),this._triggerEvent(I.START)):this.init())}},{key:"stop",value:function(){this._status!==P&&(this._status=P,this._widget.stop(),this._reporter.printStatusMessage(R.SLEEP),this._triggerEvent(I.STOP))}},{key:"clear",value:function(){this._reporter.clear(),this._requests.clear(),this._triggerEvent(I.CLEAR)}},{key:"print",value:function(){var t,e,r=(t=(e=new Q(d()(this._requests))).groupBy.apply(e,d()(this._defaultGroupBy))).sortBy.apply(t,d()(this._defaultSortBy));this._reporter.report({totalRequests:this.totalRequests,getRequestsCount:this.getRequestsByType("GET").count,postRequestsCount:this.getRequestsByType("POST").count,putRequestsCount:this.getRequestsByType("PUT").count,deleteRequestsCount:this.getRequestsByType("DELETE").count,failedRequests:this.getFailedRequests().count,requestsExceededQuota:this.getRequestsExceededQuota().count,maxPayloadSize:this.maxPayloadSize(),maxResponseSize:this.maxResponseSize(),maxDuration:this.maxDuration(),totalPayloadSize:this.getTotalPayloadSize(),totalResponseSize:this.getTotalResponseSize()},r)}},{key:"on",value:function(t,e){this._supportEvent(t)&&(this._eventsHandlersMap.has(t)||this._eventsHandlersMap.set(t,new Set),this._eventsHandlersMap.get(t).add(e))}},{key:"off",value:function(t,e){if(this._eventsHandlersMap.has(t)){var r=this._eventsHandlersMap.get(t);r&&r.remove(e)}}},{key:"retire",value:function(){this._undoMonkeyPatch(),this._widget.destroy(),this._reporter.destroy&&this._reporter.destroy(),this._triggerEvent(I.RETIRE),this._eventsHandlersMap={},this._status=B}},{key:"report",value:function(t){this._reporter.report(t)}},{key:"requests",value:function(){return new Q(d()(this._requests))}},{key:"getRequestsByType",value:function(t){return this.requests().search({field:"method",operator:"=",value:t})}},{key:"getFailedRequests",value:function(){return this.requests().search({field:"error",operator:"=",value:!0})}},{key:"getLastFailedRequest",value:function(){return this.getFailedRequests().last}},{key:"getLastRequest",value:function(){return this.requests().last}},{key:"getRequestsExceededQuota",value:function(){return this.requests().search({field:"exceedsQuota",operator:"=",value:!0})}},{key:"getMaxSizeRequest",value:function(){return this.requests().sortBy({field:"responseSize",dir:"desc"}).first}},{key:"getMaxDurationRequest",value:function(){return this.requests().sortBy({field:"duration",dir:"desc"}).first}},{key:"groupRequests",value:function(){var t;return(t=this.requests()).groupBy.apply(t,arguments)}},{key:"sortRequests",value:function(){var t;return(t=this.requests()).sortBy.apply(t,arguments)}},{key:"arrangeRequests",value:function(t,e){var r;return(r=this.groupRequests.apply(this,d()(t))).sortBy.apply(r,d()(e))}},{key:"searchRequests",value:function(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=[].concat(r);return s.forEach((function(t){var e=t.field,r=t.value;"string"==typeof r&&(["payloadSize","responseSize"].indexOf(e)>-1?t.value=g(r):"duration"===e&&(t.value=E(r)))})),(t=this.requests()).search.apply(t,r)}},{key:"getRequestsBy",value:function(t,e,r){var n,s;return(n=(s=this.searchRequests(t)).groupBy.apply(s,d()(e))).sortBy.apply(n,d()(r))}},{key:"getTotalPayloadSize",value:function(){return d()(this._requests).reduce((function(t,e){return t+e.payloadSize}),0)}},{key:"getTotalResponseSize",value:function(){return d()(this._requests).reduce((function(t,e){return t+e.responseSize}),0)}},{key:"maxPayloadSize",value:function(){return Math.max.apply(Math,d()(d()(this._requests).map((function(t){return t.payloadSize}))))}},{key:"maxResponseSize",value:function(){return Math.max.apply(Math,d()(d()(this._requests).map((function(t){return t.responseSize}))))}},{key:"maxDuration",value:function(){return Math.max.apply(Math,d()(d()(this._requests).map((function(t){return t.duration}))))}},{key:"printRequests",value:function(){this._reporter.report(this.requests())}},{key:"printRequestsByType",value:function(t){this._reporter.report(this.getRequestsByType(t))}},{key:"printFailedRequests",value:function(){this._reporter.report(this.getFailedRequests())}},{key:"printLastFailedRequest",value:function(){this._reporter.report(this.getLastFailedRequest())}},{key:"printLastRequest",value:function(){this._reporter.report(this.getLastRequest())}},{key:"printRequestsExceededQuota",value:function(){this._reporter.report(this.getRequestsExceededQuota())}},{key:"printMaxSizeRequest",value:function(){this._reporter.report(this.getMaxSizeRequest())}},{key:"printMaxDurationRequest",value:function(){this._reporter.report(this.getMaxDurationRequest())}},{key:"groupAndPrintRequests",value:function(){this._reporter.report(this.groupRequests.apply(this,arguments))}},{key:"sortAndPrintRequests",value:function(){this._reporter.report(this.sortRequests.apply(this,arguments))}},{key:"arrangeAndPrintRequests",value:function(t,e){this._reporter.report(this.arrangeRequests(t,e))}},{key:"searchAndPrintRequests",value:function(){this._reporter.report(this.searchRequests.apply(this,arguments))}},{key:"searchArrangeAndPrintRequests",value:function(t,e,r){this._reporter.report(this.getRequestsBy.apply(this,d()(t).concat(d()(e),d()(r))))}},{key:"export",value:function(){if(0!==this.totalRequests){var t="Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\r\n";d()(this._requests).forEach((function(e){t+="".concat(e.id,",").concat(e.url,",").concat(e.path,",").concat(e.method,",").concat(e.payloadSize||0,",").concat(e.duration||0,",").concat(e.responseStatus,",").concat(e.responseSize,",").concat(e.error,",").concat(e.errorDescription,",").concat(e.exceedsQuota,"\r\n")})),t+="\r\n",t="data:application/csv,".concat(encodeURIComponent(t));var e=document.querySelector("#http-supervisor-export");e&&e.remove(),(e=document.createElement("a")).id="http-supervisor-export",e.setAttribute("href",t),e.setAttribute("download","HttpSupervisorRequestsLog.csv"),document.body.appendChild(e),e.click()}else window.alert("No Requests to export")}},{key:"_render",value:function(){var t=this;this._renderUI&&(this._widget.render(),this._widget.subscribe("start",(function(){return t.start()})),this._widget.subscribe("stop",(function(){return t.stop()})),this._widget.subscribe("clear",(function(){return t.clear()})),this._widget.subscribe("print",(function(){return t.print()})),this._widget.subscribe("export",(function(){return t.export()})))}},{key:"_monkeyPatch",value:function(){var t=this._open.bind(this),e=this._send.bind(this);window.XMLHttpRequest.prototype.open=function(){t.apply(void 0,[this].concat(Array.prototype.slice.call(arguments)))},window.XMLHttpRequest.prototype.send=function(){e.apply(void 0,[this].concat(Array.prototype.slice.call(arguments)))}}},{key:"_undoMonkeyPatch",value:function(){XMLHttpRequest.prototype.open=this._nativeOpen,XMLHttpRequest.prototype.send=this._nativeSend}},{key:"_open",value:function(){var t;if(this.busy){var e=Array.prototype.slice.call(arguments),r=e[0],n=e[1],s=e[2];e.shift();var o=this._id();this._isPerformanceSupported()&&(e[1]=this._appendRequestIdToUrl(s,o)),r.__supervisor__={id:o,method:n,url:s},(t=this._nativeOpen).call.apply(t,[r].concat(e))}}},{key:"_send",value:function(){var t,e=this;if(this.busy){var r=Array.prototype.slice.call(arguments),n=r[0],s=r[1],o=new URL(n.__supervisor__.url);if(n.__supervisor__.payload=s,r.shift(),null===this._domains||this._domains.has(o.origin)){this._increment();var i=this._createRequest(n);this._requests.add(i),n.addEventListener("load",(function(){var t,r=n.status,s=D.has(r);e._decrement(),i.responseStatus=r;try{i.response=JSON.parse(n.response)}catch(t){i.response=n.response}if(i.error=s,s&&(i.error=n.response),e._isPerformanceSupported()){var o=e._appendRequestIdToUrl(i.url,i.id);t=performance.getEntriesByType("resource").find((function(t){return"xmlhttprequest"===t.initiatorType&&t.name===o}))}t?(i.timeStart=t.startTime,i.timeEnd=t.responseEnd,i.responseSize=t.transferSize?t.transferSize:m(n.responseText||"")):(i.timeEnd=performance.now(),i.responseSize=m(n.responseText||"")),i.duration=Math.round(i.timeEnd-i.timeStart),i.exceedsQuota=e._isExceededQuota(i),s&&e._triggerEvent(I.REQUEST_ERROR,n,i),i.exceedsQuota&&e._triggerEvent(I.EXCEEDS_QUOTA,i),e._triggerEvent(I.REQUEST_END,n,i)})),(t=this._nativeSend).call.apply(t,[n].concat(r)),this._triggerEvent(I.REQUEST_START,n,i)}else{var a;(a=this._nativeSend).call.apply(a,[n].concat(r))}}}},{key:"_increment",value:function(){this._callsCount++,this._widget.updateCalls(this._callsCount)}},{key:"_decrement",value:function(){0!==this._callsCount&&(this._callsCount--,this._widget.updateCalls(this._callsCount))}},{key:"_createRequest",value:function(t){var e=t.__supervisor__,r=e.id,n=e.url,s=e.method,o=e.payload,i=new L(r,n,s,o);return i.payloadSize=m(o?JSON.stringify(o):""),i}},{key:"_supportEvent",value:function(t){return Object.values(I).indexOf(t)>-1}},{key:"_isPerformanceSupported",value:function(){return this._usePerformance&&!(!window.performance||!window.performance.getEntriesByType)}},{key:"_appendRequestIdToUrl",value:function(t,e){var r=new URL(t);return r.searchParams.append("hs_rid",e.toString()),r.toString()}},{key:"_triggerEvent",value:function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];var o=this._eventsHandlersMap.get(t);o&&d()(o).forEach((function(t){return t.apply(void 0,[e].concat(n))}))}},{key:"_isExceededQuota",value:function(t){return t.payloadSize>this._quota.maxPayloadSize||t.responseSize>this._quota.maxResponseSize||t.duration>this._quota.maxDuration}}]),t}(),j=function(){function t(){c()(this,t),h()(this,"el",null),h()(this,"_startButton",null),h()(this,"_stopButton",null),h()(this,"_clearButton",null),h()(this,"_printButton",null),h()(this,"_exportButton",null),h()(this,"_callsCountLabel",null),h()(this,"_eventsAndButtons",null)}return u()(t,[{key:"render",value:function(){if(!this.el){var t="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-right: solid 1px #666;text-decoration:none;",e=document.createRange().createContextualFragment('<div id="http-supervisor" style="position: fixed;z-index: 20000;top: 0;right: calc(50% - 81px);display: flex;justify-content: center;align-items:center;color:#fff;background-color: #333;border: solid 1px #666;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 14px;">\n           <a href="#" style="'.concat(t,'">\n              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16" style="color: #fff;">\n               <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>\n            </svg>\n           </a>\n           <a href="#" style="').concat(t,';display: none;">\n              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16" style="color: #fff;">\n                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n                <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>\n              </svg>\n           </a>\n           <a href="#" style="').concat(t,'">\n              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style="color: #fff;">\n                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\n                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\n              </svg>\n           </a>\n           <a href="#" style="').concat(t,'">\n            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" style="color: #fff;">\n              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n            </svg>\n           </a>\n           <a href="#" style="').concat(t,'">\n              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16" style="color: #fff;">\n                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>\n                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>\n              </svg>\n          </a>\n           <span id="calls-count" style="').concat(t,'">\n             0\n           <span>\n        </div>'));document.body.appendChild(e),this.el=document.querySelector("#http-supervisor");var r=Array.from(this.el.children),n=s()(r,6);this._startButton=n[0],this._stopButton=n[1],this._clearButton=n[2],this._printButton=n[3],this._exportButton=n[4],this._callsCountLabel=n[5],this._eventsAndButtons={start:this._startButton,stop:this._stopButton,clear:this._clearButton,print:this._printButton,export:this._exportButton}}}},{key:"start",value:function(){this._startButton.style.display="none",this._stopButton.style.display="flex"}},{key:"stop",value:function(){this._startButton.style.display="flex",this._stopButton.style.display="none"}},{key:"updateCalls",value:function(t){this._callsCountLabel.innerText=t.toString()}},{key:"show",value:function(){this.el.style.display="none"}},{key:"hide",value:function(){this.el.style.display="flex"}},{key:"subscribe",value:function(t,e){this._eventsAndButtons[t].addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),e()}))}},{key:"destroy",value:function(){this.el.remove()}}]),t}(),V=function(){function t(e){c()(this,t),h()(this,"_fieldsToDisplay",null),e&&(this._fieldsToDisplay=new Map(Object.entries(e)))}return u()(t,[{key:"printStatusMessage",value:function(t){this.print(t,x,!0)}},{key:"report",value:function(t,e){if(1!==arguments.length)e.hasGroups||e.hasItems?(this.printTitle(R.METRICS_SUMMARY),this._reportStats(t),this.break(),this.printTitle(R.REQUESTS_INFO),this._reportObject(e)):this.print(R.NO_REQUESTS,q,!0);else if(t instanceof L||t instanceof Q){if(t instanceof Q&&!t.hasGroups&&!t.hasItems)return void this.print(R.NO_REQUESTS,q,!0);this.printTitle(t instanceof L?R.REQUEST_INFO:R.REQUESTS_INFO),this._reportObject(t)}else this.printTitle(R.METRICS_SUMMARY),this._reportStats(t)}},{key:"success",value:function(t){this.print(t,b)}},{key:"error",value:function(t){this.print(t,T)}},{key:"info",value:function(t){this.print(t,q)}},{key:"warn",value:function(t){this.print(t,k)}},{key:"print",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,s=["color: ".concat(e)];r&&s.push("font-weight: bold"),n&&s.push(n),console.log("%c".concat(t),s.join(";"))}},{key:"printTitle",value:function(t){this.print(t,q,!0,"padding: 5px 250px; background-color: ".concat(A,"; color: ").concat(O,";margin-bottom: 10px;"))}},{key:"printRow",value:function(t){this.print(t,q)}},{key:"printKeyValue",value:function(t,e){"object"!==i()(e)?console.log("%c".concat(this._getTitleWithSpaces(t),": %c").concat(e),"font-weight: bold; color: ".concat(q),"color: ".concat(q,";")):console.log("%c".concat(this._getTitleWithSpaces(t),":"),"font-weight: bold; color: ".concat(q),e)}},{key:"printKeyValueMany",value:function(t){var e,r=this,n=[],o=[];Object.entries(t).forEach((function(e,i){var a=s()(e,2),u=a[0],l=a[1];n.push("%c".concat(0===i?r._getTitleWithSpaces(u):u,": %c").concat(l)),o.push("font-weight: bold; color: ".concat(q),"color: ".concat(q,";")),i<Object.keys(t).length-1&&o.push("color: ".concat(w))})),(e=console).log.apply(e,[n.join("%c | ")].concat(o))}},{key:"printMultiple",value:function(){var t;(t=console).log.apply(t,arguments)}},{key:"table",value:function(t,e){t.length&&console.table(t,e)}},{key:"groupStart",value:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];(e=console).group.apply(e,[t].concat(n))}},{key:"groupEnd",value:function(){console.groupEnd()}},{key:"clear",value:function(){console.clear()}},{key:"break",value:function(){console.log("\n")}},{key:"destroy",value:function(){return 0}},{key:"_getTitleWithSpaces",value:function(t){return"".concat(t).concat(Array(30-t.length).fill(" ").join(""))}},{key:"_reportStats",value:function(t){var e,r=t.totalRequests,n=t.getRequestsCount,s=t.postRequestsCount,o=t.putRequestsCount,i=t.deleteRequestsCount,a=t.failedRequests,u=t.requestsExceededQuota,l=t.maxPayloadSize,c=t.maxResponseSize,p=t.maxDuration,f=t.totalPayloadSize,d=t.totalResponseSize;this.printKeyValueMany((e={},h()(e,R.TOTAL_REQUESTS,r),h()(e,"GET",n),h()(e,"POST",s),h()(e,"PUT",o),h()(e,"DELETE",i),e)),this.printKeyValue(R.FAILED_REQUESTS,a),this.printKeyValue(R.REQUESTS_EXCEEDED_QUOTA,u),this.printKeyValue(R.MAX_PAYLOAD_SIZE,v(l)),this.printKeyValue(R.MAX_RESPONSE_SIZE,v(c)),this.printKeyValue(R.MAX_DURATION,S(p)),this.printKeyValue(R.TOTAL_PAYLOAD_SIZE,v(f)),this.printKeyValue(R.TOTAL_RESPONSE_SIZE,v(d))}},{key:"_reportObject",value:function(t){var e=this;if(t instanceof L)return this.printKeyValue(R.ID,t.id),this.printKeyValue(R.URL,t.url),this.printKeyValue(R.PATH,t.path),this.printKeyValue(R.METHOD,t.method),this.printKeyValue(R.PAYLOAD,t.payload||"-"),this.printKeyValue(R.PAYLOAD_SIZE,v(t.payloadSize)),this.printKeyValue(R.DURATION,S(t.duration)),this.printKeyValue(R.RESPONSE,t.response),this.printKeyValue(R.RESPONSE_SIZE,v(t.responseSize)),this.printKeyValue(R.RESPONSE_STATUS,t.responseStatus),this.printKeyValue(R.IS_ERROR,t.error?"Yes":"No"),this.printKeyValue(R.ERROR_DESC,t.errorDescription||"-"),void this.printKeyValue(R.EXCEEDS_QUOTA,t.exceedsQuota?"Yes":"No");if(t.hasItems||t.hasGroups)if(t.hasGroups)t.groups.forEach((function(t){var r=t.name,n=t.groupedBy,s=t.items;if(void 0===r)e.groupStart("- %c[".concat(s.length,"]"),"font-size: 0.6rem; color: ".concat(A,";"));else if("object"===i()(r))e.groupStart("".concat(n,": %c[").concat(s.length,"]"),"font-size: 0.6rem; color: ".concat(A,";"),r);else{var o=r;"number"==typeof r&&(["payloadSize","responseSize"].indexOf(n)>-1?o=v(r):"duration"===n&&(o=S(r))),e.groupStart("".concat(o," %c- [").concat(s.length,"]"),"font-size: 0.6rem; color: ".concat(A,";"))}e._reportObject(t),e.groupEnd()}));else{var r=t.items.map((function(t){var r={};return e._fieldsToDisplay.forEach((function(e,n){var s;s=void 0===t[n]?null:"object"===i()(t[n])||Array.isArray(t[n])?JSON.stringify(t[n]):t[n],r[e]=s})),r}));this.table(r)}}}]),t}(),N=new C(new j,new V({id:"Request No",url:"URL",path:"Path",method:"Type",payload:"Payload",payloadSize:"Payload Size (bytes)",duration:"Duration (ms)",responseStatus:"Status",response:"Response",responseSize:"Size (bytes)",error:"Is Error?",errorDescription:"Error Description",exceedsQuota:"Exceeds Quota?"}));e.default=N},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,s=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){s=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}return r}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,r){var n=r(7);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0}]).default}));