import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { elementProperty } from "../../../assets/elementProperties.enum"

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  columnsToDisplay = ['id', 'type', 'name', 'address', 'coords'];
  dataSource = new MatTableDataSource<SearchElement>(EXAMPLE_DATA);
  elementProperties = Object.values(elementProperty);
  public selectedFilter : string = "Name";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {     
      return data.name.toLowerCase().includes(filter);
    }    
   
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
          return data.id.toString() === filter;
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
      case "Coords":{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.coords.toLowerCase().includes(filter);
        }
        break;
      }

    }
  }
}

export interface SearchElement {
  name: string;
  id: number;
  type: string;
  coords: string;
  address: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SearchElement[] = [
  { id: 1, type: "Fuse", name: "Fuse1", coords: "N12313412/E43243423", address: "Vladike Cirica 10" },
  { id: 2, type: "Switch", name: "Switch1", coords: "N12354312/E4543243423", address: "Safarikova 4" },
  { id: 3, type: "Transformer", name: "Transformer1", coords: "N43313412/E464343423", address: "Suboticka 30" },
  { id: 4, type: "Disconnector", name: "Disconnector1", coords: "N153212/E523243423", address: "Mileve Maric 15" },
  { id: 5, type: "Fuse", name: "Fuse2", coords: "N12313412/E43243423", address: "Vladike Cirica 11" },
  { id: 6, type: "Switch", name: "Switch2", coords: "N12354312/E4543243423", address: "Safarikova 5" },
  { id: 7, type: "Transformer", name: "Transformer2", coords: "N43313412/E464343423", address: "Suboticka 31" },
  { id: 8, type: "Disconnector", name: "Disconnector2", coords: "N153212/E523243423", address: "Mileve Maric 16" },
  { id: 9, type: "Fuse", name: "Fuse3", coords: "N12313412/E43243423", address: "Vladike Cirica 12" },
  { id: 10, type: "Switch", name: "Switch3", coords: "N12354312/E4543243423", address: "Safarikova 3" },
  { id: 11, type: "Transformer", name: "Transformer3", coords: "N43313412/E464343423", address: "Suboticka 4" },
  { id: 12, type: "Disconnector", name: "Disconnector3", coords: "N153212/E523243423", address: "Mileve Maric 62" },
  { id: 13, type: "Fuse", name: "Fuse4", coords: "N12313412/E43243423", address: "Vladike Cirica 123" },
  { id: 14, type: "Switch", name: "Switch4", coords: "N12354312/E4543243423", address: "Safarikova 634" },
  { id: 15, type: "Transformer", name: "Transformer4", coords: "N43313412/E464343423", address: "Suboticka 22" },
  { id: 16, type: "Disconnector", name: "Disconnector4", coords: "N153212/E523243423", address: "Mileve Maric 11" },
  { id: 17, type: "Fuse", name: "Fuse5", coords: "N12313412/E43243423", address: "Vladike Cirica 7" },
  { id: 18, type: "Switch", name: "Switch5", coords: "N12354312/E4543243423", address: "Safarikova 54" },
  { id: 19, type: "Transformer", name: "Transformer5", coords: "N43313412/E464343423", address: "Suboticka 782" },
  { id: 20, type: "Disconnector", name: "Disconnector5", coords: "N153212/E523243423", address: "Mileve Maric 33" },
  { id: 21, type: "Fuse", name: "Fuse6", coords: "N12313412/E43243423", address: "Vladike Cirica 31" },
  { id: 22, type: "Switch", name: "Switch6", coords: "N12354312/E4543243423", address: "Safarikova 23" },
  { id: 23, type: "Transformer", name: "Transformer6", coords: "N43313412/E464343423", address: "Suboticka 43" },
  { id: 24, type: "Disconnector", name: "Disconnector6", coords: "N153212/E523243423", address: "Mileve Maric 151" },
];