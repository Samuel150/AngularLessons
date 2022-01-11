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
      icon:'svg-test0'
    },
    {
      text:'Transaction',
      icon:'svg-test2'
    },
    {
      text:'Booking',
      icon:'svg-test2'
    },
    {
      text:'Orders Status',
      icon:'svg-test2'
    },
    {
      text:'Check Dashboard',
      icon:'svg-test2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
