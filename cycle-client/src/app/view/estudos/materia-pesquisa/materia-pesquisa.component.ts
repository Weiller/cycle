import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CicloDTO } from './../../../dto/cicloDTO.entity';
import { Materia } from './../../../entity/materia.entity';
import { MateriaService } from './../../../service/materia.service';
import { Ciclo } from './../../../entity/ciclo.entity';

@Component({
  selector: 'app-materia-pesquisa',
  templateUrl: './materia-pesquisa.component.html',
  styleUrls: ['./materia-pesquisa.component.css']
})
export class MateriaPesquisaComponent implements OnInit {

  constructor(private materiaService: MateriaService) { }

  @Input() materias: Materia[] = [];

  materiaSelecionada = new Materia();

  @Output() emitirMateriaSeleciona = new EventEmitter();

  ngOnInit() {
  }

  emitirMateria(event) {
    this.emitirMateriaSeleciona.emit(this.materiaSelecionada);
  }

}
