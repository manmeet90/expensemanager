(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"site-wrapper\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Expense Manager</a>\n          </div>\n      \n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li><a routerLink=\"\">Show All Expenses</a></li>\n              <li><a routerLink=\"create\">Create New Expense</a></li>\n              <li><a routerLink=\"reports\">Reports</a></li>\n            </ul>\n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n      <section id=\"main\">\n        <router-outlet></router-outlet>\n      </section>\n      <div id=\"footer\">\n      \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_404_PageNotFound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/404/PageNotFound.component */ "./src/app/components/404/PageNotFound.component.ts");
/* harmony import */ var _components_reports_Reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reports/Reports.component */ "./src/app/components/reports/Reports.component.ts");
/* harmony import */ var _components_expenses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/expenses */ "./src/app/components/expenses/index.ts");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/expense.service */ "./src/app/services/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_404_PageNotFound_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _components_reports_Reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"],
                _components_expenses__WEBPACK_IMPORTED_MODULE_7__["CreateExpenseComponent"],
                _components_expenses__WEBPACK_IMPORTED_MODULE_7__["ExpenseComponent"],
                _components_expenses__WEBPACK_IMPORTED_MODULE_7__["ExpenseListComponent"]
            ],
            imports: [
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTES"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [
                _components_expenses__WEBPACK_IMPORTED_MODULE_7__["ExpenseType"],
                _services_expense_service__WEBPACK_IMPORTED_MODULE_8__["ExpenseService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_404_PageNotFound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/404/PageNotFound.component */ "./src/app/components/404/PageNotFound.component.ts");
/* harmony import */ var _components_reports_Reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reports/Reports.component */ "./src/app/components/reports/Reports.component.ts");
/* harmony import */ var _components_expenses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/expenses */ "./src/app/components/expenses/index.ts");




var routes = [
    {
        path: '',
        redirectTo: 'expenses',
        pathMatch: 'full'
    },
    {
        path: 'expenses',
        component: _components_expenses__WEBPACK_IMPORTED_MODULE_3__["ExpenseListComponent"],
        children: [
            {
                path: ":year/:month",
                component: _components_expenses__WEBPACK_IMPORTED_MODULE_3__["ExpenseComponent"]
            }
        ]
    },
    {
        path: 'create',
        component: _components_expenses__WEBPACK_IMPORTED_MODULE_3__["CreateExpenseComponent"]
    },
    {
        path: 'reports',
        component: _components_reports_Reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    },
    {
        path: '**',
        component: _components_404_PageNotFound_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
    }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/404/PageNotFound.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/404/PageNotFound.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.title = "Page Not Found!";
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./PageNotFound.html */ "./src/app/components/404/PageNotFound.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/404/PageNotFound.html":
/*!**************************************************!*\
  !*** ./src/app/components/404/PageNotFound.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>{{title}}</div>"

/***/ }),

/***/ "./src/app/components/expenses/CreateExpense.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/expenses/CreateExpense.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExpenseComponent", function() { return CreateExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _expenseType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenseType */ "./src/app/components/expenses/expenseType.ts");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/expense.service */ "./src/app/services/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateExpenseComponent = /** @class */ (function () {
    function CreateExpenseComponent(fb, expenseType, expenseService) {
        this.fb = fb;
        this.expenseType = expenseType;
        this.expenseService = expenseService;
    }
    CreateExpenseComponent.prototype.ngOnInit = function () {
        this.expenseTypes = this.expenseType.getExpenseTypes();
        this.expenseForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expenseType: [this.expenseTypes[0].value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: ['']
        });
    };
    CreateExpenseComponent.prototype.onCreateButtonClicked = function () {
        console.log(this.expenseForm.value);
        this.expenseService.saveExpense(this.expenseForm.value)
            .then(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                alert('Expense saved successfully');
            }
        });
    };
    CreateExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./CreateExpense.html */ "./src/app/components/expenses/CreateExpense.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _expenseType__WEBPACK_IMPORTED_MODULE_2__["ExpenseType"],
            _services_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"]])
    ], CreateExpenseComponent);
    return CreateExpenseComponent;
}());



/***/ }),

