(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n  <header class='header'>\n    <div class='box'>\n      <div class='box_items'>\n        <div class='header__logo'>\n          <a href=\"/\">\n            <span>FrontNews</span>\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z\" fill=\"currentColor\"></path>\n            </svg>\n          </a>\n        </div>\n        <div class='header__actions'>\n          <div class='header__actions-search'>\n            <form>\n              <label for='search-input'>\n                <input type='search' id='search-input'/>\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z\"  fill=\"currentColor\"></path>\n                </svg>\n              </label>\n            </form>\n          </div>\n          <div class='header__actions-login'>\n            <a href=\"/\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z\" fill=\"currentColor\"></path>\n              </svg>\n            </a>\n            <div class='tooltip'>\n              <ng-container *ngIf='!(isLogin$ | async)'>\n                <h5>Войти</h5>\n                <hr />\n                <button class='btn' (click)='onClickLogin()'>Вход</button>\n              </ng-container>\n              <ng-container *ngIf='isLogin$ | async'>\n                <h5>Admin</h5>\n                <hr />\n                <app-switcher label='Режим редактирования' (whenSwitchValue$)='onChangeMode($event)'></app-switcher>\n                <button class='btn' (click)='onClickLogout()'>Выйти</button>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <main class='main'>\n    <div class='box'>\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n  <footer class='footer'>\n      <div class='box'>\n        <div class='box_items'>\n          <div class='footer__link'>\n            <a href='mailto:xeni.kopa@icloud.com'>\n              <span>xeni.kopa@icloud.com </span>\n              <svg width=\"10\" height=\"10\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill=\"currentColor\" d=\"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z\"></path>\n              </svg>\n            </a>\n          </div>\n          <div class='footer__name'>\n            Xeni Koparos\n          </div>\n        </div>\n      </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Редактирование \"{{newsData.name}}\"</h2>\n<form #editForm=\"ngForm\" (ngSubmit)=\"editForm.valid && onSubmit(editForm.value)\">\n  <div class='form-field is-required'\n    [class.has-error]='name.invalid && (name.dirty || name.touched)'  \n  >\n    <label for='name'>Заголовок статьи</label>\n    <input \n      type='text' \n      [ngModel]='newsData.name' \n      name='name'\n      required \n      minlength=\"4\"\n      #name=\"ngModel\"\n    />\n    <div class='form-field__error' *ngIf=\"name.invalid && (name.dirty || name.touched) && editForm.submitted && !isCloseNameError\">\n      Поле необходимо заполнить. Длина заголовка должна быть более 4 символов\n      <button type='button' (click)='isCloseNameError = true'>&#215;</button>\n    </div>\n  </div>\n  <div class='form-field is-required' [class.has-error]='author.invalid && (author.dirty || author.touched)'  >\n    <label for='author'>Автор</label>\n    <input type='text' [ngModel]='newsData.author' name='author' required  #author=\"ngModel\"/>\n    <div class='form-field__error' *ngIf=\"author.invalid && (author.dirty || author.touched) && editForm.submitted && !isCloseAuthorError\">\n      Поле необходимо заполнить\n      <button type='button' (click)='isCloseAuthorError = true'>&#215;</button>\n    </div>\n  </div>\n  <div class='form-field'>\n    <app-switcher label='Активность' [ngModel]='newsData.active' name='active'></app-switcher>\n  </div>\n  <div class='form-field'>\n    <label for='previewText'>Превью</label>\n    <textarea [ngModel]='newsData.previewText' name='previewText' rows=\"5\" ></textarea>\n  </div>\n  <div class='btn__block'>\n    <button class='btn' type='submit'>Сохранить</button>\n    <button class='btn' (click)='onClose()' type='button'>Закрыть</button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-pagination/news-pagination.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-pagination/news-pagination.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='news__pagination'>\n  <div class='pagination'>\n    <button (click)='onClickPage(\"1\")' [disabled]='isActivePage$(1) | async'> << </button>\n    <button (click)='onClickPrevPage()' [disabled]='isActivePage$(1) | async'> < </button>\n    <ul class='pagination__list'>\n      <li class='pagination__item' *ngFor='let page of (pages$ | async)'>\n        <button [class.is-active]='isActivePage$(page) | async' value='{{page}}'\n          (click)='onClickPage($event.target.value)'>{{page}}</button>\n      </li>\n    </ul>\n    <button (click)='onClickNextPage()' [disabled]='(isLastPage$ | async)'>></button>\n    <button (click)='onClickLastPage()' [disabled]='(isLastPage$ | async)'>>></button>\n  </div>\n  <div class='select-wrapper'>\n    <select (ngModelChange)='onChangeCount($event)' [ngModel]=\"selectedItemsCount$ | async\">\n      <option *ngFor='let item of itemsOnPageCount' [ngValue]='item'>\n        {{item}}\n      </option>\n    </select>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='news'>\n  <div class='news__filter'>\n    <div class='show-all'>\n      <app-switcher label='Показать все новости' (whenSwitchValue$)='onChangeActivity($event)'></app-switcher>\n    </div>\n    <div class='sort-select select-wrapper'>\n      <select (ngModelChange)='onChangeSort($event)' [ngModel]=\"(selectedSort$ | async)\">\n        <option *ngFor='let item of sortList' [ngValue]='item'>\n          <ng-container *ngIf='item.order === \"asc\"'>&#8593;</ng-container>\n          <ng-container *ngIf='item.order === \"desc\"'>&#8595;</ng-container>\n          {{item.title}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class='news__item' *ngFor='let news of (filtredNews$ | async) |\n          pageParser: (pageParams$ | async) |\n          sortNews: (selectedSort$ | async)?.field : (selectedSort$ | async)?.order\n        '>\n    <div class='news__item-header'>\n      <h3>{{news.name}}</h3>\n      <span>{{news.datePublication | date:'dd.MM.yyyy'}}</span>\n    </div>\n    <p *ngIf='news?.previewText'> {{news?.previewText}}</p>\n    <div class='btn__block' *ngIf='isEditMode$ | async'>\n      <button class='btn' type='button' (click)='onClickEdit(news)'>Редактировать &#9998;</button>\n      <button class='btn' (click)='onClickRemove(news)' type='button'>Удалить &#10006;</button>\n    </div>\n  </div>\n  <ng-container #paginationContainer></ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-modal/confirm-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-modal/confirm-modal.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{confirmData.title}}</h2>\n<p class='confirm-text'>{{confirmData.text}}</p>\n<div class='btn__block'>\n  <button class='btn' (click)='onClickConfirm()' type='submit'>Подтвердить</button>\n  <button class='btn' (click)='onClickDismiss()' type='button'>Отмена</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/switcher/switcher.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/switcher/switcher.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='switcher'>\n  {{label}}\n  <label class='switcher__box'>\n    <input type='checkbox' (change)='onChangeValue($event.target.checked)' [attr.checked]='value' [(ngModel)]=\"value\">\n    <span class=\"slider\"></span>\n  </label>\n</div>");

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-component/app.component.sass":
/*!**************************************************!*\
  !*** ./src/app/app-component/app.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'Source Sans Pro';\n  src: url('SourceSansPro-Regular.ttf');\n}\n\n/* main colors */\n\n/* main block on page */\n\n/* header block styles */\n\n.header {\n  background-color: #7B1FA2;\n  color: #fff;\n  font-size: 20px;\n  display: flex;\n}\n\n.header__logo span {\n  margin-right: 8px;\n}\n\n.header__actions {\n  margin-left: auto;\n  display: flex;\n}\n\n.header__actions > div {\n  margin-right: 12px;\n}\n\n.header__actions > div:last-child {\n  margin-right: 0;\n}\n\n.header__actions-search form label {\n  display: flex;\n  align-items: center;\n}\n\n.header__actions-search form label:hover input {\n  width: 200px;\n  opacity: 1;\n}\n\n.header__actions-search form input[type='search'] {\n  width: 0;\n  opacity: 0;\n  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n}\n\n.header__actions-login {\n  position: relative;\n}\n\n.header__actions-login:hover {\n  cursor: pointer;\n}\n\n.header__actions-login:hover .tooltip {\n  display: block;\n}\n\n.main {\n  flex: 1 1 0;\n  margin-bottom: 80px;\n}\n\n.footer {\n  background-color: #7B1FA2;\n  color: #fff;\n  display: flex;\n}\n\n.footer__name {\n  margin-left: auto;\n}\n\n/* items in footer & header box */\n\n.box_items {\n  display: flex;\n  padding-bottom: 16px;\n  padding-top: 16px;\n  min-width: 950px;\n}\n\n.tooltip {\n  position: absolute;\n  width: 200px;\n  display: none;\n  top: 30px;\n  min-height: 40px;\n  left: -80px;\n  transition: all 0.5s ease;\n  background-color: #fff;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  padding: 10px 15px;\n  color: #000;\n}\n\n.tooltip h5 {\n  font-size: 18px;\n  margin: 0;\n}\n\n.tooltip:before, .tooltip:after {\n  content: \"\";\n  position: absolute;\n  left: 80px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid transparent;\n}\n\n.tooltip:before {\n  top: -21px;\n  border-bottom: 10px solid rgba(168, 168, 168, 0.5);\n}\n\n.tooltip:after {\n  top: -20px;\n  border-bottom: 10px solid #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvdmFyaWFibGVzLnNhc3MiLCJzcmMvYXBwL2FwcC1jb21wb25lbnQvYXBwLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL3hlbmlrb3BhL0RvY3VtZW50cy9hbmd1bGFyLXBldC1uZXdzL3NyYy9hcHAvYXBwLWNvbXBvbmVudC9hcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIscUNBQXNEO0FDQzFEOztBRENBLGdCQUFBOztBRUZBLHVCQUFBOztBQUNBLHdCQUFBOztBQUNBO0VBQ0UseUJGQXFCO0VFQ3JCLFdGSVU7RUVIVixlQUFlO0VBQ2YsYUFBYTtBREtmOztBQ0pFO0VBQ0UsaUJBQWlCO0FET3JCOztBQ05FO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QURTakI7O0FDWEc7RUFJRyxrQkFBa0I7QURXeEI7O0FDZkc7RUFNSyxlQUFlO0FEYXZCOztBQ1pLO0VBRUcsYUFBYTtFQUNiLG1CQUFtQjtBRGMzQjs7QUNqQks7RUFLSyxZQUFZO0VBQ1osVUFBVTtBRGdCcEI7O0FDdEJLO0VBUUcsUUFBUTtFQUNSLFVBQVU7RUFDVixtREFBOEQ7QURrQnRFOztBQ2pCSTtFQUNFLGtCQUFrQjtBRG9CeEI7O0FDckJLO0VBR0csZUFBZTtBRHNCdkI7O0FDekJLO0VBS0ssY0FBYztBRHdCeEI7O0FDdkJBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBRDBCckI7O0FDeEJBO0VBQ0UseUJGbkNxQjtFRW9DckIsV0YvQlU7RUVnQ1YsYUFBYTtBRDJCZjs7QUMxQkU7RUFDRSxpQkFBaUI7QUQ2QnJCOztBQzNCQSxpQ0FBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBRDhCbEI7O0FDNUJBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCRm5EVTtFRW9EViwrQ0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFdBQVc7QUQrQmI7O0FDMUNBO0VBYUksZUFBZTtFQUNmLFNBQVM7QURpQ2I7O0FDL0NBO0VBZ0JJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsa0NBQWtDO0FEbUN0Qzs7QUN4REE7RUF1QkksVUFBVTtFQUNWLGtEQUE4QztBRHFDbEQ7O0FDN0RBO0VBMEJJLFVBQVU7RUFDViw4QkZ0RVE7QUM2R1oiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50L2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Tb3VyY2VTYW5zUHJvLVJlZ3VsYXIudHRmJyk7IH1cblxuLyogbWFpbiBjb2xvcnMgKi9cbiRwcmltYXJ5LWNvbG9yOiAjN0IxRkEyO1xuJHByaW1hcnktbGlnaHQtY29sb3I6ICNFMUJFRTc7XG4kYWN0aXZlLWNvbG9yOiAjRTFCRUU3O1xuJGhvdmVyLWNvbG9yOiAjRkZDMTA3O1xuJGdyZXktY29sb3I6ICNCREJEQkQ7XG4kd2hpdGU6ICNmZmY7XG5cbiRmb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Tb3VyY2VTYW5zUHJvLVJlZ3VsYXIudHRmXCIpO1xufVxuXG4vKiBtYWluIGNvbG9ycyAqL1xuLyogbWFpbiBibG9jayBvbiBwYWdlICovXG4vKiBoZWFkZXIgYmxvY2sgc3R5bGVzICovXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdCMUZBMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlcl9fbG9nbyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5oZWFkZXJfX2FjdGlvbnMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlcl9fYWN0aW9ucyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlcl9fYWN0aW9ucyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uaGVhZGVyX19hY3Rpb25zLXNlYXJjaCBmb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlcl9fYWN0aW9ucy1zZWFyY2ggZm9ybSBsYWJlbDpob3ZlciBpbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlcl9fYWN0aW9ucy1zZWFyY2ggZm9ybSBpbnB1dFt0eXBlPSdzZWFyY2gnXSB7XG4gIHdpZHRoOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLCAwLjc5NSwgMCwgMSk7XG59XG5cbi5oZWFkZXJfX2FjdGlvbnMtbG9naW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfX2FjdGlvbnMtbG9naW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXJfX2FjdGlvbnMtbG9naW46aG92ZXIgLnRvb2x0aXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haW4ge1xuICBmbGV4OiAxIDEgMDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QjFGQTI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9vdGVyX19uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi8qIGl0ZW1zIGluIGZvb3RlciAmIGhlYWRlciBib3ggKi9cbi5ib3hfaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIG1pbi13aWR0aDogOTUwcHg7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMzBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbGVmdDogLTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udG9vbHRpcCBoNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udG9vbHRpcDpiZWZvcmUsIC50b29sdGlwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4MHB4O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG9vbHRpcDpiZWZvcmUge1xuICB0b3A6IC0yMXB4O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHJnYmEoMTY4LCAxNjgsIDE2OCwgMC41KTtcbn1cblxuLnRvb2x0aXA6YWZ0ZXIge1xuICB0b3A6IC0yMHB4O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmY7XG59XG4iLCJAaW1wb3J0ICdzcmMvdmFyaWFibGVzJztcblxuLyogbWFpbiBibG9jayBvbiBwYWdlICovXG4vKiBoZWFkZXIgYmxvY2sgc3R5bGVzICovXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9fbG9nbyBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuICAmX19hY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYgPiBkaXYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9IH1cbiAgICAmLXNlYXJjaCBmb3JtIHtcbiAgICAgICYgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmOmhvdmVyICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDE7IH0gfVxuICAgICAgJiBpbnB1dFt0eXBlPSdzZWFyY2gnXSB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjc5NSwgMC4wMDAsIDEuMDAwKTsgfSB9XG4gICAgJi1sb2dpbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmIC50b29sdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9IH0gfSB9XG4ubWFpbiB7XG4gIGZsZXg6IDEgMSAwO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9fbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH0gfVxuXG4vKiBpdGVtcyBpbiBmb290ZXIgJiBoZWFkZXIgYm94ICovXG4uYm94X2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBtaW4td2lkdGg6IDk1MHB4OyB9XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMzBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbGVmdDogLTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICMwMDA7XG4gICYgaDUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7IH1cbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cbiAgJjpiZWZvcmUge1xuICAgIHRvcDogLTIxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCByZ2JhKDE2OCwxNjgsMTY4LC41KTsgfVxuICAmOmFmdGVyIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJHdoaXRlOyB9IH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/app-component/app.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_IAppContainerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/IAppContainerService */ "./src/app/app-component/common/IAppContainerService.ts");
/* harmony import */ var src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/notification/INotification */ "./src/app/core/notification/INotification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppComponent = /** @class */ (function () {
    function AppComponent(appService, notify) {
        this.appService = appService;
        this.notify = notify;
        this.isLogin$ = this.appService.isAdminLogin$;
    }
    AppComponent.prototype.onClickLogin = function () {
        this.appService.onLoginAdmin();
    };
    AppComponent.prototype.onClickLogout = function () {
        this.appService.onLogoutAdmin();
    };
    AppComponent.prototype.onChangeMode = function (checked) {
        this.appService.onChangeAppMode(checked);
        var notifyMessage = 'Режим редактирования ' + (checked ? 'включен' : 'выключен');
        this.notify.openNotification(notifyMessage);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _common_IAppContainerService__WEBPACK_IMPORTED_MODULE_1__["IAppContainerService"] },
        { type: src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_2__["INotification"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.sass */ "./src/app/app-component/app.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_1__["IAppContainerService"],
            src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_2__["INotification"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app-component/app.service.ts":
/*!**********************************************!*\
  !*** ./src/app/app-component/app.service.ts ***!
  \**********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_IAppContainerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/IAppContainerService */ "./src/app/app-component/common/IAppContainerService.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/confirm-modal/confirm-modal.component */ "./src/app/shared/confirm-modal/confirm-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AppService = /** @class */ (function (_super) {
    __extends(AppService, _super);
    function AppService(confirm) {
        var _this = _super.call(this) || this;
        _this.confirm = confirm;
        _this.isAdminLogin$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        _this.isEditMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        return _this;
    }
    AppService.prototype.onLoginAdmin = function () {
        this.isAdminLogin$.next(true);
    };
    AppService.prototype.onLogoutAdmin = function () {
        this.isAdminLogin$.next(false);
    };
    AppService.prototype.onChangeAppMode = function (isEdit) {
        this.isEditMode$.next(isEdit);
    };
    AppService.prototype.openConfirmModal = function (data) {
        return this.confirm.open(_shared_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], { data: data }).afterClosed();
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AppService);
    return AppService;
}(_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_1__["IAppContainerService"]));



/***/ }),

/***/ "./src/app/app-component/common/IAppContainerService.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-component/common/IAppContainerService.ts ***!
  \**************************************************************/
/*! exports provided: IAppContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAppContainerService", function() { return IAppContainerService; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var IAppContainerService = /** @class */ (function () {
    function IAppContainerService() {
    }
    return IAppContainerService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _modules_news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/news/news.component */ "./src/app/modules/news/news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _modules_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
                    }
                ]),
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-component/app.component */ "./src/app/app-component/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _modules_news_news_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/news/news.module */ "./src/app/modules/news/news.module.ts");
/* harmony import */ var _app_component_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-component/common/IAppContainerService */ "./src/app/app-component/common/IAppContainerService.ts");
/* harmony import */ var _app_component_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-component/app.service */ "./src/app/app-component/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _modules_news_news_module__WEBPACK_IMPORTED_MODULE_9__["NewsModule"]
            ],
            providers: [
                { provide: _app_component_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_10__["IAppContainerService"], useClass: _app_component_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] }
            ],
            bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/backend/news/common/INewsBackendService.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/backend/news/common/INewsBackendService.ts ***!
  \*****************************************************************/
