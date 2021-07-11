import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    return this.httpClient.get<DataTableItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getAllSafetyDocumentsCreatedByUser(userId: any){
    return this.httpClient.get<DataTableItem[]>(this.url+"/GetAllSafetyDocumentsCreatedByUser/" + userId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(catchError(handleError));;
  }
  //get canceled
  getNumberOfCanceledSafetyDocuments(){
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
  getNumberOfIssuedSafetyDocuments(){
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
  getNumberOfCompletedSafetyDocuments(){
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
  getNumberOfDraftedSafetyDocuments(){
    return this.httpClient.get<number>(this.url + "/Drafted", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postSafetyDocument(safetyDocument: any){
    return this.httpClient.post<DataTableItem>(this.url, safetyDocument, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getSafetyDocument(safetyDocumentId: number){
    return this.httpClient.get<DataTableItem>(this.url + "/" + safetyDocumentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getNumberOfSafetyDocuments(){
    return this.httpClient.get<number>(this.url + "/NumberOf", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError));;
  }

  putSafetyDocument(safetyDocument: any, safetyDocumentId: number){
    return this.httpClient.put<DataTableItem>(this.url + "/" + safetyDocumentId, safetyDocument, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteSafetyDocument(safetyDocumentId: number){
    return this.httpClient.delete(this.url + "/" + safetyDocumentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
     catchError(handleError)
   );;    
   }
}
