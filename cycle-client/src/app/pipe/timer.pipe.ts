import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const hora: string[] = value.split(':');
      return `${hora[0]}:${hora[1]}`;
    }

    return null;
  }
}
