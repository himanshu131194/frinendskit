module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8080,\n  // API_URL: \"http://localhost:8080\",\n  API_URL: \"http://192.168.0.132:8080\",\n  MONGO_URI: 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',\n  COOKIEKEY: 'mycookiesecret',\n  DB: {\n    DEFAULT_COUNT: 0,\n    DEFAULT_CONTENT_TYPE: 1,\n    //1-images 2- videos\n    DEFAULT_TRUE: true,\n    DEFAULT_FALSE: false,\n    DEFAULT_ACCOUNT_TYPE: 0,\n    // -1 - ADMIN SIDE  0 - Normal , 1- Google, 2- Facebook\n    GENDER: {\n      MALE: 1,\n      FEMALE: 2,\n      OTHER: 3\n    },\n    BADGETS: {\n      NOOBIE: 1,\n      PRO: 2\n    }\n  },\n  S3: {\n    BUCKET: 'feel-funny',\n    URL: 'https://feel-funny.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXV4NIO3PWA',\n    SECRET: '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'\n  },\n  LOGIN_KEYS: {\n    GOOGLE: {\n      CLIENT: '38122336055-7stkqff3vae90il94e1p12tp0pq26a4h.apps.googleusercontent.com',\n      SECRET: 'Czvtwg5Is_ZZwdVPEwUAoR8c'\n    }\n  },\n  MESSAGES: {\n    100: \"post has beeb added successfully\",\n    101: \"section has been added successfully\"\n  },\n  ERRORS: {\n    100: \"something went wrong, please try to post again\"\n  },\n  JWT_SECRET: \"himanshu@1234\",\n  ACCESS_TOKEN: \"0z6v8b4uua\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/posts.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/posts.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_sections_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/sections.model */ \"./server/models/sections.model.js\");\n/* harmony import */ var _models_posts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/posts.model */ \"./server/models/posts.model.js\");\n/* harmony import */ var _models_liked_posts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/liked_posts.model */ \"./server/models/liked_posts.model.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/users.model */ \"./server/models/users.model.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n // import postSections from '../models/sections.model'\n\n // import Posts from '../models/posts.model'\n// import Emojis from '../models/emojis'\n// import likedPosts from '../models/liked_posts.model'\n// import Comments from '../models/comments.model'\n\n\n\n\nvar s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_6___default.a.S3({\n  accessKeyId: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].S3.ACCESS,\n  secretAccessKey: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].S3.SECRET,\n  region: 'ap-south-1'\n});\nvar _default = {\n  listSections: function () {\n    var _listSections = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res) {\n      var sections;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return _models_sections_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n\n            case 3:\n              sections = _context.sent;\n              res.status(200).send({\n                data: sections\n              });\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ERRORS[100]\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    function listSections(_x, _x2) {\n      return _listSections.apply(this, arguments);\n    }\n\n    return listSections;\n  }(),\n  uploadImagetoS3: function () {\n    var _uploadImagetoS = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(req, res) {\n      var result, slugId, base64Data, type, key, params, s3Result;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('s3-upload');\n              _context2.prev = 1;\n              result = null;\n\n              if (!(!req.body.url && req.body.data64)) {\n                _context2.next = 7;\n                break;\n              }\n\n              result = Buffer.from(req.body.data64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64');\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.next = 9;\n              return request_promise__WEBPACK_IMPORTED_MODULE_7___default()({\n                url: req.body.url,\n                encoding: null\n              });\n\n            case 9:\n              result = _context2.sent;\n\n            case 10:\n              slugId = uuid_v4__WEBPACK_IMPORTED_MODULE_5___default()();\n              base64Data = result;\n              type = req.body.mime;\n              key = \"posts/\".concat(slugId, \".\").concat(req.body.ext);\n              params = {\n                Bucket: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].S3.BUCKET,\n                Key: key,\n                Body: base64Data,\n                ContentType: type\n              };\n              _context2.next = 17;\n              return s3.putObject(params).promise();\n\n            case 17:\n              s3Result = _context2.sent;\n              console.log({\n                url: \"https://\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].S3.BUCKET, \".s3.ap-south-1.amazonaws.com/\").concat(key),\n                key: key,\n                slug: slugId\n              });\n              return _context2.abrupt(\"return\", res.status(200).send({\n                url: \"https://\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].S3.BUCKET, \".s3.ap-south-1.amazonaws.com/\").concat(key),\n                key: key,\n                slug: slugId\n              }));\n\n            case 22:\n              _context2.prev = 22;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.log(_context2.t0);\n              return _context2.abrupt(\"return\", res.status(400).send({\n                error: 'Please try to upload again'\n              }));\n\n            case 26:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 22]]);\n    }));\n\n    function uploadImagetoS3(_x3, _x4) {\n      return _uploadImagetoS.apply(this, arguments);\n    }\n\n    return uploadImagetoS3;\n  }(),\n  uploadPost: function () {\n    var _uploadPost = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(req, res) {\n      var newPost, posts, result;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              newPost = {\n                user_id: req.user ? req.user._id : '5e12110169481b125b9d0cb6',\n                url: req.body.uploadedURL.trim(),\n                slugId: req.body.postSlug.trim(),\n                title: req.body.postTitle.trim(),\n                section: req.body.postSections,\n                mime_type: req.body.postMime.trim(),\n                ext: req.body.postExt.trim()\n              };\n\n              if (req.body.postMime.indexOf('video') >= 0) {\n                newPost['content_type'] = 2;\n              }\n\n              posts = new _models_posts_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newPost);\n              _context3.prev = 3;\n              _context3.next = 6;\n              return posts.save();\n\n            case 6:\n              result = _context3.sent;\n              console.log(result);\n              return _context3.abrupt(\"return\", res.status(200).send({\n                data: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].MESSAGES[100]\n              }));\n\n            case 11:\n              _context3.prev = 11;\n              _context3.t0 = _context3[\"catch\"](3);\n              console.log(_context3.t0);\n              return _context3.abrupt(\"return\", res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ERRORS[100]\n              }));\n\n            case 15:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[3, 11]]);\n    }));\n\n    function uploadPost(_x5, _x6) {\n      return _uploadPost.apply(this, arguments);\n    }\n\n    return uploadPost;\n  }(),\n  listPosts: function () {\n    var _listPosts = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4(req, res) {\n      var postMatchObject, posts;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              postMatchObject = {}; // if(req.query && req.query['post_id']!=='undefined'){\n              //     let _id = (req.query['post_id']).trim();\n              //     postMatchObject['_id'] = mongoose.Types.ObjectId(_id)\n              // }\n\n              _context4.prev = 1;\n              _context4.next = 4;\n              return _models_posts_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n                $match: postMatchObject\n              }, {\n                $lookup: {\n                  from: 'sections',\n                  localField: 'section',\n                  foreignField: '_id',\n                  as: 'section_details'\n                }\n              }]).sort({\n                created: -1\n              });\n\n            case 4:\n              posts = _context4.sent;\n              res.status(200).send({\n                data: posts\n              });\n              _context4.next = 11;\n              break;\n\n            case 8:\n              _context4.prev = 8;\n              _context4.t0 = _context4[\"catch\"](1);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ERRORS[100]\n              });\n\n            case 11:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[1, 8]]);\n    }));\n\n    function listPosts(_x7, _x8) {\n      return _listPosts.apply(this, arguments);\n    }\n\n    return listPosts;\n  }(),\n  postLiked: function () {\n    var _postLiked = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee5(req, res) {\n      var postId, counter, liked, result, updatePosts;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              console.log(req.user);\n              postId = req.body.post_id.trim();\n              counter = req.body.flag === true ? 1 : -1;\n              console.log(req.body.flag);\n              console.log(req.user._id);\n              liked = new _models_liked_posts_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                user_id: req.user._id,\n                post_id: postId\n              });\n              _context5.prev = 6;\n              _context5.next = 9;\n              return liked.save();\n\n            case 9:\n              result = _context5.sent;\n              _context5.next = 12;\n              return _models_posts_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n                _id: postId\n              }, {\n                liked: counter > 0 ? true : false,\n                $inc: {\n                  like_count: counter\n                }\n              }, {\n                \"new\": true\n              });\n\n            case 12:\n              updatePosts = _context5.sent;\n              res.status(200).send({\n                data: updatePosts\n              });\n              _context5.next = 19;\n              break;\n\n            case 16:\n              _context5.prev = 16;\n              _context5.t0 = _context5[\"catch\"](6);\n              res.status(400).send({\n                error: _context5.t0\n              });\n\n            case 19:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[6, 16]]);\n    }));\n\n    function postLiked(_x9, _x10) {\n      return _postLiked.apply(this, arguments);\n    }\n\n    return postLiked;\n  }(),\n  queryTest: function () {\n    var _queryTest = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee6(req, res) {\n      var posts;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.prev = 0;\n              _context6.next = 3;\n              return _models_posts_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateMany({}, {\n                liked: false,\n                like_count: 0,\n                comment_count: 0,\n                share_count: 0\n              });\n\n            case 3:\n              posts = _context6.sent;\n              res.status(200).send({\n                data: posts\n              });\n              _context6.next = 10;\n              break;\n\n            case 7:\n              _context6.prev = 7;\n              _context6.t0 = _context6[\"catch\"](0);\n              res.status(400).send({\n                error: _context6.t0\n              });\n\n            case 10:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6, null, [[0, 7]]);\n    }));\n\n    function queryTest(_x11, _x12) {\n      return _queryTest.apply(this, arguments);\n    }\n\n    return queryTest;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(s3, \"s3\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/posts.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/posts.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/posts.controller.js?");

