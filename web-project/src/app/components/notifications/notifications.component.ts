import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { notificationTypes } from 'src/assets/notificationTypes.enum';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { notificationTypesDisplayed } from 'src/assets/notificationTypesDisplayed.enum';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements AfterViewInit  {  

  dataSource = new MatTableDataSource<DataTableNotificationsItem>(EXAMPLE_DATA);
  elementProperties = Object.values(notificationTypesDisplayed);
  imgUrl = "";
  errorImg = "../../../assets/images/Error.png";
  warrningImg = "../../../assets/images/Warning.png";
  successImg ="../../../assets/images/logo.png";
  infoImg = "../../../assets/images/NOTIFICATION.png";

  public selectedFilter : string = "All";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay = ['notificationId', 'description', 'timestamp', 'read', 'icon'];

  constructor(private notificationService: NotificationService, public dialog: MatDialog) {
    if(localStorage.getItem("notificationDisplay").length!=0 && localStorage.getItem("notificationDisplay") != "All"){     
      this.selectedFilter = localStorage.getItem("notificationDisplay");    
      this.applyFilter(this.selectedFilter);
    }
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
        console.log(this.dataSource.data);    
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
    if(localStorage.getItem("notificationDisplay").length==0 || localStorage.getItem("notificationDisplay") == "All"){
      this.selectedFilter = elementValue.value;
    }
    
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
    this.dataSource.data.forEach(element => {
      element.read = notificationTypesDisplayed.Read;
      this.notificationService.putNotification(element, element.notificationId).subscribe();
    });
    this.refresh();
  }
  MarkAsRead(element : any){
    if(element.read == notificationTypesDisplayed.Unread){
      element.read = notificationTypesDisplayed.Read;
      this.notificationService.putNotification(element,element.notificationId).subscribe(
        () => this.refresh()
      );  
  
      this.dialog.open(NotificationDialogComponent, {
        data: {notification: element}
      });   
    }   
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
  incdidentId: number,
  workRequestId: number,
  workPlanId: number,
  safetyDocumentId: number
}

// TODO: replace this with real data from your application
let EXAMPLE_DATA: DataTableNotificationsItem[] = [];