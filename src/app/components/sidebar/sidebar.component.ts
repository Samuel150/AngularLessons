import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TypeState } from 'src/app/enums';
import { INavbarOption } from 'src/app/interfaces';
import { ICategoryQueryDto } from 'src/app/interfaces/api/category/category.interface';
import { TestService } from 'src/app/services';
import { CategoryService } from 'src/app/services/api/category/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  categories$:Observable<ICategoryQueryDto[]>|undefined

  categoriesSubscribe:ICategoryQueryDto[]
  categoriesLoaded:boolean

  name:string='inicial';

  navbarOptions:INavbarOption[]=[
    {
      text:'POS',
      icon:'svg-list'
    },
    {
      text:'Transaction',
      icon:'svg-transaction'
    },
    {
      text:'Booking',
      icon:'svg-clock'
    },
    {
      text:'Orders Status',
      icon:'svg-box'
    },
    {
      text:'Check Dashboard',
      icon:'svg-dashboard'
    }
  ]
  constructor(
    private _testService:TestService,
    private _categoryService:CategoryService
  ) {
    this.categoriesSubscribe=[]
    this.categoriesLoaded=false
  }

  ngOnInit(): void {
    // this.getCategoriesAsyncPipe()
    this.getCategoriesSubcribe()
  }

  sendEventToMenuPage(){
    //this._testService.sendChange(this.navButton)
  }

  getCategoriesAsyncPipe(){
    this.categories$=this._categoryService.loadCategories(TypeState.ACTIVE)
    .pipe(tap(res=>{
      console.log('res',res)
      //datos
    }))
  }

  getCategoriesSubcribe(){
    this.categoriesLoaded=false
    this._categoryService.loadCategories(TypeState.ACTIVE).subscribe(res=>{
      this.categoriesSubscribe=res
      //codigo 
      this.categoriesLoaded=true
      console.log('res',res)
    })
  }

}
