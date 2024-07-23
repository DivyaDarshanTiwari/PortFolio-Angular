import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthControl',
  standalone: true
})
export class LengthControlPipe implements PipeTransform {

  transform(value: string, lenght:number): string {
    if(value.length > lenght){
      return value.slice(0,lenght)+"....";
    }
    return value;
  }

}
