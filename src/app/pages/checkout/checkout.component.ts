import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    {value:'EFECTIVO',description:'Efectivo'},
    {value:'TARJETA',description:'Trajeta crédito'}
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
  constructor(
    private _fb:FormBuilder
  ) {
    this.total=120 
    this.formCheckout=this._fb.group({
      paymentMethod:['',[Validators.required]],
      amount:['',[Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(this.total)]],
      cardNumer:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]]
    })
  }

  ngOnInit(): void {
    this.formCheckout.controls.paymentMethod.setValue('EFECTIVO')
    this.handlePaymentForm( this.formCheckout.controls.paymentMethod.value)
    this.formCheckout.reset(this.initialCheckout)
  }


  test(){
    const valid = this.formCheckout.valid
    if(valid){
      const formValue= this.formCheckout.value
      console.log('formValue',formValue)
    }else{
      this.formCheckout.markAllAsTouched()
    }

  }

  handlePaymentForm(paymentSelected:string){
    if(paymentSelected=='EFECTIVO'){ 
      this.formCheckout.controls.cardNumer.disable({onlySelf:true})
      this.formCheckout.controls.amount.enable()
    }else if(paymentSelected=='TARJETA'){
      this.formCheckout.controls.amount.disable({onlySelf:true})
      this.formCheckout.controls.cardNumer.enable()
    }
    console.log('paymentSelected',paymentSelected)
  }

  changeTotalPayment(){
    this.total=250
    this.formCheckout.controls.amount.setValidators([Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(this.total)])
    this.formCheckout.controls.amount.updateValueAndValidity()
  }

  checkInputFieldOutput($event:string){
    console.log('$event',$event)
  }
}
