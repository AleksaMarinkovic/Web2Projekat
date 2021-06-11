import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { workRequestStates } from 'src/assets/docStates.enum';

@Component({
  selector: 'app-history-of-state-changes-wr',
  templateUrl: './history-of-state-changes-wr.component.html',
  styleUrls: ['./history-of-state-changes-wr.component.css']
})
export class HistoryOfStateChangesWrComponent implements OnInit {

  @Input() addWorkRequestForm: FormGroup;
  public workRequestStates = Object.values(workRequestStates);
  constructor() { }
  ngOnInit(): void {
  }

}
