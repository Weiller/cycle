import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './../core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';


  const routes: Routes = [
    {
      path: 'login',
      component: LoginFormComponent
    },

    {
      path: 'pagina-nao-autorizada',
      component: NaoAutorizadoComponent
    }
  ];


@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
