import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //baseUrl:string = "http://localhost:9191/food"
  baseUrl:string = "http://52.86.201.221/food"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient

  addFoodMenuItem(eucharia:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/addfood",eucharia,{responseType:"text"})
  }

  updateFoodMenuItem(eucharia:any):Observable<string> {
    return this.httpClient.patch(this.baseUrl+"/updatefood",eucharia,{responseType:"text"})
  }

  deleteFoodMenuItem(eucharia:any):Observable<string> {
    return this.httpClient.delete(this.baseUrl+"/deletefood"+eucharia,{responseType:"text"})
  }
}
