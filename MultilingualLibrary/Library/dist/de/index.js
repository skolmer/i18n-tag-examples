module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _translationDe = __webpack_require__(2);

	var _translationDe2 = _interopRequireDefault(_translationDe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	i18nConfig({
	    locales: 'de-DE',
	    group: 'my-lib',
	    number: {
	        currency: 'EUR'
	    },
	    translations: _translationDe2.default
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"$schema": "../translation.schema.json",
		"Date: ${0}": "Datum: ${0}",
		"Time: ${0}": "Zeit: ${0}"
	};

/***/ }
/******/ ]);