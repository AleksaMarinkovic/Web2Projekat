import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquipmentService } from 'src/app/services/equipment.service';
import { equipmentType} from "src/assets/equipmentType.enum";

@Component({
  selector: 'app-modify-element',
  templateUrl: './modify-element.component.html',
  styleUrls: ['./modify-element.component.css']
})
export class ModifyElementComponent implements OnInit {
  public equipmentTypes = Object.values(equipmentType);
  newElementForm = this.formBuilder.group({
    type : equipmentType.Fuse,
    name: "",
    address: "",
    coordinates: "",
  })
  constructor(private formBuilder: FormBuilder, private equipmentService: EquipmentService, @Inject(MAT_DIALOG_DATA) public data: {element: any}, private dialogRef: MatDialogRef<ModifyElementComponent>) { }

  ngOnInit(): void {
    this.newElementForm = this.formBuilder.group({
      type: this.data.element.type,
      name: this.data.element.name,
      address: this.data.element.address,
      coordinates: this.data.element.coordinates,
      })
  }
  onSubmit(element:any){
    if(this.data){
      element.equipmentId = this.data.element.equipmentId;

      this.equipmentService.putEquipment(element, element.equipmentId).subscribe();    
    }
    else{
      this.equipmentService.postEquipment(element).subscribe();
    }
    this.dialogRef.close(); // <- this closes the dialog. 
    this.newElementForm.reset();    
  }
}
