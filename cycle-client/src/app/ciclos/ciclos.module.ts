import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosRoutingModule } from './ciclos-routing.module';
import { CicloPesquisaComponent } from './ciclo-pesquisa/ciclo-pesquisa.component';
import { CicloCadastroComponent } from './ciclo-cadastro/ciclo-cadastro.component';

import { InputTextModule, ButtonModule, InputMaskModule, DataTableModule, FieldsetModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriasCicloComponent } from './materias-ciclo/materias-ciclo.component';
import { CadastroGeralCicloComponent } from './cadastro-geral-ciclo/cadastro-geral-ciclo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CiclosRoutingModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    DataTableModule,
    FieldsetModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CicloPesquisaComponent,
    CicloCadastroComponent,
    MateriasCicloComponent,
    CadastroGeralCicloComponent
  ]
})
export class CiclosModule { }
