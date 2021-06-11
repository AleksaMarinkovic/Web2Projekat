import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { safetyDocumentStates } from "../../../../assets/docStates.enum";

@Component({
  selector: 'app-history-of-state-changes',
  templateUrl: './history-of-state-changes.component.html',
  styleUrls: ['./history-of-state-changes.component.css']
})
export class HistoryOfStateChangesComponent implements OnInit {
  @Input() addSafetyDocumentForm: FormGroup;
  public safetyDocumentStates = Object.values(safetyDocumentStates);
  constructor() { }

  ngOnInit(): void {
  }

}
