import { Component, OnInit } from '@angular/core';
import { INavbarOption } from 'src/app/interfaces';
import { TestService } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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
    private _testService:TestService
  ) { }

  ngOnInit(): void {
  }

  sendEventToMenuPage(){
    //this._testService.sendChange(this.navButton)
  }

}
