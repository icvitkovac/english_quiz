System.register(['@angular/router', './admin/admin.component', './main/main.component', './stats/stats.component', './game-picker/game-picker.component', './word-longest/word-longest.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, admin_component_1, main_component_1, stats_component_1, game_picker_component_1, word_longest_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
        ***REMOVED***,
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
        ***REMOVED***,
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
        ***REMOVED***,
            function (stats_component_1_1) {
                stats_component_1 = stats_component_1_1;
        ***REMOVED***,
            function (game_picker_component_1_1) {
                game_picker_component_1 = game_picker_component_1_1;
        ***REMOVED***,
            function (word_longest_component_1_1) {
                word_longest_component_1 = word_longest_component_1_1;
        ***REMOVED***],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'pick'
            ***REMOVED***,
                {
                    path: 'administration',
                    component: admin_component_1.AdminComponent
            ***REMOVED***,
                {
                    path: 'stats',
                    component: stats_component_1.StatsComponent
            ***REMOVED***,
                {
                    path: 'main',
                    component: main_component_1.MainComponent
            ***REMOVED***,
                {
                    path: 'pick',
                    component: game_picker_component_1.GamePickerComponent
            ***REMOVED***,
                {
                    path: 'longest-word',
                    component: word_longest_component_1.LongestWordComponent
            ***REMOVED***,
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=app.routes.js.map