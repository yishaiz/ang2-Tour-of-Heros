import {RouterConfig} from '@angular/router';

import {MoviesListComponent} from './movies-list.component';
import {AboutMovies} from './about-movies';


export const moviesRoutes:RouterConfig = [
    {path: 'movies', component: MoviesListComponent},
    {path: 'movies/about', component: AboutMovies},
];
