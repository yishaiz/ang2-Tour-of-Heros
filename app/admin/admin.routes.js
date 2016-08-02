"use strict";
var admin_component_1 = require('./admin.component');
var auth_guard_service_1 = require('../auth-guard.service');
// @Component({
//     providers:[AuthGuard]
// })
exports.adminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
//# sourceMappingURL=admin.routes.js.map