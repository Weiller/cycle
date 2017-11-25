import { MateriaService } from './materia/materia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {DataTableModule, SharedModule, InputTextModule, ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Http, HttpModule } from '@angular/http';
import { MateriaComponent } from './materia/materia.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [AppService, MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
