import { Component, OnInit, Input } from '@angular/core';
import { causeTypes, subcauseTypes, constructionType, materialType } from "../../../../assets/Types.enum"
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-resolution-incidents',
  templateUrl: './resolution-incidents.component.html',
  styleUrls: ['./resolution-incidents.component.css']
})
export class ResolutionIncidentsComponent implements OnInit {
  @Input() addIncidentForm: FormGroup;
  public causeTypes = Object.values(causeTypes);
  public subcauseTypes = Object.values(subcauseTypes);
  public constructionTypes = Object.values(constructionType);
  public materialTypes = Object.values(materialType);


  constructor() { }

  ngOnInit(): void {
  }

}
