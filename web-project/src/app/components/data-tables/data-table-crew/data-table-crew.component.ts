import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableCrewDataSource, DataTableCrewItem } from './data-table-crew-datasource';

@Component({
  selector: 'app-data-table-crew',
  templateUrl: './data-table-crew.component.html',
  styleUrls: ['./data-table-crew.component.css']
})
export class DataTableCrewComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableCrewItem>;
  dataSource: DataTableCrewDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','member', 'modify','delete'];

  constructor() {
    this.dataSource = new DataTableCrewDataSource();
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
