import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-plans',
  templateUrl: './work-plans.component.html',
  styleUrls: ['./work-plans.component.css']
})
export class WorkPlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onValChange(value: any) {
    window.alert(value)
    //change what we pass as data in datatable
  }
}
