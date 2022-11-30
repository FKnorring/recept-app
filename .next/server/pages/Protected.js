"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Protected";
exports.ids = ["pages/Protected"];
exports.modules = {

/***/ "./pages/Protected.js":
/*!****************************!*\
  !*** ./pages/Protected.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Protected),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Protected() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Protected Page\"\n        }, void 0, false, {\n            fileName: \"/home/fknorring/recept-app/pages/Protected.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/fknorring/recept-app/pages/Protected.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\nconst getServerSideProps = async (ctx)=>{\n    // Create authenticated Supabase Client\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.createServerSupabaseClient)(ctx);\n    // Check if we have a session\n    const { data: { session  }  } = await supabase.auth.getSession();\n    if (!session) return {\n        redirect: {\n            destination: \"/\",\n            permanent: false\n        }\n    };\n    return {\n        props: {\n            initialSession: session\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm90ZWN0ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMkU7QUFFNUQsU0FBU0MsWUFBWTtJQUNoQyxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdoQixDQUFDO0FBRU0sTUFBTUMscUJBQXFCLE9BQU9DLE1BQVE7SUFDL0MsdUNBQXVDO0lBRXZDLE1BQU1DLFdBQVdOLHlGQUEwQkEsQ0FBQ0s7SUFFNUMsNkJBQTZCO0lBRTdCLE1BQU0sRUFDSkUsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FDbEIsR0FBRyxNQUFNRixTQUFTRyxJQUFJLENBQUNDLFVBQVU7SUFFbEMsSUFBSSxDQUFDRixTQUNILE9BQU87UUFDTEcsVUFBVTtZQUNSQyxhQUFhO1lBRWJDLFdBQVcsS0FBSztRQUNsQjtJQUNGO0lBRUYsT0FBTztRQUNMQyxPQUFPO1lBQ0xDLGdCQUFnQlA7UUFDbEI7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlcHQtYXBwLy4vcGFnZXMvUHJvdGVjdGVkLmpzP2EwODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvdGVjdGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+UHJvdGVjdGVkIFBhZ2U8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENyZWF0ZSBhdXRoZW50aWNhdGVkIFN1cGFiYXNlIENsaWVudFxuXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyU3VwYWJhc2VDbGllbnQoY3R4KTtcblxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2Vzc2lvblxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNlc3Npb24gfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xuXG4gIGlmICghc2Vzc2lvbilcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbFNlc3Npb246IHNlc3Npb24sXG4gICAgfSxcbiAgfTtcbn07Il0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IiwiUHJvdGVjdGVkIiwiZGl2IiwiaDEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJzdXBhYmFzZSIsImRhdGEiLCJzZXNzaW9uIiwiYXV0aCIsImdldFNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiLCJpbml0aWFsU2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Protected.js\n");

/***/ }),

/***/ "@supabase/auth-helpers-nextjs":
/*!************************************************!*\
  !*** external "@supabase/auth-helpers-nextjs" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Protected.js"));
module.exports = __webpack_exports__;

})();