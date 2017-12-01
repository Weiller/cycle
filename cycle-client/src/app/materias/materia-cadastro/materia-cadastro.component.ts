import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Message } from 'primeng/primeng';
import { Mensagens } from './../../model/mensagens';
import { Materia } from './../../entity/materia.entity';
import { MateriaService } from '../../service/materia.service';
import { Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-materia-cadastro',
  templateUrl: './materia-cadastro.component.html',
  styleUrls: ['./materia-cadastro.component.css']
})
export class MateriaCadastroComponent implements OnInit {

  msgs: Message[] = [];
  materia: Materia = new Materia();

  constructor(private materiaService: MateriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService,
    private title: Title,
    private erroHandler: ErrorHandlerService) { }


  ngOnInit() {

    const codigoMateria = this.route.snapshot.params['id'];

    if (codigoMateria) {
      this.buscarMateria(codigoMateria);
    } else {
      this.title.setTitle('Cadastro de matéria');
    }
  }

  salvar() {
    if (!this.materia.id) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {
    this.materiaService.cadastrar(this.materia).subscribe(res => {
      if (res) {
        this.toasty.success(`Matéria ${res.nome} cadastrada com sucesso`);
        this.router.navigate(['/materias']);
      }
    }, error => {
      this.erroHandler.handle(error);
    });
  }

  atualizar() {
    this.materiaService.atualizar(this.materia).subscribe(res => {
      this.toasty.success(`Matéria atualizada com sucesso.`);
      this.router.navigate(['/materias']);
    }, error => {
      if (error.mensagemUsuario) {
        this.msgs.push(Mensagens.erro(error.mensagemUsuario, 'Alteração de matéria'));
      } else {
        this.erroHandler.handle(error);
      }
    });
  }

  buscarMateria(id: number) {
    this.materiaService.consultarMateria(id).then(res => {
      this.materia = res;
      this.title.setTitle(`Edição de matéria: ${this.materia.nome}`);
    });
  }

  limpar() {
    this.materia = new Materia();
  }
}
