import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { elementProperty } from "../../../assets/elementProperties.enum"
import { EquipmentService } from 'src/app/services/equipment.service';
import { DataTableElementDataSource, DataTableElementItem } from '../data-tables/data-table-element/data-table-element-datasource';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  columnsToDisplay = ['equipmentId', 'type', 'name', 'address', 'coordinates'];
  dataSource = new MatTableDataSource<DataTableElementItem>();
  elementProperties = Object.values(elementProperty);
  public selectedFilter : string = "Name";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private equipmentService: EquipmentService){
    
  }

  ngAfterViewInit(): void {
    this.refresh();  
 
  }
  refresh(){
    this.equipmentService.getAllEquipment().subscribe(
      data =>{       
        this.dataSource.data = data;   
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.name.toLowerCase().includes(filter);
        }    
      }
    );       
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onChange(elementValue: any){
    
    this.selectedFilter = elementValue.value;
    console.log(elementValue.value);
    switch(this.selectedFilter){
      case "ID":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.equipmentId.toString() === filter;
        }
        break;
      }
      case "Type":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.type.toLowerCase().includes(filter);
        }
        break;
      }
      case "Name":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.name.toLowerCase().includes(filter);
        }
        break;
      }
      case "Address":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.address.toLowerCase().includes(filter);
        }
        break;
      }
      case "Coordinates":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.coordinates.toLowerCase().includes(filter);
        }
        break;
      }

    }
  }
}