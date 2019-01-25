webpackHotUpdate("static/development/pages/login.js",{

/***/ "./lib/UserAuthorization.js":
/*!**********************************!*\
  !*** ./lib/UserAuthorization.js ***!
  \**********************************/
/*! exports provided: userLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_UserAuthorizationAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/UserAuthorizationAPI.js */ "./services/UserAuthorizationAPI.js");
/* harmony import */ var _lib_Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Redirect */ "./lib/Redirect.js");
/* harmony import */ var _lib_Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Request */ "./lib/Request.js");
/* harmony import */ var _lib_Session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Session */ "./lib/Session.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var userLogin =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*Authenticate user with server*/
            res = Object(_lib_Request__WEBPACK_IMPORTED_MODULE_3__["post"])('/user-token', {
              email: email,
              password: password
            });
            /*Set cookie with JWT if authorized*/

            if (res.jwt) {
              _context.next = 4;
              break;
            }

            alert('No jwt');
            return _context.abrupt("return", null);

          case 4:
            Object(_lib_Session__WEBPACK_IMPORTED_MODULE_4__["setCookie"])('jwt', res.jwt);
            /*TODO: redirect user to my account if authorized.*/

            Object(_lib_Redirect__WEBPACK_IMPORTED_MODULE_2__["default"])('/account');
            return _context.abrupt("return", null);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function userLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=login.js.2d0b4c3308471cb5c8a0.hot-update.js.map