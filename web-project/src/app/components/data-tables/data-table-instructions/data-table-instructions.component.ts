import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InstructionService } from 'src/app/services/instruction.service';
import { DataTableItem } from '../data-table-safety-docs/data-table-datasource';

@Component({
  selector: 'app-data-table-instructions',
  templateUrl: './data-table-instructions.component.html',
  styleUrls: ['./data-table-instructions.component.css']
})
export class DataTableInstructionsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<DataTableWorkPlanSwitchingInstructionsItem>(EXAMPLE_DATA);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'element', 'description', 'delete'];
  priority: string = "filled automatically";
  constructor(private instructionsService: InstructionService) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.refresh();
  }
  refresh(){
    this.instructionsService.getAllWorkPlansSW().subscribe(
      data => {       
        EXAMPLE_DATA = data;   
        this.dataSource.data = EXAMPLE_DATA;
        this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);
        console.log(this.dataSource.data);
      }
    ); 
  }
 
}
export interface DataTableWorkPlanSwitchingInstructionsItem{
  workPlanSwitchingInstructionsId: number,
  description: string,
  workPlanId: number,
  equipmentId: number,
}
let EXAMPLE_DATA: DataTableWorkPlanSwitchingInstructionsItem[] =[]