/***/ "./src/app/components/expenses/CreateExpense.html":
/*!********************************************************!*\
  !*** ./src/app/components/expenses/CreateExpense.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    #expenseform {\n        margin: 0 15px;\n        width: 500px;\n    }\n</style>\n<div id=\"expenseform\">\n    <form [formGroup]='expenseForm'>\n        <div class=\"form-group\">\n            <label for=\"description\">Expense Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Expense Name\" formControlName=\"description\" />\n            <span class=\"text-danger\" *ngIf='expenseForm.controls.description.touched && expenseForm.controls.description.errors?.required'>Expense Description is required</span>\n        </div>\n        <div class=\"form-group\">\n                <label for=\"description\">Amount</label>\n                <input type=\"number\" class=\"form-control\" id=\"description\" formControlName=\"amount\" />\n            <span class=\"text-danger\" *ngIf='expenseForm.controls.amount.touched && expenseForm.controls.amount.errors?.required'>Amount is required</span>\n                \n            </div>\n            <div class=\"form-group\">\n                    <label for=\"expense_type\">Expense Type</label>\n                    <select formControlName='expenseType' class='form-control'name=\"expense_type\" id=\"expense_type\">\n                        <option *ngFor='let expenseType of expenseTypes' [value]=\"expenseType.value\">{{expenseType.name}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"remarks\">Remarks</label>\n                        <input type=\"text\" class=\"form-control\" id=\"remarks\" placeholder=\"Extra remarks\" formControlName=\"remarks\" />\n                    </div>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)='onCreateButtonClicked()'>Create</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/expenses/Expense.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/expenses/Expense.component.ts ***!
  \**********************************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent() {
    }
    ExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./Expense.html */ "./src/app/components/expenses/Expense.html")
        })
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/components/expenses/Expense.html":
/*!**************************************************!*\
  !*** ./src/app/components/expenses/Expense.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Expense Component</div>"

/***/ }),

/***/ "./src/app/components/expenses/ExpenseList.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/expenses/ExpenseList.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return ExpenseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/expense.service */ "./src/app/services/expense.service.ts");
/* harmony import */ var _expenseType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenseType */ "./src/app/components/expenses/expenseType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpenseListComponent = /** @class */ (function () {
    function ExpenseListComponent(expenseService, expenseType) {
        this.expenseService = expenseService;
        this.expenseType = expenseType;
        this._data = [];
        this.expenses = [];
        this.years = [];
        this.months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    ExpenseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenseTypes = this.expenseType.getExpenseTypes();
        this.expenseService.getAllExpenses()
            .then(function (snapshot) {
            var data = snapshot.val();
            for (var year in data) {
                _this.years.push(year);
                for (var month in data[year]) {
                    for (var _d in data[year][month]) {
                        _this.expenses.push(data[year][month][_d]);
                        _this._data = _this.expenses;
                        _this.total = _this.calculateTotal();
                    }
                }
            }
        });
    };
    ExpenseListComponent.prototype.filterListByYear = function (year) {
        this.expenses = year ? this._data.filter(function (_d) { return _d.year === year; }) : this._data;
        this.total = this.calculateTotal();
    };
    ExpenseListComponent.prototype.filterListByMonth = function (month) {
        this.expenses = month ? this._data.filter(function (_d) { return _d.month === month; }) : this._data;
        this.total = this.calculateTotal();
    };
    ExpenseListComponent.prototype.filterListByExpenseType = function (type) {
        this.expenses = type ? this._data.filter(function (_d) { return _d.expenseType === type; }) : this._data;
        this.total = this.calculateTotal();
    };
    ExpenseListComponent.prototype.calculateTotal = function () {
        var total = 0;
        this.expenses.forEach(function (_d) {
            total += _d.amount;
        });
        return total;
    };
    ExpenseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ExpenseList.html */ "./src/app/components/expenses/ExpenseList.html")
        }),
        __metadata("design:paramtypes", [_services_expense_service__WEBPACK_IMPORTED_MODULE_1__["ExpenseService"], _expenseType__WEBPACK_IMPORTED_MODULE_2__["ExpenseType"]])
    ], ExpenseListComponent);
    return ExpenseListComponent;
}());



/***/ }),

/***/ "./src/app/components/expenses/ExpenseList.html":
/*!******************************************************!*\
  !*** ./src/app/components/expenses/ExpenseList.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        Filter By :\n        <div>\n            Year :\n            <select name=\"year\" id=\"year\" #year (change)=\"filterListByYear(year.value)\">\n                <option value=\"\">Choose filterListByYear</option>\n                <option *ngFor='let year of years' [value]=\"year\">{{year}}</option>\n            </select>\n            Month :\n            <select name=\"month\" id=\"month\" #month (change)=\"filterListByMonth(month.value)\">\n                <option value=\"\">Choose Month</option>\n                <option *ngFor='let month of months' [value]=\"month\">{{month}}</option>\n            </select>\n            Expense Type :\n            <select name=\"month\" id=\"month\" #expenseType (change)=\"filterListByExpenseType(expenseType.value)\">\n                <option value=\"\">Choose Type</option>\n                    <option *ngFor='let expenseType of expenseTypes' [value]=\"expenseType.value\">{{expenseType.name}}</option>\n            </select>\n        </div>\n    </div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Expense Name</th>\n                <th>Amount</th>\n                <th>Year</th>\n                <th>Month</th>\n                <th>Expense Type</th>\n                <th>Remarks</th>\n            </tr>\n        </thead>\n        <tbody>\n            \n            <tr *ngFor='let expense of expenses'>\n                <td>\n                    <a routerLink=\"{{expense.id}}\">{{expense.description}}</a>\n                </td>\n                <td>Rs. {{expense.amount}}</td>\n                <td>{{expense.year}}</td>\n                <td>{{expense.month}}</td>\n                <td>{{expense.expenseType}}</td>\n                <td>{{expense.remarks}}</td>\n            </tr>\n            <tr>\n                    <td colspan='6' class='text-success text-bold'>Total : <strong>Rs. {{total}}</strong></td>\n                </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/expenses/expenseType.ts":
/*!****************************************************!*\
  !*** ./src/app/components/expenses/expenseType.ts ***!
  \****************************************************/
