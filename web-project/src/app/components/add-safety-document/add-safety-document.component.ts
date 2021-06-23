import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {safetyDocumentStates} from "../../../assets/docStates.enum";
import {safetyDocTypes} from "../../../assets/Types.enum";


@Component({
  templateUrl: './add-safety-document.component.html',
  styleUrls: ['./add-safety-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddSafetyDocumentComponent implements OnInit {

  addSafetyDocumentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addSafetyDocumentForm = this.formBuilder.group({
      type : safetyDocTypes.PlannedWork,
      phoneNumber: "",
      dateCreated: "",
      details: "",
      notes: "",   
      lastEditor: "",
      dateEdited: "",
      docState: safetyDocumentStates.Issue,
      safetyDocImage: "",
      equipmentList: this.formBuilder.group({
        newEquipment: "",
      }),
      allWorkOperationsCompleted: "",
      allTagsRemoved:"",
      groundingRemoved: "",
      readyForService:""
    });  
  }
}
