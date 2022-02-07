import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsiaListComponent } from './asia-list/asia-list.component';
import { AsiaDetailComponent } from './asia-detail/asia-detail.component';

const routes: Routes = [
  { path: '', component: AsiaListComponent },
  { path: ':id', component: AsiaDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AsiaRoutingModule { }
