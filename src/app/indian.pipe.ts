import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indian'
})
export class IndianPipe implements PipeTransform {

  transform(val): string {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Crores';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lakhs';
    } else if (val >= 1000) {
      val = (val / 1000).toFixed(2) + ' Thousand';
    }
    return val;
  }

}
