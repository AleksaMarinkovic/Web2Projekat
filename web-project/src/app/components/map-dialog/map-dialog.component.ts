import { MapsAPILoader } from '@agm/core';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataTableElementItem } from '../data-tables/data-table-element/data-table-element-datasource';
@Component({
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {
  equipment: any;
  _lat: number=0;
  _lng: number=0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {element :any }) 
  {
  }

  ngOnInit(): void {
    this.equipment = this.data.element;
    var splittedCoords = this.data.element.coordinates.split(",");
    this._lat = parseFloat(splittedCoords[0]);
    this._lng = parseFloat(splittedCoords[1]);
  }

}
