import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { workRequestStates } from 'src/assets/docStates.enum';
import { workReqTypes } from 'src/assets/Types.enum';

@Component({
  templateUrl: './add-work-requests.component.html',
  styleUrls: ['./add-work-requests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWorkRequestsComponent implements OnInit {

  addWorkRequestForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addWorkRequestForm = this.formBuilder.group({
      
      type : workReqTypes.PlannedWork,
      street: "",
      startDate: "",
      endDate: "",
      purpose: "",
      notes: "",
      emergency : "",
      company: "",
      phoneNumber:"",
      createdDate: "",
      lastEditor: "",
      dateEdited: "",
      docState: workRequestStates.Issue,
      workRequestImage: "",
      equipmentList : "",
    });  
  }

}
