import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentService } from 'src/app/services/incident.service';
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { WorkRequestService } from 'src/app/services/work-request.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {
  doc: any;
  
  docType: string;
  id: number;
  dateCreated: string;
  notes: string;
  state: string;  

  constructor( @Inject(MAT_DIALOG_DATA) public data: {notification: any}, private dialogRef: MatDialogRef<NotificationDialogComponent>,
  private incidentService: IncidentService, private workPlanService: WorkPlanService,
  private workRequestService: WorkRequestService, private safetyDocumentService: SafetyDocumentService) {
     
    if(data.notification.incidentId != null){
      this.incidentService.getIncident(data.notification.incidentId).subscribe( data => {
        this.doc = data;
        this.id = this.doc.incidentId;
        this.dateCreated = this.doc.DateOccured;
        this.notes = this.doc.cause;
        this.state = this.doc.state;
      });
      this.docType = "Incident";
    }else if(data.notification.workPlanId != null){
      this.workPlanService.getWorkPlan(data.notification.workPlanId).subscribe( data => {
        this.doc = data;
        this.id = this.doc.workPlanId;
        this.dateCreated = this.doc.creationDate;
        this.notes = this.doc.notes;
        this.state = this.doc.status;
      });
      this.docType = "Work Plan";
    }else if(data.notification.workRequestId != null){
      this.workRequestService.getWorkRequest(data.notification.workRequestId).subscribe( data => {
        this.doc = data;
        this.id = this.doc.workRequestId;
        this.dateCreated = this.doc.createdDate;
        this.notes = this.doc.notes;
        this.state = this.doc.docState;
      });
      this.docType = "Work Request";
    }else if(data.notification.safetyDocumentId != null){
      this.safetyDocumentService.getSafetyDocument(data.notification.safetyDocumentId).subscribe( data => {
        this.doc = data;
        this.id = this.doc.safetyDocumentId;
        this.dateCreated = this.doc.dateCreated;
        this.notes = this.doc.notes;
        this.state = this.doc.state;
      });
      this.docType = "Safety Document";
    }
   }

  ngOnInit(): void {
  }

}
