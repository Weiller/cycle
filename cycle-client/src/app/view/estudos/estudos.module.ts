import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EstudosRoutingModule } from './estudos-routing.module';
import { IniciarEstudoComponent } from './iniciar-estudo/iniciar-estudo.component';
import { EstudoPesquisaComponent } from './estudo-pesquisa/estudo-pesquisa.component';

import {ToastyModule} from 'ng2-toasty';

import {DataTableModule, InputTextModule, ButtonModule,
  GrowlModule, TooltipModule} from 'primeng/primeng';
import { MateriaPesquisaComponent } from './materia-pesquisa/materia-pesquisa.component';
import { CadastroGeralEstudoComponent } from './cadastro-geral-estudo/cadastro-geral-estudo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    ToastyModule,
    EstudosRoutingModule,
    TooltipModule
  ],
  declarations: [
    EstudoPesquisaComponent,
    IniciarEstudoComponent,
    MateriaPesquisaComponent,
    CadastroGeralEstudoComponent,
  ]
})
export class EstudosModule { }
