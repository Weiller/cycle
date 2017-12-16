import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerSeconds'
})
export class TimerSecondsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const arrayHoras = value.split(':');

      const horas = arrayHoras[0] < 10 ? `0${arrayHoras[0]}` : arrayHoras[0];
      const minutos = arrayHoras[1] < 10 ? `0${arrayHoras[1]}` : arrayHoras[1];
      const segundos = arrayHoras[2] < 10 ? `0${arrayHoras[2]}` : arrayHoras[2];

      return `${horas}:${minutos}:${segundos}`;
    }
  }
}
