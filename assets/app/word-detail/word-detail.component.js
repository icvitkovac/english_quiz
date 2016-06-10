System.register(['angular2/core', '../models/word', '../services/word.service'], function(exports_1, context_1) {
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
    var core_1, word_1, word_service_1;
    var WordDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (word_1_1) {
                word_1 = word_1_1;
        ***REMOVED***,
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
        ***REMOVED***],
        execute: function() {
            let WordDetailComponent = class WordDetailComponent {
                constructor(_wordService) {
                    this._wordService = _wordService;
            ***REMOVED***
                onSave(word) {
                    this._wordService.update(word).subscribe((result) => {
                        this.word = result;
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            __decorate([
                core_1.Input(), 
                __metadata('design:type', word_1.Word)
            ], WordDetailComponent.prototype, "word", void 0);
            WordDetailComponent = __decorate([
                core_1.Component({
                    selector: 'my-word-detail',
                    templateUrl: 'app/word-detail.component.html',
                    providers: [word_service_1.WordService]
            ***REMOVED***), 
                __metadata('design:paramtypes', [word_service_1.WordService])
            ], WordDetailComponent);
            exports_1("WordDetailComponent", WordDetailComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=word-detail.component.js.map