import { AfterViewInit, Component, OnInit } from '@angular/core';
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

export class NotificationsComponent implements AfterViewInit  {  

  dataSource = new MatTableDataSource<DataTableNotificationsItem>(EXAMPLE_DATA);
  elementProperties = Object.values(notificationTypesDisplayed);
  imgUrl = "";
  errorImg = "web-project/src/assets/images/Error.png";
  warrningImg = "web-project/srca/ssets/images/Warning.png";
  successImg ="web-project/src/assets/images/Logo.png";
  infoImg = "web-project/src/assets/images/NOTIFICATION.png";

  public selectedFilter : string = "All";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay = ['notificationId', 'description', 'timestamp', 'read', 'icon'];

  constructor(private notificationService: NotificationService) {
  }

  ngAfterViewInit(): void {  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {     
      return data.type.toLowerCase().includes(filter);
    }    
    this.refresh();
  }
  
  refresh() {
    this.notificationService.getAllNotifications().subscribe(
      data =>{
        EXAMPLE_DATA = data;
        this.dataSource.data = EXAMPLE_DATA;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);  
        this.dataSource.filterPredicate = function (data, filter: string): boolean {     
          return data.type.toLowerCase().includes(filter);
        }    
      }
    ); 
  }
;
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
  getPath(notifType: any) : string {
    switch(notifType){
      case notificationTypes.Error:
        this.imgUrl = this.errorImg;
        break;
      case notificationTypes.Warning:
        this.imgUrl = this.warrningImg;
        break;
      case notificationTypes.SuccessfulAction:
        this.imgUrl = this.successImg;
        break;
      case notificationTypes.Information:
        this.imgUrl = this.infoImg;
    }
    return this.imgUrl;
  }
}
export interface DataTableNotificationsItem {
  notificationId: number;
  description: string;
  type: notificationTypes;
  timestamp: string;
  read: notificationTypesDisplayed;
}

// TODO: replace this with real data from your application
let EXAMPLE_DATA: DataTableNotificationsItem[] = [];