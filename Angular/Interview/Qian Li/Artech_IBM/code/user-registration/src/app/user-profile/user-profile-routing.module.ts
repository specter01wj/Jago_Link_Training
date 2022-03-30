import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from '../user/auth.guard';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProfileComponent
      },
    ]
  },

];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileRoutingModule { }
