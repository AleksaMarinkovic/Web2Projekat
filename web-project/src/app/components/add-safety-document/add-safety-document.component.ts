import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {safetyDocumentStates} from "../../../assets/docStates.enum";
import {safetyDocTypes} from "../../../assets/Types.enum";
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: './add-safety-document.component.html',
  styleUrls: ['./add-safety-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddSafetyDocumentComponent implements OnInit {

  addSafetyDocumentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private safetyDocumentService: SafetyDocumentService, private _router: Router) { }

  ngOnInit(): void {
    this.addSafetyDocumentForm = this.formBuilder.group({
      type : safetyDocTypes.PlannedWork,
      phoneNumber: "",
      dateCreated: "",
      details: "",
      notes: "",   
      lastEditor: "",
      dateEdited: "",
      state: safetyDocumentStates.Issued,
      createdBy: "",
      docImage: "",
      equipment: "",
      allWorkOperationsCompleted: false,
      allTagsRemoved: false,
      groundingRemoved: false,
      readyForService: false,
      crewId: 0,
      workPlan: null,
    });  
  }
  onSubmit(safetyDocument: any){
    this.safetyDocumentService.postSafetyDocument(safetyDocument).subscribe();
    console.log(safetyDocument);
    this.addSafetyDocumentForm.reset();   
    this._router.navigate(['/safetyDocuments']);
  }
}
