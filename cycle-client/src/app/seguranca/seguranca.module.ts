import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';


import { AuthGuard } from './auth.guard';
import { CycleHttp } from './cycle-http';
import { LogoutService } from './logout.service';
import { SegurancaService } from './seguranca.service';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { AuthHttp, AuthConfig} from 'angular2-jwt';
import { InputTextModule, ButtonModule } from 'primeng/primeng';


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
    ButtonModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    AuthGuard,
    LogoutService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [SegurancaService, Http, RequestOptions]
    }
  ]
})
export class SegurancaModule { }
