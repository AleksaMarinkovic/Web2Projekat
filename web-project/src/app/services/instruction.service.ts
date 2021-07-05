import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<DataTableWorkPlanSwitchingInstructionsItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postWorkPlansSW(WorkPlanSW: any){
    return this.httpClient.post<DataTableWorkPlanSwitchingInstructionsItem>(this.url, WorkPlanSW).pipe(
      catchError(handleError)
    );   
  }

  getWorkPlansSW(WorkPlanIdSW: number){
    return this.httpClient.get<DataTableWorkPlanSwitchingInstructionsItem>(this.url + "/" + WorkPlanIdSW).pipe(
      catchError(handleError)
    );;
  }
  putWorkPlansSW(WorkPlansSW: any, WorkPlanIdSW: number){
    return this.httpClient.put<DataTableWorkPlanSwitchingInstructionsItem>(this.url + "/" + WorkPlanIdSW, WorkPlansSW).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkPlansSW(WorkPlanSWId: number){
   return this.httpClient.delete(this.url + "/" + WorkPlanSWId).pipe(
    catchError(handleError)
  );;    
  }
}
