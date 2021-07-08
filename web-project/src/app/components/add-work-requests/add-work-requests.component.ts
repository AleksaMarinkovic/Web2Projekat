import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { workRequestStates } from 'src/assets/docStates.enum';
import { workReqTypes } from 'src/assets/Types.enum';
import { WorkRequestService } from 'src/app/services/work-request.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: './add-work-requests.component.html',
  styleUrls: ['./add-work-requests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWorkRequestsComponent implements OnInit {

  addWorkRequestForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private workRequestService: WorkRequestService, private _router: Router) { }

  ngOnInit(): void {
    this.addWorkRequestForm = this.formBuilder.group({
      
      type : workReqTypes.PlannedWork,
      street: "",
      startDate: "",
      endDate: "",
      purpose: "",
      notes: "",
      emergencyWork : false,
      company: "",
      phoneNumber:"",
      createdDate: "",
      lastEditor: "",
      dateEdited: "",
      docState: workRequestStates.Issued,
      wrImage: "",
      incidents: "",
      equipment : "",
    });  
  }
  onSubmit(workRequest: any){
    this.workRequestService.postWorkRequest(workRequest).subscribe();
    console.log(workRequest);    
    this.addWorkRequestForm.reset();   
    this._router.navigate(['/workRequests']);
  }
}
