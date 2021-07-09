import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CrewService } from 'src/app/services/crew.service';
import { DataTableCrewDataSource, DataTableCrewItem } from './data-table-crew-datasource';
import { ModifyCrewComponent } from '../../modify-crew/modify-crew.component';


@Component({
  selector: 'app-data-table-crew',
  templateUrl: './data-table-crew.component.html',
  styleUrls: ['./data-table-crew.component.css']
})
export class DataTableCrewComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableCrewItem>;
  dataSource: DataTableCrewDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','members', 'modify','delete'];

  constructor(private crewService: CrewService, public dialog: MatDialog) {
    this.dataSource = new DataTableCrewDataSource();
  }

  ngAfterViewInit(): void {
    this.refresh();    
  }

  modify(crew:any){
    const d = this.dialog.open(ModifyCrewComponent, {
      data: {crew: crew}
  });

    d.afterClosed().subscribe(
      () => this.refresh()
    );
  }
  delete(crew:any){
    this.crewService.deleteCrew(crew.crewId).subscribe(()=>this.refresh());
   }

  refresh(){
    this.crewService.getAllCrews().subscribe(
      data => {       
        this.dataSource.data = data;   
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator._changePageSize(this.paginator.pageSize);
        this.table.dataSource = this.dataSource; 
      }
    ); 
  }
}
