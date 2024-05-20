import { Component, OnInit } from '@angular/core';
import { Eucharia } from '../eucharia';
import { Router } from '@angular/router';
import { EuchariaService } from '../eucharia.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-euchariafindfoodmenuitem',
  templateUrl: './euchariafindfoodmenuitem.component.html',
  styleUrl: './euchariafindfoodmenuitem.component.css'
})
export class EuchariafindfoodmenuitemComponent implements OnInit {
  eucharia:Array<Eucharia>=[];
  findfooditemRef = new FormGroup({
    fid:new FormControl()
  })
    constructor(public euchariaService:EuchariaService, eucharia:Eucharia, public router:Router){} //DI is like backend admin service
    
    msg:string="";
    ngOnInit(): void {
      this.viewFoodMenuItem()
    }
   
      findFoodMenuItem():void{
        let findfooditem = this.findfooditemRef.value.fid;
    
        this.euchariaService.findFoodMenuItem(findfooditem).subscribe({
          next:(result:any)=>{
            this.msg=result;
          },
          error:(error:any)=>{
            console.log(error)
          },
          complete:()=>{
        console.log("Find Food Item done!")
          }
        });
  
        this.findfooditemRef.reset();
        
      }


    viewFoodMenuItem():void{
      
    }

}
