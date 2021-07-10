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
    return this.httpClient.get<DataTableWorkPlanItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postWorkPlans(WorkPlan: any){
    return this.httpClient.post<DataTableWorkPlanItem>(this.url, WorkPlan).pipe(
      catchError(handleError)
    );   
  }

  getWorkPlan(WorkPlanId: number){
    return this.httpClient.get<DataTableWorkPlanItem>(this.url + "/" + WorkPlanId).pipe(
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
    return this.httpClient.put<DataTableWorkPlanItem>(this.url + "/" + WorkPlanId, WorkPlans).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkPlans(WorkPlanId: number){
   return this.httpClient.delete(this.url + "/" + WorkPlanId).pipe(
    catchError(handleError)
  );;    
  }
}