/*! exports provided: INewsBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INewsBackendService", function() { return INewsBackendService; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var INewsBackendService = /** @class */ (function () {
    function INewsBackendService() {
    }
    return INewsBackendService;
}());



/***/ }),

/***/ "./src/app/core/backend/news/news-backend.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/backend/news/news-backend.service.ts ***!
  \***********************************************************/
/*! exports provided: NewsBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBackendService", function() { return NewsBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_INewsBackendService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/INewsBackendService */ "./src/app/core/backend/news/common/INewsBackendService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NewsBackendService = /** @class */ (function (_super) {
    __extends(NewsBackendService, _super);
    function NewsBackendService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    NewsBackendService.prototype.getAllNews = function () {
        return this.httpClient.get('../../../assets/news.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.articles; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return [];
        }));
    };
    NewsBackendService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NewsBackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsBackendService);
    return NewsBackendService;
}(_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_1__["INewsBackendService"]));



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _backend_news_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend/news/common/INewsBackendService */ "./src/app/core/backend/news/common/INewsBackendService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _notification_INotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification/INotification */ "./src/app/core/notification/INotification.ts");
/* harmony import */ var _backend_news_news_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/news/news-backend.service */ "./src/app/core/backend/news/news-backend.service.ts");
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.service */ "./src/app/core/notification/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            ],
            providers: [
                { provide: _backend_news_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_2__["INewsBackendService"], useClass: _backend_news_news_backend_service__WEBPACK_IMPORTED_MODULE_6__["NewsBackendService"] },
                { provide: _notification_INotification__WEBPACK_IMPORTED_MODULE_5__["INotification"], useClass: _notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/notification/INotification.ts":
/*!****************************************************!*\
  !*** ./src/app/core/notification/INotification.ts ***!
  \****************************************************/
/*! exports provided: INotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INotification", function() { return INotification; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var INotification = /** @class */ (function () {
    function INotification() {
    }
    return INotification;
}());



/***/ }),

