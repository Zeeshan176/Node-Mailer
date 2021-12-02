import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition',
  pure: true
})
export class AdditionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + args;
  }

}
