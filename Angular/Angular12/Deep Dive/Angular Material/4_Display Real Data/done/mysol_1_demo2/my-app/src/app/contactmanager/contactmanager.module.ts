import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAngularMaterialModule } from '../shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';

@NgModule({
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedAngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactmanagerRoutingModule
  ]
})
export class ContactmanagerModule { }
