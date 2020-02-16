import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{path: '', component: UserComponent},
			{path: 'blast', component: EmailBlastComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
