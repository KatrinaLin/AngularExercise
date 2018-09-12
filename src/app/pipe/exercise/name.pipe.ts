import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, format?: string): string {
    let words = value.split(" ");
    if (format === "camelCase") {
      return words.map(word => {
        let chars = word.split('');
        chars[0] = chars[0].toUpperCase();
        return chars.join('');
      }).join('');
    }
    return words.join("_");
  }

}
