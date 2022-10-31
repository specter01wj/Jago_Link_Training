"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var login_component_1 = require("./login.component");
var store_1 = require("@ngrx/store");
var user_reducer_1 = require("./state/user.reducer");
var userRoutes = [
    { path: 'login', component: login_component_1.LoginComponent }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(userRoutes),
                store_1.StoreModule.forFeature('users', user_reducer_1.userReducer)
            ],
            declarations: [
                login_component_1.LoginComponent
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
