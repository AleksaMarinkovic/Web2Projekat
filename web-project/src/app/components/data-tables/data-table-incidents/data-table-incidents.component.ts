import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableIncidentsDataSource, DataTableIncidentsItem } from './data-table-incidents-datasource';

@Component({
  selector: 'app-data-table-incidents',
  templateUrl: './data-table-incidents.component.html',
  styleUrls: ['./data-table-incidents.component.css']
})
export class DataTableIncidentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableIncidentsItem>;
  dataSource: DataTableIncidentsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'type', 'priority', 'status', 'ETA'];

  constructor() {
    this.dataSource = new DataTableIncidentsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
