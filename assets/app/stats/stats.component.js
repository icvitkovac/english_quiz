System.register(['@angular/core', '../services/game.service', '../directives/highlight.directive'], function(exports_1, context_1) {
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
    var core_1, game_service_1, highlight_directive_1;
    var StatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
        ***REMOVED***,
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
        ***REMOVED***],
        execute: function() {
            let StatsComponent = class StatsComponent {
                constructor(_gameService) {
                    this._gameService = _gameService;
                    this.history = [];
                    this.breakdown = [];
                    this.highScores = [];
            ***REMOVED***
                ngOnInit() {
                    this._gameService
                        .history()
                        .subscribe((history) => {
                        this.history = history;
                ***REMOVED***);
                    this._gameService
                        .highScores()
                        .subscribe((highScores) => {
                        this.highScores = highScores;
                ***REMOVED***);
            ***REMOVED***
                onSelect(game) {
                    this._gameService
                        .breakdown(game.id)
                        .subscribe((breakdown) => {
                        this.breakdown = breakdown;
                        this.gameSelected = true;
                ***REMOVED***);
            ***REMOVED***
      ***REMOVED***
            StatsComponent = __decorate([
                core_1.Component({
                    selector: 'stats-component',
                    providers: [game_service_1.GameService],
                    directives: [highlight_directive_1.HighlightDirective],
                    templateUrl: 'app/stats/stats.component.html'
            ***REMOVED***), 
                __metadata('design:paramtypes', [game_service_1.GameService])
            ], StatsComponent);
            exports_1("StatsComponent", StatsComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=stats.component.js.map