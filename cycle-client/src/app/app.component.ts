import { Component, OnInit } from '@angular/core';
import {ToastyConfig, ToastyModule} from 'ng2-toasty';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pagina: string;

  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }
  ngOnInit() {
    this.pagina = '<app-materia></app-materia>';
  }

}
