import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pagina: string;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.pagina = '<app-materia></app-materia>';
    this.appService.consultar();
  }

}
