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
// import  {HEROES} from './mock-heroes';
//this comment cause nothing is being displayed !!!
/*
 export const heroes: Hero[] =
 [
 {id: 11, name: 'Mr. Nice'},
 {id: 12, name: 'Narco'},
 {id: 13, name: 'Bombasto'},
 {id: 14, name: 'Celeritas'},
 {id: 15, name: 'Magneta'},
 {id: 16, name: 'RubberMan'},
 {id: 17, name: 'Dynama'},
 {id: 18, name: 'Dr IQ'},
 {id: 19, name: 'Magma'},
 {id: 20, name: 'Tornado'}
 ];
 */
var Hero2Service = (function () {
    function Hero2Service() {
        this.HEROES1 = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    }
    Hero2Service.prototype.getHeroes = function () {
        console.log("heroes", this.HEROES1);
        return this.HEROES1;
    };
    Hero2Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Hero2Service);
    return Hero2Service;
}());
exports.Hero2Service = Hero2Service;
//# sourceMappingURL=hero2.service.js.map