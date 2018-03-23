import { TimerPipe } from './../../pipe/timer.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../../shared/shared.module';
import { CiclosRoutingModule } from './ciclos-routing.module';
import { CicloPesquisaComponent } from './ciclo-pesquisa/ciclo-pesquisa.component';
import { CicloCadastroComponent } from './ciclo-cadastro/ciclo-cadastro.component';
import { MateriasCicloComponent } from './materias-ciclo/materias-ciclo.component';
import { CadastroGeralCicloComponent } from './cadastro-geral-ciclo/cadastro-geral-ciclo.component';

import { InputTextModule, ButtonModule, InputMaskModule, DataTableModule, FieldsetModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CiclosRoutingModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    DataTableModule,
    FieldsetModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    CicloPesquisaComponent,
    CicloCadastroComponent,
    MateriasCicloComponent,
    CadastroGeralCicloComponent
  ],

  providers: [
    TimerPipe
  ]
})
export class CiclosModule { }
