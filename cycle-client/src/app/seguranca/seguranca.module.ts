import { AuthGuard } from './auth.guard';
import { SegurancaService } from './seguranca.service';
import { CycleHttp } from './cycle-http';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthHttp, AuthConfig} from 'angular2-jwt';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { InputTextModule, ButtonModule, GrowlModule} from 'primeng/primeng';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';


export function authHttpServiceFactory(auth: SegurancaService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
     {'Content-Type': 'application/json'}
    ]
  });

  return new CycleHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [SegurancaService, Http, RequestOptions]
    }
  ]
})
export class SegurancaModule { }
