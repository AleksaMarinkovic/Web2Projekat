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
 
  instructionGroup = this.formBuilder.group({
    workPlanSwitchingInstructionsId: 0,
    description: "",
    equipmentName: "", //equipment name
    workPlanId: null,
    equipmentId: null
  });
  displayedColumns = ['id', 'start_date', 'phone_number', 'status', 'address'];
  
  constructor(private instructionService: InstructionService, private formBuilder: FormBuilder
    ) {
    
   }

  ngOnInit(): void {

  }
  onSubmit(instruction: any){
    this.instructionService.postWorkPlansSW(instruction).subscribe();
  }
}
