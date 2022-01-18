import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControllerRoutes, TypeState } from 'src/app/enums';
import { IDishAddDto, IDishQueryDto, IDishUpdateDto } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class DishesService {

  constructor(private _http:HttpClient) { }

  loadDishes(restaurantId:number,state:TypeState){
    const route = `${environment.apiRoute}/${ControllerRoutes.DISH}?restaurantId=${restaurantId}&state=${state}`
    return this._http.get<IDishQueryDto[]>(route)
  }

  createDish(restaurantId:number,dishAddDto:IDishAddDto){
    const route =  `${environment.apiRoute}/${ControllerRoutes.DISH}?restaurantId=${restaurantId}`
    return this._http.post<IDishQueryDto>(route,dishAddDto)
  }

  updateDish(dishId:number,dishUpdateDto:IDishUpdateDto){
    const route =  `${environment.apiRoute}/${ControllerRoutes.DISH}/${dishId}`
    return this._http.put<IDishQueryDto>(route,dishUpdateDto)
  }

  deleteDish(dishId:number){
    const route =  `${environment.apiRoute}/${ControllerRoutes.DISH}/${dishId}`
    return this._http.delete<void>(route)
  }

}
