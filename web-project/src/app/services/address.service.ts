import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { AddressPriority } from '../components/settings/settings.component';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url = "https://localhost:44358/api/AddressPriorities"
  constructor(private httpClient: HttpClient) { }
  getAllAddresses(){
    return this.httpClient.get<AddressPriority[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postAddress(Address: any){
    return this.httpClient.post(this.url, Address, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getAddress(AddressId: number){
    return this.httpClient.get(this.url + "/" + AddressId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  putAddress(Address: any, AddressId: number){
    return this.httpClient.put(this.url + "/" + AddressId, Address, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteAddress(AddressId: number){
   return this.httpClient.delete(this.url + "/" + AddressId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
}
