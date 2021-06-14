import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Notif } from 'src/entities/notifs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationUrl = 'assets/notifTemp.json'

  constructor(private httpClient: HttpClient) { }

  getAllNotifs(){
    return this.httpClient.get<Notif[]>(this.notificationUrl);
  }  
}
