System.register(['@angular/core', './admin/admin.component', './main/main.component', './stats/stats.component', './game-picker/game-picker.component', './word-longest/word-longest.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, admin_component_1, main_component_1, stats_component_1, game_picker_component_1, word_longest_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (stats_component_1_1) {
                stats_component_1 = stats_component_1_1;
            },
            function (game_picker_component_1_1) {
                game_picker_component_1 = game_picker_component_1_1;
            },
            function (word_longest_component_1_1) {
                word_longest_component_1 = word_longest_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'english-quiz',
                    directives: [main_component_1.MainComponent, admin_component_1.AdminComponent, router_1.ROUTER_DIRECTIVES],
                    precompile: [main_component_1.MainComponent, admin_component_1.AdminComponent, stats_component_1.StatsComponent, game_picker_component_1.GamePickerComponent, word_longest_component_1.LongestWordComponent],
                    templateUrl: 'app/app.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map