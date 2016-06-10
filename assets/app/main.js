System.register(['angular2/platform/browser', 'angular2/http', 'angular2/router', './app.component', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, router_1, app_component_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
        ***REMOVED***,
            function (http_1_1) {
                http_1 = http_1_1;
        ***REMOVED***,
            function (router_1_1) {
                router_1 = router_1_1;
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
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
    ***REMOVED***
***REMOVED***
});
// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);
//# sourceMappingURL=main.js.map