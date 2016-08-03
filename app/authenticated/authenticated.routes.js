"use strict";
var authenticated_component_1 = require('./authenticated.component');
var auth_guard_service_1 = require('../auth-guard.service');
exports.authenticatedRoutes = [
    {
        path: 'authenticated',
        component: authenticated_component_1.AuthenticatedComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
//# sourceMappingURL=authenticated.routes.js.map