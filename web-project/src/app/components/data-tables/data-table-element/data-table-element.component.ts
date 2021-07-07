import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EquipmentService } from 'src/app/services/equipment.service';
import { ModifyElementComponent } from '../../modify-element/modify-element.component';
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
  displayedColumns = ['id', 'type', 'name', 'address', 'coordinates', 'modify','delete'];

  constructor(private equipmentService: EquipmentService, public dialog: MatDialog) {
    this.dataSource = new DataTableElementDataSource();
  }

  ngAfterViewInit(): void {
    this.refresh();
  }
  
  modify(element:any){
    const d = this.dialog.open(ModifyElementComponent, {
      data: {element: element}
    });

    d.afterClosed().subscribe(
      () => this.refresh()
    );
  }
  delete(equipment:any){
   this.equipmentService.deleteEquipment(equipment.equipmentId).subscribe(()=>this.refresh());
  }
  refresh(){
    this.equipmentService.getAllEquipment().subscribe(
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
