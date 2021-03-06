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
var core_1 = require("@angular/core");
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        console.log('array (before) : ', array);
        if (array) {
            var orderByValue_1 = args;
            var byVal_1 = 1;
            if (orderByValue_1.charAt(0) == "!") {
                // reverse the array
                byVal_1 = -1;
                orderByValue_1 = orderByValue_1.substring(1);
            }
            console.log("byVal", byVal_1);
            console.log("orderByValue", orderByValue_1);
            array.sort(function (a, b) {
                if (a[orderByValue_1] < b[orderByValue_1]) {
                    return -1 * byVal_1;
                }
                else if (a[orderByValue_1] > b[orderByValue_1]) {
                    return 1 * byVal_1;
                }
                else {
                    return 0;
                }
            });
            console.log('array (after) : ', array);
            return array;
        }
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: "orderby"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=hero.orderby.name.pipe.js.map