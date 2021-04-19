import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Notif } from 'src/entities/notifs';
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  

  notifications !: Notif[]
  notifications_unread !: Notif[];
  notifications_error !: Notif[];
  notifications_warning !: Notif[];
  notifications_success !: Notif[];

  all_notifications !: Notif[];

  columnsToDisplay = ['type', 'message', 'time sent'];

  constructor(private _notificationService: NotificationService) {
  }

  ngOnInit(): void {  

      this._notificationService.getAllNotifs()
      .subscribe(data => this.notifications = data);
      this._notificationService.getAllNotifs()
      .subscribe(data => this.all_notifications = data);
      this.notifications_unread = new Array<Notif>();
      this.notifications_error = new Array<Notif>();
      this.notifications_warning = new Array<Notif>();
      this.notifications_success = new Array<Notif>();
  };
  
  ViewAll(){
    this.notifications = this.all_notifications;
  }

  ViewUnread(){
    this.notifications = this.all_notifications;

    this.notifications.forEach(notification => {
      if(notification.read == false){
        if(!this.notifications_unread.includes(notification))
        this.notifications_unread.push(notification);
      }      
    });

    this.notifications = this.notifications_unread;
  }

  ViewError(){
    this.FilterNotification(this.notifications_error, notificationTypes.Error);
  }
  
  ViewWarning( ){
    this.FilterNotification(this.notifications_warning, notificationTypes.Warning);
  }

  ViewSuccess(){
   this.FilterNotification(this.notifications_success, notificationTypes.SuccessfulAction);
  }

  //Gets an array of eg. errors and populates it to be assigned to this.notifications for proper display
  FilterNotification(notificationsFilter: Notif[], notificationStatus: notificationTypes){
    this.notifications = this.all_notifications;

    this.notifications.forEach(notification => {
      if(notification.notificationType != notificationStatus){
        if(!this.notifications_unread.includes(notification))
        this.notifications_unread.push(notification);
      }      
    });

    this.notifications = this.notifications_unread;
  }

  AllRead(){
    this.notifications_unread = [];
  }
  MarkAsRead(notification : Notification){
    alert(notification.timestamp);
  }
}