import { AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaPesquisaComponent } from './materia-pesquisa/materia-pesquisa.component';
import { MateriaCadastroComponent } from './materia-cadastro/materia-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';


const routes: Routes = [
  {
    path: 'materias',
    component: MateriaPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  },
  {
    path: 'materias/novo',
    component: MateriaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERAL'] }
  },
  {
    path: 'materias/:id',
    component: MateriaCadastroComponent,
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
export class MateriasRoutingModule { }
