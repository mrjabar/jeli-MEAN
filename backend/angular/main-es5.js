(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../jayem 1009/src/environments/environment.ts":
/*!**********************************************!*\
  !*** . 1009/src/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-courses/admin-courses.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-courses/admin-courses.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-sidebar></app-sidebar>\n\n  <h1>Course Dashboard</h1>\n  <p>\n    <!-- <a routerLink=\"/admin/courses/new\" class=\"btn btn-primary\">New Course</a> -->\n    <a routerLink=\"/admin/courses/new\" mat-raised-button color=\"accent\">New Course</a>\n  </p>\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n    </mat-form-field>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell >\n              <mat-cell *matCellDef=\"let course\"> {{ course.name }} </mat-cell>\n\n            <!-- <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell> -->\n            <!-- <mat-cell *matCellDef=\"let course\"> {{ course.name }} </mat-cell> -->\n          </ng-container>\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Price</mat-header-cell>\n            <mat-cell *matCellDef=\"let course\"> {{course.price | currency: 'USD'}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"action\" >\n            <th mat-header-cell *matHeaderCellDef > Action</th>\n            <td mat-cell *matCellDef=\"let course\">\n              <span matTooltip=\"Edit\">\n                <!-- <a class=\"course-edit-btn\" [routerLink]=\"['/admin/edit', course.id]\">\n                  edit\n                </a> -->\n                <i class=\"fas fa-edit\"  [routerLink]=\"['/admin/courses', course.id]\"></i>\n              </span>\n            <!-- </td>\n            <td mat-cell *matCellDef=\"let course\"> -->\n              <span matTooltip=\"Delete\">\n                <!-- <button (click)=\"onDelete(course.id)\">\n                      delete\n                </button> -->\n                <i class=\"fas fa-trash-alt\" (click)=\"onDelete(course.id)\"></i>\n              </span>\n            </td>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let course; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n      <mat-paginator [pageIndex]=\"0\" [pageSize]=\"10\"\n      [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-enquiries/admin-enquiries.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-enquiries/admin-enquiries.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-sidebar></app-sidebar>\n\n  <h1>Enquiry Dashboard</h1>\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n    </mat-form-field>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"firstName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell >\n            <mat-cell *matCellDef=\"let enquiry\"> {{ enquiry.firstName }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"lastName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell >\n            <mat-cell *matCellDef=\"let enquiry\"> {{ enquiry.lastName }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n            <mat-cell *matCellDef=\"let enquiry\"> {{enquiry.email}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"content\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Enquiry Details</mat-header-cell >\n            <mat-cell *matCellDef=\"let enquiry\"> {{ enquiry.content }} </mat-cell>\n            </ng-container>\n\n          <ng-container matColumnDef=\"action\" >\n            <th mat-header-cell *matHeaderCellDef > Action</th>\n            <td mat-cell *matCellDef=\"let enquiry\">\n              <span matTooltip=\"Delete\">\n                <i class=\"fas fa-trash-alt\" (click)=\"onDelete(enquiry.id)\"></i>\n              </span>\n            </td>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let enquiry; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n      <mat-paginator [pageIndex]=\"0\" [pageSize]=\"10\"\n      [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-feedbacks/admin-feedbacks.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-feedbacks/admin-feedbacks.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n  <div\n    class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\"\n  >\n    <h1 class=\"h2\">All Feedbacks</h1>\n  </div>\n</main>\n<div class=\"order-feedback\">\n  <app-feedback-list></app-feedback-list>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-order/admin-orders.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-order/admin-orders.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n  <div\n    class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\"\n  >\n    <h1 class=\"h2\">All Orders</h1>\n  </div>\n</main>\n<!-- <div class=\"admin-order\">\n  <app-order></app-order>\n</div> -->\n\n<div class=\"container\">\n  <!-- <br /><br /> -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card text-white bg-secondary md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-box\"></i><span class=\"statsNum\">{{orders.length}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card text-white bg-success md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-money-bill-alt\"></i\n            ><span class=\"statsNum\">{{totalEarnings(orders) | currency}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card text-white bg-info md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-sticky-note\"></i\n            ><span class=\"statsNum\">{{totalItems(orders)}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-2\" *ngFor=\"let order of orders\">\n    <div class=\"card-body p-0 pl-3\">\n      <div class=\"row\">\n        <div class=\"col d-flex flex-column justify-content-center\">\n            <h5 class=\"card-title-address\">Address</h5>\n            <p class=\"card-text\">\n              Name: {{order.firstName}} {{order.lastName}}<br />\n              Address: {{order.addressOne}}<br />\n              Address: {{order.addressTwo}}<br />\n              {{order.country}}<br />\n            </p>\n          </div>\n          <div class=\"col\">\n            <h5 class=\"card-title-items\">Order Items</h5>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let item of order.items\">{{item?.name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer text-muted\">\n        <p>\n          Order Id: {{order._id}}\n          <span matTooltip=\"Delete\" class=\"pull-right\">\n              <!-- <button (click)=\"onDelete(course.id)\">\n                    delete\n              </button> -->\n              <i class=\"fas fa-trash-alt\" (click)=\"onDelete(order.id)\"></i>\n            </span><br/>\n        </p>\n          <b>\n            Total :{{orderTotal(order.items) | currency}}\n          </b>\n      </div>\n\n        <!-- <div class=\"card-footer d-flex justify-content-between pull-right\">\n            <b>\n              Total :{{orderTotal(order.items) | currency}}\n              <span matTooltip=\"Delete\">\n                  <button (click)=\"onDelete(course.id)\">\n                        delete\n                  </button>\n                  <i class=\"fas fa-trash-alt\" (click)=\"onDelete(course.id)\"></i>\n                </span>\n\n            </b>\n\n          </div>\n -->\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-users/admin-users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-users/admin-users.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-sidebar></app-sidebar>\n\n  <h1>User Dashboard</h1>\n  <p>\n    <!-- <a routerLink=\"/admin/courses/new\" class=\"btn btn-primary\">New Course</a> -->\n    <a routerLink=\"/admin/users/new\" mat-raised-button color=\"accent\">New User</a>\n  </p>\n  <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n    </mat-form-field>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <ng-container matColumnDef=\"fullName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Full Name</mat-header-cell >\n            <mat-cell *matCellDef=\"let user\"> {{ user.fullName }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Email </mat-header-cell >\n            <mat-cell *matCellDef=\"let user\"> {{ user.email }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"isAdmin\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Admin Role </mat-header-cell >\n            <mat-cell *matCellDef=\"let user\"> {{ user.isAdmin }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"username\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Username </mat-header-cell >\n            <mat-cell *matCellDef=\"let user\"> {{ user.username }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"contact\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\"> {{user.contact}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"action\" >\n            <th mat-header-cell *matHeaderCellDef > Action</th>\n            <td mat-cell *matCellDef=\"let user\">\n              <span matTooltip=\"Edit\">\n                <i class=\"fas fa-edit\"  [routerLink]=\"['/admin/users', user.id]\"></i>\n              </span>\n              <span matTooltip=\"Delete\">\n                <i class=\"fas fa-trash-alt\" (click)=\"onDelete(user.id)\"></i>\n              </span>\n            </td>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let user; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n      <mat-paginator [pageIndex]=\"0\" [pageSize]=\"10\"\n      [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar></app-sidebar>\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div\n        class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\"\n      >\n        <h1 class=\"h2\">Dashboard</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card text-white bg-secondary md-3\">\n            <div class=\"card-body\">\n              <p class=\"card-text d-flex justify-content-around\">\n                <i class=\"fas fa-5x fa-box\"></i\n                ><span class=\"statsNum\">{{ orders.length }}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"card text-white bg-success md-3\">\n            <div class=\"card-body\">\n              <p class=\"card-text d-flex justify-content-around\">\n                <i class=\"fas fa-5x fa-money-bill-alt\"></i\n                ><span class=\"statsNum\">{{\n                  totalEarnings(orders) | currency\n                }}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"card text-white bg-info md-3\">\n            <div class=\"card-body\">\n              <p class=\"card-text d-flex justify-content-around\">\n                <i class=\"fas fa-5x fa-sticky-note\"></i\n                ><span class=\"statsNum\">{{ totalItems(orders) }}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/course-form/course-form.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/course-form/course-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n  </div>\n  <div class=\"col-md-6\">\n      <h3>New Course</h3>\n      <form [formGroup]=\"form\" (submit)=\"onSaveCourse()\" *ngIf=\"!isLoading\">\n          <div class=\"form-group\">\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required/>\n            <div class=\"alert alert-danger\" *ngIf=\"form.get('name').touched && form.get('name').invalid\">\n                Title is required\n            </div>\n            </div>\n          <div class=\"form-group\">\n              <input formControlName=\"category\" type=\"text\" class=\"form-control\" placeholder=\"Enter category eg. English, French, Arabic\"/>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('category').touched && form.get('category').invalid\">\n                  Category is required\n              </div>\n\n            </div>\n\n          <div class=\"form-group\">\n            <textarea formControlName=\"description\" id=\"\" rows=\"2\" class=\"form-control\" placeholder=\"Description\"></textarea>\n            <div class=\"alert alert-danger\" *ngIf=\"form.get('description').touched && form.get('description').invalid\">\n                Description is required\n            </div>\n\n          </div>\n          <!-- <div class=\"form-group\">\n            <select id=\"category\" class=\"form-control\" placeholder=\"category\">\n              <option value=\"\">Select Category</option>\n              <option *ngFor=\"let category of course\" [value]=\"category\">{{course.category}}</option>\n            </select>\n          </div> -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input formControlName=\"price\" type=\"text\" class=\"form-control\" placeholder=\"Price\" required [min]=\"0\"/>\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"form.get('price').touched && form.get('price').invalid\">\n              <div *ngIf=\"form.get('price').errors.required\">Price is required</div>\n              <div *ngIf=\"form.get('price').errors.min\">Price should be 0 or higher</div>\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div>\n                <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\n                  Pick Image\n                </button>\n                <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" />\n              </div>\n              <div\n                class=\"image-preview\"\n                *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\"\n              >\n                <img [src]=\"imagePreview\" [alt]=\"form.value.name\" />\n              </div>\n\n          </div>\n          <button class=\"btn btn-primary\">Save</button>\n        </form>\n\n    </div>\n\n    <div class=\"col-md-3\">\n\n      </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/course-list/course-list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/course-list/course-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h3>Course List</h3>\n  <mat-form-field>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event.target.value)\"\n      placeholder=\"Filter\"\n    />\n  </mat-form-field>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header\n          >Name</mat-header-cell\n        >\n        <mat-cell *matCellDef=\"let course\"> {{ course.name }} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header\n          >Description</mat-header-cell\n        >\n        <mat-cell *matCellDef=\"let course\"> {{ course.description }} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header\n          >Price</mat-header-cell\n        >\n        <mat-cell *matCellDef=\"let course\">\n          {{ course.price | currency: \"USD\" }}\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let course\">\n          <span matTooltip=\"Edit\">\n            <a\n              type=\"button\"\n              mat-raised-button\n              class=\"course-edit-btn mat-raised-button\"\n              [routerLink]=\"['/admin/edit', course.id]\"\n              *ngIf=\"userIsAuthenticated && userId === course.creator\"\n            >\n              <i class=\"fas fa-edit\"></i>\n            </a>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button\n              type=\"button\"\n              mat-raised-button\n              class=\"course-delete-btn\"\n              (click)=\"onDelete(course.id)\"\n              *ngIf=\"userIsAuthenticated && userId === course.creator\"\n            >\n              <i class=\"fas fa-trash-alt \"></i>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let course; columns: displayedColumns\"></mat-row>\n    </mat-table>\n    <mat-paginator\n      [pageIndex]=\"0\"\n      [pageSize]=\"5\"\n      [pageSizeOptions]=\"[5, 10, 25, 100]\"\n    ></mat-paginator>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <app-appnav></app-appnav>\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/appnav/appnav.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appnav/appnav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n  <nav class=\"navbar navbar-expand-md mb-4\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <img class=\"header-logo\" src=\"assets/images/Jeli_logo.jpg\"/>\n      </a>\n      <li class=\"nav-item \">\n          <button  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span><i class=\"fas fa-bars\"></i></span>\n            </button>\n      </li>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto hidden-sm-down\">\n          <li class=\"nav-item\" *ngIf=\"userIsAuthenticated && userIsAuthenticated === isAdmin\">\n              <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\"\n                >Admin</a\n              >\n\n              <li class=\"nav-item\" >\n                  <a class=\"nav-link\" routerLink=\"/courses\" routerLinkActive=\"active\"\n                    >Courses</a\n                  >\n                </li>\n                <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\n                  <a class=\"nav-link\" routerLink=\"/posts\" routerLinkActive=\"active\"\n                    >Forum</a\n                  >\n                </li>\n                <li class=\"nav-item\" >\n                  <a class=\"nav-link\" routerLink=\"/contact-us\" routerLinkActive=\"active\"\n                    >Contact Us</a\n                  >\n                </li>\n                <li class=\"nav-item\" >\n                  <a class=\"nav-link\" routerLink=\"/aboutus\" routerLinkActive=\"active\"\n                    >About Us</a\n                  >\n                </li>\n              </ul>\n              <ul class=\"navbar-nav pull-xs-right\">\n                <!-- <li *ngIf=\"userIsAuthenticated\">\n                    <a class=\"nav-link\" routerLink=\"/user/profile\" routerLinkActive=\"active\" >{{ username }}</a>\n                </li> -->\n                <li class=\"nav-item\" style=\"padding: 0 20px; font-size: 1.2em\">\n                  <a class=\"nav-link p-2\" routerLink=\"/cart\" style=\"color: #fff\">\n                    <span>\n                        <i class=\"fas fa-shopping-cart\"></i>\n\n                        <mat-icon *ngIf=\"cart.length\" matBadge=\"{{ cart.length }}\" matBadgeColor=\"warn\">\n                        </mat-icon>\n\n                    </span>\n                    <!-- <span\n                      class=\"badge badge-pill badge-danger\"\n                      style=\"margin-left: 8px\"\n                      *ngIf=\"cart.length\"\n                      >{{ cart.length }}\n                    </span> -->\n                  </a>\n                </li>\n                <li ngbDropdown class=\"nav-item dropdown\">\n                    <a ngbDropdownToggle *ngIf=\"userIsAuthenticated\" class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}}</a>\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                      <a class=\"dropdown-item\" routerLink=\"/user/profile\">My Profile</a>\n                      <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n                      <a *ngIf=\"userIsAuthenticated && userIsAuthenticated === isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/courses/new\">Manage Courses</a>\n                      <a *ngIf=\"userIsAuthenticated && userIsAuthenticated === isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n                      <a *ngIf=\"userIsAuthenticated && userIsAuthenticated === isAdmin\" class=\"dropdown-item\" routerLink=\"/admin/user\">Manage Users</a>\n                      <!-- <a type=\"button\" class=\"btn btn-outline-light\" (click)=\"onLogout()\">Logout</a> -->\n                    </div>\n                  </li>\n                  <li class=\"hidden-sm-down\" *ngIf=\"!userIsAuthenticated\">\n                    <a class=\"nav-link header-login\" routerLink=\"/login\">Login</a>\n                  </li>\n                  <li class=\"hidden-sm-down\" *ngIf=\"!userIsAuthenticated\">\n                    <a class=\"nav-link header-login\" routerLink=\"/register\">Register</a>\n                  </li>\n                  <li class=\"hidden-sm-down\" *ngIf=\"userIsAuthenticated\">\n                    <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"onLogout()\">\n                      Logout\n                    </button>\n                  </li>\n              </ul>\n              <!-- <li *ngIf=\"!userIsAuthenticated\">\n                <a class=\"nav-link header-login\" routerLink=\"/login\">Login | Register</a>\n              </li>\n              <li *ngIf=\"userIsAuthenticated\">\n                <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"onLogout()\">\n                  Logout\n                </button>\n              </li> -->\n                              <!-- <li *ngIf=\"!userIsAuthenticated\">\n                <a class=\"nav-link header-login\" routerLink=\"/login\">Login | Register</a>\n              </li>\n              <li *ngIf=\"userIsAuthenticated\">\n                <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"onLogout()\">\n                  Logout\n                </button>\n              </li> -->\n\n            </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullpage\">\n  <div class=\"text-center login-container\">\n      <form class=\"form-signin\" (submit)=\"login(loginForm)\" #loginForm=\"ngForm\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Log In</h1>\n        <div class=\"text-center mb-4\">\n            <img class=\"mb-4\" src=\"assets/images/Jeli_logo.jpg\" alt=\"\" width=\"72\" height=\"72\">\n        </div>\n\n              <label for=\"inputEmail\" class=\"sr-only\">Email Address</label>\n              <input\n                type=\"email\"\n                class=\"form-control\"\n                required=\"\"\n                autofocus=\"\"\n                placeholder=\"Email address...\"\n                name=\"email\"\n                email\n                ngModel\n                #email=\"ngModel\"\n                [class.is-invalid]=\"!email.valid && !email.pristine\"\n              >\n              <br>\n              <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                required=\"\"\n                name=\"password\"\n                placeholder=\"Password\"\n                ngModel\n                #password=\"ngModel\"\n                [class.is-invalid]=\"!password.valid && !password.pristine\"\n              >\n          <button type=\"submit\" class=\"mt-3 btn btn-lg btn-danger btn-block\" *ngIf=\"!isLoading\" [disabled]=\"!loginForm.form.valid\">Login</button>\n          <p>\n              <a class=\"mt-3 btn btn-lg btn-outline-success btn-block\" *ngIf=\"!isLoading\" routerLink=\"/register\" >Register</a>\n          </p>\n          <mat-spinner  *ngIf=\"isLoading\" color=\"accent\"></mat-spinner>\n          <p>or <a class=\"forgotten-password\" routerLink=\"/change-password\">Forgot password</a></p>\n        </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullpage\">\n  <div class=\"text-center register-container\">\n    <form class=\"form-register\" (submit)=\"onRegister(registerForm)\" #registerForm=\"ngForm\">\n      <p class=\"h3 mb-3 font-weight-normal\">Register</p>\n      <!-- <div class=\"text-center mb-4\">\n          <img class=\"mb-4\" src=\"assets/images/Jeli_logo.jpg\" alt=\"\" width=\"72\" height=\"72\">\n      </div> -->\n      <div>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required=\"\"\n          autofocus=\"\"\n          placeholder=\"Full Name\"\n          name=\"fullName\"\n          ngModel\n          #fullName=\"ngModel\"\n        />\n      </div>\n      <br>\n      <div>\n        <!-- <label for=\"inputEmail\" class=\"sr-only\">Email</label> -->\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          required=\"\"\n          autofocus=\"\"\n          placeholder=\"Email\"\n          name=\"email\"\n          ngModel\n          #email=\"ngModel\"\n        />\n      </div>\n      <br>\n      <div>\n        <!-- <label for=\"inputEmail\" class=\"sr-only\">Email</label> -->\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required=\"\"\n          autofocus=\"\"\n          placeholder=\"Username\"\n          name=\"username\"\n          ngModel\n          #username=\"ngModel\"\n        />\n      </div>\n      <br>\n      <div>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          required=\"\"\n          name=\"password\"\n          placeholder=\"Password\"\n          ngModel\n          #password=\"ngModel\"\n        />\n      </div>\n      <br>\n\n      <div>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required=\"\"\n          autofocus=\"\"\n          placeholder=\"Phone Number\"\n          name=\"contact\"\n          ngModel\n          #contact=\"ngModel\"\n        />\n      </div>\n      <br>\n      <div>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required=\"\"\n          name=\"adminCode\"\n          placeholder=\"Admin Code\"\n          ngModel\n          #adminCode=\"ngModel\"\n        />\n      </div>\n\n      <button type=\"submit\" *ngIf=\"!isLoading\" [disabled]=\"!registerForm.form.valid\" class=\"mt-3 btn btn-lg btn-success btn-block\">\n        Register\n      </button>\n      <mat-spinner  *ngIf=\"isLoading\" color=\"accent\"></mat-spinner>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"py-5 text-center\"> <h2>Shopping Cart</h2></div>\n    <div class=\"row\" *ngIf=\"cart.length; else noItemsInCart\">\n        <div class=\"col-md-8 order-md-1\">\n          <ul class=\"list-group mb-3\">\n            <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let item of cart\">\n              <div class=\"flex-grow-1\">\n                <div [style.backgroundImage]=\"'url(' + item.imagePath + ')'\" class=\"thumbnail\" alt=\"\"></div>\n                <h6 class=\"my-0\">{{item.name}}</h6><br>\n                <small class=\"text-muted\">{{item.description}}</small>\n              </div>\n              <div class=\"d-flex align-items-center\">\n                <h4 class=\"my-0\">{{item.price | currency}}</h4>\n              </div>\n              <div class=\"d-flex align-items-center\">\n                <button class=\"btn\" (click)=\"removeItemFromCart(item)\"><i class=\"far fa-times-circle\"></i></button>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4 order-md-2 mb-4\">\n            <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n              <span class=\"text-muted\">Your cart</span>\n              <span class=\"badge badge-secondary badge-pill\">{{cart.length}}</span>\n            </h4>\n            <ul class=\"list-group mb-3\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Total (USD)</span>\n                <strong>{{cartTotal | currency}}</strong>\n              </li>\n            </ul>\n            <button class=\"btn btn-primary btn-block\" routerLink=\"/checkout\">Checkout</button>\n            <button class=\"btn btn-outline-secondary btn-block\" routerLink=\"/courses\">Continue </button>\n\n          </div>\n\n    </div>\n    <ng-template #noItemsInCart>\n      <h2 class=\"text-center\">You have 0 item in your cart, your cart is empty</h2>\n    </ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fullpage\">\n    <div class=\"change-password-container\">\n        <form [formGroup]=\"form\" class=\"form-change-password\" >\n            <h1 class=\"h3 mb-3 font-weight-normal\">Change Password</h1>\n            <div class=\"form-group\">\n              <label for=\"\">Old Password</label>\n              <input formControlName=\"oldPassword\" type=\"password\" class=\"form-control\">\n              <div\n                *ngIf=\"oldPassword.touched && oldPassword.invalid\"\n                class=\"alert alert-danger\">\n                <div *ngIf=\"oldPassword.errors.required\">\n                  Old password is required.\n                </div>\n                <div *ngIf=\"oldPassword.errors.invalidOldPassword\">\n                    Old password is invalid.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">New Password</label>\n              <input formControlName=\"newPassword\" type=\"password\" class=\"form-control\">\n              <div\n                *ngIf=\"newPassword.touched && newPassword.invalid\"\n                class=\"alert alert-danger\">\n                <div *ngIf=\"newPassword.errors.required\">New password is required.</div>\n                <div *ngIf=\"newPassword.errors.invalid.newPassword\" class=\"alert alert-danger\">\n                    New password is invalid.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Confirm Password</label>\n              <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\">\n              <div\n                *ngIf=\"confirmPassword.touched && confirmPassword.invalid\"\n                class=\"alert alert-danger\">\n                <div *ngIf=\"confirmPassword.errors.required\" class=\"alert alert-danger\">Confirm password is required.</div>\n              </div>\n              <div *ngIf=\"confirmPassword.valid && form.invalid && form.errors.passwordsShouldMatch\" class=\"alert alert-danger\">\n                  Passwords do not match\n              </div>\n            </div>\n            <button class=\"btn btn-primary\">Change Password</button>\n          </form>\n              </div>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"py-5 text-center\">\n      <h2>Checkout</h2>\n    </div>\n    <div class=\"row\" *ngIf=\"cart.length; else noItemsInCart\">\n        <div class=\"col-md-6 order-md-2 mb-4\">\n          <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n            <span class=\"text-muted\">Your cart</span>\n            <span class=\"badge badge-secondary badge-pill\">{{cart.length}}</span>\n          </h4>\n          <ul class=\"list-group mb-3\">\n            <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let item of cart\">\n              <div>\n                <h6 class=\"my-0\">{{item.name}}</h6>\n                <small class=\"text-muted\">{{item.description}}</small>\n              </div>\n              <span class=\"text-muted\">{{item.price | currency}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between\">\n              <span>Total (USD)</span>\n              <strong>{{cartTotal | currency}}</strong>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <h4 class=\"mb-3\">Billing address</h4>\n          <form class=\"needs-validation\" novalidate [formGroup]=\"checkoutForm\" (ngSubmit)=\"doCheckout()\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"firstName\">First name</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required formControlName=\"firstName\">\n                <div class=\"invalid-feedback\">\n                  Valid first name is required.\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"lastName\">Last name</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required formControlName=\"lastName\">\n                <div class=\"invalid-feedback\">\n                  Valid last name is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" formControlName=\"email\">\n              <div class=\"invalid-feedback\">\n                Please enter a valid email address for shipping updates.\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"addressOne\">Address</label>\n              <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required formControlName=\"addressOne\">\n              <div class=\"invalid-feedback\">\n                Please enter your shipping address.\n              </div>\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"addressTwo\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n              <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" formControlName=\"addressTwo\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 mb-3\">\n                <label for=\"country\">Country</label>\n                <select class=\"custom-select d-block w-100\" id=\"country\" required formControlName=\"country\">\n                  <option value=\"\">Choose...</option>\n                  <option>United States</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Please select a valid country.\n                </div>\n              </div>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n              <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n            </div>\n            <hr class=\"mb-4\">\n\n            <h4 class=\"mb-3\">Payment</h4>\n\n            <!-- <div class=\"d-block my-3\">\n              <div class=\"custom-control custom-radio\">\n                <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n              </div>\n            </div> -->\n            <!-- <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"cc-name\">Name on card</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n                <small class=\"text-muted\">Full name as displayed on card</small>\n                <div class=\"invalid-feedback\">\n                  Name on card is required\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"cc-number\">Credit card number</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\">\n                  Credit card number is required\n                </div>\n              </div>\n            </div> -->\n            <!-- <div class=\"row\">\n              <div class=\"col-md-3 mb-3\">\n                <label for=\"cc-expiration\">Expiration</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\">\n                  Expiration date required\n                </div>\n              </div>\n              <div class=\"col-md-3 mb-3\">\n                <label for=\"cc-cvv\">CVV</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\">\n                  Security code required\n                </div>\n              </div>\n            </div> -->\n            <hr class=\"mb-4\">\n            <button\n              class=\"btn btn-primary btn-lg btn-block\"\n              [disabled]=\"!checkoutForm.valid\"\n              type=\"submit\">Place Order</button>\n          </form>\n          <div id=\"snackbar\"></div>\n        </div>\n      </div>\n    <ng-template #noItemsInCart>\n      <h2 class=\"text-center\">Your cart is empty</h2>\n    </ng-template>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contactus-create/contact-us.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contactus-create/contact-us.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container marketing\">\n    <i class=\"far fa-envelope text-muted\"></i>\n  <div class=\"row featurette\">\n\n    <div class=\"col-md-6\" *ngFor=\"let c of contactus\">\n        <hr class=\"featurette-divider\" />\n\n      <h2 class=\"featurette-heading\">\n          CONTACT US\n          <h4 class=\"text-muted\">{{c.title}}</h4>\n        </h2>\n        <p class=\"lead\">{{c.content}}</p>\n      </div>\n      <!-- <div class=\"col-md-6\">\n          <form (submit)=\"onSaveContactInfo(contactUsForm)\" #contactUsForm=\"ngForm\">\n            <mat-form-field>\n              <input\n                matInput\n                type=\"text\"\n                name=\"firstName\"\n                ngModel\n                required\n                minlength=\"3\"\n                placeholder=\"First Name\"\n                #firstName=\"ngModel\"\n              />\n              <mat-error *ngIf=\"firstName.invalid\"\n                >Please enter your first name.</mat-error\n              >\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input\n                  matInput\n                  type=\"text\"\n                  name=\"lastName\"\n                  ngModel\n                  required\n                  minlength=\"3\"\n                  placeholder=\"Last Name\"\n                  #lastName=\"ngModel\"\n                />\n                <mat-error *ngIf=\"lastName.invalid\"\n                  >Please enter your last name</mat-error\n                >\n              </mat-form-field>\n              <br>\n            <mat-form-field>\n              <input\n                matInput\n                type=\"email\"\n                name=\"email\"\n                ngModel\n                required\n                minlength=\"3\"\n                placeholder=\"Email\"\n                #email=\"ngModel\"\n              />\n              <mat-error *ngIf=\"email.invalid\"\n                >Please enter your email.</mat-error\n              >\n            </mat-form-field>\n            <br>\n            <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n          </form>\n      </div> -->\n\n        <!-- <div class=\"col-md-6\"> -->\n  </div>\n  <div class=\"col-md-5\">\n      <img\n        class=\"featurette-image img-fluid mx-auto\"\n        role=\"img\"\n        aria-label=\"Placeholder: 500x500\"\n        src=\"assets/images/skyline.jpg\"\n      />\n    </div>\n    <div class=\"col-md-7\">\n        <form (submit)=\"onSave(contactFormData)\" #contactFormData=\"ngForm\">\n          <mat-form-field>\n            <input\n              matInput\n              type=\"text\"\n              name=\"title\"\n              ngModel\n              required\n              minlength=\"3\"\n              placeholder=\"Contact Us Title\"\n              #title=\"ngModel\"\n            />\n            <mat-error *ngIf=\"title.invalid\"\n              >Please enter a title</mat-error\n            >\n          </mat-form-field>\n          <br>\n          <!-- <mat-form-field>\n            <input\n              matInput\n              type=\"text\"\n              name=\"description\"\n              ngModel\n              required\n              minlength=\"3\"\n              placeholder=\"Contact Us description\"\n              #description=\"ngModel\"\n            />\n            <mat-error *ngIf=\"description.invalid\"\n              >Please enter a post title.</mat-error\n            >\n          </mat-form-field> -->\n          <br>\n          <mat-form-field>\n            <textarea\n              matInput\n              rows=\"4\"\n              name=\"content\"\n              ngModel\n              required\n              placeholder=\"Enter contact us details ...\"\n              #content=\"ngModel\">\n            </textarea>\n            <mat-error *ngIf=\"content.invalid\">Please enter some content...</mat-error>\n          </mat-form-field>\n          <br>\n          <br>\n          <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n        </form>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contactus-list/contact-us-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contactus-list/contact-us-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container marketing\">\n  <i class=\"far fa-envelope text-muted\"></i>\n  <div class=\"row featurette\">\n\n    <div class=\"col-md-7\" *ngFor=\"let c of contactsus\">\n        <hr class=\"featurette-divider\" />\n\n      <h2 class=\"featurette-heading\">\n          CONTACT US\n          <h4 class=\"contactus-header text-muted\">{{c.title}}</h4>\n        </h2>\n        <p class=\"lead\">{{c.content}}</p>\n      </div>\n      <div class=\"col-md-5 column\">\n        <app-enquiry></app-enquiry>\n      </div>\n  </div>\n  <div class=\"row featurette\">\n    <div class=\"col-md-6\">\n      <hr class=\"featurette-divider\" />\n    </div>\n    <div class=\"col-md-6 column\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course-card/course-card.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course-card/course-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <h3>New Courses</h3>\n  <section class=\"course-carousel-area\">\n    <!-- <h3>New Courses</h3> -->\n    <div class=\"container-lg\">\n      <div class=\"row\">\n        <div class=\"col\" *ngFor=\"let item of courses; index as courseId\">\n          <!-- <h2 class=\"course-carousel-title\">Our Latest Courses</h2> -->\n          <div class=\"course-carousel\">\n            <div class=\"course-box-wrap shadow-sm\">\n                <div class=\"course-box shadow-sm\">\n                  <div class=\"course-image\">\n                    <img\n                      class=\"course-image image-responsive\"\n                      [src]=\"item.imagePath\"\n                      [alt]=\"item.name\"\n                    />\n                  </div>\n                  <div class=\"course-details\">\n                    <h5 class=\"title\">{{ item?.name }}</h5>\n                    <p class=\"description\">\n                      {{ item?.description }}\n                    </p>\n                    <div class=\"rating\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <span class=\"d-inline-block average-rating\"></span>\n                    </div>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                      <h5 class=\"card-text\">{{ item.price | currency }}</h5>\n                      <br>\n                      <!-- <span matTooltip=\"Add to cart\">\n                          <button\n                          type=\"button\"\n                          class=\"btn\"\n                          (click)=\"addItemToCart(item)\"\n                          [class.btn-outline-primary]=\"itemInCart(item).length\"\n                        >\n                          <i class=\"fas fa-shopping-cart\"></i>\n                        </button>\n                      </span> -->\n                    </div>\n                  </div>\n                  <button\n                    [routerLink]=\"['/courses', item.id]\"\n                    class=\"btn btn-danger btn-block\">More Info</button>\n\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course-details/course-details.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course-details/course-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <section class=\"course-carousel-area\">\n    <!-- <h3>New Courses</h3> -->\n    <div class=\"container-lg\">\n      <div class=\"row\">\n        <div class=\"col-md-4 order-1\">\n            <button class=\"btn btn-danger btn-lg btn-block\" routerLink=\"/courses\">Continue Shopping </button>\n        </div>\n\n        <!-- <div class=\"col-md-4\"> -->\n            <div class=\"col-md-4 order-2\" *ngIf=\"course\">\n                <!-- <div class=\"col\" *ngFor=\"let item of courses; index as courseId\"> -->\n                  <!-- <h2 class=\"course-carousel-title\">Our Latest Courses</h2> -->\n                  <div class=\"course-carousel\">\n                    <div class=\"course-box-wrap shadow-sm\">\n                        <div class=\"course-box shadow-sm\">\n                          <div class=\"course-image\">\n                            <img\n                              class=\"course-image image-responsive\"\n                              [src]=\"course.imagePath\"\n                              [alt]=\"course.name\"\n                            />\n                          </div>\n                          <div class=\"course-details\">\n                            <h5 class=\"title\">{{ course?.name }}</h5>\n                            <p class=\"description\">\n                              {{ course?.description }}\n                            </p>\n                            <div class=\"rating\">\n                              <i class=\"fas fa-star\"></i>\n                              <i class=\"fas fa-star\"></i>\n                              <i class=\"fas fa-star\"></i>\n                              <i class=\"fas fa-star\"></i>\n                              <i class=\"fas fa-star\"></i>\n                              <span class=\"d-inline-block average-rating\"></span>\n                            </div>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                              <h5 class=\"card-text\">{{ course.price | currency }}</h5>\n                              <span matTooltip=\"Add to cart\">\n                                  <button\n                                  type=\"button\"\n                                  class=\"btn\"\n                                  (click)=\"addItemToCart(course)\"\n                                  [class.btn-outline-primary]=\"itemInCart(course).length\"\n                                >\n                                  <i class=\"fas fa-shopping-cart\"></i>\n                                </button>\n                              </span>\n                            </div>\n\n                          </div>\n\n                        </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n                <div class=\"col-md-4 order-3\">\n                    <button class=\"btn btn-success btn-lg btn-block\" routerLink=\"/checkout\">Proceed to Checkout </button>\n                </div>\n\n\n        </div>\n\n      </div>\n    <!-- </div> -->\n  </section>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/course/courses.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/course/courses.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <div class=\"col-3\">\n  </div>\n  <div class=\"col\"> -->\n    <!-- <div class=\"row\">\n      <ng-container *ngFor=\"let item of courses; index as courseId\">\n        <div class=\"col\">\n          <div class=\"card\">\n            <img [src]=\"item.imagePath\" class=\"card-img-top\" alt=\"...\" />\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{ item.title }}</h5>\n              <p class=\"card-text\">{{ item.description | truncate: [25, \"...\"] }}</p>\n              <p class=\"card-text\">{{ item.price | currency: \"USD\" }}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"(courseId + 1) % 4 === 0\" class=\"w-100\"></div>\n      </ng-container>\n    </div> -->\n  <!-- </div>\n  <div class=\"col-3\">\n    </div>\n\n</div> -->\n\n<!-- <div class=\"album py-5\">\n    <div class=\"container\">\n      <div class=\"card-deck\">\n        <div class=\"card\" *ngFor=\"let item of courses; index as courseId\">\n          <img\n            class=\"course-image image-responsive\"\n            [src]=\"item.imagePath\"\n            [alt]=\"item.name\"\n          />\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ item?.name }}</h5>\n            <p class=\"card-text\">\n              {{ item?.description | truncate: [25, \"...\"] }}\n            </p>\n            <h2 class=\"card-text\">{{ item.price | currency }}</h2>\n          </div>\n          <div class=\"card-footer\">\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n -->\n            <!-- <button\n              type=\"button\"\n              class=\"btn btn-primary btn-lg btn-block\"\n              (click)=\"addItemToCart(item)\"\n              [class.btn-outline-primary]=\"itemInCart(item).length\"\n              routerLinkActive=\"active\"\n            >\n              Shopping Cart\n              <i class=\"fas fa-shopping-cart\"></i>\n            </button> -->\n          <!-- </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n  <main role=\"main\">\n      <section class=\"course-carousel-area\">\n        <h3>New Courses</h3>\n        <div class=\"container-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\" *ngFor=\"let item of courses; index as courseId\">\n              <!-- <h2 class=\"course-carousel-title\">Our Latest Courses</h2> -->\n              <div class=\"course-carousel\">\n                <div class=\"course-box-wrap shadow-sm\">\n                  <a href=\"#\">\n                    <div class=\"course-box shadow-sm\">\n                      <div class=\"course-image\">\n                        <img\n                        class=\"course-image image-responsive\"\n                        [src]=\"item.imagePath\"\n                        [alt]=\"item.name\"\n                      />\n                            </div>\n                      <div class=\"course-details\">\n                        <h5 class=\"title\">{{ item?.name }}</h5>\n                        <p class=\"description\">\n                          {{ item?.description | truncate: [25, \"...\"] }}\n                        </p>\n                        <div class=\"rating\">\n                          <i class=\"fas fa-star\"></i>\n                          <i class=\"fas fa-star\"></i>\n                          <i class=\"fas fa-star\"></i>\n                          <i class=\"fas fa-star\"></i>\n                          <i class=\"fas fa-star\"></i>\n                          <!-- <span class=\"d-inline-block average-rating\"> 0</span> -->\n                        </div>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                          <h5 class=\"card-text\">{{ item.price | currency }}</h5>\n\n                          <button\n                            type=\"button\"\n                            class=\"btn\"\n                            (click)=\"addItemToCart(item)\"\n                            [class.btn-outline-primary]=\"itemInCart(item).length\"\n                            routerLinkActive=\"active\"\n                          >\n                            <i class=\"fas fa-shopping-cart\"></i>\n                          </button>\n                        </div>\n                        <br>\n\n                          </div>\n\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      </main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiry.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/enquiry.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container marketing\">\n  <div>\n      <form (submit)=\"onSaveContactInfo(contactUsForm)\" #contactUsForm=\"ngForm\">\n          <h5 class=\"contact-form\">ENTER YOUR DETAILS & WE'LL BE IN TOUCH SHORTLY</h5>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            name=\"firstName\"\n            ngModel\n            required\n            minlength=\"3\"\n            placeholder=\"First Name\"\n            #firstName=\"ngModel\"\n          />\n          <mat-error *ngIf=\"firstName.invalid\"\n            >Please enter your first name.</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            name=\"lastName\"\n            ngModel\n            required\n            minlength=\"3\"\n            placeholder=\"Last Name\"\n            #lastName=\"ngModel\"\n          />\n          <mat-error *ngIf=\"lastName.invalid\"\n            >Please enter your last name</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <input\n            matInput\n            type=\"email\"\n            name=\"email\"\n            ngModel\n            required\n            minlength=\"3\"\n            placeholder=\"Email\"\n            #email=\"ngModel\"\n          />\n          <mat-error *ngIf=\"email.invalid\">Please enter your email.</mat-error>\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <textarea\n            matInput\n            rows=\"4\"\n            name=\"content\"\n            ngModel\n            required\n            placeholder=\"Enter message ...\"\n            #content=\"ngModel\"\n          >\n          </textarea>\n          <mat-error *ngIf=\"content.invalid\"\n            >Please enter some content...</mat-error\n          >\n        </mat-form-field>\n        <br />\n\n        <br />\n        <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-card\">\n    <h3 mat-dialog-title>An Error Occurred</h3>\n    <div mat-dialog-content >\n        <p class=\"mat-body-1\">{{ data.message }}</p>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-button mat-dialog-close>Okay</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feedback/create-feedback/create-feedback.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feedback/create-feedback/create-feedback.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row mb-2\">\n  <div class=\"col-md-6\">\n      <mat-card>\n          <form (submit)=\"onSaveFeedback(feedbackForm)\" #feedbackForm=\"ngForm\">\n            <mat-form-field>\n              <input\n                matInput\n                type=\"text\"\n                name=\"title\"\n                ngModel\n                required\n                minlength=\"3\"\n                placeholder=\"Feedback Title\"\n                #title=\"ngModel\"\n              />\n              <mat-error *ngIf=\"title.invalid\"\n                >Please enter a feedback title.</mat-error\n              >\n            </mat-form-field>\n            <mat-form-field>\n              <textarea\n                matInput\n                rows=\"4\"\n                name=\"content\"\n                ngModel\n                required\n                placeholder=\"Feedback Content\"\n                #content=\"ngModel\"\n              ></textarea>\n              <mat-error *ngIf=\"content.invalid\"\n                >Please enter a feedback title.</mat-error\n              >\n            </mat-form-field>\n            <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n          </form>\n        </mat-card>\n\n  </div>\n  <div class=\"col-md-6\">\n      <h3>Reviews</h3>\n      <app-feedback-list></app-feedback-list>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feedback/feedback-list/feedback-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feedback/feedback-list/feedback-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-spinner color=\"accent\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"feedbacks.length > 0 && !isLoading\">\n    <mat-expansion-panel *ngFor=\"let feedback of feedbacks\">\n      <mat-expansion-panel-header>\n        {{ feedback.title}}\n      </mat-expansion-panel-header>\n      <p>\n        {{ feedback.content }}\n        <br>\n      <br>\n      </p>\n      <mat-action-row>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"name\">\n        </mat-form-field>\n        <button mat-button (click)=\"openDialog()\"><mat-icon color=\"primary\">insert_comment</mat-icon></button>\n            <span class=\"example-spacer\"></span>\n            <a class=\"feedback-edit-btn\" mat-button color=\"primary\" [routerLink]=\"['/edit/feedback', feedback.id]\">\n              <i class=\"fas fa-edit\"></i>\n            </a>\n\n        <button mat-button color=\"warn\" (click)=\"onDelete(feedback.id)\">\n            <i class=\"fas fa-trash-alt \"></i>\n\n        </button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-paginator\n    [length]=\"totalFeedbacks\"\n    [pageSize]=\"feedbacksPerPage\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    (page)=\"onChangedPage($event)\"\n    *ngIf=\"feedbacks.length > 0\"></mat-paginator>\n  <p class=\"info-text mat-body-1\" *ngIf=\"feedbacks.length <= 0 && !isLoading\">No feedbacks added yet!</p> -->\n\n  <!-- <mat-spinner *ngIf=\"isLoading\" color=\"accent\"></mat-spinner> -->\n<!-- <div *ngIf=\"feedbacks.length > 0 && !isLoading\">\n    <div class=\"row featurette\" *ngFor=\"let feedback of feedbacks\">\n        <div class=\"col-md-8 order-md-2\">\n            <h5 class=\"featurette-heading\">\n                {{ feedback.title }}\n                <span class=\"text-muted\">See for yourself.</span>\n            </h5>\n            <p class=\"lead\">\n                {{ feedback.content }}\n                <button  mat-button color=\"warn\" (click)=\"onDelete(feedback.id)\">\n                    <i class=\"fas fa-trash-alt \"></i>\n                  </button>\n            </p>\n            <br>\n        </div> -->\n        <!-- <div class=\"col-md-4 order-md-1\">\n            <img src=\"assets/eva.jpg\" class=\"rounded-circle\" alt=\"...\" />\n        </div> -->\n        <!-- <div class=\"col-md-4 order-md-1\">\n                <img\n                src=\"assets/images/eva.jpg\"\n                class=\"rounded-circle image-responsive\"\n            />\n        </div>\n\n    </div>\n</div>\n<p class=\"info-text mat-body-1\" *ngIf=\"feedbacks.length <= 0 && !isLoading\">No feedback added yet!</p> -->\n<div *ngIf=\"feedbacks.length > 0 && !isLoading\">\n<div class=\"row\" >\n    <div class=\"col-sm-4\" *ngFor=\"let feedback of feedbacks\">\n      <div class=\"card\">\n          <div class=\"card-header\">\n              <h5 class=\"card-title\">\n\n                  <span class=\"text-muted\">{{ feedback.title }}</span>\n              </h5>\n\n            </div>\n        <div class=\"card-body\">\n            <blockquote class=\"blockquote mb-0\">\n          <p class=\"card-text\">{{ feedback.content }}</p>\n        <footer class=\"blockquote-footer\">{{fullName}}</footer>\n    </blockquote>\n      </div>\n    </div>\n  </div>\n</div>\n<p class=\"info-text mat-body-1\" *ngIf=\"feedbacks.length <= 0 && !isLoading\">No feedback added yet!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <!-- <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg> -->\n        <img class=\"content-image\" src=\"assets/images/person-3.jpg\" />\n\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Example headline.</h1>\n            <p>\n              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec\n              id elit non mi porta gravida at eget metus. Nullam id dolor id\n              nibh ultricies vehicula ut id elit.\n            </p>\n            <p>\n              <a\n                class=\"btn btn-lg btn-primary\"\n                routerLink=\"/signup\"\n                role=\"button\"\n                >Sign up today</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"content-image\" src=\"assets/images/charlie.png\" />\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Another example headline.</h1>\n            <p>\n              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec\n              id elit non mi porta gravida at eget metus. Nullam id dolor id\n              nibh ultricies vehicula ut id elit.\n            </p>\n            <p>\n              <a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\"\n                >Learn more</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"content-image\" src=\"assets/images/skyline.jpg\" />\n\n        <!-- <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg> -->\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>One more for good measure.</h1>\n            <p>\n              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec\n              id elit non mi porta gravida at eget metus. Nullam id dolor id\n              nibh ultricies vehicula ut id elit.\n            </p>\n            <p>\n              <a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\"\n                >Browse gallery</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a\n      class=\"carousel-control-prev\"\n      href=\"#myCarousel\"\n      role=\"button\"\n      data-slide=\"prev\"\n    >\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a\n      class=\"carousel-control-next\"\n      href=\"#myCarousel\"\n      role=\"button\"\n      data-slide=\"next\"\n    >\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <!-- Marketing messaging and featurettes\n        ================================================== -->\n  <!-- Wrap the rest of the page in another container to center all the content. -->\n  <section class=\"home-fact-area\">\n    <div class=\"container-lg\">\n        <div class=\"row\">\n                        <div class=\"col-md-4 d-flex\">\n                <div class=\"home-fact-box mr-md-auto ml-auto mr-auto\">\n                    <i class=\"fas fa-bullseye float-left\"></i>\n                    <div class=\"text-box\">\n                        <h4>Online Courses</h4>\n                        <p>Explore A Variety Of Fresh Language Topics To Learn</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 d-flex\">\n                <div class=\"home-fact-box mr-md-auto ml-auto mr-auto\">\n                    <i class=\"fa fa-check float-left\"></i>\n                    <div class=\"text-box\">\n                        <h4>Expert Instruction</h4>\n                        <p>Find The Right Course For You</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 d-flex\">\n                <div class=\"home-fact-box mr-md-auto ml-auto mr-auto\">\n                    <i class=\"fa fa-clock float-left\"></i>\n                    <div class=\"text-box\">\n                        <h4>Lifetime Access</h4>\n                        <p>Learn At Your Own Pace</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"course-carousel-area\">\n  <div class=\"container-lg\">\n    <div class=\"row\">\n      <div class=\"col-5\">\n\n      </div>\n      <div class=\"col\">\n        <!-- <h2 class=\"course-carousel-title text-muted\">Our Latest Courses</h2> -->\n        <div class=\"course-carousel\">\n          <app-course-card></app-course-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n  <div class=\"container marketing\">\n    <!-- START THE FEATURETTES -->\n\n    <hr class=\"featurette-divider\" />\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">\n          First featurette heading.\n          <span class=\"text-muted\">It’ll blow your mind.</span>\n        </h2>\n        <p class=\"lead\">\n          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id\n          ligula porta felis euismod semper. Praesent commodo cursus magna, vel\n          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.\n        </p>\n      </div>\n      <div class=\"col-md-5\">\n        <img\n          class=\"featurette-image img-fluid mx-auto\"\n          role=\"img\"\n          aria-label=\"Placeholder: 500x500\"\n          src=\"assets/images/skyline.jpg\"\n        />\n      </div>\n    </div>\n    <hr class=\"featurette-divider\" />\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7 order-md-2\">\n        <h2 class=\"featurette-heading\">\n          Oh yeah, it’s that good.\n          <span class=\"text-muted\">See for yourself.</span>\n        </h2>\n        <p class=\"lead\">\n          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id\n          ligula porta felis euismod semper. Praesent commodo cursus magna, vel\n          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.\n        </p>\n      </div>\n      <div class=\"col-md-5 order-md-1\">\n        <svg\n          class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\"\n          width=\"500\"\n          height=\"500\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\"\n          focusable=\"false\"\n          role=\"img\"\n          aria-label=\"Placeholder: 500x500\"\n        >\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\" />\n          <text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\" />\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">\n          And lastly, this one.\n          <span class=\"text-muted\">Checkmate.</span>\n        </h2>\n        <p class=\"lead\">\n          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id\n          ligula porta felis euismod semper. Praesent commodo cursus magna, vel\n          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.\n        </p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg\n          class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\"\n          width=\"500\"\n          height=\"500\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          preserveAspectRatio=\"xMidYMid slice\"\n          focusable=\"false\"\n          role=\"img\"\n          aria-label=\"Placeholder: 500x500\"\n        >\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#eee\" />\n          <text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text>\n        </svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\" />\n    <div class=\"row\">\n        <h3 class=\"homepage-text-info\">\n            <span class=\"text-muted\">What our students are saying...</span>\n          </h3>\n\n  </div>\n\n\n  <hr class=\"featurette-divider\" />\n\n    <!-- /END THE FEATURETTES -->\n  </div>\n  <!-- /.container -->\n\n  <!-- FOOTER -->\n  <footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>\n      &copy; 2019-2021 Software Recipe Technologies. &middot;\n      <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a>\n    </p>\n  </footer>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <h2 class=\"forum-heading\">{{title}}</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div  class=\"btn btn-primary btn-block\" (click)=\"join()\">Join</div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div >\n        <input type=\"text\" [(ngModel)]=\"user\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\"><br>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-3\">\n      </div> -->\n      <div class=\"col-md-3\">\n          <div  >\n              <div  class=\"btn btn-danger btn-block\">Leave</div>\n            </div>\n\n      </div>\n  </div>\n  <div *ngIf=\"username\" class=\"chatarea\">\n      <div style=\"min-height: 0; overflow: scroll\" id=\"scrolldiv\">\n      <div *ngFor=\"let chat of chats; let i = index\" class=\"chat\" [class.notify]=\"chat.type == 'notify'\" [class.me]=\"chat.user == username\">\n        <p><span class=\"username\">{{chat.user}}</span>{{chat.message}}</p>\n      </div>\n      </div>\n    </div>\n        <div class=\"inputarea\">\n      <form (submit)=\"addChat()\">\n        <input class=\"textbox\" name=\"message\" [(ngModel)]=\"message\" type=\"text\" autofocus autocomplete=\"off\">\n        <button type=\"submit\" class=\"sendButton\">Send</button>\n      </form>\n      <!-- <form (submit)=\"addChat()\">\n          <input class=\"textbox\" name=\"message\" [(ngModel)]=\"message\" type=\"text\" autofocus autocomplete=\"off\">\n          <button type=\"submit\" class=\"sendButton\">Send</button>\n        </form> -->\n      </div>\n</div>\n\n<!-- <div class=\"container\">\n    <div *ngIf=\"!username\" class=\"usernamebox\">\n      <div class=\"user\">\n        <p style=\"padding-bottom: 10px; font-weight: bold\">Who are you?</p>\n        <form (submit)=\"addUser(user)\">\n            <input type=\"text\" name=\"user\" [(ngModel)]=\"user\"><br>\n            <button type=\"submit\">Join Chat</button>\n        </form>\n      </div>\n    </div>\n    <div *ngIf=\"username\" class=\"chatarea\">\n      <div style=\"min-height: 0; overflow: scroll\" id=\"scrolldiv\">\n      <div *ngFor=\"let chat of chats; let i = index\" class=\"chat\" [class.notify]=\"chat.type == 'notify'\" [class.me]=\"chat.user == username\">\n        <p><span class=\"username\">{{chat.user}}</span>{{chat.message}}</p>\n      </div>\n      </div>\n    </div>\n    <div *ngIf=\"username\" class=\"inputarea\">\n      <form (submit)=\"addChat()\">\n        <input class=\"textbox\" name=\"message\" [(ngModel)]=\"message\" type=\"text\" autofocus autocomplete=\"off\">\n        <button type=\"submit\" class=\"sendButton\">Send</button>\n      </form>\n    </div>\n  </div>\n -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-orders/my-orders.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-orders/my-orders.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>my-orders works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order-success/order-success.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order-success/order-success.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Order Summary</h1>\n    <div *ngIf=\"orders\">\n      <h6 >Order Id: </h6>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <br /><br /> -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card text-white bg-secondary md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-box\"></i><span class=\"statsNum\">{{orders.length}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card text-white bg-success md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-money-bill-alt\"></i\n            ><span class=\"statsNum\">{{totalEarnings(orders) | currency}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card text-white bg-info md-3\">\n        <div class=\"card-body\">\n          <p class=\"card-text d-flex justify-content-around\">\n            <i class=\"fas fa-5x fa-sticky-note\"></i\n            ><span class=\"statsNum\">{{totalItems(orders)}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-2\" *ngFor=\"let order of orders\">\n    <div class=\"card-body p-0 pl-3\">\n      <div class=\"row\">\n        <div class=\"col d-flex flex-column justify-content-center\">\n            <h5 class=\"card-title\">Address</h5>\n            <p class=\"card-text\">\n              Name: {{order.firstName}} {{order.lastName}}<br />\n              Address: {{order.addressOne}}<br />\n              Address: {{order.addressTwo}}<br />\n              {{order.country}}<br />\n            </p>\n          </div>\n          <div class=\"col\">\n            <h5 class=\"card-title\">Order Items</h5>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let item of order.items\">{{item?.name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer text-muted text-right\">\n          <b>\n            Order Id: {{order._id}}<br />\n            Total :{{orderTotal(order.items) | currency}}\n          </b>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/create-posts/create-posts.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/create-posts/create-posts.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\"> -->\n<div class=\"row\">\n  <div class=\" wrapper\">\n    <div class=\"user_details column\">\n      <a routerLink=\"/user/profile\">\n        <img src=\"assets/images/profile1.jpg\" class=\"profile_pic\" alt=\"\">\n      </a>\n      <div class=\"user_details_left_right\">\n          <a routerLink=\"/user/profile\">\n            {{fullName}}\n          </a>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-6\"> -->\n    <div class=\"main_column column\">\n      <form (submit)=\"onSavePost(postForm)\" #postForm=\"ngForm\">\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            name=\"title\"\n            ngModel\n            required\n            minlength=\"3\"\n            placeholder=\"Post Title\"\n            #title=\"ngModel\"\n          />\n          <mat-error *ngIf=\"title.invalid\"\n            >Please enter a post title.</mat-error\n          >\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea\n            matInput\n            rows=\"4\"\n            name=\"content\"\n            ngModel\n            required\n            placeholder=\"Got something to say...\"\n            #content=\"ngModel\">\n          </textarea>\n          <mat-error *ngIf=\"content.invalid\">Please enter a post title.</mat-error>\n        </mat-form-field>\n        <br>\n        <br>\n        <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- </div> -->\n    <app-list-posts></app-list-posts>\n\n\n\n    <!-- <mat-card>\n        <form (submit)=\"onSavePost(postForm)\" #postForm=\"ngForm\">\n          <mat-form-field>\n            <input\n              matInput\n              type=\"text\"\n              name=\"title\"\n              ngModel\n              required\n              minlength=\"3\"\n              placeholder=\"Post Title\"\n              #title=\"ngModel\">\n            <mat-error *ngIf=\"title.invalid\">Please enter a post title.</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <textarea\n              matInput\n              rows=\"4\"\n              name=\"content\"\n              ngModel\n              required\n              placeholder=\"Post Content\"\n              #content=\"ngModel\"></textarea>\n            <mat-error *ngIf=\"content.invalid\">Please enter a post title.</mat-error>\n          </mat-form-field>\n          <button\n            mat-raised-button\n            color=\"accent\"\n            type=\"submit\">Save Post</button>\n        </form>\n      </mat-card>\n\n<!-- <div class=\"container\">\n  <div class=\"col-md-2\">\n    <div style=\"margin-top: 1.2rem;\" class=\"pull-right\">\n      <div  class=\"btn btn-primary\">Post</div>\n      <div  class=\"btn btn-danger\">Leave</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"well\">\n      <span><strong>Username:</strong>This is rt</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-success pull-right\">Send</button>\n    </div>\n  </div>\n\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/list-posts/list-posts.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/list-posts/list-posts.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-spinner color=\"accent\"></mat-spinner> -->\n<div class=\"container-fluid\">\n    <h3>Discussion Forum</h3>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-1 user-avatar\">\n    </div>\n    <div class=\"col-md-10\">\n        <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n\n            <mat-expansion-panel *ngFor=\"let post of posts\">\n\n              <mat-expansion-panel-header>\n                  <span class=\"user-initials\"></span>\n                  {{ post.title}}\n              </mat-expansion-panel-header>\n              <p>\n                {{ post.content }}\n                <br>\n              <br>\n              </p>\n              <br>\n              <p *ngIf=\"fullName\">posted by {{post.author}} &bull; {{createdAt | date: 'fulldate'}}</p>\n\n              <mat-action-row *ngIf=\"userIsAuthenticated && userId === post.creator\">\n                <!-- <mat-form-field>\n                  <input matInput [(ngModel)]=\"name\">\n                </mat-form-field> -->\n                <!-- <button mat-button (click)=\"openDialog()\"><mat-icon color=\"primary\">insert_comment</mat-icon></button> -->\n                    <!-- <span class=\"example-spacer\"></span>\n                    <a class=\"post-edit-btn\" mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">\n                      <i class=\"fas fa-edit\"></i>\n                    </a>\n         -->\n                <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">\n                    <i class=\"fas fa-trash-alt \"></i>\n                </button>\n              </mat-action-row>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <mat-paginator\n            [length]=\"totalPosts\"\n            [pageSize]=\"postsPerPage\"\n            [pageSizeOptions]=\"pageSizeOptions\"\n            (page)=\"onChangedPage($event)\"\n            *ngIf=\"posts.length > 0\"></mat-paginator>\n          <p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n\n    </div>\n    <div class=\"col-md-1\"></div>\n\n  </div>\n</div>\n\n\n\n\n  <!-- <a\n  type=\"button\"\n  mat-raised-button\n  class=\"course-edit-btn mat-raised-button\"\n  [routerLink]=\"['/admin/edit', course.id]\"\n  >\n  <i class=\"fas fa-edit\"></i>\n</a>\n</span>\n\n<span matTooltip=\"Delete\">\n<button\n  type=\"button\"\n  mat-raised-button\n  class=\"course-delete-btn\"\n  (click)=\"onDelete(course.id)\"\n  >\n  <i class=\"fas fa-trash-alt \"></i> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n        <div class=\"row\">\n            <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n                <div class=\"sidebar-sticky\">\n                  <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                      <!-- <a class=\"nav-link active\" href=\"#\">\n                        <span data-feather=\"home\"></span>\n                        Dashboard <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li> -->\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/eva.jpg\" class=\"rounded-circle\" alt=\"...\">\n                    </div>\n                    <h5 class=\"avatar\">{{username}}</h5>\n\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">\n                        <span data-feather=\"file\"></span>\n                        My Profile\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">\n                        <span data-feather=\"shopping-cart\"></span>\n                        Profile\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">\n                        <span data-feather=\"users\"></span>\n                        Photo\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">\n                        <span data-feather=\"bar-chart-2\"></span>\n                        Account\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">\n                        <span data-feather=\"layers\"></span>\n                        Privacy\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <span data-feather=\"layers\"></span>\n                            Notifications\n                        </a>\n                    </li>\n                  </ul>\n                </div>\n              </nav>\n\n            <!-- <app-sidebar></app-sidebar> -->\n          <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n              <h3 class=\"h2\"> Profile</h3>\n            </div>\n\n            <!-- <h6>Add additional information about yourself</h6> -->\n            <!-- <hr> -->\n            <!-- <div>\n                <app-user></app-user>\n            </div> -->\n\n            <!-- <table class=\"table table-striped\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\" class=\"text-center\">First Name</th>\n                  <th scope=\"col\" class=\"text-center\">Last Name</th>\n                  <th scope=\"col\" class=\"text-center\">Email</th>\n                  <th scope=\"col\" class=\"text-center\">Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>{{fullName.split(' ')[0]}}</td>\n                  <td>{{fullName.split(' ')[1]}}</td>\n                  <td>{{email}}</td>\n                  <td>{{username}}</td>\n                </tr>\n                <tr>\n              </tbody>\n            </table>\n -->\n            <!-- <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" href=\"#\">My Courses</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">Settings</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">Link</a>\n                </li>\n              </ul> -->\n\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n                </div>\n\n              <!-- Nav tabs -->\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Course content</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Overview</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"messages-tab\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-controls=\"messages\" aria-selected=\"false\">Q & A</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"settings-tab\" data-toggle=\"tab\" href=\"#settings\" role=\"tab\" aria-controls=\"settings\" aria-selected=\"false\">Announcements</a>\n    </li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"course-tab\"></div>\n    <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"overview-tab\">...</div>\n    <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\" aria-labelledby=\"qa-tab\">...</div>\n    <div class=\"tab-pane\" id=\"settings\" role=\"tabpanel\" aria-labelledby=\"announcements-tab\">...</div>\n  </div>\n          </main>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping-form/shipping-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping-form/shipping-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3\">Billing address</h4>\n<form\n  class=\"needs-validation\"\n  novalidate\n  [formGroup]=\"checkoutForm\"\n  (ngSubmit)=\"doCheckout()\"\n>\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"firstName\">First name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"firstName\"\n        placeholder=\"\"\n        value=\"\"\n        required\n        formControlName=\"firstName\"\n      />\n      <div class=\"invalid-feedback\">\n        Valid first name is required.\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"lastName\">Last name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"lastName\"\n        placeholder=\"\"\n        value=\"\"\n        required\n        formControlName=\"lastName\"\n      />\n      <div class=\"invalid-feedback\">\n        Valid last name is required.\n      </div>\n    </div>\n  </div>\n  <div class=\"mb-3\">\n    <label for=\"email\"\n      >Email <span class=\"text-muted\">(Optional)</span></label\n    >\n    <input\n      type=\"email\"\n      class=\"form-control\"\n      id=\"email\"\n      placeholder=\"you@example.com\"\n      formControlName=\"email\"\n    />\n    <div class=\"invalid-feedback\">\n      Please enter a valid email address for shipping updates.\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <label for=\"addressOne\">Address</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"address\"\n      placeholder=\"1234 Main St\"\n      required\n      formControlName=\"addressOne\"\n    />\n    <div class=\"invalid-feedback\">\n      Please enter your shipping address.\n    </div>\n  </div>\n  <div class=\"mb-3\">\n    <label for=\"addressTwo\"\n      >Address 2 <span class=\"text-muted\">(Optional)</span></label\n    >\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"address2\"\n      placeholder=\"Apartment or suite\"\n      formControlName=\"addressTwo\"\n    />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 mb-3\">\n      <label for=\"country\">Country</label>\n      <select\n        class=\"custom-select d-block w-100\"\n        id=\"country\"\n        required\n        formControlName=\"country\"\n      >\n        <option value=\"\">Choose...</option>\n        <option>United States</option>\n      </select>\n      <div class=\"invalid-feedback\">\n        Please select a valid country.\n      </div>\n    </div>\n  </div>\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\" />\n    <label class=\"custom-control-label\" for=\"save-info\"\n      >Save this information for next time</label\n    >\n  </div>\n  <hr class=\"mb-4\" />\n\n  <!-- <h4 class=\"mb-3\">Payment</h4>\n\n      <div class=\"d-block my-3\">\n        <div class=\"custom-control custom-radio\">\n          <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n          <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n        </div>\n        <div class=\"custom-control custom-radio\">\n          <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n          <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n        </div>\n        <div class=\"custom-control custom-radio\">\n          <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n          <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n        </div>\n      </div> -->\n  <!-- <div class=\"row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"cc-name\">Name on card</label>\n          <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n          <small class=\"text-muted\">Full name as displayed on card</small>\n          <div class=\"invalid-feedback\">\n            Name on card is required\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"cc-number\">Credit card number</label>\n          <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n          <div class=\"invalid-feedback\">\n            Credit card number is required\n          </div>\n        </div>\n      </div> -->\n  <!-- <div class=\"row\">\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"cc-expiration\">Expiration</label>\n          <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n          <div class=\"invalid-feedback\">\n            Expiration date required\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"cc-cvv\">CVV</label>\n          <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n          <div class=\"invalid-feedback\">\n            Security code required\n          </div>\n        </div>\n      </div> -->\n  <hr class=\"mb-4\" />\n  <button\n    class=\"btn btn-primary btn-lg btn-block\"\n    [disabled]=\"!checkoutForm.valid\"\n    type=\"submit\"\n  >\n    Place Order\n  </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n\n        <ul class=\"nav flex-column\">\n            <span matTooltip=\"Home\">\n                <i class=\"fas fa-home\" routerLink=\"/admin\"></i>\n              </span>\n\n          <div class=\"text-center\">\n            <img src=\"assets/images/eva.jpg\" class=\"rounded-circle\" alt=\"...\" />\n          </div>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active avatar\" href=\"#\">\n              <span data-feather=\"home\"></span>\n              {{ fullName }} <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin/courses\">\n              <span data-feather=\"file\"></span>\n              Courses\n            </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/admin/enquiries\">\n                <span data-feather=\"bar-chart-2\"></span>\n                Enquiries\n              </a>\n            </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"shopping-cart\"></span>\n              Students\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin/users\">\n              <span data-feather=\"users\"></span>\n              Users\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/posts\">\n              <span data-feather=\"bar-chart-2\"></span>\n              Posts\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin/orders\">\n              <span data-feather=\"bar-chart-2\"></span>\n              Orders\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin/feedbacks\">\n              <span data-feather=\"bar-chart-2\"></span>\n              Feedbacks\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"layers\"></span>\n              Schedule\n            </a>\n          </li>\n        </ul>\n        <h6\n          class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\"\n        >\n          <span>Saved reports</span>\n          <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n            <span data-feather=\"plus-circle\"></span>\n          </a>\n        </h6>\n        <ul class=\"nav flex-column mb-2\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Current month\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Last quarter\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Social engagement\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Year-end sale\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h3>User List</h3>\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n      <div class=\"example-container mat-elevation-z8\">\n          <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"fullName\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Full Name</mat-header-cell>\n              <mat-cell *matCellDef=\"let user\"> {{ user.fullName }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"username\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\n                <mat-cell *matCellDef=\"let user\"> {{ user.username }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"email\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n              <mat-cell *matCellDef=\"let user\"> {{user.email}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"phone\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</mat-header-cell>\n              <mat-cell *matCellDef=\"let user\"> {{ user?.phone }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"action\" >\n              <mat-header-cell *matHeaderCellDef > Action </mat-header-cell>\n              <mat-cell *matCellDef=\"let user\">\n                <span matTooltip=\"Edit\">\n                  <a\n                    mat-button color=\"primary\"\n                    [routerLink]=\"['/admin/user/', user.id]\"\n                    *ngIf=\"userIsAuthenticated\">\n                    <i class=\"fas fa-edit\"></i>\n                  </a>\n                </span>\n                <span matTooltip=\"Delete\">\n                  <button\n                    mat-button color=\"warn\"\n                    (click)=\"onDelete(user.id)\"\n                    *ngIf=\"userIsAuthenticated\">\n                    <i class=\"fas fa-trash-alt \"></i>\n                  </button>\n                </span>\n              </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let user; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n          <mat-paginator [pageIndex]=\"0\" [pageSize]=\"5\"\n            [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n  </div>\n\n  <div class=\"col-md-6\">\n    <mat-card>\n      <h3>Add a New User</h3>\n      <!-- <mat-spinner *ngIf=\"isLoading\" color=\"accent\"></mat-spinner> -->\n      <form [formGroup]=\"form\" (submit)=\"onSaveUser()\">\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"Full Name\"\n            formControlName=\"fullName\"\n          />\n          <mat-error *ngIf=\"form.get('fullName').invalid\"\n            >Please enter Full name</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            placeholder=\"Username\"\n            formControlName=\"username\"\n          />\n          <mat-error *ngIf=\"form.get('username').invalid\"\n            >Please enter Username</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" />\n          <mat-error *ngIf=\"form.get('email').invalid\"\n            >Please enter a valid email</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <label id=\"example-radio-group-label\">Admin:</label>\n        <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\"\n          formControlName=\"isAdmin\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let role of roles\" [value]=\"role\">\n            {{role}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"number\"\n            placeholder=\"Phone number\"\n            formControlName=\"contact\"\n          />\n          <mat-error *ngIf=\"form.get('contact').invalid\"\n            >Please enter a phone number</mat-error\n          >\n        </mat-form-field>\n        <br />\n        <!-- <div>\n          <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\n            Pick Image\n          </button>\n          <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" />\n        </div>\n        <div\n          class=\"image-preview\"\n          *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\"\n        >\n          <img [src]=\"imagePreview\" [alt]=\"form.value.fullName\" />\n        </div>\n        <br /> -->\n        <button class=\"btn btn-outline-success\" type=\"submit\">Save</button>\n      </form>\n    </mat-card>\n    </div>\n  <div class=\"col-md-3\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-courses/admin-courses.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-courses/admin-courses.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n  margin-left: 18%;\n  width: 81%;\n}\n\n.example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-form-field {\n  font-size: 12px;\n  width: 100%;\n}\n\n.fa-trash-alt {\n  color: rgb(199, 34, 34);\n}\n\n.fa-edit {\n  color: navy;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-action{\n  width: 75px;\n  padding-right: 50px;\n}\n\n/* Row data */\n\nmat-cell.mat-column-name, mat-cell.mat-column-price {\n  width: 30%;\n  padding-right: 20px;\n}\n\n/* Row header */\n\nmat-header-cell.mat-column-name, mat-header-cell.mat-column-price {\n  width: 20px;\n  padding-left: 2rem;\n}\n\nth.mat-column-action{\n  padding-left: 25px;\n}\n\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 150px;\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  padding: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY291cnNlcy9hZG1pbi1jb3Vyc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvdXJzZXMvYWRtaW4tY291cnNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxOCU7XG4gIHdpZHRoOiA4MSU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmEtdHJhc2gtYWx0IHtcbiAgY29sb3I6IHJnYigxOTksIDM0LCAzNCk7XG59XG5cbi5mYS1lZGl0IHtcbiAgY29sb3I6IG5hdnk7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG5cbnRkLm1hdC1jb2x1bW4tYWN0aW9ue1xuICB3aWR0aDogNzVweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLyogUm93IGRhdGEgKi9cbm1hdC1jZWxsLm1hdC1jb2x1bW4tbmFtZSwgbWF0LWNlbGwubWF0LWNvbHVtbi1wcmljZSB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi8qIFJvdyBoZWFkZXIgKi9cbm1hdC1oZWFkZXItY2VsbC5tYXQtY29sdW1uLW5hbWUsIG1hdC1oZWFkZXItY2VsbC5tYXQtY29sdW1uLXByaWNlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxudGgubWF0LWNvbHVtbi1hY3Rpb257XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm1hdC1zb3J0LWhlYWRlci1hcnJvdywgW2Rpcj1ydGxdIC5tYXQtc29ydC1oZWFkZXItcG9zaXRpb24tYmVmb3JlIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDAgMCAwIDE1MHB4O1xufVxuXG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-courses/admin-courses.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-courses/admin-courses.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCoursesComponent", function() { return AdminCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");






