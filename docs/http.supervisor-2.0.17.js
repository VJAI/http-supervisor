(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["http"] = factory();
	else
		root["http"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(15);

var iterableToArray = __webpack_require__(16);

var unsupportedIterableToArray = __webpack_require__(14);

var nonIterableSpread = __webpack_require__(17);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(5)["default"];

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(11);

var isNativeFunction = __webpack_require__(21);

var construct = __webpack_require__(12);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(18);

var iterableToArrayLimit = __webpack_require__(19);

var unsupportedIterableToArray = __webpack_require__(14);

var nonIterableRest = __webpack_require__(20);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

var isNativeReflectConstruct = __webpack_require__(22);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(13);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(13);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// https://github.com/adriancooney/console.snapshot

/**
 * An actual useful fork of dunxrion/console.image
 * Created by Adrian Cooney
 * http://dunxrion.github.io
 */
(function (console) {
  "use strict";
  /**
   * Since the console.log doesn't respond to the `display` style,
   * setting a width and height has no effect. In fact, the only styles
   * I've found it responds to is font-size, background-image and color.
   * To combat the image repeating, we have to get a create a font bounding
   * box so to speak with the unicode box characters. EDIT: See Readme.md
   *
   * @param  {int} width  The height of the box
   * @param  {int} height The width of the box
   * @return {object}     {string, css}
   */

  function getBox(width, height) {
    return {
      string: "+",
      style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: " + height + "px;"
    };
  }
  /**
   * Profile class for a canvas
   * @param {CanvasRenderingContext2D} ctx    The context to profile
   * @param {HTMLCanvasElement} canvas The canvas element
   */


  var Profile = function Profile(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.stack = [];
    this.startTime = new Date().getTime();
    this.collectFPS = true;
    this.frames = 0; //Add the initial state

    this.addState(this.returnState(ctx)); //Add a sort of man in the middle/proxy for all the
    //context render functions and tell the profiler
    //when a function call happens. We send along the
    //function name, the arguments, and the context state

    var that = this;

    for (var fn in ctx) {
      //Move the native data to a namespace
      if (typeof ctx[fn] == "function") {
        ctx["_CF_" + fn] = ctx[fn];

        (function (fn) {
          //Create the closure
          ctx[fn] = function () {
            that.addState(that.returnState(ctx));
            that.addFunctionCall(fn, Array.prototype.slice.call(arguments));
            ctx["_CF_" + fn].apply(ctx, arguments);
          };
        })(fn);
      }
    } //Start collecting the frames


    (function tick() {
      if (that.collectFPS) that.frames++, requestAnimationFrame(tick);
    })();
  };
  /**
   * Stop profiling
   * @return {null}
   */


  Profile.prototype.end = function () {
    this.collectFPS = false;
    this.duration = new Date().getTime() - this.startTime;
    this.FPS = this.frames * 1000 / this.duration; //TODO: fix this formula
    //Remove the man in the middle

    var ctx = this.ctx;

    for (var fn in ctx) {
      if (fn.match(/_CF_/)) {
        fn = fn.replace("_CF_", "");
        ctx[fn] = ctx["_CF_" + fn];
        delete ctx["_CF_" + fn]; //And remove the cache
      }
    }
  };
  /**
   * Return the useful data from the context
   * to represent the state of the context
   * Only adds the properties and not functions
   * @param  {CanvasRenderContext2D} ctx The context to make a state from
   * @return {Object}     State object
   */


  Profile.prototype.returnState = function (ctx) {
    var obj = {};

    if (!this._stateKeys) {
      this._stateKeys = [];

      for (var key in ctx) {
        if (typeof ctx[key] == "string" || typeof ctx[key] == "number") this._stateKeys.push(key), obj[key] = ctx[key];
      }
    } else {
      for (var i = this._stateKeys.length - 1; i >= 0; i--) {
        var key = this._stateKeys[i];
        obj[key] = ctx[key];
      }

      ;
    }

    return obj;
  };
  /**
   * Add a state object to the current profile
   * @param {StateObject} state See Profile#returnState
   */


  Profile.prototype.addState = function (state) {
    this.stack.push(["state", state]);
  };
  /**
   * Add a function call to the current profile
   * @param {string} fn   The function name
   * @param {array}   args The array of arguments passed to the function
   */


  Profile.prototype.addFunctionCall = function (fn, args) {
    this.stack.push(["functionCall", fn, args]);
  };
  /**
   * Output the profile to the console in a nice, readable way.
   * @return {null}
   */


  Profile.prototype.outputToConsole = function () {
    var prevState = [],
        group = 1,
        scope = 1;
    var callCount = 0,
        stateChanges = 0; //console.group is a synchronous so this led to some
    //messy state saving and changing but it works in the end

    console.group("Canvas snapshot"); //console.log("%cFPS: %c" + this.FPS, "color: green", "color: #000"); Fix the formula!

    console.group("Rendering");
    this.stack.forEach(function (item, i) {
      switch (item[0]) {
        case "functionCall":
          callCount++;
          if (item[1] == "save") console.groupCollapsed("Saved Draw State #" + group), group++, scope++;
          console.log("%c" + item[1] + "%c(" + item[2].join(", ") + ")", "color: blue; font-style: italic", "color: #000");
          if (item[1] == "restore") console.groupEnd(), scope--;
          break;

        case "state":
          var state = item[1];

          if (!prevState.length) {
            console.groupCollapsed("Initial state");

            for (var key in state) {
              console.log(key + " = " + state[key]);
            }

            console.groupEnd();
          } else {
            for (var key in state) {
              if (prevState[scope] && prevState[scope][key] !== state[key]) console.log("%c" + key + " %c= " + state[key], "color: purple; font-style: italic", "color: #000"), stateChanges++;
            }
          }

          prevState[scope] = state;
          break;
      }
    });
    console.groupEnd(); //Add the screenshot

    console.groupCollapsed("Screenshot");
    console.screenshot(this.canvas, function () {
      console.groupEnd(); //End the screenshot group

      console.group("Statistics"); //Stats group

      console.log("Function call count: ", callCount);
      console.log("State change count: ", stateChanges);
      console.groupEnd(); //End stats group

      console.groupEnd(); //End the major group
    });
  };
  /**
   * Display an image in the console.
   * @param  {string} url The url of the image.
   * @param  {int} scale Scale factor on the image
   * @return {null}
   */


  console.image = function (url, scale, callback) {
    if (typeof scale == "function") callback = scale, scale = 1;
    if (!scale) scale = 1;
    var img = new Image();

    img.onload = function () {
      var dim = getBox(this.width * scale, this.height * scale);
      console.log("%c" + dim.string, dim.style + "background-image: url(" + url + "); background-size: " + this.width * scale + "px " + this.height * scale + "px; color: transparent;");
      if (callback) callback();
    };

    img.src = url;
    img.style.background = "url(" + url + ")"; //Preload it again..
  };
  /**
   * Snapshot a canvas context and output it to the console.
   * @param  {HTMLCanvasElement} canvas The canvas element
   * @return {null}
   */


  console.screenshot = function (canvas, scale) {
    var url = canvas.toDataURL(),
        width = canvas.width,
        height = canvas.height,
        scale = scale || 1,
        dim = getBox(width * scale, height * scale);
    console.log("%c" + dim.string, dim.style + "background-image: url(" + url + "); background-size: " + width * scale + "px " + height * scale + "px; color: transparent;background-repeat:no;");
  };
  /**
   * Snapshot/Profile a canvas element
   * @param  {HTMLCanvasElement} canvas The canvas element to profile
   * @return {null}
   */


  console.snapshot = function (canvas) {
    //Start the profiling.
    var profile = new Profile(canvas.getContext("2d"), canvas);
    requestAnimationFrame(function () {
      profile.end();
      profile.outputToConsole();
    });
  };
})(console);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "HttpSupervisor", function() { return /* reexport */ http_supervisor_HttpSupervisor; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/constants.js
var HTTP_SUPERVISOR_EMOJI = '👮';
/**
 * Collection of messages used by supervisor.
 */

var Messages = {
  ACTIVE: "\u200D".concat(HTTP_SUPERVISOR_EMOJI, " HTTP SUPERVISOR STARTED"),
  SLEEP: "".concat(HTTP_SUPERVISOR_EMOJI, "\u200D HTTP SUPERVISOR STOPPED"),
  LOG_START: "------------------------ LOG STARTS ------------------------",
  LOG_END: "------------------------- LOG ENDS -------------------------",
  NO_REQUEST: "No Request Found",
  NO_REQUESTS: "No Requests Found",
  METRICS_SUMMARY: 'Metrics Summary',
  TOTAL_REQUESTS: 'Total Requests',
  FAILED_REQUESTS: 'Failed Requests',
  REQUESTS_EXCEEDED_QUOTA: 'Requests Exceeded Quota',
  REQUESTS_INFO: 'Requests Details',
  REQUEST_INFO: 'Request Details',
  MAX_PAYLOAD_SIZE: 'Max Payload Size',
  MAX_RESPONSE_SIZE: 'Max Response Size',
  MAX_DURATION: 'Max Duration',
  TOTAL_PAYLOAD_SIZE: 'Total Payload Size',
  TOTAL_RESPONSE_SIZE: 'Total Response Size',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  REQUEST_NO: 'Request No',
  URL: 'Url',
  PATH: 'Path',
  METHOD: 'Type',
  PAYLOAD: 'Payload',
  PAYLOAD_SIZE: 'Payload Size',
  PAYLOAD_SIZE_WITH_BYTES: 'Payload Size (bytes)',
  DURATION: 'Duration',
  DURATION_WITH_MS: 'Duration (ms)',
  RESPONSE: 'Response',
  RESPONSE_SIZE: 'Response Size',
  RESPONSE_SIZE_WITH_BYTES: 'Response Size (bytes)',
  RESPONSE_STATUS: 'Status',
  IS_ERROR: 'Is Error?',
  ERROR_DESC: 'Error Description',
  EXCEEDS_QUOTA: 'Exceeds Quota?',
  INITIATOR_TYPE: 'Initiator Type',
  PAYLOAD_SIZE_BY_PERFORMANCE: 'Accurate Payload Size?',
  CHART_NOT_FOUND: 'Chart.js library not found',
  TIME_START: 'Time Start',
  TIME_END: 'Time End',
  IMPORTED_SUCCESS: 'Configuration Imported Successsfully!',
  IMPORTED_FAILURE: 'Failed to import configuration!'
};
/**
 * The different color codes by supervisor.
 */

var Colors = {
  BRAND: '#f54284',
  SUCCESS: '#09b809',
  ERROR: '#e62e5c',
  INFO: '#4d4b46',
  WARN: '#e6b225',
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#aaa',
  MEDIUM_GRAY: '#ccc',
  LIGHT_GRAY: '#eee',
  ERROR_MEDIUM: '#ff6e92',
  WARN_MEDIUM: '#e3b842'
};
/**
 * The different statuses of supervisor.
 */

var SupervisorStatus = {
  Busy: 'busy',
  Idle: 'idle',
  NotReady: 'not-ready',
  Retired: 'retired'
};
/**
 * Different events fired by supervisor.
 */

var SupervisorEvents = {
  READY: 'ready',
  START: 'start',
  STOP: 'stop',
  CLEAR: 'clear',
  RETIRE: 'retire',
  REQUEST_START: 'request-start',
  REQUEST_END: 'request-end',
  REQUEST_ERROR: 'request-error',
  EXCEEDS_QUOTA: 'exceeds-quota',
  CONFIG_CHANGE: 'config-change'
};
/**
 * Proxy object that allows to call any method in an object that not even exists.
 */

var FAKE = new Proxy({}, {
  get: function get() {
    return function () {};
  }
});
/**
 * The property name used in xhr object to store additional request info.
 * @type {string}
 */

var XHR_METADATA_KEY = '__supervisor__';
/**
 * The query string added to request for capturing accurate size and response time.
 * @type {string}
 */

var SUPERVISOR_QUERY_KEY = 'hs_rid';
/**
 * Different ajax methods.
 */

var InitiatorType = {
  XHR: 'xhr',
  FETCH: 'fetch'
};
/**
 * Chartjs cdn lib path.
 * @type {string}
 */

var CHARTJS_LIB_PATH = 'https://cdn.jsdelivr.net/npm/chart.js';
/**
 * Storage key for storing supervisor configuration.
 * @type {string}
 */

var STORAGE_KEY = 'http-supervisor';
/**
 * Display labels for `HttpRequestInfo` class props.
 */

var HTTP_REQUEST_INFO_DISPLAY_NAMES = {
  id: Messages.REQUEST_NO,
  url: Messages.URL,
  path: Messages.PATH,
  part: Messages.PATH,
  method: Messages.METHOD,
  payload: Messages.PAYLOAD,
  payloadSize: Messages.PAYLOAD_SIZE_WITH_BYTES,
  timeStart: Messages.TIME_START,
  timeEnd: Messages.TIME_END,
  duration: Messages.DURATION_WITH_MS,
  responseStatus: Messages.RESPONSE_STATUS,
  response: Messages.RESPONSE,
  responseSize: Messages.RESPONSE_SIZE_WITH_BYTES,
  error: Messages.IS_ERROR,
  errorDescription: Messages.ERROR_DESC,
  exceedsQuota: Messages.EXCEEDS_QUOTA,
  payloadByPerformance: Messages.PAYLOAD_SIZE_BY_PERFORMANCE
};
/**
 * Different HTTP request methods.
 */

var REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
/**
 * Search operators.
 */

var SEARCH_OPERATOR = {
  EQUALS: '=',
  NOT_EQUALS: '!=',
  LESS: '<',
  GREATER: '>',
  LESS_EQUAL: '<=',
  GREATER_EQUAL: '>=',
  STARTS_WITH: '~',
  ENDS_WITH: '^',
  CONTAINS: 'contains',
  NOT_CONTAINS: '!contains',
  MATCHES: 'matches',
  NOT_MATCHES: '!matches'
};
/**
 * Export file types.
 */

var FILE_TYPE = {
  CSV: 'csv',
  JSON: 'json'
};
// CONCATENATED MODULE: ./src/util.js
// Polyfill


Array.prototype.has = function (item) {
  return this.indexOf(item) > -1;
};
/**
 * Return bytes in human readable format.
 */


function formatBytes(bytes, decimals) {
  if (bytes === 0) {
    return '0 bytes';
  }

  var k = 1024,
      dm = decimals || 2,
      sizes = ['bytes', 'kb', 'mb', 'gb'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
/**
 * Converts human-readable payload size to bytes.
 */

function convertBytes(bytes) {
  if (!bytes) {
    return 0;
  }

  if (bytes.endsWith('bytes')) {
    return parseFloat(bytes);
  }

  var map = {
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024
  };
  return parseFloat(bytes) * map[bytes.substr(bytes.length - 2, 2)];
}
/**
 * Formats time in seconds.
 */

function formatTime(time) {
  return time < 1000 ? "".concat(time, " ms") : "".concat(time / 1000, " s");
}
/**
 * Converts human-readable time to milliseconds.
 */

function convertTime(time) {
  if (!time) {
    return 0;
  }

  return time.endsWith('ms') ? parseFloat(time) : parseFloat(time) * 1000;
}
/**
 * Returns the byte size of the passed string.
 */

function byteSize(str) {
  return str ? new Blob([str]).size : 0;
}
/**
 * Id generator function.
 * @param seed
 * @returns {function(): number}
 */

function idGenerator() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function () {
    return seed++;
  };
}
/**
 * Returns `true` if url is absolute.
 * @param url
 * @returns {boolean}
 */

function isAbsolute(url) {
  var reg = new RegExp('/^https?:\/\/|^\/\//i');
  return reg.test(url);
}
/**
 * Load script dynamically in a web page.
 * @param src
 * @param onload
 */

function loadScript(src, onload, onerror, id) {
  var script = document.createElement('script');
  script.src = src;
  id && script.setAttribute('id', id);
  onload && script.addEventListener('load', onload);
  onerror && script.addEventListener('error', onerror);
  (document.head || document.documentElement).appendChild(script);
}
/**
 * Removes the script.
 * @param id
 */

function unloadScript(id) {
  var script = document.getElementById('http-sup-chartjs');
  script && script.remove();
}
/**
 * Returns random color.
 * @return {string}
 */

function dynamicColors() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}
/**
 * Create array of random color.
 * @param a
 * @return {Array}
 */

function poolColors(a) {
  var pool = [];

  for (var i = 0; i < a; i++) {
    pool.push(dynamicColors());
  }

  return pool;
}
/**
 * Returns `true` if the object matches the passed criteria.
 * @param criteria
 * @param object
 * @return {boolean}
 */

function matchCriteria(criteria, object) {
  var results = [];
  criteria.forEach(function (_ref) {
    var field = _ref.field,
        operator = _ref.operator,
        value = _ref.value;
    var v = object[field];

    if (operator === SEARCH_OPERATOR.EQUALS) {
      results.push(v === value);
    } else if (operator === SEARCH_OPERATOR.NOT_EQUALS) {
      results.push(v !== value);
    } else if (operator === SEARCH_OPERATOR.LESS) {
      results.push(v < value);
    } else if (operator === SEARCH_OPERATOR.GREATER) {
      results.push(v > value);
    } else if (operator === SEARCH_OPERATOR.LESS_EQUAL) {
      results.push(v <= value);
    } else if (operator === SEARCH_OPERATOR.GREATER_EQUAL) {
      results.push(v >= value);
    } else if (operator === SEARCH_OPERATOR.STARTS_WITH) {
      results.push(typeof object[field] === 'string' && v.startsWith(value));
    } else if (operator === SEARCH_OPERATOR.ENDS_WITH) {
      results.push(typeof object[field] === 'string' && v.endsWith(value));
    } else if (operator === SEARCH_OPERATOR.CONTAINS) {
      results.push(typeof object[field] === 'string' && v.toLowerCase().has(value.toLowerCase()));
    } else if (operator === SEARCH_OPERATOR.NOT_CONTAINS) {
      results.push(typeof object[field] === 'string' && !v.toLowerCase().has(value.toLowerCase()));
    } else if (operator === SEARCH_OPERATOR.MATCHES) {
      results.push(typeof object[field] === 'string' && matchesGlob(value, v));
    } else if (operator === SEARCH_OPERATOR.NOT_MATCHES) {
      results.push(typeof object[field] === 'string' && !matchesGlob(value, v));
    }
  });
  return results.filter(function (r) {
    return !r;
  }).length === 0;
}
/**
 * Returns `true` if the content type is json.
 * @param contentType
 * @return {boolean}
 */

function isJsonResponse(contentType) {
  return contentType ? contentType.toLowerCase().startsWith('application/json') : false;
}
/**
 * Safely parses string to JSON.
 * @param string
 * @return {any}
 */

function safeParse(string) {
  var json;

  try {
    json = JSON.parse(string);
  } catch (_unused) {
    json = string;
  }

  return json;
}
/**
 * Converts JS map to plain object.
 * @param map
 */

function mapToJson(map) {
  var object = {};
  map.forEach(function (value, key) {
    var keys = key.split('.'),
        last = keys.pop();
    keys.reduce(function (r, a) {
      return r[a] = r[a] || {};
    }, object)[last] = value;
  });
  return object;
}
/**
 * https://stackoverflow.com/questions/24558442/is-there-something-like-glob-but-for-urls-in-javascript
 * @private
 */

function matchesGlob(pattern, input) {
  var re = new RegExp(pattern.toLowerCase().replace(/([.?+^$[\]\\(){}|\/-])/g, "\\$1").replace(/\*/g, '.*'));
  return re.test(input.toLowerCase());
}
/**
 * Copies text to clipboard.
 * @param content
 */

function copyText(content) {
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.value = content;
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  input.remove();
}
// CONCATENATED MODULE: ./src/http-request-info.js






/**
 * Holds the http request information.
 */

var http_request_info_HttpRequestInfo = /*#__PURE__*/function () {
  /**
   * Constructor.
   */
  function HttpRequestInfo(id, url, method, payload) {
    classCallCheck_default()(this, HttpRequestInfo);

    defineProperty_default()(this, "_urlObj", null);

    defineProperty_default()(this, "id", -1);

    defineProperty_default()(this, "_url", null);

    defineProperty_default()(this, "method", 'GET');

    defineProperty_default()(this, "payload", null);

    defineProperty_default()(this, "payloadSize", 0);

    defineProperty_default()(this, "timeStart", performance.now());

    defineProperty_default()(this, "timeEnd", performance.now());

    defineProperty_default()(this, "duration", 0);

    defineProperty_default()(this, "response", null);

    defineProperty_default()(this, "responseStatus", null);

    defineProperty_default()(this, "responseSize", 0);

    defineProperty_default()(this, "exceedsQuota", false);

    defineProperty_default()(this, "initiatorType", InitiatorType.XHR);

    defineProperty_default()(this, "payloadByPerformance", true);

    defineProperty_default()(this, "requestHeaders", new Map());

    defineProperty_default()(this, "responseHeaders", new Map());

    defineProperty_default()(this, "pending", true);

    this.id = id;
    this.url = url;
    this.method = method;
    this.payload = payload;
  }
  /**
   * Issues AJAX request using the property values.
   * @param type
   * @param reqOptions
   * @return {*}
   */


  createClass_default()(HttpRequestInfo, [{
    key: "url",
    get:
    /**
     * The URL object.
     * @type {URL}
     * @private
     */

    /**
     * The request no.
     * @type {number}
     */

    /**
     * The url.
     * @type {string}
     * @private
     */

    /**
     * Returns the url.
     * @return {string}
     */
    function get() {
      return this._urlObj ? this._urlObj.toString() : null;
    }
    /**
     * Sets the url.
     * @param value
     */
    ,
    set: function set(value) {
      this._url = value;

      if (value) {
        this._urlObj = isAbsolute(value) ? new URL(value) : new URL(value, document.location.origin);
      } else {
        this._urlObj = null;
      }
    }
    /**
     * Returns the domain.
     * @return {string}
     */

  }, {
    key: "domain",
    get: function get() {
      return this._urlObj ? this._urlObj.origin : null;
    }
    /**
     * Returns the path.
     * @return {string}
     */

  }, {
    key: "path",
    get: function get() {
      return this._urlObj ? this._urlObj.pathname : null;
    }
    /**
     * The query in the url.
     * @type {string}
     */

  }, {
    key: "query",
    get: function get() {
      return this._urlObj ? this._urlObj.search : null;
    }
    /**
     * The path in the url excluding domain.
     * @type {string}
     */

  }, {
    key: "part",
    get: function get() {
      if (!this._urlObj) {
        return null;
      }

      var pathParts = this.path.split('/'),
          lastPart = "/".concat(pathParts[pathParts.length - 1]) || false;
      return this.query ? "".concat(lastPart).concat(this.query) : lastPart;
    }
    /**
     * The request type (GET, POST etc.)
     * @type {string}
     */

  }, {
    key: "error",
    get:
    /**
     * True if the request error-ed out.
     * @type {boolean}
     */
    function get() {
      return this.responseStatus === 0 || this.responseStatus >= 400;
    }
    /**
     * The error description.
     * @type {*}
     */

  }, {
    key: "errorDescription",
    get: function get() {
      return this.error ? this.response : null;
    }
    /**
     * True if the request exceeds quota.
     * @type {boolean}
     */

  }, {
    key: "fire",
    value: function fire() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xhr';
      var reqOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (type === 'xhr') {
        var onReadyStateChange = reqOptions.onReadyStateChange;
        var xhr = new XMLHttpRequest();
        onReadyStateChange && xhr.addEventListener('readystatechange', onReadyStateChange);
        xhr.open(this.method, this.url);
        Object.entries(this.requestHeaders).forEach(function (_ref) {
          var _ref2 = slicedToArray_default()(_ref, 2),
              header = _ref2[0],
              value = _ref2[1];

          return xhr.setRequestHeader(header, value);
        });
        this.method !== REQUEST_TYPE.GET && this.payload ? xhr.send(JSON.stringify(this.payload)) : xhr.send();
        return xhr;
      }

      var requestOptions = {
        method: this.method,
        headers: mapToJson(this.requestHeaders)
      };
      this.method !== REQUEST_TYPE.GET && this.payload && (requestOptions.body = JSON.stringify(this.payload));
      return window.fetch(this.url, requestOptions);
    }
  }]);

  return HttpRequestInfo;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(9);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/collection.js











var _Symbol$iterator;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Represents a collection of records that can be group-able, sortable and searchable.
 */

_Symbol$iterator = Symbol.iterator;

var collection_Collection = /*#__PURE__*/function (_Array) {
  inherits_default()(Collection, _Array);

  var _super = _createSuper(Collection);

  /**
   * Constructor.
   */
  function Collection(items, name, groupedBy) {
    var _this2;

    var _this;

    classCallCheck_default()(this, Collection);

    _this = _super.call(this);

    defineProperty_default()(assertThisInitialized_default()(_this), "_name", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "_originalItems", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_groups", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_groupArgs", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_groupedBy", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "_childrenGroupedBy", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "_sortArgs", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_query", null);

    (_this2 = _this).push.apply(_this2, toConsumableArray_default()(items));

    _this._name = name || '-';
    _this._originalItems = toConsumableArray_default()(items);
    _this._groupedBy = groupedBy;
    return _this;
  }

  createClass_default()(Collection, [{
    key: "name",
    get:
    /**
     * The name of the collection.
     * @type {*}
     * @private
     */

    /**
     * Original items passed in ctor.
     * @type {Array}
     * @private
     */

    /**
     * Array of sub-groups.
     * @type {Array}
     * @private
     */

    /**
     * The group arguments.
     * @type {Array}
     * @private
     */

    /**
     * The field by which the collection's items are grouped by.
     * @type {string}
     * @private
     */

    /**
     * The field by which the collection's groups are grouped by.
     * @type {null}
     * @private
     */

    /**
     * The sort arguments.
     * @type {Array}
     * @private
     */

    /**
     * Search query;
     * @type {*}
     * @private
     */

    /**
     * Returns the name of the collection.
     * @returns {*}
     */
    function get() {
      return this._name;
    }
    /**
     * Returns true if there are items.
     * @returns {boolean}
     */

  }, {
    key: "hasItems",
    get: function get() {
      return this.length > 0;
    }
    /**
     * Returns true if there are sub groups.
     * @returns {boolean}
     */

  }, {
    key: "hasGroups",
    get: function get() {
      return !!(this._groups && this._groups.length);
    }
    /**
     * Returns the items.
     * @returns {Array<*>}
     */

  }, {
    key: "items",
    get: function get() {
      return this.hasItems ? toConsumableArray_default()(this) : null;
    }
    /**
     * Returns the sub-groups.
     * @returns {Array<Collection>}
     */

  }, {
    key: "groups",
    get: function get() {
      return this.hasGroups ? toConsumableArray_default()(this._groups) : null;
    }
    /**
     * Returns the group arguments.
     * @returns {Array}
     */

  }, {
    key: "groupArgs",
    get: function get() {
      return this._groupArgs;
    }
    /**
     * Returns the field by which the collection's items are grouped by.
     * @returns {string}
     */

  }, {
    key: "groupedBy",
    get: function get() {
      return this._groupedBy;
    }
    /**
     * Returns the sort arguments.
     * @returns {Array}
     */

  }, {
    key: "sortArgs",
    get: function get() {
      return this._sortArgs;
    }
    /**
     * Returns the items count.
     * @returns {number}
     */

  }, {
    key: "count",
    get: function get() {
      return this.hasItems ? this.length : 0;
    }
    /**
     * Returns the first item from the collection.
     * @returns {*}
     */

  }, {
    key: "first",
    get: function get() {
      return this.hasItems ? this[0] : null;
    }
    /**
     * Returns the last item from the collection.
     * @returns {*}
     */

  }, {
    key: "last",
    get: function get() {
      return this.hasItems ? this[this.count - 1] : null;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return toConsumableArray_default()(this);
    }
    /**
     * Groups the collection and sub-collections by the passed arguments.
     * @param args
     * @returns {Collection}
     */

  }, {
    key: "groupBy",
    value: function groupBy() {
      var _this3 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!args.length) {
        return this;
      }

      this._groupArgs = args;
      this._groups = [];
      this._childrenGroupedBy = args.shift();

      var obj = this._customGroupBy(this._childrenGroupedBy);

      obj.forEach(function (key, value) {
        var group = new Collection(key, value, _this3._childrenGroupedBy);

        _this3._groups.push(group);

        group.groupBy.apply(group, args);
      });
      this.sortBy.apply(this, toConsumableArray_default()(this._sortArgs));
      return this;
    }
    /**
     * Removes the grouping.
     * @returns {Collection}
     */

  }, {
    key: "ungroup",
    value: function ungroup() {
      this._groupArgs = [];
      this._groups = [];
      this._groupedBy = null;
      this._childrenGroupedBy = null;

      this._resetItems();

      return this;
    }
    /**
     * Sorts the collection and sub-collections by the passed arguments.
     * @param args
     * @returns {Collection}
     */

  }, {
    key: "sortBy",
    value: function sortBy() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (!args.length) {
        return this;
      }

      if (this.hasGroups) {
        this._groups.forEach(function (group) {
          return group.sortBy.apply(group, args);
        });

        return this;
      }

      this.sort(function (r1, r2) {
        for (var i = 0; i < args.length; i++) {
          var _args$i = args[i],
              field = _args$i.field,
              dir = _args$i.dir,
              v1 = r1[field],
              v2 = r2[field];
          if (v1 < v2) return dir === 'asc' ? -1 : 1;
          if (v1 > v2) return dir === 'asc' ? 1 : -1;
        }

        return 0;
      });
      return this;
    }
    /**
     * Removes the applied sort.
     * @returns {Collection}
     */

  }, {
    key: "removeSort",
    value: function removeSort() {
      this._sortArgs = [];

      this._resetItems();

      this._groups.forEach(function (group) {
        return group.removeSort();
      });

      return this;
    }
    /**
     * Search the items based on the passed query.
     * @param args
     * @returns {Collection}
     */

  }, {
    key: "search",
    value: function search() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (!args.length) {
        return this;
      }

      this._query = args;

      var items = toConsumableArray_default()(this);

      this.length = 0;
      this.push.apply(this, toConsumableArray_default()(items.filter(function (r) {
        return matchCriteria(args, r);
      })));

      this._groups.forEach(function (group) {
        return group.search.apply(group, args);
      });

      return this;
    }
    /**
     * Reset the search.
     * @returns {Collection}
     */

  }, {
    key: "reset",
    value: function reset() {
      this._query = null;

      this._resetItems();

      this._groups.forEach(function (group) {
        return group.reset();
      });

      return this;
    }
    /**
     * Reset the items.
     * @private
     */

  }, {
    key: "_resetItems",
    value: function _resetItems() {
      this.splice(0, this.length);
      this.push.apply(this, toConsumableArray_default()(this._originalItems));
    }
    /**
     * Groups the array.
     * @param key
     * @private
     */

  }, {
    key: "_customGroupBy",
    value: function _customGroupBy(key) {
      return this.reduce(function (rv, x) {
        var groupName = x[key];
        var hasGroup, newValue, groupKey;

        if (typeof_default()(groupName) !== 'object') {
          groupKey = groupName;
          hasGroup = rv.has(groupName);
        } else {
          groupKey = toConsumableArray_default()(rv.keys()).find(function (k) {
            return JSON.stringify(k) === JSON.stringify(groupName);
          });
          hasGroup = !!groupKey;
          groupKey = groupKey || groupName;
        }

        if (hasGroup) {
          newValue = [].concat(toConsumableArray_default()(rv.get(groupKey)), [x]);
        } else {
          newValue = [x];
        }

        rv.set(groupKey, newValue);
        return rv;
      }, new Map());
    }
  }]);

  return Collection;
}( /*#__PURE__*/wrapNativeSuper_default()(Array));


