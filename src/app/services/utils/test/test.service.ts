import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IButton } from 'src/app/interfaces';

@Injectable({
  providedIn:'root'
})
export class TestService {

  change$ = new Subject<IButton>()

  changePage$ = new Subject<boolean>()

  constructor() { }

  sendChange(buttonCnf:IButton){
    this.change$.next(buttonCnf)
  }

  sendChangePage(next:boolean){
    this.changePage$.next(next)
  }
}
