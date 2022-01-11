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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n //импортируем через {} потому что экспортировали не по дефолту\n //импортируем через {} потому что экспортировали не по дефолту\n\n//после импорта UserService создадим новый экземпляр класса\n//const userService = new UserService // и его теперь будем передавать в любой модуль и исплльзовать //НО ЭТОТ МЕТОД НЕ САМЫЙ ЛУЧШИЙ, МОЖЕМ ЕГО УДАЛИТЬ И СДЕЛАТЬ (В КОДЕ НИЖЕ)\n\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService // в таком случае нам не обязательно передавать userService в переменныее, потому что это стал глобальный объект\n\nuserService.getUsers().then(data => { //вызовем метод getUsers и обработаем еще раз чтобы с данными можно было работать\n    console.log(data)\n    console.log(data)\n})\n\n\n;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(userService.users);//передадим userService.users\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => { //вызвали функцию в index, передали в неё класс и теперь обращаемся к классу(а класс это объект) и к его свойствам\n//ПОСКОЛЬКУ ВЫЗВАЛИ userService глобально и удалили в передаче в качестве аргумента при вызове функции, то можем удалить и здесь и обращаться через глобальный объект\n//window.userService.users = [{ //проверяем работу геттера и сеттера, передаем пустой id\n    //    id: 0\n    //}]\n    //userService.logger() //запускаем метод для вывода в консоль и так как обращаемся к глобальному объекту, то window писать не обязательно\n//ПЕРЕДАДИМ В ФУНКЦИЮ МАССИВ users\n\n        //теперь необходимо отрисовывоть каждого юзера в таблице\n        //получим таблицу и будем отррисовывать каждого юзера в виде строки\n    const tbody = document.querySelector('#table-body')\n    users.forEach(user => {\n        //при каждой итерации будем вписывать новую строчку в верстку\n        tbody.insertAdjacentHTML('beforeend', `\n        <tr>\n            <th scope=\"row\">${user.id}</th> \n            <td>${user.name}</td>\n            <td>${user.email}</td>\n            <td>${user.children ? 'Есть' : 'Нет'}</td>\n            <td>\n                <div class=\"form-check form-switch\">\n                    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\n                        id=\"form-children\" ${user.permissions ? 'checked' : ''}> \n                </div>\n            </td>\n            <td>\n                <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                    <button type=\"button\" class=\"btn btn-warning\">\n                        <i class=\"bi-pencil-square\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger\">\n                        <i class=\"bi-person-x\"></i>\n                    </button>\n                </div>\n            </td>\n        </tr>\n        `) //делаем их динамичными через внедрение ${}\n        //а в верстке теги tr комментируем, потому что внедряем через JS\n        //В ФАЙЛЕ DB.JSON ПЕРЕИМЕНОВЫВАЕМ ОБЪЕКТ В USERS\n})\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserService\": () => (/* binding */ UserService)\n/* harmony export */ });\n//1 шаг \r\n//создание модуля userService из которого мы будем экспортироваться класс\r\n\r\nclass UserService {\r\n\r\n    _users = [//_для работы через геттеры и сеттеры \r\n        //ВРЕМЕННО СОЗДАДИМ ОБЪЕКТЫ\r\n        {\r\n            id: 0,\r\n            name: 'Mark',\r\n            email: 'mark@mark.mark',\r\n            children: true,\r\n            permissions: false,\r\n        },\r\n        {\r\n            id: 1,\r\n            name: 'Otto',\r\n            email: 'otto@otto.otto',\r\n            children: false,\r\n            permissions: true,\r\n        },\r\n    ] \r\n\r\n    get users() { //геттер \r\n        return this._users //возвращает юзеров, которых хотим получить через контекст вызова\r\n    }\r\n    set users(users) {//сеттер\r\n        this._users = users//который принимает массив users и переопределяет его через контекст вызова\r\n    }\r\n    logger() {\r\n        console.log(this.users) //тестотый модуль для вывода информации через контекст вызова\r\n    }\r\n        //создадим новый метод, который будет возвращать результат выполнения метода fetch\r\n    getUsers() {\r\n        return fetch('http://localhost:8080/users').then(res => res.json()) //сразу обработаем его и запустим еще раз с выводом в консоль в модуле index\r\n\r\n    } \r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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