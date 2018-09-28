(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-department-department-module"],{

/***/ "./src/app/components/_animations/fade-in.animation.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/_animations/fade-in.animation.ts ***!
  \*************************************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/components/_animations/index.ts":
/*!*************************************************!*\
  !*** ./src/app/components/_animations/index.ts ***!
  \*************************************************/
/*! exports provided: fadeInAnimation, slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade-in.animation */ "./src/app/components/_animations/fade-in.animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return _fade_in_animation__WEBPACK_IMPORTED_MODULE_0__["fadeInAnimation"]; });

/* harmony import */ var _slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-in-out.animation */ "./src/app/components/_animations/slide-in-out.animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return _slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"]; });





/***/ }),

/***/ "./src/app/components/_animations/slide-in-out.animation.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/_animations/slide-in-out.animation.ts ***!
  \******************************************************************/
/*! exports provided: slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/components/department/department-detail/department-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/department/department-detail/department-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form\">\r\n        <h1>{{title}}</h1>\r\n        <div class=\"form-container\">\r\n            <form (ngSubmit)=\"saveProduct()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <!-- <input type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" class=\"form-control\" required /> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Price</label>\r\n                    <!-- <input type=\"text\" name=\"price\" [(ngModel)]=\"product.price\" class=\"form-control\" required /> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <a class=\"btn btn-default\" routerLink=\"/department\">Cancel</a>\r\n                    <button class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/department/department-detail/department-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/department/department-detail/department-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DepartmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailComponent", function() { return DepartmentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations */ "./src/app/components/_animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = "Add Product";
        this.product = {};
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var productId = Number(this.route.snapshot.params['id']);
        if (productId) {
            this.title = 'Edit Product';
            // this.product = this.productService.getById(productId);
        }
    };
    DepartmentDetailComponent.prototype.saveProduct = function () {
        // save product
        // this.productService.save(this.product);
        // redirect to users view
        this.router.navigate(['products']);
        // publish event so list controller can refresh
        // this.pubSubService.publish('products-updated');
    };
    DepartmentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./department-detail.component.html */ "./src/app/components/department/department-detail/department-detail.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"]],
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/department/department.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/department/department.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Products</h1>\r\n<a routerLink=\"add\" class=\"btn btn-default\">Add Product</a>\r\n<table class=\"table products-table\">\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th class=\"delete-column\"></th>\r\n    </tr>\r\n    <tr *ngFor=\"let product of products\">\r\n        <td><a [routerLink]=\"['edit', product.id]\">{{product.name}}</a></td>\r\n        <td>${{product.price}}</td>\r\n        <td><a (click)=\"deleteProduct(product.id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\r\n    </tr>\r\n</table>\r\n<div class=\"view-side-form\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/components/department/department.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/department/department.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_animations/index */ "./src/app/components/_animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentComponent = /** @class */ (function () {
    // subscription: Subscription;
    function DepartmentComponent() {
    }
    DepartmentComponent.prototype.deleteProduct = function (id) {
        // this.productService.delete(id);
        this.loadProducts();
    };
    DepartmentComponent.prototype.ngOnInit = function () {
        this.loadProducts();
        // reload products when updated
        // this.subscription = this.pubSubService.on('products-updated').subscribe(() => this.loadProducts());
    };
    DepartmentComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
    };
    DepartmentComponent.prototype.loadProducts = function () {
        // this.products = this.productService.getAll();
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/components/department/department.component.html"),
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/department/department.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/department/department.module.ts ***!
  \************************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var _department_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.routing */ "./src/app/components/department/department.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./department-detail/department-detail.component */ "./src/app/components/department/department-detail/department-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _department_component__WEBPACK_IMPORTED_MODULE_1__["DepartmentComponent"],
                _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentDetailComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _department_routing__WEBPACK_IMPORTED_MODULE_2__["DepartmentRouting"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./src/app/components/department/department.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/department/department.routing.ts ***!
  \*************************************************************/
/*! exports provided: routes, DepartmentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRouting", function() { return DepartmentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-detail/department-detail.component */ "./src/app/components/department/department-detail/department-detail.component.ts");



var routes = [
    {
        path: '',
        component: _department_component__WEBPACK_IMPORTED_MODULE_1__["DepartmentComponent"],
        children: [
            { path: 'add', component: _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentDetailComponent"] },
            { path: 'edit/:id', component: _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentDetailComponent"] }
        ]
    }
];
var DepartmentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=app-components-department-department-module.js.map