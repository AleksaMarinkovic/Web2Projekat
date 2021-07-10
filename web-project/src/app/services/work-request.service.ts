import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableWorkRequestsItem } from '../components/data-tables/data-table-work-requests/data-table-work-requests-datasource';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkRequestService {
  url = "https://localhost:44358/api/WorkRequests"
  constructor(private httpClient: HttpClient) { }

  getAllWorkRequests() {
    return this.httpClient.get<DataTableWorkRequestsItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postWorkRequest(workRequest: any){
    return this.httpClient.post<DataTableWorkRequestsItem>(this.url, workRequest, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getWorkRequest(workRequestId: number){
    return this.httpClient.get<DataTableWorkRequestsItem>(this.url + "/" + workRequestId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  //get canceled
  getNumberOfCanceledWorkRequests(){
    return this.httpClient.get<number>(this.url + "/Canceled", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  //get issued
  getNumberOfIssuedWorkRequests(){
    return this.httpClient.get<number>(this.url + "/Issued", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  //get completed
  getNumberOfCompletedWorkRequests(){
    return this.httpClient.get<number>(this.url + "/Completed", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  //get drafted
  getNumberOfDraftedWorkRequests(){
    return this.httpClient.get<number>(this.url + "/Drafted", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getNumberOfWorkRequests(){
    return this.httpClient.get<number>(this.url + "/NumberOf", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError));;
  }
  putWorkRequest(workRequest: any, workRequestId: number){
    return this.httpClient.put<DataTableWorkRequestsItem>(this.url + "/" + workRequestId, workRequest, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkRequest(workRequestId: number){
    return this.httpClient.delete(this.url + "/" + workRequestId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
     catchError(handleError)
   );;    
   }
}
