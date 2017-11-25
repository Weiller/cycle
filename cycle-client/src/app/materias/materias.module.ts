import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaPesquisaComponent } from './materia-pesquisa/materia-pesquisa.component';
import { MateriaCadastroComponent } from './materia-cadastro/materia-cadastro.component';
import {Routes, RouterModule} from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';


import {DataTableModule, SharedModule, InputTextModule, ButtonModule,
  GrowlModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    RouterModule,
    ToastyModule
  ],
  declarations: [
    MateriaPesquisaComponent,
    MateriaCadastroComponent
  ],
  exports: [
    MateriaPesquisaComponent,
    MateriaCadastroComponent
  ]
})
export class MateriasModule { }
