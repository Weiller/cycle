import { CadastroGeralEstudoComponent } from './cadastro-geral-estudo/cadastro-geral-estudo.component';
import { AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './../../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudoPesquisaComponent } from './estudo-pesquisa/estudo-pesquisa.component';
import { IniciarEstudoComponent } from './iniciar-estudo/iniciar-estudo.component';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';

const routes: Routes = [
  {
    path: 'estudos',
    component: EstudoPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  },
  {
    path: 'estudos/:id',
    component: CadastroGeralEstudoComponent,
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
export class EstudosRoutingModule { }
