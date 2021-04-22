(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["httpSupervisor"] = factory();
	else
		root["httpSupervisor"] = factory();
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

var arrayWithoutHoles = __webpack_require__(14);

var iterableToArray = __webpack_require__(15);

var unsupportedIterableToArray = __webpack_require__(9);

var nonIterableSpread = __webpack_require__(16);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(7);

var isNativeFunction = __webpack_require__(17);

var construct = __webpack_require__(18);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(20);

var iterableToArrayLimit = __webpack_require__(21);

var unsupportedIterableToArray = __webpack_require__(9);

var nonIterableRest = __webpack_require__(22);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

var isNativeReflectConstruct = __webpack_require__(19);

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/polyfill.js



/**
 * Array polyfills.
 */
Array.prototype.groupBy = function (key) {
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
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/util.js
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
  var reg = /^https?:\/\/|^\/\//i;
  return reg.test(url);
}
/**
 * Load script dynamically in a web page.
 * @param src
 * @param onload
 */

function loadScript(src, onload, onerror) {
  var script = document.createElement('script');
  script.src = src;
  onload && script.addEventListener('load', onload);
  onerror && script.addEventListener('error', onerror);
  document.head.appendChild(script);
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

    if (operator === '=') {
      results.push(v === value);
    } else if (operator === '!=') {
      results.push(v !== value);
    } else if (operator === '<') {
      results.push(v < value);
    } else if (operator === '>') {
      results.push(v > value);
    } else if (operator === '<=') {
      results.push(v <= value);
    } else if (operator === '>=') {
      results.push(v >= value);
    } else if (operator === '~') {
      results.push(typeof object[field] === 'string' && v.startsWith(value));
    } else if (operator === '^') {
      results.push(typeof object[field] === 'string' && v.endsWith(value));
    } else if (operator === 'contains') {
      results.push(typeof object[field] === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === '!contains') {
      results.push(typeof object[field] === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) === -1);
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
  return contentType.toLowerCase().startsWith('application/json');
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
  PATH_WITH_QUERY: 'Path',
  PART_WITH_QUERY: 'Path',
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
  TIME_END: 'Time End'
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
  EXCEEDS_QUOTA: 'exceeds-quota'
};
/**
 * Proxy object that allows to call any method in an object that not even exists.
 */

var FAKE = new Proxy({}, {
  get: function get() {
    return function () {};
  }
});
var XHR_METADATA_KEY = '__supervisor__';
var SUPERVISOR_QUERY_KEY = 'hs_rid';
var InitiatorType = {
  XHR: 'xhr',
  FETCH: 'fetch'
};
var CHARTJS_LIB_PATH = 'https://cdn.jsdelivr.net/npm/chart.js';
var STORAGE_KEY = 'http-supervisor';
var HTTP_REQUEST_INFO_DISPLAY_NAMES = {
  id: Messages.REQUEST_NO,
  url: Messages.URL,
  path: Messages.PATH,
  pathWithQuery: Messages.PATH_WITH_QUERY,
  partWithQuery: Messages.PART_WITH_QUERY,
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

    defineProperty_default()(this, "id", -1);

    defineProperty_default()(this, "url", null);

    defineProperty_default()(this, "path", null);

    defineProperty_default()(this, "query", null);

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

    this.id = id;
    this.url = url;

    if (url) {
      var urlObject = isAbsolute(url) ? new URL(url) : new URL(url, document.location.origin);
      this.path = urlObject.pathname;
      this.query = urlObject.search;
    }

    this.method = method;
    this.payload = payload;
  }

  createClass_default()(HttpRequestInfo, [{
    key: "pathWithQuery",
    get:
    /**
     * The request no.
     * @type {number}
     */

    /**
     * The full url of the request.
     * @type {string}
     */

    /**
     * The path in the url excluding domain.
     * @type {string}
     */

    /**
     * The query in the url.
     * @type {string}
     */

    /**
     * The request type (GET, POST etc.)
     * @type {string}
     */

    /**
     * The request payload.
     * @type {any}
     */

    /**
     * The request payload size.
     * @type {number}
     */

    /**
     * The request start time.
     * @type {number}
     */

    /**
     * The request end time.
     * @type {number}
     */

    /**
     * The request duration.
     * @type {number}
     */

    /**
     * The response data.
     * @type {any}
     */

    /**
     * The response status.
     * @type {number}
     */

    /**
     * The response size.
     * @type {number}
     */

    /**
     * Returns path with query.
     * @type {string}
     */
    function get() {
      return this.query ? "".concat(this.path).concat(this.query) : this.path;
    }
    /**
     * Returns the path's last part and query.
     * @type {string}
     */

  }, {
    key: "partWithQuery",
    get: function get() {
      var pathParts = (this.path || []).split('/'),
          lastPart = "/".concat(pathParts[pathParts.length - 1]) || false;
      return this.query ? "".concat(lastPart).concat(this.query) : lastPart;
    }
    /**
     * True if the request error-ed out.
     * @type {boolean}
     */

  }, {
    key: "error",
    get: function get() {
      return this.responseStatus >= 400;
    }
    /**
     * The error description.
     * @type {string}
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

  }]);

  return HttpRequestInfo;
}();


// CONCATENATED MODULE: ./src/collection.js





/**
 * Represents a collection of records that can be group-able, sortable and searchable.
 */

var collection_Collection = /*#__PURE__*/function () {
  /**
   * Constructor.
   */
  function Collection(items, name, groupedBy) {
    classCallCheck_default()(this, Collection);

    defineProperty_default()(this, "_name", null);

    defineProperty_default()(this, "_items", []);

    defineProperty_default()(this, "_originalItems", []);

    defineProperty_default()(this, "_groups", []);

    defineProperty_default()(this, "_groupArgs", []);

    defineProperty_default()(this, "_groupedBy", null);

    defineProperty_default()(this, "_childrenGroupedBy", null);

    defineProperty_default()(this, "_sortArgs", []);

    defineProperty_default()(this, "_query", null);

    this._items = items;
    this._name = name || '-';
    this._originalItems = toConsumableArray_default()(items);
    this._groupedBy = groupedBy;
  }
  /**
   * Groups the collection and sub-collections by the passed arguments.
   * @param args
   * @returns {Collection}
   */


  createClass_default()(Collection, [{
    key: "name",
    get:
    /**
     * The name of the collection.
     * @type {*}
     * @private
     */

    /**
     * The items belongs to the collection.
     * @type {Array}
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
      return !!(this._items && this._items.length);
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
      return this.hasItems ? toConsumableArray_default()(this._items) : null;
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
      return this.hasItems ? this._items.length : 0;
    }
    /**
     * Returns the first item from the collection.
     * @returns {*}
     */

  }, {
    key: "first",
    get: function get() {
      return this.hasItems ? this._items[0] : null;
    }
    /**
     * Returns the last item from the collection.
     * @returns {*}
     */

  }, {
    key: "last",
    get: function get() {
      return this.hasItems ? this._items[this.count - 1] : null;
    }
  }, {
    key: "groupBy",
    value: function groupBy() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!args.length) {
        return this;
      }

      this._groupArgs = args;
      this._groups = [];
      this._childrenGroupedBy = args.shift();

      var obj = this._items.groupBy(this._childrenGroupedBy);

      obj.forEach(function (key, value) {
        var group = new Collection(key, value, _this._childrenGroupedBy);

        _this._groups.push(group);

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

      this._items.sort(function (r1, r2) {
        for (var i = 0; i < args.length; i++) {
          var _args$i = args[i],
              field = _args$i.field,
              dir = _args$i.dir,
              v1 = r1[field],
              v2 = r2[field];
          if (v1 < v1) return dir === 'asc' ? -1 : 1;
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
      this._items = this._items.filter(function (r) {
        return matchCriteria(args, r);
      });

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
      this._items = toConsumableArray_default()(this._originalItems);
    }
  }]);

  return Collection;
}();


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

      handlers && handlers.remove(handler);
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

    defineProperty_default()(this, "_domains", null);

    defineProperty_default()(this, "_renderUI", true);

    defineProperty_default()(this, "_quota", {
      maxPayloadSize: 10240,
      // 10kb
      maxResponseSize: 10240,
      // 10kb
      maxDuration: 1000 // 1s

    });

    defineProperty_default()(this, "_traceEachRequest", false);

    defineProperty_default()(this, "_alertOnError", true);

    defineProperty_default()(this, "_alertOnExceedQuota", true);

    defineProperty_default()(this, "_groupBy", ['path', 'method']);

    defineProperty_default()(this, "_sortBy", [{
      field: 'id',
      dir: 'asc'
    }]);

    defineProperty_default()(this, "_usePerformance", true);

    defineProperty_default()(this, "_monkeyPatchFetch", true);

    defineProperty_default()(this, "_useVisualization", true);

    defineProperty_default()(this, "_keyboardEvents", true);

    defineProperty_default()(this, "_requests", new Set());

    defineProperty_default()(this, "_watches", new Map());

    defineProperty_default()(this, "_status", SupervisorStatus.NotReady);

    defineProperty_default()(this, "_callsCount", 0);

    defineProperty_default()(this, "_id", idGenerator(1));

    defineProperty_default()(this, "_watchId", idGenerator(1));

    defineProperty_default()(this, "_nativeFetch", fetch);

    defineProperty_default()(this, "_nativeOpen", XMLHttpRequest.prototype.open);

    defineProperty_default()(this, "_nativeSend", XMLHttpRequest.prototype.send);

    this._widget = widget || FAKE;
    this._reporter = reporter || FAKE;
    this._eventEmitter = new event_emitter_EventEmitter();
  }
  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   * @param {Array<string>} [config.domains] Array of domains to monitor.
   * @param {boolean} [config.renderUI] Passing `true` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing `true` will print each request.
   * @param {boolean} [config.alertOnError] Passing `true` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing `true` will print requests that exceeds quota.
   * @param {object} [config.quota] Request Quota.
   * @param {Array} [config.groupBy] Grouping parameters used in displaying requests.
   * @param {Array} [config.sortBy] Sorting parameters used in displaying requests.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.useVisualization] True to use chart.js library for data visualization.
   * @param {boolean} [config.keyboardEvents] True to use keyboard events for operating control panel.
   * @param {Array} [config.watches] Collection of watches.
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
     * The domains to monitor.
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
     * Collection of captured requests.
     * @type {Set}
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
     * Returns `true` if busy.
     * @return {boolean}
     */
    function get() {
      return this._status === SupervisorStatus.Busy;
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
     * Returns the passed domains.
     * @returns {Array}
     */

  }, {
    key: "domains",
    get: function get() {
      return this._domains ? toConsumableArray_default()(this._domains) : null;
    }
    /**
     * Set the domains.
     */
    ,
    set: function set(value) {
      this._domains = new Set(value || []);

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
    key: "useVisualization",
    get: function get() {
      return this._useVisualization;
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

      config = loadConfigFromStore && localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : config;

      var _ref = config || {},
          domains = _ref.domains,
          renderUI = _ref.renderUI,
          traceEachRequest = _ref.traceEachRequest,
          alertOnError = _ref.alertOnError,
          alertOnExceedQuota = _ref.alertOnExceedQuota,
          quota = _ref.quota,
          groupBy = _ref.groupBy,
          sortBy = _ref.sortBy,
          usePerformance = _ref.usePerformance,
          monkeyPatchFetch = _ref.monkeyPatchFetch,
          useVisualization = _ref.useVisualization,
          keyboardEvents = _ref.keyboardEvents,
          watches = _ref.watches;

      Array.isArray(domains) && (this._domains = new Set(domains));
      typeof renderUI === 'boolean' && (this._renderUI = renderUI);
      typeof traceEachRequest === 'boolean' && (this._traceEachRequest = traceEachRequest);
      typeof alertOnError === 'boolean' && (this._alertOnError = alertOnError);
      typeof alertOnExceedQuota === 'boolean' && (this._alertOnExceedQuota = alertOnExceedQuota);
      typeof_default()(quota) === 'object' && (this._quota = _objectSpread(_objectSpread({}, this._quota), quota));
      Array.isArray(groupBy) && (this._groupBy = groupBy);
      Array.isArray(sortBy) && (this._sortBy = sortBy);
      typeof usePerformance === 'boolean' && (this._usePerformance = usePerformance);
      typeof monkeyPatchFetch === 'boolean' && (this._monkeyPatchFetch = monkeyPatchFetch);
      typeof useVisualization === 'boolean' && (this._useVisualization = useVisualization);
      typeof keyboardEvents === 'boolean' && (this._keyboardEvents = keyboardEvents);
      Array.isArray(watches) && (this._watches = new Map(this._watches)); // Listen to the `request-end` event to display request details based on the properties.

      this.on(SupervisorEvents.REQUEST_END, function (supervisor, request) {
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
      this.start();

      var initReporterAndFireEvent = function initReporterAndFireEvent() {
        _this._reporter.init(_this);

        _this._triggerEvent(SupervisorEvents.READY);
      };

      if (this._useVisualization) {
        loadScript(CHARTJS_LIB_PATH, initReporterAndFireEvent, initReporterAndFireEvent);
        return;
      }

      initReporterAndFireEvent();
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
     * Prints the log to the passed reporter.
     */

  }, {
    key: "print",
    value: function print() {
      var _Collection$groupBy, _Collection;

      var collection = (_Collection$groupBy = (_Collection = new collection_Collection(toConsumableArray_default()(this._requests))).groupBy.apply(_Collection, toConsumableArray_default()(this._groupBy))).sortBy.apply(_Collection$groupBy, toConsumableArray_default()(this._sortBy));

      this._reporter.report({
        totalRequests: this.totalRequests,
        getRequestsCount: this.getRequestsByType('GET').count,
        postRequestsCount: this.getRequestsByType('POST').count,
        putRequestsCount: this.getRequestsByType('PUT').count,
        deleteRequestsCount: this.getRequestsByType('DELETE').count,
        failedRequests: this.getFailedRequests().count,
        requestsExceededQuota: this.getRequestsExceededQuota().count,
        maxPayloadSize: this.maxPayloadSize(),
        maxResponseSize: this.maxResponseSize(),
        maxDuration: this.maxDuration(),
        totalPayloadSize: this.getTotalPayloadSize(),
        totalResponseSize: this.getTotalResponseSize()
      }, collection);
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
      clearStore && this.clearStore();
      this._status = SupervisorStatus.Retired;
    }
    /**
     * Displays the passed collection using the reporter.
     * @param {Collection} collection
     */

  }, {
    key: "report",
    value: function report(collection) {
      this._reporter.report(collection);
    }
    /**
     * Returns the captured requests.
     * @returns {Collection}
     */

  }, {
    key: "requests",
    value: function requests() {
      return new collection_Collection(toConsumableArray_default()(this._requests));
    }
    /**
     * Returns request of the id.
     * @param {number} id The request id.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "getRequestById",
    value: function getRequestById(id) {
      return toConsumableArray_default()(this._requests).find(function (r) {
        return r.id === id;
      });
    }
    /**
     * Filters the requests based on the passed type and returns as collection.
     * @param {string} method The request method (GET / POST etc.)
     * @returns {Collection}
     */

  }, {
    key: "getRequestsByType",
    value: function getRequestsByType(method) {
      return this.requests().search({
        field: 'method',
        operator: '=',
        value: method
      });
    }
    /**
     * Returns requests initiated for the passed url.
     * @param {string} url The absolute or relative url.
     * @returns {Collection}
     */

  }, {
    key: "getRequestsByUrl",
    value: function getRequestsByUrl(url) {
      return this.requests().search({
        field: isAbsolute(url) ? 'url' : 'path',
        operator: '=',
        value: url
      });
    }
    /**
     * Returns requests matches the passed status code.
     * @param {number} status The status code.
     * @returns {Collection}
     */

  }, {
    key: "getRequestsOfStatus",
    value: function getRequestsOfStatus(status) {
      return this.requests().search({
        field: 'responseStatus',
        operator: '=',
        value: status
      });
    }
    /**
     * Returns the failed requests.
     * @returns {Collection}
     */

  }, {
    key: "getFailedRequests",
    value: function getFailedRequests() {
      return this.requests().search({
        field: 'error',
        operator: '=',
        value: true
      });
    }
    /**
     * Returns the requests that exceeded the quota.
     * @returns {Collection}
     */

  }, {
    key: "getRequestsExceededQuota",
    value: function getRequestsExceededQuota() {
      return this.requests().search({
        field: 'exceedsQuota',
        operator: '=',
        value: true
      });
    }
    /**
     * Returns the last failed request.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "getLastFailedRequest",
    value: function getLastFailedRequest() {
      return this.getFailedRequests().last;
    }
    /**
     * Returns the last request.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "getLastRequest",
    value: function getLastRequest() {
      return this.requests().last;
    }
    /**
     * Returns the request that has maximum response size.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "getMaxSizeRequest",
    value: function getMaxSizeRequest() {
      return this.requests().sortBy({
        field: 'responseSize',
        dir: 'desc'
      }).first;
    }
    /**
     * Returns the request that took maximum time to complete.
     * @returns {HttpRequestInfo}
     */

  }, {
    key: "getMaxDurationRequest",
    value: function getMaxDurationRequest() {
      return this.requests().sortBy({
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
    key: "groupRequests",
    value: function groupRequests() {
      var _this$requests;

      return (_this$requests = this.requests()).groupBy.apply(_this$requests, arguments);
    }
    /**
     * Sorts the requests based on the passed arguments.
     * @param {...*} sortArgs The sort parameters.
     * @returns {Collection}
     */

  }, {
    key: "sortRequests",
    value: function sortRequests() {
      var _this$requests2;

      return (_this$requests2 = this.requests()).sortBy.apply(_this$requests2, arguments);
    }
    /**
     * Groups and sorts the requests.
     * @param {Array<string>} groupArgs Array of fields.
     * @param {Array<*>} sortArgs Array of sort parameters.
     * @returns {Collection}
     */

  }, {
    key: "groupSortRequests",
    value: function groupSortRequests(groupArgs, sortArgs) {
      var _this$groupRequests;

      return (_this$groupRequests = this.groupRequests.apply(this, toConsumableArray_default()(groupArgs))).sortBy.apply(_this$groupRequests, toConsumableArray_default()(sortArgs));
    }
    /**
     * Filters requests based on the passed query.
     * @param {...*} query The search query.
     * @returns {Collection}
     */

  }, {
    key: "searchRequests",
    value: function searchRequests() {
      var _this$requests3;

      for (var _len = arguments.length, query = new Array(_len), _key = 0; _key < _len; _key++) {
        query[_key] = arguments[_key];
      }

      var q = [].concat(query);
      q.forEach(function (x) {
        var field = x.field,
            value = x.value;

        if (typeof value !== 'string') {
          return;
        }

        if (['payloadSize', 'responseSize'].indexOf(field) > -1) {
          x.value = convertBytes(value);
        } else if (field === 'duration') {
          x.value = convertTime(value);
        }
      });
      return (_this$requests3 = this.requests()).search.apply(_this$requests3, query);
    }
    /**
     * Returns requests that contains the passed string.
     * @param {string} part The url part.
     * @returns {Collection}
     */

  }, {
    key: "searchRequestsContainsUrl",
    value: function searchRequestsContainsUrl(part) {
      return this.requests().search({
        field: 'url',
        operator: 'contains',
        value: part
      });
    }
    /**
     * Returns requests that contains response size greater than the passed value.
     * @param {number} size The size in bytes.
     * @returns {Collection}
     */

  }, {
    key: "searchRequestsOfSizeGreaterThan",
    value: function searchRequestsOfSizeGreaterThan(size) {
      return this.requests().search({
        field: 'responseSize',
        operator: '>=',
        value: size
      });
    }
    /**
     * Get requests matches the query; group and sort the results based on the passed parameters.
     * @param {Array<*>} query The search queries.
     * @param {Array<string>} groupArgs The group arguments.
     * @param {Array<string>} sortArgs The sort parameters.
     * @returns {Collection}
     */

  }, {
    key: "searchGroupSortRequests",
    value: function searchGroupSortRequests(query, groupArgs, sortArgs) {
      var _this$searchRequests$, _this$searchRequests;

      return (_this$searchRequests$ = (_this$searchRequests = this.searchRequests(query)).groupBy.apply(_this$searchRequests, toConsumableArray_default()(groupArgs))).sortBy.apply(_this$searchRequests$, toConsumableArray_default()(sortArgs));
    }
    /**
     * Returns the total payload size summing all requests.
     * @returns {number}
     */

  }, {
    key: "getTotalPayloadSize",
    value: function getTotalPayloadSize() {
      return toConsumableArray_default()(this._requests).reduce(function (a, b) {
        return a + b.payloadSize;
      }, 0);
    }
    /**
     * Returns the total response size summing all requests.
     * @returns {number}
     */

  }, {
    key: "getTotalResponseSize",
    value: function getTotalResponseSize() {
      return toConsumableArray_default()(this._requests).reduce(function (a, b) {
        return a + b.responseSize;
      }, 0);
    }
    /**
     * Returns the max payload size of the requests.
     * @returns {number}
     */

  }, {
    key: "maxPayloadSize",
    value: function maxPayloadSize() {
      return Math.max.apply(Math, toConsumableArray_default()(toConsumableArray_default()(this._requests).map(function (r) {
        return r.payloadSize;
      })));
    }
    /**
     * Returns the max response size of the requests.
     * @returns {number}
     */

  }, {
    key: "maxResponseSize",
    value: function maxResponseSize() {
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
     * Prints all the requests in the passed reporter.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequests",
    value: function printRequests(displayFields) {
      this._reporter.report(this.requests(), displayFields);
    }
    /**
     * Prints the requests matched the passed method (GET, POST etc.).
     * @param {string} method
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsByType",
    value: function printRequestsByType(method, displayFields) {
      this._reporter.report(this.getRequestsByType(method), displayFields);
    }
    /**
     * Prints the requests that's been issued against the passed url.
     * @param {string} url The absolute or relative url.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsByUrl",
    value: function printRequestsByUrl(url, displayFields) {
      this._reporter.report(this.getRequestsByUrl(url), displayFields);
    }
    /**
     * Print requests that has the passed response status.
     * @param {number} status The status code.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsOfStatus",
    value: function printRequestsOfStatus(status, displayFields) {
      this._reporter.report(this.getRequestsOfStatus(status), displayFields);
    }
    /**
     * Prints failed requests.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printFailedRequests",
    value: function printFailedRequests(displayFields) {
      this._reporter.report(this.getFailedRequests(), displayFields);
    }
    /**
     * Prints requests exceeds quota.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsExceededQuota",
    value: function printRequestsExceededQuota(displayFields) {
      this._reporter.report(this.getRequestsExceededQuota(), displayFields);
    }
    /**
     * Prints the last failed request.
     */

  }, {
    key: "printLastFailedRequest",
    value: function printLastFailedRequest() {
      this._reporter.report(this.getLastFailedRequest());
    }
    /**
     * Prints the last request.
     */

  }, {
    key: "printLastRequest",
    value: function printLastRequest() {
      this._reporter.report(this.getLastRequest());
    }
    /**
     * Prints the request that has maximum size.
     */

  }, {
    key: "printMaxSizeRequest",
    value: function printMaxSizeRequest() {
      this._reporter.report(this.getMaxSizeRequest());
    }
    /**
     * Prints the request that took maximum time.
     */

  }, {
    key: "printMaxDurationRequest",
    value: function printMaxDurationRequest() {
      this._reporter.report(this.getMaxDurationRequest());
    }
    /**
     * Groups and prints the requests.
     * @param {...string|Array<string>} args The group and display arguments.
     */

  }, {
    key: "groupAndPrintRequests",
    value: function groupAndPrintRequests() {
      if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
        return this._reporter.report(this.groupRequests.apply(this, toConsumableArray_default()(arguments.length <= 0 ? undefined : arguments[0])), arguments.length <= 1 ? undefined : arguments[1]);
      }

      this._reporter.report(this.groupRequests.apply(this, arguments));
    }
    /**
     * Sorts and prints the requests.
     * @param {...string|Array<string>} args The group and sort arguments.
     */

  }, {
    key: "sortAndPrintRequests",
    value: function sortAndPrintRequests() {
      if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
        return this._reporter.report(this.sortRequests.apply(this, toConsumableArray_default()(arguments.length <= 0 ? undefined : arguments[0])), arguments.length <= 1 ? undefined : arguments[1]);
      }

      this._reporter.report(this.sortRequests.apply(this, arguments));
    }
    /**
     * Groups, sorts and prints the requests.
     * @param {Array<string>} groupArgs Array of fields.
     * @param {Array<*>} sortArgs Array of sort parameters.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "groupSortAndPrintRequests",
    value: function groupSortAndPrintRequests(groupArgs, sortArgs, displayFields) {
      this._reporter.report(this.groupSortRequests(groupArgs, sortArgs), displayFields);
    }
    /**
     * Searches and prints the requests matches the search query.
     * @param {...*} args The search query and display fields parameters.
     */

  }, {
    key: "searchAndPrintRequests",
    value: function searchAndPrintRequests() {
      if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
        return this._reporter.report(this.searchRequests.apply(this, toConsumableArray_default()(arguments.length <= 0 ? undefined : arguments[0])), arguments.length <= 1 ? undefined : arguments[1]);
      }

      this._reporter.report(this.searchRequests.apply(this, arguments));
    }
    /**
     * Print requests that has url contains the passed string.
     * @param part The url part.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsContainsUrl",
    value: function printRequestsContainsUrl(part, displayFields) {
      this._reporter.report(this.searchRequestsContainsUrl(part), displayFields);
    }
    /**
     * Print requests that has response size greater than the passed value.
     * @param {number} size The size in bytes.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "printRequestsOfSizeGreaterThan",
    value: function printRequestsOfSizeGreaterThan(size, displayFields) {
      this._reporter.report(this.searchRequestsOfSizeGreaterThan(size), displayFields);
    }
    /**
     * Searches and then groups, sorts and finally prints the collection.
     * @param {Array<*>} query The search queries.
     * @param {Array<string>} groupArgs The group arguments.
     * @param {Array<string>} sortArgs The sort parameters.
     * @param {Array<string>} displayFields The fields to display.
     */

  }, {
    key: "searchGroupSortAndPrintRequests",
    value: function searchGroupSortAndPrintRequests(query, groupArgs, sortArgs, displayFields) {
      this._reporter.report(this.searchGroupSortRequests.apply(this, toConsumableArray_default()(query).concat(toConsumableArray_default()(groupArgs), toConsumableArray_default()(sortArgs))), displayFields);
    }
    /**
     * Displays the bar chart of responsive size.
     */

  }, {
    key: "displayResponseSizeChart",
    value: function displayResponseSizeChart() {
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
    key: "displayResponseTimeChart",
    value: function displayResponseTimeChart() {
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
    key: "displaySizeTimeChart",
    value: function displaySizeTimeChart() {
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
    key: "displaySizeDistribution",
    value: function displaySizeDistribution() {
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
     * Exports the requests to excel.
     */

  }, {
    key: "export",
    value: function _export() {
      if (this.totalRequests === 0) {
        window.alert('No Requests to export');
        return;
      }

      var csvString = "Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\r\n";

      toConsumableArray_default()(this._requests).forEach(function (r) {
        csvString += "".concat(r.id, ",").concat(r.url, ",").concat(r.path, ",").concat(r.method, ",").concat(r.payloadSize || 0, ",").concat(r.duration || 0, ",").concat(r.responseStatus, ",").concat(r.responseSize, ",").concat(r.error, ",").concat(r.errorDescription, ",").concat(r.exceedsQuota, "\r\n");
      });

      csvString += "\r\n";
      csvString = "data:application/csv,".concat(encodeURIComponent(csvString));
      var exportLink = document.querySelector('#http-supervisor-export');

      if (exportLink) {
        exportLink.remove();
      }

      exportLink = document.createElement('a');
      exportLink.id = 'http-supervisor-export';
      exportLink.setAttribute('href', csvString);
      exportLink.setAttribute('download', 'HttpSupervisorRequestsLog.csv');
      document.body.appendChild(exportLink);
      exportLink.click();
    }
    /**
     * Alert request that matches the passed arguments.
     * @param {...*} args The watch arguments.
     * @returns {number}
     */

  }, {
    key: "watchOn",
    value: function watchOn() {
      var watchId = this._watchId();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this._watches.set(watchId, args);

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
      this._watches.remove(watchId);

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
          send = this._send.bind(this);

      this._monkeyPatchFetch && (window.fetch = this._fetch.bind(this));

      XMLHttpRequest.prototype.open = function () {
        open.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
      };

      XMLHttpRequest.prototype.send = function () {
        send.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
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
    }
    /**
     * Capture request information and opens network connection using fetch API.
     * @private
     */

  }, {
    key: "_fetch",
    value: function _fetch() {
      var _this2 = this;

      if (!this.busy) {
        return;
      }

      var id = this._id();

      var _ref2 = Array.prototype.slice.call(arguments),
          url = _ref2[0],
          _ref2$ = _ref2[1],
          options = _ref2$ === void 0 ? {} : _ref2$,
          _options$method = options.method,
          method = _options$method === void 0 ? 'GET' : _options$method,
          body = options.body;

      var payload = safeParse(body);
      var requestInfo = new http_request_info_HttpRequestInfo(id, url, method, payload);
      requestInfo.initiatorType = InitiatorType.FETCH;
      requestInfo.payloadSize = byteSize(JSON.stringify(payload) || '');

      this._requests.add(requestInfo);

      return new Promise(function (resolve, reject) {
        _this2._triggerEvent(SupervisorEvents.REQUEST_START, null, requestInfo);

        var response; // Make the fetch call and capture the response info.

        _this2._nativeFetch.call(window, _this2._isPerformanceSupported() ? _this2._appendRequestIdToUrl(url, id) : url, options).then(function (r) {
          response = r.clone();
          return isJsonResponse(r.headers.get('content-type')) ? r.json() : null;
        }).then(function (data) {
          requestInfo.response = data;
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        })["finally"](function () {
          requestInfo.responseStatus = response ? response.status : 500;

          _this2._fillParametersAndFireEvents(requestInfo, response);
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

      xhr[XHR_METADATA_KEY] = {
        id: id,
        method: method.toUpperCase(),
        url: url.toLowerCase()
      };

      (_this$_nativeOpen = this._nativeOpen).call.apply(_this$_nativeOpen, [xhr].concat(parameters));
    }
    /**
     * Sends XHR request.
     * @private
     */

  }, {
    key: "_send",
    value: function _send() {
      var _this3 = this,
          _this$_nativeSend2;

      if (!this.busy) {
        return;
      }

      var parameters = Array.prototype.slice.call(arguments),
          xhr = parameters[0],
          payload = parameters[1],
          url = this._createUrl(xhr[XHR_METADATA_KEY].url);

      xhr[XHR_METADATA_KEY].payload = safeParse(payload);
      parameters.shift();

      if (this._domains !== null && !this._domains.has(url.origin)) {
        var _this$_nativeSend;

        (_this$_nativeSend = this._nativeSend).call.apply(_this$_nativeSend, [xhr].concat(parameters));

        return;
      } // Increment the call counter.


      this._increment(); // Capture the request.


      var requestInfo = this._createRequest(xhr);

      this._requests.add(requestInfo); // Listen to `onreadystatechange` event to capture the response info.


      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
          return;
        }

        _this3._decrement();

        requestInfo.responseStatus = xhr.status;
        requestInfo.response = isJsonResponse(xhr.getResponseHeader('Content-Type')) ? safeParse(xhr.response) : xhr.response;

        _this3._fillParametersAndFireEvents(requestInfo, xhr);
      };

      (_this$_nativeSend2 = this._nativeSend).call.apply(_this$_nativeSend2, [xhr].concat(parameters));

      this._triggerEvent(SupervisorEvents.REQUEST_START, requestInfo, xhr);
    }
    /**
     * Fill duration and size parameters from response.
     * @private
     */

  }, {
    key: "_fillParametersAndFireEvents",
    value: function _fillParametersAndFireEvents(requestInfo, xhrOrResponse) {
      var performanceEntry; // If performance API is well supported read the duration and size leveraging it.

      if (this._isPerformanceSupported()) {
        var urlName = this._appendRequestIdToUrl(requestInfo.url, requestInfo.id);

        performanceEntry = performance.getEntriesByType('resource').find(function (e) {
          return e.name === urlName;
        });
      }

      var responseSize = byteSize(JSON.stringify(requestInfo.response || ''));

      if (performanceEntry) {
        requestInfo.timeStart = performanceEntry.startTime;
        requestInfo.timeEnd = performanceEntry.responseEnd;
        requestInfo.payloadByPerformance = !!performanceEntry.transferSize;
        requestInfo.responseSize = requestInfo.payloadByPerformance ? performanceEntry.transferSize : responseSize;
      } else {
        requestInfo.payloadByPerformance = false;
        requestInfo.timeEnd = performance.now();
        requestInfo.responseSize = responseSize;
      }

      requestInfo.duration = Math.round(requestInfo.timeEnd - requestInfo.timeStart);
      requestInfo.exceedsQuota = this._isExceededQuota(requestInfo);
      requestInfo.error && this._triggerEvent(SupervisorEvents.REQUEST_ERROR, requestInfo, xhrOrResponse);
      requestInfo.exceedsQuota && this._triggerEvent(SupervisorEvents.EXCEEDS_QUOTA, requestInfo, xhrOrResponse);

      this._triggerEvent(SupervisorEvents.REQUEST_END, requestInfo, xhrOrResponse);
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
     * Creates request object from the XHR object.
     * @private
     */

  }, {
    key: "_createRequest",
    value: function _createRequest(xhr) {
      var _xhr$XHR_METADATA_KEY = xhr[XHR_METADATA_KEY],
          id = _xhr$XHR_METADATA_KEY.id,
          url = _xhr$XHR_METADATA_KEY.url,
          method = _xhr$XHR_METADATA_KEY.method,
          payload = _xhr$XHR_METADATA_KEY.payload;
      var httpRequestInfo = new http_request_info_HttpRequestInfo(id, url, method, payload);
      httpRequestInfo.initiatorType = InitiatorType.XHR;
      httpRequestInfo.payloadSize = byteSize(payload ? JSON.stringify(payload) : '');
      return httpRequestInfo;
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

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        traceEachRequest: this._traceEachRequest,
        alertOnError: this._alertOnError,
        alertOnExceedQuota: this._alertOnExceedQuota,
        usePerformance: this._usePerformance,
        quota: this._quota,
        domains: toConsumableArray_default()(this._domains),
        watches: JSON.stringify(toConsumableArray_default()(this._watches.entries()))
      }));
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


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(12);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/http-supervisor-widget.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Supervisor Control Panel Template.
 * @type {HTMLTemplateElement}
 */

var template = document.createElement('template');
template.innerHTML = "\n<style>\n  :host {\n    --color: #eee;\n    --bg-color: #333;\n    --hover-color: #5ab7fa;\n    --disabled-color: #ccc;\n    --border-color: #666;\n    --font-size: 12px;\n    --index: 20000;\n    --popover-width: 350px;\n    --box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n    color: var(--color);\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  }\n\n  .http-supervisor-container {\n    position: fixed;\n    top: 0;\n    right: calc(50% - 91px);\n    z-index: var(--index);\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    background-color: var(--bg-color);\n    border: solid 1px var(--border-color);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    font-size: var(--font-size);\n    box-sizing: border-box;\n    color: var(--font-color);\n    box-shadow: var(--box-shadow);\n  }\n\n   button, button:active, button:focus, button:hover, span {\n    width: 30px;\n    height: 26px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    box-sizing: border-box;\n    background: none;\n    box-shadow: none;\n    outline: none;\n  }\n\n  button:not(:disabled) {\n    cursor:pointer;\n  }\n\n  button svg {\n    color: var(--color);\n  }\n\n  button:disabled svg {\n    color: var(--disabled-color);\n  }\n\n  button:not(:disabled):hover svg {\n    color: var(--hover-color);\n  }\n\n  button:not(last-child), span {\n    border-right: solid 1px var(--border-color);\n  }\n\n  .popover-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: ' ';\n    display: none;\n  }\n\n  .popover-content {\n    position: fixed;\n    top: 38px;\n    width: var(--popover-width);\n    background-color: var(--bg-color);\n    right: calc(50% - 216px);\n    border-radius: 6px;\n    padding: 20px;\n    font-size: var(--font-size);\n    box-shadow: var(--box-shadow);\n    z-index: var(--index);\n    display: none;\n  }\n\n  .popover-content .popover-close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n  }\n\n  .active {\n    display: block;\n  }\n\n  .popover-content:before {\n    position: absolute;\n    z-index: -1;\n    content: \"\";\n    right: calc(50% - 65px);\n    top: -10px;\n    border-style: solid;\n    border-width: 0 10px 10px 10px;\n    border-color: transparent transparent var(--bg-color) transparent;\n  }\n\n  .popover-content input[type=\"number\"], .popover-content input[type=\"text\"] {\n    background-color: transparent;\n    color: var(--color);\n    outline: none;\n    border: none;\n    border-bottom: solid 1px var(--border-color);\n    font-size: var(--font-size);\n    width: 60px;\n  }\n\n  .popover-content form {\n    margin-bottom: 0;\n  }\n\n  .popover-content form div {\n    display: flex;\n    align-items: center;\n  }\n\n  .popover-content h4 {\n    margin: 0;\n    margin-bottom: 8px;\n    color: var(--disabled-color);\n    text-transform: uppercase;\n    font-size: 8px;\n    letter-spacing: 1px;\n  }\n\n  .popover-content fieldset {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-column-gap: 5px;\n    grid-row-gap: 4px;\n    border: dashed 1px var(--border-color);\n    margin-bottom: 15px;\n    padding: 6px 12px;\n  }\n\n  .popover-content .first div label {\n    width: 140px;\n  }\n\n  .popover-content .second div label {\n    width: 80px;\n  }\n\n  .popover-content .third {\n    display: flex;\n    border: none;\n    padding: 0;\n  }\n\n  .popover-content .third button {\n    border: solid 1px var(--border-color);\n  }\n\n  .popover-content .fourth {\n    border: none;\n    padding: 0;\n    display: none;\n    margin-bottom: 0;\n    grid-template-columns: 1fr;\n  }\n\n  .popover-content .fourth.active {\n    display: grid;\n  }\n\n  .advanced-container {\n    display: flex;\n    align-items: center;\n  }\n\n  .advanced-container svg {\n    width: 10px;\n    height: 10px;\n    position: relative;\n    top: -5px;\n    margin-left: 5px;\n  }\n</style>\n<div class=\"http-supervisor-container\">\n   <button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-play\" viewBox=\"0 0 16 16\">\n       <path d=\"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z\"/>\n    </svg>\n   </button>\n   <button style=\"display: none;\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"currentColor\" class=\"bi bi-stop-circle\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n        <path d=\"M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z\"/>\n      </svg>\n   </button>\n   <button disabled>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n        <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n        <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n      </svg>\n   </button>\n   <button disabled>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/>\n      <path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/>\n    </svg>\n   </button>\n   <button disabled>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-box-arrow-up\" viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\" d=\"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z\"/>\n        <path fill-rule=\"evenodd\" d=\"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z\"/>\n      </svg>\n  </button>\n   <span>\n     0\n   </span>\n   <button>\n     <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">\n     <path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n   </svg>\n   </button>\n</div>\n<div class=\"popover\">\n  <div class=\"popover-overlay\"></div>\n  <div class=\"popover-content\">\n    <a href=\"#\" class=\"popover-close\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"#ccc\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n    </svg>\n    </a>\n    <form>\n      <h4>Options</h4>\n      <fieldset class=\"first\">\n        <div>\n          <label>Trace Request:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Alert Error:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Alert Quota Exceed:</label>\n          <input type=\"checkbox\" />\n        </div>\n        <div>\n          <label>Use Performance:</label>\n          <input type=\"checkbox\" />\n        </div>\n      </fieldset>\n\n      <h4>Quota</h4>\n      <fieldset class=\"second\">\n        <div>\n          <label>Payload:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n        <div>\n          <label>Response:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n        <div>\n          <label>Duration:</label>\n          <input type=\"number\" min=\"1\" />\n        </div>\n      </fieldset>\n\n      <h4>Visualization</h4>\n      <fieldset class=\"third\">\n        <button title=\"Response Size Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Duration Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Size And Duration Chart\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\"/>\n            </svg>\n        </button>\n        <button title=\"Response Size Distribution\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pie-chart-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z\"/>\n            </svg>\n        </button>\n      </fieldset>\n\n      <div class=\"advanced-container\">\n        <h4>Advanced</h4>\n        <svg style=\"cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-double-down expand\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n          <path fill-rule=\"evenodd\" d=\"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n        </svg>\n        <svg style=\"cursor:pointer; display: none\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-double-up collapse\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z\"/>\n          <path fill-rule=\"evenodd\" d=\"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\"/>\n        </svg>\n      </div>\n\n      <fieldset class=\"fourth\">\n        <div>\n          <label>Domains:</label>\n          <input type=\"text\" style=\"flex-grow: 1\" />\n        </div>\n        <div>\n          <label>Keyboard Events:</label>\n          <input type=\"checkbox\" />\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n";
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

    this._onStart = this._onStart.bind(this);
    this._onStop = this._onStop.bind(this);
    this._updateTotalRequestsCount = this._updateTotalRequestsCount.bind(this);
    this._updateLabelsCount = this._updateLabelsCount.bind(this);
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
      var _this = this;

      if (this._el) {
        return;
      }

      document.body.appendChild(this._el = document.createElement('http-supervisor-widget'));
      var _this$_httpSupervisor = this._httpSupervisor,
          domains = _this$_httpSupervisor.domains,
          traceEachRequest = _this$_httpSupervisor.traceEachRequest,
          alertOnError = _this$_httpSupervisor.alertOnError,
          alertOnExceedQuota = _this$_httpSupervisor.alertOnExceedQuota,
          quota = _this$_httpSupervisor.quota,
          usePerformance = _this$_httpSupervisor.usePerformance,
          keyboardEvents = _this$_httpSupervisor.keyboardEvents;

      this._el.setState({
        domains: domains,
        traceEachRequest: traceEachRequest,
        alertOnError: alertOnError,
        alertOnExceedQuota: alertOnExceedQuota,
        quota: quota,
        usePerformance: usePerformance,
        keyboardEvents: keyboardEvents
      }); // Listen to supervisor events.


      this._httpSupervisor.on(SupervisorEvents.START, this._onStart);

      this._httpSupervisor.on(SupervisorEvents.STOP, this._onStop);

      this._httpSupervisor.on(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateLabelsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);

      this._httpSupervisor.on(SupervisorEvents.REQUEST_END, this._updateLabelsCount); // Listen to web component events.


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
        return _this._httpSupervisor.displayResponseSizeChart();
      });

      this._el.subscribe('responseTimeChart', function () {
        return _this._httpSupervisor.displayResponseTimeChart();
      });

      this._el.subscribe('responseSizeTimeChart', function () {
        return _this._httpSupervisor.displaySizeTimeChart();
      });

      this._el.subscribe('responseSizeDistributionChart', function () {
        return _this._httpSupervisor.displaySizeDistribution();
      });

      this._el.subscribe('domainsChange', function (ctrl) {
        return _this._httpSupervisor.domains = ctrl.value.split(',').map(function (x) {
          return x.trim();
        });
      });

      this._el.subscribe('keyboardEventsChange', function (ctrl) {
        return _this._httpSupervisor.keyboardEvents = ctrl.checked;
      });
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
      this._httpSupervisor.off(SupervisorEvents.START, this._onStart);

      this._httpSupervisor.off(SupervisorEvents.STOP, this._onStop);

      this._httpSupervisor.off(SupervisorEvents.CLEAR, this._updateTotalRequestsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateLabelsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_START, this._updateTotalRequestsCount);

      this._httpSupervisor.off(SupervisorEvents.REQUEST_END, this._updateLabelsCount);

      this._httpSupervisor = null;

      this._el.cleanup();

      this._el.remove();

      this._el = null;
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
      this._el.updateCalls(this._httpSupervisor.onGoingCallsCount);
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
    }
  }]);

  return HttpSupervisorWidget;
}();
/**
 * Supervisor Controls Panel Web Component.
 */




var http_supervisor_widget_HtmlSupervisorWidgetElement = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(HtmlSupervisorWidgetElement, _HTMLElement);

  var _super = _createSuper(HtmlSupervisorWidgetElement);

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

    defineProperty_default()(assertThisInitialized_default()(_this2), "_domainsTextbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_keyboardEventsCheckbox", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_expandButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_collapisbleFieldSet", null);

    _this2._handleKeyPress = _this2._handleKeyPress.bind(assertThisInitialized_default()(_this2));

    var shadowRoot = _this2.attachShadow({
      mode: 'closed'
    });

    shadowRoot.appendChild(template.content.cloneNode(true));
    _this2._popover = shadowRoot.querySelector('.popover-content');

    var _ref = [].concat(toConsumableArray_default()(Array.from(shadowRoot.querySelector('.http-supervisor-container').children)), toConsumableArray_default()(Array.from(_this2._popover.querySelectorAll('input,button'))));

    _this2._startButton = _ref[0];
    _this2._stopButton = _ref[1];
    _this2._clearButton = _ref[2];
    _this2._printButton = _ref[3];
    _this2._exportButton = _ref[4];
    _this2._callsCountLabel = _ref[5];
    _this2._moreButton = _ref[6];
    _this2._traceEachRequestCheckbox = _ref[7];
    _this2._alertOnErrorCheckbox = _ref[8];
    _this2._alertOnQuotaExceedCheckbox = _ref[9];
    _this2._usePerformanceAPICheckbox = _ref[10];
    _this2._maxPayloadSizeTextbox = _ref[11];
    _this2._maxResponseSizeTextbox = _ref[12];
    _this2._maxDurationTextbox = _ref[13];
    _this2._responseSizeChartButton = _ref[14];
    _this2._responseTimeChartButton = _ref[15];
    _this2._responseSizeTimeChartButton = _ref[16];
    _this2._responseSizeDistributionChartButton = _ref[17];
    _this2._domainsTextbox = _ref[18];
    _this2._keyboardEventsCheckbox = _ref[19];
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
      domainsChange: _this2._domainsTextbox,
      keyboardEventsChange: _this2._keyboardEventsCheckbox
    };
    _this2._expandButton = shadowRoot.querySelector('.expand');
    _this2._collapseButton = shadowRoot.querySelector('.collapse');
    _this2._collapisbleFieldSet = shadowRoot.querySelector('.fourth');
    _this2._popoverClose = shadowRoot.querySelector('.popover-close');
    _this2._overlay = shadowRoot.querySelector('.popover-overlay');

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
      var domains = _ref2.domains,
          traceEachRequest = _ref2.traceEachRequest,
          alertOnError = _ref2.alertOnError,
          alertOnExceedQuota = _ref2.alertOnExceedQuota,
          quota = _ref2.quota,
          usePerformance = _ref2.usePerformance,
          keyboardEvents = _ref2.keyboardEvents;
      Array.isArray(domains) && (this._domainsTextbox.value = domains.join(','));
      this._traceEachRequestCheckbox.checked = traceEachRequest;
      this._alertOnErrorCheckbox.checked = alertOnError;
      this._alertOnQuotaExceedCheckbox.checked = alertOnExceedQuota;
      this._maxPayloadSizeTextbox.value = quota.maxPayloadSize;
      this._maxResponseSizeTextbox.value = quota.maxResponseSize;
      this._maxDurationTextbox.value = quota.maxDuration;
      this._usePerformanceAPICheckbox.checked = usePerformance;
      this._keyboardEventsCheckbox.checked = keyboardEvents;
      keyboardEvents && this._listenToKeyPressEvent();
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
    value: function updateCalls(count) {
      this._callsCountLabel.innerText = count.toString();
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

window.customElements.define('http-supervisor-widget', http_supervisor_widget_HtmlSupervisorWidgetElement);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

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
   * True to visualize data through charts.
   * @type {boolean}
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
   * Ctor.
   * @param {Object} fieldsToDisplay
   */
  function ConsoleReporter(fieldsToDisplay) {
    classCallCheck_default()(this, ConsoleReporter);

    defineProperty_default()(this, "_fieldsToDisplay", new Set(['id', 'url', 'partWithQuery', 'method', 'payload', 'payloadSize', 'duration', 'responseStatus', 'response', 'responseSize', 'error', 'errorDescription', 'exceedsQuota']));

    defineProperty_default()(this, "_useVisualization", true);

    defineProperty_default()(this, "_canvasEl", null);

    defineProperty_default()(this, "_chartFontSize", 9);

    defineProperty_default()(this, "_chartHeight", 300);

    defineProperty_default()(this, "_chartWidth", 500);

    fieldsToDisplay && (this._fieldsToDisplay = new Set(fieldsToDisplay));
  }
  /**
   * Does initialization stuff.
   * @param {HttpSupervisor} httpSupervisor
   */


  createClass_default()(ConsoleReporter, [{
    key: "init",
    value: function init(httpSupervisor) {
      this._useVisualization = !!(httpSupervisor.useVisualization && window.Chart);

      if (!this._useVisualization) {
        return;
      }

      window.Chart && (window.Chart.defaults.font.size = this._chartFontSize);
      this._canvasEl = document.createElement('canvas');
      this._canvasEl.style.width = "".concat(this._chartWidth, "px");
      this._canvasEl.style.height = "".concat(this._chartHeight, "px");
      this._canvasEl.style.display = 'none';
      document.body.appendChild(this._canvasEl);
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
        if (arg1 === null) {
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

      if (!this._useVisualization) {
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
        console.screenshot(_this._canvasEl, .5, .35);
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
      console.log("%c".concat(message), styles.join(';'));
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
        console.log("%c".concat(this._getTitleWithSpaces(head), ":"), "font-weight: bold; color: ".concat(Colors.INFO), value);
        return;
      }

      console.log("%c".concat(this._getTitleWithSpaces(head), ": %c").concat(value), "font-weight: bold; color: ".concat(Colors.INFO), "color: ".concat(Colors.INFO, ";"));
    }
    /**
     * Prints many fields and values in single row.
     * @param obj
     */

  }, {
    key: "printKeyValueMany",
    value: function printKeyValueMany(obj) {
      var _this2 = this,
          _console;

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

      (_console = console).log.apply(_console, [msgs.join('%c | ')].concat(styles));
    }
    /**
     * Prints multiple messages.
     * @param messages
     */

  }, {
    key: "printMultiple",
    value: function printMultiple() {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
    /**
     * Prints table.
     * @param array
     * @param displayFields
     */

  }, {
    key: "table",
    value: function table(array, displayFields) {
      array.length && console.table(array, displayFields);
    }
    /**
     * Starts a group.
     * @param group
     * @param args
     */

  }, {
    key: "groupStart",
    value: function groupStart(group) {
      var _console3;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console3 = console).group.apply(_console3, [group].concat(args));
    }
    /**
     * Ends the active group.
     */

  }, {
    key: "groupEnd",
    value: function groupEnd() {
      console.groupEnd();
    }
    /**
     * Clears the console.
     */

  }, {
    key: "clear",
    value: function clear() {
      console.clear();
    }
    /**
     * Creates empty line.
     */

  }, {
    key: "break",
    value: function _break() {
      console.log("\n");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._canvasEl.remove();

      this._canvasEl = null;
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

        if (requestOrCollection.error) {
          borderColor = Colors.ERROR_MEDIUM;
        } else if (requestOrCollection.exceedsQuota) {
          borderColor = Colors.WARN_MEDIUM;
        }

        console.groupCollapsed("%c".concat(requestOrCollection.method, "  ").concat(requestOrCollection.path, " | ").concat(requestOrCollection.responseStatus, " | ").concat(formatBytes(requestOrCollection.responseSize), " | ").concat(formatTime(requestOrCollection.duration)), "padding: 5px; border-left: solid 4px ".concat(borderColor, ";"));
        this.printKeyValue(Messages.REQUEST_NO, requestOrCollection.id);
        this.printKeyValue(Messages.URL, requestOrCollection.url);
        this.printKeyValue(Messages.PATH, requestOrCollection.path);
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
        console.groupEnd();
        return;
      }

      if (!requestOrCollection.hasItems && !requestOrCollection.hasGroups) {
        return;
      }

      if (requestOrCollection.hasGroups) {
        requestOrCollection.groups.forEach(function (group) {
          var name = group.name,
              groupedBy = group.groupedBy,
              items = group.items;

          if (typeof name === 'undefined') {
            _this3.groupStart("- %c[".concat(items.length, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
          } else if (name !== null && typeof_default()(name) === 'object') {
            _this3.groupStart("".concat(groupedBy, ": %c[").concat(items.length, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"), name);
          } else {
            var groupName = name;

            if (typeof name === 'number') {
              if (['payloadSize', 'responseSize'].indexOf(groupedBy) > -1) {
                groupName = formatBytes(name);
              } else if (groupedBy === 'duration') {
                groupName = formatTime(name);
              }
            }

            _this3.groupStart("".concat(groupName, " %c- [").concat(items.length, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
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
  }]);

  return ConsoleReporter;
}();


// CONCATENATED MODULE: ./src/index.js




var httpSupervisor = new http_supervisor_HttpSupervisor(new http_supervisor_widget_HttpSupervisorWidget(), new console_reporter_ConsoleReporter());
/* harmony default export */ var src = __webpack_exports__["default"] = (httpSupervisor);


/***/ })
/******/ ])["default"];
});