import { InputTextModule, ButtonModule, GrowlModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CicloService } from './../service/ciclo.service';
import { Title, BrowserModule } from '@angular/platform-browser';
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
    FormsModule,
    BrowserModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    ToastyModule.forRoot()
  ],
  declarations: [PaginaNaoEncontradaComponent,
    NavbarComponent],

    providers: [
      JwtHelper,
      Title,
      ErrorHandlerService,
      MateriaService,
      SegurancaService,
      CicloService
    ],

    exports: [
      NavbarComponent,
      ToastyModule
    ]
})
export class CoreModule { }
