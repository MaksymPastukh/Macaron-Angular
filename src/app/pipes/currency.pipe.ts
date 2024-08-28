import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCustom'
})
export class CurrencyPipe implements PipeTransform {

  transform(amount: string): string {
    return `${amount} руб.`
  }

}
