import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(num: string): string {
    num = '+' + num
    const countryCode: string = num.slice(0, 2)
    const areaCode: string = num.slice(2, 5)
    const startSection: string = num.slice(5, 8)
    const midSection: string = num.slice(8,10)
    const lastSection: string = num.slice(9,11)

      return `${countryCode} (${areaCode}) ${startSection}-${midSection}-${lastSection} `;
  }

}
