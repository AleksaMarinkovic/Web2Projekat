import { Component, Inject, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import { EquipmentService } from 'src/app/services/equipment.service';
import { equipmentType} from "src/assets/equipmentType.enum";
import { DataTableElementItem } from '../data-tables/data-table-element/data-table-element-datasource';
import { Router } from '@angular/router'
@Component({
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent implements OnInit {
  
  public equipmentTypes = Object.values(equipmentType);

  checkCoords(group: AbstractControl){    
    let coords = group.value;    
    var tempNumber= coords.split(",");
    console.log((tempNumber[0] > 90 || tempNumber[0] < -90))
    if(tempNumber.length != 2 || (tempNumber[0] > 90 || tempNumber[0] < -90) || (tempNumber[1] > 180 || tempNumber[1] < -180) || (tempNumber[0] == "") || (tempNumber[1] == "")){
      return {notValid: true}
    }
    return null;
  }

  newElementForm = this.formBuilder.group({
    id: 0,
    type : equipmentType.Fuse,
    name: ['',Validators.required],
    address: ['',Validators.required],
    coordinates: ["0,0", [Validators.required, this.checkCoords]],
  })
  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService, private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(equipment: DataTableElementItem){
    this.equipmentService.postEquipment(equipment).subscribe();
    console.log(equipment);    
    this._router.navigate(['/addElement']);
  }
}
