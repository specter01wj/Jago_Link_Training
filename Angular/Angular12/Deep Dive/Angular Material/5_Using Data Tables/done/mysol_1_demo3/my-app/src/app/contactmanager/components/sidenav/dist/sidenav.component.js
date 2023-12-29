"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidenavComponent = void 0;
var core_1 = require("@angular/core");
var sidenav_1 = require("@angular/material/sidenav");
var SMALL_WIDTH_BREAKPOINT = 720;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(breakpointObserver, userService, router) {
        this.breakpointObserver = breakpointObserver;
        this.userService = userService;
        this.router = router;
        this.isScreenSmall = true;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breakpointObserver
            .observe(["(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)"])
            .subscribe(function (state) {
            _this.isScreenSmall = state.matches;
        });
        this.users = this.userService.users;
        this.userService.loadAll();
        /* this.users.subscribe(data => {
          if (data.length > 0) {
            this.router.navigate(['/contactmanager', data[0].id]);
          }
        }); */
        this.router.events.subscribe(function () {
            if (_this.isScreenSmall) {
                _this.sidenav.close();
            }
        });
    };
    __decorate([
        core_1.ViewChild(sidenav_1.MatSidenav)
    ], SidenavComponent.prototype, "sidenav");
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.scss']
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
