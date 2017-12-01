import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

import { SegurancaService } from './seguranca.service';

@Injectable()
export class LogoutService {

  constructor(private http: AuthHttp,
  private segurancaService: SegurancaService) { }

  limparTokenUrl = 'http://localhost:8080/tokens/revoke';

    logout() {
      return this.http.delete(this.limparTokenUrl, { withCredentials: true } ).toPromise()
      .then(() => {
        this.segurancaService.limparAcessToken();
      });
    }
}
