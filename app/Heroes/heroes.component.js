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
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroesService) {
        this.router = router;
        this.heroesService = heroesService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroesService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        console.log(hero);
        this.router.navigate(['/hero', hero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            directives: [hero_detail_component_1.HeroDetailComponent],
            providers: [hero_service_1.HeroService],
            styleUrls: ['heroes.style.css'],
            template: "\n    \n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes; trackBy:hero?.id\"\n        (click)=\"onSelect(hero)\">\n         \n        <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n    </li>        \n</ul>\n \n\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map