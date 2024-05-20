import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EuchariaService } from '../eucharia.service';
import { Router } from '@angular/router';
import { Eucharia } from '../eucharia';
import { Orderform } from '../orderform';
import { OrderformService } from '../orderform.service';
import { Block } from '@angular/compiler';

@Component({
  selector: 'app-euchariafoodmenu',
  templateUrl: './euchariafoodmenu.component.html',
  styleUrl: './euchariafoodmenu.component.css'
})
export class EuchariafoodmenuComponent implements OnInit{
euchariafoodlist:Array<Eucharia>=[];
foodOrderList:Array<Orderform>=[];


    constructor(public euchariaService:EuchariaService, public orderformSerive:OrderformService, public router:Router){} //DI is like backend admin service
    msg:string="";

    customerOrderRef = new FormGroup({
      fid: new FormControl(),
      cname: new FormControl(),
      contactno: new FormControl(),
      location: new FormControl(),
      qty: new FormControl(),
      price: new FormControl(),
      status: new FormControl(),
      })

    ngOnInit(): void {
        this.loadViewFoodMenuPage();
        
    }

    openOrderForm(){
      const modelDiv = document.getElementById('exampleModal');
      if(modelDiv != null)
      modelDiv.style.display="block";
    }

    closeOrderForm(){
      const modelDiv = document.getElementById('exampleModal');
      if(modelDiv != null)
      modelDiv.style.display="none";
    }

    loadViewFoodMenuPage():void{
      this.euchariaService.viewFoodMenu().subscribe({
        next:(result:any)=>{
          //console.log(result)
          this.euchariafoodlist=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("food menu done!")
          
          
          
        }
      });
      
     
    }

    deleteFoodMenuItem(fid:any):void{
      this.euchariaService.deleteFoodMenuItem(fid).subscribe({
        next:(result:any)=>{
          //console.log(result)
         // alert(fid);
          this.euchariafoodlist=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("Delete food menu item done!")
          this.loadViewFoodMenuPage()
        }
      });
    }

    updateFoodMenuItem(euchariafoodlist:any):void{
      //this.categoryref.get("categoryname")?.setValue(eucharia.foodmenu);

    }

    placeOrder():void{
      let order = this.customerOrderRef.value;
  
      this.orderformSerive.placeOrder(order).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Place Order done!")
        }
      });

      this.customerOrderRef.reset();
      
    }

    getCustomerOrderInfo(foodOrderList: any): void {
      this.customerOrderRef.get("fid")?.setValue(foodOrderList.fid);
      this.customerOrderRef.get("cname")?.setValue(foodOrderList.cname);
      this.customerOrderRef.get("contactno")?.setValue(foodOrderList.contactno);
      this.customerOrderRef.get("location")?.setValue(foodOrderList.location);
      this.customerOrderRef.get("price")?.setValue(foodOrderList.price);
      this.customerOrderRef.get("status")?.setValue(foodOrderList.status);
      }
    
}
