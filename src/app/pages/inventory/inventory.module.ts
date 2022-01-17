import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule, FormModule } from 'src/app/components';
import { CardModule } from 'src/app/components/card/card.module';
const routes:Routes=[
  {
    path:'',
    component:InventoryComponent
  }
]


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
  ]
})
export class InventoryModule { }
