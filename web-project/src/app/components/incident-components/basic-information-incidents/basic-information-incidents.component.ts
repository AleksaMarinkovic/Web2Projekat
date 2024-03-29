import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { incidentTypes, incidentPriorities } from "../../../../assets/Types.enum";
import { incidentStates } from 'src/assets/docStates.enum';

@Component({
  selector: 'app-basic-information-incidents',
  templateUrl: './basic-information-incidents.component.html',
  styleUrls: ['./basic-information-incidents.component.css']
})
export class BasicInformationIncidentsComponent implements OnInit {
  @Input() addIncidentForm: FormGroup;
  public incidentTypes = Object.values(incidentTypes);
  public incidentPriorities = Object.values(incidentPriorities)
  public incidentStates = Object.values(incidentStates)
  constructor() { }

  ngOnInit(): void {
  }

}
