import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-new-crew',
  templateUrl: './add-new-crew.component.html',
  styleUrls: ['./add-new-crew.component.css']
})
export class AddNewCrewComponent implements OnInit {
  newCrewForm = this.formBuilder.group({
    id: "",
    name: "",
    member: ""

  })
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(crew:any){
    window.alert("temp. Should add crew with id: "+ crew.id);
  }

}
