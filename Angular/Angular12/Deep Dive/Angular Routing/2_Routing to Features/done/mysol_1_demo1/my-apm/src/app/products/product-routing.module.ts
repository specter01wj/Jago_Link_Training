import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
