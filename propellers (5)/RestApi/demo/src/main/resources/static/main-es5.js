function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/dashboard/dashboard.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/dashboard/dashboard.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dashboard works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/header-toolbar/header-toolbar.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/header-toolbar/header-toolbar.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHeaderToolbarHeaderToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/home/home.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/home/home.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        Tester\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div>\r\n  <tabset>\r\n    <tab heading=\"Basic title\" id=\"tab1\">Basic content</tab>\r\n    <tab heading=\"Basic Title 1\">Basic content 1</tab>\r\n    <tab heading=\"Basic Title 2\">Basic content 2</tab>\r\n  </tabset>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/project-management/project.managment.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/project-management/project.managment.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentProjectManagementProjectManagmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\" *ngIf=\"isProjectList\">\r\n          <div class=\"col-xs-12 col-sm-12\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th scope=\"col\">#</th>\r\n                  <th scope=\"col\">Name</th>\r\n                  <th sccope=\"col\">Description</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let p of projects; let i = index;\" (click)=\"projectSelectEvent(p)\">\r\n                  <th scope=\"row\">{{i + 1}}</th>\r\n                  <td>{{p.name}}</td>\r\n                  <td>{{p.desc}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-bottom: 15px;\" *ngIf=\"!isProjectList\">\r\n          <div class=\"col-xs-12 col-sm-12\">\r\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"isProjectList = !isProjectList\">&lt;- Back</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card\" style=\"margin-bottom: 15px;\" *ngIf=\"!isProjectList\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"bu\" class=\"col-sm-2 col-form-label\">BU</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" readonly class=\"form-control\" id=\"bu\" value=\"Technology\" readonly>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"division\" class=\"col-sm-2 col-form-label\">Division</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"division\" value=\"WM Technology\" readonly>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"sd\" class=\"col-sm-2 col-form-label\">Super Department</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"sd\" value=\"Global Banking Tech\" readonly>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"dept\" class=\"col-sm-2 col-form-label\">Department</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"dept\" value=\"GBT Banking & Payment Services\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xs-6 col-sm-6\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"pname\" class=\"col-sm-2 col-form-label\">Name</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"pname\" [(ngModel)]=\"selectedProject.name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"pdesc\" class=\"col-sm-2 col-form-label\">Description</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"pdesc\" [(ngModel)]=\"selectedProject.desc\"> -->\r\n                    <textarea class=\"form-control\" rows=\"4\" id=\"pdesc\" [(ngModel)]=\"selectedProject.desc\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\" style=\"padding-top: 5px;\">\r\n                  <label for=\"pemail\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"pemial\" [(ngModel)]=\"selectedProject.email\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"!isProjectList\">\r\n          <div class=\"card-header\">\r\n            Access Bundles\r\n          </div>\r\n          <div class=\"card-body\" style=\"padding-bottom:0px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n\r\n\r\n                <div class=\"card\" *ngFor=\"let ab of selectedProject.accessBundles\" style=\"margin-bottom: 15px;\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"abname\" class=\"col-sm-2 col-form-label\">Name</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"abname\" [(ngModel)]=\"ab.name\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"abdesc\" class=\"col-sm-2 col-form-label\">Description</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"abdesc\" [(ngModel)]=\"ab.desc\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-sm-12\">\r\n                        <div class=\"card\">\r\n                          <div class=\"card-header\">\r\n                            Access Entity\r\n                          </div>\r\n                          <div class=\"card-body\" style=\"padding-bottom: 15px;\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-12 col-sm-12\">\r\n\r\n                                <div class=\"card\" *ngFor=\"let ae of ab.accessEntities\" style=\"margin-bottom: 15px;\">\r\n                                  <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-xs-6 col-sm-6\">\r\n                                        <div class=\"form-group row\">\r\n                                          <label for=\"aetype\" class=\"col-sm-2 col-form-label\">Type</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <select type=\"text\" class=\"form-control\" id=\"aetype\" [(ngModel)]=\"ae.type\">\r\n                                              <option value=\"Firmwide Directory Group (n/)\">Firmwide Directory Group\r\n                                                (n/)\r\n                                              </option>\r\n                                              <option value=\"TAI\">TAI</option>\r\n                                            </select>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"form-group row\" *ngIf=\"!isFDG(ae)\">\r\n                                          <label for=\"aeeonid\" class=\"col-sm-2 col-form-label\">EOD ID</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"aeeonid\" [(ngModel)]=\"ae.eonId\">\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"form-group row\" *ngIf=\"!isFDG(ae)\">\r\n                                          <label for=\"aegrn\" class=\"col-sm-2 col-form-label\">GRN</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"aegrn\" [(ngModel)]=\"ae.grn\">\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-xs-6 col-sm-6\">\r\n                                        <div class=\"form-group row\" *ngIf=\"isFDG(ae)\">\r\n                                          <label for=\"aegroup\" class=\"col-sm-2 col-form-label\">Group</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"aegroup\" [(ngModel)]=\"ae.group\">\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"form-group row\" *ngIf=\"!isFDG(ae)\">\r\n                                          <label for=\"aerole\" class=\"col-sm-2 col-form-label\">Role</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"aerole\" [(ngModel)]=\"ae.role\">\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"form-group row\" *ngIf=\"!isFDG(ae)\">\r\n                                          <label for=\"aeteam\" class=\"col-sm-2 col-form-label\">Team</label>\r\n                                          <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"aeteam\" [(ngModel)]=\"ae.team\">\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n\r\n                                    </div>\r\n\r\n\r\n\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n                              <div class=\"col-xs-12 col-sm-12\">\r\n                                <button class=\"btn btn-primary float-right\" type=\"button\"\r\n                                  (click)=\"addAccessEntity(ab)\">Add</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <button class=\"btn btn-primary float-right\" type=\"button\" (click)=\"addAccessBundle()\">Add</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top: 15px;\" *ngIf=\"!isProjectList\">\r\n          <div class=\"col-xs-12 col-sm-12\">\r\n            <button class=\"btn btn-success float-right\" type=\"button\" (click)=\"submit()\">Submit</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top: 15px;\" *ngIf=\"isProjectList\">\r\n          <div class=\"col-xs-12 col-sm-12\">\r\n            <button class=\"btn btn-success float-right\" type=\"button\" (click)=\"newProject()\">New Project</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/request-access/request-access.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/request-access/request-access.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentRequestAccessRequestAccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>BU:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              {{ requestAccess?.businessUnit }}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>Division:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              {{ requestAccess?.division }}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>Super Department:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              {{ requestAccess?.superDepartment }}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>Department:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              {{ requestAccess?.department }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>Project:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <select name=\"project\" [(ngModel)]=\"requestAccess.projectSelected\" class=\"form-control\" id=\"project\">\r\n                <option *ngFor=\"let p of requestAccess.projects\" [ngValue]=\"p.name\"> {{ p.name }} </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\"></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n              <label>Access Bundles:</label>\r\n            </div>\r\n            <div class=\"col-xs-3 col-sm-3\">\r\n\r\n            <select name=\"accessBundle\" [(ngModel)]=\"requestAccess.accessBundleSelected\" class=\"form-control\" id=\"accessBundle\">\r\n              <option *ngFor=\"let ab of requestAccess.accessBundles\" [ngValue]=\"ab.name\"> {{ ab.name }} </option>\r\n            </select>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <table class=\"table\">\r\n                  <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th scope=\"col\">Select</th>\r\n                      <th scope=\"col\">Resource Type</th>\r\n                      <th scope=\"col\">Resource Value</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let r of requestAccess.resourceList; let i = index;\">\r\n                      <td>\r\n                        <div>\r\n                            <input type=\"checkbox\" [id]=\"'customCheck'+i\" [(ngModel)]=\"r.isSelected\"/>\r\n                        </div>\r\n                      </td>\r\n                      <td>{{ r.resourceType }}</td>\r\n                      <td>{{ r.resourceValue }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <button class=\"btn btn-success float-right\" (click)=\"initiateAccessRequestProcess()\">Initiate Process</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Propeller</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle Navigation\">\r\n        <span class=\"navbar-toggle-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/projectmanagement\" routerLinkActive=\"active\">Project Managment</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/requestAccess\" routerLinkActive=\"active\">Request Access</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding-top: 15px;\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/AppComponent/dashboard/dashboard.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/AppComponent/dashboard/dashboard.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FwcENvbXBvbmVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/AppComponent/dashboard/dashboard.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/AppComponent/dashboard/dashboard.component.ts ***!
    \***************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAppComponentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/AppComponent/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/AppComponent/header-toolbar/header-toolbar.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/AppComponent/header-toolbar/header-toolbar.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentHeaderToolbarHeaderToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FwcENvbXBvbmVudC9oZWFkZXItdG9vbGJhci9oZWFkZXItdG9vbGJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/AppComponent/header-toolbar/header-toolbar.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/AppComponent/header-toolbar/header-toolbar.component.ts ***!
    \*************************************************************************/

  /*! exports provided: HeaderToolbarComponent */

  /***/
  function srcAppAppComponentHeaderToolbarHeaderToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderToolbarComponent", function () {
      return HeaderToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderToolbarComponent =
    /*#__PURE__*/
    function () {
      function HeaderToolbarComponent() {
        _classCallCheck(this, HeaderToolbarComponent);
      }

      _createClass(HeaderToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderToolbarComponent;
    }();

    HeaderToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/header-toolbar/header-toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-toolbar.component.css */
      "./src/app/AppComponent/header-toolbar/header-toolbar.component.css")).default]
    })], HeaderToolbarComponent);
    /***/
  },

  /***/
  "./src/app/AppComponent/home/home.component.css":
  /*!******************************************************!*\
    !*** ./src/app/AppComponent/home/home.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FwcENvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/AppComponent/home/home.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/AppComponent/home/home.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'propeller-ui';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/AppComponent/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/AppComponent/project-management/models/access.entity.model.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/AppComponent/project-management/models/access.entity.model.ts ***!
    \*******************************************************************************/

  /*! exports provided: FDG_TYPE, TAI_TYPE */

  /***/
  function srcAppAppComponentProjectManagementModelsAccessEntityModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FDG_TYPE", function () {
      return FDG_TYPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAI_TYPE", function () {
      return TAI_TYPE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FDG_TYPE = "Firmwide Directory Group (n/)";
    var TAI_TYPE = "TAI";
    /***/
  },

  /***/
  "./src/app/AppComponent/project-management/project.managment.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/AppComponent/project-management/project.managment.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentProjectManagementProjectManagmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FwcENvbXBvbmVudC9wcm9qZWN0LW1hbmFnZW1lbnQvcHJvamVjdC5tYW5hZ21lbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/AppComponent/project-management/project.managment.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/AppComponent/project-management/project.managment.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProjectManagementComponent */

  /***/
  function srcAppAppComponentProjectManagementProjectManagmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectManagementComponent", function () {
      return ProjectManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/access.entity.model */
    "./src/app/AppComponent/project-management/models/access.entity.model.ts");
    /* harmony import */


    var src_app_services_demo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/demo.service */
    "./src/app/services/demo.service.ts");

    var ProjectManagementComponent =
    /*#__PURE__*/
    function () {
      function ProjectManagementComponent(ds) {
        _classCallCheck(this, ProjectManagementComponent);

        this.ds = ds;
        this.projects = [];
        this.selectedProject = null;
        this.isProjectList = true;
      }

      _createClass(ProjectManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ds.getProjects().subscribe(function (res) {
            return _this.projects = res;
          }); // this.projects.push( {
          //   name:"p1",
          //   desc: "mymyt",
          //   email:"mmcore",
          //   accessBundles: [
          //     {
          //       name: "ab1",
          //       desc:"its ab",
          //       accessEntities: [
          //         {type : FDG_TYPE, eondId:"71486", grn:"thegrn", group:"Wolf", role:"God", team:"alpha"}
          //       ]
          //     }
          //   ]
          // } );

          this.resetSelectedProject();
        }
      }, {
        key: "resetSelectedProject",
        value: function resetSelectedProject() {
          this.selectedProject = {
            name: "",
            desc: "",
            email: "",
            accessBundles: [{
              name: "",
              desc: "",
              accessEntities: [{
                type: _models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__["FDG_TYPE"],
                eonId: "",
                grn: "",
                group: "",
                role: "",
                team: ""
              }]
            }]
          };
        }
      }, {
        key: "addAccessBundle",
        value: function addAccessBundle() {
          this.selectedProject.accessBundles.push({
            name: "",
            desc: "",
            accessEntities: [{
              type: _models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__["FDG_TYPE"],
              eonId: "",
              grn: "",
              group: "",
              role: "",
              team: ""
            }]
          });
        }
      }, {
        key: "addAccessEntity",
        value: function addAccessEntity(ab) {
          ab.accessEntities.push({
            type: _models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__["FDG_TYPE"],
            eonId: "",
            grn: "",
            group: "",
            role: "",
            team: ""
          });
        }
      }, {
        key: "isFDG",
        value: function isFDG(ae) {
          return ae.type.indexOf(_models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__["FDG_TYPE"]) >= 0;
        }
      }, {
        key: "newProject",
        value: function newProject() {
          this.resetSelectedProject();
          this.isProjectList = !this.isProjectList;
        }
      }, {
        key: "projectSelectEvent",
        value: function projectSelectEvent(project) {
          this.selectedProject = project;
          this.isProjectList = !this.isProjectList;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          console.log(this.selectedProject);
          this.ds.addProject(this.selectedProject).subscribe(function (res) {
            return console.log(res);
          });
          this.isProjectList = !this.isProjectList;
          this.ds.getProjects().subscribe(function (res) {
            return _this2.projects = res;
          });
        }
      }]);

      return ProjectManagementComponent;
    }();

    ProjectManagementComponent.ctorParameters = function () {
      return [{
        type: src_app_services_demo_service__WEBPACK_IMPORTED_MODULE_3__["DemoService"]
      }];
    };

    ProjectManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'project-managment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.managment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/project-management/project.managment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.managment.component.css */
      "./src/app/AppComponent/project-management/project.managment.component.css")).default]
    })], ProjectManagementComponent);
    /***/
  },

  /***/
  "./src/app/AppComponent/request-access/request-access.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/AppComponent/request-access/request-access.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentRequestAccessRequestAccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FwcENvbXBvbmVudC9yZXF1ZXN0LWFjY2Vzcy9yZXF1ZXN0LWFjY2Vzcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/AppComponent/request-access/request-access.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/AppComponent/request-access/request-access.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RequestAccessComponent */

  /***/
  function srcAppAppComponentRequestAccessRequestAccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestAccessComponent", function () {
      return RequestAccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_management_models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project-management/models/access.entity.model */
    "./src/app/AppComponent/project-management/models/access.entity.model.ts");

    var RequestAccessComponent =
    /*#__PURE__*/
    function () {
      function RequestAccessComponent() {
        _classCallCheck(this, RequestAccessComponent);
      }

      _createClass(RequestAccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.requestAccess = {
            businessUnit: 'Technology',
            division: 'WM Technology',
            superDepartment: 'Global Banking Tech',
            department: 'GBT Banking & Payment Services',
            projectSelected: 'MMNG',
            accessBundleSelected: 'common',
            projects: [{
              name: 'MMNG'
            }, {
              name: 'MM Classic'
            }],
            accessBundles: [{
              name: 'common'
            }],
            resourceList: [{
              isSelected: true,
              resourceType: _project_management_models_access_entity_model__WEBPACK_IMPORTED_MODULE_2__["FDG_TYPE"],
              resourceName: "Mailing Group",
              resourceValue: "mmng-all"
            }]
          };
        }
      }, {
        key: "initiateAccessRequestProcess",
        value: function initiateAccessRequestProcess() {
          //do something meaningful here
          console.log('here');
        }
      }]);

      return RequestAccessComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestAccessComponent.prototype, "requestAccess", void 0);
    RequestAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-access',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-access.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/AppComponent/request-access/request-access.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-access.component.css */
      "./src/app/AppComponent/request-access/request-access.component.css")).default]
    })], RequestAccessComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _AppComponent_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./AppComponent/home/home.component */
    "./src/app/AppComponent/home/home.component.ts");
    /* harmony import */


    var _AppComponent_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./AppComponent/dashboard/dashboard.component */
    "./src/app/AppComponent/dashboard/dashboard.component.ts");
    /* harmony import */


    var _AppComponent_request_access_request_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./AppComponent/request-access/request-access.component */
    "./src/app/AppComponent/request-access/request-access.component.ts");
    /* harmony import */


    var _AppComponent_project_management_project_managment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./AppComponent/project-management/project.managment.component */
    "./src/app/AppComponent/project-management/project.managment.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _AppComponent_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'projectmanagement',
      component: _AppComponent_project_management_project_managment_component__WEBPACK_IMPORTED_MODULE_6__["ProjectManagementComponent"]
    }, {
      path: 'dashboard',
      component: _AppComponent_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'requestAccess',
      component: _AppComponent_request_access_request_access_component__WEBPACK_IMPORTED_MODULE_5__["RequestAccessComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'propeller-ui';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _AppComponent_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./AppComponent/home/home.component */
    "./src/app/AppComponent/home/home.component.ts");
    /* harmony import */


    var _AppComponent_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./AppComponent/dashboard/dashboard.component */
    "./src/app/AppComponent/dashboard/dashboard.component.ts");
    /* harmony import */


    var _AppComponent_request_access_request_access_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./AppComponent/request-access/request-access.component */
    "./src/app/AppComponent/request-access/request-access.component.ts");
    /* harmony import */


    var _AppComponent_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./AppComponent/header-toolbar/header-toolbar.component */
    "./src/app/AppComponent/header-toolbar/header-toolbar.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _AppComponent_project_management_project_managment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./AppComponent/project-management/project.managment.component */
    "./src/app/AppComponent/project-management/project.managment.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _AppComponent_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _AppComponent_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _AppComponent_request_access_request_access_component__WEBPACK_IMPORTED_MODULE_7__["RequestAccessComponent"], _AppComponent_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["HeaderToolbarComponent"], _AppComponent_project_management_project_managment_component__WEBPACK_IMPORTED_MODULE_14__["ProjectManagementComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["routes"], {
        useHash: true
      }), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/demo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/demo.service.ts ***!
    \******************************************/

  /*! exports provided: DemoService */

  /***/
  function srcAppServicesDemoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoService", function () {
      return DemoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DemoService =
    /*#__PURE__*/
    function () {
      function DemoService(_httpClient) {
        _classCallCheck(this, DemoService);

        this._httpClient = _httpClient; //This addr is including port

        this.BASE_URL = "http://" + window.location.host; //public BASE_URL = "http://propeller27.azurewebsites.net";

        this.EMPLOYEE_DATA_URL = "".concat(this.BASE_URL, "/api/v1/employees");
        this.PROJECT_DATA_URL = "".concat(this.BASE_URL, "/api/v1/projects");
      }

      _createClass(DemoService, [{
        key: "getEmployees",
        value: function getEmployees() {
          return this._httpClient.get(this.EMPLOYEE_DATA_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.message || 'Something went wrong');
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          return this._httpClient.get(this.PROJECT_DATA_URL);
        }
      }, {
        key: "addProject",
        value: function addProject(project) {
          return this._httpClient.post(this.PROJECT_DATA_URL, project);
        }
      }]);

      return DemoService;
    }();

    DemoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DemoService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\WC\Codethon_Sample_UI\propeller-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map