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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _templateObject = _taggedTemplateLiteral(['Date: ', ':t(D)'], ['Date: ', ':t(D)']),
	    _templateObject2 = _taggedTemplateLiteral(['Time: ', ':t(T)'], ['Time: ', ':t(T)']);

	__webpack_require__(1);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Clock = (_dec = i18nGroup('my-lib'), _dec(_class = function (_Component) {
	    _inherits(Clock, _Component);

	    function Clock(props) {
	        _classCallCheck(this, Clock);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

	        _this.state = { date: new Date() };
	        _this.interval = setInterval(function () {
	            return _this.tick();
	        }, 1000);
	        return _this;
	    }

	    _createClass(Clock, [{
	        key: 'tick',
	        value: function tick() {
	            this.setState({
	                date: new Date()
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearInterval(this.interval);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _jsx('div', {}, void 0, _jsx('p', {}, void 0, this.i18n(_templateObject, this.state.date)), _jsx('h1', {}, void 0, this.i18n(_templateObject2, this.state.date)));
	        }
	    }]);

	    return Clock;
	}(_react.Component)) || _class);
	exports.default = Clock;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var typeInfoRegex = /^:([a-z])(\((.+)\))?/;
	var formatOptionNumeric = 'numeric';
	var formatOptionLong = 'long';
	var formatOption2Digit = '2-digit';
	var typeString = 'string';
	var typeNumber = 'number';
	var typeDate = 'date';
	var numberStyleDecimal = 'decimal';
	var numberStyleCurrency = 'currency';
	var numberStylePercent = 'percent';

	var Tag = function () {
	    function Tag() {
	        var _this = this;

	        _classCallCheck(this, Tag);

	        this.locales = undefined;
	        this.translations = {};
	        this.number = { currency: 'USD' };
	        this.date = {};
	        this.standardFormatters = {};
	        this.string = {};
	        this.group;
	        this._localizers = {
	            s /*string*/: function s(v, format) {
	                var formatted = void 0;
	                if (format && (formatted = _this._runCustomFormatters(typeString, format, v)) !== null) {
	                    return formatted;
	                }
	                return v.toLocaleString(_this.locales);
	            },
	            n /*number*/: function n(v, format) {
	                if (format) {
	                    var fractionalDigits = parseInt(format);
	                    if (!isNaN(fractionalDigits)) {
	                        return v.toLocaleString(_this.locales, Object.assign({}, _this.number, { style: numberStyleDecimal, minimumFractionDigits: fractionalDigits, maximumFractionDigits: fractionalDigits }));
	                    }
	                    var formatted = void 0;
	                    if ((formatted = _this._runCustomFormatters(typeNumber, format, v)) !== null) {
	                        return formatted;
	                    }
	                }
	                v.toLocaleString(_this.locales, Object.assign({}, _this.number, { style: numberStyleDecimal }));
	            },
	            t /*date*/: function t(v, format) {
	                if (format) {
	                    switch (format.toUpperCase()) {
	                        case 'R':
	                            return v.toUTCString();
	                        case 'O':
	                            return v.toISOString();
	                    }
	                    var formatOptions = _this._getStandardFormatSettings(format);
	                    if (formatOptions) {
	                        return v.toLocaleString(_this.locales, Object.assign({}, _this.date, formatOptions));
	                    } else {
	                        var formatted = _this._runCustomFormatters(typeDate, format, v);
	                        if (formatted !== null) return formatted;
	                    }
	                }
	                return v.toLocaleString(_this.locales, Object.assign({}, _this.date));
	            },
	            c /*currency*/: function c(v, currency) {
	                return v.toLocaleString(_this.locales, currency ? Object.assign({}, _this.number, { style: numberStyleCurrency, currency: currency }) : Object.assign({}, _this.number, { style: numberStyleCurrency }));
	            },
	            p /*percent*/: function p(v) {
	                return v.toLocaleString(_this.locales, Object.assign({}, _this.number, { style: numberStylePercent }));
	            }
	        };
	        this.i18n = this.i18n.bind(this);
	        this.i18nConfig = this.i18nConfig.bind(this);
	        this._localize = this._localize.bind(this);
	    }

	    _createClass(Tag, [{
	        key: 'i18nConfig',
	        value: function i18nConfig(_ref) {
	            var locales = _ref.locales;
	            var translations = _ref.translations;
	            var group = _ref.group;
	            var number = _ref.number;
	            var date = _ref.date;
	            var standardFormatters = _ref.standardFormatters;

	            this.locales = locales || this.locales;
	            this.translations = translations || this.translations;
	            this.number = number || this.number;
	            this.date = date || this.date;
	            this.standardFormatters = standardFormatters || this.standardFormatters;
	            this.group = group || this.group;
	        }
	    }, {
	        key: 'i18n',
	        value: function i18n(group, literals) {
	            var _this2 = this;

	            var translationKey = this._buildKey(literals);
	            var translationString = void 0;
	            var translationGroup = this.group;
	            if ((typeof group === 'undefined' ? 'undefined' : _typeof(group)) === typeString) {
	                translationGroup = group;
	            }
	            if (translationGroup) {
	                translationString = this.translations[translationGroup];
	                if (translationString instanceof Object) {
	                    translationString = translationString[translationKey];
	                }
	            }
	            if (!translationString) translationString = this.translations[translationKey] || translationKey;
	            var typeInfoForValues = literals.slice(1).map(this._extractTypeInfo);

	            for (var _len = arguments.length, values = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                values[_key - 2] = arguments[_key];
	            }

	            var localizedValues = values.map(function (v, i) {
	                return _this2._localize(v, typeInfoForValues[i]);
	            });
	            return this._buildMessage.apply(this, [translationString].concat(_toConsumableArray(localizedValues)));
	        }
	    }, {
	        key: '_runCustomFormatters',
	        value: function _runCustomFormatters(type, format, value) {
	            var _this3 = this;

	            var formatted = null;
	            if (this.standardFormatters && this.standardFormatters[type]) {
	                Object.keys(this.standardFormatters[type]).forEach(function (val) {
	                    if (val === format) {
	                        var formatter = _this3.standardFormatters[type][val];
	                        if (formatter) {
	                            formatted = formatter(_this3.locales, _this3[type], value);
	                        }
	                    }
	                });
	            }
	            return formatted;
	        }
	    }, {
	        key: '_getStandardFormatSettings',
	        value: function _getStandardFormatSettings(fromatString) {
	            switch (fromatString) {
	                case 'd':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'D':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'f':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'F':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'g':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'G':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'm':
	                case 'M':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 't':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: undefined,
	                        day: undefined,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'T':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: undefined,
	                        day: undefined,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'y':
	                case 'Y':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: undefined,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                default:
	                    return null;
	            }
	        }
	    }, {
	        key: '_extractTypeInfo',
	        value: function _extractTypeInfo(literal) {
	            var match = typeInfoRegex.exec(literal);
	            if (match) {
	                return { type: match[1], options: match[3] };
	            } else {
	                return { type: 's', options: '' };
	            }
	        }
	    }, {
	        key: '_localize',
	        value: function _localize(value, _ref2) {
	            var type = _ref2.type;
	            var options = _ref2.options;

	            var localizer = this._localizers[type];
	            if (localizer) {
	                return localizer(value, options);
	            }
	            throw new Error('Type \'' + type + '\' is not supported. Supported types are: ' + Object.keys(this._localizers).join());
	        }

	        // e.g. this._buildKey(['', ' has ', ':c in the']) == '{0} has {1} in the bank'

	    }, {
	        key: '_buildKey',
	        value: function _buildKey(literals) {
	            var stripType = function stripType(s) {
	                return s.replace(typeInfoRegex, '');
	            };
	            var lastPartialKey = stripType(literals[literals.length - 1]);
	            var prependPartialKey = function prependPartialKey(memo, curr, i) {
	                return stripType(curr) + '${' + i + '}' + memo;
	            };

	            return literals.slice(0, -1).reduceRight(prependPartialKey, lastPartialKey).replace(/\r\n/g, '\n');
	        }

	        // e.g. this._formatStrings('{0} {1}!', 'hello', 'world') == 'hello world!'

	    }, {
	        key: '_buildMessage',
	        value: function _buildMessage(str) {
	            for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                values[_key2 - 1] = arguments[_key2];
	            }

	            return str.replace(/\${(\d)}/g, function (_, index) {
	                return values[Number(index)];
	            });
	        }
	    }]);

	    return Tag;
	}();

	var i18ntag = new Tag();
	var i18nConfig = i18ntag.i18nConfig;


	var i18n = function i18n(literals) {
	    for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        values[_key3 - 1] = arguments[_key3];
	    }

	    if ((typeof literals === 'undefined' ? 'undefined' : _typeof(literals)) === typeString) {
	        return function (lit) {
	            for (var _len4 = arguments.length, val = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                val[_key4 - 1] = arguments[_key4];
	            }

	            return i18ntag.i18n.apply(i18ntag, [literals, lit].concat(val));
	        };
	    } else {
	        return i18ntag.i18n.apply(i18ntag, [null, literals].concat(values));
	    }
	};

	var i18nGroup = function i18nGroup(group) {
	    return function (Target) {
	        return function (props) {
	            Target = new Target(props);
	            Target.i18n = function (literals) {
	                for (var _len5 = arguments.length, values = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	                    values[_key5 - 1] = arguments[_key5];
	                }

	                return i18n(group).apply(undefined, [literals].concat(values));
	            };
	            return Target;
	        };
	    };
	};

	if (typeof window !== 'undefined') {
	    window.i18n = i18n;
	    window.i18nConfig = i18nConfig;
	    window.i18nGroup = i18nGroup;
	}

	exports.default = i18n;
	exports.i18nConfig = i18nConfig;
	exports.i18nGroup = i18nGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);