"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedAngularMaterialModule = void 0;
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var divider_1 = require("@angular/material/divider");
var grid_list_1 = require("@angular/material/grid-list");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var paginator_1 = require("@angular/material/paginator");
var select_1 = require("@angular/material/select");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var tabs_1 = require("@angular/material/tabs");
var autocomplete_1 = require("@angular/material/autocomplete");
var core_2 = require("@angular/material/core");
var form_field_1 = require("@angular/material/form-field");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var checkbox_1 = require("@angular/material/checkbox");
var datepicker_1 = require("@angular/material/datepicker");
var expansion_1 = require("@angular/material/expansion");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var radio_1 = require("@angular/material/radio");
var snack_bar_1 = require("@angular/material/snack-bar");
var tooltip_1 = require("@angular/material/tooltip");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var SharedAngularMaterialModule = /** @class */ (function () {
    function SharedAngularMaterialModule() {
    }
    SharedAngularMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                button_1.MatButtonModule,
                card_1.MatCardModule,
                dialog_1.MatDialogModule,
                divider_1.MatDividerModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                paginator_1.MatPaginatorModule,
                select_1.MatSelectModule,
                sort_1.MatSortModule,
                table_1.MatTableModule,
                tabs_1.MatTabsModule,
                form_field_1.MatFormFieldModule,
                progress_spinner_1.MatProgressSpinnerModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                expansion_1.MatExpansionModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                radio_1.MatRadioModule,
                snack_bar_1.MatSnackBarModule,
                autocomplete_1.MatAutocompleteModule,
                tooltip_1.MatTooltipModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule
            ]
        })
    ], SharedAngularMaterialModule);
    return SharedAngularMaterialModule;
}());
exports.SharedAngularMaterialModule = SharedAngularMaterialModule;
