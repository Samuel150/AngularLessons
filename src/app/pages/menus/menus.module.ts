import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { ButtonModule } from 'src/app/components';
import { CardModule } from 'src/app/components/card/card.module';
import { TestService } from 'src/app/services';

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
    CardModule,
  ],
  providers:[]
})
export class MenusModule { }
