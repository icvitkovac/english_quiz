System.register(['angular2/core', '../services/word.service', '../services/game.service', '../services/settings.service', '../word-display/word-display.component', 'angular2/router', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, word_service_1, game_service_1, settings_service_1, word_display_component_1, router_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (word_service_1_1) {
                word_service_1 = word_service_1_1;
        ***REMOVED***,
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
        ***REMOVED***,
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
        ***REMOVED***,
            function (word_display_component_1_1) {
                word_display_component_1 = word_display_component_1_1;
        ***REMOVED***,
            function (router_1_1) {
                router_1 = router_1_1;
        ***REMOVED***,
            function (_1) {}],
        execute: function() {
            let MainComponent = class MainComponent {
                constructor(_wordService, _gameService, _settingsService) {
                    this._wordService = _wordService;
                    this._gameService = _gameService;
                    this._settingsService = _settingsService;
            ***REMOVED***
                onClick() {
                    this._gameService.startEnd()
                        .subscribe((game) => {
                        this.isStarted = game.isStarted;
                        this.points = game.points;
                        if (!this.isStarted) {
                            //clear word on game over
                            this.guessWord = null;
                            return;
                    ***REMOVED***
                        /*GAME STARTED*/
                        this._settingsService.get()
                            .subscribe((settings) => {
                            this.settings = settings[0];
                    ***REMOVED***);
                        //get random word when game starts
                        this._gameService.nextWord()
                            .subscribe((guessWord) => {
                            this.guessWord = guessWord;
                    ***REMOVED***);
                ***REMOVED***);
            ***REMOVED***
                ngOnInit() {
                    this.count = 0;
                    this._gameService.status()
                        .subscribe(game => {
                        this.isStarted = game.isStarted;
                ***REMOVED***);
                    this._wordService.count()
                        .subscribe(result => {
                        this.count = result.count;
                ***REMOVED***);
            ***REMOVED***
                buttonState() {
                    return this.count == 0;
            ***REMOVED***
      ***REMOVED***
            MainComponent = __decorate([
                core_1.Component({
                    selector: 'main-component',
                    providers: [word_service_1.WordService, game_service_1.GameService, settings_service_1.SettingsService],
                    directives: [word_display_component_1.WordDisplayComponent, router_1.RouterOutlet],
                    templateUrl: 'app/main.component.html'
            ***REMOVED***),
                router_1.RouteConfig([
                    { path: '/', name: 'WordDisplay', component: word_display_component_1.WordDisplayComponent, useAsDefault: true }
                ]), 
                __metadata('design:paramtypes', [word_service_1.WordService, game_service_1.GameService, settings_service_1.SettingsService])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=main.component.js.map