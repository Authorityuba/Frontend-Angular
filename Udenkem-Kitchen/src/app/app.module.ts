import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UdemFoodComponent } from './udem-food/udem-food.component';
import { EuchariaFoodComponent } from './eucharia-food/eucharia-food.component';
import { IgboFoodComponent } from './igbo-food/igbo-food.component';
import { EuchariafoodmenuComponent } from './euchariafoodmenu/euchariafoodmenu.component';
import { AdminaddmenuitemComponent } from './adminaddmenuitem/adminaddmenuitem.component';
import { AdminupdatemenuitemComponent } from './adminupdatemenuitem/adminupdatemenuitem.component';
import { AdmindeletemenuitemComponent } from './admindeletemenuitem/admindeletemenuitem.component';
import { EuchariafindfoodmenuitemComponent } from './euchariafindfoodmenuitem/euchariafindfoodmenuitem.component';
import { OrderformComponent } from './orderform/orderform.component';
import { AllcustomersordersComponent } from './allcustomersorders/allcustomersorders.component';
import { ViewMyorderComponent } from './view-myorder/view-myorder.component';
import { FindcustomerorderComponent } from './findcustomerorder/findcustomerorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    UdemFoodComponent,
    EuchariaFoodComponent,
    IgboFoodComponent,
    EuchariafoodmenuComponent,
    AdminaddmenuitemComponent,
    AdminupdatemenuitemComponent,
    AdmindeletemenuitemComponent,
    EuchariafindfoodmenuitemComponent,
    OrderformComponent,
    AllcustomersordersComponent,
    ViewMyorderComponent,
    FindcustomerorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
