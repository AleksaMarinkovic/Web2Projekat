import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationUrl = 'assets/notifTemp.json'

  constructor(private httpClient: HttpClient) { }

  getAllNotifs(){
  }  
}
