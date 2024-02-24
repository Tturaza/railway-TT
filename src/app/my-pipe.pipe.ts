import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  transform(input: string): string {
    if (input) {
      const chars = input.split(''); 
      for (let i = 4; i <= 11; i++) {
        chars[i] = '*';
      }
      const result = chars.join(''); 
      return result;
    } else {
      return input; 
    }
  }
}
