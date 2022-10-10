"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactmanagerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_module_1 = require("../shared/material.module");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
var contactmanager_component_1 = require("./contactmanager/contactmanager.component");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var main_content_component_1 = require("./components/main-content/main-content.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var contactmanager_routing_module_1 = require("./contactmanager-routing.module");
var ContactmanagerModule = /** @class */ (function () {
    function ContactmanagerModule() {
    }
    ContactmanagerModule = __decorate([
        core_1.NgModule({
            declarations: [
                contactmanager_component_1.ContactmanagerComponent,
                toolbar_component_1.ToolbarComponent,
                main_content_component_1.MainContentComponent,
                sidenav_component_1.SidenavComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.FormsModule,
                contactmanager_routing_module_1.ContactmanagerRoutingModule
            ]
        })
    ], ContactmanagerModule);
    return ContactmanagerModule;
}());
exports.ContactmanagerModule = ContactmanagerModule;