/***/ }),

/***/ "./server/controllers/users.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/users.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n// import postSections from '../models/sections.model'\n // import CONFIG from '../../config';\n\nvar _default = {\n  // googleLogin : passport.authenticate('google', { scope: ['profile', 'email']}),\n  googleCallback: function googleCallback(req, res) {\n    res.redirect('/');\n  },\n  googleAuthenticate: function googleAuthenticate(req, res) {\n    if (req.user) {\n      res.status(200).send({\n        user: req.user\n      });\n    } else {\n      res.send({\n        user: null\n      });\n    }\n  },\n  googleLogout: function googleLogout(req, res) {\n    req.logout();\n    res.redirect('/');\n  },\n  authenticate: function authenticate(req, res, next) {\n    if (req.user) {\n      next();\n    } else {\n      req.user = {\n        gender: 1,\n        badgets: 1,\n        account_type: 1,\n        favourite_sections: [],\n        _id: \"5e3551da2dafec60becda62c\",\n        name: \"himanshu131194@gmail.com\",\n        email: \"himanshu savita\",\n        account_id: \"113944163418601847954\",\n        created: \"2020-02-01T10:24:26.981Z\",\n        __v: 0\n      };\n      next(); //   return res.status(403).send({\n      //          error: \"No token provided\"\n      //   }) \n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/users.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/users.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _routes_users_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/users.routes */ \"./server/routes/users.routes.js\");\n/* harmony import */ var _routes_posts_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/posts.routes */ \"./server/routes/posts.routes.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _services_passport_google__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/passport_google */ \"./server/services/passport_google.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n // import './services/passport_local';\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(cookie_session__WEBPACK_IMPORTED_MODULE_9___default()({\n  maxAge: 30 * 24 * 60 * 60 * 1000,\n  keys: [_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].COOKIEKEY]\n}));\napp.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.initialize());\napp.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.session());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_11__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/api', Object(_routes_users_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/api', Object(_routes_posts_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\nvar _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/liked_posts.model.js":
/*!********************************************!*\
  !*** ./server/models/liked_posts.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB;\nvar likePosts = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  user_id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'users'\n  },\n  post_id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'posts'\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('liked_posts', likePosts);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js\");\n  reactHotLoader.register(likePosts, \"likePosts\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/liked_posts.model.js?");

/***/ }),

