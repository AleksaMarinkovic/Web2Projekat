import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  equipment: any = [];
  constructor(private httpClient: HttpClient) { }
  getEquipment() {
    return this.equipment;
  }

  addToEquipmentList(equipment: any) {
    this.equipment.push(equipment);
  }

  getAllEquipment() {
    return this.httpClient.get<{ id: number, type: string; name: string, address: string, coords: string }[]>(
      "/assets/equipmentTemp.json"
    );
  }
}
