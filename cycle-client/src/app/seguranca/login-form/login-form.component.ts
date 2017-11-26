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

  constructor(private segurancaService: SegurancaService) { }

  ngOnInit() {
  }

  logar() {
    this.segurancaService.logar(this.usuario).then(res => {
      console.log(res);
    });
  }

}
