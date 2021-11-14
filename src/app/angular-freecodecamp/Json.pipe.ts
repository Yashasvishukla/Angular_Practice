import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Json'
})
export class JsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'Result has been modified with Pipe and concatinated ' + value;
    console.log(args);
  }

}
