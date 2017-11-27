import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurancaService } from './../seguranca/seguranca.service';
import { MateriaService } from './../service/materia.service';
import { ErrorHandlerService } from './error-handler.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { JwtHelper } from 'angular2-jwt';
import { NavbarComponent } from './navbar/navbar.component';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot()
  ],
  declarations: [PaginaNaoEncontradaComponent,
    NavbarComponent],

    providers: [
      JwtHelper,
      Title,
      ErrorHandlerService,
      MateriaService,
      SegurancaService
    ],

    exports: [
      NavbarComponent,
      ToastyModule
    ]
})
export class CoreModule { }
