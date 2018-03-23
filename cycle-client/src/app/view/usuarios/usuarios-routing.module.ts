import { AuthGuard } from './../../seguranca/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios/novo',
    component: CadastroComponent,
    data: { roles: ['ROLE_GERAL'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
