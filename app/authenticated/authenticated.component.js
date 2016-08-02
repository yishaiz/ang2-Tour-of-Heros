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
var AuthenticatedComponent = (function () {
    function AuthenticatedComponent() {
    }
    AuthenticatedComponent = __decorate([
        core_1.Component({
            selector: 'authenticated',
            styles: ["\n    h3{\n        color:green;\n    }\n    "],
            template: "\n\n<h2>Authenticated Area</h2>\n<h3>\n    Only logged in users should be here\n</h3>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());
exports.AuthenticatedComponent = AuthenticatedComponent;
//# sourceMappingURL=authenticated.component.js.map