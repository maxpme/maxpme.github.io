/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _img_air_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/air-logo.png */ \"./src/img/air-logo.png\");\n/* harmony import */ var _fonts_Angry_Web_PS_Angry_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Angry/Web-PS/Angry.woff2 */ \"./src/fonts/Angry/Web-PS/Angry.woff2\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var root = document.getElementById('root');\n  var siteLogo = document.getElementById('logo');\n  siteLogo.src = _img_air_logo_png__WEBPACK_IMPORTED_MODULE_1__; //end event loaded\n});\n\n//# sourceURL=webpack://air/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Angry_Web_PS_Angry_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Angry/Web-PS/Angry.woff2 */ \"./src/fonts/Angry/Web-PS/Angry.woff2\");\n/* harmony import */ var _img_bgi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bgi.jpg */ \"./src/img/bgi.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Angry_Web_PS_Angry_woff2__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_bgi_jpg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Angry';\\n  font-style: normal;\\n  font-weight: normal;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"); }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  color: aliceblue;\\n  font-family: Angry;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  -webkit-background-size: cover;\\n  background-size: cover;\\n  background-repeat: no-repeat; }\\n\\n/*header*/\\n.header__wrapper {\\n  width: 100%;\\n  height: 15vh;\\n  display: flex;\\n  justify-content: center; }\\n\\n.header__logo {\\n  display: flex;\\n  justify-content: center; }\\n\\n.header__logo img {\\n  height: auto;\\n  width: auto; }\\n\\n/*main*/\\n.main__wrapper {\\n  padding: 0 2%;\\n  width: 100%;\\n  height: 80vh;\\n  display: grid;\\n  grid-template-columns: 30% 50% 20%;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\\"menu title socials\\\"; }\\n  .main__wrapper .button {\\n    padding: 2% 3%;\\n    color: aliceblue;\\n    text-decoration: none;\\n    text-transform: uppercase;\\n    background-color: rgba(180, 180, 180, 0.8);\\n    border-radius: 50px;\\n    width: 70%;\\n    margin-top: 2%;\\n    text-align: center;\\n    align-self: center;\\n    font-size: 16px; }\\n\\n.main__menu {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  grid-area: menu; }\\n\\n.main__links {\\n  padding: 20% 0;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center; }\\n\\n.main__link {\\n  overflow: hidden;\\n  margin-top: 10%;\\n  list-style: none;\\n  font-size: 25px; }\\n  .main__link .link {\\n    cursor: pointer;\\n    position: relative;\\n    white-space: nowrap;\\n    color: aliceblue; }\\n    .main__link .link:before, .main__link .link:after {\\n      position: absolute;\\n      width: 100%;\\n      height: 1px;\\n      background: currentColor;\\n      top: 100%;\\n      left: 0;\\n      pointer-events: none; }\\n    .main__link .link:before {\\n      content: ''; }\\n  .main__link .link--leda {\\n    overflow: hidden; }\\n    .main__link .link--leda:hover::before {\\n      transform-origin: 0 50%;\\n      transform: scale3d(1, 1, 1); }\\n    .main__link .link--leda:hover::after {\\n      opacity: 1;\\n      transform: translate3d(0, 0, 0); }\\n    .main__link .link--leda span {\\n      display: inline-block;\\n      transition: transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1); }\\n    .main__link .link--leda:hover span {\\n      transform: translate3d(-100%, 0, 0); }\\n    .main__link .link--leda:before {\\n      height: 2px;\\n      top: calc(100%);\\n      transform-origin: 100% 50%;\\n      transform: scale3d(0, 1, 1);\\n      transition: transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1); }\\n    .main__link .link--leda:after {\\n      opacity: 0;\\n      content: attr(data-text);\\n      height: 100%;\\n      top: 0;\\n      background: none;\\n      transform-origin: 100% 50%;\\n      transform: translate3d(120%, 0, 0);\\n      transition: transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1); }\\n\\n.main__title {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  grid-area: title; }\\n  .main__title .main__wrapper {\\n    width: 60%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center; }\\n    .main__title .main__wrapper .title {\\n      font-size: 180px;\\n      line-height: 70%; }\\n    .main__title .main__wrapper .subtitle {\\n      font-size: 26px; }\\n\\n.main__socials {\\n  grid-area: socials;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-end; }\\n  .main__socials .socials__block {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 100%; }\\n    .main__socials .socials__block:before, .main__socials .socials__block:after {\\n      content: \\\"\\\";\\n      border-left: .2rem solid aliceblue;\\n      height: 20vh;\\n      margin-bottom: 5vh;\\n      margin-top: 5vh; }\\n    .main__socials .socials__block:before {\\n      margin-bottom: 2vh; }\\n    .main__socials .socials__block:after {\\n      margin-top: 2vh; }\\n    .main__socials .socials__block .social__link {\\n      color: aliceblue;\\n      font-size: 2rem; }\\n\\n/*footer*/\\n.footer__wrapper {\\n  padding: 0 2%;\\n  width: 100%;\\n  height: 5vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://air/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://air/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://air/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://air/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://air/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/fonts/Angry/Web-PS/Angry.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Angry/Web-PS/Angry.woff2 ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:font/woff2;base64,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\");\n\n//# sourceURL=webpack://air/./src/fonts/Angry/Web-PS/Angry.woff2?");

/***/ }),

/***/ "./src/img/air-logo.png":
/*!******************************!*\
  !*** ./src/img/air-logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f062a94dffea53ae1df0.png\";\n\n//# sourceURL=webpack://air/./src/img/air-logo.png?");

/***/ }),

/***/ "./src/img/bgi.jpg":
/*!*************************!*\
  !*** ./src/img/bgi.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fde6cbae61e1be7f80c3.jpg\";\n\n//# sourceURL=webpack://air/./src/img/bgi.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d588129bd00ad15bb235")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "air:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateair"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;