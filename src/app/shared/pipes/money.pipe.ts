import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyPipe',
})
export class MoneyPipe implements PipeTransform {
  transform(
    value: number | string,
  ): string {
    if(value===null){
      return '';
    }
    if(typeof value  === 'string' ){
      return value;
    }

    if(typeof value  === 'number' ){
      return `$${value} MXN`
    }
    
    return value;
  }
}
