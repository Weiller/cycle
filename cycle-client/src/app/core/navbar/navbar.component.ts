import { ErrorHandlerService } from './../error-handler.service';
import { Router } from '@angular/router';
import { LogoutService } from './../../seguranca/logout.service';
import { SegurancaService } from './../../seguranca/seguranca.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: SegurancaService,
  private logoutService: LogoutService,
  private router: Router,
  private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      this.errorHandler.handle(error);
    });
  }

}