/***/ "./src/app/core/notification/notification.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/notification/notification.service.ts ***!
  \***********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _INotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./INotification */ "./src/app/core/notification/INotification.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NotificationService = /** @class */ (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService(notificationBar) {
        var _this = _super.call(this) || this;
        _this.notificationBar = notificationBar;
        return _this;
    }
    NotificationService.prototype.openNotification = function (message, action) {
        this.notificationBar.open(message, action, {
            duration: 1000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}(_INotification__WEBPACK_IMPORTED_MODULE_1__["INotification"]));



/***/ }),

/***/ "./src/app/modules/news/common/interfaces/INewsListService.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/news/common/interfaces/INewsListService.ts ***!
  \********************************************************************/
/*! exports provided: INewsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INewsListService", function() { return INewsListService; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var INewsListService = /** @class */ (function () {
    function INewsListService() {
    }
    return INewsListService;
}());



/***/ }),

/***/ "./src/app/modules/news/common/interfaces/IWhenGetCountInems.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/news/common/interfaces/IWhenGetCountInems.ts ***!
  \**********************************************************************/
/*! exports provided: IWhenGetCountItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IWhenGetCountItems", function() { return IWhenGetCountItems; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IWhenGetCountItems = /** @class */ (function (_super) {
    __extends(IWhenGetCountItems, _super);
    function IWhenGetCountItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IWhenGetCountItems;
}(rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]));



