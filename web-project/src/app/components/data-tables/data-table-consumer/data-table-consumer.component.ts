import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ConsumerService } from 'src/app/services/consumer.service';
import { AddNewConsumerComponent } from '../../add-new-consumer/add-new-consumer.component';
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
  displayedColumns = ['consumerId', 'firstName', 'lastName', 'location', 'priority', 'phone','consumerType', 'modify', 'delete'];

  constructor(private consumerService: ConsumerService, public dialog: MatDialog) {    
    this.dataSource = new DataTableConsumerDataSource();
  }
  
  ngAfterViewInit (): void {
    this.refresh();
  }

  modify(consumer: any){
    const d = this.dialog.open(AddNewConsumerComponent, {
      data: {consumer: consumer}
    });

    d.afterClosed().subscribe(
      () => this.refresh()
    );
  }
  delete(consumer: any){  
     this.consumerService.deleteConsumer(consumer.consumerId).subscribe(
       () => this.refresh()
     );
  }  

  refresh(){
    this.consumerService.getAllConsumers().subscribe(
      data =>{
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.table.dataSource = this.dataSource;       
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);  
      }
    ); 
  }
}
