import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { ButtonModule } from 'src/app/components';

const routes:Routes=[
  {
    path:'',
    component:MenusComponent
  }
]

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ]
})
export class MenuModule { }