/***/ "./server/models/posts.model.js":
/*!**************************************!*\
  !*** ./server/models/posts.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DB;\nvar Posts = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  user_id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'users'\n  },\n  url: {\n    type: String\n  },\n  poster_url: {\n    type: String\n  },\n  slug: {\n    type: String\n  },\n  title: {\n    type: String\n  },\n  liked: {\n    type: Boolean,\n    \"default\": DB.DEFAULT_FALSE\n  },\n  like_count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  comment_count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  share_count: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  tags: [{\n    type: String\n  }],\n  section: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'sections'\n  },\n  content_type: {\n    type: Number,\n    \"default\": DB.DEFAULT_CONTENT_TYPE\n  },\n  mime_type: {\n    type: String\n  },\n  ext: {\n    type: String\n  },\n  is_new: {\n    type: Boolean,\n    \"default\": DB.DEFAULT_TRUE\n  },\n  is_hide: {\n    type: Boolean,\n    \"default\": DB.DEFAULT_FALSE\n  },\n  is_nsfw: {\n    type: Boolean,\n    \"default\": DB.DEFAULT_FALSE\n  },\n  width: {\n    type: Number\n  },\n  height: {\n    type: Number\n  },\n  duration: {\n    type: Number,\n    \"default\": DB.DEFAULT_COUNT\n  },\n  size: {\n    type: Number\n  },\n  liker_list: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'users'\n  }],\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('posts', Posts);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js\");\n  reactHotLoader.register(Posts, \"Posts\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/posts.model.js?");

/***/ }),

