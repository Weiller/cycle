import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Page } from './../../../entity/page.entity';
import { CicloFilter } from './../../../filter/ciclo.filter';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Ciclo } from './../../../entity/ciclo.entity';
import { CicloService } from './../../../service/ciclo.service';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-ciclo-pesquisa',
  templateUrl: './ciclo-pesquisa.component.html',
  styleUrls: ['./ciclo-pesquisa.component.css']
})
export class CicloPesquisaComponent implements OnInit {

  constructor(private cicloService: CicloService,
  private handleError: ErrorHandlerService,
  private toasty: ToastyService,
  private title: Title) { }

  page = new Page();
  ciclo: Ciclo;
  cicloFilter = new CicloFilter();
  @ViewChild('tableCiclos') tableCiclo;

  ngOnInit() {
    this.title.setTitle('Pesquisa de Ciclos');
  }

  public consultar() {
    this.cicloService.consultar(this.cicloFilter).subscribe(response => {
        this.page = response;
    }, error => {
      this.handleError.handle(error);
    });
  }

  limpar() {
    this.cicloFilter = new CicloFilter();
    this.consultar();
    this.tableCiclo.first = 0;
  }

  public aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.cicloFilter.page = pagina;
    this.consultar();
  }

  public deletar(codigo: number) {
    this.cicloService.deletar(codigo).subscribe(() => {
      this.toasty.success('Ciclo de Estudo deletado com sucesso.');
      this.consultar();
    }, error => {
      this.handleError.handle(error);
    });
  }

}
