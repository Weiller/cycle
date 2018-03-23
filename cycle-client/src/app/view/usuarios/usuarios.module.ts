import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  declarations: [CadastroComponent]
})
export class UsuariosModule { }
