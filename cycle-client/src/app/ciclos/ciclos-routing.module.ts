import { CadastroGeralCicloComponent } from './cadastro-geral-ciclo/cadastro-geral-ciclo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './../seguranca/auth.guard';

import { CicloPesquisaComponent } from './ciclo-pesquisa/ciclo-pesquisa.component';
import { CicloCadastroComponent } from './ciclo-cadastro/ciclo-cadastro.component';

import { ToastyModule } from 'ng2-toasty';
import { AuthConfig } from 'angular2-jwt';


const routes: Routes = [
  {
    path: 'ciclos',
    component: CicloPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  },

  {
    path: 'ciclos/novo',
    component: CadastroGeralCicloComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  },

  {
    path: 'ciclos/:codigo',
    component: CadastroGeralCicloComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CiclosRoutingModule { }
