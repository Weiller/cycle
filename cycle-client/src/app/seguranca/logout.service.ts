import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

import { SegurancaService } from './seguranca.service';

@Injectable()
export class LogoutService {

  url: string;

  constructor(private http: AuthHttp,
    private segurancaService: SegurancaService) {
    this.url = `${environment.url}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.url, { withCredentials: true }).toPromise()
      .then(() => {
        this.segurancaService.limparAcessToken();
      });
  }
}
