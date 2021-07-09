import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { workPlanStateChange } from 'src/assets/workPlanStateChange.enum';
import { workPlanDocumentTypes } from 'src/assets/workPlantDocumentTypes.enum';
import { workPlanTypes } from 'src/assets/workPlanTypes.enum';

@Component({
  selector: 'app-add-work-plan',
  templateUrl: './add-work-plan.component.html',
  styleUrls: ['./add-work-plan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWorkPlanComponent implements OnInit {
  addWorkPlanForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      createdBy: "", /*to be changed to current User*/ 
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

}
