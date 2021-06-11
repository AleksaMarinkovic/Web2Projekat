import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { causeTypes, constructionType, incidentTypes, materialType, subcauseTypes } from 'src/assets/Types.enum';
import { incidentPriorities } from 'src/assets/Types.enum';

@Component({
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddIncidentComponent implements OnInit {

  addIncidentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addIncidentForm = this.formBuilder.group({
      
      type : incidentTypes.PlannedIncident,
      priority: incidentPriorities.Important,
      approved: false,
      ETA: "",
      ATA: "",
      dateOccured : "",
      ETR: "",
      affectedConsumers: "",
      numberOfCalls: "",
      voltage: "",
      scheduledTime: "",
      resolver: "",
      incidentImage: "",
      equipmentList : "",
      cause : causeTypes.Failure,
      subcause: subcauseTypes.Hailstorm,
      constructionType: constructionType.Surface,
      material: materialType.Metal
    });  
  }

}
