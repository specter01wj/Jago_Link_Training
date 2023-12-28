"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactmanagerRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contactmanager_component_1 = require("./contactmanager/contactmanager.component");
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
var main_content_component_1 = require("./components/main-content/main-content.component");
// import { SidenavComponent } from './components/sidenav/sidenav.component';
var routes = [
    {
        path: '', component: contactmanager_component_1.ContactmanagerComponent,
        children: [
            { path: '', component: main_content_component_1.MainContentComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
var ContactmanagerRoutingModule = /** @class */ (function () {
    function ContactmanagerRoutingModule() {
    }
    ContactmanagerRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ContactmanagerRoutingModule);
    return ContactmanagerRoutingModule;
}());
exports.ContactmanagerRoutingModule = ContactmanagerRoutingModule;
