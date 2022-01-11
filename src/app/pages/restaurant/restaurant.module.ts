import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

const routes:Routes=[
  {
    path:'',
    component:RestaurantComponent,
    children:[
      {
        path:'menus',
        loadChildren:()=>import('../menus/menu.module').then(m=>m.MenuModule)
      }
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
