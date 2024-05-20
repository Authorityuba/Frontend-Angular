import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderformService } from '../orderform.service';
import { Orderform } from '../orderform';

@Component({
  selector: 'app-findcustomerorder',
  templateUrl: './findcustomerorder.component.html',
  styleUrl: './findcustomerorder.component.css'
})
export class FindcustomerorderComponent implements OnInit{
  customerOrderList:Array<Orderform>=[];

  findCustomerOrderRef = new FormGroup({
    contactno:new FormControl()
  })
    constructor(public orderformService:OrderformService){} 
    msg:string="";
    ngOnInit(): void {
        this.loadCustomerOrder();
    }

    findCustomerOrder():void{
      let getContactno = this.findCustomerOrderRef.value.contactno;
  
      this.orderformService.findCustomerOrder(getContactno).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Find customer order done!")
        }
      });

      this.findCustomerOrderRef.reset();
      
    }

    loadCustomerOrder():void{
      this.orderformService.findCustomerOrder(Orderform).subscribe({
        next:(result:any)=>{
          this.customerOrderList=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("Listing customer order done!")
        }
      });
    }

    deleteFoodMenuItem():void{
      let customerorder = this.findCustomerOrderRef.value.contactno;
  
      this.orderformService.findCustomerOrder(customerorder).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Find customer order done!")
        }
      });

      this.findCustomerOrderRef.reset();
      
    }

}
