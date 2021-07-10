import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { causeTypes, constructionType, incidentTypes, materialType, subcauseTypes } from 'src/assets/Types.enum';
import { incidentPriorities } from 'src/assets/Types.enum';
import { IncidentService } from 'src/app/services/incident.service';
import { Router } from '@angular/router'
import { incidentStates } from 'src/assets/docStates.enum';
import { NotificationService } from 'src/app/services/notification.service';
import { DataTableNotificationsItem } from '../notifications/notifications.component';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { notificationTypes } from 'src/assets/notificationTypes.enum';

@Component({
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddIncidentComponent implements OnInit {

  addIncidentForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private incidentService: IncidentService, private _router: Router, private notificationService: NotificationService) {
   
   }

  ngOnInit(): void {
    this.addIncidentForm = this.formBuilder.group({
      
      type : incidentTypes.PlannedIncident,
      priority: incidentPriorities.Important,
      approved: false,
      ETA: "",
      ATA: "",
      dateOccured : "",
      ETR: "",
      state: incidentStates.Issued,
      affectedConsumers: "",
      numberOfCalls: "",
      voltage: "",
      scheduledTime: "",
      resolver: "",
      incidentImage: "",
      equipment : "",
      cause : causeTypes.Failure,
      subcause: subcauseTypes.Hailstorm,
      constructionType: constructionType.Surface,
      material: materialType.Metal,     
    });  
  }
  onSubmit(incident: any){
    this.incidentService.postIncident(incident).subscribe();
    this.addNotification(incident);    
    console.log(incident);    
    this.addIncidentForm.reset();   
    this._router.navigate(['/incidents']);
  }
  addNotification(incident: any) {
    let notification: DataTableNotificationsItem =
    {
      timestamp: Date.now().toString(),
      read: notificationTypesDisplayed.Unread,
      notificationId: 0,
      description: "",
      type: notificationTypes.Information
    };    
    switch(incident.state){
      case "Draft":{//info
        notification.description = "New Incident created";
        notification.type = notificationTypes.Information;
        break;
      }
      case "Completed":{//success
        notification.description = "Incident Completed";
        notification.type = notificationTypes.SuccessfulAction;
        break;
      }
      case "Issued":{//warning
        notification.description = "Incident Issued";
        notification.type = notificationTypes.Warning;
        break;
      }
      case "Cancelled":{//error
        notification.description = "Incident Cancelled";
        notification.type = notificationTypes.Error;
        break;
      }
    }
    this.notificationService.postNotification(notification).subscribe();
  }
}
