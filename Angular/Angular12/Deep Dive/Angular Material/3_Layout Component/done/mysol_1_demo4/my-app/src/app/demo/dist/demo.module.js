"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemoModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_module_1 = require("../shared/material.module");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
var demo_routing_module_1 = require("./demo-routing.module");
var buttons_component_1 = require("./buttons/buttons.component");
var flexbox_component_1 = require("./flexbox/flexbox.component");
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            declarations: [
                buttons_component_1.ButtonsComponent,
                flexbox_component_1.FlexboxComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.FormsModule,
                demo_routing_module_1.DemoRoutingModule
            ]
        })
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
