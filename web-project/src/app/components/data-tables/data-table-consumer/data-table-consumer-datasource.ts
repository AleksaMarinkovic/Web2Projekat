import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { accountTypes } from '../../../../assets/accountTypes.enum';

// TODO: Replace this with your own data model type
export interface DataTableConsumerItem {
    id: number;
    firstName: string;
    lastName: string;
    location: string;
    priority: string;
    phone: string;
    consumerType: accountTypes;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: DataTableConsumerItem[] = [
  {id: 1, firstName: 'NS Consumer', lastName: 'TempMember1', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 2, firstName: 'NS Consumer', lastName:'TempMember2', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 3, firstName: 'NS Consumer', lastName:'TempMember3', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 4, firstName: 'NS Consumer', lastName:'TempMember4', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 5, firstName: 'NS Consumer',lastName: 'TempMember5', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
 {id: 6, firstName: '021 Consumer', lastName:'TempMember6', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
 {id: 7, firstName: '021 Consumer', lastName:'TempMember7', location: 'NS', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 8, firstName: '021 Consumer',lastName: 'TempMember8', location: 'BG', priority: 'a', phone: '123121', consumerType: accountTypes.Commercial},
  {id: 9, firstName: '021 Consumer',lastName: 'TempMember9', location: 'BG', priority: 'a', phone: '123121', consumerType: accountTypes.Residential},
  {id: 10, firstName: '021 Consumer', lastName:'TempMember10', location: 'BG', priority: 's', phone: '123123421', consumerType: accountTypes.Residential},
  {id: 11, firstName: 'BEST Consumer',lastName: 'TempMember11', location: 'BG', priority: 'ssa', phone: '123121', consumerType: accountTypes.Residential},
  {id: 12, firstName: 'BEST Consumer', lastName:'TempMember12', location: 'BG', priority: 'sa', phone: '123121', consumerType: accountTypes.Residential},
  {id: 13, firstName: 'BEST Consumer', lastName:'TempMember13', location: 'BG', priority: 'sa', phone: '12312123', consumerType: accountTypes.Residential},
  {id: 14, firstName: 'BEST Consumer',lastName: 'TempMember14', location: 'NS', priority: 'sa', phone: '123543121', consumerType: accountTypes.Residential},
  {id: 16, firstName: 'BEST Consumer', lastName:'TempMember16', location: 'NS', priority: 'sa', phone: '123121', consumerType: accountTypes.Residential},
  {id: 17, firstName: 'BEST Consumer',lastName: 'TempMember17', location: 'NS', priority: 'sa', phone: '123121', consumerType: accountTypes.Residential},
];


export class DataTableConsumerDataSource extends DataSource<DataTableConsumerItem> {
    data: DataTableConsumerItem[] = EXAMPLE_DATA;
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
     * Paginate the data (client-side). If you're using server-side pagination,
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
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: DataTableConsumerItem[]): DataTableConsumerItem[] {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'firstName': return compare(a.firstName, b.firstName, isAsc);
          case 'id': return compare(+a.id, +b.id, isAsc);
          case 'lastName': return compare(a.firstName, b.firstName, isAsc);
          case 'location': return compare(a.firstName, b.firstName, isAsc);
          case 'priority': return compare(a.firstName, b.firstName, isAsc);
          case 'phone': return compare(a.firstName, b.firstName, isAsc);
          case 'consumerType': return compare(a.firstName, b.firstName, isAsc);

          default: return 0;
        }
      });
    }
  }
  
  /** Simple sort comparator for example ID/firstName columns (for client-side sorting). */
  function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }