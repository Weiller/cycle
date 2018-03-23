import { TimerPipe } from './../../../pipe/timer.pipe';
import { ToastyService } from 'ng2-toasty';
import { ValidacaoFormException } from './../../../exception/validacao.form.exception';
import { Materia } from './../../../entity/materia.entity';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-materias-ciclo',
  templateUrl: './materias-ciclo.component.html',
  styleUrls: ['./materias-ciclo.component.css']
})
export class MateriasCicloComponent implements OnInit {

  @Input() materias: Materia[] = [];

  @Output() materiaAdicionada = new EventEmitter();

  @Output() materiaExcluida = new EventEmitter();

  @Output() materiaAlterada = new EventEmitter();

  formGroup: FormGroup;

  materia = new Materia();
  constructor(private toasty: ToastyService,
    private fb: FormBuilder,
    private timer: TimerPipe) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      'nomeMateria': ['', Validators.required],
      'horas': [null, Validators.required]
    });
  }

  adicionarMateria() {
    try {
      this.preValidate();
      this.materias.push(this.materia);
      this.materiaAdicionada.emit(this.materia);
      this.materia = new Materia();
      this.formGroup.reset();
    } catch (e) {
      this.formGroup.controls['nomeMateria'].markAsTouched();
      this.formGroup.controls['horas'].markAsTouched();
      this.toasty.error(e.message);
    }
  }

  alterarMateria(materia: Materia) {
    this.preValidate();
    const index = this.materias.indexOf(this.materia);

    if (index !== -1) {
      this.materias.splice(index, 1);
      this.materias.push(materia);
    }
  }

  preValidate() {
    this.verificarAtributo(this.materia.nome, 'Matéria');
    this.verificarAtributo(this.materia.horasEstudoCiclo, 'Horas');
  }

  verificarAtributo(valor: any, campo: string) {
    if (!valor) {
      throw new ValidacaoFormException(`O campo ${campo} é obrigatório.`);
    }
  }

  removerMateria(materia: Materia) {
    const index = this.materias.indexOf(materia);
    if (index !== -1) {
      this.materias.splice(index, 1);
    }

    this.materiaExcluida.emit(materia);
  }

  selecionarMateria(materia: Materia) {
    const index = this.materias.indexOf(materia);

    if (index !== -1) {
      this.materias.splice(index, 1);
      const horaEstudoFormatada = this.timer.transform(materia.horasEstudoCiclo);
      materia.horasEstudoCiclo = horaEstudoFormatada;
      this.materia = materia;
      this.materiaAlterada.emit(materia);
    }
  }
}
