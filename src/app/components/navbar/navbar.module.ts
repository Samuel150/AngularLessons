import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NumberFormatModule } from 'src/app/pipes';
import { ButtonModule } from '..';
import { TestService } from 'src/app/services';



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
    ButtonModule,
  ],
  providers:[]
})
export class NavbarModule { }
