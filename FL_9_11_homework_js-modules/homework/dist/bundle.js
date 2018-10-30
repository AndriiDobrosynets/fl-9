/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculating_module__ = __webpack_require__(2);




const root = document.getElementById('root');
const container = document.createElement('div');
container.className = 'container';
const card = document.createElement('div');
card.className = 'card';
const signs = ['+','-','*','/'];

const input = document.createElement('input');
input.type = 'text';
const signsWrap = document.createElement('div');
signsWrap.className = 'signs-wrap';

const equalBtn = document.createElement('button');
equalBtn.className = 'button';
equalBtn.innerText = '=';

const clearBtn = document.createElement('button');
clearBtn.className = 'button';
clearBtn.innerText = 'C';




for(let i = 0; i <= 9; i++) {
  const btn = document.createElement('button');
  btn.className = 'button';
  btn.value = i;
  btn.innerText = i;
  signsWrap.appendChild(btn);
}

signs.forEach(sign => {
  const btn = document.createElement('button');
  btn.className = 'button';
  btn.value = sign;
  btn.innerText = sign;
  signsWrap.appendChild(btn);
})



signsWrap.appendChild(equalBtn);
signsWrap.appendChild(clearBtn);
card.appendChild(input);
card.appendChild(signsWrap);
container.appendChild(card);
root.appendChild(container);


signsWrap.addEventListener('click',(e) => {
  input.value += e.target.value;
})

clearBtn.addEventListener('click',() => {
  input.value = '';
})


equalBtn.addEventListener('click',() => {
  const expresion = input.value;
  const numbers = expresion.split(/[\s*/+-]+/g);
  const operator = expresion.split(/[0-9]/g)[1];
  const operant1 = Number(numbers[0]);
  const operant2 = Number(numbers[1]);
  calculate(operant1,operant2,operator);
})

function calculate(operator1,operator2,sign) {
  switch (sign) {
    case '+' : {
      input.value = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* addition */])(operator1,operator2);
      break;
    }
    case '-' : {
      input.value = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["d" /* subtraction */])(operator1,operator2);
      break;
    }
    case '*' : {
      input.value = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["c" /* multiplication */])(operator1,operator2);
      break;
    }
    case '/' : {
      input.value = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["b" /* division */])(operator1,operator2);
      break;
    }
    default :
    input.value = '';
  }
}




















/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addition;
/* harmony export (immutable) */ __webpack_exports__["d"] = subtraction;
/* harmony export (immutable) */ __webpack_exports__["c"] = multiplication;
/* harmony export (immutable) */ __webpack_exports__["b"] = division;
function addition( a, b ) {
  return a + b;
}
function subtraction( a, b ) {
  return a - b;
}
function multiplication( a, b ) {
  return a * b;
}
function division( a, b ) {
  return a / b;
}


/***/ })
/******/ ]);