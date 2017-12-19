import { Info } from './entity/info.entity';
import { InfoService } from './service/info.service';
import { Component, OnInit } from '@angular/core';
import { ToastyConfig, ToastyModule, ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private toastyConfig: ToastyConfig,
    private infoService: InfoService,
    private toastyMessage: ToastyService) {
    this.toastyConfig.theme = 'bootstrap';
    this.getInfo();
  }

  info = new Info();

  ngOnInit() { }

  getInfo() {
    this.infoService.getInfo().subscribe(response => {
      this.info = response;
    }, error => {
      this.toastyMessage.error(error);
    });
  }

}
