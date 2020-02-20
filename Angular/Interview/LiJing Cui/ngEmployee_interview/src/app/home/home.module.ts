import { SearchDropDownComponent } from './search-dropdown/search-dropdown.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, SearchInputComponent, SearchDropDownComponent],
  imports: [HomeRoutingModule, CommonModule],
  providers: [],
})
export class HomeModule { }
