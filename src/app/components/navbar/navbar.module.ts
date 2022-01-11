import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NumberFormatModule } from 'src/app/pipes';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NumberFormatModule,
  ]
})
export class NavbarModule { }
