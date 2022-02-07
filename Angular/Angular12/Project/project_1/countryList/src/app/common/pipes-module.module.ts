import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThousandSeparatorPipe } from './thousand-separator.pipe';

@NgModule({
  declarations: [
  	ThousandSeparatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThousandSeparatorPipe
  ]
})
export class PipesModuleModule { }
