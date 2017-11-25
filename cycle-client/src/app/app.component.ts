import { Component, OnInit } from '@angular/core';
import {ToastyConfig, ToastyModule} from 'ng2-toasty';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }
  ngOnInit() {}

}
