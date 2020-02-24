/**
 * TODO: implement a dropdon component here and hook up with search input from homepage,
 * 1. whenever search input changes, the dropdown will only show employees with his/her name
 * containing the search text
 * 2. employee item in dropdown should be clickable, clicking makes current employee to be selected
 */
import { Component, Input } from '@angular/core';
// import { SearchFilterPipe } from '../../common/search-filter.pipe';
import { IEmployee } from '../../services/employee/employee';

@Component({
  selector: 'search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropDownComponent { 
  @Input() searchResult: IEmployee[];
  @Input('input-field') inputField: string;
}
