import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableIncidentsDataSource, DataTableIncidentsItem } from './data-table-incidents-datasource';
import { IncidentService } from 'src/app/services/incident.service';

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
  displayedColumns = ['incidentId', 'type', 'priority', 'cause', 'eta'];

  constructor(private incidentService: IncidentService) {
    this.dataSource = new DataTableIncidentsDataSource();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  refresh(){
    this.incidentService.getAllIncidents().subscribe(
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
      this.incidentService.getAllIncidents().subscribe(
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
      this.incidentService.getAllIncidentsCreatedByUser(localStorage.getItem("id")).subscribe(
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