// CONCATENATED MODULE: ./src/event.emitter.js





/**
 * Takes care of event handling business.
 */
var event_emitter_EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    classCallCheck_default()(this, EventEmitter);

    defineProperty_default()(this, "_eventsHandlersMap", new Map());
  }

  createClass_default()(EventEmitter, [{
    key: "on",
    value:
    /**
     * Subscribes to the passed event.
     * @param {string} eventName
     * @param {function} handler
     */
    function on(eventName, handler) {
      if (!this._eventsHandlersMap.has(eventName)) {
        this._eventsHandlersMap.set(eventName, new Set());
      }

      this._eventsHandlersMap.get(eventName).add(handler);
    }
    /**
     * Un-subscribes from the passed event.
     * @param {string} eventName
     * @param {function} handler
     */

  }, {
    key: "off",
    value: function off(eventName, handler) {
      if (!this._eventsHandlersMap.has(eventName)) {
        return;
      }

      var handlers = this._eventsHandlersMap.get(eventName);

      handlers && handlers["delete"](handler);
    }
    /**
     * Invokes the handlers registered for the event.
     * @private
     */

  }, {
    key: "triggerEvent",
    value: function triggerEvent(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var handlers = this._eventsHandlersMap.get(eventName);

      if (!handlers) {
        return;
      }

      toConsumableArray_default()(handlers).forEach(function (handler) {
        return handler.apply(void 0, args);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._eventsHandlersMap = null;
    }
  }]);

  return EventEmitter;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/construct.js
var construct = __webpack_require__(12);
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// CONCATENATED MODULE: ./src/session.js











function session_createSuper(Derived) { var hasNativeReflectConstruct = session_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function session_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var session_Session = /*#__PURE__*/function (_Set) {
  inherits_default()(Session, _Set);

  var _super = session_createSuper(Session);

  function Session() {
    var _this;

    classCallCheck_default()(this, Session);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "_id", null);

    return _this;
  }

  createClass_default()(Session, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "requests",
    value: function requests() {
      return construct_default()(collection_Collection, toConsumableArray_default()(this));
    }
  }]);

  return Session;
}( /*#__PURE__*/wrapNativeSuper_default()(Set));
// CONCATENATED MODULE: ./src/http-supervisor.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/**
 * Supervises HTTP Network Traffic. Helps to identify query, group, sort, export, visualize requests and much more.
 */

