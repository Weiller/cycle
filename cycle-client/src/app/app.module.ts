import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MateriaCadastroComponent } from './materias/materia-cadastro/materia-cadastro.component';
import { MateriaPesquisaComponent } from './materias/materia-pesquisa/materia-pesquisa.component';
import { MateriasModule } from './materias/materias.module';
import { MateriaService } from './service/materia.service';


import {ToastyModule} from 'ng2-toasty';
import {DataTableModule, SharedModule, InputTextModule, ButtonModule,
  GrowlModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    MateriasModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    AppRoutingModule,
    ToastyModule.forRoot()
  ],
  providers: [MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
