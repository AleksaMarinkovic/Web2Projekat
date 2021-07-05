import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InstructionService } from 'src/app/services/instruction.service';

@Component({
  selector: 'app-switching-instructions-work-plan',
  templateUrl: './switching-instructions-work-plan.component.html',
  styleUrls: ['./switching-instructions-work-plan.component.css']
})
export class SwitchingInstructionsWorkPlanComponent implements OnInit {

  @Input() addWorkPlanForm: FormGroup;
  instructionsList : any [] = [];
  selectedInstruction: any;
  instructionGroup = this.formBuilder.group({
    instructionDescription: "",
    element: "",
  });
  displayedColumns = ['id', 'start_date', 'phone_number', 'status', 'address'];
  
  constructor(private instructionService: InstructionService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }
  submit(instructionGroup: any){
    window.alert("instruction Added");
  }
}
export interface DataTableWorkPlanSwitchingInstructionsItem{
  workPlanSwitchingInstructionsId: number,
  element: string,
  description: string,
  workPlanId: number,
}