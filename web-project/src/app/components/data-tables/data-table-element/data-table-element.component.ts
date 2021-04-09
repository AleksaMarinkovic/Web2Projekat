import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableElementDataSource, DataTableElementItem } from './data-table-element-datasource';

@Component({
  selector: 'app-data-table-element',
  templateUrl: './data-table-element.component.html',
  styleUrls: ['./data-table-element.component.css']
})
export class DataTableElementComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableElementItem>;
  dataSource: DataTableElementDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type', 'coords', 'address', 'modify','delete'];

  constructor() {
    this.dataSource = new DataTableElementDataSource();
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
