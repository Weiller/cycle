import { SegurancaRoutingModule } from './seguranca-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';

import { InputTextModule, ButtonModule, GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
