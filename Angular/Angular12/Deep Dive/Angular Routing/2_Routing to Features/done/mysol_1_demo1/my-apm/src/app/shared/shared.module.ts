import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
  	StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent
  ]
})
export class SharedModule { }
