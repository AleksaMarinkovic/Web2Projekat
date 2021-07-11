import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { SafetyDocumentService } from 'src/app/services/safety-document.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['safetyDocumentId', 'type', 'state', 'phoneNumber', 'dateCreated'];

  constructor(private safetyDocumentService: SafetyDocumentService) {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  refresh(){
    this.safetyDocumentService.getAllSafetyDocuments().subscribe(
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
  onValChange(value:any){
    if(value == "All"){
      this.safetyDocumentService.getAllSafetyDocuments().subscribe(
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
      this.safetyDocumentService.getAllSafetyDocumentsCreatedByUser(localStorage.getItem("id")).subscribe(
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
