import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-work-plan',
  templateUrl: './equipment-work-plan.component.html',
  styleUrls: ['./equipment-work-plan.component.css']
})
export class EquipmentWorkPlanComponent implements OnInit {
  @Input() addWorkPlanForm: FormGroup;
  equipmentList : any [] = [];
  selectedEquipment: any;
  equipments = this.equipmentService.getAllEquipment(); 
  constructor(private equipmentService : EquipmentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.equipmentList.push(this.selectedEquipment);
    console.log(this.selectedEquipment);
  }
}
