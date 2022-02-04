import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MessageRoutingModule { }
