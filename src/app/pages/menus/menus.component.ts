import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IButton } from 'src/app/interfaces';
import { TestService } from 'src/app/services';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit,OnDestroy {

  imgSrc1:string='https://davur.dexignzone.com/frontend/images/dish/4.jpg'
  imgSrc2:string='https://davur.dexignzone.com/frontend/images/dish/1.jpg'

  page:number
  unsubscribe$ = new Subject()

  btnCnf:IButton=
    {color:'blue',text:'Buscar menu2'}

  btnCnf2:IButton=
    {color:'orange',text:'Buscar menu2'}
  
  showButon2:boolean;
  constructor(
    private _testService:TestService
  ) { 
    this.showButon2=false
    this.page=1
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  ngOnInit(): void {
    this.listenTestService()
    this.listenChangePage()
  }

  listenTestService(){
    this._testService.change$.pipe(takeUntil(this.unsubscribe$)).subscribe((res)=>{
      console.log('evento del servicio',res)
    })
  }
  listenChangePage(){
    this._testService.changePage$.pipe(takeUntil(this.unsubscribe$)).subscribe(nextPage=>{
      if(nextPage){
        this.page+=1
      }else if(this.page>1){
        this.page-=1
      }
    })
  }

  showButtonClick($event:string){
    this.showButon2=!this.showButon2
  }

  changeAttributes(){
    this.btnCnf2={
      color:'orange',
      text:'Naranja',
    }
  }

}
