import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const arrayHoras = value.split(':');

      let horas = arrayHoras[0] < 10 ? `0${arrayHoras[0]}` : arrayHoras[0];
      let minutos = arrayHoras[1] < 10 ? `0${arrayHoras[1]}` : arrayHoras[1];

      if (arrayHoras[0] == 0) {
        horas = '00';
      }

      if (arrayHoras[1] == 0) {
        minutos = '00';
      }

      return `${horas}:${minutos}`;
    }

    return null;
  }
}
