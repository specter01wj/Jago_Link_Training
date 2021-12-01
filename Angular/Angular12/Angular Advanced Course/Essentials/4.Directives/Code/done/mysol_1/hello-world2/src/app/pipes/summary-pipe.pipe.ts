import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryPipe'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if(!value) {
    	return null;
    }

    let actualLimit = limit ? limit : 50;

    return value.substr(0, actualLimit) + '...';
  }

}
