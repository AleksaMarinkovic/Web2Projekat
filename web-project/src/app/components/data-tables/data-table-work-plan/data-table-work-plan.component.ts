import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { WorkPlanService } from 'src/app/services/work-plan.service';
import { DataTableNotificationsItem } from '../../notifications/notifications.component';
import { DataTableWorkPlanDataSource, DataTableWorkPlanItem } from './data-table-work-plan-datasource';
@Component({
  selector: 'app-data-table-work-plan',
  templateUrl: './data-table-work-plan.component.html',
  styleUrls: ['./data-table-work-plan.component.css']
})
export class DataTableWorkPlanComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableWorkPlanItem>;
  dataSource: DataTableWorkPlanDataSource;

  displayedColumns = ['id', 'startDate', 'phoneNumber', 'status', 'address', 'delete'];
  notifications : DataTableNotificationsItem[];
  constructor(private workPlanService: WorkPlanService, private notificationService: NotificationService) { 
    this.dataSource = new DataTableWorkPlanDataSource();

  }

  ngAfterViewInit(): void {
    this.notificationService.getAllNotifications().subscribe( data=> this.notifications = data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.refresh();
  }
 
  delete(row:any){

    this.notifications.forEach(notification => {
      if(notification.workPlanId == row.workPlanId){
        notification.workPlanId = null;
        this.notificationService.putNotification(notification,notification.notificationId).subscribe();
      }
    })
    this.workPlanService.deleteWorkPlans(row.workPlanId).subscribe(
      () =>  this.refresh()
    )
  }  

  refresh() {
    this.workPlanService.getAllWorkPlans().subscribe(
      data => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);  
        this.table.dataSource = this.dataSource;
      }
    )
  }
  onValChange(value: any) {
    if(value == "All"){
      this.workPlanService.getAllWorkPlans().subscribe(
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
      this.workPlanService.getAllWorkPlansCreatedByUser(localStorage.getItem("id")).subscribe(
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
