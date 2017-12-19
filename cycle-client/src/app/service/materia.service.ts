import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { Materia } from './../entity/materia.entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MateriaService {

  materia = Materia;
  materias: any = [];
  url: string;

  constructor(private http: AuthHttp) {
    this.url = `${environment.url}/materias`;
  }

  cadastrar(materia: Materia): Observable<Materia> {
    return this.http.post(this.url, materia)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  atualizar(materia: Materia): Observable<Materia> {
   return this.http.put(`${this.url}/${materia.id}`, materia)
    .map((res) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  consultar(): Promise<any> {
   return this.http.get(this.url).toPromise().then(
      materias => {
        return materias.json();
      });
  }

  consultarMateria(id: number): Promise<Materia> {
    return this.http.get(`${this.url}/${id}`).toPromise().then(
       materia => {
         return materia.json();
       });
   }

  deletar(id: number): Observable<Materia> {
    return this.http.delete(`${this.url}/${id}`).map(response => {
      return response.json();
    }).catch((error: any) =>  Observable.throw(error));
  }

}
