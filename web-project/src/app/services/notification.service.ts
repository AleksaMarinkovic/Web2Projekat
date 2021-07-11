import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableNotificationsItem } from '../components/notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = "https://localhost:44358/api/Notifications";
  constructor(private httpClient: HttpClient) { }

  getAllNotifications(){
    return this.httpClient.get<DataTableNotificationsItem[]>(this.url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }

  postNotification(Notification: any){
    return this.httpClient.post<DataTableNotificationsItem>(this.url, Notification, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );   
  }

  getNotification(NotificationId: number){
    return this.httpClient.get<DataTableNotificationsItem>(this.url + "/" + NotificationId, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  putNotification(Notification: any, NotificationId: number){
    return this.httpClient.put<DataTableNotificationsItem>(this.url + "/" + NotificationId, Notification, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("jwt")
      })
    }).pipe(
      catchError(handleError)
    );;
  }
  deleteNotification(NotificationId: number){
   return this.httpClient.delete(this.url + "/" + NotificationId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("jwt")
    })
  }).pipe(
    catchError(handleError)
  );;    
  }
}
