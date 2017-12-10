import { Materia } from './../entity/materia.entity';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class EstudoService {

  constructor(private http: AuthHttp) { }

  public salvarContagem(materia: Materia): Observable<void> {
    return this.http.put(`http://localhost:8080/estudos/${materia.id}`, materia).map(() => {
    }).catch(error => Observable.throw(error));
  }

}
