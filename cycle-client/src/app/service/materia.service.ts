import { Materia } from './../../entity/materia.entity';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class MateriaService {

  materia = Materia;
  materias: any = [];

  constructor(private http: Http) { }


  cadastrar(materia: Materia): Promise<Materia> {
    return this.http.post('http://localhost:8080/materias', materia)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json() || 'Server error')).toPromise();
  }

  atualizar(materia: Materia): Promise<Materia> {
   return this.http.put(`http://localhost:8080/materias/${materia.id}`, materia)
    .map((res) => res.json())
    .catch((error: any) => Observable.throw(error.json() || 'Server error')).toPromise();
  }

  consultar(): Promise<any> {
   return this.http.get('http://localhost:8080/materias').toPromise().then(
      materias => {
        return materias.json();
      });
  }

  deletar(id: number): Promise<Materia> {
    return this.http.delete(`http://localhost:8080/materias/${id}`).toPromise().then(
      materia => {
        return materia.json();
      }
    );
  }

}
