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

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ \"./components/Link.jsx\");\nvar _jsxFileName = \"/Users/mauriciopauluk/Documents/eunoiamia/components/Footer.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Footer = () => {\n  return __jsx(\"div\", {\n    className: \"footer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"mr-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    class: \"icon-footer\",\n    href: \"https://www.facefook.com/eunoia.mia\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    height: \"30px\",\n    alt: \"fb icon\",\n    src: \"/fb-icon.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 21\n    }\n  })), __jsx(\"a\", {\n    class: \"icon-footer\",\n    href: \"https://www.instagram.com/eunoia.mia\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    height: \"30px\",\n    alt: \"ig icon\",\n    src: \"/ig-icon.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    class: \"bottom-footer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: \"/\",\n    linkClass: \"bottom-footer-bar\",\n    title: \"Inicio\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }), \"|\", __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: \"/products\",\n    linkClass: \"bottom-footer-bar\",\n    title: \"Productos\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }), \"|\", __jsx(_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: \"/contact\",\n    linkClass: \"bottom-footer-bar\",\n    title: \"Contacto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    class: \"madeby\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"Hecho con amor, por \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: \"https://www.linkedin.com/in/mauriciopauluk/\",\n    className: \"link text-white\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 41\n    }\n  }, \"Mauricio Pauluk\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qc3g/OWRhNSJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFNBQUssRUFBQyxhQUFUO0FBQXVCLFFBQUksRUFBQyxxQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssVUFBTSxFQUFDLE1BQVo7QUFBbUIsT0FBRyxFQUFDLFNBQXZCO0FBQWlDLE9BQUcsRUFBQyxjQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUtJO0FBQUcsU0FBSyxFQUFDLGFBQVQ7QUFBdUIsUUFBSSxFQUFDLHNDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFtQixPQUFHLEVBQUMsU0FBdkI7QUFBaUMsT0FBRyxFQUFDLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBREosRUFVSTtBQUFLLFNBQUssRUFBQyxlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFHLEdBQWI7QUFBaUIsYUFBUyxFQUFHLG1CQUE3QjtBQUFpRCxTQUFLLEVBQUMsUUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLE9BSUksTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBRyxXQUFiO0FBQXlCLGFBQVMsRUFBRyxtQkFBckM7QUFBeUQsU0FBSyxFQUFDLFdBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixPQU1JLE1BQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUcsVUFBYjtBQUF3QixhQUFTLEVBQUcsbUJBQXBDO0FBQXdELFNBQUssRUFBQyxVQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FWSixFQWtCSTtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF3QjtBQUNaLFVBQU0sRUFBQyxRQURLO0FBRVosT0FBRyxFQUFDLHFCQUZRO0FBR1osUUFBSSxFQUFDLDZDQUhPO0FBR3VDLGFBQVMsRUFBQyxpQkFIakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEIsQ0FESixDQWxCSixDQURKO0FBMkJILENBNUJEOztBQThCZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbi1mb290ZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWZvb2suY29tL2V1bm9pYS5taWFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMHB4XCIgYWx0PVwiZmIgaWNvblwiIHNyYz1cIi9mYi1pY29uLnBuZ1wiIC8+ICBcbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb24tZm9vdGVyXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXVub2lhLm1pYVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjMwcHhcIiBhbHQ9XCJpZyBpY29uXCIgc3JjPVwiL2lnLWljb24ucG5nXCIgLz4gIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayBwYXRoID0gXCIvXCIgbGlua0NsYXNzID0gXCJib3R0b20tZm9vdGVyLWJhclwiIHRpdGxlPVwiSW5pY2lvXCIvPlxuICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aCA9IFwiL3Byb2R1Y3RzXCIgbGlua0NsYXNzID0gXCJib3R0b20tZm9vdGVyLWJhclwiIHRpdGxlPVwiUHJvZHVjdG9zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGggPSBcIi9jb250YWN0XCIgbGlua0NsYXNzID0gXCJib3R0b20tZm9vdGVyLWJhclwiIHRpdGxlPVwiQ29udGFjdG9cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWRlYnlcIj5cbiAgICAgICAgICAgICAgICA8aDM+SGVjaG8gY29uIGFtb3IsIHBvciA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXVyaWNpb3BhdWx1ay9cIiBjbGFzc05hbWU9XCJsaW5rIHRleHQtd2hpdGVcIj5NYXVyaWNpbyBQYXVsdWs8L2E+PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.jsx\n");

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    onClick: () => router.push('/'),\n    class: \"header\"\n  }, __jsx(\"h1\", null, \"Eunoia Mia\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNFO0FBQ0EsV0FBTyxFQUFJLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLEdBQVosQ0FEakI7QUFFQSxTQUFLLEVBQUM7QUFGTixLQUdFLCtCQUhGLENBREY7QUFPRCxDQVREOztBQVdlSCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4oXG4gICAgPGRpdiBcbiAgICBvbkNsaWNrID0geygpID0+IHJvdXRlci5wdXNoKCcvJyl9XG4gICAgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT5FdW5vaWEgTWlhPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./components/Link.jsx":
/*!*****************************!*\
  !*** ./components/Link.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mauriciopauluk/Documents/eunoiamia/components/Link.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Link({\n  path,\n  title,\n  linkClass\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleClick = () => {\n    event.preventDefault();\n    router.push(path);\n  };\n\n  return __jsx(\"a\", {\n    href: path,\n    onClick: handleClick,\n    className: linkClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, title);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsuanN4PzAxZWIiXSwibmFtZXMiOlsiTGluayIsInBhdGgiLCJ0aXRsZSIsImxpbmtDbGFzcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZTtBQUFDQyxNQUFEO0FBQU9DLE9BQVA7QUFBY0M7QUFBZCxDQUFmLEVBQXlDO0FBQ3BELFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSixVQUFNLENBQUNLLElBQVAsQ0FBWVIsSUFBWjtBQUNELEdBSEQ7O0FBS0EsU0FDRTtBQUFHLFFBQUksRUFBRUEsSUFBVDtBQUFlLFdBQU8sRUFBRUssV0FBeEI7QUFBcUMsYUFBUyxFQUFFSCxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBREgsQ0FERjtBQUtIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MaW5rLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rICh7cGF0aCwgdGl0bGUsIGxpbmtDbGFzc30pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtwYXRofSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtsaW5rQ2xhc3N9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbn0gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Link.jsx\n");

/***/ }),