var AdminCoursesComponent = /** @class */ (function () {
    function AdminCoursesComponent(coursesService, route, authService) {
        this.coursesService = coursesService;
        this.route = route;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.courses = [];
        this.isLoading = false;
        this.displayedColumns = ['name', 'price', 'action'];
    }
    AdminCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.fetchCourses();
        this.coursesSub = this.coursesService
            .getCourseUpdateListener()
            .subscribe(function (courses) {
            _this.courses = courses;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](courses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminCoursesComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.coursesService.getFilterCourses('course', filters);
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (courses) {
            _this.courses = courses;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](courses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminCoursesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminCoursesComponent.prototype.onDelete = function (courseId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this course?')) {
            this.coursesService.deleteCourse(courseId)
                .subscribe(function () {
                _this.coursesService.fetchCourses();
            });
        }
    };
    AdminCoursesComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
        this.coursesSub.unsubscribe();
    };
    AdminCoursesComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], AdminCoursesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], AdminCoursesComponent.prototype, "sort", void 0);
    AdminCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-courses',
            template: __webpack_require__(/*! raw-loader!./admin-courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-courses/admin-courses.component.html"),
            styles: [__webpack_require__(/*! ./admin-courses.component.css */ "./src/app/admin/admin-courses/admin-courses.component.css")]
        })
    ], AdminCoursesComponent);
    return AdminCoursesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-enquiries/admin-enquiries.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-enquiries/admin-enquiries.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n  margin-left: 18%;\n  width: 81%;\n}\n\n.example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-form-field {\n  font-size: 12px;\n  width: 100%;\n}\n\n.fa-trash-alt {\n  color: rgb(199, 34, 34);\n}\n\n.fa-edit {\n  color: navy;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-action{\n  width: 75px;\n  padding-right: 50px;\n}\n\n/* Row data */\n\nmat-cell.mat-column-name, mat-cell.mat-column-price {\n  width: 30%;\n  padding-right: 20px;\n}\n\n/* Row header */\n\nmat-header-cell.mat-column-name, mat-header-cell.mat-column-price {\n  width: 20px;\n  padding-left: 2rem;\n}\n\nth.mat-column-action{\n  padding-left: 25px;\n}\n\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 150px;\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  padding: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyaWVzL2FkbWluLWVucXVpcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1lbnF1aXJpZXMvYWRtaW4tZW5xdWlyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDE4JTtcbiAgd2lkdGg6IDgxJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYS10cmFzaC1hbHQge1xuICBjb2xvcjogcmdiKDE5OSwgMzQsIDM0KTtcbn1cblxuLmZhLWVkaXQge1xuICBjb2xvcjogbmF2eTtcbn1cblxudGFibGUge1xuICB3aWR0aDogODAwcHg7XG59XG5cblxudGQubWF0LWNvbHVtbi1hY3Rpb257XG4gIHdpZHRoOiA3NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4vKiBSb3cgZGF0YSAqL1xubWF0LWNlbGwubWF0LWNvbHVtbi1uYW1lLCBtYXQtY2VsbC5tYXQtY29sdW1uLXByaWNlIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLyogUm93IGhlYWRlciAqL1xubWF0LWhlYWRlci1jZWxsLm1hdC1jb2x1bW4tbmFtZSwgbWF0LWhlYWRlci1jZWxsLm1hdC1jb2x1bW4tcHJpY2Uge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG50aC5tYXQtY29sdW1uLWFjdGlvbntcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93LCBbZGlyPXJ0bF0gLm1hdC1zb3J0LWhlYWRlci1wb3NpdGlvbi1iZWZvcmUgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogMCAwIDAgMTUwcHg7XG59XG5cbnRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-enquiries/admin-enquiries.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-enquiries/admin-enquiries.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminEnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEnquiriesComponent", function() { return AdminEnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_enquiry_enquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enquiry/enquiry.service */ "./src/app/enquiry/enquiry.service.ts");






var AdminEnquiriesComponent = /** @class */ (function () {
    function AdminEnquiriesComponent(enquiryService, route, authService) {
        this.enquiryService = enquiryService;
        this.route = route;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.enquiries = [];
        this.isLoading = false;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'content', 'action'];
    }
    AdminEnquiriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enquiryService.getEnquiries();
        this.enquiriesSub = this.enquiryService
            .getEnquiryUpdateListener()
            .subscribe(function (enquiries) {
            _this.enquiries = enquiries;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](enquiries);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminEnquiriesComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.enquiryService.getFilterEnquiries('enquiry', filters);
        this.enquiriesSub = this.enquiryService.getEnquiryUpdateListener()
            .subscribe(function (enquiries) {
            _this.enquiries = enquiries;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](enquiries);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminEnquiriesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminEnquiriesComponent.prototype.onDelete = function (enquiryId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this enquiry?')) {
            this.enquiryService.deleteEnquiry(enquiryId)
                .subscribe(function () {
                _this.enquiryService.getEnquiries();
            });
        }
    };
    AdminEnquiriesComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
        this.enquiriesSub.unsubscribe();
    };
    AdminEnquiriesComponent.ctorParameters = function () { return [
        { type: src_app_enquiry_enquiry_service__WEBPACK_IMPORTED_MODULE_5__["EnquiryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], AdminEnquiriesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], AdminEnquiriesComponent.prototype, "sort", void 0);
    AdminEnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-enquiries',
            template: __webpack_require__(/*! raw-loader!./admin-enquiries.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-enquiries/admin-enquiries.component.html"),
            styles: [__webpack_require__(/*! ./admin-enquiries.component.css */ "./src/app/admin/admin-enquiries/admin-enquiries.component.css")]
        })
    ], AdminEnquiriesComponent);
    return AdminEnquiriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-feedbacks/admin-feedbacks.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-feedbacks/admin-feedbacks.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: .875rem;\n}\n\n/*\n * Content\n */\n\n.pt-3, .py-3 {\n  padding-top: 2rem!important;\n}\n\n.order-feedback {\n  width: 80%;\n  margin-left: 18%;\n}\n\n[role=\"main\"] {\n  padding-top: 100px; /* Space for fixed navbar */\n}\n\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px; /* Space for fixed navbar */\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmVlZGJhY2tzL2FkbWluLWZlZWRiYWNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUNEO0VBQ0MsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQ2hEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1mZWVkYmFja3MvYWRtaW4tZmVlZGJhY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuXG4vKlxuICogQ29udGVudFxuICovXG4gLnB0LTMsIC5weS0zIHtcbiAgcGFkZGluZy10b3A6IDJyZW0haW1wb3J0YW50O1xufVxuXG4ub3JkZXItZmVlZGJhY2sge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTglO1xufVxuW3JvbGU9XCJtYWluXCJdIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin-feedbacks/admin-feedbacks.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-feedbacks/admin-feedbacks.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminFeedbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFeedbacksComponent", function() { return AdminFeedbacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminFeedbacksComponent = /** @class */ (function () {
    function AdminFeedbacksComponent() {
    }
    AdminFeedbacksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-feedbacks',
            template: __webpack_require__(/*! raw-loader!./admin-feedbacks.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-feedbacks/admin-feedbacks.component.html"),
            styles: [__webpack_require__(/*! ./admin-feedbacks.component.css */ "./src/app/admin/admin-feedbacks/admin-feedbacks.component.css")]
        })
    ], AdminFeedbacksComponent);
    return AdminFeedbacksComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-order/admin-orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-order/admin-orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 2rem;\n  width: 80%;\n  /* padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto; */\n  margin-left: 18%;\n  margin-bottom: 30px;\n}\n\n[role=\"main\"][_ngcontent-jtu-c3] {\n  padding-top: 80px;\n}\n\nbody {\n  font-size: .875rem;\n}\n\n/* .row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  padding: 10px;\n} */\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.card-title-address {\n  margin-bottom: .75rem;\n}\n\n.card-title-items {\n  margin-bottom: .75rem;\n  text-align: center;\n  padding: 10px;\n}\n\n.fa-trash-alt {\n  color: rgb(199, 34, 34);\n  float: right;\n}\n\n/*\n * Content\n */\n\n.pt-3, .py-3 {\n  padding-top: 2rem!important;\n}\n\n[role=\"main\"] {\n  padding-top: 100px; /* Space for fixed navbar */\n}\n\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px; /* Space for fixed navbar */\n  }\n}\n\n/* @media (min-width: 576px){\n  .container {\n    max-width: 540px;\n}\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tb3JkZXIvYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWOzt1QkFFcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFHQTs7RUFFRTs7QUFDRDtFQUNDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQ2hEO0FBQ0Y7O0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW9yZGVyL2FkbWluLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiA4MCU7XG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xuICBtYXJnaW4tbGVmdDogMTglO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5bcm9sZT1cIm1haW5cIl1bX25nY29udGVudC1qdHUtYzNdIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbi8qIC5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59ICovXG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXRpdGxlLWFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG59XG5cbi5jYXJkLXRpdGxlLWl0ZW1zIHtcbiAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mYS10cmFzaC1hbHQge1xuICBjb2xvcjogcmdiKDE5OSwgMzQsIDM0KTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbi8qXG4gKiBDb250ZW50XG4gKi9cbiAucHQtMywgLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMnJlbSFpbXBvcnRhbnQ7XG59XG5cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTQwcHg7XG59XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-order/admin-orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-order/admin-orders.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_order_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/order/orders.service */ "./src/app/order/orders.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(http, ordersService, authService) {
        this.http = http;
        this.ordersService = ordersService;
        this.authService = authService;
        this.orders = [];
        this.userIsAuthenticated = false;
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.orderService.getOrders();
        // this.ordersSub = this.orderService
        //   .getOrdersUpdateListener()
        //   .subscribe(data => {
        //     this.orders = data;
        //   });
        this.userIsAuthenticated = this.authService.getIsAuth();
        // this.name = this.authService.getName();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.http.get('http://localhost:3000/api/orders/')
            .subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
        // this.ordersService.getOrders();
        // this.ordersSub = this.ordersService.getOrdersUpdateListener()
        // .subscribe((orders: Order[]) => {
        //   this.orders = orders;
        // });
    };
    AdminOrdersComponent.prototype.totalEarnings = function (orders) {
        var _this = this;
        return orders.reduce(function (acc, cur) { return acc + _this.orderTotal(cur.items); }, 0);
    };
    AdminOrdersComponent.prototype.totalItems = function (orders) {
        return orders.reduce(function (acc, cur) { return acc + cur.items.length; }, 0);
    };
    AdminOrdersComponent.prototype.orderTotal = function (items) {
        return items.reduce(function (acc, cur) { return acc + cur.price; }, 0);
    };
    AdminOrdersComponent.prototype.onDelete = function (orderId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this course?')) {
            this.ordersService.deleteOrder(orderId)
                .subscribe(function () {
                _this.ordersService.getOrders();
            });
        }
    };
    AdminOrdersComponent.prototype.ngOnDestroy = function () {
        // this.ordersSub.unsubscribe();
        this.authListenerSubs.unsubscribe();
    };
    AdminOrdersComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_order_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-order/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-order/admin-orders.component.css")]
        })
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n  margin-left: 18%;\n  width: 81%;\n\n}\n\n.example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-form-field {\n  font-size: 12px;\n  width: 100%;\n}\n\n.fa-trash-alt {\n  color: rgb(199, 34, 34);\n}\n\n.fa-edit {\n  color: navy;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-action{\n  width: 75px;\n  padding-right: 50px;\n}\n\n/* Row data */\n\nmat-cell.mat-column-fullName, mat-cell.mat-column-email,\nmat-cell.mat-column-username, mat-cell.mat-column-contact {\n  width: 30%;\n  padding-right: 20px;\n}\n\n/* Row header */\n\nmat-header-cell.mat-column-fullName, mat-header-cell.mat-column-email,\nmat-header-cell.mat-column-username, mat-header-cell.mat-column-contact {\n  width: 20px;\n  padding-left: 1.5rem;\n}\n\nth.mat-column-action{\n  padding-left: 25px;\n}\n\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 140px;\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  padding: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsYUFBYTs7QUFDYjs7RUFFRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7O0FBQ2Y7O0VBRUUsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tbGVmdDogMTglO1xuICB3aWR0aDogODElO1xuXG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmEtdHJhc2gtYWx0IHtcbiAgY29sb3I6IHJnYigxOTksIDM0LCAzNCk7XG59XG5cbi5mYS1lZGl0IHtcbiAgY29sb3I6IG5hdnk7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG5cbnRkLm1hdC1jb2x1bW4tYWN0aW9ue1xuICB3aWR0aDogNzVweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLyogUm93IGRhdGEgKi9cbm1hdC1jZWxsLm1hdC1jb2x1bW4tZnVsbE5hbWUsIG1hdC1jZWxsLm1hdC1jb2x1bW4tZW1haWwsXG5tYXQtY2VsbC5tYXQtY29sdW1uLXVzZXJuYW1lLCBtYXQtY2VsbC5tYXQtY29sdW1uLWNvbnRhY3Qge1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4vKiBSb3cgaGVhZGVyICovXG5tYXQtaGVhZGVyLWNlbGwubWF0LWNvbHVtbi1mdWxsTmFtZSwgbWF0LWhlYWRlci1jZWxsLm1hdC1jb2x1bW4tZW1haWwsXG5tYXQtaGVhZGVyLWNlbGwubWF0LWNvbHVtbi11c2VybmFtZSwgbWF0LWhlYWRlci1jZWxsLm1hdC1jb2x1bW4tY29udGFjdCB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxudGgubWF0LWNvbHVtbi1hY3Rpb257XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm1hdC1zb3J0LWhlYWRlci1hcnJvdywgW2Rpcj1ydGxdIC5tYXQtc29ydC1oZWFkZXItcG9zaXRpb24tYmVmb3JlIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDAgMCAwIDE0MHB4O1xufVxuXG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/user/user.service.ts");






var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userService, route, authService) {
        this.userService = userService;
        this.route = route;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.users = [];
        this.isLoading = false;
        this.mode = 'create';
        this.displayedColumns = ['fullName', 'email', 'isAdmin', 'username', 'contact', 'action'];
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers();
        this.usersSub = this.userService
            .getUserUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminUsersComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.userService.getFilterUsers('user', filters);
        this.usersSub = this.userService.getUserUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminUsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminUsersComponent.prototype.onDelete = function (userId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.deleteUser(userId)
                .subscribe(function () {
                _this.userService.getUsers();
            });
        }
    };
    AdminUsersComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
        this.usersSub.unsubscribe();
    };
    AdminUsersComponent.ctorParameters = function () { return [
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], AdminUsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], AdminUsersComponent.prototype, "sort", void 0);
    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin/admin-users/admin-users.component.css")]
        })
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: .875rem;\n  }\n  \n  .rounded-circle {\n    height: 100px;\n    width: 100px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 1rem;\n}\n  \n  .avatar {\n    text-align: center;\n}\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    padding: 48px 0 0; /* Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 3.0rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  /*\n   * Content\n   */\n  \n  .pt-3, .py-3 {\n    padding-top: 4rem!important;\n}\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  /* .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0VBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4Qyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtFQUNqRjs7RUFFQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFOztFQUNEO0lBQ0MsMkJBQTJCO0FBQy9COztFQUVFO0lBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0VBQ2pEOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7SUFDaEQ7RUFDRjs7RUFFQTs7SUFFRTs7RUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QkciLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICB9XG4gIFxuICAucm91bmRlZC1jaXJjbGUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmF2YXRhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4gIC5mZWF0aGVyIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG4gIFxuICAvKlxuICAgKiBTaWRlYmFyXG4gICAqL1xuICBcbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICAgIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMy4wcmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICB9XG4gIFxuICBAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xuICAgIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnNpZGViYXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cbiAgIC5wdC0zLCAucHktMyB7XG4gICAgcGFkZGluZy10b3A6IDRyZW0haW1wb3J0YW50O1xufVxuICBcbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgfVxuICB9XG4gIFxuICAvKlxuICAgKiBOYXZiYXJcbiAgICovXG4gIFxuICAvKiAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wtZGFyayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, http) {
        this.authService = authService;
        this.http = http;
        this.orders = [];
        this.userIsAuthenticated = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        // this.name = this.authService.getName();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.http.get('http://localhost:3000/api/orders').subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
    };
    AdminComponent.prototype.totalEarnings = function (orders) {
        var _this = this;
        return orders.reduce(function (acc, cur) { return acc + _this.orderTotal(cur.items); }, 0);
    };
    AdminComponent.prototype.totalItems = function (orders) {
        return orders.reduce(function (acc, cur) { return acc + cur.items.length; }, 0);
    };
    AdminComponent.prototype.orderTotal = function (items) {
        return items.reduce(function (acc, cur) { return acc + cur.price; }, 0);
    };
    AdminComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/course-form/course-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/course-form/course-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 6rem;\n}\n\ninput[type=\"text\"] {\n  font-size: 13px;\n}\n\ntextarea, .input-group-text {\n  font-size: 13px;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY291cnNlLWZvcm0vY291cnNlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb3Vyc2UtZm9ybS9jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ZXh0YXJlYSwgLmlucHV0LWdyb3VwLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyB7XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/course-form/course-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/course-form/course-form.component.ts ***!
  \************************************************************/
