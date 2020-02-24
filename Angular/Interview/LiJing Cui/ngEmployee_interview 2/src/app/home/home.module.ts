import { SearchDropDownComponent } from './search-dropdown/search-dropdown.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee/employee.service';

import {SearchFilterPipe} from '../common/search-filter.pipe';

@NgModule({
  declarations: [HomeComponent, SearchInputComponent, SearchDropDownComponent, SearchFilterPipe],
  imports: [HomeRoutingModule, CommonModule],
  providers: [EmployeeService],
})
export class HomeModule { }
