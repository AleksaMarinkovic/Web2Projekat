import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {documentStates} from "../../../assets/documentStates.enum";
import {safetyDocTypes} from "../../../assets/safetyDocTypes.enum";


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
      type : safetyDocTypes,
      phoneNumber: "",
      dateCreated: "",
      details: "",
      notes: "",   
      lastEditor: "",
      dateEdited: "",
      docState: documentStates,
      safetyDocImage: "",
      equipmentList : "",
      allWorkOperationsCompleted: "",
      allTagsRemoved:"",
      groundingRemoved: "",
      readyForService:""
    });  
  }
}
