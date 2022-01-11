import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from './number-format.pipe';



@NgModule({
  declarations: [NumberFormatPipe],
  exports:[NumberFormatPipe],
  imports: [
    CommonModule
  ]
})
export class NumberFormatModule { }
