import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAngularMaterialModule } from '../shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
