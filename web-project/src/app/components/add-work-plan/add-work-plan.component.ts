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
      workPlanDocumentType: workPlanDocumentTypes.Planned,
      status: workPlanTypes.Draft,
      WorkRequest: "",/*to be changed to workRequest */
      incident: "",/*to be changed to Incident*/
      address: "",
      startWorkDate: "",
      endWorkDate: "",
      createdBy: "", /*to be changed to current User*/ 
      crew: "",/*to be changed to chosing crew*/ 
      purpose: "",
      notes: "",
      company: "",
      phoneNumber: "",
      created: "",
      workPlanImage: "",
      lastEditor: "",
      dateEdited: "",
      docState: workPlanStateChange.Approve,
      equipmentList: "",
      instructionList: "",
    });
  }

}
