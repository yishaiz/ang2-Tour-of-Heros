"use strict";
var dashboard_component_1 = require('./dashboard.component');
var page_not_found_component_1 = require('./page-not-found.component');
var router_1 = require('@angular/router');
var heroes_routes_1 = require('./heroes/heroes.routes');
var movies_routes_1 = require('./movies/movies.routes');
var admin_routes_1 = require('./admin/admin.routes');
var authenticated_routes_1 = require('./authenticated/authenticated.routes');
var login_component_1 = require('./Login/login.component');
// import { ROUTER_DIRECTIVES} from '@angular/router';
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent }
].concat(heroes_routes_1.heroesRoutes, movies_routes_1.moviesRoutes, admin_routes_1.adminRoutes, authenticated_routes_1.authenticatedRoutes, [
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
]);
/*

 const routes:RouterConfig = [
 {path: 'dashboard', component: DashboardComponent},
 {path: 'heroes', component: HeroesComponent},
 {path: 'hero/:id', component: HeroDetailComponent},
 {path: 'movies', component: MoviesList},
 {path: 'movies/about', component: AboutMovies},
 {path: '**', component: PageNotFoundComponent}
 ];

 */
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map