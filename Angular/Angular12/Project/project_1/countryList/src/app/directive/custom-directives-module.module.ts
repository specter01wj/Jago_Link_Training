import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
  	MyIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyIfDirective
  ]
})
export class CustomDirectivesModuleModule { }
