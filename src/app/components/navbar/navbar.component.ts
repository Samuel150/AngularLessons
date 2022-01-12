import { Component, OnInit, Output } from '@angular/core';
import { IButton, INavbarOption } from 'src/app/interfaces';
import { TestService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navButton:IButton={text:'Navbar',color:'orange'}
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
    this._testService.sendChange(this.navButton)
  }

}
