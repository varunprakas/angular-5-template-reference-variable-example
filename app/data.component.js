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
var DataComponent = (function () {
    function DataComponent() {
        this.colors = ['RED', 'CYAN', 'BLUE'];
    }
    DataComponent.prototype.getData = function (mob, stat, cnt) {
        console.log(mob);
        console.log(stat);
        console.log(cnt);
    };
    DataComponent.prototype.setData = function (val) {
        console.log(val);
    };
    DataComponent = __decorate([
        core_1.Component({
            selector: 'data-app',
            templateUrl: 'app/data.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DataComponent);
    return DataComponent;
}());
exports.DataComponent = DataComponent;
//# sourceMappingURL=data.component.js.map