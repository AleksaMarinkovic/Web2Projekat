import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentWorkPlanComponent implements OnInit {
 /* @Input() addWorkPlanForm: FormGroup;
  equipmentList : any [] = [];
  selectedEquipment: any;
  equipments = this.equipmentService.getAllEquipment();
  equipmentGroup = this.formBuilder.group({
    newEquipment: ""
  });
*/
  constructor(/*private equipmentService : EquipmentService, */private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
  /*  this.equipmentList.push(this.selectedEquipment);
    console.warn('List is now: ', this.equipmentList);
    console.warn('Added: ', this.equipmentGroup.value);
    */
  }
}