/*! exports provided: EXPENSETYPE, ExpenseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPENSETYPE", function() { return EXPENSETYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseType", function() { return ExpenseType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EXPENSETYPE;
(function (EXPENSETYPE) {
    EXPENSETYPE["OTHERS"] = "Others";
    EXPENSETYPE["RENT"] = "Rent";
    EXPENSETYPE["ONLINE_PAYMENT"] = "Online Payment";
    EXPENSETYPE["MAID"] = "Maid";
    EXPENSETYPE["GROCERIES"] = "Groceries";
    EXPENSETYPE["SHOPPING"] = "Shopping";
    EXPENSETYPE["DINNER"] = "Dinner";
    EXPENSETYPE["LUNCH"] = "Lunch";
})(EXPENSETYPE || (EXPENSETYPE = {}));
;
var ExpenseType = /** @class */ (function () {
    function ExpenseType() {
        this.expenseTypes = [];
    }
    ExpenseType.prototype.getExpenseTypes = function () {
        for (var type in EXPENSETYPE) {
            this.expenseTypes.push({
                name: type,
                value: EXPENSETYPE[type]
            });
        }
        return this.expenseTypes;
    };
    ExpenseType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ExpenseType);
    return ExpenseType;
}());

;


/***/ }),

/***/ "./src/app/components/expenses/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/expenses/index.ts ***!
  \**********************************************/
/*! exports provided: CreateExpenseComponent, ExpenseComponent, ExpenseListComponent, EXPENSETYPE, ExpenseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExpense_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExpense.component */ "./src/app/components/expenses/CreateExpense.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateExpenseComponent", function() { return _CreateExpense_component__WEBPACK_IMPORTED_MODULE_0__["CreateExpenseComponent"]; });

/* harmony import */ var _Expense_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expense.component */ "./src/app/components/expenses/Expense.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return _Expense_component__WEBPACK_IMPORTED_MODULE_1__["ExpenseComponent"]; });

/* harmony import */ var _ExpenseList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseList.component */ "./src/app/components/expenses/ExpenseList.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return _ExpenseList_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseListComponent"]; });

/* harmony import */ var _expenseType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenseType */ "./src/app/components/expenses/expenseType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPENSETYPE", function() { return _expenseType__WEBPACK_IMPORTED_MODULE_3__["EXPENSETYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpenseType", function() { return _expenseType__WEBPACK_IMPORTED_MODULE_3__["ExpenseType"]; });







/***/ }),

/***/ "./src/app/components/reports/Reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/Reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./Reports.html */ "./src/app/components/reports/Reports.html")
        })
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/Reports.html":
/*!*************************************************!*\
  !*** ./src/app/components/reports/Reports.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Reports</div>"

/***/ }),

/***/ "./src/app/services/expense.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/expense.service.ts ***!
  \*********************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExpenseService = /** @class */ (function () {
    function ExpenseService() {
        this.db = firebase.database();
    }
    ExpenseService.prototype.saveExpense = function (expense) {
        var _d = new Date();
        expense.id = uuid__WEBPACK_IMPORTED_MODULE_1__();
        var _rootRefYear = _d.getFullYear();
        var _rootRefMonth = this.getMonthString(_d.getMonth());
        expense.year = _rootRefYear;
        expense.month = _rootRefMonth;
        return this.db.ref().child(_rootRefYear + "/" + _rootRefMonth + "/" + expense.id).update(expense);
    };
    ExpenseService.prototype.getMonthString = function (month) {
        var result;
        switch (parseInt(month)) {
            case 0:
                result = "Jan";
                break;
            case 1:
                result = "Feb";
                break;
            case 2:
                result = "Mar";
                break;
            case 3:
                result = "Apr";
                break;
            case 4:
                result = "May";
                break;
            case 5:
                result = "Jun";
                break;
            case 6:
                result = "Jul";
                break;
            case 7:
                result = "Aug";
                break;
            case 8:
                result = "Sep";
                break;
            case 9:
                result = "Oct";
                break;
            case 10:
                result = "Nov";
                break;
            case 11:
                result = "Dec";
                break;
        }
        return result;
    };
    ExpenseService.prototype.getAllExpenses = function () {
        return this.db.ref().once('value');
    };
    ExpenseService.prototype.getExpensesByYear = function (year) {
        return this.db.ref("" + year).once('value');
    };
    ExpenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manmeetg/Documents/mystuffs/expensemanager/expenseapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map