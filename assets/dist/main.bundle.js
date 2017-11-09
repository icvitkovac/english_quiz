webpackJsonp(["main"],{

/***/ "../../../../../assets/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; ***REMOVED***
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../assets/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../assets/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"one-third column\">\n    <h5>Edit or delete words that you added</h5>\n    <ul class=\"words\">\n      <form [formGroup]=\"searchForm\"><input formControlName=\"searchField\" placeholder=\"Start typing the word\"></form>\n      <li *ngFor=\"let word of words\" (click)=\"onSelect(word)\">\n        <span [myHighlight] class=\"badge\">{{word.value}}</span>\n        <button class=\"delete-button\" (click)=\"onDelete(word, $event)\">Delete</button>\n      </li>\n    </ul>\n\n    <word-update [word]=\"selectedWord\"></word-update>\n\n  </div>\n\n  <div class=\"two-thirds column\">\n    <word-add></word-add>\n  </div>\n</div>\n\n<div class=\"row\">\n  <settings></settings>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_update_word_update_component__ = __webpack_require__("../../../../../assets/app/admin/word-update/word-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__word_add_word_add_component__ = __webpack_require__("../../../../../assets/app/admin/word-add/word-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("../../../../../assets/app/admin/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__ = __webpack_require__("../../../../../assets/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***










var AdminComponent = (function () {
    function AdminComponent(_wordService, _notificationService) {
        var _this = this;
        this._wordService = _wordService;
        this._notificationService = _notificationService;
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            searchField: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
    ***REMOVED***);
        this.searchForm.get('searchField').valueChanges
            .debounceTime(400)
            .mergeMap(function (term) { return _this._wordService.search(term); })
            .subscribe(function (result) {
            _this.words = result;
    ***REMOVED***);
***REMOVED***
    AdminComponent.prototype.onSelect = function (word) {
        this.selectedWord = word;
***REMOVED***;
    AdminComponent.prototype.onDelete = function (word, event) {
        var _this = this;
        event.stopPropagation();
        this._wordService
            .destroy(word)
            .subscribe(function () {
            _this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
    ***REMOVED***);
***REMOVED***;
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-component',
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_3__word_update_word_update_component__["a" /* WordUpdateComponent */], __WEBPACK_IMPORTED_MODULE_4__word_add_word_add_component__["a" /* WordAddComponent */], __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__["a" /* NotificationComponent */]],
            template: __webpack_require__("../../../../../assets/app/admin/admin.component.html")
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */],
            __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__["a" /* NotificationService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/admin/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../assets/app/admin/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!isLanguageSet && languages.length > 0\">\n  \n    <h3>Pick a language</h3>\n    <select class=\"form-control\" [(ngModel)]=\"selectedWorkout\" (ngModelChange)=\"updateUser($event)\">\n      <option *ngFor=\"let language of languages\" value=\"{{language.value}}\">{{language.name}}</option>\n  </select>\n  </div>\n  \n  <div *ngIf=\"settings\">\n      <ul>\n          <label for=\"questionsNumber\">Number of questions in the game - valid when in practice mode</label>\n          <li [class.disabled]=\"!settings.practiceMode\">Number of questions <input [disabled]=\"!settings.practiceMode\" id=\"questionsNumber\" [(ngModel)]=\"settings.questionsNumber\"\n              /></li>\n  \n          <label for=\"practiceMode\">When selected, enables open ended game, with your own words only</label>\n          <li>Practice mode <input id=\"practiceMode\" type=\"checkbox\" [(ngModel)]=\"settings.practiceMode\" /></li>\n          <button class=\"update-button\" (click)=\"onSave(settings)\">Save</button>\n  \n      </ul>\n  </div>\n  \n  <notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../assets/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../assets/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***




var SettingsComponent = (function () {
    function SettingsComponent(_settingsService, _notificationService, _userService) {
        this._settingsService = _settingsService;
        this._notificationService = _notificationService;
        this._userService = _userService;
        this.languages = [];
        this.isLanguageSet = false;
***REMOVED***
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLanguageSet = window['Globals'].locale !== 'null' && !window['Globals'].locale.startsWith('en');
        if (!this.isLanguageSet) {
            this._settingsService.languages()
                .subscribe(function (languages) {
                for (var key in languages) {
                    if (languages.hasOwnProperty(key)) {
                        _this.languages.push({ name: languages[key], value: key });
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***
        this._settingsService.get()
            .subscribe(function (settings) {
            _this.settings = settings;
    ***REMOVED***);
***REMOVED***;
    SettingsComponent.prototype.onSave = function (settings) {
        var _this = this;
        this._settingsService
            .update(settings)
            .subscribe(function (serviceSettings) {
            _this.settings = serviceSettings;
            _this._notificationService.show({ type: 'success', message: 'Settings saved.', hasCloseButton: true, autoClose: true });
    ***REMOVED***);
***REMOVED***;
    SettingsComponent.prototype.updateUser = function (languageSelection) {
        var _this = this;
        this._userService
            .setLocale(languageSelection)
            .subscribe(function (userData) {
            _this.isLanguageSet = true;
            window['Globals'].locale = userData.locale;
            _this._notificationService.show({
                type: 'success',
                message: 'Language set, thank you very much!',
                hasCloseButton: true,
                autoClose: true
        ***REMOVED***);
    ***REMOVED***);
***REMOVED***;
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'settings',
            template: __webpack_require__("../../../../../assets/app/admin/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../assets/app/admin/settings/settings.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]]
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/admin/word-add/word-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Add new word</h5>\n<form (ngSubmit)=\"onSubmit()\" #wordForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <label for=\"englishTem\">English term</label>\n      <input type=\"text\" id=\"englishTem\" required [(ngModel)]=\"word.value\" name=\"wordValue\">\n    </div>\n\n    <div class=\"one-third column\">\n      <label for=\"correctAnswer\">Correct answer</label>\n      <input type=\"text\" id=\"correctAnswer\" required [(ngModel)]=\"word.translations[0]\" name=\"word.trasnlation\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <label for=\"falseAnswers\">False answers</label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <input type=\"text\" id=\"falseAnswers\" required [(ngModel)]=\"word.translations[1]\" name=\"falseAnswer1\">\n    </div>\n\n    <div class=\"three columns\">\n      <input type=\"text\" required [(ngModel)]=\"word.translations[2]\" name=\"falseAnswer2\">\n    </div>\n\n    <div class=\"three columns\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"word.translations[3]\" name=\"falseAnswer3\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!wordForm.form.valid\">Add word</button>\n    </div>\n  </div>\n\n</form>\n\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n<div [hidden]=\"!submitted\">\n  <h4>Newly added</h4>\n  <div class=\"row\">\n    <div class=\"col-xs-9  pull-left\">{{ word.value }}</div>\n    <ul>\n      <li *ngFor=\"let t of word.translations\">{{t}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n<notification></notification>\n\n"

/***/ }),

/***/ "../../../../../assets/app/admin/word-add/word-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_word__ = __webpack_require__("../../../../../assets/app/models/word.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__ = __webpack_require__("../../../../../assets/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var WordAddComponent = (function () {
    function WordAddComponent(_wordService, _notificationService) {
        this._wordService = _wordService;
        this._notificationService = _notificationService;
        this.submitted = false;
        this.word = new __WEBPACK_IMPORTED_MODULE_2__models_word__["a" /* Word */](0, '', false, []);
        this.errorMessage = false;
***REMOVED***
    WordAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._wordService
            .add(this.word)
            .subscribe(function () {
            _this.submitted = true;
            _this._notificationService.show({ type: 'success', message: 'Word successfully added.', autoClose: true });
    ***REMOVED***, function (err) {
            _this._notificationService.show({ type: 'error', message: "There has been an error: " + err + ".", hasCloseButton: true });
    ***REMOVED***);
***REMOVED***;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordAddComponent.prototype, "submitted", void 0);
    WordAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'word-add',
            template: __webpack_require__("../../../../../assets/app/admin/word-add/word-add.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]]
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */]])
    ], WordAddComponent);
    return WordAddComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/admin/word-update/word-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"word\">\n  <h5>{{word.value}} details!</h5>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"word.value\" placeholder=\"name\" />\n  </div>\n\n  <ul>\n    <li *ngFor=\"let t of word.translations\">\n      <input [(ngModel)]=\"t.value\" />\n    </li>\n  </ul>\n\n  <button class=\"update-button\" (click)=\"onSave(word)\">Save</button>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/word-update/word-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_word__ = __webpack_require__("../../../../../assets/app/models/word.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__ = __webpack_require__("../../../../../assets/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var WordUpdateComponent = (function () {
    function WordUpdateComponent(_wordService, _notificationService) {
        this._wordService = _wordService;
        this._notificationService = _notificationService;
***REMOVED***
    WordUpdateComponent.prototype.onSave = function (word) {
        var _this = this;
        this._wordService
            .update(word)
            .subscribe(function (updatedWord) {
            _this.word = updatedWord;
            _this._notificationService.show({ type: 'success', message: 'Word successfully updated.', autoClose: true });
    ***REMOVED***);
***REMOVED***;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */])
    ], WordUpdateComponent.prototype, "word", void 0);
    WordUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'word-update',
            template: __webpack_require__("../../../../../assets/app/admin/word-update/word-update.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]],
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */]])
    ], WordUpdateComponent);
    return WordUpdateComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../assets/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../assets/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stats_stats_component__ = __webpack_require__("../../../../../assets/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_picker_game_picker_component__ = __webpack_require__("../../../../../assets/app/game-picker/game-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__word_longest_word_longest_component__ = __webpack_require__("../../../../../assets/app/word-longest/word-longest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***







var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pick'
***REMOVED***,
    {
        path: 'administration',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]
***REMOVED***,
    {
        path: 'stats',
        component: __WEBPACK_IMPORTED_MODULE_4__stats_stats_component__["a" /* StatsComponent */]
***REMOVED***,
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */]
***REMOVED***,
    {
        path: 'pick',
        component: __WEBPACK_IMPORTED_MODULE_5__game_picker_game_picker_component__["a" /* GamePickerComponent */]
***REMOVED***,
    {
        path: 'longest-word',
        component: __WEBPACK_IMPORTED_MODULE_6__word_longest_word_longest_component__["a" /* WordLongestComponent */]
***REMOVED***,
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
***REMOVED***
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
    ***REMOVED***)
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../assets/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../assets/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n  <div class=\"nine columns\">\n    <a [routerLink]=\"['/pick']\">Game picker</a>\n    <a [routerLink]=\"['/main']\">Quiz</a>\n    <a [routerLink]=\"['/administration']\">Admin</a>\n    <a [routerLink]=\"['/stats']\">Stats</a>\n  </div>\n  <div class=\"three columns\">\n    <span>{{name}}</span>\n    <a href=\"/logout\">Logout</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"twelve columns\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../assets/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

var AppComponent = (function () {
    function AppComponent() {
        try {
            this.name = window['Globals'].name;
    ***REMOVED***
        catch (e) {
            this.name = 'Unknown';
    ***REMOVED***
***REMOVED***
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-english-quiz',
            template: __webpack_require__("../../../../../assets/app/app.component.html"),
            styles: [__webpack_require__("../../../../../assets/app/app.component.css")]
    ***REMOVED***),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../assets/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../assets/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../assets/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__("../../../../../assets/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stats_stats_component__ = __webpack_require__("../../../../../assets/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_picker_game_picker_component__ = __webpack_require__("../../../../../assets/app/game-picker/game-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__word_longest_word_longest_component__ = __webpack_require__("../../../../../assets/app/word-longest/word-longest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_settings_settings_component__ = __webpack_require__("../../../../../assets/app/admin/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_word_add_word_add_component__ = __webpack_require__("../../../../../assets/app/admin/word-add/word-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_word_update_word_update_component__ = __webpack_require__("../../../../../assets/app/admin/word-update/word-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_highlight_directive__ = __webpack_require__("../../../../../assets/app/directives/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__ = __webpack_require__("../../../../../assets/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__word_display_word_display_component__ = __webpack_require__("../../../../../assets/app/word-display/word-display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***




















var AppModule = (function () {
    function AppModule() {
***REMOVED***
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_word_add_word_add_component__["a" /* WordAddComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_word_update_word_update_component__["a" /* WordUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_11__game_picker_game_picker_component__["a" /* GamePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_17__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__word_display_word_display_component__["a" /* WordDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__word_longest_word_longest_component__["a" /* WordLongestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    ***REMOVED***)
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../assets/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this._defaultColor = '#0FA0CE';
        this.el = el.nativeElement;
***REMOVED***
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || this._defaultColor);
***REMOVED***;
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
***REMOVED***;
    HighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
***REMOVED***;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('myHighlight'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "highlightColor", void 0);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myHighlight]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
        ***REMOVED***
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "../../../../../assets/app/game-picker/game-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"two columns\">&nbsp;</div>\n  <div class=\"four columns\">\n      <div class=\"game-link\" [routerLink]=\"['/main']\">\n          <span>Play quiz</span>\n      </div>\n  </div>\n  <div class=\"four columns\">\n       <div class=\"game-link\" [routerLink]=\"['/longest-word']\">\n          <span>Longest word</span>\n      </div>\n  </div>\n  <div class=\"two columns\">&nbsp;</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"two columns\">&nbsp;</div>\n  <div class=\"four columns\">\n      <div class=\"game-link\">\n          <span>CHILD WORDS</span>\n      </div>\n  </div>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/game-picker/game-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_init_service__ = __webpack_require__("../../../../../assets/app/services/init.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



// import * as notificationCodes from '../constants/constants';
var GamePickerComponent = (function () {
    function GamePickerComponent(_notificationService, _initService) {
        this._notificationService = _notificationService;
        this._initService = _initService;
        this.locale = window['Globals'].locale;
***REMOVED***
    GamePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.locale === 'null' || this.locale.startsWith('en')) {
            this._notificationService.show({ type: 'warn', message: 'Please set desired language in order to play!' });
    ***REMOVED***
        this._initService.get()
            .subscribe(function (data) {
            data.forEach(function (element) {
                if (element.reportedWord) {
                    _this._notificationService.show({
                        type: 'warn', message: "Word " + element.reportedWord.value + " has\n                         been reported as inaccurate by other users, please review its translations", autoClose: true
                ***REMOVED***);
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***, function (err) {
            _this._notificationService.show({ type: 'error', message: "There has been an error: " + err + ".", hasCloseButton: true });
    ***REMOVED***);
***REMOVED***;
    GamePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'selector',
            providers: [__WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_init_service__["a" /* InitService */]],
            template: __webpack_require__("../../../../../assets/app/game-picker/game-picker.component.html")
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_init_service__["a" /* InitService */]])
    ], GamePickerComponent);
    return GamePickerComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <p> There are total of {{wordCount}} words in the database.</p>\n</div>\n\n<div class=\"row\">\n  <button [disabled]=\"buttonState()\" (click)=\"startGame()\" *ngIf=\"!isStarted\">START</button>\n  <button (click)=\"endGame()\" *ngIf=\"isStarted\">END</button>\n</div>\n\n<div class=\"row\">\n  <random-word (onGameOver)=\"onGameOver($event)\" [word]=\"guessWord\"></random-word>\n</div>\n\n<div class=\"row\">\n  <!-- <div *ngIf=\"settings\">\n    {{settings.questionsNumber}} questions in the game.\n  </div> -->\n</div>\n\n\n<div *ngIf=\"correctAnswer\">\n  <span class=\"row\">Correct answer: {{correctAnswer}}</span>\n  <button class=\"row button button-primary\" (click)=reportTranslation()>Report translation</button>\n</div>"

/***/ }),

/***/ "../../../../../assets/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("../../../../../assets/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



var MainComponent = (function () {
    function MainComponent(_wordService, _gameService) {
        this._wordService = _wordService;
        this._gameService = _gameService;
        this.wordCount = 0;
        this.isStarted = false;
        this.points = 0;
        this.correctAnswer = null;
***REMOVED***
    MainComponent.prototype.startGame = function (type) {
        var _this = this;
        if (type === void 0) { type = 'quiz'; }
        this._gameService.on(type)
            .subscribe(function (game) {
            /*GAME STARTED*/
            _this.isStarted = true;
            sessionStorage.setItem('points', '0');
            sessionStorage.setItem('isStarted', 'true');
            // get random word when game starts
            _this._gameService.nextWord()
                .subscribe(function (guessWord) {
                _this.guessWord = guessWord;
                sessionStorage.setItem('guessWord', JSON.stringify(guessWord));
                sessionStorage.setItem('points', JSON.stringify(_this.points));
        ***REMOVED***);
    ***REMOVED***, function (err) { return console.log(err); });
***REMOVED***;
    MainComponent.prototype.endGame = function () {
        var _this = this;
        this._gameService.over()
            .subscribe(function (gameData) {
            // clear word on game over
            _this.onGameOver(gameData.correctAnswer);
    ***REMOVED***, function (err) { return console.log(err); });
***REMOVED***;
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gameService.status()
            .subscribe(function (game) {
            _this.isStarted = game.isStarted;
            sessionStorage.setItem('isStarted', game.isStarted);
            if (_this.isStarted) {
                _this.guessWord = JSON.parse(sessionStorage.getItem('guessWord'));
                _this.points = JSON.parse(sessionStorage.getItem('points'));
        ***REMOVED***
    ***REMOVED***);
        this._wordService.count()
            .subscribe(function (result) {
            _this.wordCount = result.count;
    ***REMOVED***);
***REMOVED***;
    MainComponent.prototype.buttonState = function () {
        return this.wordCount === 0;
***REMOVED***;
    MainComponent.prototype.onGameOver = function (correctAnswer) {
        this.isStarted = false;
        this.guessWord = null;
        this.correctAnswer = correctAnswer;
        sessionStorage.clear();
***REMOVED***;
    MainComponent.prototype.reportTranslation = function () {
        this._gameService.report(this.correctAnswer)
            .subscribe(function (result) { return alert('Reported! Thank you.'); }, function (err) { return console.log(err); });
***REMOVED***;
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-component',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]],
            template: __webpack_require__("../../../../../assets/app/main/main.component.html")
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/models/word.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Word; });
var Word = (function () {
    function Word(id, value, isHard, translations) {
        this.id = id;
        this.value = value;
        this.isHard = isHard;
        this.translations = translations;
***REMOVED***
    return Word;
}());



/***/ }),

/***/ "../../../../../assets/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification\">\n  <div class=\"{{ note.type }}\" *ngFor=\"let note of _notifications\">\n          <button class=\"close\" *ngIf=\"note.hasCloseButton\" (click)=\"hide(note)\">x</button>\n      {{ note.message }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../assets/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***


var NotificationComponent = (function () {
    function NotificationComponent(_notificationService) {
        var _this = this;
        this._notificationService = _notificationService;
        this._notifications = new Set();
        _notificationService.noteAdded.subscribe(function (note) {
            _this._notifications.add(note);
            if (note.autoClose) {
                setTimeout(function () { _this.hide.bind(_this)(note); }, 5000);
        ***REMOVED***
    ***REMOVED***);
***REMOVED***
    NotificationComponent.prototype.hide = function (note) {
        if (this._notifications.has(note)) {
            this._notifications.delete(note);
    ***REMOVED***
***REMOVED***;
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notification',
            template: __webpack_require__("../../../../../assets/app/notification/notification.component.html")
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/notification/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***


var NotificationService = (function () {
    function NotificationService() {
        this._notifications = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.noteAdded = this._notifications.asObservable();
***REMOVED***
    NotificationService.prototype.show = function (notification) {
        this._notifications.next(notification);
***REMOVED***;
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../assets/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.baseUrl = 'game/';
***REMOVED***
    GameService.prototype.on = function (type) {
        return this.http
            .post(this.baseUrl + "on", { type: type })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.over = function () {
        return this.http
            .get(this.baseUrl + "over")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.nextWord = function () {
        return this.http
            .get(this.baseUrl + "next")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.checkAnswer = function (pickedWord) {
        return this.http
            .get(this.baseUrl + "check/" + pickedWord.id)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.checkExisting = function (enteredWord) {
        return this.http
            .get(this.baseUrl + "check/" + enteredWord)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.status = function () {
        return this.http
            .get(this.baseUrl + "status")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.report = function (translation) {
        return this.http
            .post(this.baseUrl + "report", { translation: translation })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.highScores = function () {
        return this.http
            .get(this.baseUrl + "highscores")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.history = function () {
        return this.http
            .get(this.baseUrl + "history")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.breakdown = function (id) {
        return this.http
            .get(this.baseUrl + "breakdown/?gameId=" + id)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    GameService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        var body = res.json();
        return body || {***REMOVED***
***REMOVED***;
    GameService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
***REMOVED***;
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../assets/app/services/init.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var InitService = (function () {
    function InitService(http) {
        this.http = http;
        this.baseUrl = 'init/';
***REMOVED***
    InitService.prototype.get = function () {
        return this.http
            .get(this.baseUrl + "get")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    InitService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        var body = res.json();
        return body || {***REMOVED***
***REMOVED***;
    InitService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
***REMOVED***;
    InitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], InitService);
    return InitService;
}());



/***/ }),

/***/ "../../../../../assets/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
        this.baseUrl = '/settings';
***REMOVED***
    SettingsService.prototype.get = function () {
        return this.http
            .get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    // todo impure api update call, think about refactoring
    SettingsService.prototype.update = function (data) {
        var reqObj = JSON.stringify(data);
        return this.http
            .post(this.baseUrl + '/handle', reqObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    SettingsService.prototype.languages = function () {
        return this.http
            .get('../json/languageMapping.json')
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    SettingsService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        var body = res.json();
        return body || {***REMOVED***
***REMOVED***;
    SettingsService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
***REMOVED***;
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../assets/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'user/';
***REMOVED***
    UserService.prototype.update = function (updateObj) {
        return this.http
            .put(this.baseUrl + "update", updateObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    UserService.prototype.setLocale = function (locale) {
        return this.http
            .put(this.baseUrl + "setLocale", { locale: locale })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    UserService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        var body = res.json();
        return body || {***REMOVED***
***REMOVED***;
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
***REMOVED***;
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../assets/app/services/word.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***





var WordService = (function () {
    function WordService(http) {
        this.http = http;
        this.baseUrl = 'word/';
***REMOVED***
    WordService.prototype.search = function (value) {
        return this.http
            .get(this.baseUrl + "search?value=" + value)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.count = function () {
        return this.http
            .get(this.baseUrl + "count")
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.add = function (data) {
        var reqObj = JSON.stringify(data);
        return this.http
            .post(this.baseUrl + "create", reqObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.destroy = function (data) {
        return this.http
            .delete(this.baseUrl + data.id)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.update = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        var url = "" + this.baseUrl + data.id;
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(url, JSON.stringify(data), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.checkAnswer = function (pickedWord) {
        return this.http
            .get("" + this.baseUrl + pickedWord.term + "/translations/" + pickedWord.id)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***;
    WordService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        var body = res.json();
        return body || {***REMOVED***
***REMOVED***;
    WordService.prototype.handleError = function (error) {
        error = error.json();
        var errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
***REMOVED***;
    WordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "../../../../../assets/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"one-half column\">\n    <h5>Your top scores:</h5>\n\n\n    <table>\n      <thead>\n      <th>Points</th>\n      <th>Date</th>\n      </thead>\n\n      <tbody>\n      <tr [myHighlight] *ngFor=\"let h of history\" (click)=\"onSelect(h)\">\n        <td>{{h.gamePoints}}</td>\n        <td>{{h.createdAt | date:\"dd/MM/yyyy\"}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <div [hidden]=\"!gameSelected\">\n      <table>\n        <thead>\n        <th>Word</th>\n        <th>Correct answer</th>\n        </thead>\n\n        <tbody>\n        <tr [class.correct]=\"b.correct\" [class.incorrect]=\"!b.correct\" *ngFor=\"let b of breakdown\">\n          <td>{{b.questionId.value}}</td>\n          <td>{{b.correct}}</td>\n        </tr>\n        </tbody>\n\n\n      </table>\n    </div>\n\n  </div>\n\n  <div class=\"one-half column\">\n\n    <h5>High scores:</h5>\n\n\n    <table>\n      <thead>\n      <th>Points</th>\n      <th>Contender</th>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let hs of highScores\">\n        <td>{{hs.gamePoints}}</td>\n        <td>{{hs.contenderId.name}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../assets/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../assets/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***


var StatsComponent = (function () {
    function StatsComponent(_gameService) {
        this._gameService = _gameService;
        this.history = [];
        this.breakdown = [];
        this.highScores = [];
***REMOVED***
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gameService
            .history()
            .subscribe(function (history) {
            _this.history = history;
    ***REMOVED***);
        this._gameService
            .highScores()
            .subscribe(function (highScores) {
            _this.highScores = highScores;
    ***REMOVED***);
***REMOVED***;
    StatsComponent.prototype.onSelect = function (game) {
        var _this = this;
        this._gameService
            .breakdown(game.id)
            .subscribe(function (breakdown) {
            _this.breakdown = breakdown;
            _this.gameSelected = true;
    ***REMOVED***);
***REMOVED***;
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stats-component',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]],
            template: __webpack_require__("../../../../../assets/app/stats/stats.component.html")
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/word-display/word-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"two columns\">\n    <div *ngIf=\"word\">\n      <h2>{{word.value}}</h2>\n      <ul>\n        <li [myHighlight] *ngFor=\"let t of word.translations\" [class.selected]=\"word === selectedWord\"\n            (click)=\"onSelect(t)\">{{t.value}}\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n<p>{{points}}</p>"

/***/ }),

/***/ "../../../../../assets/app/word-display/word-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_word__ = __webpack_require__("../../../../../assets/app/models/word.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("../../../../../assets/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



var WordDisplayComponent = (function () {
    function WordDisplayComponent(_gameService) {
        this._gameService = _gameService;
        this.onGameOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
***REMOVED***
    WordDisplayComponent.prototype.onSelect = function (pickedWord) {
        var _this = this;
        this._gameService.checkAnswer(pickedWord)
            .subscribe(function (data) {
            _this.points = data.points;
            sessionStorage.setItem('points', data.points);
            if (data.isAnswer) {
                _this.word = data;
                sessionStorage.setItem('guessWord', JSON.stringify(data));
        ***REMOVED***
            if (data.isStarted === false) {
                _this.onGameOver.emit(data.correctAnswer);
        ***REMOVED***
    ***REMOVED***);
***REMOVED***;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */])
    ], WordDisplayComponent.prototype, "word", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], WordDisplayComponent.prototype, "onGameOver", void 0);
    WordDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'random-word',
            template: __webpack_require__("../../../../../assets/app/word-display/word-display.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]]
    ***REMOVED***),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]])
    ], WordDisplayComponent);
    return WordDisplayComponent;
}());



/***/ }),

/***/ "../../../../../assets/app/word-longest/word-longest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../assets/app/word-longest/word-longest.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Hey man</p>"

/***/ }),

/***/ "../../../../../assets/app/word-longest/word-longest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordLongestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

var WordLongestComponent = (function () {
    function WordLongestComponent() {
***REMOVED***
    WordLongestComponent.prototype.ngOnInit = function () {
***REMOVED***;
    WordLongestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-word-longest',
            template: __webpack_require__("../../../../../assets/app/word-longest/word-longest.component.html"),
            styles: [__webpack_require__("../../../../../assets/app/word-longest/word-longest.component.css")]
    ***REMOVED***),
        __metadata("design:paramtypes", [])
    ], WordLongestComponent);
    return WordLongestComponent;
}());



/***/ }),

/***/ "../../../../../assets/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
***REMOVED***


/***/ }),

/***/ "../../../../../assets/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../assets/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../assets/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../assets/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map