/*! exports provided: CourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFormComponent", function() { return CourseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/admin/course-form/mime-type.validator.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_courses_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/courses/category.service */ "./src/app/courses/category.service.ts");









var CourseFormComponent = /** @class */ (function () {
    function CourseFormComponent(coursesService, route, authService, categoryService) {
        var _this = this;
        this.coursesService = coursesService;
        this.route = route;
        this.authService = authService;
        this.categoryService = categoryService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.mode = 'create';
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (user) {
            _this.userIsAuthenticated = user;
        });
        this.categoriesSub = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.categoriesSub);
    }
    CourseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('courseId')) {
                _this.mode = 'edit';
                _this.courseId = paramMap.get('courseId');
                _this.isLoading = true;
                _this.coursesService
                    .getCourse(_this.courseId)
                    .subscribe(function (courseData) {
                    _this.isLoading = false;
                    _this.course = {
                        id: courseData._id,
                        name: courseData.name,
                        category: courseData.category,
                        description: courseData.description,
                        price: courseData.price,
                        imagePath: courseData.imagePath,
                        creator: courseData.creator
                    };
                    _this.form.setValue({
                        name: _this.course.name,
                        category: _this.course.category,
                        description: _this.course.description,
                        price: _this.course.price,
                        image: _this.course.imagePath
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.courseId = null;
            }
        });
        this.categoriesSub = this.categoryService.getCategories(this.categories);
    };
    CourseFormComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    CourseFormComponent.prototype.onSaveCourse = function () {
        if (this.form.invalid) {
            return false;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.coursesService.addCourse(this.form.value.name, this.form.value.category, this.form.value.description, this.form.value.price, this.form.value.image);
        }
        else {
            this.coursesService.updateCourse(this.courseId, this.form.value.name, this.form.value.category, this.form.value.description, this.form.value.price, this.form.value.image);
            this.form.reset();
        }
    };
    CourseFormComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    CourseFormComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    CourseFormComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_courses_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] }
    ]; };
    CourseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-form',
            template: __webpack_require__(/*! raw-loader!./course-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/course-form/course-form.component.html"),
            styles: [__webpack_require__(/*! ./course-form.component.css */ "./src/app/admin/course-form/course-form.component.css")]
        })
    ], CourseFormComponent);
    return CourseFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/course-form/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/course-form/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/admin/course-list/course-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/course-list/course-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 80%;\n  display: inline-block;\n  margin-left: 18%;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n.mat-form-field {\n  font-size: 12px;\n  width: 100%;\n}\nh3 {\n    text-align: left;\n}\ntable {\n  width: 100%;\n}\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 2px;\n}\n.fa-edit:before {\n  content: \"\\f044\";\n  color: darkblue;\n}\n.fa-trash-alt:before {\n  content: \"\\f2ed\";\n  color: red;\n\n}\n.course-edit-btn {\n  text-decoration: none;\n  text-align: center;\n  color: blue;\n}\n.mat-raised-button {\n  background-color: lightgray;\n}\n.course-delete-btn {\n  text-decoration: none;\n  text-align: center;\n  color: red;\n}\n/* td, th {\n  width: 25%;\n} */\nmat-spinner {\n  margin: auto;\n}\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7O0FBRVo7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7O0dBRUc7QUFFSDtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTglO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oMyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuLmZhLWVkaXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDRcIjtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4uZmEtdHJhc2gtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmVkXCI7XG4gIGNvbG9yOiByZWQ7XG5cbn1cblxuLmNvdXJzZS1lZGl0LWJ0biB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY291cnNlLWRlbGV0ZS1idG4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogdGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn0gKi9cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/course-list/course-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/course-list/course-list.component.ts ***!
  \************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");







/** Constants used to fill up our data base. */
/**
 * @title Data table with sorting, pagination, and filtering.
 */
var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(coursesService, authService) {
        this.coursesService = coursesService;
        this.authService = authService;
        this.courses = [];
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.displayedColumns = ['name', 'description', 'price', 'action'];
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.coursesService.fetchCourses();
        this.userId = this.authService.getUserId();
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (courses) {
            _this.isLoading = false;
            _this.courses = courses;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](courses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    CourseListComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.coursesService.getFilterCourses('course', filters);
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (courses) {
            _this.courses = courses;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](courses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    CourseListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CourseListComponent.prototype.onDelete = function (courseId) {
        var _this = this;
        this.coursesService.deleteCourse(courseId)
            .subscribe(function () {
            _this.coursesService.fetchCourses();
        });
    };
    CourseListComponent.prototype.ngOnDestroy = function () {
        this.coursesSub.unsubscribe();
        this.authStatusSubs.unsubscribe();
    };
    CourseListComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_5__["CoursesService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], CourseListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], CourseListComponent.prototype, "sort", void 0);
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! raw-loader!./course-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/admin/course-list/course-list.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-card/course-card.component */ "./src/app/course-card/course-card.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/course-form/course-form.component */ "./src/app/admin/course-form/course-form.component.ts");
/* harmony import */ var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _posts_create_posts_create_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/create-posts/create-posts.component */ "./src/app/posts/create-posts/create-posts.component.ts");
/* harmony import */ var _feedback_create_feedback_create_feedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feedback/create-feedback/create-feedback.component */ "./src/app/feedback/create-feedback/create-feedback.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_admin_order_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-order/admin-orders.component */ "./src/app/admin/admin-order/admin-orders.component.ts");
/* harmony import */ var _admin_admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-feedbacks/admin-feedbacks.component */ "./src/app/admin/admin-feedbacks/admin-feedbacks.component.ts");
/* harmony import */ var _admin_admin_courses_admin_courses_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-courses/admin-courses.component */ "./src/app/admin/admin-courses/admin-courses.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _order_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order/order-success/order-success.component */ "./src/app/order/order-success/order-success.component.ts");
/* harmony import */ var _contact_us_contactus_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact-us/contactus-list/contact-us-list.component */ "./src/app/contact-us/contactus-list/contact-us-list.component.ts");
/* harmony import */ var _admin_admin_enquiries_admin_enquiries_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-enquiries/admin-enquiries.component */ "./src/app/admin/admin-enquiries/admin-enquiries.component.ts");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./course-details/course-details.component */ "./src/app/course-details/course-details.component.ts");



























