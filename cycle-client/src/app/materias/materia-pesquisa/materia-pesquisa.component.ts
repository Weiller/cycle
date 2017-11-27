import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ToastyService } from 'ng2-toasty';
import { Mensagens } from './../../model/mensagens';
import { Materia } from './../../entity/materia.entity';
import { MateriaService } from '../../service/materia.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-materia',
  templateUrl: './materia-pesquisa.component.html',
  styleUrls: ['./materia-pesquisa.component.css']
})
export class MateriaPesquisaComponent implements OnInit {

  msgs: Message[] = [];
  materias = [];
  materia: Materia = new Materia();

  constructor(private materiaService: MateriaService,
  private toasty: ToastyService,
  private title: Title,
  private errorHandle: ErrorHandlerService) { }

  ngOnInit() {
    this.consultar();
    this.title.setTitle('Pesquisa de lançamento');
  }

  consultar() {
    this.materiaService.consultar().then(
      materias => {
        console.log(materias);
        this.materias = materias;
      }
    ).catch(erro => {
      this.errorHandle.handle(erro);
    });
  }

  limpar() {
    this.materia = new Materia();
  }

  excluir(materia: Materia) {
    this.materiaService.deletar(materia.id).then(res => {
      this.toasty.success(`Matéria ${res.nome} excluída com sucesso.`);
      this.consultar();
    });
  }

  selecionar(materia: Materia) {
    this.materia = materia;
  }
}
