System.register(['@angular/router', './admin/admin.component', './main/main.component', './stats/stats.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, admin_component_1, main_component_1, stats_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (stats_component_1_1) {
                stats_component_1 = stats_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'main'
                },
                {
                    path: 'administration',
                    component: admin_component_1.AdminComponent
                },
                {
                    path: 'stats',
                    component: stats_component_1.StatsComponent
                },
                {
                    path: 'main',
                    component: main_component_1.MainComponent
                },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map