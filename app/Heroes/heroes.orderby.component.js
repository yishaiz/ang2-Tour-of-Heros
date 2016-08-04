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
var hero_orderby_name_pipe_1 = require('../Pipes/hero.orderby.name.pipe');
var router_1 = require('@angular/router');
var HeroesOrderByComponent = (function () {
    function HeroesOrderByComponent(router, heroesService) {
        this.router = router;
        this.heroesService = heroesService;
    }
    HeroesOrderByComponent.prototype.ngOnInit = function () {
        this.orderbyField = 'name';
        this.getHeroes();
    };
    HeroesOrderByComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroesService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesOrderByComponent.prototype.onSelect = function (hero) {
        console.log(hero);
        this.router.navigate(['/hero', hero.id]);
    };
    HeroesOrderByComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            pipes: [hero_orderby_name_pipe_1.OrderByPipe],
            directives: [hero_detail_component_1.HeroDetailComponent],
            providers: [hero_service_1.HeroService],
            styleUrls: ['heroes.style.css'],
            template: "\n    \n<h2>My Heroes - using orderBy</h2>\n\n<div>\n<h3>Order by (name, !name, id, !id)</h3>\n    <input type=\"text\" [(ngModel)] =\"orderbyField\" />\n</div>\n\n\n\n<ul class=\"heroes\">\n    <!--<li *ngFor=\"let hero of heroes | orderby: '!name'; trackBy:hero?.id\"-->\n    <!--<li *ngFor=\"let hero of heroes | orderby: 'name'; trackBy:hero?.id\"-->\n    \n    <li *ngFor=\"let hero of heroes | orderby: orderbyField; trackBy:hero?.id\"\n    \n        (click)=\"onSelect(hero)\">\n         \n        <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n    </li>        \n</ul>\n \n\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesOrderByComponent);
    return HeroesOrderByComponent;
}());
exports.HeroesOrderByComponent = HeroesOrderByComponent;
//# sourceMappingURL=heroes.orderby.component.js.map