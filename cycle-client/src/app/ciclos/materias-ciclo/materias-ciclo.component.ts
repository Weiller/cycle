import { Materia } from './../../entity/materia.entity';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-materias-ciclo',
  templateUrl: './materias-ciclo.component.html',
  styleUrls: ['./materias-ciclo.component.css']
})
export class MateriasCicloComponent implements OnInit {

  @Input() materias: Materia[] = [];

  @Output() materiaAdicionada = new EventEmitter();

  @Output() materiaExcluida = new EventEmitter();

  materia = new Materia();
  constructor() { }

  ngOnInit() {
  }

  inserirMateria() {
    this.materias.push(this.materia);
    this.materiaAdicionada.emit(this.materia);
    this.materia = new Materia();
  }

  removerMateria(materia: Materia) {
    const index = this.materias.indexOf(materia);
    if (index !== -1) {
      this.materias.splice(index, 1);
    }

    this.materiaExcluida.emit(materia);
  }

}
