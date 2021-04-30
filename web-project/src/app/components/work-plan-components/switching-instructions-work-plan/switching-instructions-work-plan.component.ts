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
  instructions = this.instructionService.getAllInstructions();
  instructionGroup = this.formBuilder.group({
    instructionDescription: "",
    element: "",
  });

  constructor(private instructionService: InstructionService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }
  submit(instructionGroup: any){
    window.alert("instruction Added");
  }
}
