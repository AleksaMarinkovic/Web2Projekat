import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { EquipmentService } from 'src/app/services/equipment.service';
import { equipmentType} from "src/assets/equipmentType.enum";
import { DataTableElementItem } from '../data-tables/data-table-element/data-table-element-datasource';

@Component({
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent implements OnInit {
  public equipmentTypes = Object.values(equipmentType);
  newElementForm = this.formBuilder.group({
    id: 0,
    type : equipmentType.Fuse,
    name: "",
    address: "",
    coordinates: "",
  })
  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService) { }

  ngOnInit(): void {
  }
  onSubmit(equipment: DataTableElementItem){
    this.equipmentService.postEquipment(equipment).subscribe();
    console.log(equipment);
    this.newElementForm.reset();    
  }
}
