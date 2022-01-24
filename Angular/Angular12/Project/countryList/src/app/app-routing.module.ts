import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { WelcomeComponent } from './welcome/welcome.component';
// import { PageNotFoundComponent } from './welcome/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
	// { path: 'welcome', component: WelcomeComponent },
	{
    path: 'europe',
    loadChildren: () => import('./europe/europe.module').then(m => m.EuropeModule)
  },
  {
    path: 'asia',
    loadChildren: () => import('./asia/asia.module').then(m => m.AsiaModule)
  },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
