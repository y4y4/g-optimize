(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GOptimizer"] = factory();
	else
		root["GOptimizer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function Base(className) {
    _classCallCheck(this, Base);

    console.log("Class " + className + " successfully loaded.");
};

exports.default = Base;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(0);

var _Base3 = _interopRequireDefault(_Base2);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = function (_Base) {
    _inherits(Element, _Base);

    /**
     * Creates an instance of Element.
     * @param {string} selector
     * @param {'single' | 'all'} [type='single']
     * @memberof Element
     */
    function Element(selector) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'single';

        _classCallCheck(this, Element);

        var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, Element.name));

        _this.nativeElement = _this.initNative(selector, type);
        _this.exists = !!_this.nativeElement;
        return _this;
    }

    _createClass(Element, [{
        key: "initNative",
        value: function initNative(selector, type) {
            switch (type) {
                case 'single':
                    return document.querySelector(selector);
                case 'all':
                    return document.querySelectorAll(selector);
                default:
                    return null;
            }
        }
    }, {
        key: "addClass",
        value: function addClass() {
            var _nativeElement$classL;

            (_nativeElement$classL = this.nativeElement.classList).add.apply(_nativeElement$classL, arguments);
        }
    }, {
        key: "removeClass",
        value: function removeClass() {
            var _nativeElement$classL2;

            (_nativeElement$classL2 = this.nativeElement.classList).remove.apply(_nativeElement$classL2, arguments);
        }
    }, {
        key: "addStyle",
        value: function addStyle(styles) {
            var _this2 = this;

            Object.keys(styles).forEach(function (key) {
                _this2.nativeElement.style[key] = styles[key];
            });
        }
    }]);

    return Element;
}(_Base3.default);

exports.default = Element;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var checkRequired = exports.checkRequired = function checkRequired(param) {
    throw new Error("Missing parameter: " + param);
};

var transfromStyle = exports.transfromStyle = function transfromStyle(style) {
    return style.replace(/-([a-z])/g, function (x, up) {
        return up.toUpperCase();
    });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Page = __webpack_require__(4);

var _Page2 = _interopRequireDefault(_Page);

var _Element = __webpack_require__(1);

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Page: _Page2.default,
    Element: _Element2.default
};
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(0);

var _Base3 = _interopRequireDefault(_Base2);

var _Element = __webpack_require__(1);

var _Element2 = _interopRequireDefault(_Element);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Base) {
    _inherits(Page, _Base);

    /**
     * Creates an instance of Page.
     * @param {string} url
     * @param {equal | unequal | starts | contains} rule 
     * @param {} elements 
     * @memberof Page
     */
    function Page() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.checkRequired)('url');
        var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _util.checkRequired)('rule');

        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, Page.name));

        _this.url = url;
        _this.rule = rule;
        _this.root = new _Element2.default('body', 'single');
        _this.elements = {};
        _this.active = _this.isActive(url, rule);
        return _this;
    }

    _createClass(Page, [{
        key: "isActive",
        value: function isActive(url, rule) {
            var currentUrl = window.location.href;
            switch (rule) {
                case 'equal':
                    return currentUrl === url;
                case 'unequal':
                    return currentUrl !== url;
                case 'starts':
                    return currentUrl.startsWith(url);
                case 'contains':
                    return currentUrl.indexOf(url) !== -1;
                default:
                    return false;
            }
        }
    }, {
        key: "addElement",
        value: function addElement() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.checkRequired)('selector');
            var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _util.checkRequired)('key');
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'single';

            var element = new _Element2.default(selector, type);
            if (element.exists) {
                this.elements = Object.assign(this.elements, _defineProperty({}, key, element));
                return element;
            } else {
                throw new Error("Not found elemnent with selector: " + selector);
            }
        }
    }]);

    return Page;
}(_Base3.default);

exports.default = Page;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=g-optimize.js.map