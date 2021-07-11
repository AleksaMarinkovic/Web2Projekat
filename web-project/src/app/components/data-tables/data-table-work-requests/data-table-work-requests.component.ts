import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableWorkRequestsDataSource, DataTableWorkRequestsItem } from './data-table-work-requests-datasource';
import { WorkRequestService } from 'src/app/services/work-request.service';

@Component({
  selector: 'app-data-table-work-requests',
  templateUrl: './data-table-work-requests.component.html',
  styleUrls: ['./data-table-work-requests.component.css']
})
export class DataTableWorkRequestsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableWorkRequestsItem>;
  dataSource: DataTableWorkRequestsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['workRequestId', 'startDate', 'phoneNumber', 'docState', 'street'];

  constructor(private workRequestService: WorkRequestService) {
    this.dataSource = new DataTableWorkRequestsDataSource();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  refresh(){
    this.workRequestService.getAllWorkRequests().subscribe(
      data => {       
        console.log(data);
        this.dataSource.data = data;   
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.table.dataSource = this.dataSource; 
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);
           
      }
    ); 
  }

  onValChange(value: any) {
    if(value == "All"){
      this.workRequestService.getAllWorkRequests().subscribe(
        data => {       
          console.log(data);
          this.dataSource.data = data;   
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator; 
          this.table.dataSource = this.dataSource; 
          this.dataSource.paginator._changePageSize(this.paginator.pageSize);
             
        }
      ); 
    }
    if(value == "Mine"){
      this.workRequestService.getAllWorkRequestsCreatedByUser(localStorage.getItem("id")).subscribe(
        data => {       
          console.log(data);
          this.dataSource.data = data;   
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator; 
          this.table.dataSource = this.dataSource; 
          this.dataSource.paginator._changePageSize(this.paginator.pageSize);
             
        }
      ); 
    }
  }
}
