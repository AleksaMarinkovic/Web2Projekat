import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { workPlanTypes } from 'src/assets/workPlanTypes.enum';

// TODO: Replace this with your own data model type
export interface DataTableWorkPlanItem {
    id: number;
    startDate: Date;
    phoneNumber: string;
    status: workPlanTypes;
    address: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableWorkPlanItem[] = [
  {id: 1, startDate: new Date("2020.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 1"},
  {id: 2, startDate: new Date("2020.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 1"},
  {id: 3, startDate: new Date("2010.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 1"},
  {id: 4, startDate: new Date("1020.10.4"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Blvr 13"},
  {id: 5, startDate: new Date("2020.4.10"), phoneNumber: '123221', status: workPlanTypes.Draft, address: "Blvr 31"},
 {id: 6, startDate: new Date("2020.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 13"},
 {id: 7, startDate: new Date("2020.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 341"},
  {id: 8, startDate: new Date("2020.11.10"), phoneNumber: '1212121', status: workPlanTypes.Draft, address: "Kralja Petra 122"},
  {id: 9, startDate: new Date("2020.10.11"), phoneNumber: '123121', status: workPlanTypes.Submitted, address: "Kralja Petra 1"},
  {id: 10, startDate: new Date("2020.10.10"), phoneNumber: '123221', status: workPlanTypes.Submitted, address: "Kralja Petra 121"},
  {id: 11, startDate: new Date("1111.10.10"), phoneNumber: '123121', status: workPlanTypes.Submitted, address: "Kralja Petra 2"},
  {id: 12, startDate: new Date("2020.10.10"), phoneNumber: '12423121', status: workPlanTypes.Submitted, address: "Kralja Petra 22"},
  {id: 13, startDate: new Date("2020.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 2"},
  {id: 14, startDate: new Date("2210.10.10"), phoneNumber: '123121', status: workPlanTypes.Draft, address: "Kralja Petra 1"},
  {id: 16, startDate: new Date("2020.10.10"), phoneNumber: '5421', status: workPlanTypes.Submitted, address: "Kralja Petra 4121"},
  {id: 17, startDate: new Date("2020.10.10"), phoneNumber: '243121', status: workPlanTypes.Draft, address: "Blvr 1"},
];


export class DataTableWorkPlanDataSource extends DataSource<DataTableWorkPlanItem> {
    data: DataTableWorkPlanItem[] = EXAMPLE_DATA;
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;
  
    constructor() {
      super();
    }
  
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<DataTableWorkPlanItem[]> {
      if (this.paginator && this.sort) {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
          .pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data ]));
          }));
      } else {
        throw Error('Please set the paginator and sort on the data source before connecting.');
      }
    }
  
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect(): void {}
  
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: DataTableWorkPlanItem[]): DataTableWorkPlanItem[] {
      if (this.paginator) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
      } else {
        return data;
      }
    }
  
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: DataTableWorkPlanItem[]): DataTableWorkPlanItem[] {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'startDate': return compare(a.startDate, b.startDate, isAsc);
          case 'id': return compare(+a.id, +b.id, isAsc);
          case 'phoneNumber': return compare(a.phoneNumber, b.phoneNumber, isAsc);
          case 'status': return compare(a.status, b.status, isAsc);
          case 'address': return compare(a.address, b.address, isAsc);

          default: return 0;
        }
      });
    }
  }
  
  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }