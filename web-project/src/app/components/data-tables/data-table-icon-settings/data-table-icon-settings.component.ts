import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-data-table-icon-settings',
  templateUrl: './data-table-icon-settings.component.html',
  styleUrls: ['./data-table-icon-settings.component.css']
})
export class DataTableIconSettingsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<DataTableIconSettingsItem>(EXAMPLE_DATA);
  
  @Output() iconSettingsEmmiter = new EventEmitter<DataTableIconSettingsItem>();

  displayedColumns = ['id', 'iconPicture', 'iconType', 'change'];
  constructor(private iconSettingsService: IconService) { }

  ngAfterViewInit(): void {    
    this.refresh();
  }

  showPreview(event: any, row: any){
    const file = (event.target as HTMLInputElement).files[0];
    
    const reader = new FileReader();
    reader.onload = () => {
      row.icon = reader.result as string;

       //sends new data back to parent
      this.iconSettingsEmmiter.emit(row);
    }
    reader.readAsDataURL(file);

   
  }

  refresh() {
    this.iconSettingsService.getAllIconSettings().subscribe(
      data =>  {
        EXAMPLE_DATA = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = EXAMPLE_DATA;        
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);
      }
    );
  }
}

export interface DataTableIconSettingsItem{
  iconSettingsId: number,
  iconType : string,
  icon: string   
}

let EXAMPLE_DATA: DataTableIconSettingsItem[] = [];