import { AfterViewInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConsumerService } from 'src/app/services/consumer.service';
import { DataTableConsumerDataSource, DataTableConsumerItem, EXAMPLE_DATA } from '../data-tables/data-table-consumer/data-table-consumer-datasource';

@Component({
  selector: 'app-consumer-dialogue',
  templateUrl: './consumer-dialogue.component.html',
  styleUrls: ['./consumer-dialogue.component.css']
})
export class ConsumerDialogueComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableConsumerItem>;
  dataSource = new MatTableDataSource<DataTableConsumerItem>(EXAMPLE_DATA);
  displayedColumns = ['id', 'name', 'lastname', 'location', 'priority', 'phoneNumber','consumerType', 'select'];
  public selectedFilter : string = "";
  constructor(
    public dialogRef: MatDialogRef<ConsumerDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataTableConsumerItem,
    private consumerService: ConsumerService
  ) { 
  }
  ngAfterViewInit(): void {
    this.refresh();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();   
  }

  refresh(){
    this.consumerService.getAllConsumers().subscribe(
      data =>{
        this.dataSource = new MatTableDataSource<DataTableConsumerItem>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.table.dataSource = this.dataSource;         
      }
    ); 
  }
}
