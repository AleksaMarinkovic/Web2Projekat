import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentService } from '../../../services/equipment.service';
import { MapDialogComponent } from '../../map-dialog/map-dialog.component';
import { DataTableElementItem } from '../../data-tables/data-table-element/data-table-element-datasource';

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
  newElement : DataTableElementItem = {
    equipmentId: 0,  
    type: "",
    name: "",
    address: "",
    coordinates: ""
  };
  constructor(private equipmentService : EquipmentService,  public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.equipmentList.push(this.selectedEquipment);
    console.warn('List is now: ', this.equipmentList);
  }
  openMap(equipment: any){    
    this.newElement.address = equipment.address;
    this.newElement.type = equipment.type;
    this.newElement.name = equipment.name;
    this.newElement.coordinates = equipment.coordinates;
    const d = this.dialog.open(MapDialogComponent, {
      minWidth : 500,
      minHeight: 500,
      data: {element: this.newElement}
    })
  }

}
