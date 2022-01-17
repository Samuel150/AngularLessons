import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ButtonModule } from '..';
import { TestService } from 'src/app/services';
import { CategoryService } from 'src/app/services/api/category/category.service';
import { HttpClient } from '@angular/common/http';



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
  providers:[CategoryService]
})
export class SidebarModule { }
