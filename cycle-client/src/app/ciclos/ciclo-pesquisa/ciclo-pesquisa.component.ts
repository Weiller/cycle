import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Ciclo } from './../../entity/ciclo.entity';
import { CicloService } from './../../service/ciclo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-pesquisa',
  templateUrl: './ciclo-pesquisa.component.html',
  styleUrls: ['./ciclo-pesquisa.component.css']
})
export class CicloPesquisaComponent implements OnInit {

  constructor(private cicloService: CicloService,
  private handleError: ErrorHandlerService,
  private toasty: ToastyService) { }

  ciclos: Ciclo[] = [];
  ciclo: Ciclo;

  ngOnInit() {
    this.consultar();
  }


  public consultar() {
    this.cicloService.consultar().subscribe(response => {
      this.ciclos = response;
    }, error => {
      this.handleError.handle(error);
    });
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