/***/ }),

/***/ "./src/app/modules/news/common/interfaces/IWhenPublishPageParams.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/news/common/interfaces/IWhenPublishPageParams.ts ***!
  \**************************************************************************/
/*! exports provided: IWhenPublishPageParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IWhenPublishPageParams", function() { return IWhenPublishPageParams; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var IWhenPublishPageParams = /** @class */ (function () {
    function IWhenPublishPageParams() {
    }
    return IWhenPublishPageParams;
}());



/***/ }),

/***/ "./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewsEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEditModalComponent", function() { return NewsEditModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NewsEditModalComponent = /** @class */ (function () {
    //#endregion
    function NewsEditModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //#region public values
        this.newsData = this.data;
        this.isCloseNameError = false;
        this.isCloseAuthorError = false;
    }
    NewsEditModalComponent.prototype.ngOnInit = function () {
    };
    NewsEditModalComponent.prototype.onClose = function () {
        this.dialogRef.close(null);
    };
    NewsEditModalComponent.prototype.onSubmit = function (form) {
        var result = __assign(__assign({}, form), { idArticle: this.newsData.idArticle, datePublication: this.newsData.datePublication });
        this.dialogRef.close(result);
    };
    NewsEditModalComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    NewsEditModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./news-edit-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.html")).default,
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewsEditModalComponent);
    return NewsEditModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/common/pageParser.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/news/common/pageParser.pipe.ts ***!
  \********************************************************/
/*! exports provided: PageParserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageParserPipe", function() { return PageParserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PageParserPipe = /** @class */ (function () {
    function PageParserPipe() {
    }
    PageParserPipe.prototype.transform = function (items, params) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNull"])(items) || Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(params)) {
            return items;
        }
        var firstIndex = (params.offset - 1) * params.count;
        var start = firstIndex > items.length ? 0 : firstIndex;
        var end = Math.max(start + params.count, params.count);
        return items.slice(start, end);
    };
    PageParserPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            'name': 'pageParser'
        })
    ], PageParserPipe);
    return PageParserPipe;
}());



/***/ }),

/***/ "./src/app/modules/news/common/sortNews.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/news/common/sortNews.pipe.ts ***!
  \******************************************************/
/*! exports provided: SortNewsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortNewsPipe", function() { return SortNewsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SortNewsPipe = /** @class */ (function () {
    function SortNewsPipe() {
    }
    SortNewsPipe.prototype.transform = function (items, field, order) {
        var _this = this;
        if (!items || !field || !order) {
            return items;
        }
        return items.sort(function (a, b) {
            var first = a[field];
            var second = b[field];
            if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(first) && !Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(second)) {
                return (order === 'asc')
                    ? _this.getOrderResult(first, second)
                    : _this.getOrderResult(second, first);
            }
        });
    };
    SortNewsPipe.prototype.getOrderResult = function (a, b) {
        if (a === b) {
            return 0;
        }
        return a > b ? -1 : 1;
    };
    SortNewsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            'name': 'sortNews'
        })
    ], SortNewsPipe);
    return SortNewsPipe;
}());



/***/ }),

