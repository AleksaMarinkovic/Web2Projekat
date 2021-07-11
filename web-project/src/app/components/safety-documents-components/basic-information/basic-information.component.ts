import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { safetyDocTypes } from "../../../../assets/Types.enum";

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  @Input() addSafetyDocumentForm: FormGroup;
  public safetyDocTypes = Object.values(safetyDocTypes);
  displayUnnecesaryFields = "true";

  constructor() {
    if(localStorage.getItem("displayUnnecesaryFields").length != 0){
      this.displayUnnecesaryFields = localStorage.getItem("displayUnnecesaryFields");
    }
   }

  ngOnInit(): void {
  }

}
