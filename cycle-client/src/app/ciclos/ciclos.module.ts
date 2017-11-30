import { CiclosRoutingModule } from './ciclos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CicloPesquisaComponent } from './ciclo-pesquisa/ciclo-pesquisa.component';
import { CicloCadastroComponent } from './ciclo-cadastro/ciclo-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    CiclosRoutingModule
  ],
  declarations: [CicloPesquisaComponent, CicloCadastroComponent]
})
export class CiclosModule { }
