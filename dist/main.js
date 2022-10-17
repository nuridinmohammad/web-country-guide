/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

var searchBtn = document.getElementById("search-btn");
var countryInpu = document.getElementById("country-inp");
var result = document.getElementById("result");
var country = JSON.parse(localStorage.getItem("country-name"));
searchBtn.addEventListener("click", function () {
  var countryName = countryInpu.value;
  if (!country) {
    var finalURL = "https://restcountries.com/v3.1/name/".concat(countryName, "?fullText=true");
    fetch(finalURL).then(function (response) {
      return response.json();
    }).then(function (data) {
      localStorage.setItem("country-name", JSON.stringify(countryName));
      !data[0] ? searchBtn.innerHTML = "<h4>Loading..</h4>" : result.innerHTML = "\n      <img src=\"".concat(data[0].flags.svg, "\" class=\"flag-img\"/>\n      <h2>").concat(data[0].name.common, "</h2>\n      <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Capital :</h4>\n                    <span>").concat(data[0].capital[0], "</span>\n          </div>\n      </div>\n      <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Continent :</h4>\n                    <span>").concat(data[0].continents[0], "</span>\n          </div>\n      </div>\n          <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Population :</h4>\n                    <span>").concat(Intl.NumberFormat("id-ID").format(data[0].population), " Jiwa</span>\n          </div>\n      </div>\n          <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Concurrency :</h4>\n                    <span>").concat(data[0].currencies[Object.keys(data[0].currencies)].name, " - ").concat(Object.keys(data[0].currencies)[0], "</span>\n          </div>\n      </div>\n          <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Common Language :</h4>\n                    <span>").concat(Object.values(data[0].languages).toString().split(",").join(","), "</span></span>\n          </div>\n      </div>\n          <div class=\"wrapper\">\n          <div class=\"data-wrapper\">\n                    <h4>Time Zone:</h4>\n                    <span>").concat(data[0].timezones[1], "</span></span>\n          </div>\n      </div>\n      ");
    })["catch"](function () {
      if (countryName.length == 0) {
        result.innerHTML = "<h3>The Input field cannot be empty</h3>";
      } else {
        result.innerHTML = "<h3>Please enter a valid country name</h3>";
      }
    });
  } else {
    window.onload = function (event) {
      console.log("page is fully loaded");
    };
  }
});
})();

/******/ })()
;