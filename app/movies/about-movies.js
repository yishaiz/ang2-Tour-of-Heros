"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AboutMovies = (function () {
    function AboutMovies() {
    }
    AboutMovies = __decorate([
        core_1.Component({
            selector: 'about-movies',
            template: "\n\n<h2>About Movies</h2>\n<p>\n    About the movie. \n    Bla bla...\n</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutMovies);
    return AboutMovies;
}());
exports.AboutMovies = AboutMovies;
//# sourceMappingURL=about-movies.js.map