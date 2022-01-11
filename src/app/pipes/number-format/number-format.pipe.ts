import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: string,value2:string): string {
    console.log('value',value)
    return value+' Bs.' + value2;
  }

}
