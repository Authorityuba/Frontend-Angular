import { Component, OnInit } from '@angular/core';
import { Eucharia } from '../eucharia';
import { FormControl, FormGroup } from '@angular/forms';
import { EuchariaService } from '../eucharia.service';

@Component({
  selector: 'app-eucharia-food',
  templateUrl: './eucharia-food.component.html',
  styleUrl: './eucharia-food.component.css'
})
export class EuchariaFoodComponent{
    echariafood:Array<Eucharia>=[];
    constructor(public euchariaService:EuchariaService){}
    viewFoodMenu():void{
        this.euchariaService.viewFoodMenu().subscribe({
            next:(data:any)=>{
                this.echariafood=data;
            },
            error:(error:any)=>{
                console.log(error);
            },
            complete:()=>{
                console.log("show Eucharia Food Menu ");
            }
        })
    }

  


  }
