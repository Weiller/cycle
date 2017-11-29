import { ErrorHandlerService } from './../core/error-handler.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { ToastyService } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Usuario } from './../entity/usuario.entity';


@Injectable()
export class SegurancaService {
  constructor(private http: Http,
  private jwtHelper: JwtHelper,
  private toasty: ToastyService,
  private router: Router,
  private errorHandler: ErrorHandlerService) {
    this.carregarToken();
   }

  oauthUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  logar(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    const body = `username=${usuario.email}&password=${usuario.senha}&grant_type=password`;

    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.oauthUrl, body, { headers, withCredentials: true  }).toPromise()
    .then(response => {
        this.armazenarToken(response.json().access_token);
        this.router.navigate(['/materias']);
    }).catch(response => {

      if (response.status === 400) {
        const responseJson = response.json();
        if (responseJson.error === 'invalid_grant') {
          return Promise.reject('Usuário ou senha inválido.');
        }
      }

      return Promise.reject(response);
    });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthUrl, body,
      { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities &&  this.jwtPayload.authorities.includes(permissao);
  }

  public temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

}
