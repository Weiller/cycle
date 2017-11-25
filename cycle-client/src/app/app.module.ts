import { Materia } from './../entity/materia.entity';
import { MateriaService } from './service/materia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {DataTableModule, SharedModule, InputTextModule, ButtonModule,
  GrowlModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { MateriaComponent } from './materia/materia.component';
import { MateriaCadastroComponent } from './materia-cadastro/materia-cadastro.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'materias', component: MateriaComponent},
  {path: 'materias/novo', component: MateriaCadastroComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    MateriaCadastroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
