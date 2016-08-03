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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    /*    // ngOnInit() {
        //     let id = +this.route.snapshot.params['id'];
        //
        //     this.service.getHero(id).then(
        //         hero => this.hero = hero
        //     );
        // }*/
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriber = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            console.log('id', id);
            _this.hero = null;
            _this.service.getHero(id).then(
            // debugger;
            function (hero) {
                _this.hero = hero;
                console.log("her = ", _this.hero);
                console.dir(hero);
            });
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
        this.subscriber.unsubscribe();
    };
    HeroDetailComponent.prototype.returnToHeroesList = function () {
        this.router.navigate(['/heroes']);
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            providers: [hero_service_1.HeroService],
            styles: [" \n         button{margin-top: 40px;}\n"],
            template: "\n  <div *ngIf=\"hero\">\n    <h2>{{hero.name | uppercase}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  \n  <button (click) = \"returnToHeroesList()\">Return to Heroes</button>\n  \n  \n  <br/>\n  \n  <button (click) = \"goBack()\">Go Back</button>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, hero_service_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map