module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "header__StyledHeader",
  componentId: "ot33ol-0"
})(["display:flex;padding:0 16px;height:50px;justify-content:space-between;align-items:center;background-color:#283593;"]);
var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "header__StyledLogo",
  componentId: "ot33ol-1"
})(["color:#283593;padding:10px;border-radius:50%;background-color:#fff;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "header__StyledLink",
  componentId: "ot33ol-2"
})(["margin-right:15px;color:#fff;letter-spacing:1px;"]);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLogo, null, "KB")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, null, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/resume"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, null, "Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onClickContact
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__(3);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(6);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/contact.js



var StyledContainer = external_styled_components_default.a.div.withConfig({
  displayName: "contact__StyledContainer",
  componentId: "hs6q9m-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
var StyledHeading = external_styled_components_default.a.h2.withConfig({
  displayName: "contact__StyledHeading",
  componentId: "hs6q9m-1"
})(["color:blue;"]);
var StyledForm = external_styled_components_default.a.form.withConfig({
  displayName: "contact__StyledForm",
  componentId: "hs6q9m-2"
})(["display:flex;flex-direction:column;"]);
var StyledButton = external_styled_components_default.a.button.withConfig({
  displayName: "contact__StyledButton",
  componentId: "hs6q9m-3"
})(["height:40px;border-radius:3px;background-color:#283593;color:#fff;letter-spacing:1px;"]);

var contact_Contact = function Contact() {
  return external_react_default.a.createElement(StyledContainer, null, external_react_default.a.createElement(StyledHeading, null, "Contact"), external_react_default.a.createElement(external_formik_["Formik"], {
    render: function render(props) {
      return external_react_default.a.createElement(StyledForm, {
        onSubmit: props.handleSubmit
      }, external_react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Name"), external_react_default.a.createElement("input", {
        type: "text",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.name,
        name: "name"
      }), external_react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email Address"), external_react_default.a.createElement("input", {
        type: "text",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.name,
        name: "email"
      }), external_react_default.a.createElement("label", {
        htmlFor: "message"
      }, "Message"), external_react_default.a.createElement("textarea", {
        type: "text",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.name,
        name: "message"
      }), external_react_default.a.createElement(StyledButton, {
        type: "submit"
      }, "Submit"));
    }
  }));
};

/* harmony default export */ var contact = (contact_Contact);
// CONCATENATED MODULE: ./components/modal.js



var StyledDiv = external_styled_components_default.a.div.withConfig({
  displayName: "modal__StyledDiv",
  componentId: "ogp4iu-0"
})(["max-width:600px;"]);

var modal_Modal = function Modal() {
  return external_react_default.a.createElement(StyledDiv, null, external_react_default.a.createElement(contact, null));
};

/* harmony default export */ var modal = (modal_Modal);
// CONCATENATED MODULE: ./pages/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var pages_index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      modalIsOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickContact", function () {
      _this.setState({
        modalIsOpen: true,
        toastIsOpen: false
      });
    });

    return _this;
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      console.error(this.props.isUnderConstruction);
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8"
      }), external_react_default.a.createElement("title", null, "Kelly Bondanza")), this.props.isUnderConstruction ? "test" : external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(header["a" /* default */], {
        onClickContact: this.handleClickContact
      }), external_react_default.a.createElement(modal, {
        isOpen: this.state.modalIsOpen
      })), "hello");
    }
  }]);

  return index;
}(external_react_["Component"]);

_defineProperty(pages_index, "defaultProps", {
  isUnderConstruction: true
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ })
/******/ ]);