/***/ "./server/models/sections.model.js":
/*!*****************************************!*\
  !*** ./server/models/sections.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar Sections = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  value: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  url: {\n    type: String\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('sections', Sections);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Sections, \"Sections\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/sections.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/sections.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/sections.model.js?");

/***/ }),

/***/ "./server/models/users.model.js":
/*!**************************************!*\
  !*** ./server/models/users.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar DB = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB;\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: true,\n    unique: true\n  },\n  email: {\n    type: String,\n    trim: true,\n    required: true,\n    unique: true\n  },\n  password_hash: {\n    type: String,\n    trim: true\n  },\n  password_salt: {\n    type: String,\n    trim: true\n  },\n  gender: {\n    type: Number,\n    \"default\": DB.GENDER.MALE\n  },\n  dob: {\n    type: Date\n  },\n  country: {\n    type: Number\n  },\n  profile_pic: {\n    thumbnail: {\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    },\n    original: {\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    }\n  },\n  description: {\n    type: String\n  },\n  badgets: {\n    type: Number,\n    \"default\": DB.BADGETS.NOOBIE\n  },\n  accounts: {\n    facebook: {\n      type: String\n    },\n    google: {\n      type: String\n    }\n  },\n  account_type: {\n    type: Number,\n    \"default\": DB.DEFAULT_ACCOUNT_TYPE //0\n\n  },\n  account_id: {\n    type: String\n  },\n  favourite_sections: [{\n    type: Number\n  }],\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.password_salt = this.makeSalt();\n  this.password_hash = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.methods = {\n  authenticate: function authenticate(password) {\n    return this.encryptPassword(password) === this.password_hash;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.password_salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('users', UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DB, \"DB\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js\");\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/users.model.js?");

/***/ }),

/***/ "./server/routes/posts.routes.js":
/*!***************************************!*\
  !*** ./server/routes/posts.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/posts.controller */ \"./server/controllers/posts.controller.js\");\n/* harmony import */ var _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/users.controller */ \"./server/controllers/users.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar _default = function _default(router) {\n  router.get('/list-sections', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listSections);\n  router.get('/list-posts', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listPosts);\n  router.get('/query-test', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].queryTest); // router.get('/list-emojis', postsController.listEmojis);\n  // router.post('/list-comments', postsController.listComments);\n  // router.post('/user-posts', usersController.authenticate, postsController.userPosts);\n  // router.get('/check-upload', postsController.checkUpload);\n\n  router.post('/upload-s3', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uploadImagetoS3);\n  router.post('/upload-posts', _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uploadPost);\n  router.post('/post-liked', _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authenticate, _controllers_posts_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLiked); // router.post('/post-comments', usersController.authenticate, postsController.postComments)\n\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/routes/posts.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/posts.routes.js?");

