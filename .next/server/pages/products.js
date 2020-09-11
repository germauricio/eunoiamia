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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Link.jsx":
/*!*****************************!*\
  !*** ./components/Link.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Link({\n  path,\n  title,\n  linkClass\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleClick = e => {\n    e.preventDefault();\n    router.push(path);\n  };\n\n  return __jsx(\"a\", {\n    href: path,\n    onClick: handleClick,\n    className: linkClass\n  }, title);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsuanN4PzAxZWIiXSwibmFtZXMiOlsiTGluayIsInBhdGgiLCJ0aXRsZSIsImxpbmtDbGFzcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWU7QUFBQ0MsTUFBRDtBQUFPQyxPQUFQO0FBQWNDO0FBQWQsQ0FBZixFQUF5QztBQUNwRCxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1DLFdBQVcsR0FBSUMsQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUosVUFBTSxDQUFDSyxJQUFQLENBQVlSLElBQVo7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBZSxXQUFPLEVBQUVLLFdBQXhCO0FBQXFDLGFBQVMsRUFBRUg7QUFBaEQsS0FDR0QsS0FESCxDQURGO0FBS0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmsuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsgKHtwYXRoLCB0aXRsZSwgbGlua0NsYXNzfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcm91dGVyLnB1c2gocGF0aClcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtwYXRofSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtsaW5rQ2xhc3N9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbn0gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Link.jsx\n");

/***/ }),

