import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  chick:Boolean=false;
  prouductArray:any[] = [];
   formGrop1= new FormGroup({
     productName:new FormControl(null, [Validators.required]),
     productcatigory:new FormControl(null,[Validators.required]),
     productPrice:new FormControl(null),
   });

constructor(){

}
ngOnInit(): void {
  if(localStorage.getItem("products") != null){
    this.prouductArray= JSON.parse(localStorage.getItem('products')  || '{}');
  }else{

    this.prouductArray=[];

  }

}

initForm(){
  return {
    productName: '',
    productPrice:'',
    productcatigory:''
  }
}

resetForm(){
  this.formGrop1.reset(this.initForm())
}

  addProuduct(data:any){

    if(this.formGrop1.valid){

      this.prouductArray.push(data.value);
      localStorage.setItem("products",JSON.stringify(this.prouductArray));
  this.resetForm()
    }


  }

  deletProduct(x:number){
    this.prouductArray.splice(x , 1);
    localStorage.setItem("products",JSON.stringify(this.prouductArray));
  }

  display:boolean=false;
  currindex:number= -1;
  updatProuduct(index:number){
    this.display=true;
    this.formGrop1.patchValue( this.prouductArray[index])
    this.currindex=index;


  }

  cancelproduct(){
this.resetForm()
    this.display=false;
  }

  okprouduct(form:any){


    this.prouductArray.splice(this.currindex,1,form.value)
    this.resetForm()






  }
}
