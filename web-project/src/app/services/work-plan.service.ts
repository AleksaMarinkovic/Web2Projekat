import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableWorkPlanItem } from '../components/data-tables/data-table-work-plan/data-table-work-plan-datasource';

@Injectable({
  providedIn: 'root'
})
export class WorkPlanService {
 
  url = "https://localhost:44358/api/WorkPlans";
  constructor(private httpClient: HttpClient) { }

  getAllWorkPlans(){
    return this.httpClient.get<DataTableWorkPlanItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getAllWorkPlansCreatedByUser(userId: any){
    return this.httpClient.get<DataTableWorkPlanItem[]>(this.url+"/GetAllWorkPlansCreatedByUser/" + userId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(catchError(handleError));;
  }

  postWorkPlans(WorkPlan: any){
    return this.httpClient.post<DataTableWorkPlanItem>(this.url, WorkPlan, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getWorkPlan(WorkPlanId: number){
    return this.httpClient.get<DataTableWorkPlanItem>(this.url + "/" + WorkPlanId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getNumberOfWorkPlans(){
    return this.httpClient.get<number>(this.url + "/NumberOf", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError));;
  }
  
  putWorkPlans(WorkPlans: any, WorkPlanId: number){
    return this.httpClient.put<DataTableWorkPlanItem>(this.url + "/" + WorkPlanId, WorkPlans, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkPlans(WorkPlanId: number){
   return this.httpClient.delete(this.url + "/" + WorkPlanId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
  //get canceled
  getNumberOfCanceledWorkPlans(){
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
  getNumberOfIssuedWorkPlans(){
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
  getNumberOfCompletedWorkPlans(){
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
  getNumberOfDraftedWorkPlans(){
    return this.httpClient.get<number>(this.url + "/Drafted", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
}
