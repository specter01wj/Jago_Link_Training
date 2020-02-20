import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


// import { EmployeeService } from './services/index';
import { EmployeeService } from './services/employee/employee.service';

import { SearchFilterPipe } from './common/search-filter.pipe';
// import { selectEmployeeReducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // StoreModule.forRoot({ employee: selectEmployeeReducer })
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
