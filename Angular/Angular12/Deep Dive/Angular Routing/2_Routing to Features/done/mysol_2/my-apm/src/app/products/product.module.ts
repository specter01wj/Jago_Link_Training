import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';


import { ProductListComponent } from './product-list/product-list.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
