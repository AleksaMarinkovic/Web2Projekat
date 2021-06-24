import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableConsumerDataSource, DataTableConsumerItem } from './data-table-consumer-datasource';


@Component({
  selector: 'app-data-table-consumer',
  templateUrl: './data-table-consumer.component.html',
  styleUrls: ['./data-table-consumer.component.css']
})
export class DataTableConsumerComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableConsumerItem>;
  dataSource: DataTableConsumerDataSource;
  
  displayedColumns = ['id', 'firstName', 'lastName', 'location', 'priority', 'phone','consumerType', 'modify', 'delete'];

  constructor() { 
    this.dataSource = new DataTableConsumerDataSource();

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
