import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtEditing'
})
export class TxtEditingPipe implements PipeTransform {

  transform(str: string, lengthText: number): string {
    return str.length > lengthText ? `${str.substring(0, lengthText)} ...` : str;
  }

}
