import { MateriaCadastroComponent } from './materias/materia-cadastro/materia-cadastro.component';
import { MateriaPesquisaComponent } from './materias/materia-pesquisa/materia-pesquisa.component';
import { MateriasModule } from './materias/materias.module';
import { MateriaService } from './service/materia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import {DataTableModule, SharedModule, InputTextModule, ButtonModule,
  GrowlModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';

const routes: Routes = [
  {path: 'materias', component: MateriaPesquisaComponent},
  {path: 'materias/novo', component: MateriaCadastroComponent},
  {path: 'materias/:id', component: MateriaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
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
    RouterModule.forRoot(routes),
  ],
  providers: [MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
