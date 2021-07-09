import { Component, OnInit } from '@angular/core';
import {cards_info} from "../../cards-info";
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
import { WorkRequestService } from 'src/app/services/work-request.service';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards_info = cards_info;
  ready: boolean = false;
  draftedIncidents: number;
  canceledIncidents: number;
  completedIncidents: number;
  issuedIncidents: number;

  draftedWorkRequests: number;
  canceledWorkRequests: number;
  completedWorkRequests: number;
  issuedWorkRequests: number;

  draftedSafetyDocuments: number;
  canceledSafetyDocuments: number;
  completedSafetyDocuments: number;
  issuedSafetyDocuments: number;

  constructor(private incidentService : IncidentService, private workRequestService: WorkRequestService, private safetyDocumentService: SafetyDocumentService) { }

  ngOnInit(): void {    
    this.incidentService.getNumberOfDraftedIncidents().subscribe(data => {this.draftedIncidents = data; this.checkIfReady()});
    this.incidentService.getNumberOfCanceledIncidents().subscribe(data => {this.canceledIncidents = data; this.checkIfReady()});
    this.incidentService.getNumberOfIssuedIncidents().subscribe(data => {this.issuedIncidents = data; this.checkIfReady()});
    this.incidentService.getNumberOfCompletedIncidents().subscribe(data => {this.completedIncidents = data; this.checkIfReady()});

    this.workRequestService.getNumberOfDraftedWorkRequests().subscribe(data => {this.draftedWorkRequests = data; this.checkIfReady()});
    this.workRequestService.getNumberOfCanceledWorkRequests().subscribe(data => {this.canceledWorkRequests = data; this.checkIfReady()});
    this.workRequestService.getNumberOfIssuedWorkRequests().subscribe(data => {this.issuedWorkRequests = data; this.checkIfReady()});
    this.workRequestService.getNumberOfCompletedWorkRequests().subscribe(data => {this.completedWorkRequests = data; this.checkIfReady()});

    this.safetyDocumentService.getNumberOfDraftedSafetyDocuments().subscribe(data => {this.draftedSafetyDocuments = data; this.checkIfReady()});
    this.safetyDocumentService.getNumberOfCanceledSafetyDocuments().subscribe(data => {this.canceledSafetyDocuments = data; this.checkIfReady()});
    this.safetyDocumentService.getNumberOfIssuedSafetyDocuments().subscribe(data => {this.issuedSafetyDocuments = data; this.checkIfReady()});
    this.safetyDocumentService.getNumberOfCompletedSafetyDocuments().subscribe(data => {this.completedSafetyDocuments = data; this.checkIfReady()});    
  }

  checkIfReady(){
    if(this.draftedIncidents && this.canceledIncidents && this.issuedIncidents && this.completedIncidents && this.draftedWorkRequests && this.canceledWorkRequests && this.issuedWorkRequests && this.completedWorkRequests && this.draftedSafetyDocuments && this.canceledSafetyDocuments && this.issuedSafetyDocuments && this.completedSafetyDocuments){
      for(var idx in cards_info){
      
        switch(cards_info[idx].id){
          case 1:{
            cards_info[idx].drafted = this.draftedIncidents;
            cards_info[idx].canceled = this.canceledIncidents;
            cards_info[idx].issued = this.issuedIncidents;
            cards_info[idx].completed = this.completedIncidents;
            break;
          }
          case 4:{
            cards_info[idx].drafted = this.draftedWorkRequests;
            cards_info[idx].canceled = this.canceledWorkRequests;
            cards_info[idx].issued = this.issuedWorkRequests;
            cards_info[idx].completed = this.completedWorkRequests;
            break;
          }
          case 3:{
            cards_info[idx].drafted = this.draftedSafetyDocuments;
            cards_info[idx].canceled = this.canceledSafetyDocuments;
            cards_info[idx].issued = this.issuedSafetyDocuments;
            cards_info[idx].completed = this.completedSafetyDocuments;
            break;
          }
        }
      }
      this.ready = true;
    }
  }

}