var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'contact-us', component: _contact_us_contactus_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_24__["ContactUsListComponent"] },
    // { path: 'change-password', component: ChangePasswordComponent},
    { path: 'courses', component: _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__["CourseCardComponent"] },
    { path: 'courses/:courseId', component: _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_26__["CourseDetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'feedback', component: _feedback_create_feedback_create_feedback_component__WEBPACK_IMPORTED_MODULE_15__["CreateFeedbackComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'edit/feedback/:feedbackId', component: _feedback_create_feedback_create_feedback_component__WEBPACK_IMPORTED_MODULE_15__["CreateFeedbackComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'posts', component: _posts_create_posts_create_posts_component__WEBPACK_IMPORTED_MODULE_14__["CreatePostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'edit/:postId', component: _posts_create_posts_create_posts_component__WEBPACK_IMPORTED_MODULE_14__["CreatePostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'order-success', component: _order_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__["OrderSuccessComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'my/orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'user/profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'admin/users/new',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: 'admin/users/:userId',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
    },
    { path: 'admin/users',
        component: _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__["AdminUsersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: 'admin/courses/new',
        component: _admin_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_12__["CourseFormComponent"],
    },
    { path: 'admin/courses/:courseId',
        component: _admin_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_12__["CourseFormComponent"],
    },
    { path: 'admin/courses',
        component: _admin_admin_courses_admin_courses_component__WEBPACK_IMPORTED_MODULE_21__["AdminCoursesComponent"],
    },
    { path: 'admin/enquiries/:enquiryId',
        component: _admin_admin_enquiries_admin_enquiries_component__WEBPACK_IMPORTED_MODULE_25__["AdminEnquiriesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: 'admin/enquiries',
        component: _admin_admin_enquiries_admin_enquiries_component__WEBPACK_IMPORTED_MODULE_25__["AdminEnquiriesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: 'admin/orders/:orderId',
        component: _admin_admin_order_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: 'admin/orders',
        component: _admin_admin_order_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    // { path: 'admin/edit/:courseId', component: CourseFormComponent, canActivate: [AuthGuard]},
    { path: 'admin/feedbacks', component: _admin_admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_20__["AdminFeedbacksComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'admin',
        component: _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'pageNotFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin-top: 100px;\n}\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n/* @media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckM7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxufSAqL1xuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./course-card/course-card.component */ "./src/app/course-card/course-card.component.ts");
/* harmony import */ var _appnav_appnav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appnav/appnav.component */ "./src/app/appnav/appnav.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _custommaterial_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custommaterial.module */ "./src/app/custommaterial.module.ts");
/* harmony import */ var _admin_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/course-form/course-form.component */ "./src/app/admin/course-form/course-form.component.ts");
/* harmony import */ var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _admin_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/course-list/course-list.component */ "./src/app/admin/course-list/course-list.component.ts");
/* harmony import */ var _posts_create_posts_create_posts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./posts/create-posts/create-posts.component */ "./src/app/posts/create-posts/create-posts.component.ts");
/* harmony import */ var _posts_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/list-posts/list-posts.component */ "./src/app/posts/list-posts/list-posts.component.ts");
/* harmony import */ var _feedback_create_feedback_create_feedback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./feedback/create-feedback/create-feedback.component */ "./src/app/feedback/create-feedback/create-feedback.component.ts");
/* harmony import */ var _feedback_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./feedback/feedback-list/feedback-list.component */ "./src/app/feedback/feedback-list/feedback-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_courses_admin_courses_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-courses/admin-courses.component */ "./src/app/admin/admin-courses/admin-courses.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _admin_admin_order_admin_orders_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin-order/admin-orders.component */ "./src/app/admin/admin-order/admin-orders.component.ts");
/* harmony import */ var _admin_admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/admin-feedbacks/admin-feedbacks.component */ "./src/app/admin/admin-feedbacks/admin-feedbacks.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _courses_course_courses_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./courses/course/courses.component */ "./src/app/courses/course/courses.component.ts");
/* harmony import */ var _order_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/order-success/order-success.component */ "./src/app/order/order-success/order-success.component.ts");
/* harmony import */ var _contact_us_contactus_create_contact_us_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./contact-us/contactus-create/contact-us.component */ "./src/app/contact-us/contactus-create/contact-us.component.ts");
/* harmony import */ var _contact_us_contactus_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./contact-us/contactus-list/contact-us-list.component */ "./src/app/contact-us/contactus-list/contact-us-list.component.ts");
/* harmony import */ var _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./enquiry/enquiry.component */ "./src/app/enquiry/enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiries_admin_enquiries_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/admin-enquiries/admin-enquiries.component */ "./src/app/admin/admin-enquiries/admin-enquiries.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./course-details/course-details.component */ "./src/app/course-details/course-details.component.ts");


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _appnav_appnav_component__WEBPACK_IMPORTED_MODULE_14__["AppnavComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_17__["TruncatePipe"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_18__["OrderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _admin_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_21__["CourseFormComponent"],
                _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_13__["CourseCardComponent"],
                _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
                _admin_admin_courses_admin_courses_component__WEBPACK_IMPORTED_MODULE_33__["AdminCoursesComponent"],
                _admin_admin_enquiries_admin_enquiries_component__WEBPACK_IMPORTED_MODULE_46__["AdminEnquiriesComponent"],
                _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_35__["AdminUsersComponent"],
                _admin_admin_order_admin_orders_component__WEBPACK_IMPORTED_MODULE_37__["AdminOrdersComponent"],
                _admin_admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_38__["AdminFeedbacksComponent"],
                _admin_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_23__["CourseListComponent"],
                _posts_create_posts_create_posts_component__WEBPACK_IMPORTED_MODULE_24__["CreatePostsComponent"],
                _posts_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_25__["ListPostsComponent"],
                _feedback_create_feedback_create_feedback_component__WEBPACK_IMPORTED_MODULE_26__["CreateFeedbackComponent"],
                _feedback_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_27__["FeedbackListComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_31__["ErrorComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_32__["UserComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__["UserListComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__["SidebarComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangePasswordComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"],
                _courses_course_courses_component__WEBPACK_IMPORTED_MODULE_41__["CoursesComponent"],
                _order_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_42__["OrderSuccessComponent"],
                _contact_us_contactus_create_contact_us_component__WEBPACK_IMPORTED_MODULE_43__["ContactUsComponent"],
                _contact_us_contactus_list_contact_us_list_component__WEBPACK_IMPORTED_MODULE_44__["ContactUsListComponent"],
                _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_45__["EnquiryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_47__["ShippingFormComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_48__["MyOrdersComponent"],
                _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_49__["CourseDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _custommaterial_module__WEBPACK_IMPORTED_MODULE_20__["CustomMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomFormsModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_29__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_30__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [
                _error_error_component__WEBPACK_IMPORTED_MODULE_31__["ErrorComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appnav/appnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/appnav/appnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  width: 100%;\n  height: 70px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem;\n  background-color: #1f3a93;\n  border-bottom: 5px solid #f39c12;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.navbar-brand .header-logo {\n  display: inline-block;\n  width: 70px;\n  height: 62px;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n.header-login {\n  border: 1px solid #f39c12;\n  border-radius: 3px;\n  margin-right: 5px;\n}\n\n.navbar-nav .nav-item.active .nav-link:hover,\n.navbar-nav .nav-item .nav-link {\n  background: #1f3a93;\n  color: #fff;\n}\n\n.nav-link {\n  display: block;\n  padding: .4rem 1rem;\n}\n\n.navbar-toggler {\n  height: 40px;\n  color: #fff;\n  border: 1px solid #ffffff;\n  outline: none;\n}\n\n.btn {\n  color: #fff;\n  text-decoration: none;\n}\n\n.navbar-collapse {\n  background: #1f3a93;\n  /* margin-top: .6rem;\n  width: 100%; */\n  /* padding-bottom: 15px; */\n}\n\n.header-signup {\n  border: 1px solid #f39c12;\n  margin-right: 5px;\n}\n\nbutton {\n  margin-top: -10px;;\n  border: 1px solid #f39c12;\n  margin-right: 5px;\n}\n\n.mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 24px;\n}\n\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: 0px;\n  left: -9px;\n}\n\n.mat-badge-medium .mat-badge-content {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n\n/* span .badge-pill {\n  margin-top: -100px;;\n\n  size: 8px;\n} */\n\n.active {\n  border-bottom: 2px solid #f39c12;\n}\n\n/* .nav-link {\n  display: block;\n  padding: .5rem 2rem;\n} */\n\nli {\n  list-style: none;\n}\n\nnav a {\n  margin-top: -10px;;\n  color: white;\n}\n\nnav a:hover {\n  color: #f39c12;\n}\n\nnav li:hover {\n  color: #f39c12;\n}\n\n.dropdown-toggle {\n  cursor: pointer;\n}\n\n.dropdown {\n  color: black;\n}\n\n.dropdown a {\n  color: wheat;\n}\n\n.dropdown-menu {\n  background-color: #1f3a93;\n  margin-top: 18px;\n  opacity: 0.6;\n  color: black;\n}\n\n.dropdown-menu a:hover {\n  color: black;\n}\n\n.btn-outline-warning {\n  border-color: #f39c12;\n  color: #f39c12;\n  margin-top: -5px;\n}\n\n.btn-outline-warning:hover {\n  background: #f39c12;\n  color: #1f3a93;\n\n}\n\n@media (max-width: 48em) {\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n\n}\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbmF2L2FwcG5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1DQUFtQztFQUNuQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7Z0JBQ2M7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBQ0E7Ozs7R0FJRzs7QUFFSDtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQztJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcG5hdi9hcHBuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjNhOTM7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjM5YzEyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbi5uYXZiYXItYnJhbmQgLmhlYWRlci1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA2MnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5oZWFkZXItbG9naW4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjM5YzEyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluazpob3Zlcixcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMWYzYTkzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNHJlbSAxcmVtO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQ6ICMxZjNhOTM7XG4gIC8qIG1hcmdpbi10b3A6IC42cmVtO1xuICB3aWR0aDogMTAwJTsgKi9cbiAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXG59XG5cbi5oZWFkZXItc2lnbnVwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzOWMxMjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IC0xMHB4OztcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzOWMxMjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IDBweDtcbiAgbGVmdDogLTlweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLyogc3BhbiAuYmFkZ2UtcGlsbCB7XG4gIG1hcmdpbi10b3A6IC0xMDBweDs7XG5cbiAgc2l6ZTogOHB4O1xufSAqL1xuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMzljMTI7XG59XG5cbi8qIC5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNXJlbSAycmVtO1xufSAqL1xuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm5hdiBhIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmMzljMTI7XG59XG5cbm5hdiBsaTpob3ZlciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xufVxuXG5cbi5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93biB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRyb3Bkb3duIGEge1xuICBjb2xvcjogd2hlYXQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmM2E5MztcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjM5YzEyO1xuICBjb2xvcjogI2YzOWMxMjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xuICBjb2xvcjogIzFmM2E5MztcblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgLyogQnVtcCB1cCBzaXplIG9mIGNhcm91c2VsIGNvbnRlbnQgKi9cbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/appnav/appnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/appnav/appnav.component.ts ***!
  \********************************************/
/*! exports provided: AppnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppnavComponent", function() { return AppnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var AppnavComponent = /** @class */ (function () {
    function AppnavComponent(courseService, authService) {
        this.courseService = courseService;
        this.authService = authService;
        this.cart = [];
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    AppnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.isAdmin = this.authService.getIsAdmin();
        this.username = this.authService.getUsername();
        this.fullName = this.authService.getName();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.isAdmin = _this.authService.getIsAdmin();
            _this.username = _this.authService.getUsername();
            _this.fullName = _this.authService.getName();
        });
        this.courseService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
        });
    };
    AppnavComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AppnavComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    AppnavComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appnav',
            template: __webpack_require__(/*! raw-loader!./appnav.component.html */ "./node_modules/raw-loader/index.js!./src/app/appnav/appnav.component.html"),
            styles: [__webpack_require__(/*! ./appnav.component.css */ "./src/app/appnav/appnav.component.css")]
        })
    ], AppnavComponent);
    return AppnavComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        return isAuth;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user';
var AuthService = /** @class */ (function () {
    function AuthService(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getName = function () {
        return this.fullName;
    };
    AuthService.prototype.getUsername = function () {
        return this.username;
    };
    AuthService.prototype.getEmail = function () {
        return this.email;
    };
    AuthService.prototype.getContact = function () {
        return this.contact;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.registerUser = function (id, fullName, username, email, contact, password, isAdmin) {
        var _this = this;
        var userData = {
            id: id,
            fullName: fullName,
            username: username,
            email: email,
            contact: contact,
            password: password,
            isAdmin: isAdmin
        };
        this.http.post(BACKEND_URL + '/register', userData)
            .subscribe(function () {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = {
            email: email,
            password: password
        };
        // tslint:disable-next-line: max-line-length
        this.http
            .post(BACKEND_URL + '/login', authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.fullName = response.fullName;
                _this.username = response.username;
                _this.email = response.email;
                _this.contact = response.contact;
                _this.isAdmin = response.isAdmin;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                _this.saveAuthData(token, expirationDate, _this.userId, _this.fullName, _this.username, _this.contact, _this.email, _this.isAdmin, _this.returnUrl);
                if (_this.isAuthenticated) {
                    _this.getAuthData();
                }
                else {
                    console.log('Success: User is NOT logged in!');
                }
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.getUserProfile = function () {
        return this.http.get(BACKEND_URL + '/profile');
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token,
                this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.fullName = authInformation.fullName;
            this.username = authInformation.username;
            this.email = authInformation.email;
            this.contact = authInformation.contact;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting Timer: ' + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    // tslint:disable-next-line: max-line-length
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId, fullName, username, contact, email, isAdmin, returnUrl) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('username', username);
        localStorage.setItem('contact', contact);
        localStorage.setItem('email', email);
        localStorage.setItem('returnUrl', returnUrl);
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('fullName');
        localStorage.removeItem('expiration');
        localStorage.removeItem('username');
        localStorage.removeItem('contact');
        localStorage.removeItem('email');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('returnUrl');
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        var fullName = localStorage.getItem('fullName');
        var username = localStorage.getItem('username');
        var userId = localStorage.getItem('userId');
        var contact = localStorage.getItem('contact');
        var email = localStorage.getItem('email');
        var isAdmin = localStorage.getItem('isAdmin');
        var returnUrl = localStorage.getItem('returnUrl');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            fullName: fullName,
            username: username,
            contact: contact,
            email: email,
            isAdmin: isAdmin,
            returnUrl: returnUrl
        };
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullpage {\n  height: 100vh;\n}\n\n.login-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100%;\n}\n\n/* .form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n} */\n\n.reset {\n  float: right;\n}\n\n.forgotten-password {\n  color: rgb(0, 195, 255);\n  text-decoration: none;\n}\n\n/* mat-card {\n  width: 40%;\n  margin: 10% auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n\n} */\n\n.mat-dialog-container {\n  display: block;\n  padding: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 20rem;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n\nmat-card-actions {\n    margin-top: 1rem;\n}\n\n.mat-form-field {\n    margin-top: -2rem;\n  font-size: 13px;\n  width: 100%;\n}\n\n.mat-flat-button {\n  display: block;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=\"text\"] {\n  font-size: 14px;\n}\n\ninput[type=\"password\"] {\n  font-size: 14px;\n}\n\n/* //////////////////////////////////// */\n\n.mb-3 {\n  text-align: center;\n}\n\n.mat-dialog-container{\n  text-align: center;\n  max-width: 80vw;\n  pointer-events: auto;\n  width: 100%;\n  height: 70%;\n  position: static;\n}\n\n.mb-4, .my-4 {\n  /* margin-top: .2rem; */\n  /* margin-bottom: 1.5rem!important; */\n  border-radius: 5px;\n  background: #1f3a93;\n  height: 72px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: .75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0; /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text; /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  -webkit-transition: all .1s ease-in-out;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n.login-button {\n    display: block;\n    width: 100%\n}\n\n.register-button {\n  display: block;\n  width: 100%\n}\n\n.login-alt {\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-weight: 400;\n}\n\nh6 > a {\n  color: darkcyan;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBRWIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBVUEseUNBQXlDOztBQUV6QztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7O0FBRTVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUUsc0NBQXNDO0VBQ3hELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVksRUFBRSxvQ0FBb0M7RUFDbEQsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQix1Q0FBK0I7RUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQU1BO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO29EQUNvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7b0RBQ29EOztBQUNwRDtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxscGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn0gKi9cblxuLnJlc2V0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9yZ290dGVuLXBhc3N3b3JkIHtcbiAgY29sb3I6IHJnYigwLCAxOTUsIDI1NSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi8qIG1hdC1jYXJkIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXG59ICovXG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cbm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5cblxuXG5cblxuXG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4ubWItMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogODB2dztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLm1iLTQsIC5teS00IHtcbiAgLyogbWFyZ2luLXRvcDogLjJyZW07ICovXG4gIC8qIG1hcmdpbi1ib3R0b206IDEuNXJlbSFpbXBvcnRhbnQ7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzFmM2E5MztcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0OyAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJVxufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlXG59XG5cblxuLmxvZ2luLWFsdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNiA+IGEge1xuICBjb2xvcjogZGFya2N5YW47XG59XG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG5cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSubs = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
    LoginComponent.prototype.login = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubs.unsubscribe();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullpage {\n  height: 100vh;\n}\n\n.register-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100%;\n  /* margin-top: 1rem; */\n\n}\n\n.form-register {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.reset {\n  float: right;\n}\n\nmat-card {\n  width: 40%;\n  margin: 10% auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n.mat-dialog-container {\n  display: block;\n  padding: 24px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 20rem;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n\nmat-card-actions {\n    margin-top: 1rem;\n}\n\n.mat-form-field {\n    margin-top: -2rem;\n  font-size: 13px;\n  width: 100%;\n}\n\n.mat-flat-button {\n  display: block;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=\"text\"] {\n  font-size: 14px;\n}\n\ninput[type=\"password\"] {\n  font-size: 14px;\n}\n\ninput[type=\"email\"] {\n  font-size: 14px;\n}\n\n/* //////////////////////////////////// */\n\n.mb-3 {\n  text-align: center;\n}\n\n.mat-dialog-container{\n  text-align: center;\n  max-width: 80vw;\n  pointer-events: auto;\n  width: 100%;\n  height: 70%;\n  position: static;\n}\n\n.mb-4, .my-4 {\n  /* margin-top: .2rem; */\n  /* margin-bottom: 1.5rem!important; */\n  border-radius: 5px;\n  background: #1f3a93;\n  height: 72px;\n}\n\n.form-register {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: .75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0; /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text; /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  -webkit-transition: all .1s ease-in-out;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n.login-button {\n    display: block;\n    width: 100%\n}\n\n.register-button {\n  display: block;\n  width: 100%\n}\n\n.login-alt {\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-weight: 400;\n}\n\nh6 > a {\n  color: darkcyan;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBRWIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQVVBLHlDQUF5Qzs7QUFFekM7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osMENBQTBDOztBQUU1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQixFQUFFLHNDQUFzQztFQUN4RCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZLEVBQUUsb0NBQW9DO0VBQ2xELDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUNBQStCO0VBQS9CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFNQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtFQUNFLGNBQWM7RUFDZDtBQUNGOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtvREFDb0Q7O0FBQ3BEO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXG5cbn1cblxuLmZvcm0tcmVnaXN0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmVzZXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5cblxuXG5cblxuXG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG4ubWItMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogODB2dztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLm1iLTQsIC5teS00IHtcbiAgLyogbWFyZ2luLXRvcDogLjJyZW07ICovXG4gIC8qIG1hcmdpbi1ib3R0b206IDEuNXJlbSFpbXBvcnRhbnQ7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzFmM2E5MztcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uZm9ybS1yZWdpc3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7IC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCVcbn1cblxuXG4ubG9naW4tYWx0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg2ID4gYSB7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbn1cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSubs = this.authService.getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.onRegister = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.registerUser(form.value.userId, form.value.fullName, form.value.username, form.value.email, form.value.contact, form.value.password, form.value.isAdmin);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubs.unsubscribe();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 4rem;\n}\n\n.thumbnail {\n  width: 80px;\n  height: 80px;\n  background-size: cover;\n}\n\n.my-0, .cart-text {\n  /* float: left; */\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4udGh1bWJuYWlsIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm15LTAsIC5jYXJ0LXRleHQge1xuICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(coursesService, authService) {
        this.coursesService = coursesService;
        this.authService = authService;
        this.cart = [];
        this.cartTotal = 0;
        this.userIsAuthenticated = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.cartTotal = _this.cart.reduce(function (acc, cur) { return acc + Number(cur.price); }, 0);
        });
        this.authStatusSub = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            // this.fullName = this.authService.getName();
        });
    };
    CartComponent.prototype.removeItemFromCart = function (item) {
        this.coursesService.removeFromCart(item.id);
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    CartComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullpage {\n  height: 100vh;\n}\n\n.change-password-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100%;\n}\n\n.form-change-password {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBRWIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osMENBQTBDOztBQUU1QyIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxscGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtLWNoYW5nZS1wYXNzd29yZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.validators */ "./src/app/change-password/password.validators.ts");




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb) {
        this.form = fb.group({
            oldPassword: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _password_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidators"].validOldPassword
            ],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validators: _password_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidators"].passwordsShouldMatch
        });
    }
    Object.defineProperty(ChangePasswordComponent.prototype, "oldPassword", {
        get: function () {
            return this.form.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "newPassword", {
        get: function () {
            return this.form.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "confirmPassword", {
        get: function () {
            return this.form.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/password.validators.ts":
/*!********************************************************!*\
  !*** ./src/app/change-password/password.validators.ts ***!
  \********************************************************/
/*! exports provided: PasswordValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidators", function() { return PasswordValidators; });
var PasswordValidators = /** @class */ (function () {
    function PasswordValidators() {
    }
    PasswordValidators.validOldPassword = function (control) {
        return new Promise(function (resolve) {
            if (control.value !== '1234') {
                resolve({
                    invalidOldPassword: true
                });
            }
            else {
                resolve(null);
            }
        });
    };
    PasswordValidators.passwordsShouldMatch = function (control) {
        var newPassword = control.get('newPassword');
        var confirmPassword = control.get('confirmPassword');
        // tslint:disable-next-line: curly
        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        return null;
    };
    return PasswordValidators;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 4rem;\n}\n\n.lh-condensed { line-height: 1.25; }\n\n.custom-control-input:checked~.custom-control-label::before {\n  color: #fff;\n  border-color: #333538;\n  background-color: #333538;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 500px;\n  background-color: #333;\n  color: hotpink;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 25%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein o.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from { bottom: 0; opacity: 0;}\n  to { bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n  from { bottom: 0; opacity: 0;}\n  to { bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n  from { bottom: 30px; opacity: 1;}\n  to { bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n  from { bottom: 30px; opacity: 1;}\n  to { bottom: 0; opacity: 0;}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxnQkFBZ0IsaUJBQWlCLEVBQUU7O0FBRW5DO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLE9BQU8sU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUM3QixLQUFLLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDaEM7O0FBRUE7RUFDRSxPQUFPLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDN0IsS0FBSyxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2hDOztBQUVBO0VBQ0UsT0FBTyxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQ2hDLEtBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM3Qjs7QUFFQTtFQUNFLE9BQU8sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUNoQyxLQUFLLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG5cbi5saC1jb25kZW5zZWQgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMzMzM1Mzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM1Mzg7XG59XG5cbiNzbmFja2JhciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6IGhvdHBpbms7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDI1JTtcbiAgYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNzbmFja2Jhci5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gby41cywgZmFkZW91dCAwLjVzIDIuNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgYm90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgdG8geyBib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICB0byB7IGJvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7IGJvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gIHRvIHsgYm90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7IGJvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gIHRvIHsgYm90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(coursesService, fb, router, authService) {
        this.coursesService = coursesService;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.cart = [];
        this.cartTotal = 0;
        this.userIsAuthenticated = false;
        this.checkoutForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressTwo: [],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.getCart().subscribe(function (data) {
            _this.cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.cartTotal = _this.cart.reduce(function (acc, cur) { return acc + Number(cur.price); }, 0);
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.userId = this.authService.getUserId();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    CheckoutComponent.prototype.doCheckout = function () {
        var _this = this;
        var order = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.checkoutForm.value, { items: this.cart });
        this.coursesService.checkout(order).subscribe(function (res) {
            var snackbar = document.getElementById('snackbar');
            snackbar.innerHTML = 'Order placed successfully';
            snackbar.className = 'show';
            setTimeout(function () {
                snackbar.className = snackbar.className.replace('show', '');
                _this.coursesService.clearCart();
                _this.router.navigate(['/order-success', order.id]);
            }, 3000);
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.service.ts":
/*!**************************************************!*\
  !*** ./src/app/contact-us/contact-us.service.ts ***!
  \**************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jayem_1009_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../jayem 1009/src/environments/environment */ "../jayem 1009/src/environments/environment.ts");







var BACKEND_URL = _jayem_1009_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/contactsus/';
var ContactUsService = /** @class */ (function () {
    function ContactUsService(http, router) {
        this.http = http;
        this.router = router;
        this.contactsus = [];
        this.contactusUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ContactUsService.prototype.getContactsUs = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contactusData) {
            return contactusData.contactsus.map(function (contactus) {
                return {
                    title: contactus.title,
                    content: contactus.content,
                    id: contactus._id,
                };
            });
        }))
            .subscribe(function (transformedContactus) {
            _this.contactsus = transformedContactus;
            _this.contactusUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.contactsus));
        });
    };
    ContactUsService.prototype.getContactUsUpdateListener = function () {
        return this.contactusUpdated.asObservable();
    };
    ContactUsService.prototype.getContactUs = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    ContactUsService.prototype.addContactUs = function (title, content) {
        var _this = this;
        var contactus = { id: null, title: title, content: content };
        this.http
            .post(BACKEND_URL, contactus)
            .subscribe(function (responseData) {
            _this.router.navigate(['/contact-us']);
        });
    };
    ContactUsService.prototype.deleteContactUs = function (contactusId) {
        return this.http
            .delete(BACKEND_URL + contactusId);
    };
    ContactUsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ContactUsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ContactUsService);
    return ContactUsService;
}());



/***/ }),

/***/ "./src/app/contact-us/contactus-create/contact-us.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contact-us/contactus-create/contact-us.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n}\n\n.fa, .far, .fas {\n    font-size: xxx-large;\n    font-family: \"Font Awesome 5 Free\";\n    font-size: -webkit-xxx-large;\n}\n\nform {\n  margin-left: 25%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0dXMtY3JlYXRlL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdHVzLWNyZWF0ZS9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmZhLCAuZmFyLCAuZmFzIHtcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/contact-us/contactus-create/contact-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contact-us/contactus-create/contact-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-us.service */ "./src/app/contact-us/contact-us.service.ts");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(contactsusService) {
        this.contactsusService = contactsusService;
        this.userIsAuthenticated = false;
        this.mode = 'create';
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        // this.authListenerSubs = this.authService
        // .getAuthStatusListener()
        // .subscribe(authStatus => {
        //   this.isLoading = false;
        // });
        // this.userIsAuthenticated = this.authService.getIsAuth();
        // this.authListenerSubs = this.authService
        //   .getAuthStatusListener()
        //   .subscribe(isAuthenticated => {
        //     this.userIsAuthenticated = isAuthenticated;
        //   });
        // this.route.paramMap.subscribe((paramMap: ParamMap) => {
        //   if (paramMap.has('contactsusId')) {
        //     this.mode = 'edit';
        //     this.contactsusId = paramMap.get('contactsusId');
        //     // this.isLoading = true;
        //     this.contactsusService
        //       .getContactUs(this.contactsusId)
        //       .subscribe(contactsusData => {
        //         // this.isLoading = false;
        //       this.contactus = {
        //         id: contactsusData._id,
        //         title: contactsusData.title,
        //         content: contactsusData.content
        //         };
        //       });
        //     } else {
        //       this.mode = 'create';
        //       this.contactsusId = null;
        //     }
        //   });
    };
    ContactUsComponent.prototype.onSave = function (form) {
        if (form.invalid) {
            return;
        }
        this.contactsusService.addContactUs(form.value.title, form.value.content);
        form.resetForm();
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: _contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }
    ]; };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contactus-create/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contactus-create/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contactus-list/contact-us-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/contact-us/contactus-list/contact-us-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n}\n\n.fa, .far, .fas {\n    font-size: xxx-large;\n    font-family: \"Font Awesome 5 Free\";\n    font-size: -webkit-xxx-large;\n}\n\n/* form {\n  margin-left: 25%;\n} */\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n}\n\n.featurette-heading {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #1f3a93;\n}\n\n.contactus-header {\n  margin-top: 1rem;\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1rem;\n}\n\nform {\n  background-color: #fff;\n  padding: 10px;\n  border: 1px solid #D3D3D3;\n  border-radius: 5px;\n  box-shadow: 2px 2px 1px #D3D3D3;\n  z-index: -1;\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0dXMtbGlzdC9jb250YWN0LXVzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0FBQ2hDOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdHVzLWxpc3QvY29udGFjdC11cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmZhLCAuZmFyLCAuZmFzIHtcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcbn1cblxuLyogZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59ICovXG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzFmM2E5Mztcbn1cblxuLmNvbnRhY3R1cy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjRDNEM0QzO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contactus-list/contact-us-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contact-us/contactus-list/contact-us-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactUsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsListComponent", function() { return ContactUsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-us.service */ "./src/app/contact-us/contact-us.service.ts");



var ContactUsListComponent = /** @class */ (function () {
    function ContactUsListComponent(contactsusService) {
        this.contactsusService = contactsusService;
        this.contactsus = [];
        this.userIsAuthenticated = false;
        this.mode = 'create';
    }
    ContactUsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsusService.getContactsUs();
        this.contactsusSub = this.contactsusService.getContactUsUpdateListener()
            .subscribe(function (contactsus) {
            _this.contactsus = contactsus;
        });
    };
    // onSaveContactInfo(form: NgForm) {
    //   if (form.invalid) {
    //     return;
    //   }
    //   this.contactsusService.addContactUs(form.value.title, form.value.content);
    //   form.resetForm();
    // }
    ContactUsListComponent.prototype.onDelete = function (contactsusId) {
        var _this = this;
        if (confirm('Are you sure you want tp delete this feedback?')) {
            // this.isLoading = true;
            this.contactsusService.deleteContactUs(contactsusId)
                .subscribe(function () {
                _this.contactsusService.getContactsUs();
                // }, () => {
                //     this.isLoading = false;
            });
        }
    };
    ContactUsListComponent.prototype.ngOnDestroy = function () {
        this.contactsusSub.unsubscribe();
        // this.authStatusSubs.unsubscribe();
    };
    ContactUsListComponent.ctorParameters = function () { return [
        { type: _contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }
    ]; };
    ContactUsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us-list',
            template: __webpack_require__(/*! raw-loader!./contact-us-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contactus-list/contact-us-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-list.component.css */ "./src/app/contact-us/contactus-list/contact-us-list.component.css")]
        })
    ], ContactUsListComponent);
    return ContactUsListComponent;
}());



