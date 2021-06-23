import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EquipmentService } from '../../../services/equipment.service';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  @Input() addSafetyDocumentForm: FormGroup;
  equipmentList : any [] = [];
  selectedEquipment: any;
  equipments = this.equipmentService.getAllEquipment();

  constructor(private equipmentService : EquipmentService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }
  onSubmit(){
    this.equipmentList.push(this.selectedEquipment);
    console.warn('List is now: ', this.equipmentList);
    
  }
}
