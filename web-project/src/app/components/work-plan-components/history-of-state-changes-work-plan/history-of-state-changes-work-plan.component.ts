import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { workPlanStateChange } from 'src/assets/workPlanStateChange.enum';

@Component({
  selector: 'app-history-of-state-changes-work-plan',
  templateUrl: './history-of-state-changes-work-plan.component.html',
  styleUrls: ['./history-of-state-changes-work-plan.component.css']
})
export class HistoryOfStateChangesWorkPlanComponent implements OnInit {
  @Input() addWorkPlanForm!: FormGroup;
  public workPlanStateChange = Object.values(workPlanStateChange);
  constructor() { }

  ngOnInit(): void {
  }

}
