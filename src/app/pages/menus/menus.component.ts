import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IButton, IDishAddDto, IDishQueryDto, IDishUpdateDto } from 'src/app/interfaces';
import { DishesService, TestService } from 'src/app/services';
import { takeUntil } from 'rxjs/operators';
import { TypeState } from 'src/app/enums';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit,OnDestroy {

  dishes$:Observable<IDishQueryDto[]>|undefined

  imgSrc1:string='https://davur.dexignzone.com/frontend/images/dish/4.jpg'
  imgSrc2:string='https://davur.dexignzone.com/frontend/images/dish/1.jpg'

  page:number
  unsubscribe$ = new Subject()

  state:TypeState;
  restaurantId:number;

  btnCnf:IButton=
    {color:'blue',text:'Buscar menu2'}

  btnCnf2:IButton=
    {color:'orange',text:'Buscar menu2'}
  
  showButon2:boolean;
  dishId:number
  constructor(
    private _testService:TestService,
    private _dishesService:DishesService,
    private dialog: MatDialog
  ) { 
    this.showButon2=false
    this.page=1
    this.state=TypeState.ACTIVE
    this.restaurantId=1
    this.dishId=-1;
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  ngOnInit(): void {
    this.listenTestService()
    this.listenChangePage()
    this.getDishes()
  }

  getDishes(){
    this.dishes$=this._dishesService.loadDishes(this.restaurantId,this.state)
  }

  listenTestService(){
    this._testService.change$.pipe(takeUntil(this.unsubscribe$)).subscribe((res)=>{
      console.log('evento del servicio',res)
    })
  }
  listenChangePage(){
    this._testService.changePage$.pipe(takeUntil(this.unsubscribe$)).subscribe(nextPage=>{
      if(nextPage){
        this.page+=1
      }else if(this.page>1){
        this.page-=1
      }
    })
  }

  showButtonClick($event:string){
    this.showButon2=!this.showButon2
  }

  changeAttributes(){
    this.btnCnf2={
      color:'orange',
      text:'Naranja',
    }
  }
  

  openDialog(dish?:IDishQueryDto) {
    this.dishId=dish?.id||-1

    if(dish){
      const dialogRef = this.dialog.open(DialogContentExampleDialog,{
        data:{
          title:'Editar plato',
          form:dish
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result.refresh){
          console.log('result',JSON.parse(JSON.stringify(result)))
          this.getDishes()
        }
      });

    }else{
      const dialogRef = this.dialog.open(DialogContentExampleDialog,{
        data:{
          title:'Añadir plato'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result.refresh){
          console.log('result',JSON.parse(JSON.stringify(result)))
          this.getDishes()
        }
      });
    }
  }

  updateDish(dish:IDishQueryDto){
    this.openDialog(dish)
  }
  deleteDish(dish:IDishQueryDto){
    const dishId=dish.id
    //reto
    this._dishesService.deleteDish(dishId).subscribe(()=>{
      this.getDishes()
    },error=>{
      //mostrar mensaje de error
    })
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements OnInit {

  formDish:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb:FormBuilder,
    private _dishesService:DishesService,
    private dialogRef: MatDialogRef<DialogContentExampleDialog>
  ) {
    this.formDish=this._fb.group({
      name:[''],
      description:[''],
      price:[''],
    })

  }
  ngOnInit(): void {
    if(this.data.form){
      this.formDish.reset(this.data.form)
      //name
      //this.formDish.controls.name.setValue(this.data.form.name)
    }
  }

  validateForm(){
    const valid =this.formDish.valid
    if(!valid) {
      this.formDish.markAllAsTouched()
    }else {
      if(this.data.form){
        const id = this.data.form.id
        this.sendPutRequest(this.formDish.value,id)
      }else{
        this.sendPostRequest(this.formDish.value)
      }
    }
  }

  sendPostRequest(dish:IDishAddDto){
    this._dishesService.createDish(1,dish).subscribe(res=>{
      console.log('resDish',res)
      this.dialogRef.close({refresh:true})
    },error=>{
      console.log('error',error)
    })
  }

  sendPutRequest(dish:IDishUpdateDto,dishId:number){
    this._dishesService.updateDish(dishId,dish).subscribe(res=>{
      console.log('resDish',res)
      this.dialogRef.close({refresh:true})
    },error=>{
      console.log('error',error)
    })
  }

}