/***/ }),

/***/ "./src/app/course-card/course-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-card/course-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .col-md-3[_ngcontent-qow-c4] {\n  -webkit-box-flex: 0;\n  flex: 0 0 30%;\n}\n\n\n.album {\n  margin-top: 2rem;\n  width: 768px;\n\n}\n\n.py-5 .pt-5{\n  padding-top: 5px;\n}\n\n.mb-3, .my-3 {\n  margin-bottom: 1rem!important;\n}\n\n.shadow-sm {\n  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;\n}\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n}\n */\n\n\n\n /* .marketing {\n    width: 25%;\n  display: inline-block;\n  margin: 10px;\n  margin-bottom: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n} */\n\n\n\n main {\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  /* padding: 0.5rem 1rem; */\n  /* top: 81px; */\n  right: 0;\n  left: 0;\n  z-index: 1030;\n\n}\n\n\n\n .container-xl, .container-lg {\n  width: 90%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 3rem;\n}\n\n\n\n .row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n\n\n .col {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 100%;\n    margin-bottom: 20px;\n}\n\n\n\n .course-carousel-area {\n  margin-bottom: 20px;\n  overflow-x: hidden;\n}\n\n\n\n .course-carousel-area .course-carousel-title {\n  font-size: 20px;\n  color: #505763;\n  margin: 0 0 10px;\n}\n\n\n\n .course-carousel-area .slick-slider {\n  width: calc( 100% + 16px );\n  margin-left: -8px;\n}\n\n\n\n .course-box {\n  position: relative;\n  background: #fff;\n}\n\n\n\n .course-box-wrap a {\n  color: rgb(53, 53, 53);\n  text-decoration: none;\n}\n\n\n\n .course-box .course-details {\n  padding: 15px 10px 0px 15px;\n  position: relative;\n}\n\n\n\n .course-box .course-details .title {\n    display: block!important;\n    display: -webkit-box!important;\n    -webkit-line-clamp: 2;\n    -moz-line-clamp: 2;\n    -ms-line-clamp: 2;\n    -o-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    -ms-box-orient: vertical;\n    -o-box-orient: vertical;\n    box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n    font-weight: 600;\n    height: 36px;\n    min-height: 42px;\n    font-size: 15px;\n    color: #5e5e5e;\n    margin-bottom: 10px;\n    line-height: 20px;\n}\n\n\n\n .course-box .course-details .description {\n  display: block!important;\n  display: -webkit-box!important;\n  -webkit-line-clamp: 1;\n  -moz-line-clamp: 1;\n  -ms-line-clamp: 1;\n  -o-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  min-height: 21px;\n  height: 21px;\n  font-size: 12px;\n  color: #686f7a;\n  margin-bottom: 5px;\n}\n\n\n\n .course-box .course-details .rating {\n  margin-bottom: 20px;\n}\n\n\n\n .course-box .course-details .rating i {\n  font-size: 11px;\n}\n\n\n\n .rating i {\n  color: rgb(255, 181, 0);\n}\n\n\n\n :host {\n  display: block;\n  /* margin-top: 2rem; */\n}\n\n\n\n .row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  /* margin-left: 2%; */\n}\n\n\n\n .card {\n  width: 15rem;\n  margin: 5px;\n  box-shadow: .3px .3px 1.25px rgba(0, 0, 0, 0.2);\n\n}\n\n\n\n /* ************New Code 0308*************************************** */\n\n\n\n .card-deck {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-flow: row wrap;\n  /* margin-right: -15px;\n  margin-left: -15px; */\n}\n\n\n\n .card-footer {\n  padding: 0;\n  /* background-color: rgba(0,0,0,.03); */\n  background-color: #fff;\n  /* border-top: 1px solid rgba(0,0,0,.125); */\n}\n\n\n\n .homepage-text-info {\n  font-weight: 400;\n  color: lightgray;\n  margin-left: 1rem;\n  margin-top: 2rem;\n}\n\n\n\n /* *************************************************** */\n\n\n\n */\n\n/* .card-body {\n  width: 15rem;\n  flex: 1 1 auto;\n  padding-top: 1.5rem;\n  padding-left: 0;\n} */\n\n.price {\n  font-size: 0.5rem;\n  font-weight: bold;\n}\n\n\n\n .mat-raised-button {\ndisplay: block;\n}\n\n\n\n /* .home-container {\nmargin-left: 30%;\n} */\n\n\n\n .course-image {\nwidth: 100%;\nheight: 100px;\n}\n\n\n\n .course-image img {\nwidth: 100%;\n/* height: 100px; */\n}\n\n\n\n img {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n\n\n @media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n\n\n @media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWNhcmQvY291cnNlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQ0U7Ozs7Q0FJRDs7Ozs7O0dBTUU7Ozs7Q0FFSDtFQUNFLFdBQVc7RUFDWCx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7O0FBRWY7Ozs7Q0FFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOzs7O0NBRUE7RUFDRSxvQkFBb0I7RUFFcEIsYUFBYTtFQUViLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7O0NBRUE7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLFlBQVk7RUFDWixlQUFlO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7O0NBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7O0NBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7OztDQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7OztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7OztDQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7OztDQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7OztDQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDRCQUE0QjtJQUU1Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7Ozs7Q0FFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7RUFFNUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7OztDQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7O0NBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7O0NBRUE7RUFDRSx1QkFBdUI7QUFDekI7Ozs7Q0FDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7Ozs7Q0FFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7Ozs7Q0FFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0NBQStDOztBQUVqRDs7OztDQUNBLHFFQUFxRTs7OztDQUNyRTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CO3VCQUNxQjtBQUN2Qjs7OztDQUVBO0VBQ0UsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsNENBQTRDO0FBQzlDOzs7O0NBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7Ozs7Q0FFQSx3REFBd0Q7Ozs7Q0FBRTs7Ozs7Ozs7OztFQVV4RCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COzs7O0NBRUE7QUFDQSxjQUFjO0FBQ2Q7Ozs7Q0FFQTs7R0FFRzs7OztDQUVIO0FBQ0EsV0FBVztBQUNYLGFBQWE7QUFDYjs7OztDQUVBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQjs7OztDQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7OztDQUVBO0VBQ0UscUNBQXFDO0VBQ3JDO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7Ozs7Q0FFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UtY2FyZC9jb3Vyc2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbC1tZC0zW19uZ2NvbnRlbnQtcW93LWM0XSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIGZsZXg6IDAgMCAzMCU7XG59XG5cblxuLmFsYnVtIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDc2OHB4O1xuXG59XG5cbi5weS01IC5wdC01e1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubWItMywgLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcbn1cblxuLnNoYWRvdy1zbSB7XG4gIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMDc1KSFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbiAqL1xuXG5cblxuIC8qIC5tYXJrZXRpbmcge1xuICAgIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59ICovXG5cbm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgKi9cbiAgLyogdG9wOiA4MXB4OyAqL1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDtcblxufVxuXG4uY29udGFpbmVyLXhsLCAuY29udGFpbmVyLWxnIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNvbCB7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvdXJzZS1jYXJvdXNlbC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY291cnNlLWNhcm91c2VsLWFyZWEgLmNvdXJzZS1jYXJvdXNlbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM1MDU3NjM7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbi5jb3Vyc2UtY2Fyb3VzZWwtYXJlYSAuc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IGNhbGMoIDEwMCUgKyAxNnB4ICk7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuXG4uY291cnNlLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvdXJzZS1ib3gtd3JhcCBhIHtcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC50aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94IWltcG9ydGFudDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLW1vei1saW5lLWNsYW1wOiAyO1xuICAgIC1tcy1saW5lLWNsYW1wOiAyO1xuICAgIC1vLWxpbmUtY2xhbXA6IDI7XG4gICAgbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1vLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIGJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzVlNWU1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMgLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLW1vei1saW5lLWNsYW1wOiAxO1xuICAtbXMtbGluZS1jbGFtcDogMTtcbiAgLW8tbGluZS1jbGFtcDogMTtcbiAgbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtby1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtaW4taGVpZ2h0OiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2ODZmN2E7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC5yYXRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMgLnJhdGluZyBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ucmF0aW5nIGkge1xuICBjb2xvcjogcmdiKDI1NSwgMTgxLCAwKTtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIG1hcmdpbi10b3A6IDJyZW07ICovXG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8qIG1hcmdpbi1sZWZ0OiAyJTsgKi9cbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTVyZW07XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiAuM3B4IC4zcHggMS4yNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxufVxuLyogKioqKioqKioqKioqTmV3IENvZGUgMDMwOCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLmNhcmQtZGVjayB7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIC8qIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDsgKi9cbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTsgKi9cbn1cblxuLmhvbWVwYWdlLXRleHQtaW5mbyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8gKi9cblxuLyogLmNhcmQtYm9keSB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbn0gKi9cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIC5ob21lLWNvbnRhaW5lciB7XG5tYXJnaW4tbGVmdDogMzAlO1xufSAqL1xuXG4uY291cnNlLWltYWdlIHtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDBweDtcbn1cblxuLmNvdXJzZS1pbWFnZSBpbWcge1xud2lkdGg6IDEwMCU7XG4vKiBoZWlnaHQ6IDEwMHB4OyAqL1xufVxuXG5pbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/course-card/course-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-card/course-card.component.ts ***!
  \******************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");



