import { Component, OnInit } from '@angular/core';
import {cards_info} from "../../cards-info";
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
import { WorkRequestService } from 'src/app/services/work-request.service';
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards_info = cards_info;
  pieChartData = [
    {
      data: [-1, -1, -1]
    }
    
  ];
  lineChartData = [
    {
      data: [-1, -1, -1, -1],
      label: 'Planned incident'
    },
    {
      data: [-1, -1, -1, -1],
      label: 'Unplanned incident'
    }
    
  ];
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

  constructor(private workPlanService: WorkPlanService, private incidentService : IncidentService, private workRequestService: WorkRequestService, private safetyDocumentService: SafetyDocumentService) { }

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
    
    this.workRequestService.getNumberOfWorkRequests().subscribe(data => {this.pieChartData[0].data[0] = data; this.checkIfReady()})
    this.workPlanService.getNumberOfWorkPlans().subscribe(data => {this.pieChartData[0].data[1] = data; this.checkIfReady()})
    this.safetyDocumentService.getNumberOfSafetyDocuments().subscribe(data => {this.pieChartData[0].data[2] = data; this.checkIfReady()})
    
    this.incidentService.getPlannedIncidents().subscribe(data=>{this.lineChartData[0].data = data; this.checkIfReady(); console.log(this.lineChartData[0].data + "Planned numbers")})
    this.incidentService.getUnplannedIncidents().subscribe(data=>{this.lineChartData[1].data = data; this.checkIfReady(); console.log(this.lineChartData[1].data + "Unplanned numbers")})

  }

  checkIfReady(){    
    if(this.draftedIncidents >= 0 && this.canceledIncidents >= 0  && this.issuedIncidents >= 0  && this.completedIncidents >= 0  && this.draftedWorkRequests >= 0  && this.canceledWorkRequests >= 0  && this.issuedWorkRequests >= 0  && this.completedWorkRequests >= 0  && this.draftedSafetyDocuments >= 0  && this.canceledSafetyDocuments >= 0  && this.issuedSafetyDocuments >= 0  && this.completedSafetyDocuments >= 0 && this.pieChartData[0].data[0] >= 0 && this.pieChartData[0].data[1] >= 0 && this.pieChartData[0].data[2] >= 0 && this.lineChartData[0].data[0] >= 0 && this.lineChartData[0].data[1] >= 0 && this.lineChartData[0].data[2] >= 0 && this.lineChartData[0].data[3] >= 0 && this.lineChartData[1].data[0] >= 0 && this.lineChartData[1].data[1] >= 0 && this.lineChartData[1].data[2] >= 0 && this.lineChartData[1].data[3] >= 0){
      for(var idx in cards_info){
      
        switch(cards_info[idx].id){
          case 1:{
            cards_info[idx].drafted = this.draftedIncidents;
            cards_info[idx].canceled = this.canceledIncidents;
            cards_info[idx].issued = this.issuedIncidents;
            cards_info[idx].completed = this.completedIncidents;
            break;
          }
          case 3:{
            cards_info[idx].drafted = this.draftedWorkRequests;
            cards_info[idx].canceled = this.canceledWorkRequests;
            cards_info[idx].issued = this.issuedWorkRequests;
            cards_info[idx].completed = this.completedWorkRequests;
            break;
          }
          case 4:{
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
