System.register(['angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var WordService;
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
            let WordService = class WordService {
                constructor(http) {
                    this.http = http;
            ***REMOVED***
                search(value) {
                    return this.http
                        .get('word/search?value=' + value)
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                count() {
                    return this.http
                        .get('word/count')
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                add(data) {
                    let reqObj = JSON.stringify(data);
                    return this.http
                        .post('word/create', reqObj)
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                delete(data) {
                    return this.http
                        .delete('word/' + data.id)
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                update(data) {
                    let headers = new http_1.Headers();
                    let url = `word/${data.id}`;
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .put(url, JSON.stringify(data), { headers: headers })
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                start() {
                    return this.http
                        .get('game/start')
                        .map(this.extractData)
                        .catch(this.handleError);
            ***REMOVED***
                checkAnswer(pickedWord) {
                    return this.http
                        .get(`word/${pickedWord.term}/translations/${pickedWord.id}`)
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
                    // In a real world app, we might send the error to remote logging infrastructure
                    let errMsg = error.message || 'Server error';
                    return Observable_1.Observable.throw(errMsg);
            ***REMOVED***
      ***REMOVED***
            WordService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], WordService);
            exports_1("WordService", WordService);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=word.service.js.map