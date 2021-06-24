import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<Call>(EXAMPLE_DATA);
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'reason', 'hazardName','hazardPriority', 'comment', 'mapIcon'];
  constructor() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    
   }

  ngOnInit(): void {
  }

}
export interface Call{
  id: number;
  reason: reasonTypes;
  hazardName: string;
  hazardPriority: string;
  comment: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Call[] = [
  { id: 1, reason: reasonTypes.blinkingLights, hazardName: "Description 1",hazardPriority: "Description 1",  comment: ""},
  { id: 2, reason: reasonTypes.electricityReturned, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
  { id: 3, reason: reasonTypes.malfunction, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
  { id: 4, reason: reasonTypes.noElectricity, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
  { id: 5, reason: reasonTypes.partialElectricity, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
  { id: 6, reason: reasonTypes.voltageIssues, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
  { id: 7, reason: reasonTypes.electricityReturned, hazardName: "Description 1",hazardPriority: "Description 1", comment: "" },
]
  