/***/ "./src/app/modules/news/news-pagination/news-pagination.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/news/news-pagination/news-pagination.component.sass ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'Source Sans Pro';\n  src: url('SourceSansPro-Regular.ttf');\n}\n\n/* main colors */\n\n.news__pagination {\n  display: flex;\n  justify-content: flex-end;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.pagination {\n  display: flex;\n  margin: 0 10px 0 0;\n}\n\n.pagination button {\n  border: none;\n  background: none;\n  font-size: 14px;\n  border-bottom: 1px solid transparent;\n}\n\n.pagination button:hover {\n  border-bottom: 1px solid #7B1FA2;\n  background: none;\n  color: #7B1FA2;\n  cursor: pointer;\n}\n\n.pagination button.is-active {\n  background-color: rgba(225, 190, 231, 0.3);\n}\n\n.pagination__list {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  margin: 0;\n}\n\n.pagination__list li:not(:last-child):after {\n  content: ' | ';\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvdmFyaWFibGVzLnNhc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3cy9uZXdzLXBhZ2luYXRpb24vbmV3cy1wYWdpbmF0aW9uLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL3hlbmlrb3BhL0RvY3VtZW50cy9hbmd1bGFyLXBldC1uZXdzL3NyYy9hcHAvbW9kdWxlcy9uZXdzL25ld3MtcGFnaW5hdGlvbi9uZXdzLXBhZ2luYXRpb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIscUNBQXNEO0FDQzFEOztBRENBLGdCQUFBOztBRUhBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0FETXJCOztBQ0pBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBRE9wQjs7QUNUQTtFQUlJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztBRFN4Qzs7QUNoQkE7RUFTTSxnQ0ZYaUI7RUVZakIsZ0JBQWdCO0VBQ2hCLGNGYmlCO0VFY2pCLGVBQWU7QURXckI7O0FDdkJBO0VBY00sMENBQTBDO0FEYWhEOztBQ1pFO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsU0FBUztBRGViOztBQ25CRztFQU1LLGNBQWM7QURpQnRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXdzL25ld3MtcGFnaW5hdGlvbi9uZXdzLXBhZ2luYXRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvU291cmNlU2Fuc1Byby1SZWd1bGFyLnR0ZicpOyB9XG5cbi8qIG1haW4gY29sb3JzICovXG4kcHJpbWFyeS1jb2xvcjogIzdCMUZBMjtcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRTFCRUU3O1xuJGFjdGl2ZS1jb2xvcjogI0UxQkVFNztcbiRob3Zlci1jb2xvcjogI0ZGQzEwNztcbiRncmV5LWNvbG9yOiAjQkRCREJEO1xuJHdoaXRlOiAjZmZmO1xuXG4kZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvU291cmNlU2Fuc1Byby1SZWd1bGFyLnR0ZlwiKTtcbn1cblxuLyogbWFpbiBjb2xvcnMgKi9cbi5uZXdzX19wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdCMUZBMjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3QjFGQTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2luYXRpb24gYnV0dG9uLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxOTAsIDIzMSwgMC4zKTtcbn1cblxuLnBhZ2luYXRpb25fX2xpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBhZ2luYXRpb25fX2xpc3QgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6ICcgfCAnO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzJztcbi5uZXdzX19wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICYgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxOTAsIDIzMSwgMC4zKTsgfSB9XG4gICZfX2xpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwO1xuICAgICYgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgfCAnOyB9IH0gfVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/news/news-pagination/news-pagination.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/news/news-pagination/news-pagination.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewsPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPaginationComponent", function() { return NewsPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_interfaces_IWhenPublishPageParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/interfaces/IWhenPublishPageParams */ "./src/app/modules/news/common/interfaces/IWhenPublishPageParams.ts");
/* harmony import */ var _common_interfaces_IWhenGetCountInems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/interfaces/IWhenGetCountInems */ "./src/app/modules/news/common/interfaces/IWhenGetCountInems.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NewsPaginationComponent = /** @class */ (function () {
    function NewsPaginationComponent(whenPublishParams, whenGetCountItems) {
        var _this = this;
        this.whenPublishParams = whenPublishParams;
        this.whenGetCountItems = whenGetCountItems;
        this.whenDestroyComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsOnPageCount = [4, 8, 12];
        this.activePage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this.selectedItemsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.itemsOnPageCount[0]);
        this.pages$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.whenGetCountItems, this.selectedItemsCount$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var allCount = _a[0], showdCount = _a[1];
            return allCount / showdCount;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x > 1 ? Math.ceil(x) : 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return Array.from({ length: x }, function (v, i) { return ++i; }); }));
        this.lastPage$ = this.pages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x[x.length - 1]; }));
        this.isLastPage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.activePage$, this.lastPage$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var activePage = _a[0], lastPage = _a[1];
            return activePage === lastPage;
        }));
        this.whenClickNearPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.whenClickLastPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isActivePage$ = function (page) {
            return _this.activePage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x === page; }));
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.selectedItemsCount$,
            this.activePage$,
            this.lastPage$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var count = _a[0], activePage = _a[1], lastPage = _a[2];
            if (activePage > lastPage) {
                _this.activePage$.next(lastPage);
            }
            return { count: count, activePage: activePage };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var count = _a.count, activePage = _a.activePage;
            return ({
                count: count,
                offset: activePage
            });
        }))
            .subscribe(function (x) { return _this.whenPublishParams.publish(x); });
        this.whenClickNearPage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.activePage$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var statePage = _a[0], page = _a[1];
            return statePage === 'prev' ? page - 1 : page + 1;
        }))
            .subscribe(function (x) { return _this.activePage$.next(x); });
        this.whenClickLastPage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestroyComponent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.lastPage$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _ = _a[0], page = _a[1];
            return page;
        }))
            .subscribe(function (x) { return _this.activePage$.next(x); });
    }
    NewsPaginationComponent.prototype.ngOnInit = function () {
    };
    NewsPaginationComponent.prototype.ngOnDestroy = function () {
        this.whenDestroyComponent$.next(null);
        this.whenDestroyComponent$.complete();
    };
    NewsPaginationComponent.prototype.onClickPage = function (page) {
        var activePage = parseInt(page, 10);
        this.activePage$.next(activePage);
    };
    NewsPaginationComponent.prototype.onChangeCount = function (countValue) {
        this.selectedItemsCount$.next(countValue);
    };
    NewsPaginationComponent.prototype.onClickPrevPage = function () {
        this.whenClickNearPage$.next('prev');
    };
    NewsPaginationComponent.prototype.onClickNextPage = function () {
        this.whenClickNearPage$.next('next');
    };
    NewsPaginationComponent.prototype.onClickLastPage = function () {
        this.whenClickLastPage$.next(null);
    };
    NewsPaginationComponent.ctorParameters = function () { return [
        { type: _common_interfaces_IWhenPublishPageParams__WEBPACK_IMPORTED_MODULE_3__["IWhenPublishPageParams"] },
        { type: _common_interfaces_IWhenGetCountInems__WEBPACK_IMPORTED_MODULE_4__["IWhenGetCountItems"] }
    ]; };
    NewsPaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./news-pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-pagination/news-pagination.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news-pagination.component.sass */ "./src/app/modules/news/news-pagination/news-pagination.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_common_interfaces_IWhenPublishPageParams__WEBPACK_IMPORTED_MODULE_3__["IWhenPublishPageParams"],
            _common_interfaces_IWhenGetCountInems__WEBPACK_IMPORTED_MODULE_4__["IWhenGetCountItems"]])
    ], NewsPaginationComponent);
    return NewsPaginationComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/news.component.sass":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'Source Sans Pro';\n  src: url('SourceSansPro-Regular.ttf');\n}\n\n/* main colors */\n\n.news {\n  width: 80%;\n  margin: 16px 0;\n}\n\n.news__filter {\n  display: flex;\n}\n\n.news__filter .show-all {\n  width: 25%;\n}\n\n.news__filter .sort-select {\n  margin-left: auto;\n}\n\n.news__item {\n  border-bottom: 1px solid #E1BEE7;\n  padding: 10px;\n}\n\n.news__item:hover {\n  background-color: rgba(225, 190, 231, 0.3);\n  cursor: pointer;\n}\n\n.news__item-header {\n  display: flex;\n  align-items: baseline;\n}\n\n.news__item-header h3 {\n  margin: 0;\n  padding-right: 5px;\n}\n\n.news__item-header span {\n  margin-left: auto;\n}\n\n.news__item p {\n  margin: 5px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvdmFyaWFibGVzLnNhc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL3hlbmlrb3BhL0RvY3VtZW50cy9hbmd1bGFyLXBldC1uZXdzL3NyYy9hcHAvbW9kdWxlcy9uZXdzL25ld3MuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIscUNBQXNEO0FDQzFEOztBRENBLGdCQUFBOztBRUZBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QURLaEI7O0FDSkU7RUFDRSxhQUFhO0FET2pCOztBQ1JHO0VBR0csVUFBVTtBRFNoQjs7QUNaRztFQUtHLGlCQUFpQjtBRFd2Qjs7QUNWRTtFQUNFLGdDRk55QjtFRU96QixhQUFhO0FEYWpCOztBQ2ZHO0VBSUcsMENBQTBDO0VBQzFDLGVBQWU7QURlckI7O0FDZEk7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FEaUIzQjs7QUNuQks7RUFJRyxTQUFTO0VBQ1Qsa0JBQWtCO0FEbUIxQjs7QUN4Qks7RUFPRyxpQkFBaUI7QURxQnpCOztBQ2xDRztFQWVHLGFBQWE7QUR1Qm5CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXdzL25ld3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvU291cmNlU2Fuc1Byby1SZWd1bGFyLnR0ZicpOyB9XG5cbi8qIG1haW4gY29sb3JzICovXG4kcHJpbWFyeS1jb2xvcjogIzdCMUZBMjtcbiRwcmltYXJ5LWxpZ2h0LWNvbG9yOiAjRTFCRUU3O1xuJGFjdGl2ZS1jb2xvcjogI0UxQkVFNztcbiRob3Zlci1jb2xvcjogI0ZGQzEwNztcbiRncmV5LWNvbG9yOiAjQkRCREJEO1xuJHdoaXRlOiAjZmZmO1xuXG4kZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvU291cmNlU2Fuc1Byby1SZWd1bGFyLnR0ZlwiKTtcbn1cblxuLyogbWFpbiBjb2xvcnMgKi9cbi5uZXdzIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5uZXdzX19maWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmV3c19fZmlsdGVyIC5zaG93LWFsbCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5uZXdzX19maWx0ZXIgLnNvcnQtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uZXdzX19pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUJFRTc7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uZXdzX19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE5MCwgMjMxLCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdzX19pdGVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLm5ld3NfX2l0ZW0taGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5uZXdzX19pdGVtLWhlYWRlciBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uZXdzX19pdGVtIHAge1xuICBtYXJnaW46IDVweCAwO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLm5ld3Mge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDE2cHggMDtcbiAgJl9fZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYgLnNob3ctYWxsIHtcbiAgICAgIHdpZHRoOiAyNSU7IH1cbiAgICAmIC5zb3J0LXNlbGVjdCB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfSB9XG4gICZfX2l0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeS1saWdodC1jb2xvcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE5MCwgMjMxLCAwLjMpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgJi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICYgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuICAgICAgJiBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH0gfVxuICAgICYgcCB7XG4gICAgICBtYXJnaW46IDVweCAwOyB9IH0gfVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/news/news.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/news/news.component.ts ***!
  \************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/interfaces/INewsListService */ "./src/app/modules/news/common/interfaces/INewsListService.ts");
