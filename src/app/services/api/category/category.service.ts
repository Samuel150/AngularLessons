import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControllerRoutes, TypeState } from 'src/app/enums';
import { ICategoryQueryDto } from 'src/app/interfaces/api/category/category.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  constructor(private _http:HttpClient) { }

  loadCategories(state:TypeState){
    const route = `${environment.apiRoute}/${ControllerRoutes.CATEGORIES}?state=${state}`
    return this._http.get<ICategoryQueryDto[]>(route)
  }

  //mas metodos
  

}
