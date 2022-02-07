import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsiaRoutingModule } from './asia-routing.module';
import { PipesModuleModule } from '../common/pipes-module.module';
import { CustomDirectivesModuleModule } from '../directive/custom-directives-module.module';

import { AsiaListComponent } from './asia-list/asia-list.component';
import { AsiaDetailComponent } from './asia-detail/asia-detail.component';

@NgModule({
  declarations: [
  	AsiaListComponent, 
  	AsiaDetailComponent
  ],
  imports: [
    CommonModule,
    AsiaRoutingModule,
    PipesModuleModule,
    CustomDirectivesModuleModule
  ]
})
export class AsiaModule { }
