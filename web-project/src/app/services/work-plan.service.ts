import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { workPlan } from 'src/assets/workPlan';

@Injectable({
  providedIn: 'root'
})
export class WorkPlanService {

  url = "https://localhost:44358/api/WorkPlans";
  constructor(private httpClient: HttpClient) { }

  getAllWorkPlans(){
    return this.httpClient.get<workPlan[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postWorkPlans(WorkPlan: any){
    return this.httpClient.post<workPlan>(this.url, WorkPlan).pipe(
      catchError(handleError)
    );   
  }

  getWorkPlans(WorkPlanId: number){
    return this.httpClient.get<workPlan>(this.url + "/" + WorkPlanId).pipe(
      catchError(handleError)
    );;
  }
  putWorkPlans(WorkPlans: any, WorkPlanId: number){
    return this.httpClient.put<workPlan>(this.url + "/" + WorkPlanId, WorkPlans).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkPlans(WorkPlanId: number){
   return this.httpClient.delete(this.url + "/" + WorkPlanId).pipe(
    catchError(handleError)
  );;    
  }
}
