import {RouterConfig} from '@angular/router';

import {MoviesList} from './movies-list';
import {AboutMovies} from './about-movies';


export const moviesRoutes:RouterConfig = [
    {path: 'movies', component: MoviesList},
    {path: 'movies/about', component: AboutMovies},
];