/***/ }),

/***/ "./server/routes/users.routes.js":
/*!***************************************!*\
  !*** ./server/routes/users.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/users.controller */ \"./server/controllers/users.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar _default = function _default(router) {\n  router.get('/auth/google', passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('google', {\n    scope: ['profile', 'email']\n  }));\n  router.get('/auth/google/callback', passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('google'), _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].googleCallback);\n  router.get('/logout', _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].googleLogout);\n  router.get('/authenticate', _controllers_users_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].googleAuthenticate);\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/server/routes/users.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/users.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MONGO_URI, {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/services/passport_google.js":
/*!********************************************!*\
  !*** ./server/services/passport_google.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/users.model */ \"./server/models/users.model.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser(function (user, done) {\n  console.log(user.id);\n  done(null, user.id);\n});\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser(\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(id, done) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _models_users_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n              _id: id\n            });\n\n          case 2:\n            user = _context.sent;\n            done(null, user);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__[\"Strategy\"]({\n  clientID: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOGIN_KEYS.GOOGLE.CLIENT,\n  clientSecret: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOGIN_KEYS.GOOGLE.SECRET,\n  callbackURL: '/api/auth/google/callback'\n},\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {\n    var existingUser, user;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models_users_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n              account_id: profile.id\n            });\n\n          case 2:\n            existingUser = _context2.sent;\n            console.log('existing user');\n            console.log(existingUser);\n\n            if (!existingUser) {\n              _context2.next = 7;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", done(null, existingUser));\n\n          case 7:\n            _context2.next = 9;\n            return new _models_users_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n              name: profile.emails[0].value,\n              email: profile.displayName,\n              account_type: 1,\n              account_id: profile.id\n            }).save();\n\n          case 9:\n            user = _context2.sent;\n            done(null, user);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n}()));\n\n//# sourceURL=webpack:///./server/services/passport_google.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"<!DOCTYPE html>\\n        <html>\\n        <head>\\n            <!-- Required meta tags -->\\n            <meta charset=\\\"utf-8\\\">\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\n            <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n\\n            <title> Friendkit | Feed</title>\\n            <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"assets/images/favicon.png\\\" />\\n            <!-- Fonts -->\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Montserrat:600,700,800,900\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto:400,500\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/css/materialdesignicons.min.css\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/css/webfont.css\\\" rel=\\\"stylesheet\\\">\\n            <!-- Core CSS -->\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/bulma.css\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/app.css\\\">\\n            \\n        </head>\\n        <body>\\n                <!-- Pageloader -->\\n                <div class=\\\"pageloader\\\"></div>\\n                <div class=\\\"infraloader is-active\\\"></div>\\n                <div class=\\\"app-overlay\\\"></div>\\n               \\n                <div id=\\\"root\\\"></div>\\n                <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n\\n\\n\\n\\n\\n\\n                <!-- Concatenated js plugins and jQuery -->\\n                <script src=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/app.js\\\"></script>\\n                \\n                <!-- Core js -->\\n                <script src=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/data/tipuedrop_content.js\\\"></script>\\n                <script src=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/global.js\\\"></script>\\n                <script src=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/main.js\\\"></script>\\n                \\n                <!-- Page and UI related js -->\\n                <script src=\\\"https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/feed.js\\\"></script>\\n      \\n                \\n                <!-- Components js -->\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/widgets.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/autocompletes.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/modal-uploader.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/popovers-users.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/popovers-pages.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/go-live.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/lightbox.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/touch.js\\\"></script>\\n                <script src=\\\"httpss://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/tour.js\\\"></script>   \\n        </body> \\n    </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Documents/live-projects/friendskit-front/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/live-projects/friendskit-front/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });