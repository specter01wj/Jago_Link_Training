import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductEditGuardService } from './edit/product-edit-guard.service';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent },
  {
    path: ':id/edit',
    canDeactivate: [ ProductEditGuardService ],
    component: ProductEditComponent
  }
];

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductShellComponent, ProductShellListComponent, ProductShellDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
