import { environment } from './../../environments/environment';
import { Page } from './../entity/page.entity';
import { CicloFilter } from './../filter/ciclo.filter';
import { CicloDTO } from './../dto/cicloDTO.entity';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Ciclo } from './../entity/ciclo.entity';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class CicloService {

  url: string;

  constructor(private http: AuthHttp,
  private handleError: ErrorHandlerService) {
    this.url = `${environment.url}/ciclos`;
  }

  cadastrar(cicloDTO: CicloDTO): Observable<CicloDTO> {
    return this.http.post(this.url, cicloDTO).map(response => {
      response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  alterar(cicloDTO: CicloDTO): Observable<CicloDTO> {
    return this.http.put(`${this.url}/${cicloDTO.codigo}`, cicloDTO).map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }

  consultar(cicloFilter: CicloFilter): Observable<Page> {
    const params = new URLSearchParams();
      params.set('nome', cicloFilter.nome);
      params.set('page', cicloFilter.page.toString());
      params.set('size', cicloFilter.size.toString());

    return this.http.get(this.url, { search: params } ).map(response => {
      return response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  consultarCiclo(id: number): Observable<CicloDTO> {
    return this.http.get(`${this.url}/${id}`).map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }

  deletar(codigo: number): Observable<void> {
    return this.http.delete(`${this.url}/${codigo}`).map(() => null)
    .catch((error: any) => Observable.throw(error));
  }

}
