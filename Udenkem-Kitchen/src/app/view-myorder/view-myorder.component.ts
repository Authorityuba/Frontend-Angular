import { Component, OnInit } from '@angular/core';
import { ViewMyorder } from '../view-myorder';
import { OrderformService } from '../orderform.service';
import { Router } from '@angular/router';
import { Eucharia } from '../eucharia';

@Component({
  selector: 'app-view-myorder',
  templateUrl: './view-myorder.component.html',
  styleUrl: './view-myorder.component.css'
})
export class ViewMyorderComponent implements OnInit {
  myorderlist:Array<ViewMyorder>=[];


    constructor(public orderformSerive:OrderformService, public eucharia:Eucharia, public router:Router){} //DI is like backend admin service
    msg:string="";

    ngOnInit(): void {
        this.loadMyOrderPage();
        
    }

    loadMyOrderPage():void{
      this.orderformSerive.findmyOrder(this.eucharia.fid).subscribe({
        next:(result:any)=>{
          this.myorderlist=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("My order listing done!")
          
          
          
        }
      });
      
     
    }

    

}
