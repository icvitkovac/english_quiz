System.register(['@angular/http', '@angular/core', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
***REMOVED***;
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
***REMOVED***;
    var http_1, core_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
        ***REMOVED***,
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
        ***REMOVED***],
        execute: function() {
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
                        .put(`${this.baseUrl}setLocale`, { locale: locale })
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                extractData(res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                ***REMOVED***
                    let body = res.json();
                    return body || {***REMOVED***
            ***REMOVED***
                handleError(error) {
                    let errMsg = error.message || 'Server error';
                    return Observable_1.Observable.throw(errMsg);
            ***REMOVED***
      ***REMOVED***
            UserService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], UserService);
            exports_1("UserService", UserService);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=user.service.js.map