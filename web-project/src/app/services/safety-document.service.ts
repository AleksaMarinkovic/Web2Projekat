import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableItem } from '../components/data-tables/data-table-safety-docs/data-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class SafetyDocumentService {
  url = "https://localhost:44358/api/SafetyDocuments"
  constructor(private httpClient: HttpClient) { }

  getAllSafetyDocuments() {
    return this.httpClient.get<DataTableItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postSafetyDocument(safetyDocument: any){
    return this.httpClient.post<DataTableItem>(this.url, safetyDocument).pipe(
      catchError(handleError)
    );   
  }

  getSafetyDocument(safetyDocumentId: number){
    return this.httpClient.get<DataTableItem>(this.url + "/" + safetyDocumentId).pipe(
      catchError(handleError)
    );;
  }

  putSafetyDocument(safetyDocument: any, safetyDocumentId: number){
    return this.httpClient.put<DataTableItem>(this.url + "/" + safetyDocumentId, safetyDocument).pipe(
      catchError(handleError)
    );;
  }
  deleteSafetyDocument(safetyDocumentId: number){
    return this.httpClient.delete(this.url + "/" + safetyDocumentId).pipe(
     catchError(handleError)
   );;    
   }
}
