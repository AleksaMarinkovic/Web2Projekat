import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableWorkRequestsDataSource, DataTableWorkRequestsItem } from './data-table-work-requests-datasource';

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
  displayedColumns = ['id', 'start_date', 'phone_number', 'status', 'address'];

  constructor() {
    this.dataSource = new DataTableWorkRequestsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
