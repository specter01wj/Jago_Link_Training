"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(store, productService) {
        this.store = store;
        this.productService = productService;
        this.pageTitle = 'Products';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.productService.selectedProductChanges$.subscribe(function (currentProduct) { return _this.selectedProduct = currentProduct; });
        this.productService.getProducts().subscribe({
            next: function (products) { return _this.products = products; },
            error: function (err) { return _this.errorMessage = err; }
        });
        this.store.select('products').subscribe(function (products) {
            if (products) {
                _this.displayCode = products.showProductCode;
            }
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductListComponent.prototype.checkChanged = function () {
        // this.displayCode = !this.displayCode;
        this.store.dispatch({ type: '[Product] Toggle Product Code' });
    };
    ProductListComponent.prototype.newProduct = function () {
        this.productService.changeSelectedProduct(this.productService.newProduct());
    };
    ProductListComponent.prototype.productSelected = function (product) {
        this.productService.changeSelectedProduct(product);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
