import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { accountTypes } from '../../../../assets/accountTypes.enum';

// TODO: Replace this with your own data model type
export interface DataTableConsumerItem {
    id: number;
    name: string;
    lastname: string;
    location: string;
    priority: string;
    phoneNumber: string;
    consumerType: accountTypes;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableConsumerItem[] = [
  {id: 1, name: 'NS Consumer', lastname: 'TempMember1', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 2, name: 'NS Consumer', lastname:'TempMember2', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 3, name: 'NS Consumer', lastname:'TempMember3', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 4, name: 'NS Consumer', lastname:'TempMember4', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 5, name: 'NS Consumer',lastname: 'TempMember5', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
 {id: 6, name: '021 Consumer', lastname:'TempMember6', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
 {id: 7, name: '021 Consumer', lastname:'TempMember7', location: 'NS', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 8, name: '021 Consumer',lastname: 'TempMember8', location: 'BG', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Commercial},
  {id: 9, name: '021 Consumer',lastname: 'TempMember9', location: 'BG', priority: 'a', phoneNumber: '123121', consumerType: accountTypes.Residential},
  {id: 10, name: '021 Consumer', lastname:'TempMember10', location: 'BG', priority: 's', phoneNumber: '123123421', consumerType: accountTypes.Residential},
  {id: 11, name: 'BEST Consumer',lastname: 'TempMember11', location: 'BG', priority: 'ssa', phoneNumber: '123121', consumerType: accountTypes.Residential},
  {id: 12, name: 'BEST Consumer', lastname:'TempMember12', location: 'BG', priority: 'sa', phoneNumber: '123121', consumerType: accountTypes.Residential},
  {id: 13, name: 'BEST Consumer', lastname:'TempMember13', location: 'BG', priority: 'sa', phoneNumber: '12312123', consumerType: accountTypes.Residential},
  {id: 14, name: 'BEST Consumer',lastname: 'TempMember14', location: 'NS', priority: 'sa', phoneNumber: '123543121', consumerType: accountTypes.Residential},
  {id: 16, name: 'BEST Consumer', lastname:'TempMember16', location: 'NS', priority: 'sa', phoneNumber: '123121', consumerType: accountTypes.Residential},
  {id: 17, name: 'BEST Consumer',lastname: 'TempMember17', location: 'NS', priority: 'sa', phoneNumber: '123121', consumerType: accountTypes.Residential},
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
          case 'name': return compare(a.name, b.name, isAsc);
          case 'id': return compare(+a.id, +b.id, isAsc);
          case 'lastname': return compare(a.name, b.name, isAsc);
          case 'location': return compare(a.name, b.name, isAsc);
          case 'priority': return compare(a.name, b.name, isAsc);
          case 'phoneNumber': return compare(a.name, b.name, isAsc);
          case 'consumerType': return compare(a.name, b.name, isAsc);

          default: return 0;
        }
      });
    }
  }
  
  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }