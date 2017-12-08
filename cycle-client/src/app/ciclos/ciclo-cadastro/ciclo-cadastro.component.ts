import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { CicloForm } from './ciclo.form';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Ciclo } from './../../entity/ciclo.entity';
import { CicloService } from './../../service/ciclo.service';

import { ToastyService } from 'ng2-toasty';

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
    private handleError: ErrorHandlerService) {
    this.cicloForm = new CicloForm();
  }

  @Input() ciclo: Ciclo = new Ciclo();

  @Input() cicloForm: CicloForm;

  ngOnInit() {
  }

  public consultarCiclo(codigo: number) {
    this.cicloService.consultarCiclo(codigo).subscribe(response => {
      this.ciclo = response;
    }, error => {
      this.handleError.handle(error);
    });
  }
}
