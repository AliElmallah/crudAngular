import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(){
  if(localStorage.getItem("products") != null){
    this.prouductArray= JSON.parse(localStorage.getItem('products')  || '{}');
  }else{

    this.prouductArray=[];
    
  }

}

  chick:Boolean=false;
 prouductArray:any[];
  formGrop1= new FormGroup({
    productName:new FormControl(null),
    productcatigory:new FormControl(null),
    productPrice:new FormControl(null),
  });
  addProuduct(data:any){

    this.prouductArray.push(data.value);
    localStorage.setItem("products",JSON.stringify(this.prouductArray));
  }

  deletProduct(x:number){
    this.prouductArray.splice(x , 1);
    localStorage.setItem("products",JSON.stringify(this.prouductArray));
  }
  x:string='';
  y:string='';
  z:string='';
  display:boolean=false;
  currindex:number= -1;
  updatProuduct(index:number){
    this.display=true;
    console.log(this.prouductArray[index]);
    console.log(index);
    this.x = this.prouductArray[index].productPrice;
    this.y = this.prouductArray[index].productName;
    this.z = this.prouductArray[index].productcatigory;
    this.currindex=index;
  }

  cancelproduct(){
    this.x = '';
    this.y = '';
    this.z = '';



    


    this.display=false;
  }

  okprouduct(form:any){
    if(form.value.productName == null){
      form.value.productName=this.y;
    }
    if(form.value.productPrice == null){
      form.value.productPrice=this.x;
    }

    if(form.value.productcatigory == null){
      form.value.productcatigory=this.z;
    }
    
    this.prouductArray[this.currindex]=form.value;
    console.log(this.prouductArray);
    console.log(this.currindex);
    let h = this.currindex;
    
    this.prouductArray.splice(h,1)
    
    
    
    
  }
}
