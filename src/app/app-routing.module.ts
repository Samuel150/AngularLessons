import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'restaurant',
    pathMatch:'full'
  },
  {
    path:'restaurant',
    loadChildren:()=>import('./pages/restaurant/restaurant.module').then(m=>m.RestaurantModule)
  }
  //login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
