System.register(['@angular/platform-browser-dynamic', '@angular/http', './app.routes', './app.component', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, app_routes_1, app_component_1, core_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
        ***REMOVED***,
            function (http_1_1) {
                http_1 = http_1_1;
        ***REMOVED***,
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
        ***REMOVED***,
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
        ***REMOVED***,
            function (core_1_1) {
                core_1 = core_1_1;
        ***REMOVED***],
        execute: function() {
            core_1.enableProdMode();
            // import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
            // var appPromise = bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, LocalStorageService]);
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS]);
    ***REMOVED***
***REMOVED***
});
// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);
//# sourceMappingURL=main.js.map