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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var input = \"boralesgamuwa\";\n\n\n\nfetchLocation(input);\n\nasync function fetchLocation(city){\n    try{\n        var locationFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d2c7093f2814dbb6f630558dc52d5c5` ,{mode: 'cors'})\n        var locationJson = await locationFetch.json()\n        console.log(locationJson)\n        console.log(locationJson.name , locationJson.weather[0].main)\n    } catch(err){\n        console.log(err)\n    }\n}\n\n//# sourceURL=webpack://project-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;