(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nTools"] = factory();
	else
		root["nTools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.typeOf = (o = '') =>
        (o == null
            ? String(o)
            : ({}).toString.call(o).slice(8, -1).toLowerCase());
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.arrayEquals = (x, y, { strictMode, keepOrder } = { strictMode: false, keepOrder: true }) => {
        if (!x || !y) {
            return false;
        }

        if(x.length != y.length) {
            return false;
        }

        let _x = _.deepClone(x);
        let _y = _.deepClone(y);

        // 内容
        if(!keepOrder) {
            _x.sort();
            _y.sort();
        }

        for (let i = 0, len = _x.length; i < len; i++) {
            if (_x[i] instanceof Array && _y[i] instanceof Array) {
                /*eslint-disable*/
                if(!_.arrayEquals(_x[i], _y[i], { strictMode: strictMode, keepOrder: keepOrder })) {
                    return false;
                }
                /*eslint-enable*/
            } else {
                if(strictMode) {
                    if(_x[i] !== _y[i]) {
                        return false;
                    }
                } else {
                    if(_x[i] != _y[i]) {
                        return false;
                    }
                }
            }
        }

        return true;
    };
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', { defaVal, deepClone } = { defaVal: '', deepClone: true }) => {
        let _res = (Array.isArray(path)
                    ? path
                    : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'))
                        .reduce((total, curVal) => (total || {})[curVal], obj);

        if(deepClone) {
            _res = _.deepClone(_res);
        }

        return _res || defaVal;
    };
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.keepDecimal = (num = 0, prec = 2) => {
        num = parseFloat(num);
        if (isNaN(num) || isNaN(prec)) {
            console.error('Parameter is not digital, please check it!');
            return false;
        }
        // toFixed() 保证精度
        return Math.round((num * Math.pow(10, prec)).toFixed(prec)) / Math.pow(10, prec);
    };

    _.formatDigital = (val = 0) => {
        if (isNaN(val)) {
            console.error('Parameter is not digital, please check it!');
            return false;
        }

        return val >= 10000 ? `${_.keepDecimal(val / 10000)}万` : parseInt(val).toLocaleString();
    };
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.compareObject = (x, y) => {
        // If both x and y are null or undefined and exactly the same
        if (x === y) {
            return true;
        }

        // If they are not strictly equal, they both need to be Objects
        if (!(x instanceof Object) || !(y instanceof Object)) {
            return false;
        }

        //They must have the exact same prototype chain,the closest we can do is
        //test the constructor.
        if (x.constructor !== y.constructor) {
            return false;
        }

        for (let p in x) {
            //Inherited properties were tested using x.constructor === y.constructor
            if (x.hasOwnProperty(p)) {
                // Allows comparing x[ p ] and y[ p ] when set to undefined
                if (!y.hasOwnProperty(p)) {
                    return false;
                }

                // If they have the same strict value or identity then they are equal
                if (x[p] === y[p]) {
                    continue;
                }

                // Numbers, Strings, Functions, Booleans must be strictly equal
                if (!(_.typeOf(x[p]) == 'object' || _.typeOf(x[p]) == 'array')) {
                    return false;
                }

                // Objects and Arrays must be tested recursively
                if (!_.compareObject(x[p], y[p])) {
                    return false;
                }
            }
        }

        for (let p in y) {
            // allows x[ p ] to be set to undefined
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                return false;
            }
        }
        return true;
    };
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let _t = {};

__webpack_require__(0)(_t);

let x = {
    cloneObj: (obj) => {
        let result = {},
            item, type;
        for(let i in obj) {
            if(obj.hasOwnProperty(i)) {
                item = obj[i];
                type = _t.typeOf(item);
                if (type === 'object') {
                    result[i] = x.cloneObj(item);
                } else if (type === 'array') {
                    result[i] = x.cloneArray(item);
                } else {
                    result[i] = item;
                }
            }
        }
        return result;
    },
    cloneArray: (obj) => {
        let result = [],
            item, type;
        for (let i = 0; i < obj.length; i++) {
            item = obj[i];
            type = _t.typeOf(item);
            if (type === 'object') {
                result[i] = x.cloneObj(item);
            } else if (type === 'array') {
                result[i] = x.cloneArray(item);
            } else if (typeof item !== 'object') {
                result[i] = item;
            }
        }
        return result;
    }
};

module.exports = ((_) => {
    _.deepClone = (obj) => {
        let type = _t.typeOf(obj);
        switch (type) {
            case 'object':
                return x.cloneObj(obj);
            case 'array':
                return x.cloneArray(obj);
            default:
                return obj;
        }
    };
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.extend = (o1 = {}, o2 = {}, override = false) => {
        const _keys = Object.keys(o2) || [];

        _keys.forEach((k) => {
            if (o1[k] == undefined || override) {
                o1[k] = o2[k];
            }
        });

        return o1;
    };
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ((_) => {
    _.merge = (obj1 = {}, obj2 = {}) => {
        const type1 = _.typeOf(obj1);
        const type2 = _.typeOf(obj2);
        // let len;

        if (type1 !== type2) {
            return obj2;
        }

        switch(type2) {
            case 'object':
                for (let i in obj2) {
                    if (obj2.hasOwnProperty(i)) {
                        obj1[i] = _.merge(obj1[i], obj2[i]);
                    }
                }
                break;
            case 'array':
                for (let i = 0, lens = obj2.length; i < lens; i++) {
                    obj1[i] = _.merge(obj1[i], obj2[i]);
                }
                obj1.length = obj2.length;
                break;
            default:
                return obj2;
        }
        return obj1;
    };
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * 空闲控制函数， fn仅执行一次
 * @param func{Function}     传入的函数
 * @param wait{Number}       时间间隔
 * @param immediate{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
 *                           如果想忽略结束边界上的调用则传入 {trailing:false},
 * @returns {Function}       返回调用函数
 */

module.exports = ((_) => {
    _.debounce = function(func, wait, immediate) {
        let timeout, args, context, timestamp, result;

        let now = () => new Date().getTime();

        let later = () => {
            let last = now() - timestamp;
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if(!timeout) {
                        context = args = null;
                    }
                }
            }
        };

        return (...args) => {
            context = this;
            timestamp = now();
            let callNow = immediate && !timeout;
            if(!timeout) {
                timeout = setTimeout(later, wait);
            }

            if(callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let _ = {};

__webpack_require__(0)(_);

__webpack_require__(4)(_);
__webpack_require__(5)(_);
__webpack_require__(6)(_);
__webpack_require__(7)(_);

__webpack_require__(1)(_);

__webpack_require__(3)(_);

__webpack_require__(2)(_);

__webpack_require__(8)(_);

// Export it
module.exports = _;

/***/ })
/******/ ]);
});