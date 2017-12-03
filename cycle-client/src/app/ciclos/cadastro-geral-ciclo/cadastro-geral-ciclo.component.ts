import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { CicloService } from './../../service/ciclo.service';
import { CicloDTO } from './../../entity/cicloDTO.entity';
import { Materia } from './../../entity/materia.entity';
import { Ciclo } from './../../entity/ciclo.entity';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro-geral-ciclo',
  templateUrl: './cadastro-geral-ciclo.component.html',
  styleUrls: ['./cadastro-geral-ciclo.component.css']
})
export class CadastroGeralCicloComponent implements OnInit {

  constructor(private cicloService: CicloService,
    private toasty: ToastyService,
    private handleError: ErrorHandlerService,
    private route: ActivatedRoute) { }

  ciclo: Ciclo = new Ciclo();
  materias: Materia[] = [];
  materiasExcluir: Materia[] = [];

  ngOnInit() {
    const codigo = this.route.snapshot.params['codigo'];

    if (codigo) {
      this.consultarCiclo(codigo);
    }
  }

  materiaAdicionada(materia: Materia) {
    this.materias.push(materia);
  }

  materiaExcluida(materia: Materia) {
    const index = this.materias.indexOf(materia);

    if (index !== -1) {
      this.materias.splice(index, 1);
    }
    if (materia.id) {
      this.materiasExcluir.push(materia);
    }
  }

  consultarCiclo(codigo: number) {
    this.cicloService.consultarCiclo(codigo).subscribe(response => {
      this.preencherMaterias(response.materias);
      this.preencherCiclo(response);
    }, error => {
      this.handleError.handle(error);
    });
  }

  salvar() {
    if (!this.ciclo.codigo) {
      this.cadastrar();
    } else {
      this.alterar();
    }
  }

  cadastrar() {
    const cicloDTO = this.preencherCicloDto();
    this.cicloService.cadastrar(cicloDTO).subscribe(response => {
      this.toasty.success('Ciclo cadastrado com sucesso.');
    }, error => {
      this.handleError.handle(error);
    });
  }

  alterar() {
    const cicloDTO = this.preencherCicloDto();
    this.cicloService.alterar(cicloDTO).subscribe(response => {
      this.toasty.success('Ciclo alterado com sucesso.');
    }, error => {
      this.handleError.handle(error);
    });
  }

  preencherMaterias(materias: Materia[]) {
    this.materias = materias;
  }

  preencherCiclo(ciclo: Ciclo) {
    this.ciclo.codigo = ciclo.codigo;
    this.ciclo.nomeCiclo = ciclo.nomeCiclo;
    this.ciclo.dataCriacao = ciclo.dataCriacao;
    this.ciclo.totalHoras = ciclo.totalHoras;
  }

  preencherCicloDto(): CicloDTO {
    const cicloDto = new CicloDTO();
    cicloDto.codigo = this.ciclo.codigo;
    cicloDto.nomeCiclo = this.ciclo.nomeCiclo;
    cicloDto.totalHoras = this.ciclo.totalHoras;
    cicloDto.materias = this.materias;
    cicloDto.materiasExcluir = this.materiasExcluir;
    return cicloDto;
  }

}
