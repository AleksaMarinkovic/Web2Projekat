import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
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

  displayedColumns = ['id', 'startDate', 'phoneNumber', 'status', 'address'];

  constructor() { 
    this.dataSource = new DataTableWorkPlanDataSource();

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  modify(rowId:any){
    window.alert("temp, should modify element with id: " + rowId);
  }
  delete(rowId:any){
    window.alert("temp, should delete element with id: " + rowId);
  }  
}
