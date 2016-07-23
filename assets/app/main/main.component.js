System.register(['@angular/core', '../services/word.service', '../services/game.service', '../word-display/word-display.component', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, word_service_1, game_service_1, word_display_component_1, Rx_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            },
            function (word_display_component_1_1) {
                word_display_component_1 = word_display_component_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
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
                }
                startGame(type = 'quiz') {
                    this._gameService.on(type)
                        .subscribe(game => {
                        this.isStarted = true;
                        this.points = 0;
                        sessionStorage.setItem('points', '0');
                        sessionStorage.setItem('isStarted', 'true');
                        if (this.timerSubscription) {
                            this.timerSubscription.unsubscribe();
                            this.countDown = null;
                        }
                        this._gameService.nextWord()
                            .subscribe((guessWord) => {
                            this.guessWord = guessWord;
                            sessionStorage.setItem('guessWord', JSON.stringify(guessWord));
                        });
                    }, err => console.log(err));
                }
                endGame() {
                    this._gameService.over()
                        .subscribe(gameData => {
                        this.onGameOver(gameData.isStarted);
                    }, err => console.log(err));
                }
                ngOnInit() {
                    let isStarted = sessionStorage.getItem('isStarted');
                    if (isStarted === 'undefined' || isStarted === null) {
                        let timer = Rx_1.Observable.timer(1000, 1000).take(3);
                        this.timerSubscription = timer.subscribe(t => this.tickerFunc(t));
                    }
                    else {
                        this.countDown = null;
                        this.guessWord = JSON.parse(sessionStorage.getItem('guessWord'));
                        this.points = JSON.parse(sessionStorage.getItem('points'));
                    }
                    this._gameService.status()
                        .subscribe(game => {
                        this.isStarted = game.isStarted;
                        sessionStorage.setItem('isStarted', game.isStarted);
                    });
                    this._wordService.count()
                        .subscribe(result => {
                        this.wordCount = result.count;
                    });
                }
                buttonState() {
                    return this.wordCount === 0;
                }
                onGameOver(correctAnswer) {
                    this.isStarted = false;
                    this.guessWord = null;
                    this.correctAnswer = correctAnswer;
                    sessionStorage.clear();
                }
                tickerFunc(tick) {
                    this.countDown--;
                    if (this.countDown <= 0)
                        this.startGame();
                }
            };
            MainComponent = __decorate([
                core_1.Component({
                    selector: 'main-component',
                    providers: [word_service_1.WordService, game_service_1.GameService],
                    directives: [word_display_component_1.WordDisplayComponent],
                    templateUrl: 'app/main/main.component.html'
                }), 
                __metadata('design:paramtypes', [word_service_1.WordService, game_service_1.GameService])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map