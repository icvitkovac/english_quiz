System.register(['angular2/core', 'angular2/router', './admin/admin.component', './main/main.component', './stats/stats.component'], function(exports_1, context_1) {
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
    var core_1, router_1, admin_component_1, main_component_1, stats_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***,
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
        ***REMOVED***],
        execute: function() {
            let AppComponent = class AppComponent {
      ***REMOVED***
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'english-quiz',
                    directives: [main_component_1.MainComponent, admin_component_1.AdminComponent, router_1.ROUTER_DIRECTIVES],
                    templateUrl: 'app/app.component.html'
            ***REMOVED***),
                router_1.RouteConfig([
                    {
                        path: '/administration',
                        name: 'Admin',
                        component: admin_component_1.AdminComponent
                ***REMOVED***,
                    {
                        path: '/stats',
                        name: 'Stats',
                        component: stats_component_1.StatsComponent
                ***REMOVED***,
                    {
                        path: '/main/...',
                        name: 'Main',
                        component: main_component_1.MainComponent,
                        useAsDefault: true
                ***REMOVED***,
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
    ***REMOVED***
***REMOVED***
});
//# sourceMappingURL=app.component.js.map