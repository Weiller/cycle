import { Component, OnInit } from '@angular/core';

import { Page } from './../../../entity/page.entity';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { CicloFilter } from './../../../filter/ciclo.filter';
import { CicloService } from './../../../service/ciclo.service';

import { ErrorHandlerService } from './../../../core/error-handler.service';

@Component({
  selector: 'app-estudo-pesquisa',
  templateUrl: './estudo-pesquisa.component.html',
  styleUrls: ['./estudo-pesquisa.component.css']
})
export class EstudoPesquisaComponent implements OnInit {

  cicloFilter = new CicloFilter();
  page = new Page();

  constructor(private cicloService: CicloService,
  private errorHandle: ErrorHandlerService) { }

  ngOnInit() {
  }

  consultar() {
    this.cicloService.consultar(this.cicloFilter).subscribe(
        page => {
         this.page = page;
      }
    , error => {
      this.errorHandle.handle(error);
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.cicloFilter.page = pagina;
    this.consultar();
  }
}
