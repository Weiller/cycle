import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';


  const routes: Routes = [
    {path: 'login', component: LoginFormComponent}
  ];


@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