var CourseCardComponent = /** @class */ (function () {
    function CourseCardComponent(coursesService) {
        this.coursesService = coursesService;
        this.courses = [];
    }
    //   ngOnInit() {
    //     this.coursesService.fetchCourses();
    //     this.coursesSub = this.coursesService.getCourseUpdateListener()
    //     .subscribe((courses: Course[]) => {
    //       this.courses = courses;
    //     });
    // }
    CourseCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.fetchCourses();
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (data) {
            _this.courses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
        });
    };
    CourseCardComponent.prototype.addItemToCart = function (item) {
        this.coursesService.addToCart(item.id);
    };
    CourseCardComponent.prototype.itemInCart = function (item) {
        return this.coursesService.findItemInCart(item.id);
    };
    CourseCardComponent.prototype.ngOnDestroy = function () {
        this.coursesSub.unsubscribe();
    };
    CourseCardComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] }
    ]; };
    CourseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-card',
            template: __webpack_require__(/*! raw-loader!./course-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/course-card/course-card.component.html"),
            styles: [__webpack_require__(/*! ./course-card.component.css */ "./src/app/course-card/course-card.component.css")]
        })
    ], CourseCardComponent);
    return CourseCardComponent;
}());



/***/ }),

/***/ "./src/app/course-details/course-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/course-details/course-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  /* padding: 0.5rem 1rem; */\n  /* top: 81px; */\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  margin-top: 4rem;\n\n}\n\n.container-xl, .container-lg {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 4rem;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 100%;\n    margin-bottom: 20px;\n}\n\n.course-carousel-area {\n  margin-bottom: 20px;\n  overflow-x: hidden;\n}\n\n.course-carousel-area .course-carousel-title {\n  font-size: 20px;\n  color: #505763;\n  margin: 0 0 10px;\n}\n\n.course-carousel-area .slick-slider {\n  width: calc( 100% + 16px );\n  margin-left: -8px;\n}\n\n.course-box {\n  position: relative;\n  background: #fff;\n}\n\n.course-box-wrap a {\n  color: rgb(53, 53, 53);\n  text-decoration: none;\n}\n\n.course-box .course-details {\n  padding: 15px 10px 0px 15px;\n  position: relative;\n}\n\n.course-box .course-details .title {\n    display: block!important;\n    display: -webkit-box!important;\n    -webkit-line-clamp: 2;\n    -moz-line-clamp: 2;\n    -ms-line-clamp: 2;\n    -o-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    -ms-box-orient: vertical;\n    -o-box-orient: vertical;\n    box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n    font-weight: 600;\n    height: 36px;\n    min-height: 42px;\n    font-size: 15px;\n    color: #5e5e5e;\n    margin-bottom: 10px;\n    line-height: 20px;\n}\n\n.course-box .course-details .description {\n  display: block!important;\n  display: -webkit-box!important;\n  -webkit-line-clamp: 1;\n  -moz-line-clamp: 1;\n  -ms-line-clamp: 1;\n  -o-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -o-box-orient: vertical;\n  box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  min-height: 21px;\n  height: 21px;\n  font-size: 12px;\n  color: #686f7a;\n  margin-bottom: 5px;\n}\n\n.course-box .course-details .rating {\n  margin-bottom: 20px;\n}\n\n.course-box .course-details .rating i {\n  font-size: 11px;\n}\n\n.rating i {\n  color: rgb(255, 181, 0);\n}\n\n:host {\n  display: block;\n  /* margin-top: 2rem; */\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  /* margin-left: 2%; */\n}\n\n.card {\n  width: 14rem;\n  margin: 5px;\n  /* box-shadow: .3px .3px 1.25px rgba(0, 0, 0, 0.2); */\n  border: 1px solid #eaeaea;\n}\n\n.shadow-sm {\n  border: 1px solid #eaeaea;\n}\n\n/* ************New Code 0308*************************************** */\n\n.card-deck {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-flow: row wrap;\n  /* margin-right: -15px;\n  margin-left: -15px; */\n}\n\n.course-image {\n  width: 100%;\n  display: block;\n  /* height: 150px; */\n}\n\n.card-footer {\n  padding: 0;\n  /* background-color: rgba(0,0,0,.03); */\n  background-color: #fff;\n  /* border-top: 1px solid rgba(0,0,0,.125); */\n}\n\n.homepage-text-info {\n  font-weight: 400;\n  color: lightgray;\n  margin-left: 1rem;\n  margin-top: 2rem;\n}\n\n/* *************************************************** */\n\n*/\n\n/* .card-body {\n  width: 15rem;\n  flex: 1 1 auto;\n  padding-top: 1.5rem;\n  padding-left: 0;\n} */\n\n.price {\n  font-size: 0.5rem;\n  font-weight: bold;\n}\n\n.mat-raised-button {\ndisplay: block;\n}\n\n/* .home-container {\nmargin-left: 30%;\n} */\n\n.course-image {\nwidth: 100%;\nheight: 150px;\n}\n\n.course-image img {\nwidth: 100%;\n/* height: 100px; */\n}\n\nimg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWRldGFpbHMvY291cnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFFcEIsYUFBYTtFQUViLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixZQUFZO0VBQ1osZUFBZTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBRTVCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7RUFFNUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscURBQXFEO0VBQ3JELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQSxxRUFBcUU7O0FBQ3JFO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkI7dUJBQ3FCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsd0RBQXdEOztBQUFFOzs7Ozs7Ozs7O0VBVXhELGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckM7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UtZGV0YWlscy9jb3Vyc2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAqL1xuICAvKiB0b3A6IDgxcHg7ICovXG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuXG59XG5cbi5jb250YWluZXIteGwsIC5jb250YWluZXItbGcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNvbCB7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvdXJzZS1jYXJvdXNlbC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY291cnNlLWNhcm91c2VsLWFyZWEgLmNvdXJzZS1jYXJvdXNlbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM1MDU3NjM7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbi5jb3Vyc2UtY2Fyb3VzZWwtYXJlYSAuc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IGNhbGMoIDEwMCUgKyAxNnB4ICk7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuXG4uY291cnNlLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvdXJzZS1ib3gtd3JhcCBhIHtcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC50aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94IWltcG9ydGFudDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLW1vei1saW5lLWNsYW1wOiAyO1xuICAgIC1tcy1saW5lLWNsYW1wOiAyO1xuICAgIC1vLWxpbmUtY2xhbXA6IDI7XG4gICAgbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1vLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIGJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzVlNWU1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMgLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLW1vei1saW5lLWNsYW1wOiAxO1xuICAtbXMtbGluZS1jbGFtcDogMTtcbiAgLW8tbGluZS1jbGFtcDogMTtcbiAgbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtby1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtaW4taGVpZ2h0OiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2ODZmN2E7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC5yYXRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY291cnNlLWJveCAuY291cnNlLWRldGFpbHMgLnJhdGluZyBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ucmF0aW5nIGkge1xuICBjb2xvcjogcmdiKDI1NSwgMTgxLCAwKTtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIG1hcmdpbi10b3A6IDJyZW07ICovXG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8qIG1hcmdpbi1sZWZ0OiAyJTsgKi9cbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTRyZW07XG4gIG1hcmdpbjogNXB4O1xuICAvKiBib3gtc2hhZG93OiAuM3B4IC4zcHggMS4yNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbn1cblxuLnNoYWRvdy1zbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4vKiAqKioqKioqKioqKipOZXcgQ29kZSAwMzA4KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4uY2FyZC1kZWNrIHtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xufVxuXG4uY291cnNlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBoZWlnaHQ6IDE1MHB4OyAqL1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpOyAqL1xufVxuXG4uaG9tZXBhZ2UtdGV4dC1pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLyAqL1xuXG4vKiAuY2FyZC1ib2R5IHtcbiAgd2lkdGg6IDE1cmVtO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufSAqL1xuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG5kaXNwbGF5OiBibG9jaztcbn1cblxuLyogLmhvbWUtY29udGFpbmVyIHtcbm1hcmdpbi1sZWZ0OiAzMCU7XG59ICovXG5cbi5jb3Vyc2UtaW1hZ2Uge1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY291cnNlLWltYWdlIGltZyB7XG53aWR0aDogMTAwJTtcbi8qIGhlaWdodDogMTAwcHg7ICovXG59XG5cbmltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/course-details/course-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/course-details/course-details.component.ts ***!
  \************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(coursesService, route, router) {
        this.coursesService = coursesService;
        this.route = route;
        this.router = router;
        this.courses = [];
    }
    CourseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.fetchCourses();
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (data) {
            _this.courses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('courseId')) {
                _this.courseId = paramMap.get('courseId');
                _this.coursesService.getCourse(_this.courseId)
                    .subscribe(function (courseData) {
                    _this.course = {
                        id: courseData._id,
                        name: courseData.name,
                        category: courseData.category,
                        description: courseData.description,
                        price: courseData.price,
                        imagePath: courseData.imagePath,
                        creator: courseData.creator
                    };
                });
            }
            else {
                _this.courseId = null;
            }
        });
    };
    CourseDetailsComponent.prototype.addItemToCart = function (item) {
        this.coursesService.addToCart(item.id);
    };
    CourseDetailsComponent.prototype.itemInCart = function (item) {
        return this.coursesService.findItemInCart(item.id);
    };
    CourseDetailsComponent.prototype.goToCourses = function (course) {
        var courseId = course ? course.id : null;
        this.router.navigate(['/courses', { id: courseId }]);
    };
    CourseDetailsComponent.prototype.ngOnDestroy = function () {
        this.coursesSub.unsubscribe();
    };
    CourseDetailsComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CourseDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-details',
            template: __webpack_require__(/*! raw-loader!./course-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/course-details/course-details.component.html"),
            styles: [__webpack_require__(/*! ./course-details.component.css */ "./src/app/course-details/course-details.component.css")]
        })
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/courses/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/courses/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/courses/';
var CategoryService = /** @class */ (function () {
    function CategoryService(http, router) {
        this.http = http;
        this.router = router;
        this.courses = [];
        this.categoriesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CategoryService.prototype.getCategories = function (categories) {
        return this.http.get(BACKEND_URL + categories);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/courses/course/courses.component.css":
/*!******************************************************!*\
  !*** ./src/app/courses/course/courses.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 100%;\n  margin-top: 5rem;\n  /* align-items: center; */\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  /* padding: 0.5rem 1rem; */\n  /* top: 81px; */\n  right: 0;\n  left: 0;\n  z-index: 1030;\n\n}\n\n.container-xl, .container-lg {\n  width: 80%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 1rem;\n}\n\n/* .row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n} */\n\n.rating i {\n  color: rgb(255, 181, 0);\n}\n\n.card {\n  width: 14rem;\n  margin-bottom: 20px;\n  /* box-shadow: .3px .3px 1.25px rgba(0, 0, 0, 0.2); */\n  box-shadow: 2px 2px 1px #D3D3D3;\n\n}\n\n.course-image {\n  width: 100%;\n  height: 150px;\n  }\n\n.course-image img {\n  width: 100%;\n  height: 150px;\n  }\n\nimg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n.card-deck {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n\n/* .col {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n    margin-bottom: 20px;\n  } */\n\n/* .col-sm-3 {\n    background-color: #fff;\n    padding: 10px;\n    border: 1px solid #D3D3D3;\n    border-radius: 5px;\n    box-shadow: 2px 2px 1px #D3D3D3;\n    z-index: -1;\n    margin-bottom: 20px;\n    margin-right: 20px;\n  } */\n\n/* .user_details img {\n    height: 125px;\n    width: 125px;\n    border-radius: 5px;\n    margin-right: 10px;\n  }\n\n  .user_details_left_right {\n    width: 125px;\n    display: inline-block;\n    position: absolute;\n  }\n\n  .main_column {\n    float: right;\n    width: 65%;\n    z-index: -1;\n    min-width: 160px;\n  }\n   */\n\n.course-carousel-area {\n    margin-bottom: 20px;\n    overflow-x: hidden;\n  }\n\n.course-carousel-area .course-carousel-title {\n    font-size: 20px;\n    color: #505763;\n    margin: 0 0 10px;\n  }\n\n.course-carousel-area .slick-slider {\n    width: calc( 100% + 16px );\n    margin-left: -8px;\n  }\n\n.course-box {\n    position: relative;\n    background: #fff;\n  }\n\n.course-box-wrap a {\n    color: rgb(53, 53, 53);\n    text-decoration: none;\n  }\n\n.course-box-wrap a:hover {\n    size: 3rem;\n  }\n\n.course-box .course-details {\n    padding: 15px 10px 0px 15px;\n    position: relative;\n  }\n\n.course-box .course-details .title {\n      display: block!important;\n      display: -webkit-box!important;\n      -webkit-line-clamp: 2;\n      -moz-line-clamp: 2;\n      -ms-line-clamp: 2;\n      -o-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n      -ms-box-orient: vertical;\n      -o-box-orient: vertical;\n      box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: normal;\n      font-weight: 600;\n      height: 36px;\n      min-height: 42px;\n      font-size: 15px;\n      color: #5e5e5e;\n      margin-bottom: 10px;\n      line-height: 20px;\n  }\n\n.course-box .course-details .description {\n    display: block!important;\n    display: -webkit-box!important;\n    -webkit-line-clamp: 1;\n    -moz-line-clamp: 1;\n    -ms-line-clamp: 1;\n    -o-line-clamp: 1;\n    line-clamp: 1;\n    -webkit-box-orient: vertical;\n    -ms-box-orient: vertical;\n    -o-box-orient: vertical;\n    box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n    min-height: 21px;\n    height: 21px;\n    font-size: 12px;\n    color: #686f7a;\n    margin-bottom: 5px;\n  }\n\n.course-box .course-details .rating {\n    margin-bottom: 20px;\n  }\n\n.course-box .course-details .rating i {\n    font-size: 11px;\n  }\n\n@media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.25rem;\n      line-height: 1.4;\n    }\n\n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n\n@media (min-width: 62em) {\n    .featurette-heading {\n      margin-top: 7rem;\n    }\n  }\n\n@media (min-width: 576px) {\n    .col-md-3 {\n      -webkit-box-flex: 0;\n      flex: 0 0 25%;\n      max-width: 25%;\n      margin-bottom: 20px;\n  }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb3Vyc2UvY291cnNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7OztHQVFHOztBQUNIO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsK0JBQStCOztBQUVqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2I7O0FBRUE7RUFDQSxXQUFXO0VBQ1gsYUFBYTtFQUNiOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0FBRUE7Ozs7Ozs7O0tBUUc7O0FBRUg7Ozs7Ozs7OztLQVNHOztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJFOztBQUVGO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjs7QUFFQTtNQUNJLHdCQUF3QjtNQUN4Qiw4QkFBOEI7TUFDOUIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYiw0QkFBNEI7TUFFNUIsd0JBQXdCO01BQ3hCLHVCQUF1QjtNQUN2QixvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsaUJBQWlCO0VBQ3JCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDRCQUE0QjtJQUU1Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFHQTtJQUNFLHFDQUFxQztJQUNyQztNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixjQUFjO01BQ2QsbUJBQW1CO0VBQ3ZCO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzL2NvdXJzZS9jb3Vyc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogcGFkZGluZzogMC41cmVtIDFyZW07ICovXG4gIC8qIHRvcDogODFweDsgKi9cbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG5cbn1cblxuLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLyogLnJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59ICovXG4ucmF0aW5nIGkge1xuICBjb2xvcjogcmdiKDI1NSwgMTgxLCAwKTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTRyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8qIGJveC1zaGFkb3c6IC4zcHggLjNweCAxLjI1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjRDNEM0QzO1xuXG59XG5cbi5jb3Vyc2UtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5jb3Vyc2UtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5jYXJkLWRlY2sge1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG5cbiAgLyogLmNvbCB7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfSAqL1xuXG4gIC8qIC5jb2wtc20tMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMXB4ICNEM0QzRDM7XG4gICAgei1pbmRleDogLTE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH0gKi9cbiAgLyogLnVzZXJfZGV0YWlscyBpbWcge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAudXNlcl9kZXRhaWxzX2xlZnRfcmlnaHQge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLm1haW5fY29sdW1uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDY1JTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICB9XG4gICAqL1xuXG4gIC5jb3Vyc2UtY2Fyb3VzZWwtYXJlYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAuY291cnNlLWNhcm91c2VsLWFyZWEgLmNvdXJzZS1jYXJvdXNlbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNTA1NzYzO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gIH1cblxuICAuY291cnNlLWNhcm91c2VsLWFyZWEgLnNsaWNrLXNsaWRlciB7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgKyAxNnB4ICk7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIH1cblxuICAuY291cnNlLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cblxuICAuY291cnNlLWJveC13cmFwIGEge1xuICAgIGNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5jb3Vyc2UtYm94LXdyYXAgYTpob3ZlciB7XG4gICAgc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC5jb3Vyc2UtYm94IC5jb3Vyc2UtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4IDBweCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jb3Vyc2UtYm94IC5jb3Vyc2UtZGV0YWlscyAudGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3ghaW1wb3J0YW50O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLW1vei1saW5lLWNsYW1wOiAyO1xuICAgICAgLW1zLWxpbmUtY2xhbXA6IDI7XG4gICAgICAtby1saW5lLWNsYW1wOiAyO1xuICAgICAgbGluZS1jbGFtcDogMjtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW8tYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgbWluLWhlaWdodDogNDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjNWU1ZTVlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94IWltcG9ydGFudDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLW1vei1saW5lLWNsYW1wOiAxO1xuICAgIC1tcy1saW5lLWNsYW1wOiAxO1xuICAgIC1vLWxpbmUtY2xhbXA6IDE7XG4gICAgbGluZS1jbGFtcDogMTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLW1zLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC1vLWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIGJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBtaW4taGVpZ2h0OiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2ODZmN2E7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmNvdXJzZS1ib3ggLmNvdXJzZS1kZXRhaWxzIC5yYXRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuY291cnNlLWJveCAuY291cnNlLWRldGFpbHMgLnJhdGluZyBpIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLyogQnVtcCB1cCBzaXplIG9mIGNhcm91c2VsIGNvbnRlbnQgKi9cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cblxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5jb2wtbWQtMyB7XG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgIG1heC13aWR0aDogMjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/courses/course/courses.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/courses/course/courses.component.ts ***!
  \*****************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses.service */ "./src/app/courses/courses.service.ts");



var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(coursesService) {
        this.coursesService = coursesService;
        this.courses = [];
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.fetchCourses();
        this.coursesSub = this.coursesService.getCourseUpdateListener()
            .subscribe(function (courses) {
            _this.courses = courses;
        });
    };
    CoursesComponent.prototype.addItemToCart = function (item) {
        this.coursesService.addToCart(item.id);
    };
    CoursesComponent.prototype.itemInCart = function (item) {
        return this.coursesService.findItemInCart(item.id);
    };
    CoursesComponent.prototype.ngOnDestroy = function () {
        this.coursesSub.unsubscribe();
    };
    CoursesComponent.ctorParameters = function () { return [
        { type: _courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] }
    ]; };
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/course/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/course/courses.component.css")]
        })
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses.service.ts":
/*!********************************************!*\
  !*** ./src/app/courses/courses.service.ts ***!
  \********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/courses/';
var CoursesService = /** @class */ (function () {
    function CoursesService(http, router) {
        this.http = http;
        this.router = router;
        this.cart = [];
        // courses: [];
        this.courses = [];
        this.coursesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // this.coursesSub = new BehaviorSubject<any[]>(this.courses);
        this.cartSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.cart);
    }
    CoursesService.prototype.fetchCourses = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (courseData) {
            return courseData.courses.map(function (course) {
                return {
                    name: course.name,
                    description: course.description,
                    category: course.category,
                    price: course.price,
                    id: course._id,
                    imagePath: course.imagePath,
                    creator: course.creator
                };
            });
        }))
            .subscribe(function (transformedCourse) {
            _this.courses = transformedCourse;
            _this.coursesUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.courses));
        });
    };
    CoursesService.prototype.getCourseUpdateListener = function () {
        return this.coursesUpdated.asObservable();
    };
    CoursesService.prototype.getCourse = function (id) {
        return this.http
            .get(BACKEND_URL + id);
    };
    CoursesService.prototype.getFilterCourses = function (course, filters) {
        return this.http
            .get(BACKEND_URL, filters);
    };
    CoursesService.prototype.addCourse = function (name, category, description, price, image) {
        var _this = this;
        var courseData = new FormData();
        courseData.append('name', name);
        courseData.append('category', category);
        courseData.append('description', description);
        courseData.append('price', String(price));
        courseData.append('image', image, name);
        this.http
            .post(BACKEND_URL, courseData)
            .subscribe(function (responseData) {
            _this.router.navigate(['/']);
        });
    };
    CoursesService.prototype.updateCourse = function (id, name, category, description, price, image) {
        var _this = this;
        var courseData;
        if (typeof image === 'object') {
            courseData = new FormData();
            courseData.append('id', id);
            courseData.append('name', name);
            courseData.append('category', category);
            courseData.append('description', description);
            courseData.append('price', String(price));
            courseData.append('image', image, name);
        }
        else {
            courseData = {
                id: id,
                name: name,
                category: category,
                description: description,
                price: price,
                imagePath: image,
                creator: null
            };
        }
        this.http
            .put(BACKEND_URL + id, courseData)
            .subscribe(function (response) {
            _this.router.navigate(['/admin']);
        });
    };
    CoursesService.prototype.deleteCourse = function (courseId) {
        return this.http
            .delete(BACKEND_URL + courseId);
    };
    CoursesService.prototype.getCart = function () {
        return this.cartSub.asObservable();
    };
    CoursesService.prototype.addToCart = function (id) {
        var course = this.findItemInCourses(id);
        if (course.length !== 0) {
            if (this.findItemInCart(id).length) {
                this.removeFromCart(id);
            }
            else {
                this.cart.push(course[0]);
            }
            this.cartSub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.cart));
        }
    };
    CoursesService.prototype.removeFromCart = function (id) {
        if (this.findItemInCart(id).length) {
            var item = this.findItemInCart(id)[0];
            var index = this.cart.indexOf(item);
            this.cart.splice(index, 1);
        }
        this.cartSub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.cart));
    };
    CoursesService.prototype.clearCart = function () {
        this.cartSub.next([]);
    };
    CoursesService.prototype.findItemInCart = function (id) {
        var item = this.cart.filter(function (course) { return course.id === id; });
        return item;
    };
    CoursesService.prototype.findItemInCourses = function (id) {
        var item = this.courses.filter(function (course) { return course.id === id; });
        return item;
    };
    CoursesService.prototype.checkout = function (data) {
        return this.http.post('http://localhost:3000/api/checkout', data);
    };
    CoursesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CoursesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "./src/app/custommaterial.module.ts":
