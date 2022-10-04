"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var autocomplete_1 = require("@angular/material/autocomplete");
var checkbox_1 = require("@angular/material/checkbox");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var card_1 = require("@angular/material/card");
var divider_1 = require("@angular/material/divider");
var expansion_1 = require("@angular/material/expansion");
var grid_list_1 = require("@angular/material/grid-list");
var list_1 = require("@angular/material/list");
var stepper_1 = require("@angular/material/stepper");
var tabs_1 = require("@angular/material/tabs");
var tree_1 = require("@angular/material/tree");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var badge_1 = require("@angular/material/badge");
var chips_1 = require("@angular/material/chips");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var progress_bar_1 = require("@angular/material/progress-bar");
var core_3 = require("@angular/material/core");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var dialog_1 = require("@angular/material/dialog");
var snack_bar_1 = require("@angular/material/snack-bar");
var tooltip_1 = require("@angular/material/tooltip");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                autocomplete_1.MatAutocompleteModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                divider_1.MatDividerModule,
                expansion_1.MatExpansionModule,
                grid_list_1.MatGridListModule,
                list_1.MatListModule,
                stepper_1.MatStepperModule,
                tabs_1.MatTabsModule,
                tree_1.MatTreeModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                badge_1.MatBadgeModule,
                chips_1.MatChipsModule,
                icon_1.MatIconModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                core_3.MatRippleModule,
                bottom_sheet_1.MatBottomSheetModule,
                dialog_1.MatDialogModule,
                snack_bar_1.MatSnackBarModule,
                tooltip_1.MatTooltipModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                table_1.MatTableModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
