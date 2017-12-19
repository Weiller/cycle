import { Info } from './../entity/info.entity';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  constructor(private http: AuthHttp) { }

  public getInfo(): Observable<Info> {
    return this.http.get('http://localhost:8080/info').map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }
}
