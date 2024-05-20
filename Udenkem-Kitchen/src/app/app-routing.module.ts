import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { UdemFoodComponent } from './udem-food/udem-food.component';
import { IgboFoodComponent } from './igbo-food/igbo-food.component';
import { EuchariafoodmenuComponent } from './euchariafoodmenu/euchariafoodmenu.component';
import { AdminaddmenuitemComponent } from './adminaddmenuitem/adminaddmenuitem.component';
import { AdminupdatemenuitemComponent } from './adminupdatemenuitem/adminupdatemenuitem.component';
import { AdmindeletemenuitemComponent } from './admindeletemenuitem/admindeletemenuitem.component';
import { AllcustomersordersComponent } from './allcustomersorders/allcustomersorders.component';
import { ViewMyorderComponent } from './view-myorder/view-myorder.component';
import { OrderformComponent } from './orderform/orderform.component';
import { FindcustomerorderComponent } from './findcustomerorder/findcustomerorder.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin",component:AdmindashboardComponent,children:[
  {path:"addfooditem",component:AdminaddmenuitemComponent},
  {path:"updatefooditem",component:AdminupdatemenuitemComponent},
  {path:"allcustomerorders",component:AllcustomersordersComponent},
  {path:"deletefooditem",component:AdmindeletemenuitemComponent},
  {path:"foodmenu",component:EuchariafoodmenuComponent},
  {path:"customer",component:CustomerdashboardComponent,children:[
    {path:"eucharia",component:OrderformComponent},
    {path:"ukbabe",component:UdemFoodComponent},
    {path:"igbofood",component:IgboFoodComponent},
  ]},
  ]},
  {path:"customer",component:CustomerdashboardComponent,children:[
    {path:"eucharia",component:OrderformComponent},
    {path:"ukbabe",component:UdemFoodComponent},
    {path:"igbofood",component:IgboFoodComponent},
    {path:"viewmyorder",component:ViewMyorderComponent},
  ]},
  
  
  {path:"findcustomerorder",component:FindcustomerorderComponent},
  {path:"allcustomerorders",component:AllcustomersordersComponent},
  {path:"",redirectTo:"login",pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
