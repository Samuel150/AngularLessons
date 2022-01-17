import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IProducts{
  product:string;
  quantity:number;
  description:string;
}
interface IProductSelect{
  product:string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  products:IProducts[]


  formInventory:FormGroup
  productsSelect:string[]
  indexSelectedProduct:number

  constructor(private _fb:FormBuilder) { 
    this.formInventory=this._fb.group({
      product:['',[Validators.required]],
      quantity:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      description:['',[Validators.required]],
    })
    this.products=[]
    this.productsSelect=['Hamburgesa','Pizza']
    this.indexSelectedProduct=-1
  }

  ngOnInit(): void {
  }

  validateAndSave(){
    if(this.formInventory.valid){
      const newProduct:IProducts = this.formInventory.value
      if(this.indexSelectedProduct==-1){
        this.products.push(newProduct)
      }else{
        this.products.splice(this.indexSelectedProduct,1,newProduct)
        this.indexSelectedProduct=-1
      }
      this.formInventory.reset()
    }else{
      this.formInventory.markAllAsTouched()
    }
  }

  editProduct(index:number){
    this.indexSelectedProduct=index
    this.formInventory.reset(this.products[index])
  }
  deleteProduct(index:number){
    this.products.splice(index,1)
  }

}
