import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { DataTableWorkPlanDataSource, DataTableWorkPlanItem } from './data-table-work-plan-datasource';
@Component({
  selector: 'app-data-table-work-plan',
  templateUrl: './data-table-work-plan.component.html',
  styleUrls: ['./data-table-work-plan.component.css']
})
export class DataTableWorkPlanComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableWorkPlanItem>;
  dataSource: DataTableWorkPlanDataSource;

  displayedColumns = ['id', 'startDate', 'phoneNumber', 'status', 'address', 'modify', 'delete'];

  constructor(private workPlanService: WorkPlanService, ) { 
    this.dataSource = new DataTableWorkPlanDataSource();

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.refresh();
  }
 
  delete(row:any){
    this.workPlanService.deleteWorkPlans(row.workPlanId).subscribe(
      () =>  this.refresh()
    )
  }  

  refresh() {
    this.workPlanService.getAllWorkPlans().subscribe(
      data => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);  
        this.table.dataSource = this.dataSource;
      }
    )
  }
}
