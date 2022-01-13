import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule, FormModule } from 'src/app/components';

const routes:Routes=[
  {
    path:'',
    component:CheckoutComponent
  }
]

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormModule,
    ButtonModule,
  ]
})
export class CheckoutModule { }
