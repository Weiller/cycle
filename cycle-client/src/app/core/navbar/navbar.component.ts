import { SegurancaService } from './../../seguranca/seguranca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: SegurancaService) { }
  nomeUsuario: string;

  ngOnInit() {
    if (this.authService.jwtPayload) {
      this.nomeUsuario = this.authService.jwtPayload.nome;
    }
  }

}
