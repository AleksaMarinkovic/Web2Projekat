import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './safety-documents.component.html',
  styleUrls: ['./safety-documents.component.css']
})
export class SafetyDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value:any){
    window.alert(value)
    //change what we pass as data in datatable
}
}
