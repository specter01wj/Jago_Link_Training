import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './service/selective-strategy.service';

// const routes: Routes = ;

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    {
      path: 'products',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./products/product.module').then(m => m.ProductModule)
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ], { preloadingStrategy: SelectiveStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
