import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { workPlanStateChange } from 'src/assets/workPlanStateChange.enum';
import { workPlanDocumentTypes } from 'src/assets/workPlantDocumentTypes.enum';
import { workPlanTypes } from 'src/assets/workPlanTypes.enum';
import { DataTableNotificationsItem } from '../notifications/notifications.component';

@Component({
  selector: 'app-add-work-plan',
  templateUrl: './add-work-plan.component.html',
  styleUrls: ['./add-work-plan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWorkPlanComponent implements OnInit {
  addWorkPlanForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private workPlanService: WorkPlanService,  private _router: Router,private notificationService: NotificationService) { 
    
  }

  ngOnInit(): void {
    this.addWorkPlanForm = this.formBuilder.group({
      workPlanId: 0,
      documentType: workPlanDocumentTypes.Planned,
      status: workPlanTypes.Draft,
      workRequestId: null,//FK
      incidentId: null,//FK
      address: "",
      startWorkDate: "",
      endWorkDate: "",
      createdBy : localStorage.getItem("id"), 
      crew: "",/*to be changed to chosing crew*/ 
      purpose: "",
      notes: "",
      company: "",
      phone: "",
      creationDate: "",
      photo: "",
      lastEditor: "",
      dateEdited: "",
      documentState: workPlanStateChange.Approve,     
    });
  }
  onSubmit(workPlan: any){
    this.workPlanService.postWorkPlans(workPlan).subscribe();
    this.addNotification(workPlan);
    this.addWorkPlanForm.reset();
    this._router.navigate(['/work-plans']);
  }      
  addNotification(workPlan: any) {
    let notification: DataTableNotificationsItem =
    {
      timestamp: Date.now().toString(),
      read: notificationTypesDisplayed.Unread,
      notificationId: 0,
      description: "",
      type: notificationTypes.Information
    };   
    switch(workPlan.status){
      case "Draft":{//info
        notification.description = "New Work plan created";
        notification.type = notificationTypes.Information;
        break;
      }
      case "Completed":{//success
        notification.description = "Work Plan Completed";
        notification.type = notificationTypes.SuccessfulAction;

        break;
      }
      case "Executing":{//warning
        notification.description = "Work Plan Executing...";
        notification.type = notificationTypes.Warning;
        break;
      }
      case "Cancelled":{//error
        notification.description = "Work Plan Cancelled";
        notification.type = notificationTypes.Error;
        break;
      }
    }
    this.notificationService.postNotification(notification).subscribe();
  }
}
