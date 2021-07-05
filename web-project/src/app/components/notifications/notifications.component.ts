import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {  

  dataSource = new MatTableDataSource<DataTableNotificationsItem>(EXAMPLE_DATA);
  elementProperties = Object.values(notificationTypesDisplayed);
  
  public selectedFilter : string = "All";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay = ['notificationId', 'type', 'description', 'timestamp', 'read'];

  constructor(private _notificationService: NotificationService) {
  }

  ngOnInit(): void {  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {     
      return data.type.toLowerCase().includes(filter);
    }    
  };
  applyFilter(filterValue: string) {   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onChange(elementValue: any){
    this.selectedFilter = elementValue.value;
    console.log(elementValue.value);
    
    if(this.selectedFilter == "Unread"){
      this.dataSource.filterPredicate = function (data, filter: string): boolean {     
        return data.read.toLowerCase().includes(filter);
      }
    } else if(this.selectedFilter == "All"){
      this.dataSource.filterPredicate = function (data, filter: string): boolean {     
        return true;
      }
    } else if(this.selectedFilter == "Read."){
      this.dataSource.filterPredicate = function (data, filter: string): boolean {     
        return data.read.toLowerCase().includes(filter);
      }
    } else{
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.type.toLowerCase().includes(filter);
      }
    }

    this.applyFilter(this.selectedFilter);
  }
  AllRead(){
    alert("read All");
  }
  MarkAsRead(element : any){
    alert("read " + element)
  }
}
export interface DataTableNotificationsItem {
  notificationId: number;
  description: string;
  type: notificationTypes;
  timestamp: number;
  read: notificationTypesDisplayed;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: DataTableNotificationsItem[] = [
  { notificationId: 1, type: notificationTypes.Error, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Unread},
  { notificationId: 2, type: notificationTypes.Warning, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
  { notificationId: 3, type: notificationTypes.Warning, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
  { notificationId: 4, type: notificationTypes.SuccessfulAction, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
  { notificationId: 5, type: notificationTypes.SuccessfulAction, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
  { notificationId: 6, type: notificationTypes.SuccessfulAction, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Unread },
  { notificationId: 7, type: notificationTypes.Information, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
  { notificationId: 8, type: notificationTypes.Error, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Unread },
  { notificationId: 9, type: notificationTypes.Error, description: "Description 1", timestamp: Date.now(), read: notificationTypesDisplayed.Read },
 
  
];