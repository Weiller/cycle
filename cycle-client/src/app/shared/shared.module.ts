import { TimerSecondsPipe } from './../pipe/timer-seconds.pipe';
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
  declarations: [
    TimerPipe,
    TimerSecondsPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TimerPipe,
    TimerSecondsPipe
  ]
})
export class SharedModule { }
