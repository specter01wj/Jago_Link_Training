import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';

// const routes: Routes = ;

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    {
      path: 'products',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./products/product.module').then(m => m.ProductModule)
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ], { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
