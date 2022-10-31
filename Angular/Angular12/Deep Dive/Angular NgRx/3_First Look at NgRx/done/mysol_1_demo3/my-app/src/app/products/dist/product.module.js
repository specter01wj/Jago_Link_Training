"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var product_shell_component_1 = require("./product-shell/product-shell.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_edit_component_1 = require("./product-edit/product-edit.component");
var store_1 = require("@ngrx/store");
var product_reducer_1 = require("./state/product.reducer");
var productRoutes = [
    { path: '', component: product_shell_component_1.ProductShellComponent }
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(productRoutes),
                store_1.StoreModule.forFeature('products', product_reducer_1.productReducer)
            ],
            declarations: [
                product_shell_component_1.ProductShellComponent,
                product_list_component_1.ProductListComponent,
                product_edit_component_1.ProductEditComponent
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
