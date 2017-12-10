import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { IniciarEstudoComponent } from './view/estudos/iniciar-estudo/iniciar-estudo.component';
import { EstudoPesquisaComponent } from './view/estudos/estudo-pesquisa/estudo-pesquisa.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
