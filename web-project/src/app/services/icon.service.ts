import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<DataTableIconSettingsItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postIconSettings(IconSettings: any){
    return this.httpClient.post<DataTableIconSettingsItem>(this.url, IconSettings).pipe(
      catchError(handleError)
    );   
  }

  getIconSettings(IconSettingsId: number){
    return this.httpClient.get<DataTableIconSettingsItem>(this.url + "/" + IconSettingsId).pipe(
      catchError(handleError)
    );;
  }
  putIconSettings(IconSettings: any, IconSettingsId: number){
    return this.httpClient.put<DataTableIconSettingsItem>(this.url + "/" + IconSettingsId, IconSettings).pipe(
      catchError(handleError)
    );;
  }
  deleteIconSettings(IconSettingsId: number){
   return this.httpClient.delete(this.url + "/" + IconSettingsId).pipe(
    catchError(handleError)
  );;    
  }
}
