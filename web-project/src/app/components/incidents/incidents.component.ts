import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onValChange(value: any) {
    window.alert(value)
    //change what we pass as data in datatable
  }
}
