import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderform } from './orderform';

@Injectable({
  providedIn: 'root'
})
export class OrderformService {

  //baseUrl:string = "http://localhost:9191/orders"
  baseUrl:string = "http://52.86.201.221/orders"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient
  //by default all method of httpcClient return type is json but if we return from backend as string, you use response as text

  viewAllOrder():Observable<Orderform[]> {
    return this.httpClient.get<Orderform[]>(this.baseUrl+"/viewallorders")
  }
  
  findOrder(fid:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/viewmyorder"+"/"+101)
  }

  placeOrder(orderform:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/placeorder",orderform,{responseType:"text"})
  }

  updateOrder(orderform:any):Observable<string> {
    return this.httpClient.patch(this.baseUrl+"/updateorder"+"/"+orderform.oid,orderform,{responseType:"text"})
  }

  deleteOrder(oid:any):Observable<string> {
    return this.httpClient.delete(this.baseUrl+"/deleteorder"+"/" + oid,{responseType:"text"})
  }

  findmyOrder(fid:any):Observable<Orderform[]> {
    return this.httpClient.get<Orderform[]>(this.baseUrl+"/viewmyorder"+"/"+fid)
  }

  findCustomerOrder(contactno:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/findcustomerorder"+"/"+contactno)
  }

  cancelCustomerOrder(contactno:number):Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/cancelorder"+"/"+contactno,{responseType:"text"})
  }

  
}
