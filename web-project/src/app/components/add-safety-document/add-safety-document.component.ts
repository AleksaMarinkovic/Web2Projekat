import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {safetyDocumentStates} from "../../../assets/docStates.enum";
import {safetyDocTypes} from "../../../assets/Types.enum";
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
import { Router } from '@angular/router'
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { DataTableNotificationsItem } from '../notifications/notifications.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  templateUrl: './add-safety-document.component.html',
  styleUrls: ['./add-safety-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddSafetyDocumentComponent implements OnInit {

  addSafetyDocumentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private safetyDocumentService: SafetyDocumentService, private _router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.addSafetyDocumentForm = this.formBuilder.group({
      type : safetyDocTypes.PlannedWork,
      phoneNumber: ['', Validators.required],
      dateCreated: ['', Validators.required],
      details: "",
      notes: "",   
      lastEditor: ['', Validators.required],
      dateEdited: ['', Validators.required],
      state: safetyDocumentStates.Issued,
      createdBy : localStorage.getItem("id"),
      docImage: "",
      equipment: "",
      allWorkOperationsCompleted: false,
      allTagsRemoved: false,
      groundingRemoved: false,
      readyForService: false,
      crewId: 0,
      workPlan: null,
    });  
  }
  onSubmit(safetyDocument: any){
    this.safetyDocumentService.postSafetyDocument(safetyDocument).subscribe(
      data => this.addNotification(safetyDocument, data.safetyDocumentId)
    );
    
    console.log(safetyDocument);
    this.addSafetyDocumentForm.reset();   
    this._router.navigate(['/safetyDocuments']);
  }

  addNotification(safetyDocument: any, id: number) {
    let notification: DataTableNotificationsItem =
    {
      timestamp: Date.now().toString(),
      read: notificationTypesDisplayed.Unread,
      notificationId: 0,
      description: "",
      type: notificationTypes.Information,
      incdidentId: null,
      workPlanId: null,
      workRequestId: null,
      safetyDocumentId: id
    };    
    switch(safetyDocument.state){
      case "Drafted":{//info
        notification.description = "New safetyDocument created";
        notification.type = notificationTypes.Information;
        break;
      }
      case "Completed":{//success
        notification.description = "safetyDocument Completed";
        notification.type = notificationTypes.SuccessfulAction;
        break;
      }
      case "Issued":{//warning
        notification.description = "safetyDocument Issued";
        notification.type = notificationTypes.Warning;
        break;
      }
      case "Cancelled":{//error
        notification.description = "safetyDocument Cancelled";
        notification.type = notificationTypes.Error;
        break;
      }
    }
    this.notificationService.postNotification(notification).subscribe();
  }
}
