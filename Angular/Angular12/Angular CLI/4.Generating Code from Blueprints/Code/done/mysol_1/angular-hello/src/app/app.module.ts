import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box/search-box.directive';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LogoutModule } from './logout/logout.module';
import { SearchInputDirective } from './search/search-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective,
    InitCapsPipe,
    SearchInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