var http_supervisor_HttpSupervisor = /*#__PURE__*/function () {
  /**
   * Constructor.
   * @param {object} widget The control panel.
   * @param {object} reporter The reporter that's used for displaying requests info and charts.
   */
  function HttpSupervisor(widget, reporter) {
    classCallCheck_default()(this, HttpSupervisor);

    defineProperty_default()(this, "_widget", null);

    defineProperty_default()(this, "_reporter", null);

    defineProperty_default()(this, "_eventEmitter", null);

    defineProperty_default()(this, "_include", null);

    defineProperty_default()(this, "_exclude", null);

    defineProperty_default()(this, "_renderUI", true);

    defineProperty_default()(this, "_quota", {
      maxPayloadSize: 10240,
      // 10kb
      maxResponseSize: 10240,
      // 10kb
      maxDuration: 1000 // 1s

    });

    defineProperty_default()(this, "_silent", false);

    defineProperty_default()(this, "_traceEachRequest", false);

    defineProperty_default()(this, "_alertOnError", true);

    defineProperty_default()(this, "_alertOnExceedQuota", true);

    defineProperty_default()(this, "_alertOnRequestStart", false);

    defineProperty_default()(this, "_groupBy", ['part', 'method']);

    defineProperty_default()(this, "_sortBy", [{
      field: 'id',
      dir: 'asc'
    }]);

    defineProperty_default()(this, "_usePerformance", true);

    defineProperty_default()(this, "_monkeyPatchFetch", true);

    defineProperty_default()(this, "_loadChart", true);

    defineProperty_default()(this, "_keyboardEvents", true);

    defineProperty_default()(this, "_persistConfig", true);

    defineProperty_default()(this, "_lockConsole", false);

    defineProperty_default()(this, "_requests", new session_Session());

    defineProperty_default()(this, "_sessions", new Map());

    defineProperty_default()(this, "_watches", new Map());

    defineProperty_default()(this, "_status", SupervisorStatus.NotReady);

    defineProperty_default()(this, "_callsCount", 0);

    defineProperty_default()(this, "_id", idGenerator(1));

    defineProperty_default()(this, "_watchId", idGenerator(1));

    defineProperty_default()(this, "_sessionId", idGenerator(1));

    defineProperty_default()(this, "_activeSessionId", null);

    defineProperty_default()(this, "_nativeFetch", fetch);

    defineProperty_default()(this, "_nativeOpen", XMLHttpRequest.prototype.open);

    defineProperty_default()(this, "_nativeSend", XMLHttpRequest.prototype.send);

    defineProperty_default()(this, "_nativeSetRequestHeader", XMLHttpRequest.prototype.setRequestHeader);

    this._widget = widget || FAKE;
    this._reporter = reporter || FAKE;
    this._eventEmitter = new event_emitter_EventEmitter();
    this.init = this.init.bind(this);
    this.retire = this.retire.bind(this);
  }
  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   * @param {Array<string>} [config.include] Array of url glob patterns to monitor.
   * @param {Array<string>} [config.exclude] Array of url glob patterns to ignore.
   * @param {boolean} [config.renderUI] Passing `true` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing `true` will print each request.
   * @param {boolean} [config.alertOnError] Passing `true` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing `true` will print requests that exceeds quota.
   * @param {boolean} [config.alertOnRequestStart] True to alert on request start.
   * @param {object} [config.quota] Request Quota.
   * @param {Array} [config.groupBy] Grouping parameters used in displaying requests.
   * @param {Array} [config.sortBy] Sorting parameters used in displaying requests.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.loadChart] True to use chart.js library for data visualization.
   * @param {boolean} [config.keyboardEvents] True to use keyboard events for operating control panel.
   * @param {boolean} [config.persistConfig] True to persist config in local storage.
   * @param {Array} [config.watches] Collection of watches.
   * @param {boolean} [config.lockConsole] True to lock console.
   * @param {boolean} [loadConfigFromStore = true] True to load the config from local storage.
   */


  createClass_default()(HttpSupervisor, [{
    key: "busy",
    get:
    /**
     * The UI widget through which user can interact with supervisor.
     * @type {object}
     * @private
     */

    /**
     * The reporter that displays the metrics and requests info captured in a particular period.
     * @type {object}
     * @private
     */

    /**
     * Event emitter.
     * @type {EventEmitter}
     * @private
     */

    /**
     * The url that matches these patterns will be captured.
     * @type {Set}
     * @private
     */

    /**
     * The url that matches these patterns will be ignored.
     * @type {Set}
     * @private
     */

    /**
     * True to render UI.
     * @type {boolean}
     * @private
     */

    /**
     * Request Quota.
     * @type {object}
     * @private
     */

    /**
     * True to not display any messages in console or the passed reporter.
     * @type {boolean}
     * @private
     */

    /**
     * Displays each completed request.
     * @type {boolean}
     * @private
     */

    /**
     * Displays failed request.
     * @type {boolean}
     * @private
     */

    /**
     * Displays requests that exceeded quota.
     * @type {boolean}
     * @private
     */

    /**
     * True to alert on request start.
     * @type {boolean}
     * @private
     */

    /**
     * Grouping parameters used in displaying requests.
     * @type {string[]}
     * @private
     */

    /**
     * Sorting parameters used in displaying requests.
     * @type {*[]}
     * @private
     */

    /**
     * Uses `performance.getEntriesByType` for capturing accurate duration and payload size.
     * @type {boolean}
     * @private
     */

    /**
     * True to monkey patch fetch requests.
     * @type {boolean}
     * @private
     */

    /**
     * True to use `chart.js` library for data visualization.
     * @type {boolean}
     * @private
     */

    /**
     * True to use keyboard events for operating control panel.
     * @type {boolean}
     * @private
     */

    /**
     * True to persist config in local storage.
     * @type {boolean}
     * @private
     */

    /**
     * True to lock dev console.
     * @type {boolean}
     * @private
     */

    /**
     * Collection of captured requests.
     * @type {Set}
     * @private
     */

    /**
     * Collection of recorded sessions.
     * @type {Map}
     * @private
     */

    /**
     * Collection of watches.
     * @type {Map}
     * @private
     */

    /**
     * Current status of the supervisor.
     * @type {string}
     * @private
     */

    /**
     * Current on-going requests count.
     * @type {number}
     * @private
     */

    /**
     * The id generator function.
     * @type {function}
     * @private
     */

    /**
     * The id generator function for watches.
     * @type {function}
     * @private
     */

    /**
     * The id generator function for sessions.
     * @type {function}
     * @private
     */

    /**
     * The current active session id.
     * @type {number}
     * @private
     */

    /**
     * Native `fetch` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native `open` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native `send` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native `setRequestHeader` method.
     * @type {function}
     * @private
     */

    /**
     * Returns `true` if busy.
     * @return {boolean}
     */
    function get() {
      return this._status === SupervisorStatus.Busy;
    }
    /**
     * Returns the current status.
     * @returns {string}
     */

  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
    /**
     * Returns the total no. of requests of the current session.
     * @return {number}
     */

  }, {
    key: "totalRequests",
    get: function get() {
      return this._requests.size;
    }
    /**
     * Returns the url patters to monitor.
     * @returns {Array}
     */

  }, {
    key: "include",
    get: function get() {
      return this._include ? toConsumableArray_default()(this._include) : null;
    }
    /**
     * Set the url patterns to monitor.
     */
    ,
    set: function set(value) {
      this._include = new Set(value || []);

      this._updateStorage();
    }
    /**
     * Returns the url patters to ignore.
     * @returns {Array}
     */

  }, {
    key: "exclude",
    get: function get() {
      return this._exclude ? toConsumableArray_default()(this._exclude) : null;
    }
    /**
     * Set the url patters to ignore.
     */
    ,
    set: function set(value) {
      this._exclude = new Set(value || []);

      this._updateStorage();
    }
    /**
     * Returns `true` if ui is required.
     * @returns {boolean}
     */

  }, {
    key: "renderUI",
    get: function get() {
      return this._renderUI;
    }
    /**
     * Shows/hides UI if `renderUI` is set as `true`.
     */

  }, {
    key: "displayUI",
    set: function set(value) {
      if (value) {
        this._widget.show();
      } else {
        this._widget.hide();
      }
    }
    /**
     * Returns true if no outputs in console.
     * @return {boolean}
     */

  }, {
    key: "silent",
    get: function get() {
      return this._silent;
    }
    /**
     * Enables/disables the silent flag.
     * @param value
     */
    ,
    set: function set(value) {
      this._silent = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if trace each request is set.
     * @returns {boolean}
     */

  }, {
    key: "traceEachRequest",
    get: function get() {
      return this._traceEachRequest;
    }
    /**
     * Setting `true` will print each completed request in console or the passed reporter.
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._traceEachRequest = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if alert on error is enabled.
     * @returns {boolean}
     */

  }, {
    key: "alertOnError",
    get: function get() {
      return this._alertOnError;
    }
    /**
     * Setting `true` will print error requests.
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._alertOnError = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if printing requests that exceeds quota is enabled.
     * @returns {boolean}
     */

  }, {
    key: "alertOnExceedQuota",
    get: function get() {
      return this._alertOnExceedQuota;
    }
    /**
     * Setting `true` will print requests that exceeds quota.
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._alertOnExceedQuota = value;

      this._updateStorage();
    }
    /**
     * Returns true if printing at request start is enabled.
     */

  }, {
    key: "alertOnRequestStart",
    get: function get() {
      return this._alertOnRequestStart;
    }
    /**
     * Setting `true` prints the request start message.
     * @param value
     */
    ,
    set: function set(value) {
      this._alertOnRequestStart = value;

      this._updateStorage();
    }
    /**
     * Returns the defined quota.
     * @returns {object}
     */

  }, {
    key: "quota",
    get: function get() {
      return _objectSpread({}, this._quota);
    }
    /**
     * Re-set the quota.
     * @param {object} value
     */
    ,
    set: function set(value) {
      this._quota = _objectSpread(_objectSpread({}, this._quota), value);

      this._updateStorage();
    }
    /**
     * Returns the group parameters.
     * @returns {string[]}
     */

  }, {
    key: "groupBy",
    get: function get() {
      return toConsumableArray_default()(this._groupBy);
    }
    /**
     * Sets the group parameters.
     * @param value
     */
    ,
    set: function set(value) {
      this._groupBy = value;

      this._updateStorage();
    }
    /**
     * Returns the sort parameters.
     * @returns {*[]}
     */

  }, {
    key: "sortBy",
    get: function get() {
      return toConsumableArray_default()(this._sortBy);
    }
    /**
     * Set the sort parameters.
     * @param value
     */
    ,
    set: function set(value) {
      this._sortBy = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if performance API is enabled for capturing accurate info.
     * @returns {boolean}
     */

  }, {
    key: "usePerformance",
    get: function get() {
      return this._usePerformance;
    }
    /**
     * Enable/Disable performance API.
     * @param value
     */
    ,
    set: function set(value) {
      this._usePerformance = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if capturing fetch API is enabled.
     * @returns {boolean}
     */

  }, {
    key: "monkeyPatchFetch",
    get: function get() {
      return this._monkeyPatchFetch;
    }
    /**
     * Enable/Disable intercepting fetch API.
     * @param value
     */
    ,
    set: function set(value) {
      this._monkeyPatchFetch = value;

      this._updateStorage();
    }
    /**
     * Returns `true` if visualization is enabled.
     * @returns {boolean}
     */

  }, {
    key: "loadChart",
    get: function get() {
      return this._loadChart;
    }
    /**
     * Returns `true` if keyboard events enabled.
     * @return {boolean}
     */

  }, {
    key: "keyboardEvents",
    get: function get() {
      return this._keyboardEvents;
    }
    /**
     * Enables/disables keyboard events.
     * @param value
     */
    ,
    set: function set(value) {
      this._keyboardEvents = value;
    }
    /**
     * Returns the value of persist config.
     * @returns {boolean}
     */

  }, {
    key: "persistConfig",
    get: function get() {
      return this._persistConfig;
    }
    /**
     * Sets the persist config.
     * @param value
     */
    ,
    set: function set(value) {
      this._persistConfig = value;
      !value && this.clearStore();
    }
    /**
     * Returns the lock console status.
     * @returns {boolean}
     */

  }, {
    key: "lockConsole",
    get: function get() {
      return this._lockConsole;
    }
    /**
     * Locks console or not.
     * @param value
     */
    ,
    set: function set(value) {
      this._lockConsole = value;

      this._updateStorage();

      if (!this._reporter) {
        return;
      }

      if (value === true && this._reporter.acquireLock) {
        this._reporter.acquireLock();
      }

      if (value === false && this._reporter.releaseLock) {
        this._reporter.releaseLock();
      }
    }
    /**
     * Returns the current on-going calls count.
     * @returns {number}
     */

  }, {
    key: "onGoingCallsCount",
    get: function get() {
      return this._callsCount;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var loadConfigFromStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this._status !== SupervisorStatus.NotReady) {
        return;
      }

      var storedConfig = loadConfigFromStore && localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {};

      this._setConfig(_objectSpread(_objectSpread({}, storedConfig), config)); // Listen to the `request-end` event to display request details based on the properties.


      this.on(SupervisorEvents.REQUEST_END, function (supervisor, request) {
        if (_this._silent) {
          return;
        }

        if (_this._traceEachRequest) {
          _this._reporter.report(request);

          return;
        }

        if (_this._alertOnError && request.error === true) {
          _this._reporter.report(request);

          return;
        }

        if (_this._alertOnExceedQuota && _this._isExceededQuota(request)) {
          _this._reporter.report(request);
        }

        var watchMatches = toConsumableArray_default()(_this._watches.values()).filter(function (w) {
          return _this._matchWatch(w, request);
        });

        if (watchMatches.length) {
          _this._reporter.report(request);
        }
      }); // Update the configuration to the storage.

      this._updateStorage(); // Render the widget, initialize the reporter and start monitoring.


      this._render();

      this._monkeyPatch();

      this._status = SupervisorStatus.Idle;

      this._reporter.init(this);

      this.start();
      window.addEventListener('init-supervisor', this.init, false);
      window.addEventListener('retire-supervisor', this.retire, false);

      this._triggerEvent(SupervisorEvents.READY);
    }
    /**
     * Starts network monitoring.
     */

  }, {
    key: "start",
    value: function start() {
      if (this._status === SupervisorStatus.Busy) {
        return;
      }

      if (this._status === SupervisorStatus.NotReady) {
        this.init();
        return;
      }

      this._status = SupervisorStatus.Busy;

      this._reporter.printStatusMessage(Messages.ACTIVE);

      this._triggerEvent(SupervisorEvents.START);
    }
    /**
     * Stops network monitoring.
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this._status === SupervisorStatus.Idle) {
        return;
      }

      this._status = SupervisorStatus.Idle;

      this._reporter.printStatusMessage(Messages.SLEEP);

      this._triggerEvent(SupervisorEvents.STOP);
    }
    /**
     * Clears the requests log.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._reporter.clear();

      this._requests.clear();

      this._triggerEvent(SupervisorEvents.CLEAR);
    }
    /**
     * Subscribes to the passed event.
     * @param {string} eventName The event name.
     * @param {function} handler The event handler.
     */

  }, {
    key: "on",
    value: function on(eventName, handler) {
      this._eventEmitter.on(eventName, handler);
    }
    /**
     * Un-subscribes from the passed event.
     * @param {string} eventName The event name.
     * @param {function} handler The event handler.
     */

  }, {
    key: "off",
    value: function off(eventName, handler) {
      this._eventEmitter.off(eventName, handler);
    }
    /**
     * Retires the supervisor.
     */

  }, {
    key: "retire",
    value: function retire() {
      var clearStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.stop();

      this._undoMonkeyPatch();

      this._widget.destroy();

      this._widget = null;
      this._reporter.destroy && this._reporter.destroy();
      this._reporter = null;

      this._triggerEvent(SupervisorEvents.RETIRE);

      this._eventEmitter.destroy();

      this._eventEmitter = null;
      this._watches = null;
      this._sessions = null;
      clearStore && this.clearStore();
      window.removeEventListener('init-supervisor', this.init);
      window.removeEventListener('retire-supervisor', this.retire);
      window.http = null;
      this._status = SupervisorStatus.Retired;
    }
    /**
     * Returns request for the passed arg (id/url).
     * @param {number} arg The request arg.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "get",
    value: function get(arg) {
      if (typeof arg === 'number') {
        return toConsumableArray_default()(this._requests).find(function (r) {
          return r.id === arg;
        });
      }

      if (typeof arg === 'string') {
        return this.query(arg).first;
      }

      return this.first();
    }
    /**
     * Returns the first request.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "first",
    value: function first() {
      return this.query().first;
    }
    /**
     * Returns the last request.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "last",
    value: function last() {
      return this.query().last;
    }
    /**
     * Returns the failed requests.
     * @returns {Collection}
     */

  }, {
    key: "failed",
    value: function failed() {
      return this.query('error', SEARCH_OPERATOR.EQUALS, true);
    }
    /**
     * Returns the requests that exceeded the quota.
     * @returns {Collection}
     */

  }, {
    key: "exceeded",
    value: function exceeded() {
      return this.query('exceedsQuota', SEARCH_OPERATOR.EQUALS, true);
    }
    /**
     * Returns the last failed request.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "lastFailed",
    value: function lastFailed() {
      return this.failed().last;
    }
    /**
     * Returns the request that has maximum response size.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "maxSizeRequest",
    value: function maxSizeRequest() {
      return this.sort({
        field: 'responseSize',
        dir: 'desc'
      }).first;
    }
    /**
     * Returns the request that took maximum time to complete.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "maxDurationRequest",
    value: function maxDurationRequest() {
      return this.sort({
        field: 'duration',
        dir: 'desc'
      }).first;
    }
    /**
     * Groups the requests based on the passed fields.
     * @param {...string} groupArgs The group fields.
     * @returns {Collection}
     */

  }, {
    key: "group",
    value: function group() {
      for (var _len = arguments.length, groupArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        groupArgs[_key] = arguments[_key];
      }

      return this.query(null, groupArgs);
    }
    /**
     * Sorts the requests based on the passed arguments.
     * @param {...*} sortArgs The sort parameters.
     * @returns {Collection}
     */

  }, {
    key: "sort",
    value: function sort() {
      for (var _len2 = arguments.length, sortArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        sortArgs[_key2] = arguments[_key2];
      }

      var args = [].concat(sortArgs);

      if (typeof sortArgs[0] === 'string') {
        args = [{
          field: sortArgs[0],
          dir: sortArgs[1]
        }];
      }

      return this.query(null, null, args);
    }
    /**
     * Search requests based on the passed arguments. Also, sorts and groups.
     * @param {...*} args The query, group and sort arguments.
     * @returns {Collection}
     */

  }, {
    key: "query",
    value: function query() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (args.length === 0) {
        return new collection_Collection(toConsumableArray_default()(this._requests));
      }

      if (args.length === 1 && ['number', 'string'].has(typeof_default()(args[0]))) {
        var arg = args[0];
        var query;

        if (typeof arg === 'string') {
          if (REQUEST_TYPE.hasOwnProperty(arg)) {
            query = {
              field: 'method',
              operator: SEARCH_OPERATOR.EQUALS,
              value: arg
            };
          } else if (arg.indexOf('*') > -1) {
            query = {
              field: 'method',
              operator: SEARCH_OPERATOR.MATCHES,
              value: arg
            };
          } else {
            query = {
              field: isAbsolute(arg) ? 'url' : 'path',
              operator: SEARCH_OPERATOR.EQUALS,
              value: arg
            };
          }
        } else {
          query = {
            field: 'responseStatus',
            operator: SEARCH_OPERATOR.EQUALS,
            value: arg
          };
        }

        return this.query(query);
      }

      if (Array.isArray(args[0] || args[1] || args[2])) {
        var _this$query$groupBy, _this$query;

        var _query = args[0],
            groupArgs = args[1],
            sortArgs = args[2];
        return (_this$query$groupBy = (_this$query = this.query.apply(this, toConsumableArray_default()(_query || []))).groupBy.apply(_this$query, toConsumableArray_default()(groupArgs || []))).sortBy.apply(_this$query$groupBy, toConsumableArray_default()(sortArgs || []));
      }

      if (typeof_default()(args[0]) === 'object') {
        var _this$query2;

        var q = [];
        args.forEach(function (x) {
          var field = x.field,
              value = x.value,
              operator = x.operator;

          if (typeof value !== 'string') {
            q.push(x);
            return;
          }

          if (typeof value === 'string') {
            if (['payloadSize', 'responseSize'].has(field)) {
              value = convertBytes(value);
            } else if (field === 'duration') {
              value = convertTime(value);
            }
          }

          q.push({
            field: field,
            value: value,
            operator: operator
          });
        });
        return (_this$query2 = this.query()).search.apply(_this$query2, q);
      }

      var field = args[0],
          operator = args[1],
          value = args[2];
      return this.query({
        field: field,
        operator: operator,
        value: value
      });
    }
    /**
     * Returns the total payload size summing all requests.
     * @returns {number}
     */

  }, {
    key: "totalPayload",
    value: function totalPayload() {
      return toConsumableArray_default()(this._requests).reduce(function (a, b) {
        return a + b.payloadSize;
      }, 0);
    }
    /**
     * Returns the total response size summing all requests.
     * @returns {number}
     */

  }, {
    key: "totalSize",
    value: function totalSize() {
      return toConsumableArray_default()(this._requests).reduce(function (a, b) {
        return a + b.responseSize;
      }, 0);
    }
    /**
     * Returns the max payload size of the requests.
     * @returns {number}
     */

  }, {
    key: "maxPayload",
    value: function maxPayload() {
      return Math.max.apply(Math, toConsumableArray_default()(toConsumableArray_default()(this._requests).map(function (r) {
        return r.payloadSize;
      })));
    }
    /**
     * Returns the max response size of the requests.
     * @returns {number}
     */

  }, {
    key: "maxResponse",
    value: function maxResponse() {
      return Math.max.apply(Math, toConsumableArray_default()(toConsumableArray_default()(this._requests).map(function (r) {
        return r.responseSize;
      })));
    }
    /**
     * Returns the max duration.
     * @returns {number}
     */

  }, {
    key: "maxDuration",
    value: function maxDuration() {
      return Math.max.apply(Math, toConsumableArray_default()(toConsumableArray_default()(this._requests).map(function (r) {
        return r.duration;
      })));
    }
    /**
     * Prints the requests based on the passed arguments.
     */

  }, {
    key: "print",
    value: function print() {
      var _this2 = this;

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var firstArg = args[0],
          secondArg = args[1],
          thirdArg = args[2],
          fourthArg = args[3];

      if (typeof firstArg === 'number') {
        args.forEach(function (arg) {
          return _this2._reporter.report(_this2.get(arg));
        });
        return;
      }

      if (typeof firstArg === 'string') {
        var displayFields = args[1];
        var query;

        if (REQUEST_TYPE.hasOwnProperty(firstArg)) {
          query = {
            field: 'method',
            operator: SEARCH_OPERATOR.EQUALS,
            value: firstArg
          };
        } else if (firstArg.indexOf('*') > -1) {
          query = {
            field: 'method',
            operator: SEARCH_OPERATOR.MATCHES,
            value: firstArg
          };
        } else {
          query = {
            field: isAbsolute(firstArg) ? 'url' : 'path',
            operator: SEARCH_OPERATOR.EQUALS,
            value: firstArg
          };
        }

        this._reporter.report(this.query(query), displayFields);

        return;
      }

      if (firstArg instanceof http_request_info_HttpRequestInfo) {
        args.forEach(function (arg) {
          return _this2._reporter.report(arg);
        });
        return;
      }

      if (firstArg instanceof collection_Collection) {
        this._reporter.report(firstArg, secondArg);

        return;
      }

      if (firstArg && firstArg.displayFields) {
        this._reporter.report(this.query(), firstArg.displayFields);

        return;
      }

      if (Array.isArray(firstArg || secondArg || thirdArg)) {
        var lastArg = args[args.length - 1];

        var _displayFields;

        if (!Array.isArray(lastArg) && typeof_default()(lastArg) === 'object') {
          args.pop();
          _displayFields = lastArg.displayFields;
        }

        var _query2 = args[0],
            groupArgs = args[1],
            sortArgs = args[2];

        this._reporter.report(this.query(_query2, groupArgs, sortArgs), _displayFields);

        return;
      }

      this._reporter.report({
        totalRequests: this.totalRequests,
        getRequestsCount: this.query(REQUEST_TYPE.GET).count,
        postRequestsCount: this.query(REQUEST_TYPE.POST).count,
        putRequestsCount: this.query(REQUEST_TYPE.PUT).count,
        deleteRequestsCount: this.query(REQUEST_TYPE.DELETE).count,
        failedRequests: this.failed().count,
        requestsExceededQuota: this.exceeded().count,
        maxPayloadSize: this.maxPayload(),
        maxResponseSize: this.maxResponse(),
        maxDuration: this.maxDuration(),
        totalPayloadSize: this.totalPayload(),
        totalResponseSize: this.totalSize()
      }, this.query(null, this._groupBy, this._sortBy));
    }
    /**
     * Prints failed requests.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printFailed",
    value: function printFailed(displayFields) {
      this._reporter.report(this.failed(), displayFields);
    }
    /**
     * Prints requests exceeds quota.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printExceeded",
    value: function printExceeded(displayFields) {
      this._reporter.report(this.exceeded(), displayFields);
    }
    /**
     * Prints the last failed request.
     */

  }, {
    key: "printLastFailed",
    value: function printLastFailed() {
      this._reporter.report(this.lastFailed());
    }
    /**
     * Prints the last request.
     */

  }, {
    key: "printLast",
    value: function printLast() {
      this._reporter.report(this.last());
    }
    /**
     * Prints the request that has maximum size.
     */

  }, {
    key: "printMaxSizeRequest",
    value: function printMaxSizeRequest() {
      this._reporter.report(this.maxSizeRequest());
    }
    /**
     * Prints the request that took maximum time.
     */

  }, {
    key: "printMaxDurationRequest",
    value: function printMaxDurationRequest() {
      this._reporter.report(this.maxDurationRequest());
    }
    /**
     * Displays the bar chart of responsive size.
     */

  }, {
    key: "sizeChart",
    value: function sizeChart() {
      var labels = toConsumableArray_default()(this._requests).map(function (r) {
        return r.id;
      }),
          data = toConsumableArray_default()(this._requests).map(function (r) {
        return r.responseSize;
      });

      this._reporter.visualize({
        type: 'bar',
        title: 'Response Size Of Requests',
        labels: labels,
        data: data,
        format: formatBytes
      });
    }
    /**
     * Displays the bar chart of responsive size.
     */

  }, {
    key: "timeChart",
    value: function timeChart() {
      var labels = toConsumableArray_default()(this._requests).map(function (r) {
        return r.id;
      }),
          data = toConsumableArray_default()(this._requests).map(function (r) {
        return r.duration;
      });

      this._reporter.visualize({
        type: 'bar',
        title: 'Response Time Of Requests',
        labels: labels,
        data: data,
        format: formatTime
      });
    }
    /**
     * Displays bubble chart for response size and time.
     */

  }, {
    key: "sizeTimeChart",
    value: function sizeTimeChart() {
      var data = toConsumableArray_default()(this._requests).map(function (r) {
        return {
          x: r.id,
          y: r.responseSize,
          v: r.duration
        };
      });

      this._reporter.visualize({
        type: 'bubble',
        title: 'Response Size And Time Of Requests',
        data: data,
        format: formatBytes
      });
    }
    /**
     * Displays the response size distribution.
     */

  }, {
    key: "sizeDistributionChart",
    value: function sizeDistributionChart() {
      var labels = toConsumableArray_default()(this._requests).map(function (r) {
        return r.path;
      }),
          data = toConsumableArray_default()(this._requests).map(function (r) {
        return r.responseSize;
      });

      this._reporter.visualize({
        type: 'pie',
        title: 'Response Size Distribution',
        labels: labels,
        data: data,
        format: formatBytes
      });
    }
    /**
     * Imports config.
     */

  }, {
    key: "import",
    value: function _import() {
      var _this3 = this;

      var fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', '.json');
      fileInput.style.opacity = '0';
      fileInput.addEventListener('change', function () {
        var reader = new FileReader();

        reader.onload = function () {
          var content = JSON.parse(event.target.result || '{}');

          if (!content.config) {
            window.alert(Messages.IMPORTED_FAILURE);
            return;
          }

          _this3._setConfig(content.config);

          _this3._updateStorage();

          window.alert(Messages.IMPORTED_SUCCESS);

          _this3._triggerEvent(SupervisorEvents.CONFIG_CHANGE, content.config);
        };

        reader.readAsText(fileInput.files[0]);
        fileInput.remove();
      });
      document.body.appendChild(fileInput);
      fileInput.click();
    }
    /**
     * Exports the requests to excel.
     * Ref: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
     */

  }, {
    key: "export",
    value: function _export() {
      var collection,
          type,
          exportConfig = false,
          defaultColl = new collection_Collection(toConsumableArray_default()(this._requests)),
          fileName;

      if (arguments.length === 0) {
        collection = defaultColl;
        type = FILE_TYPE.CSV;
      }

      if (arguments.length === 1) {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof collection_Collection) {
          collection = arguments.length <= 0 ? undefined : arguments[0];
          type = FILE_TYPE.CSV;
        } else {
          collection = defaultColl;
          type = arguments.length <= 0 ? undefined : arguments[0];
        }
      }

      if (arguments.length > 1) {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof collection_Collection) {
          collection = arguments.length <= 0 ? undefined : arguments[0];
          type = arguments.length <= 1 ? undefined : arguments[1];
          exportConfig = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          collection = defaultColl;
          type = arguments.length <= 0 ? undefined : arguments[0];
          exportConfig = arguments.length <= 1 ? undefined : arguments[1];
        }
      }

      if (collection.count === 0) {
        window.alert('No Requests to export');
        return;
      }

      var href;

      if (type === FILE_TYPE.CSV) {
        href = "Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\r\n";

        toConsumableArray_default()(collection).forEach(function (r) {
          href += "".concat(r.id, ",").concat(r.url, ",").concat(r.path, ",").concat(r.method, ",").concat(r.payloadSize || 0, ",").concat(r.duration || 0, ",").concat(r.responseStatus, ",").concat(r.responseSize, ",").concat(r.error, ",").concat(r.errorDescription, ",").concat(r.exceedsQuota, "\r\n");
        });

        href += "\r\n";
        href = "data:application/csv,".concat(encodeURIComponent(href));
        fileName = "HttpSupervisorRequestsLog.csv";
      } else {
        var content;

        if (exportConfig) {
          content = {
            config: this._getConfig()
          };
          fileName = "HttpSupervisorConfiguration.json";
        } else {
          content = {
            requests: toConsumableArray_default()(collection)
          };
          fileName = "HttpSupervisorRequestsLog.json";
        }

        var file = new Blob([JSON.stringify(content)], {
          type: 'text/plain'
        });
        href = URL.createObjectURL(file);
      }

      var exportLink = document.querySelector('#http-supervisor-export');

      if (exportLink) {
        exportLink.remove();
      }

      exportLink = document.createElement('a');
      exportLink.id = 'http-supervisor-export';
      exportLink.setAttribute('href', href);
      exportLink.setAttribute('download', fileName);
      document.body.appendChild(exportLink);
      exportLink.click();
    }
    /**
     * Alert request that matches the passed arguments.
     * @param {...*} args The watch arguments.
     * @returns {number}
     */

  }, {
    key: "watch",
    value: function watch() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (args.length === 0) {
        return -1;
      }

      var watchId = this._watchId();

      if (args.length === 1 && typeof args[0] === 'string') {
        var arg = args[0];
        var watchArgs;

        if (REQUEST_TYPE.hasOwnProperty(arg)) {
          watchArgs = {
            field: 'method',
            operator: SEARCH_OPERATOR.EQUALS,
            value: arg
          };
        } else if (arg.indexOf('*') > -1) {
          watchArgs = {
            field: 'method',
            operator: SEARCH_OPERATOR.MATCHES,
            value: arg
          };
        } else {
          watchArgs = {
            field: isAbsolute(arg) ? 'url' : 'path',
            operator: SEARCH_OPERATOR.EQUALS,
            value: arg
          };
        }

        this._watches.set(watchId, watchArgs);
      } else {
        this._watches.set(watchId, args);
      }

      this._updateStorage();

      return watchId;
    }
    /**
     * Remove the watch for the passed id.
     * @param {number} watchId The watch id.
     */

  }, {
    key: "removeWatch",
    value: function removeWatch(watchId) {
      this._watches["delete"](watchId);

      this._updateStorage();
    }
    /**
     * Clear all watches.
     */

  }, {
    key: "clearWatches",
    value: function clearWatches() {
      this._watches.clear();

      this._updateStorage();
    }
    /**
     * Removes the stored config from session storage.
     */

  }, {
    key: "clearStore",
    value: function clearStore() {
      localStorage.removeItem(STORAGE_KEY);
    }
    /**
     * Re-issues ajax request for the passed http request.
     * @param id
     * @param type
     * @param reqOptions
     */

  }, {
    key: "fire",
    value: function fire(id) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : InitiatorType.XHR;
      var reqOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var request = this.get(id);
      request && request.fire(type, reqOptions);
    }
    /**
     * Creates a new session.
     * @return {number}
     */

  }, {
    key: "record",
    value: function record() {
      if (this._activeSessionId) {
        this.end();
      }

      var session = new session_Session();
      session.id = this._activeSessionId = this._sessionId();

      this._sessions.set(session.id, session);

      return this._activeSessionId;
    }
    /**
     * Ends the current session.
     */

  }, {
    key: "end",
    value: function end() {
      this._activeSessionId = null;
    }
    /**
     * Returns session for the passed id.
     * @param id
     * @return {any}
     */

  }, {
    key: "getSession",
    value: function getSession(id) {
      return this._sessions.get(id);
    }
    /**
     * Removes the passes session.
     * @param id
     */

  }, {
    key: "removeSession",
    value: function removeSession(id) {
      this._sessions["delete"](id);
    }
    /**
     * Clear all sessions.
     */

  }, {
    key: "clearSessions",
    value: function clearSessions() {
      this._sessions.clear();
    }
    /**
     * Copies the response, payload or the complete request to clipboard.
     */

  }, {
    key: "copy",
    value: function copy(id) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'response';
      var req = this.get(id);

      if (!req) {
        return;
      }

      var text;

      switch (content) {
        case 'response':
          text = JSON.stringify(req.response);
          break;

        case 'payload':
          text = JSON.stringify(req.payload);
          break;

        case 'all':
          text = JSON.stringify(req);
          break;
      }

      copyText(text);
    }
    /**
     * Clears the copied content.
     */

  }, {
    key: "clearCopy",
    value: function clearCopy() {
      copyText('');
    }
    /**
     * Returns `true` if the passed url is allowed to monitor.
     * @param url
     */

  }, {
    key: "canAllowUrl",
    value: function canAllowUrl(url) {
      if (this._exclude !== null && toConsumableArray_default()(this._exclude).filter(function (pattern) {
        return matchesGlob(pattern, url);
      }).length) {
        return false;
      }

      if (this._exclude !== null && toConsumableArray_default()(this._exclude).filter(function (pattern) {
        return matchesGlob(pattern, xhr[XHR_METADATA_KEY].url);
      }).length === 0) {
        return false;
      }

      return true;
    }
    /**
     * Render the UI.
     * @private
     */

  }, {
    key: "_render",
    value: function _render() {
      if (!this._renderUI) {
        return;
      }

      this._widget.init(this);

      this._widget.render();
    }
    /**
     * Monkey patches XHR's open and send methods.
     * @private
     */

  }, {
    key: "_monkeyPatch",
    value: function _monkeyPatch() {
      var open = this._open.bind(this),
          send = this._send.bind(this),
          setRequestHeader = this._setRequestHeader.bind(this),
          idFunc = this._id.bind(this);

      this._monkeyPatchFetch && (window.fetch = this._fetch.bind(this));

      XMLHttpRequest.prototype.open = function () {
        open.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
      };

      XMLHttpRequest.prototype.send = function () {
        send.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
      };

      XMLHttpRequest.prototype.setRequestHeader = function () {
        setRequestHeader.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
      };
    }
    /**
     * Revert the monkey patching.
     * @private
     */

  }, {
    key: "_undoMonkeyPatch",
    value: function _undoMonkeyPatch() {
      this._monkeyPatchFetch && (window.fetch = this._nativeFetch);
      XMLHttpRequest.prototype.open = this._nativeOpen;
      XMLHttpRequest.prototype.send = this._nativeSend;
      XMLHttpRequest.prototype.setRequestHeader = this._nativeSetRequestHeader;
    }
    /**
     * Capture request information and opens network connection using fetch API.
     * @private
     */

  }, {
    key: "_fetch",
    value: function _fetch() {
      var _this4 = this;

      if (!this.busy) {
        return;
      }

      var id = this._id();

      var _ref = Array.prototype.slice.call(arguments),
          url = _ref[0],
          _ref$ = _ref[1],
          options = _ref$ === void 0 ? {} : _ref$,
          _options$method = options.method,
          method = _options$method === void 0 ? REQUEST_TYPE.GET : _options$method,
          body = options.body,
          headers = options.headers;

      var payload = safeParse(body);
      var requestInfo = new http_request_info_HttpRequestInfo(id, url, method, payload);
      requestInfo.initiatorType = InitiatorType.FETCH;
      headers && (requestInfo.requestHeaders = new Map(Object.entries(headers)));

      this._addRequest(requestInfo);

      return new Promise(function (resolve, reject) {
        _this4._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

        var response;
        _this4._alertOnRequestStart && _this4._reporter.report(requestInfo); // Make the fetch call and capture the response info.

        _this4._nativeFetch.call(window, _this4._isPerformanceSupported() ? _this4._appendRequestIdToUrl(url, id) : url, options).then(function (r) {
          response = r.clone();
          return isJsonResponse(r.headers.get('content-type')) ? r.json() : null;
        }).then(function (data) {
          requestInfo.response = data;
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        })["finally"](function () {
          if (_this4.status === SupervisorStatus.Retired) {
            return;
          }

          requestInfo.responseStatus = response ? response.status : 500;
          requestInfo.responseHeaders = new Map(Object.entries(response.headers.entries()));

          _this4._fillParametersAndFireEvents(requestInfo, response);
        });
      });
    }
    /**
     * Capture request information and opens network connection using XHR.
     * @private
     */

  }, {
    key: "_open",
    value: function _open() {
      var _this$_nativeOpen;

      if (!this.busy) {
        return;
      }

      var parameters = Array.prototype.slice.call(arguments),
          xhr = parameters[0],
          method = parameters[1],
          url = parameters[2];
      parameters.shift();

      var id = this._id();

      if (this._isPerformanceSupported()) {
        parameters[1] = this._appendRequestIdToUrl(url, id);
      }

      var httpRequestInfo = xhr[XHR_METADATA_KEY] || new http_request_info_HttpRequestInfo(id);
      httpRequestInfo.url = url.toLowerCase();
      httpRequestInfo.method = method.toUpperCase();
      xhr[XHR_METADATA_KEY] = httpRequestInfo;

      (_this$_nativeOpen = this._nativeOpen).call.apply(_this$_nativeOpen, [xhr].concat(parameters));
    }
    /**
     * Sends XHR request.
     * @private
     */

  }, {
    key: "_send",
    value: function _send() {
      var _this5 = this,
          _this$_nativeSend2;

      if (!this.busy) {
        return;
      }

      var parameters = Array.prototype.slice.call(arguments),
          xhr = parameters[0],
          payload = parameters[1];
      parameters.shift();

      if (!this.canAllowUrl(xhr[XHR_METADATA_KEY].url)) {
        var _this$_nativeSend;

        (_this$_nativeSend = this._nativeSend).call.apply(_this$_nativeSend, [xhr].concat(parameters));

        return;
      } // Increment the call counter.


      this._increment(); // Update the request.


      var httpRequestInfo = xhr[XHR_METADATA_KEY];
      httpRequestInfo.initiatorType = InitiatorType.XHR;
      httpRequestInfo.payload = safeParse(payload);
      httpRequestInfo.payloadSize = byteSize(httpRequestInfo.payload ? JSON.stringify(httpRequestInfo.payload) : '');

      this._addRequest(httpRequestInfo); // Listen to `onreadystatechange` event to capture the response info.


      xhr.addEventListener('readystatechange', function () {
        if (_this5.status === SupervisorStatus.Retired) {
          return;
        }

        if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
          var headers = xhr.getAllResponseHeaders(),
              arr = headers.trim().split(/[\r\n]+/),
              headersSet = new Map();
          arr.forEach(function (line) {
            var parts = line.split(': '),
                header = parts.shift(),
                value = parts.join(': ');
            headersSet.set(header, value);
          });
          httpRequestInfo.responseHeaders = headersSet;
          return;
        }

        if (xhr.readyState !== XMLHttpRequest.DONE) {
          return;
        }

        _this5._decrement();

        httpRequestInfo.responseStatus = xhr.status;
        httpRequestInfo.response = isJsonResponse(xhr.getResponseHeader('Content-Type')) ? safeParse(xhr.response) : xhr.response;

        _this5._fillParametersAndFireEvents(httpRequestInfo, xhr);
      });
      this._alertOnRequestStart && this._reporter.report(httpRequestInfo);

      (_this$_nativeSend2 = this._nativeSend).call.apply(_this$_nativeSend2, [xhr].concat(parameters));

      this._triggerEvent(SupervisorEvents.REQUEST_START, httpRequestInfo, xhr);
    }
    /**
     * Captures request header info.
     * @private
     */

  }, {
    key: "_setRequestHeader",
    value: function _setRequestHeader() {
      var _this$_nativeSetReque;

      if (!this.busy) {
        return;
      }

      var parameters = Array.prototype.slice.call(arguments),
          xhr = parameters[0],
          header = parameters[1],
          value = parameters[2];
      parameters.shift();
      var httpRequestInfo = xhr[XHR_METADATA_KEY] || new http_request_info_HttpRequestInfo(this._id());
      var _httpRequestInfo$reqH = httpRequestInfo.reqHeaders,
          reqHeaders = _httpRequestInfo$reqH === void 0 ? new Map() : _httpRequestInfo$reqH;
      reqHeaders.set(header, value);
      httpRequestInfo.requestHeaders = reqHeaders;
      xhr[XHR_METADATA_KEY] = httpRequestInfo;

      (_this$_nativeSetReque = this._nativeSetRequestHeader).call.apply(_this$_nativeSetReque, [xhr].concat(parameters));
    }
    /**
     * Fill duration and size parameters from response.
     * @private
     */

  }, {
    key: "_fillParametersAndFireEvents",
    value: function _fillParametersAndFireEvents(httpRequestInfo, xhrOrResponse) {
      var performanceEntry; // If performance API is well supported read the duration and size leveraging it.

      if (this._isPerformanceSupported()) {
        var urlName = this._appendRequestIdToUrl(httpRequestInfo.url, httpRequestInfo.id);

        performanceEntry = performance.getEntriesByType('resource').find(function (e) {
          return e.name === urlName;
        });
      }

      var responseSize = byteSize(JSON.stringify(httpRequestInfo.response || ''));

      if (performanceEntry) {
        httpRequestInfo.timeStart = performanceEntry.startTime;
        httpRequestInfo.timeEnd = performanceEntry.responseEnd;
        httpRequestInfo.payloadByPerformance = !!performanceEntry.transferSize;
        httpRequestInfo.responseSize = httpRequestInfo.payloadByPerformance ? performanceEntry.transferSize : responseSize;
      } else {
        httpRequestInfo.payloadByPerformance = false;
        httpRequestInfo.timeEnd = performance.now();
        httpRequestInfo.responseSize = responseSize;
      }

      httpRequestInfo.duration = Math.round(httpRequestInfo.timeEnd - httpRequestInfo.timeStart);
      httpRequestInfo.exceedsQuota = this._isExceededQuota(httpRequestInfo);
      httpRequestInfo.pending = false;
      httpRequestInfo.error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, httpRequestInfo, xhrOrResponse);
      httpRequestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, httpRequestInfo, xhrOrResponse);

      this._triggerEvent(SupervisorEvents.REQUEST_END, httpRequestInfo, xhrOrResponse);
    }
    /**
     * Increments the call counter.
     * @private
     */

  }, {
    key: "_increment",
    value: function _increment() {
      this._callsCount++;
    }
    /**
     * Decrements the call counter.
     * @private
     */

  }, {
    key: "_decrement",
    value: function _decrement() {
      if (this._callsCount === 0) {
        return;
      }

      this._callsCount--;
    }
    /**
     * Adds the request to collection.
     * @param request
     * @private
     */

  }, {
    key: "_addRequest",
    value: function _addRequest(request) {
      this._requests.add(request);

      this._activeSessionId && this._sessions.get(this._activeSessionId).add(request);
    }
    /**
     * Returns true if `performance.getEntriesByType` is supported.
     * @private
     */

  }, {
    key: "_isPerformanceSupported",
    value: function _isPerformanceSupported() {
      return this._usePerformance && !!(window.performance && window.performance.getEntriesByType);
    }
    /**
     * Append request id to url.
     * @private
     */

  }, {
    key: "_appendRequestIdToUrl",
    value: function _appendRequestIdToUrl(url, id) {
      var urlObj = this._createUrl(url);

      urlObj.searchParams.append(SUPERVISOR_QUERY_KEY, id.toString());
      return urlObj.toString();
    }
    /**
     * Invokes the handlers registered for the event.
     * @private
     */

  }, {
    key: "_triggerEvent",
    value: function _triggerEvent(eventName) {
      var _this$_eventEmitter;

      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      (_this$_eventEmitter = this._eventEmitter).triggerEvent.apply(_this$_eventEmitter, [eventName, this].concat(args));
    }
    /**
     * Returns true if the passed request exceeds the quota.
     * @private
     */

  }, {
    key: "_isExceededQuota",
    value: function _isExceededQuota(request) {
      return request.payloadSize > this._quota.maxPayloadSize || request.responseSize > this._quota.maxResponseSize || request.duration > this._quota.maxDuration;
    }
    /**
     * Creates URL object.
     * @private
     */

  }, {
    key: "_createUrl",
    value: function _createUrl(url) {
      return isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin);
    }
    /**
     * Stores the configuration in local storage.
     */

  }, {
    key: "_updateStorage",
    value: function _updateStorage() {
      if (!this._persistConfig) {
        return;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._getConfig()));
    }
    /**
     * Returns the configuration of supervisor.
     * @private
     */

  }, {
    key: "_getConfig",
    value: function _getConfig() {
      return {
        include: this._include !== null ? toConsumableArray_default()(this._include) : null,
        exclude: this._exclude !== null ? toConsumableArray_default()(this._exclude) : null,
        silent: this._silent,
        traceEachRequest: this._traceEachRequest,
        alertOnError: this._alertOnError,
        alertOnExceedQuota: this._alertOnExceedQuota,
        alertOnRequestStart: this._alertOnRequestStart,
        renderUI: this._renderUI,
        groupBy: this._groupBy,
        sortBy: this._sortBy,
        keyboardEvents: this._keyboardEvents,
        lockConsole: this._lockConsole,
        usePerformance: this._usePerformance,
        quota: this._quota,
        watches: JSON.stringify(toConsumableArray_default()(this._watches.entries())),
        sessions: JSON.stringify(toConsumableArray_default()(this._sessions.entries()))
      };
    }
    /**
     * Sets the configuration of supervisor.
     * @param config
     * @private
     */

  }, {
    key: "_setConfig",
    value: function _setConfig(config) {
      var include = config.include,
          exclude = config.exclude,
          renderUI = config.renderUI,
          traceEachRequest = config.traceEachRequest,
          alertOnError = config.alertOnError,
          alertOnExceedQuota = config.alertOnExceedQuota,
          alertOnRequestStart = config.alertOnRequestStart,
          silent = config.silent,
          quota = config.quota,
          groupBy = config.groupBy,
          sortBy = config.sortBy,
          usePerformance = config.usePerformance,
          monkeyPatchFetch = config.monkeyPatchFetch,
          loadChart = config.loadChart,
          keyboardEvents = config.keyboardEvents,
          watches = config.watches,
          persistConfig = config.persistConfig,
          lockConsole = config.lockConsole;
      Array.isArray(include) && (this._include = new Set(include));
      Array.isArray(exclude) && (this._exclude = new Set(exclude));
      typeof renderUI === 'boolean' && (this._renderUI = renderUI);
      typeof silent === 'boolean' && (this._silent = silent);
      typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
      typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
      typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
      typeof alertOnRequestStart === 'boolean' && (this._alertOnRequestStart = alertOnRequestStart);
      typeof_default()(quota) === 'object' && (this._quota = _objectSpread(_objectSpread({}, this._quota), quota));
      Array.isArray(groupBy) && (this._groupBy = groupBy);
      Array.isArray(sortBy) && (this._sortBy = sortBy);
      typeof usePerformance === 'boolean' && (this._usePerformance = usePerformance);
      typeof monkeyPatchFetch === 'boolean' && (this._monkeyPatchFetch = monkeyPatchFetch);
      typeof loadChart === 'boolean' && (this._loadChart = loadChart);
      typeof keyboardEvents === 'boolean' && (this._keyboardEvents = keyboardEvents);
      typeof persistConfig === 'boolean' && (this._persistConfig = persistConfig);
      Array.isArray(watches) && (this._watches = new Map(this._watches));
      typeof lockConsole === 'boolean' && (this._lockConsole = lockConsole);
    }
    /**
     * Returns `true` if the request matches the arguments.
     */

  }, {
    key: "_matchWatch",
    value: function _matchWatch(argsArray, request) {
      return matchCriteria(argsArray, request);
    }
  }]);

  return HttpSupervisor;
}();


