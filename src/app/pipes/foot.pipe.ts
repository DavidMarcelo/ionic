import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foot'
})
export class FootPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
