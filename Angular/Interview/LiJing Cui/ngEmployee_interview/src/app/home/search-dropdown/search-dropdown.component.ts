/**
 * TODO: implement a dropdon component here and hook up with search input from homepage,
 * 1. whenever search input changes, the dropdown will only show employees with his/her name
 * containing the search text
 * 2. employee item in dropdown should be clickable, clicking makes current employee to be selected
 */
import { Component, OnInit } from '@angular/core';

import { IEmployee } from '../../services/employee/employee';
import { EmployeeService } from '../../services/employee/employee.service';


@Component({
  selector: 'search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropDownComponent { 

	errorMessage: string;
	usersArray: Array = [];
	products: IEmployee[] = [];


	constructor(private _employeeService: EmployeeService) {

    }

	ngOnInit(): void {
        this._employeeService.getProducts()
            .subscribe(
                products => {
                    // this.products = products;
                    products.data.forEach(element => {
				      this.usersArray.push(element.employee_name);
				    });
                },
                error => this.errorMessage = <any>error
            );
    }



}
