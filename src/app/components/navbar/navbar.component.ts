import { Component, OnInit, Output } from '@angular/core';
import { IButton, INavbarOption } from 'src/app/interfaces';
import { TestService } from 'src/app/services';
import { SidebarService } from 'src/app/services/utils/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nextButton:IButton={text:'Siguiente',color:'orange',icon:'svg-arrow-right'}
  prevButton:IButton={text:'Anterior',color:'orange',icon:'svg-arrow-left'}
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
    private _sidebarService:SidebarService
  ) { }

  ngOnInit(): void {
  }

  sendEventToMenuPage(){
    //this._testService.sendChange(this.navButton)
  }

  changePage(next:boolean){
    this._testService.sendChangePage(next)
  }

  sendSidebarAction(){
    this._sidebarService.sidebarAction$.next(true)
  }

}
