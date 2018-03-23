import { environment } from './../../environments/environment';
import { Materia } from './../entity/materia.entity';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class EstudoService {

  url: string;

  constructor(private http: AuthHttp) {
    this.url = `${environment.url}/estudos`;
  }

  public salvarContagem(materia: Materia): Observable<void> {
    return this.http.put(`${this.url}/${materia.id}`, materia).map(() => {
    }).catch(error => Observable.throw(error));
  }
}
