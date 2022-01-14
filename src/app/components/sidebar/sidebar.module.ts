import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ButtonModule } from '..';
import { TestService } from 'src/app/services';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  providers:[TestService]
})
export class SidebarModule { }