/* harmony import */ var src_app_app_component_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-component/common/IAppContainerService */ "./src/app/app-component/common/IAppContainerService.ts");
/* harmony import */ var src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/notification/INotification */ "./src/app/core/notification/INotification.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsListService, injector, appService, notify) {
        var _this = this;
        this.newsListService = newsListService;
        this.injector = injector;
        this.appService = appService;
        this.notify = notify;
        this.sortList = [
            { title: 'По дате публикации', field: 'datePublication' },
            { title: 'По активности', field: null }
        ].map(function (x) { return ([
            __assign(__assign({}, x), { order: 'asc' }),
            __assign(__assign({}, x), { order: 'desc' })
        ]); })
            .reduce(function (prev, curr) { return __spreadArrays(prev, curr); });
        this.isShowAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.selectedSort$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sortList[0]);
        this.newsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.whenDestoryComponet$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.whenEditNews$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.whenRemoveNews$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filtredNews$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.isShowAll$, this.newsList$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestoryComponet$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var isShowAll = _a[0], list = _a[1];
            return isShowAll ? list : list.filter(function (x) { return x.active; });
        }));
        this.getCountShowNews = function () {
            return _this.filtredNews$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.whenDestoryComponet$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.length; }));
        };
        this.getConfirmData = function (item) {
            return ({
                title: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 " + item.name,
                text: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u2116" + item.idArticle + ".\n      \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\n        - \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 '" + item.name + "'\n        - \u0410\u0432\u0442\u043E\u0440 " + item.author + "\n      "
            });
        };
        this.newsListService.getNews()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (x) { return _this.newsList$.next(x); });
        this.pageParams$ =
            this.newsListService.whenGetPageParams$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestoryComponet$));
        this.isEditMode$ =
            this.appService.isEditMode$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestoryComponet$));
        this.whenEditNews$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.whenDestoryComponet$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (x) { return _this.newsListService.onEditNews(x); }))
            .subscribe(function (x) {
            _this.notify.openNotification('Изменения успешно сохранены');
            _this.newsList$.next(x);
        });
        this.whenRemoveNews$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return ({
            confirmData: _this.getConfirmData(item),
            item: item
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (_a) {
            var confirmData = _a.confirmData, item = _a.item;
            return _this.appService.openConfirmModal(confirmData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (isConfirm) { return isConfirm; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(item));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.newsList$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var item = _a[0], news = _a[1];
            return news.filter(function (x) { return x.idArticle !== item.idArticle; });
        }))
            .subscribe(function (x) {
            _this.notify.openNotification('Изменения успешно сохранены');
            _this.newsList$.next(x);
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.ngAfterViewInit = function () {
        var countElements = this.getCountShowNews();
        this.newsListService.renderPaginaton(this.paginationContainer, this.injector, countElements);
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.whenDestoryComponet$.next(null);
        this.whenDestoryComponet$.complete();
    };
    NewsComponent.prototype.onChangeActivity = function (isActive) {
        this.isShowAll$.next(isActive);
    };
    NewsComponent.prototype.onChangeSort = function (sortValue) {
        this.selectedSort$.next(sortValue);
    };
    NewsComponent.prototype.onClickEdit = function (item) {
        this.whenEditNews$.next(item);
    };
    NewsComponent.prototype.onClickRemove = function (item) {
        this.whenRemoveNews$.next(item);
    };
    NewsComponent.ctorParameters = function () { return [
        { type: _common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_3__["INewsListService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: src_app_app_component_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_4__["IAppContainerService"] },
        { type: src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_5__["INotification"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginationContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], NewsComponent.prototype, "paginationContainer", void 0);
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news.component.sass */ "./src/app/modules/news/news.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_3__["INewsListService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            src_app_app_component_common_IAppContainerService__WEBPACK_IMPORTED_MODULE_4__["IAppContainerService"],
            src_app_core_notification_INotification__WEBPACK_IMPORTED_MODULE_5__["INotification"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/modules/news/news.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.module.ts ***!
  \*********************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _common_sortNews_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/sortNews.pipe */ "./src/app/modules/news/common/sortNews.pipe.ts");
/* harmony import */ var _common_pageParser_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/pageParser.pipe */ "./src/app/modules/news/common/pageParser.pipe.ts");
/* harmony import */ var _common_news_edit_modal_news_edit_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/news-edit-modal/news-edit-modal.component */ "./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/interfaces/INewsListService */ "./src/app/modules/news/common/interfaces/INewsListService.ts");
/* harmony import */ var _news_pagination_news_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-pagination/news-pagination.component */ "./src/app/modules/news/news-pagination/news-pagination.component.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news.service */ "./src/app/modules/news/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"],
                _common_sortNews_pipe__WEBPACK_IMPORTED_MODULE_3__["SortNewsPipe"],
                _common_pageParser_pipe__WEBPACK_IMPORTED_MODULE_4__["PageParserPipe"],
                _common_news_edit_modal_news_edit_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewsEditModalComponent"],
                _news_pagination_news_pagination_component__WEBPACK_IMPORTED_MODULE_9__["NewsPaginationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // RouterModule.forChild([
                //   {
                //     path: '',
                //     component: NewsComponent
                //   }
                // ]),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [
                { provide: _common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_8__["INewsListService"], useClass: _news_service__WEBPACK_IMPORTED_MODULE_10__["NewsService"] }
            ],
            entryComponents: [
                _news_pagination_news_pagination_component__WEBPACK_IMPORTED_MODULE_9__["NewsPaginationComponent"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/modules/news/news.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/news/news.service.ts ***!
  \**********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/interfaces/INewsListService */ "./src/app/modules/news/common/interfaces/INewsListService.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_interfaces_IWhenPublishPageParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/interfaces/IWhenPublishPageParams */ "./src/app/modules/news/common/interfaces/IWhenPublishPageParams.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_core_backend_news_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/backend/news/common/INewsBackendService */ "./src/app/core/backend/news/common/INewsBackendService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_interfaces_IWhenGetCountInems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/interfaces/IWhenGetCountInems */ "./src/app/modules/news/common/interfaces/IWhenGetCountInems.ts");
/* harmony import */ var _news_pagination_news_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-pagination/news-pagination.component */ "./src/app/modules/news/news-pagination/news-pagination.component.ts");
/* harmony import */ var _common_news_edit_modal_news_edit_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/news-edit-modal/news-edit-modal.component */ "./src/app/modules/news/common/news-edit-modal/news-edit-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var NewsService = /** @class */ (function (_super) {
    __extends(NewsService, _super);
    function NewsService(componentFactoryResolver, editModal, newsBackendService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.editModal = editModal;
        _this.newsBackendService = newsBackendService;
        _this.whenGetPageParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.whenPublishPageParams = {
            publish: function (params) { return _this.whenGetPageParams$.next(params); }
        };
        _this.newsList$ = _this.newsBackendService.getAllNews();
        return _this;
    }
    NewsService.prototype.getNews = function () {
        return this.newsList$;
    };
    NewsService.prototype.onEditNews = function (news) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(news).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (x) {
            return _this.openEditNewsModal(x);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (x) { return !Object(util__WEBPACK_IMPORTED_MODULE_7__["isNull"])(x); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.newsList$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var item = _a[0], news = _a[1];
            var indexNews = news.findIndex(function (x) { return x.idArticle === item.idArticle; });
            if (indexNews !== -1) {
                news[indexNews] = item;
            }
            return news;
        }));
    };
    NewsService.prototype.renderPaginaton = function (viewContainer, injector, countElements) {
        if (viewContainer) {
            viewContainer.clear();
        }
        var component = this.componentFactoryResolver.resolveComponentFactory(_news_pagination_news_pagination_component__WEBPACK_IMPORTED_MODULE_9__["NewsPaginationComponent"]);
        var options = {
            providers: [
                { provide: _common_interfaces_IWhenPublishPageParams__WEBPACK_IMPORTED_MODULE_3__["IWhenPublishPageParams"], useValue: this.whenPublishPageParams },
                { provide: _common_interfaces_IWhenGetCountInems__WEBPACK_IMPORTED_MODULE_8__["IWhenGetCountItems"], useValue: countElements }
            ],
            parent: injector
        };
        var newInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create(options);
        var container = viewContainer.createComponent(component, 0, newInjector);
        container.changeDetectorRef.detectChanges();
    };
    NewsService.prototype.openEditNewsModal = function (item) {
        return this.editModal.open(_common_news_edit_modal_news_edit_modal_component__WEBPACK_IMPORTED_MODULE_10__["NewsEditModalComponent"], { data: item }).afterClosed();
    };
    NewsService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_core_backend_news_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_5__["INewsBackendService"] }
    ]; };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_core_backend_news_common_INewsBackendService__WEBPACK_IMPORTED_MODULE_5__["INewsBackendService"]])
    ], NewsService);
    return NewsService;
}(_common_interfaces_INewsListService__WEBPACK_IMPORTED_MODULE_1__["INewsListService"]));