/***/ "./components/products/Product.jsx":
/*!*****************************************!*\
  !*** ./components/products/Product.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link */ \"./components/Link.jsx\");\n/* harmony import */ var _services_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cartContext */ \"./services/cartContext.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Product = ({\n  product\n}) => {\n  const {\n    cartProvider\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_services_cartContext__WEBPACK_IMPORTED_MODULE_2__[\"CartContext\"]);\n  const [cart, setCart] = cartProvider;\n\n  const addToCart = () => {\n    const cartProduct = cart.find(item => item.id == product.id);\n\n    if (cartProduct) {\n      cartProduct.quantity += 1;\n    } else {\n      const currProduct = {\n        description: product.description,\n        price: product.price,\n        quantity: 1,\n        image: product.image,\n        id: product.id\n      };\n      setCart(curr => [...curr, currProduct]);\n    }\n  };\n\n  return __jsx(\"div\", {\n    class: \"product-card\"\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: `/products/name/${product.name}`,\n    title: __jsx(\"div\", {\n      class: \"product-tumb\"\n    }, __jsx(\"img\", {\n      src: `/products/${product.image}`,\n      alt: product.name\n    })),\n    linkClass: \"product-a\"\n  }), __jsx(\"div\", {\n    className: \"product-details\"\n  }, __jsx(\"h4\", null, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: `/products/name/${product.name}`,\n    linkClass: \"product-a\",\n    title: product.description\n  })), __jsx(\"div\", {\n    className: \"product-bottom-details\"\n  }, __jsx(\"div\", {\n    className: \"product-price\"\n  }, \"$\", product.price), __jsx(\"div\", {\n    className: \"product-links\"\n  }, __jsx(\"button\", {\n    className: \"addcart\",\n    onClick: product => addToCart(product)\n  }, __jsx(\"img\", {\n    src: \"/shop.ico\",\n    height: \"30px\",\n    alt: \"carrito\"\n  }))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3QuanN4P2MyNGEiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJjYXJ0UHJvdmlkZXIiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJjYXJ0Iiwic2V0Q2FydCIsImFkZFRvQ2FydCIsImNhcnRQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJpZCIsInF1YW50aXR5IiwiY3VyclByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2UiLCJjdXJyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFlO0FBQzNCLFFBQU07QUFBQ0M7QUFBRCxNQUFpQkMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBakM7QUFDQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkosWUFBeEI7O0FBRUEsUUFBTUssU0FBUyxHQUFHLE1BQU07QUFDcEIsVUFBTUMsV0FBVyxHQUFHSCxJQUFJLENBQUNJLElBQUwsQ0FBVUMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV1YsT0FBTyxDQUFDVSxFQUFyQyxDQUFwQjs7QUFDQSxRQUFHSCxXQUFILEVBQWU7QUFDWEEsaUJBQVcsQ0FBQ0ksUUFBWixJQUF3QixDQUF4QjtBQUNILEtBRkQsTUFHSTtBQUNKLFlBQU1DLFdBQVcsR0FBRztBQUNoQkMsbUJBQVcsRUFBRWIsT0FBTyxDQUFDYSxXQURMO0FBRWhCQyxhQUFLLEVBQUVkLE9BQU8sQ0FBQ2MsS0FGQztBQUdoQkgsZ0JBQVEsRUFBRSxDQUhNO0FBSWhCSSxhQUFLLEVBQUVmLE9BQU8sQ0FBQ2UsS0FKQztBQUtoQkwsVUFBRSxFQUFFVixPQUFPLENBQUNVO0FBTEksT0FBcEI7QUFPSUwsYUFBTyxDQUFDVyxJQUFJLElBQUksQ0FBQyxHQUFHQSxJQUFKLEVBQVVKLFdBQVYsQ0FBVCxDQUFQO0FBQ0g7QUFDSixHQWZEOztBQWlCQSxTQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsS0FDSSxNQUFDLDZDQUFEO0FBQ0ksUUFBSSxFQUFHLGtCQUFpQlosT0FBTyxDQUFDaUIsSUFBSyxFQUR6QztBQUVJLFNBQUssRUFDRDtBQUFLLFdBQUssRUFBQztBQUFYLE9BQ0E7QUFBSyxTQUFHLEVBQUcsYUFBWWpCLE9BQU8sQ0FBQ2UsS0FBTSxFQUFyQztBQUF3QyxTQUFHLEVBQUVmLE9BQU8sQ0FBQ2lCO0FBQXJELE1BREEsQ0FIUjtBQU1JLGFBQVMsRUFBRTtBQU5mLElBREosRUFTSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksa0JBQUksTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBRyxrQkFBaUJqQixPQUFPLENBQUNpQixJQUFLLEVBQTNDO0FBQThDLGFBQVMsRUFBRyxXQUExRDtBQUFzRSxTQUFLLEVBQUVqQixPQUFPLENBQUNhO0FBQXJGLElBQUosQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLFVBQWlDYixPQUFPLENBQUNjLEtBQXpDLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBUSxhQUFTLEVBQUMsU0FBbEI7QUFBNEIsV0FBTyxFQUFJZCxPQUFELElBQWFNLFNBQVMsQ0FBQ04sT0FBRDtBQUE1RCxLQUNJO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsVUFBTSxFQUFDLE1BQTVCO0FBQW1DLE9BQUcsRUFBQztBQUF2QyxJQURKLENBREosQ0FGSixDQUZKLENBVEosQ0FESjtBQXVCSCxDQTVDRDs7QUE4Q2VELHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCB7IENhcnRDb250ZXh0LCBhZGRUb0NhcnQsIGRlY3JlYXNlUXVhbnRpdHksIGluY3JlYXNlUXVhbnRpdHkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0Q29udGV4dCc7XG5cbmNvbnN0IFByb2R1Y3QgPSAoe3Byb2R1Y3R9KSA9PiB7XG4gICAgY29uc3Qge2NhcnRQcm92aWRlcn0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTsgXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gY2FydFByb3ZpZGVyO1xuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJ0UHJvZHVjdCA9IGNhcnQuZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCk7XG4gICAgICAgIGlmKGNhcnRQcm9kdWN0KXtcbiAgICAgICAgICAgIGNhcnRQcm9kdWN0LnF1YW50aXR5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgY29uc3QgY3VyclByb2R1Y3QgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZSxcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkXG4gICAgICAgIH1cbiAgICAgICAgICAgIHNldENhcnQoY3VyciA9PiBbLi4uY3VyciwgY3VyclByb2R1Y3RdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRcIj5cbiAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIHBhdGg9e2AvcHJvZHVjdHMvbmFtZS8ke3Byb2R1Y3QubmFtZX1gfSBcbiAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXR1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmltYWdlfWB9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pn0gXG4gICAgICAgICAgICAgICAgbGlua0NsYXNzPSBcInByb2R1Y3QtYVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDQ+PExpbmsgcGF0aD17YC9wcm9kdWN0cy9uYW1lLyR7cHJvZHVjdC5uYW1lfWB9IGxpbmtDbGFzcyA9IFwicHJvZHVjdC1hXCIgdGl0bGU9e3Byb2R1Y3QuZGVzY3JpcHRpb259PjwvTGluaz48L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3R0b20tZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRjYXJ0XCIgb25DbGljaz17IChwcm9kdWN0KSA9PiBhZGRUb0NhcnQocHJvZHVjdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Nob3AuaWNvXCIgaGVpZ2h0PVwiMzBweFwiIGFsdD1cImNhcnJpdG9cIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/Product.jsx\n");

