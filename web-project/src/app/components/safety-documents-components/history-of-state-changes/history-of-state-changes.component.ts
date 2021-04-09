import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { documentStates } from "../../../../assets/documentStates.enum";

@Component({
  selector: 'app-history-of-state-changes',
  templateUrl: './history-of-state-changes.component.html',
  styleUrls: ['./history-of-state-changes.component.css']
})
export class HistoryOfStateChangesComponent implements OnInit {
  @Input() addSafetyDocumentForm: FormGroup;
  public documentStates = Object.values(documentStates);
  constructor() { }

  ngOnInit(): void {
  }

}
