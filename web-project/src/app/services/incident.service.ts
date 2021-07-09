import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableIncidentsItem } from '../components/data-tables/data-table-incidents/data-table-incidents-datasource';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  url = "https://localhost:44358/api/Incidents"
  constructor(private httpClient: HttpClient) { }

  getAllIncidents() {
    return this.httpClient.get<DataTableIncidentsItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postIncident(incident: any){
    return this.httpClient.post<DataTableIncidentsItem>(this.url, incident, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  //get canceled
  getNumberOfCanceledIncidents(){
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
  getNumberOfIssuedIncidents(){
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
  getNumberOfCompletedIncidents(){
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
  getNumberOfDraftedIncidents(){
    return this.httpClient.get<number>(this.url + "/Drafted", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  getIncident(incidentId: number){
    return this.httpClient.get<DataTableIncidentsItem>(this.url + "/" + incidentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  putIncident(incident: any, incidentId: number){
    return this.httpClient.put<DataTableIncidentsItem>(this.url + "/" + incidentId, incident, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteIncident(incidentId: number){
    return this.httpClient.delete(this.url + "/" + incidentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
     catchError(handleError)
   );;    
   }
}
