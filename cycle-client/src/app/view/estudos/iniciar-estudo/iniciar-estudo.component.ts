import { CicloDTO } from './../../../dto/cicloDTO.entity';
import { ToastyService } from 'ng2-toasty';
import { EstudoService } from './../../../service/estudo.service';
import { CicloService } from './../../../service/ciclo.service';
import { Materia } from './../../../entity/materia.entity';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iniciar-estudo',
  templateUrl: './iniciar-estudo.component.html',
  styleUrls: ['./iniciar-estudo.component.css']
})
export class IniciarEstudoComponent implements OnInit {

  @Input() materiaSelecionada = new Materia();

  @Input() ciclo = new CicloDTO();

  @Input() segundos = 0;
  @Input() minutos = 0;
  @Input() horas = 0;
  contador: any;

  constructor(private estudoService: EstudoService,
    private toasty: ToastyService) { }

  ngOnInit() {
  }

  materiaSelecionadaEvento(materia: Materia) {
    this.materiaSelecionada = materia;
  }

  iniciarContagem() {
    this.contador = setInterval(() => {
      this.segundos++;

      if (this.segundos === 12) {
        this.minutos++;
        this.segundos = 0;
      }

      if (this.minutos === 60) {
        this.horas++;
        this.minutos = 0;
      }

    }, 1000);
  }

  salvarContagem() {
    this.materiaSelecionada.totalHorasEstudadas = this.formatarHoras();
    this.materiaSelecionada.idCiclo = this.ciclo.codigo;

    this.estudoService.salvarContagem(this.materiaSelecionada).subscribe(() => {
      this.toasty.success('Contagem salva com sucesso.');
    });
  }

  public formatarHoras(): string {
    return `${this.horas}:${this.minutos}:${this.segundos}`;
  }

  pararContagem() {
    this.salvarContagem();
    clearInterval(this.contador);
    this.segundos = 0;
    this.minutos = 0;
  }
}
