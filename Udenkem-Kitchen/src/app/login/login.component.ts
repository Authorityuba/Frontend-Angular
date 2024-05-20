import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
    constructor(public loginService:LoginService, public router:Router){} //DI for backend login service
    msg:string="";
    ngOnInit(): void {
        
    }

    signIn():void{
      let login = this.loginRef.value;
      console.log(login);
      //call backend LoginService method using subscribe, a pre-defined method
      this.loginService.signIn(login).subscribe({
        next:(result:any)=>{
          //console.log(result)
          if(result=="Access Accepted!, Admin login successfully!"){
              this.router.navigate(["admin"])
          }else if(result=="Access Accepted!, Customer login successfully!"){
            sessionStorage.setItem("username",login.emailid);
            this.router.navigate(["customer"],{skipLocationChange:true})
          }else{
            this.msg=result;
          }
          
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("signin done!")
        }
      });

      this.loginRef.reset();
    }
}
