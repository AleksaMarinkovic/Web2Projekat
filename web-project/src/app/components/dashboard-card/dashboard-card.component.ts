import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { DataTableWorkPlanItem } from '../data-tables/data-table-work-plan/data-table-work-plan-datasource';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() card_info :any;

  constructor() { }

  ngOnInit(): void {  
  }  
}
