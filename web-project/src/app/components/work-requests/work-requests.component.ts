import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css']
})
export class WorkRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value: any) {
    window.alert(value)
    //change what we pass as data in datatable
  }
}