/***/ }),

/***/ "./components/products/ProductList.jsx":
/*!*********************************************!*\
  !*** ./components/products/ProductList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./components/products/Product.jsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProductList({\n  products\n}) {\n  return products.map(product => {\n    return __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      product: product\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RMaXN0LmpzeD84ZDMyIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQWtDO0FBQzdDLFNBQ0lBLFFBQVEsQ0FBQ0MsR0FBVCxDQUNLQyxPQUFELElBQWE7QUFDVCxXQUNJLE1BQUMsZ0RBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCLE1BREo7QUFHUCxHQUxELENBREo7QUFRSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdExpc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KHsgcHJvZHVjdHMgfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICBwcm9kdWN0cy5tYXAoXG4gICAgICAgICAgICAocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17cHJvZHVjdH0vPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductList.jsx\n");

/***/ }),

/***/ "./pages/products.jsx":
/*!****************************!*\
  !*** ./pages/products.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/apiService */ \"./services/apiService.js\");\n/* harmony import */ var _components_products_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/products/ProductList */ \"./components/products/ProductList.jsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Products() {\n  const {\n    0: products,\n    1: setProducts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    (async () => {\n      let gettedProducts = await Object(_services_apiService__WEBPACK_IMPORTED_MODULE_1__[\"getProducts\"])();\n      setProducts(gettedProducts);\n    })();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"container\"\n  }, products ? __jsx(_components_products_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    products: products\n  }) : __jsx(\"img\", {\n    src: \"/Rolling-1s-200px.gif\",\n    className: \"loading\",\n    alt: \"loading\"\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qc3g/ZmJlZCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldHRlZFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7QUFFQUMseURBQVMsQ0FBRSxNQUFNO0FBQ2IsS0FBQyxZQUFZO0FBQ1QsVUFBSUMsY0FBYyxHQUFHLE1BQU1DLHdFQUFXLEVBQXRDO0FBQ0FKLGlCQUFXLENBQUNHLGNBQUQsQ0FBWDtBQUNILEtBSEQ7QUFJSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsU0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0VKLFFBQVEsR0FDTixNQUFDLHdFQUFEO0FBQWEsWUFBUSxFQUFFQTtBQUF2QixJQURNLEdBR047QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBaUMsYUFBUyxFQUFDLFNBQTNDO0FBQXFELE9BQUcsRUFBQztBQUF6RCxJQUpKLENBREo7QUFTSDs7QUFFY0QsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0UHJvZHVjdHMsIGdldFByb2R1Y3RzQnlDYXRlZ29yeX0gZnJvbSAnLi4vc2VydmljZXMvYXBpU2VydmljZSc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0TGlzdCc7XG5cbmZ1bmN0aW9uIFByb2R1Y3RzKCl7XG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCBnZXR0ZWRQcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzKCk7XG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhnZXR0ZWRQcm9kdWN0cyk7ICAgICAgIFxuICAgICAgICB9KSgpXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7IHByb2R1Y3RzID8gKFxuICAgICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL1JvbGxpbmctMXMtMjAwcHguZ2lmXCIgY2xhc3NOYW1lPVwibG9hZGluZ1wiIGFsdD1cImxvYWRpbmdcIi8+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.jsx\n");

/***/ }),

