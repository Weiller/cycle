import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { SegurancaService } from './../seguranca.service';
import { Usuario } from './../../entity/usuario.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private segurancaService: SegurancaService,
    private handleError: ErrorHandlerService,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    this.verificarCarregamento();
  }

  verificarCarregamento() {
    if (this.segurancaService.isAccessTokenInvalido()) {
      this.segurancaService.obterNovoAccessToken().then(response => {
        if (!this.segurancaService.isAccessTokenInvalido()) {
          this.router.navigate(['/ciclos']);
        }
        this.title.setTitle('Login');
      });
    } else {
      this.router.navigate(['/ciclos']);
    }
  }

  logar() {
    this.segurancaService.logar(this.usuario).then(res => {
      console.log(res);
    }).catch(error => {
      this.handleError.handle(error);
    });
    this.usuario.senha = '';
  }

}
