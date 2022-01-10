import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
