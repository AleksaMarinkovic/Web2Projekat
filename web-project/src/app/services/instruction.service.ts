import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableWorkPlanSwitchingInstructionsItem } from '../components/data-tables/data-table-instructions/data-table-instructions.component';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  url = "https://localhost:44358/api/WorkPlanSwitchingInstructions";
  constructor(private httpClient: HttpClient) { }

  getAllWorkPlansSW(){
    return this.httpClient.get<DataTableWorkPlanSwitchingInstructionsItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postWorkPlansSW(WorkPlanSW: any){
    return this.httpClient.post<DataTableWorkPlanSwitchingInstructionsItem>(this.url, WorkPlanSW, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getWorkPlansSW(WorkPlanIdSW: number){
    return this.httpClient.get<DataTableWorkPlanSwitchingInstructionsItem>(this.url + "/" + WorkPlanIdSW, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  putWorkPlansSW(WorkPlansSW: any, WorkPlanIdSW: number){
    return this.httpClient.put<DataTableWorkPlanSwitchingInstructionsItem>(this.url + "/" + WorkPlanIdSW, WorkPlansSW, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkPlansSW(WorkPlanSWId: number){
   return this.httpClient.delete(this.url + "/" + WorkPlanSWId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
}