/***/ "./components/MenuBar.jsx":
/*!********************************!*\
  !*** ./components/MenuBar.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_cartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cartContext */ \"./services/cartContext.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./components/Link.jsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst MenuBar = () => {\n  const {\n    cartProvider\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_services_cartContext__WEBPACK_IMPORTED_MODULE_1__[\"CartContext\"]);\n  const [cart, setCart] = cartProvider;\n  const {\n    0: hideMenu,\n    1: setHideMenu\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('-100%');\n  const items = cart.reduce((acc, curr) => acc + parseInt(curr.quantity, 10), 0);\n\n  const handleHide = (isHamburguer = false) => {\n    if (hideMenu == '0') {\n      setHideMenu('-100%');\n    } else if (isHamburguer == true) {\n      setHideMenu('0');\n    }\n  };\n\n  return __jsx(\"div\", null, __jsx(\"nav\", {\n    className: \"menu-bar\"\n  }, __jsx(\"img\", {\n    onClick: () => handleHide(true),\n    src: \"/hamburguer.png\",\n    height: \"30px\",\n    alt: \"hamburguer\",\n    className: \"checkbtn mx-3 mt-4\"\n  }), __jsx(\"ul\", {\n    style: {\n      left: hideMenu\n    }\n  }, __jsx(\"li\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Inicio\",\n    path: \"/\"\n  })), __jsx(\"img\", {\n    alt: \"separator\",\n    src: \"/separator.png\",\n    height: \"30px\"\n  }), __jsx(\"li\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Info\",\n    path: \"/info\"\n  })), __jsx(\"img\", {\n    alt: \"separator\",\n    src: \"/separator.png\",\n    height: \"30px\"\n  }), __jsx(\"li\", null, __jsx(\"div\", {\n    class: \"dropdown\"\n  }, __jsx(\"button\", {\n    class: \"dropbtn\"\n  }, \"Productos\"), __jsx(\"div\", {\n    class: \"dropdown-content\"\n  }, __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/products\",\n    title: \"Todos\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/combos\",\n    title: \"Combos\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/cuidado-capilar\",\n    title: \"Cuidado capilar\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/cuidado-de-la-piel\",\n    title: \"Cuidado de la piel\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/cuidado-personal\",\n    title: \"Cuidado personal\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/salud-bucal\",\n    title: \"Salud bucal\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/desodorante-natural\",\n    title: \"Desodorante natural\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/jabones-vegetales\",\n    title: \"Jabones vegetales\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/accesorios-sustentables\",\n    title: \"Accesorios sustentables\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/almohadillas-termicas\",\n    title: \"Almohadillas t\\xE9rmicas\"\n  })), __jsx(\"div\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/category/aromaterapia\",\n    title: \"Aromaterapia\"\n  }))))), __jsx(\"img\", {\n    alt: \"separator\",\n    src: \"/separator.png\",\n    height: \"30px\"\n  }), __jsx(\"li\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Qui\\xE9nes somos\",\n    path: \"/whoarewe\"\n  })), __jsx(\"img\", {\n    alt: \"separator\",\n    src: \"/separator.png\",\n    height: \"30px\"\n  }), __jsx(\"li\", {\n    onClick: handleHide\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Contacto\",\n    path: \"/contact\"\n  }))), __jsx(\"div\", {\n    onClick: handleHide,\n    className: \"cart\"\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: __jsx(\"div\", null, cart.length !== 0 && __jsx(\"div\", {\n      className: \"items-number\"\n    }, __jsx(\"p\", null, items)), __jsx(\"img\", {\n      alt: \"cart\",\n      src: \"/shop.ico\",\n      height: \"50px\"\n    })),\n    path: \"/cart\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVCYXIuanN4P2I5MzUiXSwibmFtZXMiOlsiTWVudUJhciIsImNhcnRQcm92aWRlciIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImNhcnQiLCJzZXRDYXJ0IiwiaGlkZU1lbnUiLCJzZXRIaWRlTWVudSIsInVzZVN0YXRlIiwiaXRlbXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicGFyc2VJbnQiLCJxdWFudGl0eSIsImhhbmRsZUhpZGUiLCJpc0hhbWJ1cmd1ZXIiLCJsZWZ0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFDQztBQUFELE1BQWlCQyx3REFBVSxDQUFDQyxpRUFBRCxDQUFqQztBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCSixZQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxPQUFELENBQXhDO0FBQ0EsUUFBTUMsS0FBSyxHQUFHTCxJQUFJLENBQUNNLE1BQUwsQ0FBWSxDQUFDQyxHQUFELEVBQU1DLElBQU4sS0FBZUQsR0FBRyxHQUFHRSxRQUFRLENBQUNELElBQUksQ0FBQ0UsUUFBTixFQUFnQixFQUFoQixDQUF6QyxFQUE4RCxDQUE5RCxDQUFkOztBQUVBLFFBQU1DLFVBQVUsR0FBRyxDQUFDQyxZQUFZLEdBQUcsS0FBaEIsS0FBMEI7QUFDM0MsUUFBR1YsUUFBUSxJQUFJLEdBQWYsRUFBb0I7QUFDbEJDLGlCQUFXLENBQUMsT0FBRCxDQUFYO0FBQ0QsS0FGRCxNQUdLLElBQUdTLFlBQVksSUFBSSxJQUFuQixFQUF3QjtBQUMzQlQsaUJBQVcsQ0FBQyxHQUFELENBQVg7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FDRSxtQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFDQSxXQUFP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QU0sU0FBSyxFQUFDLGtCQUFaO0FBQTJCLFFBQUksRUFBRztBQUFsQyxJQUE1QixDQTdDRixFQThDRTtBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxnQkFBekI7QUFBMEMsVUFBTSxFQUFDO0FBQWpELElBOUNGLEVBK0NFO0FBQUksV0FBTyxFQUFJQTtBQUFmLEtBQTRCLE1BQUMsNkNBQUQ7QUFBTSxTQUFLLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUc7QUFBOUIsSUFBNUIsQ0EvQ0YsQ0FSRixFQXlERTtBQUFLLFdBQU8sRUFBSUEsVUFBaEI7QUFBNEIsYUFBUyxFQUFDO0FBQXRDLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLFNBQUssRUFDSCxtQkFFSVgsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLENBQWhCLElBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUE4QixpQkFBSVQsS0FBSixDQUE5QixDQUhOLEVBS0k7QUFBSyxTQUFHLEVBQUMsTUFBVDtBQUFnQixTQUFHLEVBQUMsV0FBcEI7QUFBZ0MsWUFBTSxFQUFDO0FBQXZDLE1BTEosQ0FGSjtBQVVFLFFBQUksRUFBQztBQVZQLElBREYsQ0F6REYsQ0FERixDQURGO0FBNEVELENBM0ZEOztBQTZGZVQsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnVCYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2FydENvbnRleHR9IGZyb20gJy4uL3NlcnZpY2VzL2NhcnRDb250ZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XG5cbmNvbnN0IE1lbnVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtjYXJ0UHJvdmlkZXJ9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7IFxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSBjYXJ0UHJvdmlkZXI7XG4gIGNvbnN0IFtoaWRlTWVudSwgc2V0SGlkZU1lbnVdID0gdXNlU3RhdGUoJy0xMDAlJylcbiAgY29uc3QgaXRlbXMgPSBjYXJ0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBwYXJzZUludChjdXJyLnF1YW50aXR5LCAxMCksIDApXG5cbiAgY29uc3QgaGFuZGxlSGlkZSA9IChpc0hhbWJ1cmd1ZXIgPSBmYWxzZSkgPT4ge1xuICAgIGlmKGhpZGVNZW51ID09ICcwJykge1xuICAgICAgc2V0SGlkZU1lbnUoJy0xMDAlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoaXNIYW1idXJndWVyID09IHRydWUpe1xuICAgICAgc2V0SGlkZU1lbnUoJzAnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnUtYmFyXCI+XG4gICAgICAgIDxpbWcgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhpZGUodHJ1ZSl9XG4gICAgICAgIHNyYz1cIi9oYW1idXJndWVyLnBuZ1wiXG4gICAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgICBhbHQ9XCJoYW1idXJndWVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tidG4gbXgtMyBtdC00XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHVsIHN0eWxlPXt7bGVmdDogaGlkZU1lbnV9fT5cbiAgICAgICAgICA8bGkgb25DbGljayA9IHtoYW5kbGVIaWRlfSA+PExpbmsgdGl0bGU9XCJJbmljaW9cIiBwYXRoID0gXCIvXCIvPjwvbGk+XG4gICAgICAgICAgPGltZyBhbHQ9XCJzZXBhcmF0b3JcIiBzcmM9XCIvc2VwYXJhdG9yLnBuZ1wiIGhlaWdodD1cIjMwcHhcIiAvPlxuICAgICAgICAgIDxsaSBvbkNsaWNrID0ge2hhbmRsZUhpZGV9ID48TGluayB0aXRsZT1cIkluZm9cIiBwYXRoID0gXCIvaW5mb1wiIC8+PC9saT5cbiAgICAgICAgICA8aW1nIGFsdD1cInNlcGFyYXRvclwiIHNyYz1cIi9zZXBhcmF0b3IucG5nXCIgaGVpZ2h0PVwiMzBweFwiIC8+XG4gICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wYnRuXCI+UHJvZHVjdG9zPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHtoYW5kbGVIaWRlfT4gIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL3Byb2R1Y3RzXCIgdGl0bGU9XCJUb2Rvc1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0ge2hhbmRsZUhpZGV9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NhdGVnb3J5L2NvbWJvc1wiIHRpdGxlPVwiQ29tYm9zXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2sgPSB7aGFuZGxlSGlkZX0+ICBcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9jYXRlZ29yeS9jdWlkYWRvLWNhcGlsYXJcIiB0aXRsZT1cIkN1aWRhZG8gY2FwaWxhclwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0ge2hhbmRsZUhpZGV9PiAgXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIvY2F0ZWdvcnkvY3VpZGFkby1kZS1sYS1waWVsXCIgdGl0bGU9XCJDdWlkYWRvIGRlIGxhIHBpZWxcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHtoYW5kbGVIaWRlfT4gIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NhdGVnb3J5L2N1aWRhZG8tcGVyc29uYWxcIiB0aXRsZT1cIkN1aWRhZG8gcGVyc29uYWxcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHtoYW5kbGVIaWRlfT4gIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NhdGVnb3J5L3NhbHVkLWJ1Y2FsXCIgdGl0bGU9XCJTYWx1ZCBidWNhbFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0ge2hhbmRsZUhpZGV9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NhdGVnb3J5L2Rlc29kb3JhbnRlLW5hdHVyYWxcIiB0aXRsZT1cIkRlc29kb3JhbnRlIG5hdHVyYWxcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHtoYW5kbGVIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9jYXRlZ29yeS9qYWJvbmVzLXZlZ2V0YWxlc1wiIHRpdGxlPVwiSmFib25lcyB2ZWdldGFsZXNcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHtoYW5kbGVIaWRlfT4gIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NhdGVnb3J5L2FjY2Vzb3Jpb3Mtc3VzdGVudGFibGVzXCIgdGl0bGU9XCJBY2Nlc29yaW9zIHN1c3RlbnRhYmxlc1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0ge2hhbmRsZUhpZGV9PiAgXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIvY2F0ZWdvcnkvYWxtb2hhZGlsbGFzLXRlcm1pY2FzXCIgdGl0bGU9XCJBbG1vaGFkaWxsYXMgdMOpcm1pY2FzXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2sgPSB7aGFuZGxlSGlkZX0+ICBcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9jYXRlZ29yeS9hcm9tYXRlcmFwaWFcIiB0aXRsZT1cIkFyb21hdGVyYXBpYVwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxpbWcgYWx0PVwic2VwYXJhdG9yXCIgc3JjPVwiL3NlcGFyYXRvci5wbmdcIiBoZWlnaHQ9XCIzMHB4XCIgLz5cbiAgICAgICAgICA8bGkgb25DbGljayA9IHtoYW5kbGVIaWRlfSA+PExpbmsgdGl0bGU9XCJRdWnDqW5lcyBzb21vc1wicGF0aCA9IFwiL3dob2FyZXdlXCIvPjwvbGk+XG4gICAgICAgICAgPGltZyBhbHQ9XCJzZXBhcmF0b3JcIiBzcmM9XCIvc2VwYXJhdG9yLnBuZ1wiIGhlaWdodD1cIjMwcHhcIiAvPlxuICAgICAgICAgIDxsaSBvbkNsaWNrID0ge2hhbmRsZUhpZGV9ID48TGluayB0aXRsZT1cIkNvbnRhY3RvXCIgcGF0aCA9IFwiL2NvbnRhY3RcIi8+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBvbkNsaWNrID0ge2hhbmRsZUhpZGV9IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjYXJ0Lmxlbmd0aCAhPT0gMCAmJiAoICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtbnVtYmVyXCI+PHA+e2l0ZW1zfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cImNhcnRcIiBzcmM9XCIvc2hvcC5pY29cIiBoZWlnaHQ9XCI1MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBwYXRoPVwiL2NhcnRcIiBcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MenuBar.jsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MenuBar */ \"./components/MenuBar.jsx\");\n/* harmony import */ var _services_cartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cartContext */ \"./services/cartContext.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/mauriciopauluk/Documents/eunoiamia/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_services_cartContext__WEBPACK_IMPORTED_MODULE_6__[\"CartProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Eunoia Mia\")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(_components_MenuBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsU0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsRUFJRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GLEVBT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgTWVudUJhciBmcm9tICcuLi9jb21wb25lbnRzL01lbnVCYXInO1xuaW1wb3J0IHtDYXJ0UHJvdmlkZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2NhcnRDb250ZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RXVub2lhIE1pYTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudUJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/cartContext.js":
