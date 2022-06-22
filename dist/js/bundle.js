/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/css/index.css":
/*!*********************************!*\
  !*** ./src/style/css/index.css ***!
  \*********************************/
/***/ (() => {

eval("\n    const styleE1 = document.createElement('style');\n    styleE1.innerHTML = \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\ninput {\\n  text-decoration: none;\\n}\\n\\n.big {\\n  background-color: #fff;\\n}\\n.box1 {\\n  width: 100%;\\n  height: 100%;\\n  background-image: url('../../assets/img/pitch-loader.jpg');\\n}\";\n    document.head.appendChild(styleE1);\n  \n\n//# sourceURL=webpack://webpack-practice/./src/style/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Function */ \"./src/js/Function.js\");\n/* harmony import */ var _js_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/sort */ \"./src/js/sort.js\");\n/* harmony import */ var _style_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/css/index.css */ \"./src/style/css/index.css\");\n/* harmony import */ var _style_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css_index_css__WEBPACK_IMPORTED_MODULE_2__);\n// 若想要使用webpack打包，则需要在入口引入\n\n\n// import './style/less/index.less'\n\n\nconst arr = [1, 3, 4, 5, 0, 2, 55, 36, 98, 45]\n\nconsole.log((0,_js_sort__WEBPACK_IMPORTED_MODULE_1__.sortValue)(arr));\n\nconst myFunction = new _js_Function__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nconsole.log(myFunction);\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/js/Function.js":
/*!****************************!*\
  !*** ./src/js/Function.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MyFunction = new Function()\nMyFunction.prototype.myCall = function (context) {\n  console.log(context)\n  if (typeof this !== 'function') {\n    throw new TypeError()\n  }\n\n  context = context || window\n  context.fn = this\n  const args = [...arguments].splice(1)\n  const result = context.fn(...args)\n  delete context.fn\n  return result\n}\n\nMyFunction.prototype.myApply = function (context) {\n  if (typeof this !== 'function') return new TypeError('')\n\n  context = context || window\n  context.fn = this\n  let result\n  if (arguments[1]) {\n    result = context.fn(...arguments[1])\n  } else {\n    result = context.fn()\n  }\n\n  delete context.fn\n\n  return result\n}\n\nMyFunction.prototype.myBind = function (context) {\n  if (typeof this !== 'function') return new TypeError('')\n\n  const _this = this\n\n  const args = [...arguments].splice(1)\n\n  return function F() {\n    if (this instanceof F) {\n      return new _this(...args, ...arguments)\n    }\n\n    return _this.apply(context, args.concat(...arguments))\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFunction);\n\n//# sourceURL=webpack://webpack-practice/./src/js/Function.js?");

/***/ }),

/***/ "./src/js/sort.js":
/*!************************!*\
  !*** ./src/js/sort.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortValue\": () => (/* binding */ sortValue)\n/* harmony export */ });\n// 定义一个元素的最大值和最小值，拿每一个元素进行比较，取大值放最右边，层层比较\nfunction sortValue(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let max = i\n    for (let j = i; j < arr.length; j++) {\n      if (arr[j] < arr[max]) {\n        max = j\n      }\n    }\n    let temp = arr[i]\n    arr[i] = arr[max]\n    arr[max] = temp\n  }\n  return arr\n}\n\n//# sourceURL=webpack://webpack-practice/./src/js/sort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;