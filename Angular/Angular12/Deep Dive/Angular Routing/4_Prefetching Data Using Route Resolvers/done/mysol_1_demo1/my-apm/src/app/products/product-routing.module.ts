import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent, 
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
