import { environment } from './../../environments/environment';
import { Info } from './../entity/info.entity';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  url: string;

  constructor(private http: AuthHttp) {
    this.url = `${environment.url}/info`;
  }

  public getInfo(): Observable<Info> {
    return this.http.get(this.url).map(response => {
      return response.json();
    }).catch(error => Observable.throw(error));
  }
}
