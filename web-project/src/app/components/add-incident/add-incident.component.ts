import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { causeTypes, constructionType, incidentTypes, materialType, subcauseTypes } from 'src/assets/Types.enum';
import { incidentPriorities } from 'src/assets/Types.enum';
import { IncidentService } from 'src/app/services/incident.service';
import { Router } from '@angular/router'
import { incidentStates } from 'src/assets/docStates.enum';

@Component({
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddIncidentComponent implements OnInit {

  addIncidentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private incidentService: IncidentService, private _router: Router) { }

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
    console.log(incident);    
    this.addIncidentForm.reset();   
    this._router.navigate(['/incidents']);
  }
}
