import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { iconSettings } from 'src/assets/iconSettings';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  url = "https://localhost:44358/api/IconSettings";
  constructor(private httpClient: HttpClient) { }

  getAllIconSettingss(){
    return this.httpClient.get<iconSettings[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postIconSettings(IconSettings: any){
    return this.httpClient.post<iconSettings>(this.url, IconSettings).pipe(
      catchError(handleError)
    );   
  }

  getIconSettings(IconSettingsId: number){
    return this.httpClient.get<iconSettings>(this.url + "/" + IconSettingsId).pipe(
      catchError(handleError)
    );;
  }
  putIconSettings(IconSettings: any, IconSettingsId: number){
    return this.httpClient.put<iconSettings>(this.url + "/" + IconSettingsId, IconSettings).pipe(
      catchError(handleError)
    );;
  }
  deleteIconSettings(IconSettingsId: number){
   return this.httpClient.delete(this.url + "/" + IconSettingsId).pipe(
    catchError(handleError)
  );;    
  }
}
