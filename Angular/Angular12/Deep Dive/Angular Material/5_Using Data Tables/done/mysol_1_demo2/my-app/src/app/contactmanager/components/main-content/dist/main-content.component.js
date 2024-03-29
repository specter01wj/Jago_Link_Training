"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainContentComponent = void 0;
var core_1 = require("@angular/core");
var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id)
                id = 1;
            _this.user = null;
            _this.service.users.subscribe(function (users) {
                if (users.length == 0)
                    return;
                setTimeout(function () {
                    _this.user = _this.service.userById(id);
                }, 500);
            });
        });
    };
    MainContentComponent = __decorate([
        core_1.Component({
            selector: 'app-main-content',
            templateUrl: './main-content.component.html',
            styleUrls: ['./main-content.component.scss']
        })
    ], MainContentComponent);
    return MainContentComponent;
}());
exports.MainContentComponent = MainContentComponent;
