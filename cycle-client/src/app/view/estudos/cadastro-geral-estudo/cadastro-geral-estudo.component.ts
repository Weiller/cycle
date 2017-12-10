import { Materia } from './../../../entity/materia.entity';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { CicloService } from './../../../service/ciclo.service';
import { CicloDTO } from './../../../dto/cicloDTO.entity';

@Component({
  selector: 'app-cadastro-geral-estudo',
  templateUrl: './cadastro-geral-estudo.component.html',
  styleUrls: ['./cadastro-geral-estudo.component.css']
})
export class CadastroGeralEstudoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private title: Title,
  private cicloService: CicloService) { }

  ciclo = new CicloDTO();
  materiaSelecionada = new Materia();
  segundos = 0;
  minutos = 0;
  horas = 0;

  ngOnInit() {

    const codigoCiclo = this.route.snapshot.params['id'];

    if (codigoCiclo) {
      this.buscarCiclo(codigoCiclo);
    } else {
      this.title.setTitle('Cadastro de matéria');
    }
  }

  iniciarTempo() {
    if (this.materiaSelecionada.horasEstudadas) {
      const hora: string[] = this.materiaSelecionada.horasEstudadas.split(':');
      this.horas = Number(hora[0]);
      this.minutos = Number(hora[1]);
      this.segundos = Number(hora[2]);
    }
  }

  materiaSelecionadaEvento(materia: Materia) {
    this.materiaSelecionada = materia;
    this.iniciarTempo();
  }

  buscarCiclo(id: number) {
    this.cicloService.consultarCiclo(id).subscribe(response => {
      this.ciclo = response;
      this.title.setTitle(`Estudo ciclo: ${this.ciclo.nomeCiclo}`);
    });
  }
}
