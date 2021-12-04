import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { Orders1Component } from './orders1/orders1.component';
import { Orders2Component } from './orders2/orders2.component';
import { SearchBoxDirective } from './common/search-box.directive';

import { SlaesDataService } from './service/slaes-data.service';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LogoutModule } from './logout/logout.module';
import { SearchDirective } from './common/search.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Orders1Component,
    Orders2Component,
    SearchBoxDirective,
    InitCapsPipe,
    SearchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoutModule
  ],
  providers: [SlaesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
