import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<DataTableNotificationsItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postNotification(Notification: any){
    return this.httpClient.post<DataTableNotificationsItem>(this.url, Notification).pipe(
      catchError(handleError)
    );   
  }

  getNotification(NotificationId: number){
    return this.httpClient.get<DataTableNotificationsItem>(this.url + "/" + NotificationId).pipe(
      catchError(handleError)
    );;
  }
  putNotification(Notification: any, NotificationId: number){
    return this.httpClient.put<DataTableNotificationsItem>(this.url + "/" + NotificationId, Notification).pipe(
      catchError(handleError)
    );;
  }
  deleteNotification(NotificationId: number){
   return this.httpClient.delete(this.url + "/" + NotificationId).pipe(
    catchError(handleError)
  );;    
  }
}
