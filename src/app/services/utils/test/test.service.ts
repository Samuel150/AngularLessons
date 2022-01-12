import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IButton } from 'src/app/interfaces';

@Injectable({
  providedIn:'root'
})
export class TestService {

  change$ = new Subject<IButton>()

  constructor() { }

  sendChange(buttonCnf:IButton){
    this.change$.next(buttonCnf)
  }
}