/*!******************************************!*\
  !*** ./src/app/custommaterial.module.ts ***!
  \******************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");






















var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more_vert.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github.svg'));
    }
    CustomMaterialModule.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/enquiry/enquiry.component.css":
/*!***********************************************!*\
  !*** ./src/app/enquiry/enquiry.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: -2rem;\n}\n\n.fa, .far, .fas {\n    font-size: xxx-large;\n    font-family: \"Font Awesome 5 Free\";\n    font-size: -webkit-xxx-large;\n}\n\n/* form {\n  margin-left: 25%;\n} */\n\n.contact-form {\n  background-color: #1f3a93;\n  border-radius: 2px;\n  color: #f39c12;\n  font-size: 1rem;\n  padding: 15px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n}\n\n.featurette-heading {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #1f3a93;\n}\n\n.contactus-header {\n  margin-top: 1rem;\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1rem;\n}\n\nform {\n  background-color: #fff;\n  padding: 10px;\n  border: 1px solid #D3D3D3;\n  border-radius: 5px;\n  box-shadow: 2px 2px 1px #D3D3D3;\n  z-index: -1;\n  /* margin-left: 12.5%;\n  margin-right: 12.5%; */\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5xdWlyeS9lbnF1aXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtBQUNoQzs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1g7d0JBQ3NCO0VBQ3RCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvZW5xdWlyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0ycmVtO1xufVxuXG4uZmEsIC5mYXIsIC5mYXMge1xuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgICBmb250LXNpemU6IC13ZWJraXQteHh4LWxhcmdlO1xufVxuXG4vKiBmb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0gKi9cblxuLmNvbnRhY3QtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjNhOTM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNmMzljMTI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMTVweDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzFmM2E5Mztcbn1cblxuLmNvbnRhY3R1cy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjRDNEM0QzO1xuICB6LWluZGV4OiAtMTtcbiAgLyogbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDEyLjUlOyAqL1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/enquiry/enquiry.component.ts":
/*!**********************************************!*\
  !*** ./src/app/enquiry/enquiry.component.ts ***!
  \**********************************************/
/*! exports provided: EnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryComponent", function() { return EnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiry.service */ "./src/app/enquiry/enquiry.service.ts");



var EnquiryComponent = /** @class */ (function () {
    function EnquiryComponent(enquiryService) {
        this.enquiryService = enquiryService;
        this.enquiries = [];
        this.userIsAuthenticated = false;
    }
    EnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enquiryService.getEnquiries();
        this.enquiriesSub = this.enquiryService.getEnquiryUpdateListener()
            .subscribe(function (enquiries) {
            _this.enquiries = enquiries;
        });
    };
    EnquiryComponent.prototype.onSaveContactInfo = function (form) {
        if (form.invalid) {
            return;
        }
        this.enquiryService.addEnquiry(form.value.firstName, form.value.lastName, form.value.email, form.value.content);
        form.resetForm();
    };
    EnquiryComponent.prototype.onDelete = function (enquiryId) {
        var _this = this;
        if (confirm('Are you sure you want tp delete this feedback?')) {
            // this.isLoading = true;
            this.enquiryService.deleteEnquiry(enquiryId)
                .subscribe(function () {
                _this.enquiryService.getEnquiries();
                // }, () => {
                //     this.isLoading = false;
            });
        }
    };
    EnquiryComponent.prototype.ngOnDestroy = function () {
        this.enquiriesSub.unsubscribe();
        // this.authStatusSubs.unsubscribe();
    };
    EnquiryComponent.ctorParameters = function () { return [
        { type: _enquiry_service__WEBPACK_IMPORTED_MODULE_2__["EnquiryService"] }
    ]; };
    EnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enquiry',
            template: __webpack_require__(/*! raw-loader!./enquiry.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiry.component.html"),
            styles: [__webpack_require__(/*! ./enquiry.component.css */ "./src/app/enquiry/enquiry.component.css")]
        })
    ], EnquiryComponent);
    return EnquiryComponent;
}());



/***/ }),

/***/ "./src/app/enquiry/enquiry.service.ts":
/*!********************************************!*\
  !*** ./src/app/enquiry/enquiry.service.ts ***!
  \********************************************/
/*! exports provided: EnquiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryService", function() { return EnquiryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/enquiries/';
var EnquiryService = /** @class */ (function () {
    function EnquiryService(http, router) {
        this.http = http;
        this.router = router;
        this.enquiries = [];
        this.enquiriesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EnquiryService.prototype.getEnquiries = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (enquiryData) {
            return enquiryData.enquiries.map(function (enquiry) {
                return {
                    firstName: enquiry.firstName,
                    lastName: enquiry.lastName,
                    email: enquiry.email,
                    content: enquiry.content,
                    id: enquiry._id,
                };
            });
        }))
            .subscribe(function (transformedEnquiries) {
            _this.enquiries = transformedEnquiries;
            _this.enquiriesUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.enquiries));
        });
    };
    EnquiryService.prototype.getEnquiryUpdateListener = function () {
        return this.enquiriesUpdated.asObservable();
    };
    EnquiryService.prototype.getEnquiry = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    EnquiryService.prototype.getFilterEnquiries = function (enquiry, filters) {
        return this.http
            .get(BACKEND_URL, filters);
    };
    EnquiryService.prototype.addEnquiry = function (firstName, lastName, email, content) {
        var _this = this;
        var enquiry = { id: null, firstName: firstName, lastName: lastName, email: email, content: content };
        this.http
            .post(BACKEND_URL, enquiry)
            .subscribe(function (responseData) {
            _this.router.navigate(['/']);
        });
    };
    EnquiryService.prototype.deleteEnquiry = function (enquiryId) {
        return this.http
            .delete(BACKEND_URL + enquiryId);
    };
    EnquiryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EnquiryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], EnquiryService);
    return EnquiryService;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorMessage = 'An unknown error occured!';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            _this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-body-1 {\n    text-align: center;\n    color: red;\n}\nh3 {\n    text-align: center;\n    font-weight: 400;\n\n}\nh6 {\n    text-align: center;\n    font-weight: 400;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWJvZHktMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5oMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuaDYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/feedback/create-feedback/create-feedback.component.css":
/*!************************************************************************!*\
  !*** ./src/app/feedback/create-feedback/create-feedback.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  margin: auto;\n  margin-top: 6rem;\n  margin-bottom: 2rem;\n  margin-left: 5%;\n}\n\nh3 {\n    text-align: center;\n    margin-top: 0;\n}\n\nmat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-toolbar {\n  border-bottom: 5px solid orange;\n\n}\n\n.header_logo {\n  margin-top: 10px;\n  width: 70px;\n  height: 60px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nmat-sidenav {\n  width: 19%;\n}\n\n.post-button {\n  margin-top: 2rem;\n  margin-left: 5%;\n}\n\nmat-nav-list {\n  text-align: center;\n}\n\n.sidenav-container {\n  border-right: 5px solid orange;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\nmat-menu {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.dropdown-item{\n  color: black;\n}\n\n.dropdown-item:hover{\n  color: black;\n}\n\nli {\n  list-style: none;\n  padding: 20px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n}\n\nli:hover {\n  color: orange;\n}\n\nul{\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\na:hover {\n  color: orange;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svY3JlYXRlLWZlZWRiYWNrL2NyZWF0ZS1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7O0FBRWpDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzBGQUN3RjtFQUN4RixtQkFBTztVQUFQLE9BQU87QUFDVDs7QUFFQTtFQUNFOytEQUM2RDtFQUM3RCxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2NyZWF0ZS1mZWVkYmFjay9jcmVhdGUtZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5oMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgb3JhbmdlO1xuXG59XG5cbi5oZWFkZXJfbG9nbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMTklO1xufVxuLnBvc3QtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5tYXQtbmF2LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZW5hdi1jb250YWluZXIge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBvcmFuZ2U7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyO1xufVxuXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG5tYXQtbWVudSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5kcm9wZG93bi1pdGVte1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVye1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmxpOmhvdmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxudWx7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/feedback/create-feedback/create-feedback.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/feedback/create-feedback/create-feedback.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFeedbackComponent", function() { return CreateFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feedback.service */ "./src/app/feedback/feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/** @title Responsive sidenav */
var CreateFeedbackComponent = /** @class */ (function () {
    function CreateFeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    CreateFeedbackComponent.prototype.onSaveFeedback = function (form) {
        if (form.invalid) {
            return;
        }
        this.feedbackService.addFeedback(form.value.title, form.value.content);
        form.resetForm();
    };
    CreateFeedbackComponent.ctorParameters = function () { return [
        { type: _feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"] }
    ]; };
    CreateFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-feedback',
            template: __webpack_require__(/*! raw-loader!./create-feedback.component.html */ "./node_modules/raw-loader/index.js!./src/app/feedback/create-feedback/create-feedback.component.html"),
            styles: [__webpack_require__(/*! ./create-feedback.component.css */ "./src/app/feedback/create-feedback/create-feedback.component.css")]
        })
    ], CreateFeedbackComponent);
    return CreateFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback-list/feedback-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/feedback/feedback-list/feedback-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nmat-expansion-panel {\n  width: 80%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n\n}\n\n.feedback-edit-btn {\n    text-decoration: none;\n    text-align: center;\n    margin-left: 3px;\n}\n\n.info-text {\n  text-align: center;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-paginator {\n    margin-top: 1rem;\n} */\n\n/* :host {\n  display: block;\n  margin-top: 2rem;\n} */\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n  margin-bottom: 10px;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n.info-text {\n  text-align: center;\n}\n\n/* .rounded-circle {\n  width: 60%;\n  margin-right: auto;\n  margin-left: 20%;\n  margin-top: 15%;\n  margin-bottom: 1rem;\n}\n\n.featurette {\n  width: 60%;\n  box-shadow: .3px .3px 1.25px rgba(0, 0, 0, 0.2);\n  margin: 15px;\n  margin-left: 20%;\n}\n.featurette-heading {\n  margin-top: 1rem;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2stbGlzdC9mZWVkYmFjay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7O0FBRUg7OztHQUdHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRyIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLWxpc3QvZmVlZGJhY2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuXG59XG5cbi5mZWVkYmFjay1lZGl0LWJ0biB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn0gKi9cblxuLyogOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn0gKi9cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogLnJvdW5kZWQtY2lyY2xlIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mZWF0dXJldHRlIHtcbiAgd2lkdGg6IDYwJTtcbiAgYm94LXNoYWRvdzogLjNweCAuM3B4IDEuMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/feedback/feedback-list/feedback-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/feedback-list/feedback-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: FeedbackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackListComponent", function() { return FeedbackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feedback.service */ "./src/app/feedback/feedback.service.ts");




var FeedbackListComponent = /** @class */ (function () {
    function FeedbackListComponent(feedbacksService, authService) {
        this.feedbacksService = feedbacksService;
        this.authService = authService;
        // posts = [
        //   {title: 'First Post', content: 'This is my first post content'},
        //   {title: 'Second Post', content: 'This is my second post content'},
        //   {title: 'Third Post', content: 'This is my third post content'}
        // ];
        this.feedbacks = [];
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.totalfeedbacks = 0;
        this.feedbacksPerPage = 5;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
    }
    FeedbackListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbacksService.getFeedbacks();
        this.fullName = this.authService.getName();
        this.feedbacksSub = this.feedbacksService.getFeedbackUpdateListener()
            .subscribe(function (feedbacks) {
            _this.feedbacks = feedbacks;
        });
    };
    FeedbackListComponent.prototype.onDelete = function (feedbackId) {
        var _this = this;
        if (confirm('Are you sure you want tp delete this feedback?')) {
            this.isLoading = true;
            this.feedbacksService.deleteFeedback(feedbackId)
                .subscribe(function () {
                _this.feedbacksService.getFeedbacks();
            }, function () {
                _this.isLoading = false;
            });
        }
    };
    FeedbackListComponent.prototype.ngOnDestroy = function () {
        this.feedbacksSub.unsubscribe();
        // this.authStatusSubs.unsubscribe();
    };
    FeedbackListComponent.ctorParameters = function () { return [
        { type: _feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    FeedbackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback-list',
            template: __webpack_require__(/*! raw-loader!./feedback-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/feedback/feedback-list/feedback-list.component.html"),
            styles: [__webpack_require__(/*! ./feedback-list.component.css */ "./src/app/feedback/feedback-list/feedback-list.component.css")]
        })
    ], FeedbackListComponent);
    return FeedbackListComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/feedback/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/feedbacks';
var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, router) {
        this.http = http;
        this.router = router;
        this.feedbacks = [];
        this.feedbacksUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    FeedbackService.prototype.getFeedbacks = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (feedbackData) {
            return feedbackData.feedbacks.map(function (feedback) {
                return {
                    title: feedback.title,
                    content: feedback.content,
                    id: feedback._id,
                };
            });
        }))
            .subscribe(function (transformedfeedbacks) {
            _this.feedbacks = transformedfeedbacks;
            _this.feedbacksUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.feedbacks));
        });
    };
    FeedbackService.prototype.getFeedbackUpdateListener = function () {
        return this.feedbacksUpdated.asObservable();
    };
    FeedbackService.prototype.getFeedback = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    FeedbackService.prototype.addFeedback = function (title, content) {
        var _this = this;
        var feedback = { id: null, title: title, content: content };
        this.http
            .post(BACKEND_URL, feedback)
            .subscribe(function (responseData) {
            var id = responseData.feedbackId;
            feedback.id = id;
            _this.feedbacks.push(feedback);
            _this.feedbacksUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.feedbacks));
        });
    };
    FeedbackService.prototype.updateFeedback = function (id, title, content) {
        var _this = this;
        var feedback = {
            id: id,
            title: title,
            content: content,
        };
        this.http
            .put(BACKEND_URL + id, feedback)
            .subscribe(function (response) {
            _this.router.navigate(['/user']);
        });
    };
    FeedbackService.prototype.deleteFeedback = function (feedbackId) {
        return this.http
            .delete(BACKEND_URL + feedbackId);
    };
    FeedbackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    /* padding: 0.5rem 1rem; */\n    /* top: 81px; */\n    right: 0;\n    left: 0;\n    z-index: 1030;\n\n}\n\n:host {\n  display: block;\n  /* margin-top: 2rem; */\n}\n\n.pt-5, .py-5 {\n  padding-top: 0;\n}\n\n.home-fact-area {\n  background-color: #ec5252;\n  background: linear-gradient(-45deg,#ec5252,#6e1a52);\n  color: #fff;\n  padding: 15px 0;\n  margin-bottom: 0.5rem;\n}\n\n.container-xl, .container-lg {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.home-fact-box i {\n  font-size: 47px;\n  margin-top: 8px;\n}\n\n.home-fact-box .text-box {\n  padding: 10px 0 10px 63px;\n}\n\n.home-fact-box .text-box h4 {\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n.homepage-text-info {\n  font-weight: 400;\n  color: lightgray;\n  margin-left: 1rem;\n  margin-top: 1rem;\n}\n\n/* Carousel base class */\n\n/* .carousel {\n    margin-left: -7.5rem;\n    margin-right: -7.5rem;\n  } */\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n    text-align: center;\n    bottom: 3rem;\n    z-index: 10;\n  }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n    height: 32rem;\n  }\n\n.carousel-item > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 100%;\n  }\n\n.featurette-image {\n    width: 500px;\n    height: 300px;\n\n  }\n\n@media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.25rem;\n      line-height: 1.4;\n    }\n\n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n\n/* @media (min-width: 62em) {\n    .featurette-heading {\n      margin-top: 7rem;\n    }\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxhQUFhOztBQUVqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBS3pCLG1EQUFtRDtFQUNuRCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFFcEIsYUFBYTtFQUViLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSx3QkFBd0I7O0FBQ3hCOzs7S0FHSzs7QUFDSCxpRUFBaUU7O0FBQ2pFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUEsMERBQTBEOztBQUMxRDtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTs7RUFFZjs7QUFFQTtJQUNFLHFDQUFxQztJQUNyQztNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztBQUVBOzs7O0tBSUciLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAqL1xuICAgIC8qIHRvcDogODFweDsgKi9cbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMzA7XG5cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogbWFyZ2luLXRvcDogMnJlbTsgKi9cbn1cblxuLnB0LTUsIC5weS01IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5ob21lLWZhY3QtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzUyNTI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywjZWM1MjUyLCM2ZTFhNTIpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsI2VjNTI1MiAwLCM2ZTFhNTIgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCNlYzUyNTIgMCwjNmUxYTUyIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCNlYzUyNTIgMCwjNmUxYTUyIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCNlYzUyNTIsIzZlMWE1Mik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uaG9tZS1mYWN0LWJveCBpIHtcbiAgZm9udC1zaXplOiA0N3B4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5ob21lLWZhY3QtYm94IC50ZXh0LWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDYzcHg7XG59XG5cbi5ob21lLWZhY3QtYm94IC50ZXh0LWJveCBoNCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhvbWVwYWdlLXRleHQtaW5mbyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4vKiAuY2Fyb3VzZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTcuNXJlbTtcbiAgfSAqL1xuICAvKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDNyZW07XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAvKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAzMnJlbTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaW1hZ2Uge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG5cbiAgICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gIH1cblxuICAvKiBAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgICB9XG4gIH0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.tiles = [
            { text: 'Welcome... Marhabba... Bienvenu', cols: 1, rows: 1, color: '#DDBDF1' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/messages/';
var MessageService = /** @class */ (function () {
    function MessageService() {
        var _this = this;
        this.chats = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(BACKEND_URL);
        this.chatssub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]();
        this.socket.on('connect', function () {
            console.log('connected to the server');
        });
        this.socket.on('message recieved', function (data) {
            _this.chats.push(data);
            _this.chatssub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats));
        });
        this.socket.on('all messages', function (data) {
            _this.chats = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data);
            _this.chatssub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats));
        });
        this.socket.on('user connected', function (data) {
            _this.chats.push({ message: data + " connected", type: 'notify' });
            _this.chatssub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats));
        });
        this.socket.on('user disconnected', function (data) {
            _this.chats.push({ message: data + " disconnected", type: 'notify' });
            _this.chatssub.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.chats));
        });
    }
    MessageService.prototype.addChat = function (message) {
        this.socket.emit('new message', message);
    };
    MessageService.prototype.addUser = function (user) {
        this.socket.emit('new user', user);
    };
    MessageService.prototype.getChats = function () {
        return this.chatssub.asObservable();
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 5rem;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nh2 {\n  text-align: center;\n}\n\n/* .topbar {\n  padding: 15px 20px;\n  background-color: #2196f3;\n  color: #fff;\n  font-size: 1.2em;\n} */\n\n.chatarea {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  background-color: #e0e0e0;\n  padding: 10px 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.chatarea .chat {\n  margin: 4px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.chatarea .chat.me p {\n  background-color: #fff;\n}\n\n.chatarea .chat p {\n  background-color: #BBDEFB;\n  display: inline;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);\n}\n\n.chatarea .chat.notify p {\n  background-color: transparent;\n  color: grey;\n  font-size: 0.8em;\n  font-weight: bold;\n  box-shadow: none;\n}\n\n.chatarea .chat p .username {\n  display: block;\n  font-size: 0.8em;\n  font-weight: bold;\n  font-style: italic;\n}\n\n.inputarea form {\n  padding: 10px 0 10px 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.inputarea .textbox {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  width: 100%;\n  display: block;\n  border: 0;\n  font-size: 1.2em;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.inputarea .textbox:focus {\n  outline: 0;\n  border-color: 2px solid #2196F3;\n}\n\n.inputarea .sendButton {\n  padding: 7px 10px;\n  color: #2196F3;\n  border: 0;\n  font-size: 1em;\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.inputarea .sendButton:focus {\n  outline: 0;\n}\n\n.usernamebox {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #e0e0e0;\n}\n\n.usernamebox .user{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px;\n  background-color: #fff;\n}\n\n.usernamebox .user form {\n  text-align: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7Ozs7O0dBS0c7O0FBRUg7RUFDRSxtQkFBWTtVQUFaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IsdUJBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBWTtVQUFaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsU0FBUztFQUNULGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1Asb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIC50b3BiYXIge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMmVtO1xufSAqL1xuXG4uY2hhdGFyZWEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNoYXRhcmVhIC5jaGF0IHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY2hhdGFyZWEgLmNoYXQubWUgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jaGF0YXJlYSAuY2hhdCBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCREVGQjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLmNoYXRhcmVhIC5jaGF0Lm5vdGlmeSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNoYXRhcmVhIC5jaGF0IHAgLnVzZXJuYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pbnB1dGFyZWEgZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5wdXRhcmVhIC50ZXh0Ym94IHtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5pbnB1dGFyZWEgLnRleHRib3g6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItY29sb3I6IDJweCBzb2xpZCAjMjE5NkYzO1xufVxuXG4uaW5wdXRhcmVhIC5zZW5kQnV0dG9uIHtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGNvbG9yOiAjMjE5NkYzO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dGFyZWEgLnNlbmRCdXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4udXNlcm5hbWVib3gge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLnVzZXJuYW1lYm94IC51c2Vye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnVzZXJuYW1lYm94IC51c2VyIGZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.title = 'Jayem Discussion Forum';
        this.message = '';
        this.chats = [];
        this.messageService.getChats().subscribe(function (data) {
            _this.chats = data;
            window.setInterval(function () {
                var elem = document.getElementById('scrolldiv');
                elem.scrollTop = elem.scrollHeight;
            }, 500);
        });
    }
    MessagesComponent.prototype.addChat = function () {
        if (this.message.length === 0) {
            return;
        }
        this.messageService.addChat(this.message);
        this.message = '';
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        })
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _order_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order/orders.service */ "./src/app/order/orders.service.ts");




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.orders = [];
        this.userIsAuthenticated = false;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrdersByUser(this.userId);
        this.authService.getUserId();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    MyOrdersComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _order_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
    ]; };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        })
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order/order-success/order-success.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order/order-success/order-success.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/order/order-success/order-success.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order/order-success/order-success.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/order/orders.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent(http, ordersService) {
        this.http = http;
        this.ordersService = ordersService;
        this.orders = [];
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/orders/')
            .subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
    };
    OrderSuccessComponent.prototype.ngOnDestroy = function () {
        this.ordersSub.unsubscribe();
    };
    OrderSuccessComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
    ]; };
    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order/order-success/order-success.component.css")]
        })
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5rem;\n}\n.statsNum {\n  font-size: 3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cbi5zdGF0c051bSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.service */ "./src/app/order/orders.service.ts");




