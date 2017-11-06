webpackJsonp(["main"],{

/***/ "../../../../../assets/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../assets/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../assets/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"one-third column\">\n    <h5>Edit or delete words that you added</h5>\n    <ul class=\"words\">\n      <form [formGroup]=\"adminForm\"><input formControlName=\"searchField\" placeholder=\"Start typing the word\"></form>\n      <li *ngFor=\"let word of words\" (click)=\"onSelect(word)\">\n        <span [myHighlight] class=\"badge\">{{word.value}}</span>\n        <button class=\"delete-button\" (click)=\"onDelete(word, $event)\">Delete</button>\n      </li>\n    </ul>\n\n    <word-update [word]=\"selectedWord\"></word-update>\n\n  </div>\n\n  <div class=\"two-thirds column\">\n    <word-add></word-add>\n  </div>\n</div>\n\n<div class=\"row\">\n  <settings></settings>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_update_word_update_component__ = __webpack_require__("../../../../../assets/app/admin/word-update/word-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__word_add_word_add_component__ = __webpack_require__("../../../../../assets/app/admin/word-add/word-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("../../../../../assets/app/admin/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__ = __webpack_require__("../../../../../assets/app/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__ = __webpack_require__("../../../../../assets/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***








let AdminComponent = class AdminComponent {
    constructor(_wordService, _notificationService) {
        this._wordService = _wordService;
        this._notificationService = _notificationService;
        this.adminForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            searchField: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
    ***REMOVED***);
        // this.adminForm.searchField.valueChanges
        //   .debounceTime(400)
        //   .flatMap((term: string) => this._wordService.search(term))
        //   .subscribe((result: Word[]) => {
        //     this.words = result;
        // ***REMOVED***);
***REMOVED***
    onSelect(word) {
        this.selectedWord = word;
***REMOVED***
    onDelete(word, event) {
        event.stopPropagation();
        this._wordService
            .destroy(word)
            .subscribe(() => {
            this._notificationService.show({ type: 'success', message: 'Word deleted.', hasCloseButton: true, autoClose: true });
    ***REMOVED***);
***REMOVED***
***REMOVED***
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-component',
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_3__word_update_word_update_component__["a" /* WordUpdateComponent */], __WEBPACK_IMPORTED_MODULE_4__word_add_word_add_component__["a" /* WordAddComponent */], __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_7__notification_notification_component__["a" /* NotificationComponent */]],
        template: __webpack_require__("../../../../../assets/app/admin/admin.component.html")
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__notification_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

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

module.exports = "<div class=\"row\" *ngIf=\"!isLanguageSet && languages.length\">\n  \n    <h3>Pick a language</h3>\n    <select class=\"form-control\" [(ngModel)]=\"selectedWorkout\" (ngModelChange)=\"updateUser($event)\">\n      <option *ngFor=\"let language of languages\" value=\"{{language.value}}\">{{language.name}}</option>\n  </select>\n  </div>\n  \n  <div *ngIf=\"settings\">\n      <ul>\n          <label for=\"questionsNumber\">Number of questions in the game - valid when in practice mode</label>\n          <li [class.disabled]=\"!settings.practiceMode\">Number of questions <input [disabled]=\"!settings.practiceMode\" id=\"questionsNumber\" [(ngModel)]=\"settings.questionsNumber\"\n              /></li>\n  \n          <label for=\"practiceMode\">When selected, enables open ended game, with your own words only</label>\n          <li>Practice mode <input id=\"practiceMode\" type=\"checkbox\" [(ngModel)]=\"settings.practiceMode\" /></li>\n          <button class=\"update-button\" (click)=\"onSave(settings)\">Save</button>\n  \n      </ul>\n  </div>\n  \n  <notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




let SettingsComponent = class SettingsComponent {
    constructor(_settingsService, _notificationService, _userService) {
        this._settingsService = _settingsService;
        this._notificationService = _notificationService;
        this._userService = _userService;
        this.languages = [];
        this.isLanguageSet = false;
***REMOVED***
    ngOnInit() {
        this.isLanguageSet = window['Globals'].locale !== 'null' && !window['Globals'].locale.startsWith('en');
        if (!this.isLanguageSet) {
            this._settingsService.languages()
                .subscribe((languages) => {
                for (const key in languages) {
                    if (languages.hasOwnProperty(key)) {
                        this.languages.push({ name: languages[key], value: key });
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***
        this._settingsService.get()
            .subscribe((settings) => {
            this.settings = settings;
    ***REMOVED***);
***REMOVED***
    onSave(settings) {
        this._settingsService
            .update(settings)
            .subscribe((serviceSettings) => {
            this.settings = serviceSettings;
            this._notificationService.show({ type: 'success', message: 'Settings saved.', hasCloseButton: true, autoClose: true });
    ***REMOVED***);
***REMOVED***
    updateUser(languageSelection) {
        this._userService
            .setLocale(languageSelection)
            .subscribe((userData) => {
            this.isLanguageSet = true;
            window['Globals'].locale = userData.locale;
            this._notificationService.show({
                type: 'success',
                message: 'Language set, thank you very much!',
                hasCloseButton: true,
                autoClose: true
        ***REMOVED***);
    ***REMOVED***);
***REMOVED***
***REMOVED***
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'settings',
        template: __webpack_require__("../../../../../assets/app/admin/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../assets/app/admin/settings/settings.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]]
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../assets/app/admin/word-add/word-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Add new word</h5>\n<form (ngSubmit)=\"onSubmit()\" #wordForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <label for=\"englishTem\">English term</label>\n      <input type=\"text\" id=\"englishTem\" required [(ngModel)]=\"word.value\" name=\"wordValue\">\n    </div>\n\n    <div class=\"one-third column\">\n      <label for=\"correctAnswer\">Correct answer</label>\n      <input type=\"text\" id=\"correctAnswer\" required [(ngModel)]=\"word.translations[0]\" name=\"word.trasnlation\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <label for=\"falseAnswers\">False answers</label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <input type=\"text\" id=\"falseAnswers\" required [(ngModel)]=\"word.translations[1]\" name=\"falseAnswer1\">\n    </div>\n\n    <div class=\"three columns\">\n      <input type=\"text\" required [(ngModel)]=\"word.translations[2]\" name=\"falseAnswer2\">\n    </div>\n\n    <div class=\"three columns\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"word.translations[3]\" name=\"falseAnswer3\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"one-third column\">\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!wordForm.form.valid\">Add word</button>\n    </div>\n  </div>\n\n</form>\n\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n<div [hidden]=\"!submitted\">\n  <h4>Newly added</h4>\n  <div class=\"row\">\n    <div class=\"col-xs-9  pull-left\">{{ word.value }}</div>\n    <ul>\n      <li *ngFor=\"let t of word.translations\">{{t}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n<notification></notification>\n\n"

/***/ }),

/***/ "../../../../../assets/app/admin/word-add/word-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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





let WordAddComponent = class WordAddComponent {
    constructor(_wordService, _notificationService) {
        this._wordService = _wordService;
        this._notificationService = _notificationService;
        this.submitted = false;
        this.word = new __WEBPACK_IMPORTED_MODULE_2__models_word__["a" /* Word */](0, '', false, []);
***REMOVED***
    onSubmit() {
        this._wordService
            .add(this.word)
            .subscribe(() => {
            this.submitted = true;
            this._notificationService.show({ type: 'success', message: 'Word successfully added.', autoClose: true });
    ***REMOVED***, err => {
            this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
    ***REMOVED***);
***REMOVED***
***REMOVED***
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WordAddComponent.prototype, "submitted", void 0);
WordAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'word-add',
        template: __webpack_require__("../../../../../assets/app/admin/word-add/word-add.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]]
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], WordAddComponent);

var _a, _b;
//# sourceMappingURL=word-add.component.js.map

/***/ }),

/***/ "../../../../../assets/app/admin/word-update/word-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"word\">\n  <h5>{{word.value}} details!</h5>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"word.value\" placeholder=\"name\" />\n  </div>\n\n  <ul>\n    <li *ngFor=\"let t of word.translations\">\n      <input [(ngModel)]=\"t.value\" />\n    </li>\n  </ul>\n\n  <button class=\"update-button\" (click)=\"onSave(word)\">Save</button>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/admin/word-update/word-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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





let WordUpdateComponent = class WordUpdateComponent {
    constructor(_wordService, _notificationService) {
        this._wordService = _wordService;
        this._notificationService = _notificationService;
***REMOVED***
    onSave(word) {
        this._wordService
            .update(word)
            .subscribe((updatedWord) => {
            this.word = updatedWord;
            this._notificationService.show({ type: 'success', message: 'Word successfully updated.', autoClose: true });
    ***REMOVED***);
***REMOVED***
***REMOVED***
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */]) === "function" && _a || Object)
], WordUpdateComponent.prototype, "word", void 0);
WordUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'word-update',
        template: __webpack_require__("../../../../../assets/app/admin/word-update/word-update.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]],
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_word_service__["a" /* WordService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], WordUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=word-update.component.js.map

/***/ }),

/***/ "../../../../../assets/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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







const routes = [
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
let AppRoutingModule = class AppRoutingModule {
***REMOVED***
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
***REMOVED***)
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

let AppComponent = class AppComponent {
    constructor() {
        try {
            this.name = window['Globals'].name;
    ***REMOVED***
        catch (e) {
            this.name = 'Unknown';
    ***REMOVED***
***REMOVED***
***REMOVED***
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-english-quiz',
        template: __webpack_require__("../../../../../assets/app/app.component.html"),
        styles: [__webpack_require__("../../../../../assets/app/app.component.css")]
***REMOVED***),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../assets/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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




















let AppModule = class AppModule {
***REMOVED***
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
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

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../assets/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this._defaultColor = '#0FA0CE';
        this.el = el.nativeElement;
***REMOVED***
    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
***REMOVED***
    onMouseLeave() {
        this.highlight(null);
***REMOVED***
    highlight(color) {
        this.el.style.backgroundColor = color;
***REMOVED***
***REMOVED***
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('myHighlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "highlightColor", void 0);
HighlightDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[myHighlight]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
    ***REMOVED***
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../assets/app/game-picker/game-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"two columns\">&nbsp;</div>\n  <div class=\"four columns\">\n      <div class=\"game-link\" [routerLink]=\"['/main']\">\n          <span>Play quiz</span>\n      </div>\n  </div>\n  <div class=\"four columns\">\n       <div class=\"game-link\" [routerLink]=\"['/longest-word']\">\n          <span>Longest word</span>\n      </div>\n  </div>\n  <div class=\"two columns\">&nbsp;</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"two columns\">&nbsp;</div>\n  <div class=\"four columns\">\n      <div class=\"game-link\">\n          <span>CHILD WORDS</span>\n      </div>\n  </div>\n</div>\n\n<notification></notification>"

/***/ }),

/***/ "../../../../../assets/app/game-picker/game-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
let GamePickerComponent = class GamePickerComponent {
    constructor(_notificationService, _initService) {
        this._notificationService = _notificationService;
        this._initService = _initService;
        this.locale = window['Globals'].locale;
***REMOVED***
    ngOnInit() {
        if (this.locale === 'null' || this.locale.startsWith('en')) {
            this._notificationService.show({ type: 'warn', message: 'Please set desired language in order to play!' });
    ***REMOVED***
        this._initService.get()
            .subscribe((data) => {
            data.forEach(element => {
                if (element.reportedWord) {
                    this._notificationService.show({
                        type: 'warn', message: `Word ${element.reportedWord.value} has
                         been reported as inaccurate by other users, please review its translations`, autoClose: true
                ***REMOVED***);
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***, err => {
            this._notificationService.show({ type: 'error', message: `There has been an error: ${err}.`, hasCloseButton: true });
    ***REMOVED***);
***REMOVED***
***REMOVED***
GamePickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'selector',
        providers: [__WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_init_service__["a" /* InitService */]],
        template: __webpack_require__("../../../../../assets/app/game-picker/game-picker.component.html")
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_init_service__["a" /* InitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_init_service__["a" /* InitService */]) === "function" && _b || Object])
], GamePickerComponent);

var _a, _b;
//# sourceMappingURL=game-picker.component.js.map

/***/ }),

/***/ "../../../../../assets/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <p> There are total of {{wordCount}} words in the database.</p>\n</div>\n\n<div class=\"row\">\n  <button [disabled]=\"buttonState()\" (click)=\"startGame()\" *ngIf=\"!isStarted\">START</button>\n  <button (click)=\"endGame()\" *ngIf=\"isStarted\">END</button>\n</div>\n\n<div class=\"row\">\n  <random-word (onGameOver)=\"onGameOver($event)\" [word]=\"guessWord\"></random-word>\n</div>\n\n<div class=\"row\">\n  <div *ngIf=\"settings\">\n    {{settings.questionsNumber}} questions in the game.\n  </div>\n</div>\n\n<div class=\"row\">\n  <h3 *ngIf=\"countDown\">Game starting in {{countDown}}</h3>\n</div>\n\n<div *ngIf=\"correctAnswer\">\n  <span class=\"row\">Correct answer: {{correctAnswer}}</span>\n  <button class=\"row button button-primary\" (click)=reportTranslation()>Report translation</button>\n</div>"

/***/ }),

/***/ "../../../../../assets/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_word_service__ = __webpack_require__("../../../../../assets/app/services/word.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("../../../../../assets/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***




let MainComponent = class MainComponent {
    constructor(_wordService, _gameService) {
        this._wordService = _wordService;
        this._gameService = _gameService;
        this.wordCount = 0;
        this.isStarted = false;
        this.points = 0;
        this.countDown = 3;
        this.correctAnswer = null;
        this.timerSubscription = null;
***REMOVED***
    startGame(type = 'quiz') {
        this._gameService.on(type)
            .subscribe(game => {
            /*GAME STARTED*/
            this.isStarted = true;
            this.points = 0;
            sessionStorage.setItem('points', '0');
            sessionStorage.setItem('isStarted', 'true');
            if (this.timerSubscription) {
                // stop countdown if exists
                this.timerSubscription.unsubscribe();
                this.countDown = null;
        ***REMOVED***
            // get random word when game starts
            this._gameService.nextWord()
                .subscribe((guessWord) => {
                this.guessWord = guessWord;
                sessionStorage.setItem('guessWord', JSON.stringify(guessWord));
        ***REMOVED***);
    ***REMOVED***, err => console.log(err));
***REMOVED***
    endGame() {
        this._gameService.over()
            .subscribe(gameData => {
            // clear word on game over
            this.onGameOver(gameData.isStarted);
    ***REMOVED***, err => console.log(err));
***REMOVED***
    ngOnInit() {
        const isStarted = sessionStorage.getItem('isStarted');
        if (isStarted === 'undefined' || isStarted === null) {
            const timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].timer(1000, 1000).take(3);
            this.timerSubscription = timer.subscribe(t => this.tickerFunc(t));
    ***REMOVED***
        else {
            this.countDown = null;
            this.guessWord = JSON.parse(sessionStorage.getItem('guessWord'));
            this.points = JSON.parse(sessionStorage.getItem('points'));
    ***REMOVED***
        this._gameService.status()
            .subscribe(game => {
            this.isStarted = game.isStarted;
            sessionStorage.setItem('isStarted', game.isStarted);
    ***REMOVED***);
        this._wordService.count()
            .subscribe(result => {
            this.wordCount = result.count;
    ***REMOVED***);
***REMOVED***
    buttonState() {
        return this.wordCount === 0;
***REMOVED***
    onGameOver(correctAnswer) {
        this.isStarted = false;
        this.guessWord = null;
        this.correctAnswer = correctAnswer;
        sessionStorage.clear();
***REMOVED***
    reportTranslation() {
        this._gameService.report(this.correctAnswer)
            .subscribe(result => alert('Reported! Thank you.'), err => console.log(err));
***REMOVED***
    tickerFunc(tick) {
        this.countDown--;
        if (this.countDown <= 0) {
            this.startGame();
    ***REMOVED***
***REMOVED***
***REMOVED***
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'main-component',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */], __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]],
        template: __webpack_require__("../../../../../assets/app/main/main.component.html")
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_word_service__["a" /* WordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../assets/app/models/word.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Word {
    constructor(id, value, isHard, translations) {
        this.id = id;
        this.value = value;
        this.isHard = isHard;
        this.translations = translations;
***REMOVED***
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Word;

//# sourceMappingURL=word.js.map

/***/ }),

/***/ "../../../../../assets/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification\">\n  <div class=\"{{ note.type }}\" *ngFor=\"let note of _notifications\">\n          <button class=\"close\" *ngIf=\"note.hasCloseButton\" (click)=\"hide(note)\">x</button>\n      {{ note.message }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../assets/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


let NotificationComponent = class NotificationComponent {
    constructor(_notificationService) {
        this._notificationService = _notificationService;
        this._notifications = new Set();
        _notificationService.noteAdded.subscribe(note => {
            this._notifications.add(note);
            if (note.autoClose) {
                setTimeout(() => { this.hide.bind(this)(note); }, 5000);
        ***REMOVED***
    ***REMOVED***);
***REMOVED***
    hide(note) {
        if (this._notifications.has(note)) {
            this._notifications.delete(note);
    ***REMOVED***
***REMOVED***
***REMOVED***
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'notification',
        template: __webpack_require__("../../../../../assets/app/notification/notification.component.html")
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../assets/app/notification/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***


let NotificationService = class NotificationService {
    constructor() {
        this._notifications = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.noteAdded = this._notifications.asObservable();
***REMOVED***
    show(notification) {
        this._notifications.next(notification);
***REMOVED***
***REMOVED***
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../assets/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



let GameService = class GameService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'game/';
***REMOVED***
    on(type) {
        return this.http
            .post(`${this.baseUrl}on`, { type })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    over() {
        return this.http
            .get(`${this.baseUrl}over`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    nextWord() {
        return this.http
            .get(`${this.baseUrl}next`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    checkAnswer(pickedWord) {
        return this.http
            .get(`${this.baseUrl}check/${pickedWord.id}`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    checkExisting(enteredWord) {
        return this.http
            .get(`${this.baseUrl}check/${enteredWord}`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    status() {
        return this.http
            .get(`${this.baseUrl}status`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    report(translation) {
        return this.http
            .post(`${this.baseUrl}report`, { translation })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    highScores() {
        return this.http
            .get(`${this.baseUrl}highscores`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    history() {
        return this.http
            .get(`${this.baseUrl}history`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    breakdown(id) {
        return this.http
            .get(`${this.baseUrl}breakdown/?gameId=${id}`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        const body = res.json();
        return body || {***REMOVED***
***REMOVED***
    handleError(error) {
        // In a real world app, we might send the error to remote logging infrastructure
        const errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
***REMOVED***
***REMOVED***
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GameService);

var _a;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../assets/app/services/init.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



let InitService = class InitService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'init/';
***REMOVED***
    get() {
        return this.http
            .get(`${this.baseUrl}get`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        const body = res.json();
        return body || {***REMOVED***
***REMOVED***
    handleError(error) {
        // In a real world app, we might send the error to remote logging infrastructure
        const errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
***REMOVED***
***REMOVED***
InitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InitService);

var _a;
//# sourceMappingURL=init.service.js.map

/***/ }),

/***/ "../../../../../assets/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



let SettingsService = class SettingsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/settings';
***REMOVED***
    get() {
        return this.http
            .get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    // todo impure api update call, think about refactoring
    update(data) {
        const reqObj = JSON.stringify(data);
        return this.http
            .post(this.baseUrl + '/handle', reqObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    languages() {
        return this.http
            .get('../json/languageMapping.json')
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        const body = res.json();
        return body || {***REMOVED***
***REMOVED***
    handleError(error) {
        // In a real world app, we might send the error to remote logging infrastructure
        const errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
***REMOVED***
***REMOVED***
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SettingsService);

var _a;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../assets/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'user/';
***REMOVED***
    update(updateObj) {
        return this.http
            .put(`${this.baseUrl}update`, updateObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    setLocale(locale) {
        return this.http
            .put(`${this.baseUrl}setLocale`, { locale })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        const body = res.json();
        return body || {***REMOVED***
***REMOVED***
    handleError(error) {
        // In a real world app, we might send the error to remote logging infrastructure
        const errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
***REMOVED***
***REMOVED***
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../assets/app/services/word.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***



let WordService = class WordService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'word/';
***REMOVED***
    search(value) {
        return this.http
            .get(`${this.baseUrl}search?value=` + value)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    count() {
        return this.http
            .get(`${this.baseUrl}count`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    add(data) {
        const reqObj = JSON.stringify(data);
        return this.http
            .post(`${this.baseUrl}create`, reqObj)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    destroy(data) {
        return this.http
            .delete(this.baseUrl + data.id)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    update(data) {
        const headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        const url = `${this.baseUrl}${data.id}`;
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(url, JSON.stringify(data), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    checkAnswer(pickedWord) {
        return this.http
            .get(`${this.baseUrl}${pickedWord.term}/translations/${pickedWord.id}`)
            .map(this.extractData)
            .catch(this.handleError);
***REMOVED***
    extractData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
    ***REMOVED***
        const body = res.json();
        return body || {***REMOVED***
***REMOVED***
    handleError(error) {
        error = error.json();
        const errMsg = error.message || 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
***REMOVED***
***REMOVED***
WordService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WordService);

var _a;
//# sourceMappingURL=word.service.js.map

/***/ }),

/***/ "../../../../../assets/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"one-half column\">\n    <h5>Your top scores:</h5>\n\n\n    <table>\n      <thead>\n      <th>Points</th>\n      <th>Date</th>\n      </thead>\n\n      <tbody>\n      <tr [myHighlight] *ngFor=\"let h of history\" (click)=\"onSelect(h)\">\n        <td>{{h.gamePoints}}</td>\n        <td>{{h.createdAt | date:\"dd/MM/yyyy\"}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <div [hidden]=\"!gameSelected\">\n      <table>\n        <thead>\n        <th>Word</th>\n        <th>Correct answer</th>\n        </thead>\n\n        <tbody>\n        <tr [class.correct]=\"b.correct\" [class.incorrect]=\"!b.correct\" *ngFor=\"let b of breakdown\">\n          <td>{{b.questionId.value}}</td>\n          <td>{{b.correct}}</td>\n        </tr>\n        </tbody>\n\n\n      </table>\n    </div>\n\n  </div>\n\n  <div class=\"one-half column\">\n\n    <h5>High scores:</h5>\n\n\n    <table>\n      <thead>\n      <th>Points</th>\n      <th>Contender</th>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let hs of highScores\">\n        <td>{{hs.gamePoints}}</td>\n        <td>{{hs.contenderId.name}}</td>\n        <td><img src=\"{{hs.contenderId.pictureUrl || 'images/unknown_user.png'}}\" alt=\"profile picture\" height=\"25px\" width=\"25px\"/></td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../assets/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


let StatsComponent = class StatsComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.history = [];
        this.breakdown = [];
        this.highScores = [];
***REMOVED***
    ngOnInit() {
        this._gameService
            .history()
            .subscribe((history) => {
            this.history = history;
    ***REMOVED***);
        this._gameService
            .highScores()
            .subscribe((highScores) => {
            this.highScores = highScores;
    ***REMOVED***);
***REMOVED***
    onSelect(game) {
        this._gameService
            .breakdown(game.id)
            .subscribe((breakdown) => {
            this.breakdown = breakdown;
            this.gameSelected = true;
    ***REMOVED***);
***REMOVED***
***REMOVED***
StatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'stats-component',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]],
        template: __webpack_require__("../../../../../assets/app/stats/stats.component.html")
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _a || Object])
], StatsComponent);

var _a;
//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ "../../../../../assets/app/word-display/word-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"two columns\">\n    <div *ngIf=\"word\">\n      <h2>{{word.value}}</h2>\n      <ul>\n        <li [myHighlight] *ngFor=\"let t of word.translations\" [class.selected]=\"word === selectedWord\"\n            (click)=\"onSelect(t)\">{{t.value}}\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n<p>{{points}}</p>"

/***/ }),

/***/ "../../../../../assets/app/word-display/word-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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



let WordDisplayComponent = class WordDisplayComponent {
    constructor(_gameService) {
        this._gameService = _gameService;
        this.onGameOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
***REMOVED***
    onSelect(pickedWord) {
        this._gameService.checkAnswer(pickedWord)
            .subscribe(data => {
            this.points = data.points;
            sessionStorage.setItem('points', data.points);
            if (data.isAnswer) {
                this.word = data;
                sessionStorage.setItem('guessWord', JSON.stringify(data));
        ***REMOVED***
            if (data.isStarted === false) {
                this.onGameOver.emit(data.correctAnswer);
        ***REMOVED***
    ***REMOVED***);
***REMOVED***
***REMOVED***
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_word__["a" /* Word */]) === "function" && _a || Object)
], WordDisplayComponent.prototype, "word", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WordDisplayComponent.prototype, "onGameOver", void 0);
WordDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'random-word',
        template: __webpack_require__("../../../../../assets/app/word-display/word-display.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]]
***REMOVED***),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]) === "function" && _b || Object])
], WordDisplayComponent);

var _a, _b;
//# sourceMappingURL=word-display.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***

let WordLongestComponent = class WordLongestComponent {
    constructor() { }
    ngOnInit() {
***REMOVED***
***REMOVED***
WordLongestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-word-longest',
        template: __webpack_require__("../../../../../assets/app/word-longest/word-longest.component.html"),
        styles: [__webpack_require__("../../../../../assets/app/word-longest/word-longest.component.css")]
***REMOVED***),
    __metadata("design:paramtypes", [])
], WordLongestComponent);

//# sourceMappingURL=word-longest.component.js.map

/***/ }),

/***/ "../../../../../assets/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
***REMOVED***
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../assets/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../assets/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../assets/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../assets/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map