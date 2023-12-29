"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.dataStore = { users: [] };
        this._users = new rxjs_1.BehaviorSubject([]);
    }
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            return this._users.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.userById = function (id) {
        return this.dataStore.users.find(function (x) { return x.id == id; });
    };
    UserService.prototype.loadAll = function () {
        var _this = this;
        var usersUrl = 'https://angular-material-api.azurewebsites.net/users';
        return this.http.get(usersUrl)
            .subscribe(function (data) {
            _this.dataStore.users = data;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) {
            console.log("Failed to fetch users");
        });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
