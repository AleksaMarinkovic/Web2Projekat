import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { CallService } from 'src/app/services/call.service';
import { reasonTypes } from 'src/assets/reasonTypes.enum';
import { DataTableItem } from '../../data-table/data-table-datasource';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource = new MatTableDataSource<DataTableCallItem>(EXAMPLE_DATA);
  
  /** Columns displayed in the table. Columns callIds can be added, removed, or reordered. */
  displayedColumns = ['id', 'reason', 'hazardName','hazardPriority', 'comment', 'mapIcon'];
  constructor(private callService: CallService) {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    
   }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.callService.getAllCalls().subscribe(
      data =>  {
        EXAMPLE_DATA = data;
        this.dataSource = new MatTableDataSource<DataTableCallItem>(EXAMPLE_DATA);
      }
    );
  }

}
export interface DataTableCallItem{
  callId: number;
  reason: reasonTypes;
  hazardName: string;
  hazardPriority: string;
  comment: string;
}

// TODO: replace this with real data from your application
export let EXAMPLE_DATA: DataTableCallItem[] = [
 
]
  