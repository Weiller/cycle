import { UsuariosModule } from './view/usuarios/usuarios.module';
import { InfoService } from './service/info.service';
import { SharedModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { EstudosModule } from './view/estudos/estudos.module';
import { CiclosModule } from './view/ciclos/ciclos.module';
import { NaoAutorizadoComponent } from './seguranca/nao-autorizado/nao-autorizado.component';
import { TimerPipe } from './pipe/timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NaoAutorizadoComponent
    ],

  imports: [
    SegurancaModule,
    EstudosModule,
    CoreModule,
    UsuariosModule,
    SharedModule,
    CiclosModule,
    AppRoutingModule
  ],

  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
