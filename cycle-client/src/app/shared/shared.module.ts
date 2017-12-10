import { TimerPipe } from './../pipe/timer.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TimerPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TimerPipe
  ]
})
export class SharedModule { }
