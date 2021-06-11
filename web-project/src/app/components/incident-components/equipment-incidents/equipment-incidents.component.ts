import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EquipmentService } from '../../../services/equipment.service';

@Component({
  selector: 'app-equipment-incidents',
  templateUrl: './equipment-incidents.component.html',
  styleUrls: ['./equipment-incidents.component.css']
})
export class EquipmentIncidentsComponent implements OnInit {
  @Input() addIncidentForm: FormGroup;
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
