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

  items: any[];
  executing = 0;
  drafts = 0;
  completed = 0;
  cancelled = 0;
  issued = 0;

  constructor(private route: ActivatedRoute, private workPlansService: WorkPlanService) { }

  ngOnInit(): void {
    switch(this.card_info.title){
      case "MY INCIDENTS":{
        break;
      }
      case "MY WORK PLANS":{
        this.workPlansService.getAllWorkPlans().subscribe(
          data => {
            this.items = data;
            this.items.forEach(item => this.cardCalculations(item))
          }
        )
        break;
      }
      case "MY WORK REQUESTS" :{
        break;
      }
      case "MY SAFETY DOCUMENTS": {
        break;
      }
    }
  }

  cardCalculations(item: any){
    switch(item.status){
      case "Draft":{
        this.drafts = this.drafts + 1;
        break;
      }
      case "Completed":{
        this.completed = this.completed + 1;
        break;
      }
      case "Executing":{
        this.issued = this.issued + 1;
        break;
      }
      case "Cancelled":{
        this.cancelled = this.cancelled + 1;
        break;
      }
      case "Issued":{
        this.issued = this.issued + 1;
      }
    }
  }
}
