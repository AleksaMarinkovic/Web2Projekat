import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IncidentService } from '../../../services/incident.service';

@Component({
  selector: 'app-incidents-wr',
  templateUrl: './incidents-wr.component.html',
  styleUrls: ['./incidents-wr.component.css']
})
export class IncidentsWrComponent implements OnInit {
  @Input() addWorkRequestForm: FormGroup;
  incidentList :any [] = [];
  selectedIncident: any;
  incidents = this.incidentService.getAllIncidents();
  constructor(private incidentService : IncidentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.incidentList.push(this.selectedIncident);
    console.warn('List is now: ', this.incidentList);  
  }
}
