import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableCrewItem } from '../components/data-tables/data-table-crew/data-table-crew-datasource';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  url = "https://localhost:44358/api/Crews"
  constructor(private httpClient: HttpClient) { }


  getAllCrews() {
    return this.httpClient.get<DataTableCrewItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postCrew(crew: any){
    return this.httpClient.post<DataTableCrewItem>(this.url, crew, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getCrew(crewId: number){
    return this.httpClient.get<DataTableCrewItem>(this.url + "/" + crewId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  putCrew(crew: any, crewId: number){
    return this.httpClient.put<DataTableCrewItem>(this.url + "/" + crewId, crew, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteCrew(crewId: number){
    return this.httpClient.delete(this.url + "/" + crewId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
     catchError(handleError)
   );;    
   }
}
