import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @Input() addSafetyDocumentForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
