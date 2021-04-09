import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { equipmentType} from "src/assets/equipmentType.enum";

@Component({
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent implements OnInit {
  public equipmentTypes = Object.values(equipmentType);
  newElementForm = this.formBuilder.group({
    type : equipmentType.Fuse,
    id: "",
    name: "",
    address: "",
    coords: ""    
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(element:any){
    window.alert("temp. Should add element with id: "+ element.id);
  }
}
