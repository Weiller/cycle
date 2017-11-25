import { Materia } from './../../entity/materia.entity';
import { MateriaService } from './materia.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materias = [];
  materia: Materia = new Materia();
  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.materiaService.consultar().then(
      materias => {
        console.log(materias);
        this.materias = materias;
      }
    );
  }

  limpar() {
    this.materia = new Materia();
  }

  cadastrarMateria() {
    this.materiaService.cadastrar(this.materia).then(res => {
      if (res) {
        this.limpar();
        this.consultar();
      }
    });
  }

  excluir(materia: Materia) {
    this.materiaService.deletar(materia.id).then(res => {
      this.consultar();
    });
  }

  atualizar(materia: Materia) {
    this.materia = materia;
  }
}
