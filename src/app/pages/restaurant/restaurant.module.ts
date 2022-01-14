import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

const routes:Routes=[
  {
    path:'',
    redirectTo:'menus',
    pathMatch:'full'
  },
  {
    path:'',
    component:RestaurantComponent,
    children:[
      {
        path:'menus',
        loadChildren:()=>import('../menus/menus.module').then(m=>m.MenusModule)
      },
      {
        path:'checkout',
        loadChildren:()=>import('../checkout/checkout.module').then(m=>m.CheckoutModule)
      }
      //inventario
    ]
  },
  
]

@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
