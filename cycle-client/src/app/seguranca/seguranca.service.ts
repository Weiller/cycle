import { Usuario } from './../entity/usuario.entity';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class SegurancaService {
  constructor(private http: Http) { }

  oauthUrl = 'http://localhost:8080/oauth/token';


  logar(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    const body = `username=${usuario.email}&password=${usuario.senha}&grant_type=password`;

    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.oauthUrl, body, { headers }).toPromise()
    .then(response => {
      console.log(response);
    }).catch(response => {
      console.log(response);
    });
  }

}
