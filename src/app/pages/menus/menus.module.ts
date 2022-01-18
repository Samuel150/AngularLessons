import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogContentExampleDialog, MenusComponent } from './menus.component';
import { ButtonModule, FormModule } from 'src/app/components';
import { CardModule } from 'src/app/components/card/card.module';
import { DishesService } from 'src/app/services';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

const routes:Routes=[
  {
    path:'',
    component:MenusComponent
  }
]

@NgModule({
  declarations: [MenusComponent,DialogContentExampleDialog],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
    MatTooltipModule,
    MatDialogModule,
    FormModule
  ],
  providers:[DishesService]
})
export class MenusModule { }
