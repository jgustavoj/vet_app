/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scss/ms/main.scss":
/*!**********************************!*\
  !*** ./static/scss/ms/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc2Nzcy9tcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmV0X2FwcC8uL3N0YXRpYy9zY3NzL21zL21haW4uc2Nzcz83ZDdhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/scss/ms/main.scss\n");

/***/ }),

/***/ "./static/js/bundlers/ms.mjs":
/*!***********************************!*\
  !*** ./static/js/bundlers/ms.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_ms_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/ms/main.scss */ \"./static/scss/ms/main.scss\");\n// All files created need to be imported here in order for webpack to bundle.\r\n\r\n// Styles\r\n\r\n\r\n// JS\r\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\r\n  const showNavbar = (toggleId, navId, bodyId, headerId) => {\r\n    const toggle = document.getElementById(toggleId),\r\n      nav = document.getElementById(navId),\r\n      bodypd = document.getElementById(bodyId),\r\n      headerpd = document.getElementById(headerId);\r\n\r\n    // Validate that all variables exist\r\n    if (toggle && nav && bodypd && headerpd) {\r\n      toggle.addEventListener(\"click\", () => {\r\n        // show navbar\r\n        nav.classList.toggle(\"show\");\r\n        // change icon\r\n        toggle.classList.toggle(\"bx-x\");\r\n        // add padding to body\r\n        bodypd.classList.toggle(\"body-pd\");\r\n        // add padding to header\r\n        headerpd.classList.toggle(\"body-pd\");\r\n      });\r\n    }\r\n  };\r\n\r\n  showNavbar(\"header-toggle\", \"nav-bar\", \"body-pd\", \"header\");\r\n\r\n  /*===== LINK ACTIVE =====*/\r\n  const linkColor = document.querySelectorAll(\".nav_link\");\r\n\r\n  function colorLink() {\r\n    if (linkColor) {\r\n      linkColor.forEach((l) => l.classList.remove(\"active\"));\r\n      this.classList.add(\"active\");\r\n    }\r\n  }\r\n  linkColor.forEach((l) => l.addEventListener(\"click\", colorLink));\r\n\r\n  // Your code to run since DOM is loaded and ready\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvYnVuZGxlcnMvbXMubWpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ2lDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXRfYXBwLy4vc3RhdGljL2pzL2J1bmRsZXJzL21zLm1qcz8zMGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFsbCBmaWxlcyBjcmVhdGVkIG5lZWQgdG8gYmUgaW1wb3J0ZWQgaGVyZSBpbiBvcmRlciBmb3Igd2VicGFjayB0byBidW5kbGUuXHJcblxyXG4vLyBTdHlsZXNcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9tcy9tYWluLnNjc3NcIjtcclxuXHJcbi8vIEpTXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGNvbnN0IHNob3dOYXZiYXIgPSAodG9nZ2xlSWQsIG5hdklkLCBib2R5SWQsIGhlYWRlcklkKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2dnbGVJZCksXHJcbiAgICAgIG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdklkKSxcclxuICAgICAgYm9keXBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9keUlkKSxcclxuICAgICAgaGVhZGVycGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoZWFkZXJJZCk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCBhbGwgdmFyaWFibGVzIGV4aXN0XHJcbiAgICBpZiAodG9nZ2xlICYmIG5hdiAmJiBib2R5cGQgJiYgaGVhZGVycGQpIHtcclxuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gc2hvdyBuYXZiYXJcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgLy8gY2hhbmdlIGljb25cclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcImJ4LXhcIik7XHJcbiAgICAgICAgLy8gYWRkIHBhZGRpbmcgdG8gYm9keVxyXG4gICAgICAgIGJvZHlwZC5jbGFzc0xpc3QudG9nZ2xlKFwiYm9keS1wZFwiKTtcclxuICAgICAgICAvLyBhZGQgcGFkZGluZyB0byBoZWFkZXJcclxuICAgICAgICBoZWFkZXJwZC5jbGFzc0xpc3QudG9nZ2xlKFwiYm9keS1wZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2hvd05hdmJhcihcImhlYWRlci10b2dnbGVcIiwgXCJuYXYtYmFyXCIsIFwiYm9keS1wZFwiLCBcImhlYWRlclwiKTtcclxuXHJcbiAgLyo9PT09PSBMSU5LIEFDVElWRSA9PT09PSovXHJcbiAgY29uc3QgbGlua0NvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfbGlua1wiKTtcclxuXHJcbiAgZnVuY3Rpb24gY29sb3JMaW5rKCkge1xyXG4gICAgaWYgKGxpbmtDb2xvcikge1xyXG4gICAgICBsaW5rQ29sb3IuZm9yRWFjaCgobCkgPT4gbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsaW5rQ29sb3IuZm9yRWFjaCgobCkgPT4gbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29sb3JMaW5rKSk7XHJcblxyXG4gIC8vIFlvdXIgY29kZSB0byBydW4gc2luY2UgRE9NIGlzIGxvYWRlZCBhbmQgcmVhZHlcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/bundlers/ms.mjs\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/bundlers/ms.mjs");
/******/ 	
/******/ })()
;