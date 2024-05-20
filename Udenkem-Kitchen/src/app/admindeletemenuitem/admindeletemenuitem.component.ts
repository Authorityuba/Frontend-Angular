import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admindeletemenuitem',
  templateUrl: './admindeletemenuitem.component.html',
  styleUrl: './admindeletemenuitem.component.css'
})
export class AdmindeletemenuitemComponent implements OnInit {

  deletefooditemRef = new FormGroup({
    fid:new FormControl()
  })
    constructor(public adminService:AdminService){} 
    msg:string="";
    ngOnInit(): void {
        
    }

    deleteFoodMenuItem():void{
      let deletefooditem = this.deletefooditemRef.value.fid;
  
      this.adminService.deleteFoodMenuItem(deletefooditem).subscribe({
        next:(result:any)=>{
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Delete Food Item done!")
        }
      });

      this.deletefooditemRef.reset();
      
    }

   

}
