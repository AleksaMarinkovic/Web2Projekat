import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError} from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableElementItem } from '../components/data-tables/data-table-element/data-table-element-datasource';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  url = "https://localhost:44358/api/Equipments"
  constructor(private httpClient: HttpClient) { }

  getAllEquipment() {
    return this.httpClient.get<DataTableElementItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postEquipment(equipment: any){
    return this.httpClient.post<DataTableElementItem>(this.url, equipment, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getEquipment(equipmentId: number){
    return this.httpClient.get<DataTableElementItem>(this.url + "/" + equipmentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  putEquipment(equipment: any, equipmentId: number){
    return this.httpClient.put<DataTableElementItem>(this.url + "/" + equipmentId, equipment, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteEquipment(equipmentId: number){
    return this.httpClient.delete(this.url + "/" + equipmentId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
     catchError(handleError)
   );;    
   }
}
