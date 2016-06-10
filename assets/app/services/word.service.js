System.register(['angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var WordService;
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
            let WordService = class WordService {
                constructor(http) {
                    this.http = http;
                }
                search(value) {
                    return this.http
                        .get('word/search?value=' + value)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                count() {
                    return this.http
                        .get('word/count')
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                add(data) {
                    let reqObj = JSON.stringify(data);
                    return this.http
                        .post('word/create', reqObj)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                delete(data) {
                    return this.http
                        .delete('word/' + data.id)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                update(data) {
                    let headers = new http_1.Headers();
                    let url = `word/${data.id}`;
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .put(url, JSON.stringify(data), { headers: headers })
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                start() {
                    return this.http
                        .get('game/start')
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                checkAnswer(pickedWord) {
                    return this.http
                        .get(`word/${pickedWord.term}/translations/${pickedWord.id}`)
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
                    // In a real world app, we might send the error to remote logging infrastructure
                    let errMsg = error.message || 'Server error';
                    return Observable_1.Observable.throw(errMsg);
                }
            };
            WordService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], WordService);
            exports_1("WordService", WordService);
        }
    }
});
//# sourceMappingURL=word.service.js.map