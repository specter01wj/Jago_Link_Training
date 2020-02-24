import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import {SearchFilterPipe} from './common/search-filter.pipe';
import { StoreModule } from '@ngrx/store';
// import { selectEmployeeReducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent
    // SearchFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ employee: selectEmployeeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
