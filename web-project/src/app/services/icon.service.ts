import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableIconSettingsItem } from '../components/data-tables/data-table-icon-settings/data-table-icon-settings.component';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  url = "https://localhost:44358/api/IconSettings";
  constructor(private httpClient: HttpClient) { }

  getAllIconSettings(){
    return this.httpClient.get<DataTableIconSettingsItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postIconSettings(IconSettings: any){
    return this.httpClient.post<DataTableIconSettingsItem>(this.url, IconSettings, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getIconSettings(IconSettingsId: number){
    return this.httpClient.get<DataTableIconSettingsItem>(this.url + "/" + IconSettingsId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  putIconSettings(IconSettings: any, IconSettingsId: number){
    return this.httpClient.put<DataTableIconSettingsItem>(this.url + "/" + IconSettingsId, IconSettings, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteIconSettings(IconSettingsId: number){
   return this.httpClient.delete(this.url + "/" + IconSettingsId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
}
