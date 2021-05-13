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
  equipmentGroup = this.formBuilder.group({
    newEquipment: ""
  });

  constructor(private equipmentService : EquipmentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.equipmentList.push(this.selectedEquipment);
    console.warn('List is now: ', this.equipmentList);
    console.warn('Added: ', this.equipmentGroup.value);
    
  }
}
