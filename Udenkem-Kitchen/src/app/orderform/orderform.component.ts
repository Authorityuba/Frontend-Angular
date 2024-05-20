import { Component, OnInit } from '@angular/core';
import { Orderform } from '../orderform';
import { OrderformService } from '../orderform.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Eucharia } from '../eucharia';
import { EuchariaService } from '../eucharia.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrl: './orderform.component.css'
})
export class OrderformComponent implements OnInit {

  customerOrderRef = new FormGroup({
    fid: new FormControl(),
    cname: new FormControl(),
    contactno: new FormControl(),
    location: new FormControl(),
    qty: new FormControl(),
    price: new FormControl()
    })
   
      euchariafoodlist:Array<Eucharia>=[];
      foodOrderList:Array<Orderform>=[];
      myorderlist:Array<Orderform>=[];

    constructor(public euchariaService:EuchariaService, public orderformService:OrderformService, public router:Router){} 
    msg:string="";
    

    ngOnInit(): void {
        this.loadViewFoodMenuPage(); 
        this.loadViewFoodOrder()
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
    placeOrder():void{
      let order = this.customerOrderRef.value;
  
      this.orderformService.placeOrder(order).subscribe({
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
   
    getOrder(euchariafoodlist:Eucharia){
     
      this.customerOrderRef.get("fid")?.setValue(euchariafoodlist.fid);
      this.customerOrderRef.get("price")?.setValue(euchariafoodlist.price);

    }
      
     
    loadViewFoodOrder():void{
      this.orderformService.viewAllOrder().subscribe({
        next:(result:any)=>{
          //console.log(result)
          this.myorderlist=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("list of orders done!")
        }
      });
    }
    

}
