"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewContactDialogComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("../../models/user");
var NewContactDialogComponent = /** @class */ (function () {
    function NewContactDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.avatars = [
            'svg-1', 'svg-2', 'svg-3', 'svg-4'
        ];
    }
    NewContactDialogComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    NewContactDialogComponent.prototype.save = function () {
    };
    NewContactDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    NewContactDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-new-contact-dialog',
            templateUrl: './new-contact-dialog.component.html',
            styleUrl: './new-contact-dialog.component.scss'
        })
    ], NewContactDialogComponent);
    return NewContactDialogComponent;
}());
exports.NewContactDialogComponent = NewContactDialogComponent;
