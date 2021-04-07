import { Component, OnInit } from '@angular/core';
import {cards_info} from "../../cards-info";

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards_info = cards_info;
  constructor() { }

  ngOnInit(): void {
  }

}
