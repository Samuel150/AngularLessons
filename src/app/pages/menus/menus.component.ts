import { Component, OnInit } from '@angular/core';
import { IButton } from 'src/app/interfaces';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  btnCnf:IButton=
    {color:'red',text:'Buscar menu2'}
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnCnf.text='Titulo editado'
    },5000)
  }

  showButtonClick($event:string){
    console.log($event)
  }

}
