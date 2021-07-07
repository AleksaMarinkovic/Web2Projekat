import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableWorkRequestsItem } from '../components/data-tables/data-table-work-requests/data-table-work-requests-datasource';

@Injectable({
  providedIn: 'root'
})
export class WorkRequestService {
  url = "https://localhost:44358/api/WorkRequests"
  constructor(private httpClient: HttpClient) { }

  getAllWorkRequests() {
    return this.httpClient.get<DataTableWorkRequestsItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postWorkRequest(workRequest: any){
    return this.httpClient.post<DataTableWorkRequestsItem>(this.url, workRequest).pipe(
      catchError(handleError)
    );   
  }

  getWorkRequest(workRequestId: number){
    return this.httpClient.get<DataTableWorkRequestsItem>(this.url + "/" + workRequestId).pipe(
      catchError(handleError)
    );;
  }

  putWorkRequest(workRequest: any, workRequestId: number){
    return this.httpClient.put<DataTableWorkRequestsItem>(this.url + "/" + workRequestId, workRequest).pipe(
      catchError(handleError)
    );;
  }
  deleteWorkRequest(workRequestId: number){
    return this.httpClient.delete(this.url + "/" + workRequestId).pipe(
     catchError(handleError)
   );;    
   }
}
