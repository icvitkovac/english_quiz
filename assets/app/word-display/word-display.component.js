System.register(['angular2/core', '../models/word', '../services/game.service'], function(exports_1, context_1) {
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
    var core_1, word_1, game_service_1;
    var WordDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (word_1_1) {
                word_1 = word_1_1;
        ***REMOVED***,
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
        ***REMOVED***],
        execute: function() {
            let WordDisplayComponent = class WordDisplayComponent {
                constructor(_gameService) {
                    this._gameService = _gameService;
            ***REMOVED***
                onSelect(pickedWord) {
                    this._gameService.checkAnswer(pickedWord)
                        .subscribe(data => {
                        this.points = data.points;
                        if (data.isAnswer) {
                            this.word = data;
                    ***REMOVED***
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            __decorate([
                core_1.Input(), 
                __metadata('design:type', word_1.Word)
            ], WordDisplayComponent.prototype, "word", void 0);
            WordDisplayComponent = __decorate([
                core_1.Component({
                    selector: 'random-word',
                    templateUrl: 'app/word-display/word-display.component.html'
            ***REMOVED***), 
                __metadata('design:paramtypes', [game_service_1.GameService])
            ], WordDisplayComponent);
            exports_1("WordDisplayComponent", WordDisplayComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=word-display.component.js.map