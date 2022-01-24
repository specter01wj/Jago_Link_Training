import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator'
})
export class ThousandSeparatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value !== undefined && value !== null) {
      return value.toLocaleString();
    } else {
      return '';
    }
  }

}
