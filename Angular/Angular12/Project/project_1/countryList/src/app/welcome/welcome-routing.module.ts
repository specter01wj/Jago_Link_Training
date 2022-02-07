import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      { path: 'page-not-found', component: PageNotFoundComponent }
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
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
