import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { IEmployee } from '../services/employee/employee';

 /**
  * TODO:
  * 1. Integrate with employee service
  * 2. Show selected employee card when an employee is selected from the dropdown
  * 3. Try to fire an action when an employee get selected, and read the selected
  * employee information from application state
  */

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchResult: IEmployee[] = [];
  inputField: string;


  constructor(private employeeService:EmployeeService ){}
  onSearch(keywords:string){
    console.log('keywords:',keywords);
    this.inputField = keywords;
    
    this.employeeService.getProducts().subscribe(res=>{
      this.searchResult = res;
    }
      )
  }

}
