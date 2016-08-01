"use strict";
var movies_list_1 = require('./movies-list');
var about_movies_1 = require('./about-movies');
exports.moviesRoutes = [
    { path: 'movies', component: movies_list_1.MoviesList },
    { path: 'movies/about', component: about_movies_1.AboutMovies },
];
//# sourceMappingURL=movies.routes.js.map