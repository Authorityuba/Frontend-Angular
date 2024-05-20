import { Component, OnInit } from '@angular/core';
import { Orderform } from '../orderform';
import { OrderformService } from '../orderform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcustomersorders',
  templateUrl: './allcustomersorders.component.html',
  styleUrl: './allcustomersorders.component.css'
})
export class AllcustomersordersComponent implements OnInit {

  listoforders:Array<Orderform>=[];

    constructor(public orderformService:OrderformService, public router:Router){} //DI is like backend admin service
    msg:string="";
    ngOnInit(): void {
        this.loadViewFoodOrder();
    }

    loadViewFoodOrder():void{
      this.orderformService.viewAllOrder().subscribe({
        next:(result:any)=>{
          //console.log(result)
          this.listoforders=result;
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
