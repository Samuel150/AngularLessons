import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IButton } from 'src/app/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit,OnChanges {

  @Input() buttonCnf:IButton
  @Output() btnClick = new EventEmitter<string>()
  title:string='Titulo'


  constructor() { 
    console.log('constructor')
    this.buttonCnf={
      color:'blue',
      text:'Buscar'
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.buttonCnf && !changes.buttonCnf.firstChange){
      //solo cuando ocurra un cambio despues del inicial
    }
  }

  ngOnInit(): void {
    console.log('init')
    
  }

  sendOutput(){
    this.btnClick.emit(this.buttonCnf.text)
  }

}
