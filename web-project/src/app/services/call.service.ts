import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<DataTableCallItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postCall(Call: any){
    return this.httpClient.post<DataTableCallItem>(this.url, Call).pipe(
      catchError(handleError)
    );   
  }

  getCall(CallId: number){
    return this.httpClient.get<DataTableCallItem>(this.url + "/" + CallId).pipe(
      catchError(handleError)
    );;
  }
  putCall(Call: any, CallId: number){
    return this.httpClient.put<DataTableCallItem>(this.url + "/" + CallId, Call).pipe(
      catchError(handleError)
    );;
  }
  deleteCall(CallId: number){
   return this.httpClient.delete(this.url + "/" + CallId).pipe(
    catchError(handleError)
  );;    
  }
}