/***/ "./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsByCategory, getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsByCategory\", function() { return getProductsByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProduct\", function() { return getProduct; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = \"https://eunoiamiaapi.herokuapp.com\";\nconst getProducts = async () => {\n  return (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url + '/api/products', {\n    headers: {\n      \"Access-Control-Allow-Headers\": \"*\"\n    }\n  })).data;\n};\nconst getProductsByCategory = async category => {\n  return (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url + '/api/products/category/' + category, {\n    headers: {\n      \"Access-Control-Allow-Headers\": \"*\"\n    }\n  })).data;\n};\nconst getProduct = async productName => {\n  return (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url + '/api/product/' + productName, {\n    headers: {\n      \"Access-Control-Allow-Headers\": \"*\"\n    }\n  })).data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlLmpzPzViOTAiXSwibmFtZXMiOlsidXJsIiwiZ2V0UHJvZHVjdHMiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJkYXRhIiwiZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJnZXRQcm9kdWN0IiwicHJvZHVjdE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG9DQUFaO0FBRU8sTUFBTUMsV0FBVyxHQUFHLFlBQVk7QUFDbkMsU0FBTyxDQUFDLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBRyxHQUFHLGVBQWhCLEVBQWlDO0FBQzNDSSxXQUFPLEVBQUU7QUFBQyxzQ0FBZ0M7QUFBakM7QUFEa0MsR0FBakMsQ0FBUCxFQUVIQyxJQUZKO0FBR0gsQ0FKTTtBQU1BLE1BQU1DLHFCQUFxQixHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDckQsU0FBTyxDQUFDLE1BQU1MLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBRyxHQUFHLHlCQUFOLEdBQWtDTyxRQUE1QyxFQUFzRDtBQUNoRUgsV0FBTyxFQUFFO0FBQUMsc0NBQWdDO0FBQWpDO0FBRHVELEdBQXRELENBQVAsRUFFSEMsSUFGSjtBQUdILENBSk07QUFNQSxNQUFNRyxVQUFVLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUM3QyxTQUFPLENBQUMsTUFBTVAsNENBQUssQ0FBQ0MsR0FBTixDQUFVSCxHQUFHLEdBQUcsZUFBTixHQUF3QlMsV0FBbEMsRUFDZDtBQUNJTCxXQUFPLEVBQUU7QUFBQyxzQ0FBZ0M7QUFBakM7QUFEYixHQURjLENBQVAsRUFHSEMsSUFISjtBQUlILENBTE0iLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgdXJsID0gXCJodHRwczovL2V1bm9pYW1pYWFwaS5oZXJva3VhcHAuY29tXCJcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KHVybCArICcvYXBpL3Byb2R1Y3RzJywge1xuICAgICAgICBoZWFkZXJzOiB7XCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiKlwifVxuICAgIH0pKS5kYXRhO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQodXJsICsgJy9hcGkvcHJvZHVjdHMvY2F0ZWdvcnkvJyArIGNhdGVnb3J5LCB7XG4gICAgICAgIGhlYWRlcnM6IHtcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIjogXCIqXCJ9XG4gICAgfSkpLmRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQodXJsICsgJy9hcGkvcHJvZHVjdC8nICsgcHJvZHVjdE5hbWUsIFxuICAgIHtcbiAgICAgICAgaGVhZGVyczoge1wiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIipcIn1cbiAgICB9KSkuZGF0YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/apiService.js\n");

/***/ }),

/***/ "./services/cartContext.js":
/*!*********************************!*\
  !*** ./services/cartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst CartContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst CartProvider = props => {\n  const {\n    0: cart,\n    1: setCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  return __jsx(CartContext.Provider, {\n    value: {\n      cartProvider: [cart, setCart]\n    }\n  }, props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9jYXJ0Q29udGV4dC5qcz8yOWIzIl0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwicHJvcHMiLCJjYXJ0Iiwic2V0Q2FydCIsInVzZVN0YXRlIiwiY2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFwQjtBQUVBLE1BQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQ25DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBRUEsU0FDQSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBSTtBQUFDQyxrQkFBWSxFQUFFLENBQUNILElBQUQsRUFBT0MsT0FBUDtBQUFmO0FBQS9CLEtBQ0tGLEtBQUssQ0FBQ0ssUUFEWCxDQURBO0FBS0gsQ0FSTSIsImZpbGUiOiIuL3NlcnZpY2VzL2NhcnRDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge3tjYXJ0UHJvdmlkZXI6IFtjYXJ0LCBzZXRDYXJ0XX19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/cartContext.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });