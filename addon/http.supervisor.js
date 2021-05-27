(function() {

  function install() {
    let script = document.querySelector('#supervisor-script');

    if (script) {
      window.dispatchEvent(new CustomEvent('init-supervisor'));
      return;
    }

    script = document.createElement('script');
    script.setAttribute('id', 'supervisor-script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = `(function webpackUniversalModuleDefinition(root, factory) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

var arrayWithoutHoles = __webpack_require__(20);

var iterableToArray = __webpack_require__(21);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableSpread = __webpack_require__(22);

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

module.exports = __webpack_require__(25);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(13);

var isNativeFunction = __webpack_require__(23);

var construct = __webpack_require__(14);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(17);

var iterableToArrayLimit = __webpack_require__(18);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableRest = __webpack_require__(19);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

var isNativeReflectConstruct = __webpack_require__(24);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(16);

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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(16);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, \`await x\` is transformed to
  // \`yield regeneratorRuntime.awrap(x)\`, so that the runtime can test
  // \`hasOwn.call(value, "__await")\` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by \`bin/regenerator --include-runtime script.js\`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 26 */
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
   * Since the console.log doesn't respond to the \`display\` style,
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "HttpSupervisor", function() { return /* reexport */ http_supervisor_HttpSupervisor; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

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
  QUERY: 'Query',
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
  IMPORTED_FAILURE: 'Failed to import configuration!',
  NO_DUPLICATE_REQUESTS: 'No duplicate requests found',
  HAS_DUPLICATES: 'Has Duplicates?',
  DUPLICATE_REQUESTS: 'Duplicate Requests',
  CATEGORY: 'Category',
  TAGS: 'Tags'
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
  WARN_MEDIUM: '#e3b842',
  WARN_DARK: '#bd8f15',
  YELLOW: '#f5e340',
  LIGHT_BLUE: '#b3d0f2',
  DARK_BLUE: '#082f5e'
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
 * Display labels for \`HttpRequestInfo\` class props.
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
  NOT_MATCHES: '!matches',
  IN: 'in',
  NOT_IN: '!in'
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
 * Returns \`true\` if url is absolute.
 * @param url
 * @returns {boolean}
 */

function isAbsolute(url) {
  var reg = new RegExp('/^https?:\\/\\/|^\\/\\//i');
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
 * Returns \`true\` if the object matches the passed criteria.
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
      results.push(typeof v === 'string' && v.startsWith(value));
    } else if (operator === SEARCH_OPERATOR.ENDS_WITH) {
      results.push(typeof v === 'string' && v.endsWith(value));
    } else if (operator === SEARCH_OPERATOR.CONTAINS) {
      results.push(typeof v === 'string' && v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === SEARCH_OPERATOR.NOT_CONTAINS) {
      results.push(typeof v === 'string' && !v.toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else if (operator === SEARCH_OPERATOR.MATCHES) {
      results.push(typeof v === 'string' && matchesGlob(value, v));
    } else if (operator === SEARCH_OPERATOR.NOT_MATCHES) {
      results.push(typeof v === 'string' && !matchesGlob(value, v));
    } else if (operator === SEARCH_OPERATOR.IN) {
      results.push(Array.isArray(value) && value.indexOf(v) > -1);
    } else if (operator === SEARCH_OPERATOR.NOT_IN) {
      results.push(Array.isArray(value) && value.indexOf(v) === -1);
    }
  });
  return results.filter(function (r) {
    return !r;
  }).length === 0;
}
/**
 * Returns \`true\` if the content type is json.
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
  var re = new RegExp(pattern.toLowerCase().replace(/([.?+^$[\\]\\\\(){}|\\/-])/g, "\\\\$1").replace(/\\*/g, '.*'));
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
} // https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path

function readValue(o, s) {
  s = s.replace(/\\[(\\w+)\\]/g, '.$1'); // convert indexes to properties

  s = s.replace(/^\\./, ''); // strip a leading dot

  var a = s.split('.');

  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];

    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }

  return o;
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

    defineProperty_default()(this, "category", null);

    defineProperty_default()(this, "label", null);

    defineProperty_default()(this, "labelPending", null);

    defineProperty_default()(this, "errorLabel", null);

    defineProperty_default()(this, "tags", new Set());

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
     * Returns path with domain.
     * @return {string}
     */

  }, {
    key: "pathDomain",
    get: function get() {
      return this._urlObj ? "".concat(this.domain).concat(this.path) : null;
    }
    /**
     * The path with query.
     * @type {string}
     */

  }, {
    key: "pathQuery",
    get: function get() {
      if (!this._urlObj) {
        return null;
      }

      return this.query ? "".concat(this.path).concat(this.query) : this.path;
    }
    /**
     * Returns url object.
     * @return {URL}
     */

  }, {
    key: "urlObj",
    get: function get() {
      return this._urlObj;
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
        this.requestHeaders.forEach(function (value, header) {
          xhr.setRequestHeader(header, value);
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
    /**
     * Returns a cloned copy.
     * @return {HttpRequestInfo}
     */

  }, {
    key: "clone",
    value: function clone() {
      return Object.assign(new HttpRequestInfo(), this);
    }
  }]);

  return HttpRequestInfo;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(9);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(10);
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

    defineProperty_default()(assertThisInitialized_default()(_this), "_query", []);

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
     * @type {string}
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

      this._groupArgs = [].concat(args);
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

      this._sortArgs = args;

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
  }, {
    key: "clone",
    value: function clone() {
      var _collection$search$gr, _collection$search;

      var collection = new Collection(this._originalItems.map(function (item) {
        return item.clone();
      }));
      return (_collection$search$gr = (_collection$search = collection.search.apply(collection, toConsumableArray_default()(this._query))).groupBy.apply(_collection$search, toConsumableArray_default()(this._groupArgs))).sortBy.apply(_collection$search$gr, toConsumableArray_default()(this._sortArgs));
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
var construct = __webpack_require__(14);
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
 * Supervises HTTP Network Traffic. Helps to identify duplicate requests. Also helps to query, group,
 * sort, export, visualize requests and much more.
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

    defineProperty_default()(this, "_groupBy", ['pathQuery', 'method']);

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

    defineProperty_default()(this, "_urlConfig", {});

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

    defineProperty_default()(this, "_callsSummary", []);

    this._widget = widget || FAKE;
    this._reporter = reporter || FAKE;
    this._eventEmitter = new event_emitter_EventEmitter();
    this.init = this.init.bind(this);
    this.retire = this.retire.bind(this);
    window.addEventListener('init-supervisor', this.init, false);
    window.addEventListener('retire-supervisor', this.retire, false);
  }
  /**
   * Initialize the supervisor.
   * @param {object} [config] The configuration parameters.
   * @param {Array<string>} [config.include] Array of url glob patterns to monitor.
   * @param {Array<string>} [config.exclude] Array of url glob patterns to ignore.
   * @param {boolean} [config.renderUI] Passing \`true\` will render UI.
   * @param {boolean} [config.traceEachRequest] Passing \`true\` will print each request.
   * @param {boolean} [config.alertOnError] Passing \`true\` will print error requests.
   * @param {boolean} [config.alertOnExceedQuota] Passing \`true\` will print requests that exceeds quota.
   * @param {boolean} [config.alertOnRequestStart] True to alert on request start.
   * @param {object} [config.quota] Request Quota.
   * @param {Array} [config.groupBy] Grouping parameters used in displaying requests.
   * @param {Array} [config.sortBy] Sorting parameters used in displaying requests.
   * @param {boolean} [config.usePerformance] True to use performance.getEntriesByType for accurate duration and payload info.
   * @param {boolean} [config.monkeyPatchFetch] True to monkey patch fetch requests.
   * @param {boolean} [config.loadChart] True to use chart.js library for data visualization.
   * @param {boolean} [config.keyboardEvents] True to use keyboard events for operating control panel.
   * @param {boolean} [config.persistConfig] True to persist config in local storage.
   * @param {boolean} [config.lockConsole] True to lock console.
   * @param {object} [config.watches] Collection of watches.
   * @param {object} [config.urlConfig] User friendly labels with dynamic values for urls.
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
     * Uses \`performance.getEntriesByType\` for capturing accurate duration and payload size.
     * @type {boolean}
     * @private
     */

    /**
     * True to monkey patch fetch requests.
     * @type {boolean}
     * @private
     */

    /**
     * True to use \`chart.js\` library for data visualization.
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
     * The display labels for urls and other configuration for respective urls.
     * @type {object}
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
     * Native \`fetch\` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native \`open\` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native \`send\` method.
     * @type {function}
     * @private
     */

    /**
     * XMLHttpRequest native \`setRequestHeader\` method.
     * @type {function}
     * @private
     */

    /**
     * Helps to find duplicates.
     * @type {Array}
     * @private
     */

    /**
     * Returns \`true\` if busy.
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
     * Returns \`true\` if ui is required.
     * @returns {boolean}
     */

  }, {
    key: "renderUI",
    get: function get() {
      return this._renderUI;
    }
    /**
     * Shows/hides UI if \`renderUI\` is set as \`true\`.
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
     * Returns \`true\` if trace each request is set.
     * @returns {boolean}
     */

  }, {
    key: "traceEachRequest",
    get: function get() {
      return this._traceEachRequest;
    }
    /**
     * Setting \`true\` will print each completed request in console or the passed reporter.
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._traceEachRequest = value;

      this._updateStorage();
    }
    /**
     * Returns \`true\` if alert on error is enabled.
     * @returns {boolean}
     */

  }, {
    key: "alertOnError",
    get: function get() {
      return this._alertOnError;
    }
    /**
     * Setting \`true\` will print error requests.
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._alertOnError = value;

      this._updateStorage();
    }
    /**
     * Returns \`true\` if printing requests that exceeds quota is enabled.
     * @returns {boolean}
     */

  }, {
    key: "alertOnExceedQuota",
    get: function get() {
      return this._alertOnExceedQuota;
    }
    /**
     * Setting \`true\` will print requests that exceeds quota.
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
     * Setting \`true\` prints the request start message.
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
     * Returns \`true\` if performance API is enabled for capturing accurate info.
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
     * Returns \`true\` if capturing fetch API is enabled.
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
     * Returns \`true\` if visualization is enabled.
     * @returns {boolean}
     */

  }, {
    key: "loadChart",
    get: function get() {
      return this._loadChart;
    }
    /**
     * Returns \`true\` if keyboard events enabled.
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
      this.setConfig(_objectSpread(_objectSpread({}, storedConfig), config)); // Listen to the \`request-end\` event to display request details based on the properties.

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
      }); // Render the widget, initialize the reporter and start monitoring.

      this._render();

      this._monkeyPatch();

      this._status = SupervisorStatus.Idle;

      this._reporter.init(this);

      this.start();

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

      this._callsSummary = [];

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
        var arg = args[0],
            query = typeof arg === 'string' ? this._prepareQuery(arg) : {
          field: 'responseStatus',
          operator: SEARCH_OPERATOR.EQUALS,
          value: arg
        };
        return this.query(query);
      }

      if (Array.isArray(args[0] || args[1] || args[2])) {
        var _this$query$search$gr, _this$query$search, _this$query;

        var _query = args[0],
            groupArgs = args[1],
            sortArgs = args[2];
        return (_this$query$search$gr = (_this$query$search = (_this$query = this.query()).search.apply(_this$query, toConsumableArray_default()(_query || []))).groupBy.apply(_this$query$search, toConsumableArray_default()(groupArgs || []))).sortBy.apply(_this$query$search$gr, toConsumableArray_default()(sortArgs || []));
      }

      if (typeof_default()(args[0]) === 'object') {
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
        return this.query(q);
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
     * Returns duplicate requests.
     * @return {Array}
     */

  }, {
    key: "duplicates",
    value: function duplicates(id) {
      if (!id) {
        var duplicateRequestIds = this._callsSummary.filter(function (r) {
          return r.count > 1;
        }).reduce(function (a, c) {
          return [].concat(toConsumableArray_default()(a), toConsumableArray_default()(c.requests));
        }, []).map(function (r) {
          return r.id;
        });

        return this.query([{
          field: 'id',
          operator: SEARCH_OPERATOR.IN,
          value: duplicateRequestIds
        }], ['pathQuery', 'method', 'payload']);
      }

      var request = this.get(id),
          url = request.url,
          method = request.method,
          payload = request.payload;

      var reqSummary = this._callsSummary.find(function (r) {
        return r.url === url && r.method === method && r.payload === payload;
      }),
          requestIds = toConsumableArray_default()(reqSummary.requests);

      requestIds.splice(requestIds.indexOf(request), 1);
      return this.query([{
        field: 'id',
        operator: SEARCH_OPERATOR.IN,
        value: requestIds.map(function (r) {
          return r.id;
        })
      }]);
    }
    /**
     * Returns true if there are duplicate requests.
     * @return {boolean}
     */

  }, {
    key: "hasDuplicates",
    value: function hasDuplicates() {
      return this.duplicates().length > 0;
    }
    /**
     * Returns the related requests.
     * @param id
     * @return {Collection}
     */

  }, {
    key: "related",
    value: function related(id) {
      var request = this.get(id);

      if (!request) {
        return null;
      }

      return this.query([{
        field: 'url',
        operator: SEARCH_OPERATOR.EQUALS,
        value: request.url
      }], ['url', 'method', 'payload']);
    }
    /**
     * Returns the parameters that exceeded quota.
     * @param request
     * @return {object}
     */

  }, {
    key: "exceededParameters",
    value: function exceededParameters(request) {
      return {
        payload: request.payloadSize > this._quota.maxPayloadSize,
        response: request.responseSize > this._quota.maxResponseSize,
        duration: request.duration > this._quota.maxDuration
      };
    }
    /**
     * Sorts the requests based on the passed arguments and print them.
     * @param {...*} sortArgs The sort parameters.
     */

  }, {
    key: "sortPrint",
    value: function sortPrint() {
      this.print(this.sort.apply(this, arguments));
    }
    /**
     * Groups the requests based on the passed fields and print them.
     * @param {...string} groupArgs The group fields.
     */

  }, {
    key: "groupPrint",
    value: function groupPrint() {
      this.print(this.group.apply(this, arguments));
    }
    /**
     * Search requests based on the passed arguments. Also, sorts and groups.
     * @param {...*} searchArgs The search arguments.
     */

  }, {
    key: "queryPrint",
    value: function queryPrint() {
      this.print(this.query.apply(this, arguments));
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
          thirdArg = args[2];

      if (typeof firstArg === 'number') {
        args.forEach(function (arg) {
          return _this2._reporter.report(_this2.get(arg));
        });
        return;
      }

      if (typeof firstArg === 'string') {
        this._reporter.report(this.query(this._prepareQuery(firstArg)));

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

      if (Array.isArray(firstArg || secondArg || thirdArg)) {
        var query = args[0],
            groupArgs = args[1],
            sortArgs = args[2];

        this._reporter.report(this.query(query, groupArgs, sortArgs));

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
     */

  }, {
    key: "printFailed",
    value: function printFailed() {
      this._reporter.report(this.failed());
    }
    /**
     * Prints requests exceeds quota.
     */

  }, {
    key: "printExceeded",
    value: function printExceeded() {
      this._reporter.report(this.exceeded());
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
     * Prints duplicate requests.
     * @param {number} [id] Request id.
     */

  }, {
    key: "printDuplicates",
    value: function printDuplicates(id) {
      this._reporter.report(this.duplicates(id));
    }
    /**
     * Compares two requests and print the differences.
     * @param id1
     * @param id2
     */

  }, {
    key: "compare",
    value: function compare(id1, id2) {
      var request1 = this.get(id1),
          request2 = this.get(id2);

      if (!request1 || !request2) {
        return;
      }

      this._reporter.printComparison(request1, request2);
    }
    /**
     * Print related requests.
     * @param id
     */

  }, {
    key: "printRelated",
    value: function printRelated(id) {
      this._reporter.report(this.related(id));
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

          _this3.setConfig(content.config);

          _this3._updateStorage();

          window.alert(Messages.IMPORTED_SUCCESS);
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
        href = "Request No,URL,Path,Type,Payload Size (bytes),Duration (ms),Status,Size (bytes),Is Error(?),Error Description,Exceeds Quota (?)\\r\\n";

        toConsumableArray_default()(collection).forEach(function (r) {
          href += "".concat(r.id, ",").concat(r.url, ",").concat(r.path, ",").concat(r.method, ",").concat(r.payloadSize || 0, ",").concat(r.duration || 0, ",").concat(r.responseStatus, ",").concat(r.responseSize, ",").concat(r.error, ",").concat(r.errorDescription, ",").concat(r.exceedsQuota, "\\r\\n");
        });

        href += "\\r\\n";
        href = "data:application/csv,".concat(encodeURIComponent(href));
        fileName = "HttpSupervisorRequestsLog.csv";
      } else {
        var content;

        if (exportConfig) {
          content = {
            config: this.getConfig()
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
        this._watches.set(watchId, this._prepareQuery(args[0]));
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
     * Returns \`true\` if the passed url is allowed to monitor.
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

      if (this._include !== null && toConsumableArray_default()(this._include).filter(function (pattern) {
        return matchesGlob(pattern, url);
      }).length === 0) {
        return false;
      }

      return true;
    }
    /**
     * Returns the configuration of supervisor.
     * @returns {object}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
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
        watches: mapToJson(this._watches),
        urlConfig: this._urlConfig
      };
    }
    /**
     * Sets the configuration of supervisor.
     * @param config
     */

  }, {
    key: "setConfig",
    value: function setConfig(config) {
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
          lockConsole = config.lockConsole,
          urlConfig = config.urlConfig;
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
      typeof_default()(watches) === 'object' && watches !== null && (this._watches = new Map(Object.entries(this._watches)));
      typeof lockConsole === 'boolean' && (this._lockConsole = lockConsole);
      typeof_default()(urlConfig) === 'object' && urlConfig !== null && (this._urlConfig = urlConfig);

      this._updateStorage();
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
      requestInfo.payloadSize = byteSize(payload ? JSON.stringify(payload) : '');
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
      var _this$_nativeOpen2;

      if (!this.busy) {
        return;
      }

      var parameters = Array.prototype.slice.call(arguments),
          xhr = parameters[0],
          method = parameters[1],
          url = parameters[2];
      parameters.shift();

      if (!this.canAllowUrl(url)) {
        var _this$_nativeOpen;

        (_this$_nativeOpen = this._nativeOpen).call.apply(_this$_nativeOpen, [xhr].concat(parameters));

        return;
      }

      var id = this._id();

      if (this._isPerformanceSupported()) {
        parameters[1] = this._appendRequestIdToUrl(url, id);
      }

      var httpRequestInfo = xhr[XHR_METADATA_KEY] || new http_request_info_HttpRequestInfo(id);
      httpRequestInfo.url = url;
      httpRequestInfo.method = method.toUpperCase();
      xhr[XHR_METADATA_KEY] = httpRequestInfo;

      (_this$_nativeOpen2 = this._nativeOpen).call.apply(_this$_nativeOpen2, [xhr].concat(parameters));
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
      var httpRequestInfo = xhr[XHR_METADATA_KEY];

      if (!httpRequestInfo || !httpRequestInfo.url || !this.canAllowUrl(httpRequestInfo.url)) {
        var _this$_nativeSend;

        (_this$_nativeSend = this._nativeSend).call.apply(_this$_nativeSend, [xhr].concat(parameters));

        return;
      } // Update the request.


      httpRequestInfo.initiatorType = InitiatorType.XHR;
      httpRequestInfo.payload = safeParse(payload);
      httpRequestInfo.payloadSize = byteSize(httpRequestInfo.payload ? JSON.stringify(httpRequestInfo.payload) : '');

      this._addRequest(httpRequestInfo); // Listen to \`onreadystatechange\` event to capture the response info.


      xhr.addEventListener('readystatechange', function () {
        if (_this5.status === SupervisorStatus.Retired) {
          return;
        }

        if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
          var headers = xhr.getAllResponseHeaders(),
              arr = headers.trim().split(/[\\r\\n]+/),
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
      var reqHeaders = httpRequestInfo.requestHeaders || new Map();
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

      this._setUrlMeta(httpRequestInfo);

      this._decrement();

      this._triggerEvent(SupervisorEvents.REQUEST_END, httpRequestInfo, xhrOrResponse);
    }
    /**
     * Sets url metadata info to request object.
     * @param request
     * @private
     */

  }, {
    key: "_setUrlMeta",
    value: function _setUrlMeta(request) {
      var pathDomain = request.pathDomain,
          method = request.method;
      var regex1 = new RegExp(/{([a-zA-Z0-9_$.]+)}/g),
          regex2 = new RegExp(/[^{}]*(?=})/g);
      var urlConfigUpdated = {};
      Object.entries(this._urlConfig).forEach(function (_ref2) {
        var _ref3 = slicedToArray_default()(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        return Object.keys(v).forEach(function (u) {
          return urlConfigUpdated["".concat(k).concat(u)] = v[u];
        });
      });
      var urlParts = pathDomain.toLowerCase().split('/');
      var matchedEntry = Object.keys(urlConfigUpdated).find(function (u) {
        u = u.replace(regex1, '*').toLowerCase();
        var uParts = u.split('/');
        var isMatch = true;

        for (var i = 0; i < urlParts.length; i++) {
          if (uParts[i] !== '*' && uParts[i] !== urlParts[i]) {
            isMatch = false;
            break;
          }
        }

        return isMatch;
      });

      if (!matchedEntry) {
        return {};
      }

      var matchedValue = urlConfigUpdated[matchedEntry];

      if (typeof matchedValue === 'string') {
        request.label = matchedValue;
      } else if (typeof_default()(matchedValue) === 'object' && matchedEntry !== null) {
        request.category = matchedValue.category;
        matchedValue.tags && (request.tags = new Set(matchedValue.tags));

        if (matchedValue.hasOwnProperty(method)) {
          var t = matchedValue[method];

          if (typeof t === 'string') {
            request.label = t;
          } else {
            request.label = t.label;
            request.labelPending = t.labelPending;
            request.errorLabel = t.error;
          }
        } else {
          request.label = matchedValue.label;
          request.labelPending = matchedValue.labelPending;
          request.errorLabel = matchedValue.error;
        }
      }

      var matchedEntryParts = matchedEntry.split('/'),
          tokensObj = {};
      matchedEntryParts.forEach(function (part, i) {
        if (!regex1.test(part)) {
          return;
        }

        var _part$match = part.match(regex2),
            _part$match2 = slicedToArray_default()(_part$match, 1),
            token = _part$match2[0];

        tokensObj[token] = urlParts[i];
      });

      var replaceTokens = function replaceTokens(str) {
        toConsumableArray_default()(str.matchAll(regex1)).forEach(function (_ref4) {
          var _ref5 = slicedToArray_default()(_ref4, 2),
              part1 = _ref5[0],
              part2 = _ref5[1];

          if (part2.startsWith('$response') && request.response) {
            var val = readValue(request.response, part2.replace(/\\$response./, ''));
            val !== null && val !== undefined && (request.label = request.label.replaceAll(part1, val));
          } else if (part2.startsWith('$payload') && request.payload) {
            var _val = readValue(request.response, part2.replace(/\\$payload./, ''));

            _val !== null && _val !== undefined && (request.label = request.label.replaceAll(part1, _val));
          } else if (part2.startsWith('$query')) {
            var queryParams = new Map(new URLSearchParams(request.query));

            var _val2 = queryParams.get(part2.replace(/\\$query./, ''));

            _val2 !== null && _val2 !== undefined && (request.label = request.label.replaceAll(part1, _val2));
          } else {
            tokensObj.hasOwnProperty(part2) && (request.label = request.label.replaceAll(part1, tokensObj[part2]));
          }
        });
      };

      request.label && replaceTokens(request.label);
      request.labelPending && replaceTokens(request.labelPending);
    }
    /**
     * Add the request to the summary request which helps to find duplicates.
     * @param request
     * @private
     */

  }, {
    key: "_addToCallsSummary",
    value: function _addToCallsSummary(request) {
      var url = request.url,
          method = request.method,
          payload = request.payload,
          reqSummary = this._callsSummary.find(function (r) {
        return r.url === url && r.method === method && r.payload === payload;
      });

      if (reqSummary) {
        reqSummary.count += 1;
        reqSummary.requests.push(request);
      } else {
        this._callsSummary.push({
          url: url,
          method: method,
          payload: payload,
          count: 1,
          requests: [request]
        });
      }
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

      this._setUrlMeta(request);

      this._addToCallsSummary(request);

      this._increment();
    }
    /**
     * Returns true if \`performance.getEntriesByType\` is supported.
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

      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getConfig()));
      [SupervisorStatus.Idle, SupervisorStatus.Busy].has(this._status) && this._triggerEvent(SupervisorEvents.CONFIG_CHANGE, this.getConfig());
    }
    /**
     * Returns \`true\` if the request matches the arguments.
     */

  }, {
    key: "_matchWatch",
    value: function _matchWatch(argsArray, request) {
      return matchCriteria(argsArray, request);
    }
    /**
     * Prepares query if input is string.
     * @param str
     */

  }, {
    key: "_prepareQuery",
    value: function _prepareQuery(str) {
      var query;

      if (REQUEST_TYPE.hasOwnProperty(str)) {
        query = {
          field: 'method',
          operator: SEARCH_OPERATOR.EQUALS,
          value: str
        };
      } else if (str.toLowerCase().startsWith('label:')) {
        query = {
          field: 'label',
          operator: SEARCH_OPERATOR.CONTAINS,
          value: str.replace(/label:/, '')
        };
      } else if (str.startsWith('category:')) {
        query = {
          field: 'category',
          operator: SEARCH_OPERATOR.CONTAINS,
          value: str.replace(/category:/, '')
        };
      } else if (str.indexOf('*') > -1) {
        query = {
          field: 'url',
          operator: SEARCH_OPERATOR.MATCHES,
          value: str
        };
      } else {
        query = {
          field: isAbsolute(str) ? 'url' : 'path',
          operator: SEARCH_OPERATOR.CONTAINS,
          value: str
        };
      }

      return query;
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
template.innerHTML = "\\n<style>\\n  :host {\\n    --color: #eee;\\n    --bg-color: #333;\\n    --hover-color: #5ab7fa;\\n    --disabled-color: #ccc;\\n    --border-color: #666;\\n    --font-size: 12px;\\n    --index: 20000;\\n    --popover-width: 350px;\\n    --box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\\n    color: var(--color);\\n    font-family: Arial, \\"Helvetica Neue\\", Helvetica, sans-serif;\\n  }\\n\\n  .http-supervisor-container {\\n    position: fixed;\\n    top: 0;\\n    right: calc(50% - 91px);\\n    z-index: var(--index);\\n    display: flex;\\n    justify-content: center;\\n    align-items:center;\\n    background-color: var(--bg-color);\\n    border: solid 1px var(--border-color);\\n    border-bottom-left-radius: 5px;\\n    border-bottom-right-radius: 5px;\\n    font-size: var(--font-size);\\n    box-sizing: border-box;\\n    color: var(--font-color);\\n    box-shadow: var(--box-shadow);\\n  }\\n\\n   button, button:active, button:focus, button:hover, span {\\n    width: 30px;\\n    height: 26px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: none;\\n    box-sizing: border-box;\\n    background: none;\\n    box-shadow: none;\\n    outline: none;\\n  }\\n\\n  button:not(:disabled) {\\n    cursor:pointer;\\n  }\\n\\n  button svg {\\n    color: var(--color);\\n  }\\n\\n  button:disabled svg {\\n    color: var(--disabled-color);\\n  }\\n\\n  button:not(:disabled):hover svg {\\n    color: var(--hover-color);\\n  }\\n\\n  button, span, button:hover {\\n    border-right: solid 1px var(--border-color);\\n  }\\n\\n  .counts-label {\\n    width: auto;\\n    padding: 0 8px;\\n  }\\n\\n  .popover-overlay {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    content: ' ';\\n    display: none;\\n  }\\n\\n  .popover-content {\\n    position: fixed;\\n    top: 38px;\\n    width: var(--popover-width);\\n    background-color: var(--bg-color);\\n    right: calc(50% - 216px);\\n    border-radius: 6px;\\n    padding: 20px;\\n    font-size: var(--font-size);\\n    box-shadow: var(--box-shadow);\\n    z-index: var(--index);\\n    display: none;\\n  }\\n\\n  .popover-content .popover-close {\\n    position: absolute;\\n    right: 8px;\\n    top: 8px;\\n  }\\n\\n  .active {\\n    display: block;\\n  }\\n\\n  .popover-content:before {\\n    position: absolute;\\n    z-index: -1;\\n    content: \\"\\";\\n    right: calc(50% - 65px);\\n    top: -10px;\\n    border-style: solid;\\n    border-width: 0 10px 10px 10px;\\n    border-color: transparent transparent var(--bg-color) transparent;\\n  }\\n\\n  .popover-content input[type=\\"number\\"], .popover-content input[type=\\"text\\"] {\\n    background-color: transparent;\\n    color: var(--color);\\n    outline: none;\\n    border: none;\\n    border-bottom: solid 1px var(--border-color);\\n    font-size: var(--font-size);\\n    width: 60px;\\n  }\\n\\n  .popover-content form {\\n    margin-bottom: 0;\\n  }\\n\\n  .popover-content form div {\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  .popover-content h4 {\\n    margin: 0;\\n    margin-bottom: 8px;\\n    color: var(--disabled-color);\\n    text-transform: uppercase;\\n    font-size: 8px;\\n    letter-spacing: 1px;\\n  }\\n\\n  .popover-content fieldset {\\n    display: grid;\\n    grid-template-columns: 50% 50%;\\n    grid-column-gap: 5px;\\n    grid-row-gap: 4px;\\n    border: dashed 1px var(--border-color);\\n    margin-bottom: 15px;\\n    padding: 6px 12px;\\n  }\\n\\n  .popover-content .first div label {\\n    width: 140px;\\n  }\\n\\n  .popover-content .second div label {\\n    width: 80px;\\n  }\\n\\n  .popover-content .third {\\n    display: flex;\\n    border: none;\\n    padding: 0;\\n  }\\n\\n  .popover-content button {\\n    border: solid 1px var(--border-color);\\n  }\\n\\n  .popover-content .fourth {\\n    margin-bottom: 0;\\n    display: none;\\n  }\\n\\n  .popover-content .fourth.active {\\n    display: grid;\\n  }\\n  \\n  .fourth .span2 {\\n    grid-column: 1 / span 2;\\n  }\\n\\n  .advanced-container {\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  .advanced-container svg {\\n    width: 10px;\\n    height: 10px;\\n    position: relative;\\n    top: -5px;\\n    margin-left: 5px;\\n  }\\n</style>\\n<div class=\\"http-supervisor-container\\">\\n   <button>\\n      <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" fill=\\"currentColor\\" class=\\"bi bi-play\\" viewBox=\\"0 0 16 16\\">\\n       <path d=\\"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z\\"/>\\n    </svg>\\n   </button>\\n   <button style=\\"display: none;\\">\\n      <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"14\\" height=\\"14\\" fill=\\"currentColor\\" class=\\"bi bi-stop-circle\\" viewBox=\\"0 0 16 16\\">\\n        <path d=\\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\\"/>\\n        <path d=\\"M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z\\"/>\\n      </svg>\\n   </button>\\n   <button disabled>\\n    <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-eye\\" viewBox=\\"0 0 16 16\\">\\n      <path d=\\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\\"/>\\n      <path d=\\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\\"/>\\n    </svg>\\n   </button>\\n   <button disabled>\\n      <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"currentColor\\" class=\\"bi bi-trash\\" viewBox=\\"0 0 16 16\\">\\n        <path d=\\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\\"/>\\n        <path fill-rule=\\"evenodd\\" d=\\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\\"/>\\n      </svg>\\n   </button>\\n   <button disabled>\\n      <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"currentColor\\" class=\\"bi bi-box-arrow-up\\" viewBox=\\"0 0 16 16\\">\\n        <path fill-rule=\\"evenodd\\" d=\\"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z\\"/>\\n        <path fill-rule=\\"evenodd\\" d=\\"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z\\"/>\\n      </svg>\\n  </button>\\n   <span class=\\"counts-label\\">\\n     0 / 0\\n   </span>\\n   <button style=\\"border:none;\\">\\n     <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"currentColor\\" class=\\"bi bi-three-dots-vertical\\" viewBox=\\"0 0 16 16\\">\\n     <path d=\\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\\"/>\\n   </svg>\\n   </button>\\n</div>\\n<div class=\\"popover\\">\\n  <div class=\\"popover-overlay\\"></div>\\n  <div class=\\"popover-content\\">\\n    <a href=\\"#\\" class=\\"popover-close\\">\\n      <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"#ccc\\" class=\\"bi bi-x-circle-fill\\" viewBox=\\"0 0 16 16\\">\\n      <path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\\"/>\\n    </svg>\\n    </a>\\n    <form>\\n      <h4>Options</h4>\\n      <fieldset class=\\"first\\">\\n        <div>\\n          <label>Silent:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Trace Request:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Alert Error:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Alert Quota Exceed:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Alert Request Start:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Lock Console:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n      </fieldset>\\n\\n      <h4>Quota</h4>\\n      <fieldset class=\\"second\\">\\n        <div>\\n          <label>Payload:</label>\\n          <input type=\\"number\\" min=\\"1\\" />\\n        </div>\\n        <div>\\n          <label>Response:</label>\\n          <input type=\\"number\\" min=\\"1\\" />\\n        </div>\\n        <div>\\n          <label>Duration:</label>\\n          <input type=\\"number\\" min=\\"1\\" />\\n        </div>\\n      </fieldset>\\n\\n      <h4>Visualization</h4>\\n      <fieldset class=\\"third\\">\\n        <button title=\\"Response Size Chart\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bar-chart-fill\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\\"/>\\n            </svg>\\n        </button>\\n        <button title=\\"Response Duration Chart\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bar-chart-fill\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\\"/>\\n            </svg>\\n        </button>\\n        <button title=\\"Response Size And Duration Chart\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-bar-chart-fill\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z\\"/>\\n            </svg>\\n        </button>\\n        <button title=\\"Response Size Distribution\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-pie-chart-fill\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z\\"/>\\n            </svg>\\n        </button>\\n      </fieldset>\\n\\n      <div class=\\"advanced-container\\">\\n        <h4>Advanced</h4>\\n        <svg style=\\"cursor:pointer\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-chevron-double-down expand\\" viewBox=\\"0 0 16 16\\">\\n          <path fill-rule=\\"evenodd\\" d=\\"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\\"/>\\n          <path fill-rule=\\"evenodd\\" d=\\"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\\"/>\\n        </svg>\\n        <svg style=\\"cursor:pointer; display: none\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-chevron-double-up collapse\\" viewBox=\\"0 0 16 16\\">\\n          <path fill-rule=\\"evenodd\\" d=\\"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z\\"/>\\n          <path fill-rule=\\"evenodd\\" d=\\"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\\"/>\\n        </svg>\\n      </div>\\n\\n      <fieldset class=\\"fourth\\">\\n        <div class=\\"span2\\">\\n          <label>Include:</label>\\n          <input type=\\"text\\" style=\\"flex-grow: 1\\" />\\n        </div>\\n        <div class=\\"span2\\">\\n          <label>Exclude:</label>\\n          <input type=\\"text\\" style=\\"flex-grow: 1\\" />\\n        </div>\\n        <div>\\n          <label>Keyboard Events:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Persist Config:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div>\\n          <label>Use Performance:</label>\\n          <input type=\\"checkbox\\" />\\n        </div>\\n        <div style=\\"grid-column: span 2;\\">\\n          <button title=\\"Import Configuration\\" style=\\"margin-right: 5px;\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"currentColor\\" class=\\"bi bi-box-arrow-down\\" viewBox=\\"0 0 16 16\\">\\n              <path fill-rule=\\"evenodd\\" d=\\"M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z\\"/>\\n              <path fill-rule=\\"evenodd\\" d=\\"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z\\"/>\\n            </svg>\\n          </button>\\n          <button title=\\"Export Configuration\\" style=\\"margin-right: 5px;\\">\\n             <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" fill=\\"currentColor\\" class=\\"bi bi-box-arrow-up\\" viewBox=\\"0 0 16 16\\">\\n              <path fill-rule=\\"evenodd\\" d=\\"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z\\"/>\\n              <path fill-rule=\\"evenodd\\" d=\\"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z\\"/>\\n            </svg>\\n          </button>\\n          <button title=\\"Apply Changes\\" style=\\"margin-right: 5px;\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-check2\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z\\"/>\\n            </svg>\\n          </button>\\n          <button title=\\"Reset Changes\\">\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" class=\\"bi bi-x\\" viewBox=\\"0 0 16 16\\">\\n              <path d=\\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\\"/>\\n            </svg>\\n          </button>\\n        </div>\\n        <div style=\\"grid-column: span 2;\\">\\n          <textarea rows=\\"10\\" style=\\"width: 100%;resize: vertical; font-size: 0.7rem;border-radius: 5px;\\"></textarea>\\n        </div>\\n      </fieldset>\\n    </form>\\n  </div>\\n</div>\\n";
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
        return _this._httpSupervisor.alertOnRequestStart = ctrl.checked;
      });

      this._el.subscribe('importConfig', function () {
        return _this._httpSupervisor["import"]();
      });

      this._el.subscribe('exportConfig', function () {
        return _this._httpSupervisor["export"]('json', true);
      });

      this._el.subscribe('applyConfig', function () {
        return _this._httpSupervisor.setConfig(_this._el.config);
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
        alertOnRequestStart: alertOnRequestStart,
        config: this._httpSupervisor.getConfig()
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

    defineProperty_default()(assertThisInitialized_default()(_this2), "_importConfigButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_exportConfigButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_applyConfigButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_resetConfigButton", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_configTextArea", null);

    defineProperty_default()(assertThisInitialized_default()(_this2), "_config", null);

    _this2._handleKeyPress = _this2._handleKeyPress.bind(assertThisInitialized_default()(_this2));

    var shadowRoot = _this2.attachShadow({
      mode: 'closed'
    });

    shadowRoot.appendChild(template.content.cloneNode(true));
    _this2._popover = shadowRoot.querySelector('.popover-content');

    var _ref = [].concat(toConsumableArray_default()(Array.from(shadowRoot.querySelector('.http-supervisor-container').children)), toConsumableArray_default()(Array.from(_this2._popover.querySelectorAll('input,button,textarea'))));

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
    _this2._importConfigButton = _ref[25];
    _this2._exportConfigButton = _ref[26];
    _this2._applyConfigButton = _ref[27];
    _this2._resetConfigButton = _ref[28];
    _this2._configTextArea = _ref[29];
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
      alertRequestStartChange: _this2._alertRequestStartCheckbox,
      importConfig: _this2._importConfigButton,
      exportConfig: _this2._exportConfigButton,
      applyConfig: _this2._applyConfigButton
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

    _this2._resetConfigButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this2._configTextArea.value = _this2._config;
    });

    return _this2;
  }

  createClass_default()(HtmlSupervisorWidgetElement, [{
    key: "config",
    get: // Panel Controls
    // Popover Controls
    function get() {
      return this._config;
    }
  }, {
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
          alertOnRequestStart = _ref2.alertOnRequestStart,
          config = _ref2.config;
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
      this._configTextArea.value = this._config = JSON.stringify(config, null, 2);
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

        if (evt === 'applyConfig') {
          _this3._config = JSON.parse(_this3._configTextArea.value);
        }

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(12);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./src/console-snapshot.js
var console_snapshot = __webpack_require__(26);

// CONCATENATED MODULE: ./src/console-reporter.js








function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







/**
 * Class that is responsible for displaying the requests info to console.
 */

var console_reporter_ConsoleReporter = /*#__PURE__*/function () {
  /**
   * Http supervisor.
   * @type {HttpSupervisor}
   * @private
   */

  /**
   * True to lock console.
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
   * Native console object.
   * @type {Console}
   * @private
   */

  /**
   * True to enable slow writing to console to avoid choking it.
   * @type {boolean}
   * @private
   */

  /**
   * Number of ms to wait before writing the object to console.
   * @type {number}
   * @private
   */

  /**
   * Ctor.
   */
  function ConsoleReporter() {
    classCallCheck_default()(this, ConsoleReporter);

    defineProperty_default()(this, "_supervisor", null);

    defineProperty_default()(this, "_lockConsole", true);

    defineProperty_default()(this, "_canvasEl", null);

    defineProperty_default()(this, "_chartFontSize", 9);

    defineProperty_default()(this, "_chartHeight", 300);

    defineProperty_default()(this, "_chartWidth", 500);

    defineProperty_default()(this, "_originalConsole", window.console);

    defineProperty_default()(this, "_delayWrite", true);

    defineProperty_default()(this, "_writeDelay", 50);

    this._initChart = this._initChart.bind(this);
  }
  /**
   * Does initialization stuff.
   * @param {HttpSupervisor} httpSupervisor
   */


  createClass_default()(ConsoleReporter, [{
    key: "init",
    value: function init(httpSupervisor) {
      this._supervisor = httpSupervisor;
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
     */

  }, {
    key: "report",
    value: function () {
      var _report = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(arg1, arg2) {
        var _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_args.length === 1)) {
                  _context.next = 17;
                  break;
                }

                if (arg1) {
                  _context.next = 6;
                  break;
                }

                this.print(Messages.NO_REQUEST, 'inherit', true);
                return _context.abrupt("return");

              case 6:
                if (!(arg1 instanceof http_request_info_HttpRequestInfo || arg1 instanceof collection_Collection)) {
                  _context.next = 14;
                  break;
                }

                if (!(arg1 instanceof collection_Collection && !arg1.hasGroups && !arg1.hasItems)) {
                  _context.next = 10;
                  break;
                }

                this.print(Messages.NO_REQUESTS, 'inherit', true);
                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return this._reportObject(arg1.clone());

              case 12:
                _context.next = 16;
                break;

              case 14:
                this.printTitle(Messages.METRICS_SUMMARY);

                this._reportStats(arg1);

              case 16:
                return _context.abrupt("return");

              case 17:
                if (!(_args.length === 2 && arg1 instanceof collection_Collection)) {
                  _context.next = 25;
                  break;
                }

                if (!(!arg1.hasGroups && !arg1.hasItems)) {
                  _context.next = 21;
                  break;
                }

                this.print(Messages.NO_REQUESTS, 'inherit', true);
                return _context.abrupt("return");

              case 21:
                this.printTitle(Messages.REQUESTS_INFO);
                _context.next = 24;
                return this._reportObject(arg1.clone());

              case 24:
                return _context.abrupt("return");

              case 25:
                if (!(!arg2.hasGroups && !arg2.hasItems)) {
                  _context.next = 28;
                  break;
                }

                this.print(Messages.NO_REQUESTS, 'inherit', true);
                return _context.abrupt("return");

              case 28:
                this.printTitle(Messages.METRICS_SUMMARY);

                this._reportStats(arg1);

                this["break"]();
                this.printTitle(Messages.REQUESTS_INFO);
                _context.next = 34;
                return this._reportObject(arg2.clone());

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function report(_x, _x2) {
        return _report.apply(this, arguments);
      }

      return report;
    }()
    /**
     * Compare the requests and print the results.
     * @param req1
     * @param req2
     */

  }, {
    key: "printComparison",
    value: function printComparison(req1, req2) {
      this.printTitle("Comparing Requests ".concat(req1.id, " and ").concat(req2.id));
      this.printKeyValue('Property', 'Url');
      this.printKeyValue('Request 1', req1.url);
      this.printKeyValue('Request 2', req2.url);
      this.printKeyValue('Same', req1.url === req2.url ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Payload');
      this.printKeyValue('Request 1', req1.payload || '-');
      this.printKeyValue('Request 2', req2.payload || '-');
      this.printKeyValue('Same', JSON.stringify(req1.payload) === JSON.stringify(req2.payload) ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Payload Size');
      this.printKeyValue('Request 1', req1.payloadSize || '-');
      this.printKeyValue('Request 2', req2.payloadSize || '-');
      this.printKeyValue('Same', req1.payloadSize === req2.payloadSize ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Response');
      this.printKeyValue('Request 1', req1.response || '-');
      this.printKeyValue('Request 2', req2.response || '-');
      this.printKeyValue('Same', JSON.stringify(req1.response) === JSON.stringify(req2.response) ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Response Size');
      this.printKeyValue('Request 1', req1.responseSize || '-');
      this.printKeyValue('Request 2', req2.responseSize || '-');
      this.printKeyValue('Same', req1.responseSize === req2.responseSize ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Status');
      this.printKeyValue('Request 1', req1.responseStatus);
      this.printKeyValue('Request 2', req2.responseStatus);
      this.printKeyValue('Same', req1.responseStatus === req2.responseStatus ? 'Yes' : 'No');
      this["break"]();
      this.printKeyValue('Property', 'Duration');
      this.printKeyValue('Request 1', req1.duration);
      this.printKeyValue('Request 2', req2.duration);
      this.printKeyValue('Same', req1.duration === req2.duration ? 'Yes' : 'No');
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
      this.print(message, 'inherit');
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
    value: function print(message) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'inherit';
      var bold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var otherStyles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var styles = ["color: ".concat(color)];
      bold && styles.push("font-weight: bold");
      otherStyles && styles.push(otherStyles);

      this._invokeConsole('log', "%c".concat(message), styles.join(';'));
    }
    /**
     * Prints section title.
     * @param message
     * @param bgColor
     */

  }, {
    key: "printTitle",
    value: function printTitle(message) {
      var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Colors.DARK_BLUE;
      this.print(message, 'inherit', true, "padding: 5px 250px; background-color: #237aa6; color: ".concat(Colors.WHITE, ";margin-bottom: 10px;border-radius:3px;"));
    }
    /**
     * Prints row.
     * @param message
     */

  }, {
    key: "printRow",
    value: function printRow(message) {
      this.print(message, 'inherit');
    }
    /**
     * Prints field name and value.
     * @param head
     * @param value
     * @param titleWidth
     * @param valueColor
     */

  }, {
    key: "printKeyValue",
    value: function printKeyValue(head, value) {
      var titleWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
      var valueColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'inherit';

      if (value !== null && typeof_default()(value) === 'object') {
        this._invokeConsole('log', "%c".concat(this._appendTextWithSpaces(head, titleWidth), ":"), "font-weight: bold; color: inherit;", value);

        return;
      }

      this._invokeConsole('log', "%c".concat(this._appendTextWithSpaces(head, titleWidth), ": %c").concat(value), "font-weight: bold; color: inherit;", "color: ".concat(valueColor, ";"));
    }
    /**
     * Prints many fields and values in single row.
     * @param obj
     * @param titleWidth
     */

  }, {
    key: "printKeyValueMany",
    value: function printKeyValueMany(obj) {
      var _this2 = this;

      var titleWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var msgs = [];
      var styles = [];
      Object.entries(obj).forEach(function (_ref, index) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            title = _ref2[0],
            value = _ref2[1];

        msgs.push("%c".concat(index === 0 ? _this2._appendTextWithSpaces(title, titleWidth) : title, ": %c").concat(value));
        styles.push("font-weight: bold; color: inherit", "color: inherit;");
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
      this._invokeConsole('log', '\\n');
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
    key: "_appendTextWithSpaces",
    value: function _appendTextWithSpaces(title, size) {
      var equal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      title = title || '-';
      var diff = size - title.toString().length,
          halfDiff = Math.round(diff / 2);
      return equal ? "".concat(Array(halfDiff).fill(' ').join('')).concat(title).concat(Array(diff - halfDiff).fill(' ').join('')) : "".concat(title).concat(Array(diff).fill(' ').join(''));
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
    value: function () {
      var _reportObject2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(requestOrCollection) {
        var _this3 = this;

        var code;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                code = /*#__PURE__*/function () {
                  var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                    var id, pending, error, url, label, labelPending, errorLabel, category, tags, path, query, pathQuery, method, payload, payloadSize, duration, response, responseSize, responseStatus, errorDescription, initiatorType, payloadByPerformance, exceedsQuota, borderColor, requestLabel, displayUrl, duplicates, duplicatesCount, exceededParameters, statusTextColor, payloadColor, responseColor, durationColor, _iterator, _step, group, name, groupedBy, count, groupName, _iterator2, _step2, item;

                    return regenerator_default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(requestOrCollection === null)) {
                              _context2.next = 3;
                              break;
                            }

                            _this3.print(Messages.NO_REQUEST, 'inherit', true);

                            return _context2.abrupt("return");

                          case 3:
                            if (!(requestOrCollection instanceof http_request_info_HttpRequestInfo)) {
                              _context2.next = 36;
                              break;
                            }

                            id = requestOrCollection.id, pending = requestOrCollection.pending, error = requestOrCollection.error, url = requestOrCollection.url, label = requestOrCollection.label, labelPending = requestOrCollection.labelPending, errorLabel = requestOrCollection.errorLabel, category = requestOrCollection.category, tags = requestOrCollection.tags, path = requestOrCollection.path, query = requestOrCollection.query, pathQuery = requestOrCollection.pathQuery, method = requestOrCollection.method, payload = requestOrCollection.payload, payloadSize = requestOrCollection.payloadSize, duration = requestOrCollection.duration, response = requestOrCollection.response, responseSize = requestOrCollection.responseSize, responseStatus = requestOrCollection.responseStatus, errorDescription = requestOrCollection.errorDescription, initiatorType = requestOrCollection.initiatorType, payloadByPerformance = requestOrCollection.payloadByPerformance, exceedsQuota = requestOrCollection.exceedsQuota;
                            borderColor = Colors.GRAY;

                            if (pending) {
                              borderColor = Colors.LIGHT_GRAY;
                            } else if (error) {
                              borderColor = Colors.ERROR_MEDIUM;
                            } else if (exceedsQuota) {
                              borderColor = Colors.WARN_MEDIUM;
                            }

                            if (requestOrCollection.error) {
                              requestLabel = errorLabel || label;
                            } else {
                              requestLabel = pending && labelPending ? labelPending : label;
                            }

                            if (requestLabel) {
                              displayUrl = requestLabel.length < 75 ? _this3._appendTextWithSpaces(requestLabel, 75) : "".concat(requestLabel.substring(0, 72), "...");
                            } else {
                              if (pathQuery.length <= 75) {
                                displayUrl = pathQuery;
                              } else {
                                displayUrl = pathQuery.substring(0, 10) + '...' + pathQuery.substring(pathQuery.length - 62);
                              }
                            }

                            duplicates = toConsumableArray_default()(_this3._supervisor.duplicates(id)), duplicatesCount = duplicates.length + 1, exceededParameters = _this3._supervisor.exceededParameters(requestOrCollection);
                            statusTextColor = Colors.LIGHT_GRAY;

                            if (!pending) {
                              statusTextColor = error ? Colors.ERROR : Colors.SUCCESS;
                            }

                            payloadColor = exceededParameters.payload === true ? Colors.WARN_DARK : 'inherit', responseColor = exceededParameters.response === true ? Colors.WARN_DARK : 'inherit', durationColor = exceededParameters.duration === true ? Colors.WARN_DARK : 'inherit';

                            _this3._invokeConsole('groupCollapsed', "%c#".concat(_this3._appendTextWithSpaces(id, 3), " %c").concat(_this3._appendTextWithSpaces(method + ' %c', 9, true), "  %c").concat(_this3._appendTextWithSpaces(displayUrl, 80), " %c").concat(_this3._appendTextWithSpaces(pending ? '-' : responseStatus, 5), " %c").concat(_this3._appendTextWithSpaces(pending ? '-' : formatBytes(responseSize), 10), " %c").concat(_this3._appendTextWithSpaces(pending ? '-' : formatTime(duration), 10), " ").concat(duplicatesCount > 1 ? '%c' + duplicatesCount + '' : '%c'), "color: ".concat(Colors.GRAY, "; padding: 5px; border-left: solid 4px ").concat(borderColor, "; font-size: 0.6rem;"), "color: ".concat(Colors.WHITE, ";background-color: ").concat(pending ? Colors.LIGHT_BLUE : Colors.DARK_BLUE, ";padding: 3px 10px;border-radius:3px;"), "", "color: inherit;", "color: ".concat(statusTextColor), "color: ".concat(responseColor), "color: ".concat(durationColor), "background-color:".concat(Colors.YELLOW, ";color: #666;font-size:0.6rem;padding: 3px;"));

                            _this3.printKeyValue(Messages.REQUEST_NO, id);

                            category && _this3.printKeyValue(Messages.CATEGORY, category);
                            tags.size > 0 && _this3.printKeyValue(Messages.TAGS, toConsumableArray_default()(tags).join(', '));

                            _this3.printKeyValue(Messages.URL, url);

                            _this3.printKeyValue(Messages.PATH, path);

                            _this3.printKeyValue(Messages.QUERY, query || '-');

                            _this3.printKeyValue(Messages.METHOD, method);

                            _this3.printKeyValue(Messages.PAYLOAD, payload || '-');

                            _this3.printKeyValue(Messages.PAYLOAD_SIZE, formatBytes(payloadSize), 30, payloadColor);

                            _this3.printKeyValue(Messages.DURATION, pending ? '-' : formatTime(duration), 30, durationColor);

                            _this3.printKeyValue(Messages.RESPONSE, response || '-');

                            _this3.printKeyValue(Messages.RESPONSE_SIZE, pending ? '-' : formatBytes(responseSize), 30, responseColor);

                            _this3.printKeyValue(Messages.RESPONSE_STATUS, pending ? '-' : responseStatus, 30, statusTextColor);

                            _this3.printKeyValue(Messages.IS_ERROR, pending ? '-' : error ? 'Yes' : 'No');

                            _this3.printKeyValue(Messages.ERROR_DESC, errorDescription || '-');

                            _this3.printKeyValue(Messages.EXCEEDS_QUOTA, pending ? '-' : exceedsQuota ? 'Yes' : 'No');

                            _this3.printKeyValue(Messages.INITIATOR_TYPE, initiatorType);

                            _this3.printKeyValue(Messages.PAYLOAD_SIZE_BY_PERFORMANCE, pending ? '-' : payloadByPerformance ? 'Yes' : 'No');

                            _this3.printKeyValue(Messages.HAS_DUPLICATES, duplicatesCount > 1);

                            duplicatesCount > 1 && _this3.printKeyValue(Messages.DUPLICATE_REQUESTS, duplicates.map(function (r) {
                              return r.id;
                            }).join(', '));

                            _this3._invokeConsole('groupEnd');

                            return _context2.abrupt("return");

                          case 36:
                            if (!(!requestOrCollection.hasItems && !requestOrCollection.hasGroups)) {
                              _context2.next = 38;
                              break;
                            }

                            return _context2.abrupt("return");

                          case 38:
                            if (!requestOrCollection.hasGroups) {
                              _context2.next = 60;
                              break;
                            }

                            _iterator = _createForOfIteratorHelper(requestOrCollection.groups);
                            _context2.prev = 40;

                            _iterator.s();

                          case 42:
                            if ((_step = _iterator.n()).done) {
                              _context2.next = 51;
                              break;
                            }

                            group = _step.value;
                            name = group.name, groupedBy = group.groupedBy, count = group.count;

                            if (typeof name === 'undefined') {
                              _this3.groupStart("- %c[".concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
                            } else if (name !== null && typeof_default()(name) === 'object') {
                              _this3.groupStart("".concat(groupedBy, ": %c[").concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"), name);
                            } else {
                              groupName = name;

                              if (typeof name === 'number') {
                                if (['payloadSize', 'responseSize'].has(groupedBy)) {
                                  groupName = formatBytes(name);
                                } else if (groupedBy === 'duration') {
                                  groupName = formatTime(name);
                                }
                              }

                              _this3.groupStart("".concat(groupName, " %c- [").concat(count, "]"), "font-size: 0.6rem; color: ".concat(Colors.GRAY, ";"));
                            }

                            _context2.next = 48;
                            return _this3._reportObject(group);

                          case 48:
                            _this3.groupEnd();

                          case 49:
                            _context2.next = 42;
                            break;

                          case 51:
                            _context2.next = 56;
                            break;

                          case 53:
                            _context2.prev = 53;
                            _context2.t0 = _context2["catch"](40);

                            _iterator.e(_context2.t0);

                          case 56:
                            _context2.prev = 56;

                            _iterator.f();

                            return _context2.finish(56);

                          case 59:
                            return _context2.abrupt("return");

                          case 60:
                            _iterator2 = _createForOfIteratorHelper(requestOrCollection.items);
                            _context2.prev = 61;

                            _iterator2.s();

                          case 63:
                            if ((_step2 = _iterator2.n()).done) {
                              _context2.next = 69;
                              break;
                            }

                            item = _step2.value;
                            _context2.next = 67;
                            return _this3._reportObject(item);

                          case 67:
                            _context2.next = 63;
                            break;

                          case 69:
                            _context2.next = 74;
                            break;

                          case 71:
                            _context2.prev = 71;
                            _context2.t1 = _context2["catch"](61);

                            _iterator2.e(_context2.t1);

                          case 74:
                            _context2.prev = 74;

                            _iterator2.f();

                            return _context2.finish(74);

                          case 77:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[40, 53, 56, 59], [61, 71, 74, 77]]);
                  }));

                  return function code() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                if (this._delayWrite) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", code());

              case 3:
                return _context4.abrupt("return", new Promise(function (res) {
                  setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
                    return regenerator_default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return code();

                          case 2:
                            res();

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  })), _this3._writeDelay);
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _reportObject(_x3) {
        return _reportObject2.apply(this, arguments);
      }

      return _reportObject;
    }()
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
});http.init();`;
    (document.head || document.documentElement).appendChild(script);
  }

  function uninstall() {
    window.dispatchEvent(new CustomEvent('retire-supervisor'));
    const script = document.querySelector('#supervisor-script');
    script && script.remove();
  }

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request) {
        install();
      } else {
        uninstall();
      }
    }
  );

  chrome.storage.local.get(['supervisor_domain_status'], function(result) {
    const domainStatus = result['supervisor_domain_status'] || {};

    if (domainStatus[window.location.host] === true) {
      install();
    } else {
      uninstall();
    }
  });
})();