/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-text {\n  white-space: pre-line;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvYXBwL3NoYXJlZC9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUNDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgfVxuXG4iLCIuY29uZmlybS10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.confirmData = this.data;
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.onClickConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmModalComponent.prototype.onClickDismiss = function () {
        this.dialogRef.close(false);
    };
    ConfirmModalComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-modal/confirm-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./confirm-modal.component.sass */ "./src/app/shared/confirm-modal/confirm-modal.component.sass")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _test_component_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-component/test.component */ "./src/app/shared/test-component/test.component.ts");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "./src/app/shared/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switcher/switcher.component */ "./src/app/shared/switcher/switcher.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__["SwitcherComponent"],
                _test_component_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"],
                _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"]
            ],
            entryComponents: [
                _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"]
            ],
            exports: [
                _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__["SwitcherComponent"],
                _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/switcher/switcher.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: 'Source Sans Pro';\n  src: url('SourceSansPro-Regular.ttf');\n}\n\n/* main colors */\n\n.switcher {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  padding-bottom: 3px;\n}\n\n.switcher label {\n  margin-left: auto;\n}\n\n.switcher__box {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n.switcher__box input {\n  display: none;\n}\n\n.switcher__box input:checked + .slider {\n  background-color: #7B1FA2;\n}\n\n.switcher__box input:checked + .slider:before {\n  transform: translateX(18px);\n}\n\n.switcher__box .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #BDBDBD;\n  transition: .4s;\n  border-radius: 20px;\n}\n\n.switcher__box .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  top: 2px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvdmFyaWFibGVzLnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9zd2l0Y2hlci9zd2l0Y2hlci5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy94ZW5pa29wYS9Eb2N1bWVudHMvYW5ndWxhci1wZXQtbmV3cy9zcmMvYXBwL3NoYXJlZC9zd2l0Y2hlci9zd2l0Y2hlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QjtFQUM5QixxQ0FBc0Q7QUNDMUQ7O0FEQ0EsZ0JBQUE7O0FFRkE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QURLckI7O0FDVEE7RUFNSSxpQkFBaUI7QURPckI7O0FDTkU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FEU2hCOztBQ2JHO0VBTUcsYUFBYTtBRFduQjs7QUNqQkc7RUFRSyx5QkZaZTtBQ3lCdkI7O0FDckJHO0VBWUssMkJBQTJCO0FEZW5DOztBQzNCRztFQWNHLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHlCRnBCYztFRXNCZCxlQUFlO0VBQ2YsbUJBQW1CO0FEaUJ6Qjs7QUN4Q0c7RUF5Qkssa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBRXZCLGVBQWU7RUFDZixrQkFBa0I7QURtQjFCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N3aXRjaGVyL3N3aXRjaGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nO1xuICAgIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL1NvdXJjZVNhbnNQcm8tUmVndWxhci50dGYnKTsgfVxuXG4vKiBtYWluIGNvbG9ycyAqL1xuJHByaW1hcnktY29sb3I6ICM3QjFGQTI7XG4kcHJpbWFyeS1saWdodC1jb2xvcjogI0UxQkVFNztcbiRhY3RpdmUtY29sb3I6ICNFMUJFRTc7XG4kaG92ZXItY29sb3I6ICNGRkMxMDc7XG4kZ3JleS1jb2xvcjogI0JEQkRCRDtcbiR3aGl0ZTogI2ZmZjtcblxuJGZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL1NvdXJjZVNhbnNQcm8tUmVndWxhci50dGZcIik7XG59XG5cbi8qIG1haW4gY29sb3JzICovXG4uc3dpdGNoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5zd2l0Y2hlciBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3dpdGNoZXJfX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc3dpdGNoZXJfX2JveCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zd2l0Y2hlcl9fYm94IGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdCMUZBMjtcbn1cblxuLnN3aXRjaGVyX19ib3ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcbn1cblxuLnN3aXRjaGVyX19ib3ggLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zd2l0Y2hlcl9fYm94IC5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcyc7XG5cbi5zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgJiBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbiAgJl9fYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAmIGlucHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAmOmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7IH1cbiAgICAgICY6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTsgfSB9XG4gICAgJiAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWNvbG9yO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH0gfSB9IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/switcher/switcher.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/*! exports provided: SwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return SwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SwitcherComponent = /** @class */ (function () {
    //#endregion
    function SwitcherComponent() {
        this.whenSwitchValue$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //#endregion
        //#region private vars
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    SwitcherComponent_1 = SwitcherComponent;
    Object.defineProperty(SwitcherComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    SwitcherComponent.prototype.ngOnInit = function () {
    };
    SwitcherComponent.prototype.onChangeValue = function (checked) {
        this.whenSwitchValue$.emit(checked);
        this.onTouchedCallback();
    };
    //#region default value accessor methods
    SwitcherComponent.prototype.writeValue = function (value) {
        if (value !== this.value) {
            this.value = value;
        }
    };
    SwitcherComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SwitcherComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    var SwitcherComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitcherComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SwitcherComponent.prototype, "innerValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SwitcherComponent.prototype, "whenSwitchValue$", void 0);
    SwitcherComponent = SwitcherComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-switcher',
            template: __importDefault(__webpack_require__(/*! raw-loader!./switcher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/switcher/switcher.component.html")).default,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SwitcherComponent_1; }),
                    multi: true
                },
            ],
            styles: [__importDefault(__webpack_require__(/*! ./switcher.component.sass */ "./src/app/shared/switcher/switcher.component.sass")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SwitcherComponent);
    return SwitcherComponent;
}());



/***/ }),

/***/ "./src/app/shared/test-component/test.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/test-component/test.component.ts ***!
  \*********************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TestComponent = /** @class */ (function () {
    function TestComponent(injector) {
        this.injector = injector;
    }
    TestComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ref', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], TestComponent.prototype, "viewContainerRef", void 0);
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<div #ref></div>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TestComponent);
    return TestComponent;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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

module.exports = __webpack_require__(/*! /Users/xenikopa/Documents/angular-pet-news/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map