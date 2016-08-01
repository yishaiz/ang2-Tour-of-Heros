import {HeroesComponent} from './Heroes/heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './Heroes/hero-detail.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {MoviesList} from './movies/movies-list';
import {AboutMovies} from './movies/about-movies';

import {provideRouter, RouterConfig} from '@angular/router';

import { heroesRoutes} from './heroes/heroes.routes';
import { moviesRoutes} from './movies/movies.routes';


// import { ROUTER_DIRECTIVES} from '@angular/router';

const routes:RouterConfig = [
    {path: 'dashboard', component: DashboardComponent},
    ...heroesRoutes,
    ...moviesRoutes,
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