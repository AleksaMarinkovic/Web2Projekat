import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() card_info :any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
