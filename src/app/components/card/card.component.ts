import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,DoCheck,AfterContentInit,AfterViewInit {

  @ContentChild('contenido') contenido:any
  constructor() {
    console.log('constructor')
   }
  ngDoCheck(): void {
    console.log('Do check')
  }

  ngAfterViewInit(): void {
    console.log('afterview')
  }

  ngAfterContentInit(): void {
    
  }

  ngOnInit(): void {
    console.log('init')
  }

}
