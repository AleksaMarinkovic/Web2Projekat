import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableCallItem } from '../components/incident-components/calls/calls.component';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  url = "https://localhost:44358/api/Calls";
  constructor(private httpClient: HttpClient) { }

  getAllCalls(){
    return this.httpClient.get<DataTableCallItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postCall(Call: any){
    return this.httpClient.post<DataTableCallItem>(this.url, Call, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getCall(CallId: number){
    return this.httpClient.get<DataTableCallItem>(this.url + "/" + CallId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  putCall(Call: any, CallId: number){
    return this.httpClient.put<DataTableCallItem>(this.url + "/" + CallId, Call, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteCall(CallId: number){
   return this.httpClient.delete(this.url + "/" + CallId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
}
