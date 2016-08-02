import {DashboardComponent} from './dashboard.component';
import {PageNotFoundComponent} from './page-not-found.component';

import {provideRouter, RouterConfig} from '@angular/router';

import { heroesRoutes} from './heroes/heroes.routes';
import { moviesRoutes} from './movies/movies.routes';
import {  adminRoutes} from './admin/admin.routes';

// import { ROUTER_DIRECTIVES} from '@angular/router';

const routes:RouterConfig = [
    {path: 'dashboard', component: DashboardComponent},
    ...heroesRoutes,
    ...moviesRoutes,
    ...adminRoutes,
    {path: '**', component: PageNotFoundComponent}
];


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
export const appRouterProviders = [
    provideRouter(routes)
];