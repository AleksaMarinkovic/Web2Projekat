import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';
import { InstructionService } from 'src/app/services/instruction.service';
import { DataTableWorkPlanSwitchingInstructionsItem } from '../../data-tables/data-table-instructions/data-table-instructions.component';

@Component({
  selector: 'app-switching-instructions-work-plan',
  templateUrl: './switching-instructions-work-plan.component.html',
  styleUrls: ['./switching-instructions-work-plan.component.css']
})
export class SwitchingInstructionsWorkPlanComponent implements OnInit {

  @Input() addWorkPlanForm: FormGroup;
  equipments = this.equipmentService.getAllEquipment(); 
  selectedEquipment: any;
  selectedSwitchingInstruction: DataTableWorkPlanSwitchingInstructionsItem;
  switchingInstructionsList: DataTableWorkPlanSwitchingInstructionsItem[] = [];
  description: string = "";
  displayedColumns = ['id', 'start_date', 'phone_number', 'status', 'address'];
  constructor(private equipmentService: EquipmentService, private switchingInstructionService: InstructionService) {
   }

  ngOnInit(): void {

  }
  onSubmit(){
    this.selectedSwitchingInstruction = {
      workPlanSwitchingInstructionsId: 0,
      workPlanId: null,
      equipmentId: this.selectedEquipment.equipmentId,
      description: this.description
    }
    console.log(this.selectedSwitchingInstruction);
    this.switchingInstructionService.postWorkPlansSW(this.selectedSwitchingInstruction).subscribe(
      data => {this.switchingInstructionsList.push(data); console.log(data)}
    );
  }
}
