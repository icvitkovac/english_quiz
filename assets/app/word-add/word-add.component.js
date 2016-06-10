System.register(['angular2/core', '../services/word.service', '../models/word'], function(exports_1, context_1) {
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
    var core_1, word_service_1, word_1;
    var WordAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
            },
            function (word_1_1) {
                word_1 = word_1_1;
            }],
        execute: function() {
            let WordAddComponent = class WordAddComponent {
                constructor(_wordService) {
                    this._wordService = _wordService;
                    this.submitted = false;
                    this.active = true;
                    this.word = new word_1.Word(0, '', false, []);
                }
                onSubmit() {
                    this.submitted = true;
                    this._wordService
                        .add(this.word)
                        .subscribe(() => {
                        alert('word added');
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], WordAddComponent.prototype, "submitted", void 0);
            WordAddComponent = __decorate([
                core_1.Component({
                    selector: 'word-add',
                    templateUrl: 'app/word.add.html',
                    providers: [word_service_1.WordService]
                }), 
                __metadata('design:paramtypes', [word_service_1.WordService])
            ], WordAddComponent);
            exports_1("WordAddComponent", WordAddComponent);
        }
    }
});
//# sourceMappingURL=word-add.component.js.map