var OrderComponent = /** @class */ (function () {
    function OrderComponent(http, ordersService) {
        this.http = http;
        this.ordersService = ordersService;
        this.orders = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.ordersService.getOrders();
        // this.ordersSub = this.ordersService.getOrdersUpdateListener()
        // .subscribe((orders: Order[]) => {
        //   this.orders = orders;
        // });
        this.http.get('http://localhost:3000/api/orders/')
            .subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
    };
    OrderComponent.prototype.totalEarnings = function (orders) {
        var _this = this;
        return orders.reduce(function (acc, cur) { return acc + _this.orderTotal(cur.items); }, 0);
    };
    OrderComponent.prototype.totalItems = function (orders) {
        return orders.reduce(function (acc, cur) { return acc + cur.items.length; }, 0);
    };
    OrderComponent.prototype.orderTotal = function (items) {
        return items.reduce(function (acc, cur) { return acc + cur.price; }, 0);
    };
    OrderComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }
    ]; };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/order/orders.service.ts":
/*!*****************************************!*\
  !*** ./src/app/order/orders.service.ts ***!
  \*****************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/orders/';
var OrdersService = /** @class */ (function () {
    function OrdersService(http, router) {
        this.http = http;
        this.router = router;
        this.orders = [];
        this.orderssUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    OrdersService.prototype.getOrders = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .subscribe(function (data) { return _this.orders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data); });
    };
    OrdersService.prototype.getOrdersUpdateListener = function () {
        return this.orderssUpdated.asObservable();
    };
    OrdersService.prototype.getOrder = function (id) {
        return this.http
            .get(BACKEND_URL + id);
    };
    OrdersService.prototype.getFilterOrders = function (order, filters) {
        return this.http
            .get(BACKEND_URL, filters);
    };
    OrdersService.prototype.getOrdersByUser = function (userId) {
        return this.http.get(BACKEND_URL + userId);
    };
    // totalEarnings(orders) {
    //   return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
    // }
    // totalItems(orders) {
    //   return orders.reduce((acc, cur) => acc + cur.items.length, 0);
    // }
    // orderTotal(items) {
    //   return items.reduce((acc, cur) => acc + cur.price, 0);
    // }
    OrdersService.prototype.deleteOrder = function (orderId) {
        return this.http.delete(BACKEND_URL + orderId);
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <p>\n      page-not-found works!\n    </p>\n  "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/posts/create-posts/create-posts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/posts/create-posts/create-posts.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 3rem;\n  background-color: #E6EAE8;\n  height: 100%;\n\n}\n\n.wrapper {\n  margin: 0 auto;\n  top: 50px;\n  position: relative;\n  padding: 0 10px;\n  width: 75%;\n  min-width: 750px;\n  background-color: #E6EAE8;\n\n}\n\n.user_details {\n  width: 250px;\n  float: left;\n  margin-bottom: 20px;\n}\n\n.column {\n  background-color: #fff;\n  padding: 10px;\n  border: 1px solid #D3D3D3;\n  border-radius: 5px;\n  box-shadow: 2px 2px 1px #D3D3D3;\n  z-index: -1;\n}\n\n.user_details img {\n  height: 125px;\n  width: 125px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.user_details_left_right {\n  width: 125px;\n  display: inline-block;\n  position: absolute;\n}\n\n.main_column {\n  float: right;\n  width: 65%;\n  z-index: -1;\n  min-width: 160px;\n}\n\ninput[type=\"text\"] {\n  font-size: 12px;\n}\n\nmat-card {\n  width: 100%;\n  /* margin: auto; */\n  margin-top: 4rem;\n  margin-bottom: 2rem;\n  /* margin-left: 17%; */\n}\n\nh3 {\n    text-align: left;\n}\n\nmat-form-field,\ntextarea {\n  padding: 10px;\n  height: 3rem;\n  width: 100%;\n  font-size: 13px;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n}\n\n/*\nmat-menu {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.dropdown-item{\n  color: black;\n}\n\n.dropdown-item:hover{\n  color: black;\n}\n\n\nli {\n  list-style: none;\n  padding: 20px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n}\nli:hover {\n  color: orange;\n}\n\nul{\n  list-style: none;\n  display: flex;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\na:hover {\n  color: orange;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvY3JlYXRlLXBvc3RzL2NyZWF0ZS1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOENFIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvY3JlYXRlLXBvc3RzL2NyZWF0ZS1wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkVBRTg7XG4gIGhlaWdodDogMTAwJTtcblxufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogNzUlO1xuICBtaW4td2lkdGg6IDc1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFQUU4O1xuXG59XG4udXNlcl9kZXRhaWxzIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggI0QzRDNEMztcbiAgei1pbmRleDogLTE7XG59XG4udXNlcl9kZXRhaWxzIGltZyB7XG4gIGhlaWdodDogMTI1cHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VyX2RldGFpbHNfbGVmdF9yaWdodCB7XG4gIHdpZHRoOiAxMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluX2NvbHVtbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDY1JTtcbiAgei1pbmRleDogLTE7XG4gIG1pbi13aWR0aDogMTYwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW46IGF1dG87ICovXG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIC8qIG1hcmdpbi1sZWZ0OiAxNyU7ICovXG59XG5cblxuaDMge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKlxubWF0LW1lbnUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZHJvcGRvd24taXRlbXtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlcntcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saTpob3ZlciB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbnVse1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/create-posts/create-posts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/posts/create-posts/create-posts.component.ts ***!
  \**************************************************************/
/*! exports provided: CreatePostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostsComponent", function() { return CreatePostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





/** @title Responsive sidenav */
var CreatePostsComponent = /** @class */ (function () {
    function CreatePostsComponent(postsService, route, authService) {
        this.postsService = postsService;
        this.route = route;
        this.authService = authService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.mode = 'create';
    }
    CreatePostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.fullName = this.authService.getName();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.fullName = _this.authService.getName();
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postsService
                    .getPost(_this.postId)
                    .subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        creator: postData.creator,
                        author: postData.author,
                        createdAt: postData.createdAt
                    };
                });
            }
            else {
                _this.mode = 'create';
                _this.postId = null;
            }
        });
    };
    CreatePostsComponent.prototype.onSavePost = function (form) {
        if (form.invalid) {
            return false;
        }
        this.isLoading = true;
        this.postsService.addPost(this.postId, form.value.title, form.value.content, form.value.creator, form.value.author);
        form.resetForm();
    };
    // onSavePost(form: NgForm) {
    //   if (form.invalid) {
    //     return false;
    //   }
    //   this.isLoading = true;
    //   if (this.mode === 'create') {
    //     this.postsService.addPost(
    //       form.value.title,
    //       form.value.content,
    //       form.value.creator
    //     );
    //   } else {
    //     this.postsService.updatePost(
    //       this.postId,
    //       form.value.title,
    //       form.value.content,
    //       form.value.creator
    //     );
    //   }
    //   form.resetForm();
    // }
    CreatePostsComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    CreatePostsComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    CreatePostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-posts',
            template: __webpack_require__(/*! raw-loader!./create-posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/create-posts/create-posts.component.html"),
            styles: [__webpack_require__(/*! ./create-posts.component.css */ "./src/app/posts/create-posts/create-posts.component.css")]
        })
    ], CreatePostsComponent);
    return CreatePostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/list-posts/list-posts.component.css":
/*!***********************************************************!*\
  !*** ./src/app/posts/list-posts/list-posts.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 3rem;\n}\n\nmat-expansion-panel {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\nh3 {\n  text-align: left;\n  margin-left: 18%;\n}\n\n.post-edit-btn {\n    text-decoration: none;\n    text-align: center;\n    margin-left: 3px;\n}\n\n.info-text {\n  text-align: center;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-paginator {\n    margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvbGlzdC1wb3N0cy9saXN0LXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2xpc3QtcG9zdHMvbGlzdC1wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTglO1xufVxuXG4ucG9zdC1lZGl0LWJ0biB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/list-posts/list-posts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/list-posts/list-posts.component.ts ***!
  \**********************************************************/
/*! exports provided: ListPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPostsComponent", function() { return ListPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");




var ListPostsComponent = /** @class */ (function () {
    function ListPostsComponent(postsService, authService) {
        this.postsService = postsService;
        this.authService = authService;
        // posts = [
        //   {title: 'First Post', content: 'This is my first post content'},
        //   {title: 'Second Post', content: 'This is my second post content'},
        //   {title: 'Third Post', content: 'This is my third post content'}
        // ];
        this.posts = [];
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
    }
    ListPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.fullName = this.authService.getName();
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
            _this.fullName = _this.authService.getName();
        });
    };
    ListPostsComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
    };
    ListPostsComponent.prototype.onDelete = function (postId) {
        var _this = this;
        if (confirm('Are you sure you want tp delete this post?')) {
            this.isLoading = true;
            this.postsService.deletePost(postId)
                .subscribe(function () {
                _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
            }, function () {
                _this.isLoading = false;
            });
        }
    };
    ListPostsComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.authStatusSubs.unsubscribe();
    };
    ListPostsComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ListPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-posts',
            template: __webpack_require__(/*! raw-loader!./list-posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/list-posts/list-posts.component.html"),
            styles: [__webpack_require__(/*! ./list-posts.component.css */ "./src/app/posts/list-posts/list-posts.component.css")]
        })
    ], ListPostsComponent);
    return ListPostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/posts/';
var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PostsService.prototype.getPosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pageSize=" + postsPerPage + "&page=" + currentPage;
        this.http
            .get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
                posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        createdAt: post.createdAt,
                        creator: post.creator
                    };
                }),
                maxPosts: postData.maxPosts
            };
        }))
            .subscribe(function (transformedPostData) {
            _this.posts = transformedPostData.posts;
            _this.postsUpdated.next({
                posts: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts),
                postCount: transformedPostData.maxPosts
            });
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    PostsService.prototype.addPost = function (title, content, creator, createdAt, author) {
        var _this = this;
        var post = { id: null, title: title, content: content, creator: creator, createdAt: createdAt, author: author };
        this.http
            .post(BACKEND_URL, post)
            .subscribe(function (responseData) {
            _this.router.navigate(['/posts']);
        });
    };
    PostsService.prototype.updatePost = function (id, title, content, createdAt, author) {
        var _this = this;
        var post = {
            id: id,
            title: title,
            content: content,
            createdAt: createdAt,
            creator: null,
            author: author
        };
        this.http
            .put(BACKEND_URL + id, post)
            .subscribe(function (response) {
            _this.router.navigate(['/posts']);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http
            .delete(BACKEND_URL + postId);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n    margin-top: 250px;\n}\n\nbody {\n    font-size: .875rem;\n\n  }\n\n.container-fluid {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 25px;\n}\n\n.feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n\n/*\n   * Sidebar\n   */\n\n.rounded-circle {\n      height: 100px;\n      width: 100px;\n      margin-right: auto;\n      margin-left: auto;\n        margin-bottom: 1rem;\n  }\n\n.avatar {\n      text-align: center;\n  }\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    padding: 48px 0 0; /* Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  }\n\n.sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 3rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n\n.sidebar .nav-link {\n    font-weight: 400;\n    color: cadetblue;\n    text-align: left;\n\n  }\n\n.sidebar .nav-link .feather {\n    margin-right: 4px;\n    color: #999;\n  }\n\n.sidebar .nav-link.active {\n    color: #007bff;\n  }\n\n.sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n\n.sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n\n/*\n   * Content\n   */\n\n.pt-3, .py-3 {\n    padding-top: 2rem!important;\n}\n\n[role=\"main\"] {\n    padding-top: 20px; /* Space for fixed navbar */\n  }\n\n@media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 1rem; /* Space for fixed navbar */\n    }\n  }\n\n/*\n   * Navbar\n   */\n\n.nav {\n     margin-top: 2rem;\n   }\n\n.navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n\n.navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n\n.form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n\n.form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7O0VBRXBCOztBQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7QUFFQTs7SUFFRTs7QUFDRjtNQUNJLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQjtRQUNmLG1CQUFtQjtFQUN6Qjs7QUFDQTtNQUNJLGtCQUFrQjtFQUN0Qjs7QUFDQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4Qyw0Q0FBNEM7RUFDOUM7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtFQUNqRjs7QUFFQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0VBRWxCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7O0lBRUUsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0FBRUE7O0lBRUU7O0FBRUQ7SUFDQywyQkFBMkI7QUFDL0I7O0FBRUU7SUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDaEQ7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQixFQUFFLDJCQUEyQjtJQUNoRDtFQUNGOztBQUVBOztJQUVFOztBQUVEO0tBQ0UsZ0JBQWdCO0dBQ2xCOztBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLDZDQUE2QztFQUMvQzs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcblxuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuICAuZmVhdGhlciB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfVxuXG4gIC8qXG4gICAqIFNpZGViYXJcbiAgICovXG4gIC5yb3VuZGVkLWNpcmNsZSB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICAgIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIH1cblxuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIH1cblxuICBAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xuICAgIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogY2FkZXRibHVlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cblxuICAgLnB0LTMsIC5weS0zIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbSFpbXBvcnRhbnQ7XG59XG5cbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtOyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogTmF2YmFyXG4gICAqL1xuXG4gICAubmF2IHtcbiAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgIH1cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICB9XG5cbiAgLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wtZGFyayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



/** @title Responsive sidenav */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.username = this.authService.getUsername();
        this.fullName = this.authService.getName();
        this.userId = this.authService.getUserId();
        this.email = this.authService.getEmail();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(coursesService, fb, router, authService) {
        this.coursesService = coursesService;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.cart = [];
        this.userIsAuthenticated = false;
        this.checkoutForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressTwo: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.userId = this.authService.getUserId();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    ShippingFormComponent.prototype.doCheckout = function () {
        var _this = this;
        var order = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.checkoutForm.value, { items: this.cart });
        this.coursesService.checkout(order).subscribe(function (res) {
            var snackbar = document.getElementById('snackbar');
            snackbar.innerHTML = 'Order placed successfully';
            snackbar.className = 'show';
            setTimeout(function () {
                snackbar.className = snackbar.className.replace('show', '');
                _this.coursesService.clearCart();
                _this.router.navigate(['/order-success']);
            }, 3000);
        });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    ShippingFormComponent.ctorParameters = function () { return [
        { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-form',
            template: __webpack_require__(/*! raw-loader!./shipping-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shipping-form/shipping-form.component.css")]
        })
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n    margin-top: 250px;\n}\n\nbody {\n    font-size: .875rem;\n\n  }\n\n.container-fluid {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 25px;\n}\n\n.feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n\n.fa-home {\n    margin-left: 44%;\n    margin-bottom: 1rem;\n    font-size: 25px;\n  }\n\n/*\n   * Sidebar\n   */\n\n.rounded-circle {\n      height: 100px;\n      width: 100px;\n      margin: auto;\n    margin-bottom: 1rem;\n  }\n\n.avatar {\n      text-align: center;\n  }\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    padding: 48px 0 0; /* Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  }\n\n.sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 3rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n\n.sidebar .nav-link {\n    font-weight: 400;\n    color: #1f3a93;\n  }\n\n.sidebar .nav-link .feather {\n    margin-right: 4px;\n    background: #1f3a93;\n  }\n\n.sidebar .nav-link.active {\n    color: #007bff;\n  }\n\n.sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n\n.sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n\n/*\n   * Content\n   */\n\n[role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n\n@media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n\n.h2 {\n    font-weight: 400;\n\n  }\n\nh6{\n      text-align: center;\n      font-weight: 200;\n  }\n\ninput[type=\"file\"] {\n      visibility: hidden;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7O0VBRXBCOztBQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFDQTs7SUFFRTs7QUFDRjtNQUNJLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWTtJQUNkLG1CQUFtQjtFQUNyQjs7QUFDQTtNQUNJLGtCQUFrQjtFQUN0Qjs7QUFDQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4Qyw0Q0FBNEM7RUFDOUM7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtFQUNqRjs7QUFFQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7QUFFQTs7SUFFRTs7QUFFRjtJQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQ2hEO0VBQ0Y7O0FBRUE7SUFDRSxnQkFBZ0I7O0VBRWxCOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjs7QUFHQTtNQUNJLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xufVxuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG5cbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbiAgLmZlYXRoZXIge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIH1cblxuICAuZmEtaG9tZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ0JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAvKlxuICAgKiBTaWRlYmFyXG4gICAqL1xuICAucm91bmRlZC1jaXJjbGUge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5hdmF0YXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICBwYWRkaW5nOiA0OHB4IDAgMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICB9XG5cbiAgQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcbiAgICAuc2lkZWJhci1zdGlja3kge1xuICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB9XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxZjNhOTM7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICMxZjNhOTM7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cblxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiAxMzNweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgfVxuICB9XG5cbiAgLmgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gIH1cblxuICBoNntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
        this.userIsAuthenticated = false;
        this.cartItemCount = 10;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.fullName = this.authService.getName();
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.fullName = _this.authService.getName();
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'truncate' })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    width: 100%;\n    display: inline-block;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n  }\n  .mat-form-field {\n    font-size: 12px;\n    width: 100%;\n  }\n  table {\n    width: 100%;\n  }\n  td, th {\n    width: 5%;\n  }\n  mat-spinner {\n    margin: auto;\n  }\n  input[type=\"file\"] {\n    visibility: hidden;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsV0FBVztFQUNiO0VBRUE7SUFDRSxTQUFTO0VBQ1g7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogNSU7XG4gIH1cblxuICBtYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");







/** Constants used to fill up our data base. */
/**
 * @title Data table with sorting, pagination, and filtering.
 */
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.users = [];
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.displayedColumns = ['fullName', 'username', 'email', 'phone', 'action'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.getUsers();
        this.userId = this.authService.getUserId();
        this.usersSub = this.userService.getUserUpdateListener()
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    UserListComponent.prototype.getFilterData = function (filters) {
        var _this = this;
        this.userService.getFilterUsers('user', filters);
        this.usersSub = this.userService.getUserUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    UserListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserListComponent.prototype.onDelete = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function () {
            _this.userService.getUsers();
        }, function () {
            _this.isLoading = false;
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.usersSub.unsubscribe();
        this.authStatusSubs.unsubscribe();
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], UserListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], UserListComponent.prototype, "sort", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ********************************************** */\n\n/* mat-toolbar{\n  display: flex;\n  flex-wrap: wrap ;\n  align-items: center;\n  justify-content: space-between;\n  background-color: orange;\n  border-bottom: 5px solid #f39c12;;\n}\n\n.mat-toolbar  {\n  background: #1f3a93;\n  color: #fff;\n}\n\n.header_logo {\n  margin-top: 10px;\n  width: 70px;\n  height: 60px;\n}\nmat-menu {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header-login {\n  border: 1px solid orange;\n}\n.header-signup {\n  border: 1px solid orange;\n  background-color: white;\n}\n\n.dropdown-item{\n  color: black;\n}\n\n.dropdown-item:hover{\n  color: black;\n}\n\n\nli {\n  list-style: none;\n  padding: 20px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n}\nli:hover {\n  color: orange;\n}\n\nul{\n  list-style: none;\n  display: flex;\n}\n\n\na {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\na:hover {\n  color: orange;\n}\n\n.spacer {\n  flex: 1 1 auto;\n} */\n\n.row {\n  margin-top: 5rem;\n}\n\n.example-radio-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: -45px;\n  margin-left: 105px;\n\n  /* margin: 15px 0; */\n}\n\n.example-radio-button {\n  /* margin-top: 15px; */\n  margin: 15px;\n\n}\n\n/* mat-card {\n  top: 2rem;\n} */\n\nmat-form-field {\n    width: 100%;\n}\n\ninput[type=\"file\"] {\n    visibility: hidden;\n}\n\n.image-preview {\n    height: 10rem;\n    margin: 1rem 0;\n}\n\n.image-preview img{\n    height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EOztBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0VHOztBQUVIO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7O0FBRWQ7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyogbWF0LXRvb2xiYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcCA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2YzOWMxMjs7XG59XG5cbi5tYXQtdG9vbGJhciAge1xuICBiYWNrZ3JvdW5kOiAjMWYzYTkzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlcl9sb2dvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbm1hdC1tZW51IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhlYWRlci1sb2dpbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbn1cbi5oZWFkZXItc2lnbnVwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW17XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubGk6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59ICovXG5cbi5yb3cge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICBtYXJnaW4tbGVmdDogMTA1cHg7XG5cbiAgLyogbWFyZ2luOiAxNXB4IDA7ICovXG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXG4gIG1hcmdpbjogMTVweDtcblxufVxuXG4vKiBtYXQtY2FyZCB7XG4gIHRvcDogMnJlbTtcbn0gKi9cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICAgIGhlaWdodDogMTByZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_admin_course_form_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/course-form/mime-type.validator */ "./src/app/admin/course-form/mime-type.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







/** @title Responsive sidenav */
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, route, authService) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.roles = ['Yes', 'No'];
        this.mode = 'create';
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (user) {
            _this.userIsAuthenticated = user;
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                asyncValidators: [src_app_admin_course_form_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            }),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('userId')) {
                _this.mode = 'edit';
                _this.userId = paramMap.get('userId');
                _this.isLoading = true;
                _this.userService
                    .getUser(_this.userId)
                    .subscribe(function (userData) {
                    _this.isLoading = false;
                    _this.user = {
                        id: userData._id,
                        fullName: userData.fullName,
                        username: userData.username,
                        email: userData.email,
                        contact: userData.contact,
                        isAdmin: userData.isAdmin,
                        imagePath: userData.imagePath
                    };
                    _this.form.setValue({
                        fullName: _this.user.fullName,
                        username: _this.user.username,
                        email: _this.user.email,
                        contact: _this.user.contact,
                        isAdmin: _this.user.isAdmin,
                        imagePath: _this.user.imagePath
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.userId = null;
            }
        });
    };
    UserComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    UserComponent.prototype.onSaveUser = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.userService.addUser(this.form.value.name, this.form.value.username, this.form.value.email, this.form.value.contact, this.form.value.isAdmin, this.form.value.image);
        }
        else {
            this.userService.updateUser(this.userId, this.form.value.name, this.form.value.username, this.form.value.email, this.form.value.phone, this.form.value.isAdmin, this.form.value.image);
            this.isLoading = true;
            this.form.reset();
        }
    };
    // this._backendService.getUserStatus()
    //   .subscribe(res => {
    //     this.userStatusColor = res ? 'white' : 'warn';
    //   });
    UserComponent.prototype.ngOnDestroy = function () {
        // tslint:disable-next-line: deprecation
        this.authStatusSubs.unsubscribe();
    };
    UserComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/user/';
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (userData) {
            return userData.users.map(function (user) {
                return {
                    fullName: user.fullName,
                    username: user.username,
                    email: user.email,
                    id: user._id,
                    contact: user.contact,
                    isAdmin: user.isAdmin,
                    imagePath: user.imagePath
                };
            });
        }))
            .subscribe(function (transformedUser) {
            _this.users = transformedUser;
            _this.usersUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.users));
        });
    };
    UserService.prototype.getUserUpdateListener = function () {
        return this.usersUpdated.asObservable();
    };
    UserService.prototype.getUser = function (id) {
        return this.http
            .get(BACKEND_URL + id);
    };
    UserService.prototype.getFilterUsers = function (user, filters) {
        return this.http
            .get(BACKEND_URL, filters);
    };
    //   getImagePath() {
    //     return this.imagePath;
    // }
    UserService.prototype.addUser = function (fullName, username, email, isAdmin, contact, image) {
        var _this = this;
        var userData = new FormData();
        userData.append('fullName', fullName);
        userData.append('username', username);
        userData.append('email', email);
        userData.append('contact', String(contact));
        userData.append('isAdmin', JSON.stringify(isAdmin));
        userData.append('image', image, name);
        this.http
            .post(BACKEND_URL, userData)
            .subscribe(function (responseData) {
            _this.router.navigate(['/profile']);
        });
    };
    UserService.prototype.updateUser = function (id, fullName, username, email, isAdmin, contact, image) {
        var _this = this;
        var userData;
        if (typeof image === 'object') {
            userData = new FormData();
            userData.append('id', id);
            userData.append('fullName', fullName);
            userData.append('username', username);
            userData.append('email', email);
            userData.append('isAdmin', JSON.stringify(isAdmin));
            userData.append('contact', String(contact));
            userData.append('image', image, name);
        }
        else {
            userData = {
                id: id,
                fullName: fullName,
                username: username,
                email: email,
                isAdmin: isAdmin,
                contact: contact,
                imagePath: image
            };
        }
        this.http
            .put(BACKEND_URL + id, userData)
            .subscribe(function (response) {
            _this.router.navigate(['/admin']);
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http
            .delete(BACKEND_URL + userId);
    };
    UserService.prototype.updateShoppingInterest = function (collType, data) {
        return this.http
            .get(BACKEND_URL, data);
    };
    UserService.prototype.updateShoppingCart = function (collType, data) {
        return this.http
            .get(BACKEND_URL + '/cart/', data);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adejabar/Desktop/jayem/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map