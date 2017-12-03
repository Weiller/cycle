import { ErrorHandlerService } from './../../core/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Ciclo } from './../../entity/ciclo.entity';
import { CicloService } from './../../service/ciclo.service';
import { Component, OnInit, Input } from '@angular/core';

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
  private route: ActivatedRoute,
  private handleError: ErrorHandlerService) { }

 @Input() ciclo: Ciclo = new Ciclo();

  ngOnInit() {
  }

  public consultarCiclo(codigo: number) {
    this.cicloService.consultarCiclo(codigo).subscribe(response => {
      this.ciclo = response;
    }, error => {
      this.handleError.handle(error);
    });
  }

  salvar(ngCiclo: NgForm) {
    if (!this.ciclo.codigo) {
      //this.cadastrar();
    } else {
      //this.alterar();
    }

  }

  /*cadastrar() {
    this.cicloService.cadastrar(this.ciclo).subscribe(response => {
      this.toasty.success('Ciclo de Estudo gravado com sucesso.');
      this.router.navigate(['/ciclos']);
    }, error => {
      this.handleError.handle(error);
    });
  }
*/
  /*alterar() {
    this.cicloService.alterar(this.ciclo).subscribe(response => {
      this.toasty.success('Ciclo de Estudo alterado com sucesso.');
      this.router.navigate(['ciclos']);
    }, error => {
      this.handleError.handle(error);
    });
  }
*/
}
