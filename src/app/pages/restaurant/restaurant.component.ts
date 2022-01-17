import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/utils/sidebar/sidebar.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit,OnDestroy {

  elem:HTMLElement

  sidebarOpened:boolean

  unsubscribe$=new Subject()

  private SIDEBAR:HTMLElement|null

  constructor(
    private _elementRef:ElementRef,
    private _renderer:Renderer2,
    private _sibarService:SidebarService,
  ) {
    this.elem=this._elementRef.nativeElement
    this.SIDEBAR=null
    this.sidebarOpened=false
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  showItem:boolean=true


  itemsRestaurant:string[]=[
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6"
  ]


  ngOnInit(): void {
    this.SIDEBAR=this.elem.querySelector('app-sidebar');
    this.listenSidebarAction()
  }




  listenSidebarAction(){
    this._sibarService.sidebarAction$.pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      if(this.sidebarOpened){
        //cerrar sidebar
        this._renderer.setStyle(this.SIDEBAR,'transform','translateX(calc(-1 * (var(--width-sidebar)))')
        this._renderer.removeStyle(this.SIDEBAR,'z-index')
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar)')
        this.sidebarOpened=false

      }else{
        //abrir
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar-large)')
        this._renderer.setStyle(this.SIDEBAR,'transform','translateX(0)')
        this._renderer.setStyle(this.SIDEBAR,'z-index','1')
        this.sidebarOpened=true
      }
    })
  }

}
