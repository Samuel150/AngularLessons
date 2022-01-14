import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypePaymentMethod } from 'src/app/enums/typePaymentMethod.enum';

interface IPaymentMethod {
  value: string;
  description: string;
}

interface ICheckout{    
  paymentMethod:string;
  amount:number
  cardNumer:number
  email:string;
  address:string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  paymentMethods: IPaymentMethod[] = [
    {value:TypePaymentMethod.EFECTIVO,description:'Efectivo'},
    {value:TypePaymentMethod.TARJETA,description:'Tarjeta crédito'}
  ];

  initialCheckout:ICheckout={
    paymentMethod:'EFECTIVO',
    amount:654688684,
    cardNumer:2654646,
    email:'asdasdas',
    address:'asdasdas',
  }
  
  formCheckout:FormGroup
  total:number;
  unitPrice:number;

  constructor(
    private _fb:FormBuilder
  ) {
    this.total=0
    this.formCheckout=this._fb.group({
      paymentMethod:['',[Validators.required]],
      amount:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      quantity:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      cardNumber:['',[Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(4),Validators.maxLength(4)]],
      cardNumber2:['',[Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(4),Validators.maxLength(4)]],
      change:[''],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]]
    })
    this.unitPrice=15
  }

  ngOnInit(): void {
    this.formCheckout.controls.paymentMethod.setValue('EFECTIVO')
    this.formCheckout.controls.change.disable({onlySelf:true})
    this.handlePaymentForm( this.formCheckout.controls.paymentMethod.value)
    //this.formCheckout.reset(this.initialCheckout)
  }


  test(){
    const valid = this.formCheckout.valid
    if(valid){
      const formValue= this.formCheckout.value
      if(formValue.paymentMethod===TypePaymentMethod.EFECTIVO){
        console.log('formValue',formValue)
      }else if(formValue.paymentMethod===TypePaymentMethod.TARJETA) {
        formValue.cardNumber=formValue.cardNumber+'XXXXXXXX'+formValue.cardNumber2
        delete formValue.cardNumber2
        console.log('formValue',formValue)
      }
    }else{
      this.formCheckout.markAllAsTouched()
    }

  }

  handlePaymentForm(paymentSelected:string){
    console.log('paymentSelected',paymentSelected)
    if(paymentSelected===TypePaymentMethod.EFECTIVO){ 
      this.formCheckout.controls.cardNumber.disable({onlySelf:true})
      this.formCheckout.controls.cardNumber2.disable({onlySelf:true})
      //this.formCheckout.controls.amount.enable()
    }else if(paymentSelected==TypePaymentMethod.TARJETA){
      //this.formCheckout.controls.amount.disable({onlySelf:true})
      this.formCheckout.controls.cardNumber.enable()
      this.formCheckout.controls.cardNumber2.enable()
    }
  }

  changeTotalPayment(){
    this.total=250
    this.formCheckout.controls.amount.setValidators([Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(this.total)])
    this.formCheckout.controls.amount.updateValueAndValidity()
  }

  checkInputFieldOutput($event:string){
    if(!this.formCheckout.controls.amount.valid) return
    const change = +$event-this.total
    if(change>0){
      this.formCheckout.controls.change.setValue(change)
    }else{
      this.formCheckout.controls.change.setValue(0)
    }
  }

  changeTotalPrice($event:string){
    if(!this.formCheckout.controls.quantity.valid) return
    const quantity = +$event
    this.total=this.unitPrice*quantity
    this.formCheckout.controls.amount.setValidators([Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(this.total)])
  }
}
