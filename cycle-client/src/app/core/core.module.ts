import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Title,
    PaginaNaoEncontradaComponent]
})
export class CoreModule { }
