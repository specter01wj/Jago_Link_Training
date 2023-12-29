import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
// import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
