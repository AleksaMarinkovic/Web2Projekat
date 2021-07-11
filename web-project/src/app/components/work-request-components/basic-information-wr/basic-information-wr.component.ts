import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { workReqTypes } from "../../../../assets/Types.enum";

@Component({
  selector: 'app-basic-information-wr',
  templateUrl: './basic-information-wr.component.html',
  styleUrls: ['./basic-information-wr.component.css']
})
export class BasicInformationWrComponent implements OnInit {
  @Input() addWorkRequestForm: FormGroup;
  public workReqTypes = Object.values(workReqTypes);
  displayUnnecesaryFields = "true";

  constructor() {
    if(localStorage.getItem("displayUnnecesaryFields").length != 0){
      this.displayUnnecesaryFields = localStorage.getItem("displayUnnecesaryFields");
    }
   }

  ngOnInit(): void {
  }

}