/*!*********************************!*\
  !*** ./services/cartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst CartContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst CartProvider = props => {\n  const {\n    0: cart,\n    1: setCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: setted,\n    1: setSetted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (cart.length) {\n      localStorage.setItem('cart', JSON.stringify(cart));\n    } else {\n      let storageCart = JSON.parse(localStorage.getItem('cart'));\n\n      if (!setted) {\n        setCart(storageCart || []);\n        setSetted(true);\n      }\n    }\n  }, [cart]);\n  return __jsx(CartContext.Provider, {\n    value: {\n      cartProvider: [cart, setCart]\n    }\n  }, props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9jYXJ0Q29udGV4dC5qcz8yOWIzIl0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwicHJvcHMiLCJjYXJ0Iiwic2V0Q2FydCIsInVzZVN0YXRlIiwic2V0dGVkIiwic2V0U2V0dGVkIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdG9yYWdlQ2FydCIsInBhcnNlIiwiZ2V0SXRlbSIsImNhcnRQcm92aWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBcEI7QUFFQSxNQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FHLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUdMLElBQUksQ0FBQ00sTUFBUixFQUFlO0FBQ1hDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmLENBQTdCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBSVcsV0FBVyxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0wsWUFBWSxDQUFDTSxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBbEI7O0FBQ0EsVUFBRyxDQUFDVixNQUFKLEVBQVc7QUFDUEYsZUFBTyxDQUFDVSxXQUFXLElBQUksRUFBaEIsQ0FBUDtBQUNBUCxpQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0o7QUFDSixHQVZRLEVBVU4sQ0FBQ0osSUFBRCxDQVZNLENBQVQ7QUFZQSxTQUNBLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFJO0FBQUNjLGtCQUFZLEVBQUUsQ0FBQ2QsSUFBRCxFQUFPQyxPQUFQO0FBQWY7QUFBL0IsS0FDS0YsS0FBSyxDQUFDZ0IsUUFEWCxDQURBO0FBS0gsQ0FwQk0iLCJmaWxlIjoiLi9zZXJ2aWNlcy9jYXJ0Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2V0dGVkLCBzZXRTZXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGNhcnQubGVuZ3RoKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0b3JhZ2VDYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgICAgICAgIGlmKCFzZXR0ZWQpe1xuICAgICAgICAgICAgICAgIHNldENhcnQoc3RvcmFnZUNhcnQgfHwgW10pO1xuICAgICAgICAgICAgICAgIHNldFNldHRlZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtjYXJ0XSk7XG5cbiAgICByZXR1cm4oXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge3tjYXJ0UHJvdmlkZXI6IFtjYXJ0LCBzZXRDYXJ0XX19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/cartContext.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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