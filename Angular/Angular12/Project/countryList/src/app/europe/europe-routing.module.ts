import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EuropeListComponent } from './europe-list/europe-list.component';
import { EuropeDetailComponent } from './europe-detail/europe-detail.component';

const routes: Routes = [
  { path: '', component: EuropeListComponent }, 
  { path: ':id', component: EuropeDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EuropeRoutingModule { }
