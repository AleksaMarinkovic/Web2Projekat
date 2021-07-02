import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { accountTypes } from '../../../../assets/accountTypes.enum';

// TODO: Replace this with your own data model type
export interface DataTableConsumerItem {  
    consumerId: number
    firstName: string;
    lastName: string;
    location: string;
    priority: string;
    phone: string;
    consumerType: accountTypes;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: DataTableConsumerItem[] = [
            
];


export class DataTableConsumerDataSource extends DataSource<DataTableConsumerItem> {
    data: DataTableConsumerItem[];
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
    connect(): Observable<DataTableConsumerItem[]> {
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
     * Paginate the data (client-scustomerIde). If you're using server-scustomerIde pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: DataTableConsumerItem[]): DataTableConsumerItem[] {
      if (this.paginator) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
      } else {
        return data;
      }
    }
  
    /**
     * Sort the data (client-scustomerIde). If you're using server-scustomerIde sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: DataTableConsumerItem[]): DataTableConsumerItem[] {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'consumerId' : return compare(a.consumerId, b.consumerId, isAsc);
          case 'firstName': return compare(a.firstName, b.firstName, isAsc);
          case 'lastName': return compare(a.lastName, b.lastName, isAsc);
          case 'location': return compare(a.location, b.location, isAsc);
          case 'priority': return compare(a.priority, b.priority, isAsc);
          case 'phone': return compare(a.phone, b.phone, isAsc);
          case 'consumerType': return compare(a.consumerType, b.consumerType, isAsc);

          default: return 0;
        }
      });
    }
  }
  
  /** Simple sort comparator for example customerId/firstName columns (for client-scustomerIde sorting). */
  function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }