import { ErrorHandlerService } from './../core/error-handler.service';
import { Ciclo } from './../entity/ciclo.entity';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class CicloService {

  constructor(private http: AuthHttp,
  private handleError: ErrorHandlerService) { }

  cadastrar(ciclo: Ciclo): Observable<any> {
    return this.http.post('http://localhost:8080/ciclos', ciclo).map(response => {
      response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  consultar(): Observable<Ciclo[]> {
    return this.http.get('http://localhost:8080/ciclos').map(response => {
      return response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  deletar(codigo: number): Observable<void> {
    return this.http.delete(`http://localhost:8080/ciclos/${codigo}`).map(() => null)
    .catch((error: any) => Observable.throw(error));
  }

}
