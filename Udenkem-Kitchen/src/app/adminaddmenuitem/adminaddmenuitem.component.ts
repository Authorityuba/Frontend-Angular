import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Eucharia } from '../eucharia';

@Component({
  selector: 'app-adminaddmenuitem',
  templateUrl: './adminaddmenuitem.component.html',
  styleUrl: './adminaddmenuitem.component.css'
})
export class AdminaddmenuitemComponent implements OnInit {

  addfooditemRef = new FormGroup({
    fid:new FormControl(),
    foodname:new FormControl(),
    description:new FormControl(),
    image:new FormControl(),
    price:new FormControl()
  })
    constructor(public adminService:AdminService){} 
    msg:string="";
    ngOnInit(): void {
        
    }

    addFoodMenuItem():void{
      let fooditem = this.addfooditemRef.value;
  
      this.adminService.addFoodMenuItem(fooditem).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Add Food Item done!")
        }
      });

      this.addfooditemRef.reset();
      
    }


}
