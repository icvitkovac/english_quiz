System.register(['@angular/http', '@angular/core', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var SettingsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            let SettingsService = class SettingsService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/settings';
                }
                get() {
                    return this.http
                        .get(this.baseUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                update(data) {
                    let reqObj = JSON.stringify(data);
                    return this.http
                        .post(this.baseUrl + '/handle', reqObj)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                extractData(res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    let body = res.json();
                    return body || {};
                }
                handleError(error) {
                    let errMsg = error.message || 'Server error';
                    return Observable_1.Observable.throw(errMsg);
                }
            };
            SettingsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], SettingsService);
            exports_1("SettingsService", SettingsService);
        }
    }
});
//# sourceMappingURL=settings.service.js.map