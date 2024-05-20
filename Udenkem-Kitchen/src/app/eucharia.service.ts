import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eucharia } from './eucharia';

@Injectable({
  providedIn: 'root'
})
export class EuchariaService {

  //baseUrl:string = "http://localhost:9191/food"
 baseUrl:string = "http://52.86.201.221/food"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient
  //by default all method of httpcClient return type is json but if we return from backend as string, you use response as text

  viewFoodMenu():Observable<Eucharia[]> {
    return this.httpClient.get<Eucharia[]>(this.baseUrl+"/viewfoodmenu")
  }
  
  findFoodMenuItem(fid:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/findfoodinfo"+"/"+fid)
  }

  addFoodMenuItem(eucharia:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/addfood",eucharia,{responseType:"text"})
  }

  updateFoodMenuItem(eucharia:any):Observable<string> {
    return this.httpClient.patch(this.baseUrl+"/updatefood"+"/"+eucharia.fid,eucharia,{responseType:"text"})
  }

  deleteFoodMenuItem(fid:any):Observable<string> {
    return this.httpClient.delete(this.baseUrl+"/deletefood"+"/" + fid,{responseType:"text"})
  }


}
