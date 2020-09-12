module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// CONCATENATED MODULE: ./components/Header.jsx
var __jsx = external_react_default.a.createElement;


const Header = () => {
  return __jsx("div", {
    class: "header"
  }, __jsx("h1", null, "Eunoia Mia"));
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./components/Link.jsx
var Link = __webpack_require__("AesL");

// CONCATENATED MODULE: ./components/Footer.jsx
var Footer_jsx = external_react_default.a.createElement;



const Footer = () => {
  return Footer_jsx("div", {
    className: "footer"
  }, Footer_jsx("div", null, Footer_jsx("a", {
    class: "icon-footer",
    href: "https://www.facebook.com/eunoia.mia"
  }, Footer_jsx("img", {
    height: "30px",
    alt: "fb icon",
    src: "/fb-icon.png"
  })), Footer_jsx("a", {
    class: "icon-footer",
    href: "https://www.instagram.com/eunoia.mia"
  }, Footer_jsx("img", {
    height: "30px",
    alt: "ig icon",
    src: "/ig-icon.png"
  }))), Footer_jsx("div", {
    class: "bottom-footer"
  }, Footer_jsx(Link["a" /* default */], {
    path: "/",
    linkClass: "bottom-footer-bar",
    title: "Inicio"
  }), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0|", Footer_jsx(Link["a" /* default */], {
    path: "/products",
    linkClass: "bottom-footer-bar",
    title: "Productos"
  }), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0|", Footer_jsx(Link["a" /* default */], {
    path: "/contact",
    linkClass: "bottom-footer-bar",
    title: "Contacto"
  })));
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./services/cartContext.js
var cartContext = __webpack_require__("KbO0");

// CONCATENATED MODULE: ./components/MenuBar.jsx
var MenuBar_jsx = external_react_default.a.createElement;




const useForceUpdate = () => Object(external_react_["useState"])()[1];

const MenuBar = () => {
  const forceUpdate = useForceUpdate();
  const {
    cartProvider
  } = Object(external_react_["useContext"])(cartContext["a" /* CartContext */]);
  const [cart, setCart] = cartProvider;
  const items = cart.reduce((acc, curr) => acc + parseInt(curr.quantity, 10), 0);
  return MenuBar_jsx("div", null, MenuBar_jsx("nav", {
    className: "menu-bar"
  }, MenuBar_jsx("input", {
    type: "checkbox",
    id: "check"
  }), MenuBar_jsx("label", {
    style: {
      float: "left"
    },
    for: "check",
    className: "checkbtn ml-3"
  }, MenuBar_jsx("img", {
    src: "/hamburguer.png",
    height: "30px",
    alt: "hamburguer"
  })), MenuBar_jsx("ul", null, MenuBar_jsx("li", null, MenuBar_jsx(Link["a" /* default */], {
    title: "Inicio",
    path: "/"
  })), MenuBar_jsx("img", {
    alt: "separator",
    src: "/separator.png",
    height: "30px"
  }), MenuBar_jsx("li", null, MenuBar_jsx(Link["a" /* default */], {
    title: "Info",
    path: "/info"
  })), MenuBar_jsx("img", {
    alt: "separator",
    src: "/separator.png",
    height: "30px"
  }), MenuBar_jsx("li", null, MenuBar_jsx("div", {
    class: "dropdown"
  }, MenuBar_jsx("button", {
    class: "dropbtn"
  }, "Productos"), MenuBar_jsx("div", {
    class: "dropdown-content"
  }, MenuBar_jsx(Link["a" /* default */], {
    path: "/products",
    title: "Todos"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/combos",
    title: "Combos"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/cuidado-capilar",
    title: "Cuidado capilar"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/cuidado-de-la-piel",
    title: "Cuidado de la piel"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/salud-bucal",
    title: "Salud bucal"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/desodorante-natural",
    title: "Desodorante natural"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/jabones-vegetales",
    title: "Jabones vegetales"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/accesorios-sustentables",
    title: "Accesorios sustentables"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/almohadillas-termicas",
    title: "Almohadillas t\xE9rmicas"
  }), MenuBar_jsx(Link["a" /* default */], {
    path: "/products/category/aromaterapia",
    title: "Aromaterapia"
  })))), MenuBar_jsx("img", {
    alt: "separator",
    src: "/separator.png",
    height: "30px"
  }), MenuBar_jsx("li", null, MenuBar_jsx(Link["a" /* default */], {
    title: "Qui\xE9nes somos",
    path: "/whoarewe"
  })), MenuBar_jsx("img", {
    alt: "separator",
    src: "/separator.png",
    height: "30px"
  }), MenuBar_jsx("li", null, MenuBar_jsx(Link["a" /* default */], {
    title: "Contacto",
    path: "/contact"
  }))), MenuBar_jsx("div", {
    className: "cart"
  }, MenuBar_jsx(Link["a" /* default */], {
    title: MenuBar_jsx("div", null, cart.length !== 0 && MenuBar_jsx("div", {
      className: "items-number"
    }, MenuBar_jsx("p", null, items)), MenuBar_jsx("img", {
      alt: "cart",
      src: "/shop.ico",
      height: "50px"
    })),
    path: "/cart"
  }))));
};

/* harmony default export */ var components_MenuBar = (MenuBar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;








function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(cartContext["b" /* CartProvider */], null, _app_jsx(head_default.a, null, _app_jsx("title", null, "Eunoia Mia")), _app_jsx(components_Header, null), _app_jsx(components_MenuBar, null), _app_jsx(Component, pageProps), _app_jsx(components_Footer, null));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "AesL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Link({
  path,
  title,
  linkClass
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const handleClick = () => {
    router.push(path);
  };

  return __jsx("a", {
    href: path,
    onClick: handleClick,
    className: linkClass
  }, title);
}

/***/ }),

/***/ "KbO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CartContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const CartProvider = props => {
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return __jsx(CartContext.Provider, {
    value: {
      cartProvider: [cart, setCart]
    }
  }, props.children);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });