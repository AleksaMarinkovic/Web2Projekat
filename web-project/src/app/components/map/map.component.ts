import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {EquipmentService} from 'src/app/services/equipment.service'

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  startLatitude = 45.25677297178288;
  startLongitude = 19.842468023563324;
  allEquipment = this.equipmentService.getAllEquipment();
  constructor(private equipmentService : EquipmentService) { }

  ngOnInit(): void {
}

}
