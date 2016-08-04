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
var multi_pipe_1 = require('./multi.pipe');
var HeroBirthdayComponent = (function () {
    function HeroBirthdayComponent() {
        this.birthday = new Date(1988, 3, 15); // April 15, 1988
        this.myHero = {
            name: 'Bar',
            date: new Date(1988, 3, 15)
        };
        this.birthday22 = null; //new Date(1988, 3, 15); // April 15, 1988
    }
    HeroBirthdayComponent = __decorate([
        core_1.Component({
            selector: 'hero-birthday',
            pipes: [multi_pipe_1.MultiNumber],
            styles: ["\n    h3{\n        color:green;\n    }\n"],
            template: "\n        The hero's birthday is :\n        <div>{{ birthday }}</div>\n        \n        <h3>with pipe | date:</h3>\n        <div>{{ birthday | date }}</div>\n\n        <h3>with pipe - long date:</h3>\n        <div>{{ birthday | date : 'longDate'}}</div>\n\n<h3>with pipe - short date:</h3>\n        <div>{{ birthday | date : 'shortDate'}}</div>\n<hr/>\nnullable:\n<h3>birthday - nullable:</h3>\n        <div>{{ myHero?.date | date : 'shortDate'}}</div>\n        \n<h3>other way</h3>\n<div>{{ myHero && myHero.date | date : 'shortDate'}}</div>\n\n<hr/>\njson: {{myHero | json}}\n<hr/>\n<h2>more samples</h2>\ndd/MM/yy\n <div>{{ birthday | date : 'dd/MM/yy'}}</div>\n\n\n<hr/>\ncustom pipe - multi \n <h3>multi 10</h3>  \n {{10 | multiPipe }}\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroBirthdayComponent);
    return HeroBirthdayComponent;
}());
exports.HeroBirthdayComponent = HeroBirthdayComponent;
//# sourceMappingURL=hero-birthday1.component.js.map