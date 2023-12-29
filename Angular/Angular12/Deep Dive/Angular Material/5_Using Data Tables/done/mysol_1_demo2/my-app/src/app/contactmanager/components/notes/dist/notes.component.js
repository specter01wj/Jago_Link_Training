"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotesComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.displayedColumns = ['position', 'title', 'date'];
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.dataSource = new table_1.MatTableDataSource(this.notes);
    };
    NotesComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input()
    ], NotesComponent.prototype, "notes");
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrl: './notes.component.scss'
        })
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
