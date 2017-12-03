import { SegurancaService } from './seguranca.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private segurancaService: SegurancaService,
  private router: Router) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  if (this.segurancaService.isAccessTokenInvalido()) {
    this.segurancaService.obterNovoAccessToken().then(response => {
      if (this.segurancaService.isAccessTokenInvalido()) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    });
  }

  if (next.data.roles && !this.segurancaService.temQualquerPermissao(next.data.roles)) {
    this.router.navigate(['/pagina-nao-autorizada']);
    return false;
  }

    return true;
  }
}
