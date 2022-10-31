"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(store, authService, router) {
        this.store = store;
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('users').subscribe(function (users) {
            if (users) {
                _this.maskUserName = users.maskUserName;
            }
        });
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['welcome']);
    };
    LoginComponent.prototype.checkChanged = function () {
        // this.maskUserName = !this.maskUserName;
        this.store.dispatch({ type: '[User] Mask User Name' });
    };
    LoginComponent.prototype.login = function (loginForm) {
        if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            this.authService.login(userName, password);
            if (this.authService.redirectUrl) {
                this.router.navigateByUrl(this.authService.redirectUrl);
            }
            else {
                this.router.navigate(['/products']);
            }
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
