import { ErrorHandlerService } from './../../core/error-handler.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Ciclo } from './../../entity/ciclo.entity';
import { CicloService } from './../../service/ciclo.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ciclo-cadastro',
  templateUrl: './ciclo-cadastro.component.html',
  styleUrls: ['./ciclo-cadastro.component.css']
})
export class CicloCadastroComponent implements OnInit {

  constructor(private cicloService: CicloService,
  private toasty: ToastyService,
  private router: Router,
  private handleError: ErrorHandlerService) { }

  ciclo: Ciclo = new Ciclo();

  ngOnInit() {
  }

  salvar(ngCiclo: NgForm) {
     this.cicloService.cadastrar(this.ciclo).subscribe(response => {
      this.toasty.success('Ciclo de Estudo gravado com sucesso.');
      this.router.navigate(['/ciclos']);
    }, error => {
      this.handleError.handle(error);
    });
  }

}
