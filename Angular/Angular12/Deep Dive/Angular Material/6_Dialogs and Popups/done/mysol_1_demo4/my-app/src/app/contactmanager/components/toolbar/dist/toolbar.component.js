"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ToolbarComponent = void 0;
var core_1 = require("@angular/core");
var new_contact_dialog_component_1 = require("../new-contact-dialog/new-contact-dialog.component");
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(dialog, snackBar, router) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.toggleSidenav = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.openAddContactDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(new_contact_dialog_component_1.NewContactDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                _this.openSnackBar("Contact added", "Navigate")
                    .onAction().subscribe(function () {
                    _this.router.navigate(['/contactmanager', result.id]);
                });
            }
        });
    };
    ToolbarComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000
        });
    };
    __decorate([
        core_1.Output()
    ], ToolbarComponent.prototype, "toggleSidenav");
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
