import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosRoutingModule } from './ciclos-routing.module';
import { CicloPesquisaComponent } from './ciclo-pesquisa/ciclo-pesquisa.component';
import { CicloCadastroComponent } from './ciclo-cadastro/ciclo-cadastro.component';

import { InputTextModule, ButtonModule, InputMaskModule, DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CiclosRoutingModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    DataTableModule
  ],
  declarations: [
    CicloPesquisaComponent,
    CicloCadastroComponent
  ]
})
export class CiclosModule { }
