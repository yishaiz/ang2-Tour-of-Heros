"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var auth_guard_service_1 = require('./auth-guard.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    auth_guard_service_1.AuthGuard
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map