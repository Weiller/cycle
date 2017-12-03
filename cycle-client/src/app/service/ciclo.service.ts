import { CicloDTO } from './../entity/cicloDTO.entity';
import { ErrorHandlerService } from './../core/error-handler.service';
import { Ciclo } from './../entity/ciclo.entity';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class CicloService {

  constructor(private http: AuthHttp,
  private handleError: ErrorHandlerService) { }

  cadastrar(cicloDTO: CicloDTO): Observable<CicloDTO> {
    return this.http.post('http://localhost:8080/ciclos', cicloDTO).map(response => {
      response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  alterar(cicloDTO: CicloDTO): Observable<CicloDTO> {
    return this.http.put(`http://localhost:8080/ciclos/${cicloDTO.codigo}`, cicloDTO).map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }

  consultar(): Observable<CicloDTO[]> {
    return this.http.get('http://localhost:8080/ciclos').map(response => {
      return response.json();
    }).catch((error: any) => Observable.throw(error));
  }

  consultarCiclo(id: number): Observable<CicloDTO> {
    return this.http.get(`http://localhost:8080/ciclos/${id}`).map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }

  deletar(codigo: number): Observable<void> {
    return this.http.delete(`http://localhost:8080/ciclos/${codigo}`).map(() => null)
    .catch((error: any) => Observable.throw(error));
  }

}
