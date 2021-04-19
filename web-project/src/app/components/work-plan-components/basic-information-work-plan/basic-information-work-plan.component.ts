import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-information-work-plan',
  templateUrl: './basic-information-work-plan.component.html',
  styleUrls: ['./basic-information-work-plan.component.css']
})
export class BasicInformationWorkPlanComponent implements OnInit {
  @Input() addWorkPlanForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
