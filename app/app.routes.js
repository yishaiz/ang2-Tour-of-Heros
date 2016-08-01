"use strict";
var heroes_component_1 = require('./Heroes/heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./Heroes/hero-detail.component');
var page_not_found_component_1 = require('./page-not-found.component');
var router_1 = require('@angular/router');
// import { ROUTER_DIRECTIVES} from '@angular/router';
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map