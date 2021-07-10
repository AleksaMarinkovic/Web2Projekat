import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { workRequestStates } from 'src/assets/docStates.enum';
import { workReqTypes } from 'src/assets/Types.enum';
import { WorkRequestService } from 'src/app/services/work-request.service';
import { Router } from '@angular/router'
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { DataTableNotificationsItem } from '../notifications/notifications.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  templateUrl: './add-work-requests.component.html',
  styleUrls: ['./add-work-requests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWorkRequestsComponent implements OnInit {

  addWorkRequestForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private workRequestService: WorkRequestService, private _router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.addWorkRequestForm = this.formBuilder.group({
      
      type : workReqTypes.PlannedWork,
      street: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      purpose: ['', Validators.required],
      notes: "",
      emergencyWork : false,
      company: ['', Validators.required],
      createdBy: "",
      phoneNumber: ['', Validators.required],
      createdDate: ['', Validators.required],
      lastEditor: ['', Validators.required],
      dateEdited: ['', Validators.required],
      docState: workRequestStates.Issued,
      wrImage: "",
      incidents: "",
      equipment : "",
    });  
  }
  onSubmit(workRequest: any){
    this.workRequestService.postWorkRequest(workRequest).subscribe();
    this.addNotification(workRequest)
    console.log(workRequest);    
    this.addWorkRequestForm.reset();   
    this._router.navigate(['/workRequests']);
  }

  addNotification(workRequest: any) {
    let notification: DataTableNotificationsItem =
    {
      timestamp: Date.now().toString(),
      read: notificationTypesDisplayed.Unread,
      notificationId: 0,
      description: "",
      type: notificationTypes.Information
    };    
    switch(workRequest.docState){
      case "Draft":{//info
        notification.description = "New Work request created";
        notification.type = notificationTypes.Information;
        break;
      }
      case "Completed":{//success
        notification.description = "Work request Completed";
        notification.type = notificationTypes.SuccessfulAction;
        break;
      }
      case "Executing":{//warning
        notification.description = "Work request Executing...";
        notification.type = notificationTypes.Warning;
        break;
      }
      case "Cancelled":{//error
        notification.description = "Work request Cancelled";
        notification.type = notificationTypes.Error;
        break;
      }
    }
    this.notificationService.postNotification(notification).subscribe();
  }
}
