import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableItem } from '../data-table-safety-docs/data-table-datasource';

@Component({
  selector: 'app-data-table-instructions',
  templateUrl: './data-table-instructions.component.html',
  styleUrls: ['./data-table-instructions.component.css']
})
export class DataTableInstructionsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'element', 'description', 'modify', 'delete'];
  
  constructor() { }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;  
  }

 
}
