System.register(['@angular/core', '../models/word', '../services/game.service', '../directives/highlight.directive'], function(exports_1, context_1) {
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
    var core_1, word_1, game_service_1, highlight_directive_1;
    var WordDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_1_1) {
                word_1 = word_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            let WordDisplayComponent = class WordDisplayComponent {
                constructor(_gameService) {
                    this._gameService = _gameService;
                    this.onGameOver = new core_1.EventEmitter();
                }
                onSelect(pickedWord) {
                    this._gameService.checkAnswer(pickedWord)
                        .subscribe(data => {
                        this.points = data.points;
                        if (data.isAnswer) {
                            this.word = data;
                        }
                        if (data.isStarted === false) {
                            this.onGameOver.emit(false);
                        }
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', word_1.Word)
            ], WordDisplayComponent.prototype, "word", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], WordDisplayComponent.prototype, "onGameOver", void 0);
            WordDisplayComponent = __decorate([
                core_1.Component({
                    selector: 'random-word',
                    templateUrl: 'app/word-display/word-display.component.html',
                    directives: [highlight_directive_1.HighlightDirective],
                    providers: [game_service_1.GameService]
                }), 
                __metadata('design:paramtypes', [game_service_1.GameService])
            ], WordDisplayComponent);
            exports_1("WordDisplayComponent", WordDisplayComponent);
        }
    }
});
//# sourceMappingURL=word-display.component.js.map