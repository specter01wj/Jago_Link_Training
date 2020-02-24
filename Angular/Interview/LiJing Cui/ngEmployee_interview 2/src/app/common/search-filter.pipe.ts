import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../services/employee/employee';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  /*transform(value: any, ...args: any[]): any {
    return null;
  }*/
  transform(items: any[], inputText: string): any[] {

    if (!items) {
      return null;
    }
    if (!inputText) {
      return items;
    }
    inputText = inputText.toLocaleLowerCase();

    return items.data.filter(it => {
      return it.employee_name.toLocaleLowerCase().includes(inputText);
    });
  }

}