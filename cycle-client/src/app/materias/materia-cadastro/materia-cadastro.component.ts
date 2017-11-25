import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Message} from 'primeng/primeng';
import { Mensagens } from './../../model/mensagens';
import { Materia } from './../../entity/materia.entity';
import { MateriaService } from '../../service/materia.service';

@Component({
  selector: 'app-materia-cadastro',
  templateUrl: './materia-cadastro.component.html',
  styleUrls: ['./materia-cadastro.component.css']
})
export class MateriaCadastroComponent implements OnInit {

  msgs: Message[] = [];
  materia: Materia = new Materia();

  constructor(private materiaService: MateriaService,
  private route: ActivatedRoute) { }


  ngOnInit() {
    if (this.route.snapshot.params['id']) {
        this.buscarMateria(this.route.snapshot.params['id']);
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
    this.materiaService.cadastrar(this.materia).then(res => {
      if (res) {
        this.msgs.push(Mensagens.sucesso(`Matéria ${res.nome} cadastrada com sucesso`, 'Cadastro de Matéria'));
        this.limpar();
      }
    });
  }

  atualizar() {
    this.materiaService.atualizar(this.materia)
    .then(res => {
      this.limpar();
      this.msgs.push(Mensagens.MENSAGEM_ALTERAR_MATERIA_SUCESSO);
    })
    .catch(error => {
      if (error.mensagemUsuario) {
        this.msgs.push(Mensagens.erro(error.mensagemUsuario, 'Alteração de matéria'));
      } else {
        this.msgs.push(Mensagens.MENSAGEM_ALTERAR_MATERIA_ERRO);
      }
    });
  }

  buscarMateria(id: number) {
    this.materiaService.consultarMateria(id).then(res => {
      this.materia = res;
    });
  }

  limpar() {
    this.materia = new Materia();
  }
}