// CONCATENATED MODULE: ./src/http-supervisor-widget.js










function http_supervisor_widget_createSuper(Derived) { var hasNativeReflectConstruct = http_supervisor_widget_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function http_supervisor_widget_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Supervisor Control Panel Template.
 * @type {HTMLTemplateElement}
 */

var template = document.createElement('template');
template.innerHTML = "\n<style>\n  :host {\n    --color: #eee;\n    --bg-color: #333;\n    --hover-color: #5ab7fa;\n    --disabled-color: #ccc;\n    --border-color: #666;\n    --font-size: 12px;\n    --index: 20000;\n    --popover-width: 350px;\n    --box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n    color: var(--color);\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  }\n\n  .http-supervisor-container {\n    position: fixed;\n    top: 0;\n    right: calc(50% - 91px);\n    z-index: var(--index);\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    background-color: var(--bg-color);\n    border: solid 1px var(--border-color);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    font-size: var(--font-size);\n    box-sizing: border-box;\n    color: var(--font-color);\n    box-shadow: var(--box-shadow);\n  }\n\n   button, button:active, button:focus, button:hover, span {\n    width: 30px;\n    height: 26px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    box-sizing: border-box;\n    background: none;\n    box-shadow: none;\n    outline: none;\n  }\n\n  button:not(:disabled) {\n    cursor:pointer;\n  }\n\n  button svg {\n    color: var(--color);\n  }\n\n  button:disabled svg {\n    color: var(--disabled-color);\n  }\n\n  button:not(:disabled):hover svg {\n    color: var(--hover-color);\n  }\n\n  button, span, button:hover {\n    border-right: solid 1px var(--border-color);\n  }\n\n  .counts-label {\n    width: auto;\n    padding: 0 8px;\n  }\n\n  .popover-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: ' ';\n    display: none;\n  }\n\n  .popover-content {\n    position: fixed;\n    top: 38px;\n    width: var(--popover-width);\n    background-color: var(--bg-color);\n    right: calc(50% - 216px);\n    border-radius: 6px;\n    padding: 20px;\n    font-size: var(--font-size);\n    box-shadow: var(--box-shadow);\n    z-index: var(--index);\n    display: none;\n  }\n\n  .popover-content .popover-close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n  }\n\n  .active {\n    display: block;\n  }\n\n  .popover-content:before {\n    position: absolute;\n    z-index: -1;\n    content: \"\";\n    right: calc(50% - 65px);\n    top: -10px;\n    border-style: solid;\n    border-width: 0 10px 10px 10px;\n    border-color: transparent transparent var(--bg-color) transparent;\n  }\n\n  .popover-content input[type=\"number\"], .popover-content input[type=\"text\"] {\n    background-color: transparent;\n    color: var(--color);\n    outline: none;\n    border: none;\n    border-bottom: solid 1px var(--border-color);\n    font-size: var(--font-size);\n    width: 60px;\n  }\n\n  .popover-content form {\n    margin-bottom: 0;\n  }\n\n  .popover-content form div {\n    display: flex;\n    align-items: center;\n  }\n\n  .popover-content h4 {\n    margin: 0;\n    margin-bottom: 8px;\n    color: var(--disabled-color);\n    text-transform: uppercase;\n    font-size: 8px;\n    letter-spacing: 1px;\n  }\n\n  .popover-content fieldset {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-column-gap: 5px;\n    grid-row-gap: 4px;\n    border: dashed 1px var(--border-color);\n    margin-bottom: 15px;\n    padding: 6px 12px;\n  }\n\n  .popover-content .first div label {\n    width: 140px;\n  }\n\n  .popover-content .second div label {\n    width: 80px;\n  }\n\n  .popover-content .third {\n    display: flex;\n    border: none;\n    padding: 0;\n  }\n\n  .popover-content .third button {\n    border: solid 1px var(--border-color);\n  }\n\n  .popover-content .fourth {\n    margin-bottom: 0;\n    display: none;\n  }\n\n  .popover-content .fourth.active {\n    display: grid;\n  }\n  \n  .fourth .span2 {\n    grid-column: 1 / span 2;\n  }\n\n  .advanced-container {\n    display: flex;\n    align-items: center;\n  }\n\n  .advanced-container svg {\n    width: 10px;\n    height: 10px;\n    position: relative;\n    top: -5px;\n    margin-left: 5px;\n  }\n</style>\n<div class=\"http-supervisor-container\">\n   <button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-play\" viewBox=\"0 0 16 16\">\n       <path d=\"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z\"/>\n    </svg>\n   </button>\n   <button style=\"display: none;\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"currentColor\" class=\"bi bi-stop-circle\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n        <path d=\"M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z\"/>\n      </svg>\n   </button>\n   <button disabled>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/>\n      <path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/>\n    </svg>\n   </button>\n   <button disabled>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n        <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n        <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n      </svg>\n   </button>\n   <button disabled>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-box-arrow-up\" viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\" d=\"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z\"/>\n        <path fill-rule=\"evenodd\" d=\"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z\"/>\n      </svg>\n  </button>\n   <span class=\"counts-label\">\n     0 / 0\n   </span>\n   <button style=\"border:none;\">\n     <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">\n     <path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n   </svg>\n   </button>\n</div>\n<div class=\"popover\">\n  <div class=\"popover-overlay\"></div>\n  <div class=\"popover-content\">\n    <a href=\"#\" class=\"popover-close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"#ccc\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n    </svg>\n    </a>\n    <form>\n      <h4>Options</h4>\n      <fieldset class=\"first\">\n        <div>\n          <label>Silent:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Trace Request:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Alert Error:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Alert Quota Exceed:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Alert Request Start:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Lock Console:</label>\n          <input type=\"checkbox\" />\n        </div>\n      </fieldset>\n\n      <h4>Quota</h4>\n      <fieldset class=\"second\">\n        <div>\n          <label>Payload:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n        <div>\n          <label>Response:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n        <div>\n          <label>Duration:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n      </fieldset>\n\n      <h4>Visualization</h4>\n      <fieldset class=\"third\">\n        <button title=\"Response Size Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Duration Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Size And Duration Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Size Distribution\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pie-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z\"/>\n            </svg>\n        </button>\n      </fieldset>\n\n      <div class=\"advanced-container\">\n        <h4>Advanced</h4>\n        <svg style=\"cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-double-down expand\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n          <path fill-rule=\"evenodd\" d=\"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n        </svg>\n        <svg style=\"cursor:pointer; display: none\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-double-up collapse\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z\"/>\n          <path fill-rule=\"evenodd\" d=\"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\"/>\n        </svg>\n      </div>\n\n      <fieldset class=\"fourth\">\n        <div class=\"span2\">\n          <label>Include:</label>\n          <input type=\"text\" style=\"flex-grow: 1\" />\n        </div>\n        <div class=\"span2\">\n          <label>Exclude:</label>\n          <input type=\"text\" style=\"flex-grow: 1\" />\n        </div>\n        <div>\n          <label>Keyboard Events:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Persist Config:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Use Performance:</label>\n          <input type=\"checkbox\" />\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n";
/**
 * The wrapper class that controls the supervisor web component.
 */

var http_supervisor_widget_HttpSupervisorWidget = /*#__PURE__*/function () {
  /**
   * The control panel web component.
   */

  /**
   * The supervisor.
   * @type {HttpSupervisor}
   * @private
   */

  /**
   * ctor.
   */
  function HttpSupervisorWidget() {
    classCallCheck_default()(this, HttpSupervisorWidget);

    defineProperty_default()(this, "_el", null);

    defineProperty_default()(this, "_httpSupervisor", null);

    this._render = this._render.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onStop = this._onStop.bind(this);
    this._updateTotalRequestsCount = this._updateTotalRequestsCount.bind(this);
    this._updateLabelsCount = this._updateLabelsCount.bind(this);
    this._updateUI = this._updateUI.bind(this);
  }
  /**
   * Initialize stuff.
   * @param httpSupervisor
   */


  createClass_default()(HttpSupervisorWidget, [{
    key: "init",
    value: function init(httpSupervisor) {
      this._httpSupervisor = httpSupervisor;
    }
    /**
     * Renders the UI.
     */

  }, {
    key: "render",
    value: function render() {
      if (this._httpSupervisor.status === SupervisorStatus.Retired) {
        return;
      }

      if (this._el) {
        return;
      }

      if (!document.body) {
        window.addEventListener('DOMContentLoaded', this._render);
        return;
      }

      this._render();
    }
    /**
     * Shows the widget.
     */

  }, {
    key: "show",
    value: function show() {
      this._el.style.display = 'block';
    }
    /**
     * Hides the widget.
     */

  }, {
    key: "hide",
    value: function hide() {
      this._el.style.display = 'none';
    }
    /**
     * Destroys the element.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('DOMContentLoaded', this._render);

      this._httpSupervisor.off(SupervisorEvents.START, this._onStart);

      this._httpSupervisor.off(SupervisorEvents.STOP, this._onStop);

      this._httpSupervisor.off(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateLabelsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_END, this._updateLabelsCount);

      this._httpSupervisor.off(SupervisorEvents.CONFIG_CHANGE, this._updateUI);

      this._httpSupervisor = null;

      this._el.cleanup();

      this._el.remove();

      this._el = null;
    }
    /**
     * Renders the web component.
     * @private
     */

  }, {
    key: "_render",
    value: function _render() {
      var _this = this;

      document.body.appendChild(this._el = document.createElement('http-supervisor-widget'));
      var status = this._httpSupervisor.status;

      this._updateUI(); // Listen to supervisor events.


      this._httpSupervisor.on(SupervisorEvents.START, this._onStart);

      this._httpSupervisor.on(SupervisorEvents.STOP, this._onStop);

      this._httpSupervisor.on(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateLabelsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_END, this._updateLabelsCount);

      this._httpSupervisor.on(SupervisorEvents.CONFIG_CHANGE, this._updateUI); // Listen to web component events.


      this._el.subscribe('start', function () {
        return _this._httpSupervisor.start();
      });

      this._el.subscribe('stop', function () {
        return _this._httpSupervisor.stop();
      });

      this._el.subscribe('clear', function () {
        return _this._httpSupervisor.clear();
      });

      this._el.subscribe('print', function () {
        return _this._httpSupervisor.print();
      });

      this._el.subscribe('export', function () {
        return _this._httpSupervisor["export"]();
      });

      this._el.subscribe('traceEachRequestChange', function (ctrl) {
        return _this._httpSupervisor.traceEachRequest = ctrl.checked;
      });

      this._el.subscribe('alertOnErrorChange', function (ctrl) {
        return _this._httpSupervisor.alertOnError = ctrl.checked;
      });

      this._el.subscribe('alertOnExceedQuotaChange', function (ctrl) {
        return _this._httpSupervisor.alertOnExceedQuota = ctrl.checked;
      });

      this._el.subscribe('usePerformanceAPIChange', function (ctrl) {
        return _this._httpSupervisor.usePerformance = ctrl.checked;
      });

      this._el.subscribe('maxPayloadSizeChange', function (ctrl) {
        return _this._httpSupervisor.quota = {
          maxPayloadSize: parseInt(ctrl.value)
        };
      });

      this._el.subscribe('maxResponseSizeChange', function (ctrl) {
        return _this._httpSupervisor.quota = {
          maxResponseSize: parseInt(ctrl.value)
        };
      });

      this._el.subscribe('maxDurationChange', function (ctrl) {
        return _this._httpSupervisor.quota = {
          maxDuration: parseInt(ctrl.value)
        };
      });

      this._el.subscribe('responseSizeChart', function () {
        return _this._httpSupervisor.sizeChart();
      });

      this._el.subscribe('responseTimeChart', function () {
        return _this._httpSupervisor.timeChart();
      });

      this._el.subscribe('responseSizeTimeChart', function () {
        return _this._httpSupervisor.sizeTimeChart();
      });

      this._el.subscribe('responseSizeDistributionChart', function () {
        return _this._httpSupervisor.sizeDistributionChart();
      });

      this._el.subscribe('includeChange', function (ctrl) {
        return _this._httpSupervisor.include = ctrl.value.split(',').map(function (x) {
          return x.trim();
        });
      });

      this._el.subscribe('excludeChange', function (ctrl) {
        return _this._httpSupervisor.exclude = ctrl.value.split(',').map(function (x) {
          return x.trim();
        });
      });

      this._el.subscribe('keyboardEventsChange', function (ctrl) {
        return _this._httpSupervisor.keyboardEvents = ctrl.checked;
      });

      this._el.subscribe('persistConfigChange', function (ctrl) {
        return _this._httpSupervisor.persistConfig = ctrl.checked;
      });

      this._el.subscribe('lockConsoleChange', function (ctrl) {
        return _this._httpSupervisor.lockConsole = ctrl.checked;
      });

      this._el.subscribe('silentChange', function (ctrl) {
        return _this._httpSupervisor.silent = ctrl.checked;
      });

      this._el.subscribe('alertRequestStartChange', function (ctrl) {
        _this._httpSupervisor.alertOnRequestStart = ctrl.checked;
      });

      if (status === SupervisorStatus.Busy) {
        this._onStart();
      } else {
        this._onStop();
      }

      this._updateLabelsCount();

      this._updateTotalRequestsCount();
    }
  }, {
    key: "_updateUI",
    value: function _updateUI() {
      var _this$_httpSupervisor = this._httpSupervisor,
          include = _this$_httpSupervisor.include,
          exclude = _this$_httpSupervisor.exclude,
          traceEachRequest = _this$_httpSupervisor.traceEachRequest,
          alertOnError = _this$_httpSupervisor.alertOnError,
          alertOnExceedQuota = _this$_httpSupervisor.alertOnExceedQuota,
          quota = _this$_httpSupervisor.quota,
          usePerformance = _this$_httpSupervisor.usePerformance,
          keyboardEvents = _this$_httpSupervisor.keyboardEvents,
          persistConfig = _this$_httpSupervisor.persistConfig,
          lockConsole = _this$_httpSupervisor.lockConsole,
          silent = _this$_httpSupervisor.silent,
          alertOnRequestStart = _this$_httpSupervisor.alertOnRequestStart,
          onGoingCallsCount = _this$_httpSupervisor.onGoingCallsCount,
          status = _this$_httpSupervisor.status;

      this._el.setState({
        include: include,
        exclude: exclude,
        traceEachRequest: traceEachRequest,
        alertOnError: alertOnError,
        alertOnExceedQuota: alertOnExceedQuota,
        quota: quota,
        usePerformance: usePerformance,
        keyboardEvents: keyboardEvents,
        persistConfig: persistConfig,
        lockConsole: lockConsole,
        silent: silent,
        alertOnRequestStart: alertOnRequestStart
      });
    }
    /**
     * Supervisor start handler.
     */

  }, {
    key: "_onStart",
    value: function _onStart() {
      this._el.start();
    }
    /**
     * Supervisor stop handler.
     */

  }, {
    key: "_onStop",
    value: function _onStop() {
      this._el.stop();
    }
    /**
     * Update the calls counter label.
     */

  }, {
    key: "_updateLabelsCount",
    value: function _updateLabelsCount() {
      this._el.updateCalls(this._httpSupervisor.onGoingCallsCount, this._httpSupervisor.totalRequests);
    }
    /**
     * Update the total requests count.
     */

  }, {
    key: "_updateTotalRequestsCount",
    value: function _updateTotalRequestsCount() {
      var count = this._httpSupervisor.totalRequests;

      if (count > 0) {
        this._el.logIsNotEmpty();
      } else {
        this._el.logIsEmpty();
      }

      this._el.updateCalls(this._httpSupervisor.onGoingCallsCount, this._httpSupervisor.totalRequests);
    }
  }]);

  return HttpSupervisorWidget;
}();
/**
 * Supervisor Controls Panel Web Component.
 */




var http_supervisor_widget_HtmlSupervisorWidgetElement = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(HtmlSupervisorWidgetElement, _HTMLElement);

  var _super = http_supervisor_widget_createSuper(HtmlSupervisorWidgetElement);

  // Panel Controls
  // Popover Controls
  function HtmlSupervisorWidgetElement() {
    var _this2;

    classCallCheck_default()(this, HtmlSupervisorWidgetElement);

    _this2 = _super.call(this);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_startButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_stopButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_clearButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_printButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_exportButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_moreButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_callsCountLabel", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_popover", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_popoverClose", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_overlay", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_traceEachRequestCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_alertOnErrorCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_alertOnQuotaExceedCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_usePerformanceAPICheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_maxPayloadSizeTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_maxResponseSizeTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_maxDurationTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_responseSizeChartButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_responseTimeChartButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_responseSizeTimeChartButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_responseSizeDistributionChartButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_includeTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_excludeTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_keyboardEventsCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_persistConfigCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_lockConsoleCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_expandButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_collapisbleFieldSet", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_silentCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_alertRequestStartCheckbox", null);

    _this2._handleKeyPress = _this2._handleKeyPress.bind(assertThisInitialized_default()(_this2));

    var shadowRoot = _this2.attachShadow({
      mode: 'closed'
    });

    shadowRoot.appendChild(template.content.cloneNode(true));
    _this2._popover = shadowRoot.querySelector('.popover-content');

    var _ref = [].concat(toConsumableArray_default()(Array.from(shadowRoot.querySelector('.http-supervisor-container').children)), toConsumableArray_default()(Array.from(_this2._popover.querySelectorAll('input,button'))));

    _this2._startButton = _ref[0];
    _this2._stopButton = _ref[1];
    _this2._printButton = _ref[2];
    _this2._clearButton = _ref[3];
    _this2._exportButton = _ref[4];
    _this2._callsCountLabel = _ref[5];
    _this2._moreButton = _ref[6];
    _this2._silentCheckbox = _ref[7];
    _this2._traceEachRequestCheckbox = _ref[8];
    _this2._alertOnErrorCheckbox = _ref[9];
    _this2._alertOnQuotaExceedCheckbox = _ref[10];
    _this2._alertRequestStartCheckbox = _ref[11];
    _this2._lockConsoleCheckbox = _ref[12];
    _this2._maxPayloadSizeTextbox = _ref[13];
    _this2._maxResponseSizeTextbox = _ref[14];
    _this2._maxDurationTextbox = _ref[15];
    _this2._responseSizeChartButton = _ref[16];
    _this2._responseTimeChartButton = _ref[17];
    _this2._responseSizeTimeChartButton = _ref[18];
    _this2._responseSizeDistributionChartButton = _ref[19];
    _this2._includeTextbox = _ref[20];
    _this2._excludeTextbox = _ref[21];
    _this2._keyboardEventsCheckbox = _ref[22];
    _this2._persistConfigCheckbox = _ref[23];
    _this2._usePerformanceAPICheckbox = _ref[24];
    _this2._eventsAndControls = {
      start: _this2._startButton,
      stop: _this2._stopButton,
      clear: _this2._clearButton,
      print: _this2._printButton,
      "export": _this2._exportButton,
      traceEachRequestChange: _this2._traceEachRequestCheckbox,
      alertOnErrorChange: _this2._alertOnErrorCheckbox,
      alertOnExceedQuotaChange: _this2._alertOnQuotaExceedCheckbox,
      usePerformanceAPIChange: _this2._usePerformanceAPICheckbox,
      maxPayloadSizeChange: _this2._maxPayloadSizeTextbox,
      maxResponseSizeChange: _this2._maxResponseSizeTextbox,
      maxDurationChange: _this2._maxDurationTextbox,
      responseSizeChart: _this2._responseSizeChartButton,
      responseTimeChart: _this2._responseTimeChartButton,
      responseSizeTimeChart: _this2._responseSizeTimeChartButton,
      responseSizeDistributionChart: _this2._responseSizeDistributionChartButton,
      includeChange: _this2._includeTextbox,
      excludeChange: _this2._excludeTextbox,
      keyboardEventsChange: _this2._keyboardEventsCheckbox,
      persistConfigChange: _this2._persistConfigCheckbox,
      lockConsoleChange: _this2._lockConsoleCheckbox,
      silentChange: _this2._silentCheckbox,
      alertRequestStartChange: _this2._alertRequestStartCheckbox
    };
    _this2._expandButton = shadowRoot.querySelector('.expand');
    _this2._collapseButton = shadowRoot.querySelector('.collapse');
    _this2._collapisbleFieldSet = shadowRoot.querySelector('.fourth');
    _this2._popoverClose = shadowRoot.querySelector('.popover-close');
    _this2._overlay = shadowRoot.querySelector('.popover-overlay');

    _this2._silentCheckbox.addEventListener('change', function () {
      var checked = _this2._silentCheckbox.checked;
      [_this2._traceEachRequestCheckbox, _this2._alertOnErrorCheckbox, _this2._alertOnQuotaExceedCheckbox, _this2._alertRequestStartCheckbox].forEach(function (c) {
        return c.disabled = checked;
      });
    });

    _this2._moreButton.addEventListener('click', function () {
      return _this2._isPopoverActive() ? _this2._hidePopover() : _this2._showPopover();
    });

    _this2._expandButton.addEventListener('click', function () {
      _this2._collapisbleFieldSet.classList.add('active');

      _this2._expandButton.style.display = 'none';
      _this2._collapseButton.style.display = 'block';
    });

    _this2._collapseButton.addEventListener('click', function () {
      _this2._collapisbleFieldSet.classList.remove('active');

      _this2._expandButton.style.display = 'block';
      _this2._collapseButton.style.display = 'none';
    });

    _this2._popoverClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this2._hidePopover();
    });

    _this2._overlay.addEventListener('click', function () {
      return _this2._hidePopover();
    });

    _this2._keyboardEventsCheckbox.addEventListener('change', function () {
      if (_this2._keyboardEventsCheckbox.checked) {
        _this2._listenToKeyPressEvent();
      } else {
        _this2._unlistenToKeyPressEvent();
      }
    });

    return _this2;
  }

  createClass_default()(HtmlSupervisorWidgetElement, [{
    key: "setState",
    value: function setState(_ref2) {
      var include = _ref2.include,
          exclude = _ref2.exclude,
          traceEachRequest = _ref2.traceEachRequest,
          alertOnError = _ref2.alertOnError,
          alertOnExceedQuota = _ref2.alertOnExceedQuota,
          quota = _ref2.quota,
          usePerformance = _ref2.usePerformance,
          keyboardEvents = _ref2.keyboardEvents,
          persistConfig = _ref2.persistConfig,
          lockConsole = _ref2.lockConsole,
          silent = _ref2.silent,
          alertOnRequestStart = _ref2.alertOnRequestStart;
      Array.isArray(include) && (this._includeTextbox.value = include.join(','));
      Array.isArray(exclude) && (this._excludeTextbox.value = exclude.join(','));
      this._traceEachRequestCheckbox.checked = traceEachRequest;
      this._alertOnErrorCheckbox.checked = alertOnError;
      this._alertOnQuotaExceedCheckbox.checked = alertOnExceedQuota;
      this._maxPayloadSizeTextbox.value = quota.maxPayloadSize;
      this._maxResponseSizeTextbox.value = quota.maxResponseSize;
      this._maxDurationTextbox.value = quota.maxDuration;
      this._usePerformanceAPICheckbox.checked = usePerformance;
      this._keyboardEventsCheckbox.checked = keyboardEvents;
      this._persistConfigCheckbox.checked = persistConfig;
      this._lockConsoleCheckbox.checked = lockConsole;
      this._silentCheckbox.checked = silent;
      this._alertRequestStartCheckbox.checked = alertOnRequestStart;
      keyboardEvents && this._listenToKeyPressEvent();
      [this._traceEachRequestCheckbox, this._alertOnErrorCheckbox, this._alertOnQuotaExceedCheckbox, this._alertRequestStartCheckbox].forEach(function (c) {
        return c.disabled = silent;
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(evt, handler) {
      var _this3 = this;

      var ctrl = this._eventsAndControls[evt],
          evtName = ctrl instanceof HTMLButtonElement ? 'click' : 'change';
      ctrl.addEventListener(evtName, function (e) {
        e.preventDefault();
        e.stopPropagation();
        handler(ctrl, _this3);
      });
    }
  }, {
    key: "start",
    value: function start() {
      this._startButton.style.display = 'none';
      this._stopButton.style.display = 'flex';
    }
  }, {
    key: "stop",
    value: function stop() {
      this._startButton.style.display = 'flex';
      this._stopButton.style.display = 'none';
    }
  }, {
    key: "updateCalls",
    value: function updateCalls(count1, count2) {
      this._callsCountLabel.innerText = "".concat(count1, " / ").concat(count2);
      ;
    }
  }, {
    key: "logIsEmpty",
    value: function logIsEmpty() {
      [this._clearButton, this._printButton, this._exportButton].forEach(function (b) {
        return b.disabled = true;
      });
    }
  }, {
    key: "logIsNotEmpty",
    value: function logIsNotEmpty() {
      [this._clearButton, this._printButton, this._exportButton].forEach(function (b) {
        return b.disabled = false;
      });
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this._unlistenToKeyPressEvent();
    }
  }, {
    key: "_isPopoverActive",
    value: function _isPopoverActive() {
      return this._popover.classList.contains('active');
    }
  }, {
    key: "_showPopover",
    value: function _showPopover() {
      [this._popover, this._overlay].forEach(function (el) {
        return el.classList.add('active');
      });
    }
  }, {
    key: "_hidePopover",
    value: function _hidePopover() {
      [this._popover, this._overlay].forEach(function (el) {
        return el.classList.remove('active');
      });
    }
  }, {
    key: "_listenToKeyPressEvent",
    value: function _listenToKeyPressEvent() {
      document.addEventListener('keydown', this._handleKeyPress);
    }
  }, {
    key: "_unlistenToKeyPressEvent",
    value: function _unlistenToKeyPressEvent() {
      document.removeEventListener('keydown', this._handleKeyPress);
    }
  }, {
    key: "_handleKeyPress",
    value: function _handleKeyPress(event) {
      if (event.ctrlKey) {
        if (event.key === 's') {
          if (this._startButton.style.display === 'none') {
            this._stopButton.click();
          } else {
            this._startButton.click();
          }
        } else if (event.key === 'c') {
          this._clearButton.click();
        } else if (event.key === 'p') {
          this._printButton.click();
        } else if (event.key === 'e') {
          this._exportButton.click();
        } else if (event.key === 'm') {
          if (this._isPopoverActive()) {
            this._hidePopover();
          } else {
            this._showPopover();
          }
        } else if (event.key === 't') {
          if (this.style.display === 'none') {
            this.style.display = 'block';
          } else {
            this.style.display = 'none';
          }
        }

        return;
      }

      if (event.key.toUpperCase() === 'ESCAPE' || event.key.toUpperCase() === 'ESC') {
        this._hidePopover();
      }
    }
  }]);

  return HtmlSupervisorWidgetElement;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));

if (!window.customElements.get('http-supervisor-widget')) {
  window.customElements.define('http-supervisor-widget', http_supervisor_widget_HtmlSupervisorWidgetElement);
}
// EXTERNAL MODULE: ./src/console-snapshot.js
var console_snapshot = __webpack_require__(23);

// CONCATENATED MODULE: ./src/console-reporter.js











/**
 * Class that is responsible for displaying the requests info to console.
 */

var console_reporter_ConsoleReporter = /*#__PURE__*/function () {
  /**
   * Fields to display.
   * @type {Set}
   * @private
   */

  /**
   * Canvas element used for chart generation.
   * @type {HTMLCanvasElement}
   * @private
   */

  /**
   * The chart font size.
   * @type {number}
   * @private
   */

  /**
   * Chart height.
   * @type {number}
   * @private
   */

  /**
   * Chart width.
   * @type {number}
   * @private
   */

  /**
   * Native console object.
   * @type {Console}
   * @private
   */

  /**
   * Ctor.
   * @param {Object} fieldsToDisplay
   */
  function ConsoleReporter(fieldsToDisplay) {
    classCallCheck_default()(this, ConsoleReporter);

    defineProperty_default()(this, "_fieldsToDisplay", new Set(['id', 'url', 'part', 'method', 'payload', 'payloadSize', 'duration', 'responseStatus', 'response', 'responseSize', 'error', 'errorDescription', 'exceedsQuota']));

    defineProperty_default()(this, "_lockConsole", true);

    defineProperty_default()(this, "_canvasEl", null);

    defineProperty_default()(this, "_chartFontSize", 9);

    defineProperty_default()(this, "_chartHeight", 300);

    defineProperty_default()(this, "_chartWidth", 500);

    defineProperty_default()(this, "_originalConsole", window.console);

    fieldsToDisplay && (this._fieldsToDisplay = new Set(fieldsToDisplay));
    this._initChart = this._initChart.bind(this);
  }
  /**
   * Does initialization stuff.
   * @param {HttpSupervisor} httpSupervisor
   */


  createClass_default()(ConsoleReporter, [{
    key: "init",
    value: function init(httpSupervisor) {
      var lockConsole = httpSupervisor.lockConsole,
          loadChart = httpSupervisor.loadChart;
      this._lockConsole = lockConsole;
      this._lockConsole && this.acquireLock();
      loadChart && loadScript(CHARTJS_LIB_PATH, this._initChart, this._initChart, 'http-sup-chartjs');
    }
  }, {
    key: "printStatusMessage",
    value: function printStatusMessage(message) {
      this.print(message, Colors.BRAND, true);
    }
    /**
     * Prints the metrics summary and the requests information in console.
     * @param arg1
     * @param arg2
     * @param arg3
     */

  }, {
    key: "report",
    value: function report(arg1, arg2, arg3) {
      if (arguments.length === 1) {
        if (!arg1) {
          this.print(Messages.NO_REQUEST, Colors.INFO, true);
          return;
        } else if (arg1 instanceof http_request_info_HttpRequestInfo || arg1 instanceof collection_Collection) {
          if (arg1 instanceof collection_Collection && !arg1.hasGroups && !arg1.hasItems) {
            this.print(Messages.NO_REQUESTS, Colors.INFO, true);
            return;
          }

          arg1 instanceof collection_Collection && this.printTitle(Messages.REQUESTS_INFO);

          this._reportObject(arg1);
        } else {
          this.printTitle(Messages.METRICS_SUMMARY);

          this._reportStats(arg1);
        }

        return;
      }

      if (arguments.length === 2 && arg1 instanceof collection_Collection) {
        if (!arg1.hasGroups && !arg1.hasItems) {
          this.print(Messages.NO_REQUESTS, Colors.INFO, true);
          return;
        }

        this.printTitle(Messages.REQUESTS_INFO);

        this._reportObject(arg1, arg2);

        return;
      }

      if (!arg2.hasGroups && !arg2.hasItems) {
        this.print(Messages.NO_REQUESTS, Colors.INFO, true);
        return;
      }

      this.printTitle(Messages.METRICS_SUMMARY);

      this._reportStats(arg1);

      this["break"]();
      this.printTitle(Messages.REQUESTS_INFO);

      this._reportObject(arg2, arg3);
    }
    /**
     * Create chart in canvans and render in console.
     * @param chartOptions
     */

  }, {
    key: "visualize",
    value: function visualize(chartOptions) {
      var _this = this;

      if (!window.Chart) {
        this.print(Messages.CHART_NOT_FOUND, Colors.ERROR, true);
        return;
      }

      var type = chartOptions.type,
          title = chartOptions.title,
          labels = chartOptions.labels,
          data = chartOptions.data,
          format = chartOptions.format;

      var ctx = this._canvasEl.getContext('2d');

      var myChart;

      if (type === 'bar') {
        myChart = new Chart(ctx, {
          type: type,
          data: {
            labels: labels,
            datasets: [{
              label: title,
              data: data,
              backgroundColor: poolColors(data.length),
              borderColor: poolColors(data.length),
              borderWidth: 1
            }]
          },
          options: {
            responsive: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function callback(value) {
                    return format ? format(value) : value;
                  }
                }
              }
            }
          }
        });
      } else if (type === 'bubble') {
        myChart = new Chart(ctx, {
          type: 'bubble',
          data: {
            datasets: [{
              label: title,
              data: data
            }]
          },
          options: {
            responsive: false,
            aspectRatio: 1,
            plugins: {
              legend: false,
              tooltip: false
            },
            elements: {
              point: {
                backgroundColor: this._colorize.bind(this, false),
                borderColor: this._colorize.bind(this, true),
                borderWidth: function borderWidth(context) {
                  return Math.min(Math.max(1, context.datasetIndex + 1), 8);
                },
                radius: function radius(context) {
                  var size = context.chart.width;
                  var base = Math.abs(context.raw.v) / 1000;
                  return size / 24 * base;
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function callback(value) {
                    return format ? format(value) : value;
                  }
                }
              }
            }
          }
        });
      } else if (type === 'pie') {
        myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: 'Dataset 1',
              data: data,
              backgroundColor: poolColors(data.length)
            }]
          },
          options: {
            responsive: false,
            plugins: {
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: title
              }
            }
          }
        });
      }

      if (!myChart) {
        return;
      }

      setTimeout(function () {
        _this._invokeConsole('screenshot', _this._canvasEl, .5, .35);

        myChart.destroy();
        myChart = null;
      }, 500);
    }
    /**
     * Prints success message.
     * @param message
     */

  }, {
    key: "success",
    value: function success(message) {
      this.print(message, Colors.SUCCESS);
    }
    /**
     * Prints error message.
     * @param message
     */

  }, {
    key: "error",
    value: function error(message) {
      this.print(message, Colors.ERROR);
    }
    /**
     * Prints info message.
     * @param message
     */

  }, {
    key: "info",
    value: function info(message) {
      this.print(message, Colors.INFO);
    }
    /**
     * Prints warning message.
     * @param message
     */

  }, {
    key: "warn",
    value: function warn(message) {
      this.print(message, Colors.WARN);
    }
    /**
     * Prints message with the passed color and styles.
     * @param message
     * @param color
     * @param bold
     * @param otherStyles
     */

  }, {
    key: "print",
    value: function print(message, color) {
      var bold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var otherStyles = arguments.length > 3 ? arguments[3] : undefined;
      var styles = ["color: ".concat(color)];
      bold && styles.push("font-weight: bold");
      otherStyles && styles.push(otherStyles);

      this._invokeConsole('log', "%c".concat(message), styles.join(';'));
    }
    /**
     * Prints section title.
     * @param message
     */

  }, {
    key: "printTitle",
    value: function printTitle(message) {
      var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Colors.GRAY;
      this.print(message, Colors.INFO, true, "padding: 5px 250px; background-color: ".concat(bgColor, "; color: ").concat(Colors.WHITE, ";margin-bottom: 10px;"));
    }
    /**
     * Prints row.
     * @param message
     */

  }, {
    key: "printRow",
    value: function printRow(message) {
      this.print(message, Colors.INFO);
    }
    /**
     * Prints field name and value.
     * @param head
     * @param value
     */

  }, {
    key: "printKeyValue",
    value: function printKeyValue(head, value) {
      if (value !== null && typeof_default()(value) === 'object') {
        this._invokeConsole('log', "%c".concat(this._getTitleWithSpaces(head), ":"), "font-weight: bold; color: ".concat(Colors.INFO), value);

        return;
      }

      this._invokeConsole('log', "%c".concat(this._getTitleWithSpaces(head), ": %c").concat(value), "font-weight: bold; color: ".concat(Colors.INFO), "color: ".concat(Colors.INFO, ";"));
    }
    /**
     * Prints many fields and values in single row.
     * @param obj
     */

  }, {
    key: "printKeyValueMany",
    value: function printKeyValueMany(obj) {
      var _this2 = this;

      var msgs = [];
      var styles = [];
      Object.entries(obj).forEach(function (_ref, index) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            title = _ref2[0],
            value = _ref2[1];

        msgs.push("%c".concat(index === 0 ? _this2._getTitleWithSpaces(title) : title, ": %c").concat(value));
        styles.push("font-weight: bold; color: ".concat(Colors.INFO), "color: ".concat(Colors.INFO, ";"));
        index < Object.keys(obj).length - 1 && styles.push("color: ".concat(Colors.MEDIUM_GRAY));
      });

      this._invokeConsole.apply(this, ['log', msgs.join('%c | ')].concat(styles));
    }
    /**
     * Prints multiple messages.
     * @param messages
     */

  }, {
    key: "printMultiple",
    value: function printMultiple() {
      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      this._invokeConsole.apply(this, ['log'].concat(messages));
    }
    /**
     * Prints table.
     * @param array
     * @param displayFields
     */

  }, {
    key: "table",
    value: function table(array, displayFields) {
      array.length && this._invokeConsole('table', array, displayFields);
    }
    /**
     * Starts a group.
     * @param group
     * @param args
     */

  }, {
    key: "groupStart",
    value: function groupStart(group) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this._invokeConsole.apply(this, ['group', group].concat(args));
    }
    /**
     * Ends the active group.
     */

  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this._invokeConsole('groupEnd');
    }
    /**
     * Clears the console.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._invokeConsole('clear');
    }
    /**
     * Creates empty line.
     */

  }, {
    key: "break",
    value: function _break() {
      this._invokeConsole('log', '\n');
    }
    /**
     * Locks the dev console.
     */

  }, {
    key: "acquireLock",
    value: function acquireLock() {
      window.console = new Proxy(window.console, {
        get: function get(target, propKey, receiver) {
          var origMethod = target[propKey];
          return function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            if (args[0] !== 'http-supervisor') {
              return;
            }

            args.shift();
            origMethod.apply(this, args);
          };
        }
      });
      this._lockConsole = true;
    }
    /**
     * Releases the lock on dev console.
     */

  }, {
    key: "releaseLock",
    value: function releaseLock() {
      window.console = this._originalConsole;
      this._lockConsole = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._canvasEl.remove();

      this._canvasEl = null;
      unloadScript('http-sup-chartjs');
    }
  }, {
    key: "_initChart",
    value: function _initChart() {
      window.Chart && (window.Chart.defaults.font.size = this._chartFontSize);
      this._canvasEl = document.createElement('canvas');
      this._canvasEl.style.width = "".concat(this._chartWidth, "px");
      this._canvasEl.style.height = "".concat(this._chartHeight, "px");
      this._canvasEl.style.display = 'none';
      document.body.appendChild(this._canvasEl);
    }
  }, {
    key: "_getTitleWithSpaces",
    value: function _getTitleWithSpaces(title) {
      return "".concat(title).concat(Array(30 - title.length).fill(' ').join(''));
    }
  }, {
    key: "_reportStats",
    value: function _reportStats(_ref3) {
      var _this$printKeyValueMa;

      var totalRequests = _ref3.totalRequests,
          getRequestsCount = _ref3.getRequestsCount,
          postRequestsCount = _ref3.postRequestsCount,
          putRequestsCount = _ref3.putRequestsCount,
          deleteRequestsCount = _ref3.deleteRequestsCount,
          failedRequests = _ref3.failedRequests,
          requestsExceededQuota = _ref3.requestsExceededQuota,
          maxPayloadSize = _ref3.maxPayloadSize,
          maxResponseSize = _ref3.maxResponseSize,
          maxDuration = _ref3.maxDuration,
          totalPayloadSize = _ref3.totalPayloadSize,
          totalResponseSize = _ref3.totalResponseSize;
      this.printKeyValueMany((_this$printKeyValueMa = {}, defineProperty_default()(_this$printKeyValueMa, Messages.TOTAL_REQUESTS, totalRequests), defineProperty_default()(_this$printKeyValueMa, "GET", getRequestsCount), defineProperty_default()(_this$printKeyValueMa, "POST", postRequestsCount), defineProperty_default()(_this$printKeyValueMa, "PUT", putRequestsCount), defineProperty_default()(_this$printKeyValueMa, "DELETE", deleteRequestsCount), _this$printKeyValueMa));
      this.printKeyValue(Messages.FAILED_REQUESTS, failedRequests);
      this.printKeyValue(Messages.REQUESTS_EXCEEDED_QUOTA, requestsExceededQuota);
      this.printKeyValue(Messages.MAX_PAYLOAD_SIZE, formatBytes(maxPayloadSize));
      this.printKeyValue(Messages.MAX_RESPONSE_SIZE, formatBytes(maxResponseSize));
      this.printKeyValue(Messages.MAX_DURATION, formatTime(maxDuration));
      this.printKeyValue(Messages.TOTAL_PAYLOAD_SIZE, formatBytes(totalPayloadSize));
      this.printKeyValue(Messages.TOTAL_RESPONSE_SIZE, formatBytes(totalResponseSize));
    }
  }, {
    key: "_reportObject",
    value: function _reportObject(requestOrCollection, fieldsToDisplay) {
      var _this3 = this;

      if (requestOrCollection === null) {
        this.print(Messages.NO_REQUEST, Colors.INFO, true);
        return;
      }

      if (requestOrCollection instanceof http_request_info_HttpRequestInfo) {
        var borderColor = Colors.GRAY;

        if (requestOrCollection.pending) {
          borderColor = Colors.LIGHT_GRAY;
        } else if (requestOrCollection.error) {
          borderColor = Colors.ERROR_MEDIUM;
        } else if (requestOrCollection.exceedsQuota) {
          borderColor = Colors.WARN_MEDIUM;
        }

        this._invokeConsole('groupCollapsed', "%c#".concat(requestOrCollection.id, " %c").concat(requestOrCollection.method, "  ").concat(requestOrCollection.part, " | ").concat(requestOrCollection.responseStatus, " | ").concat(formatBytes(requestOrCollection.responseSize), " | ").concat(formatTime(requestOrCollection.duration)), "color: ".concat(Colors.GRAY, "; padding: 5px; border-left: solid 4px ").concat(borderColor, "; font-size: 0.6rem;"), "color: ".concat(Colors.INFO));

        this.printKeyValue(Messages.REQUEST_NO, requestOrCollection.id);
        this.printKeyValue(Messages.URL, requestOrCollection.url);
        this.printKeyValue(Messages.PATH, requestOrCollection.part);
        this.printKeyValue(Messages.METHOD, requestOrCollection.method);
        this.printKeyValue(Messages.PAYLOAD, requestOrCollection.payload || '-');
        this.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(requestOrCollection.payloadSize));
        this.printKeyValue(Messages.DURATION, formatTime(requestOrCollection.duration));
        this.printKeyValue(Messages.RESPONSE, requestOrCollection.response || '-');
        this.printKeyValue(Messages.RESPONSE_SIZE, formatBytes(requestOrCollection.responseSize));
        this.printKeyValue(Messages.RESPONSE_STATUS, requestOrCollection.responseStatus);
        this.printKeyValue(Messages.IS_ERROR, requestOrCollection.error ? 'Yes' : 'No');
        this.printKeyValue(Messages.ERROR_DESC, requestOrCollection.errorDescription || '-');
        this.printKeyValue(Messages.EXCEEDS_QUOTA, requestOrCollection.exceedsQuota ? 'Yes' : 'No');
        this.printKeyValue(Messages.INITIATOR_TYPE, requestOrCollection.initiatorType);
        this.printKeyValue(Messages.PAYLOAD_SIZE_BY_PERFORMANCE, requestOrCollection.payloadByPerformance ? 'Yes' : 'No');

        this._invokeConsole('groupEnd');

        return;
      }

      if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
        return;
      }

      if (requestOrCollection.hasGroups) {
        requestOrCollection.groups.forEach(function (group) {
          var name = group.name,
              groupedBy = group.groupedBy,
              count = group.count;

          if (typeof name === 'undefined') {
            _this3.groupStart("- %c[".concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
          } else if (name !== null && typeof_default()(name) === 'object') {
            _this3.groupStart("".concat(groupedBy, ": %c[").concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"), name);
          } else {
            var groupName = name;

            if (typeof name === 'number') {
              if (['payloadSize', 'responseSize'].has(groupedBy)) {
                groupName = formatBytes(name);
              } else if (groupedBy === 'duration') {
                groupName = formatTime(name);
              }
            }

            _this3.groupStart("".concat(groupName, " %c- [").concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
          }

          _this3._reportObject(group, fieldsToDisplay);

          _this3.groupEnd();
        });
        return;
      }

      var items = requestOrCollection.items.map(function (item) {
        var displayObj = {};

        (fieldsToDisplay || toConsumableArray_default()(_this3._fieldsToDisplay)).forEach(function (field) {
          var v;

          if (typeof item[field] === 'undefined') {
            v = null;
          } else {
            v = item[field];
          }

          displayObj[HTTP_REQUEST_INFO_DISPLAY_NAMES[field]] = v;
        });

        return displayObj;
      });
      this.table(items);
    }
  }, {
    key: "_colorize",
    value: function _colorize(opaque, context) {
      var value = context.raw;
      var x = value.x / 100;
      var y = value.y / 100;

      var r = this._channelValue(x, y, [250, 150, 50, 0]);

      var g = this._channelValue(x, y, [0, 50, 150, 250]);

      var b = this._channelValue(x, y, [0, 150, 150, 250]);

      var a = opaque ? 1 : 0.5 * value.v / 1000;
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }
  }, {
    key: "_channelValue",
    value: function _channelValue(x, y, values) {
      return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];
    }
  }, {
    key: "_invokeConsole",
    value: function _invokeConsole(method) {
      var _console$method;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      if (this._lockConsole) {
        args.unshift('http-supervisor');
      }

      (_console$method = console[method]).call.apply(_console$method, [console].concat(args));
    }
  }]);

  return ConsoleReporter;
}();


// CONCATENATED MODULE: ./src/index.js



var http = new http_supervisor_HttpSupervisor(new http_supervisor_widget_HttpSupervisorWidget(), new console_reporter_ConsoleReporter());
/* harmony default export */ var src = __webpack_exports__["default"] = (http);


/***/ })
/******/ ])["default"];
});