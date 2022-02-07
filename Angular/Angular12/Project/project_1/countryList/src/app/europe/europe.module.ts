import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropeRoutingModule } from './europe-routing.module';
import { PipesModuleModule } from '../common/pipes-module.module';

import { EuropeListComponent } from './europe-list/europe-list.component';
import { EuropeDetailComponent } from './europe-detail/europe-detail.component';

@NgModule({
  declarations: [
  	EuropeListComponent, 
  	EuropeDetailComponent
  ],
  imports: [
    CommonModule,
    EuropeRoutingModule,
    PipesModuleModule
  ]
})
export class EuropeModule { }
