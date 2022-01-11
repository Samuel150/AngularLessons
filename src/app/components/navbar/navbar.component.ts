import { Component, OnInit, Output } from '@angular/core';
import { INavbarOption } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }

}
