import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  public transform(value: any, args?: any): any {
    if (value) {
      const arrayHoras = value.split(':');
      const horasSemZero = Number(arrayHoras[0]);
      const minutosSemZero = Number(arrayHoras[1]);

      let horas = horasSemZero < 10 ? `0${horasSemZero}` : horasSemZero;
      let minutos = minutosSemZero[1] < 10 ? `0${minutosSemZero}` : minutosSemZero;

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
