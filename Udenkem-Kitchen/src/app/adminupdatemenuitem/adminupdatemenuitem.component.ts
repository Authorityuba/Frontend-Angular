import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminupdatemenuitem',
  templateUrl: './adminupdatemenuitem.component.html',
  styleUrl: './adminupdatemenuitem.component.css'
})
export class AdminupdatemenuitemComponent implements OnInit {

  updatefooditemRef = new FormGroup({
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

    updateFoodMenuItem():void{
      let fooditemdetails = this.updatefooditemRef.value;
  
      this.adminService.updateFoodMenuItem(fooditemdetails).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Update Food Item done!")
        }
      });

      this.updatefooditemRef.reset();
      
    }

    update(fooditemdetails:any):void{
      this.updatefooditemRef.get("fid")?.setValue(fooditemdetails.fid);
      this.updatefooditemRef.get("foodname")?.setValue(fooditemdetails.foodname);
      this.updatefooditemRef.get("description")?.setValue(fooditemdetails.description);
      this.updatefooditemRef.get("image")?.setValue(fooditemdetails.image);
      this.updatefooditemRef.get("price")?.setValue(fooditemdetails.price);
    }
}
