import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableCrewItem {
  crewName: string;
  crewId: number;
  members: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableCrewItem[] = [
//   {id: 1, name: 'NS Crew', member: 'TempMember1'},
//   {id: 2, name: 'NS Crew', member:'TempMember2'},
//   {id: 3, name: 'NS Crew', member:'TempMember3'},
//   {id: 4, name: 'NS Crew', member:'TempMember4'},
//   {id: 5, name: 'NS Crew',member: 'TempMember5'},
//  {id: 6, name: '021 Crew', member:'TempMember6'},
//  {id: 7, name: '021 Crew', member:'TempMember7'},
//   {id: 8, name: '021 Crew',member: 'TempMember8'},
//   {id: 9, name: '021 Crew',member: 'TempMember9'},
//   {id: 10, name: '021 Crew', member:'TempMember10'},
//   {id: 11, name: 'BEST Crew',member: 'TempMember11'},
//   {id: 12, name: 'BEST Crew', member:'TempMember12'},
//   {id: 13, name: 'BEST Crew', member:'TempMember13'},
//   {id: 14, name: 'BEST Crew',member: 'TempMember14'},
//   {id: 15, name: 'BEST Crew',member: 'TempMember15'},
//   {id: 16, name: 'BEST Crew', member:'TempMember16'},
//   {id: 17, name: 'BEST Crew',member: 'TempMember17'},
];

/**
 * Data source for the DataTableCrew view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableCrewDataSource extends DataSource<DataTableCrewItem> {
  data: DataTableCrewItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableCrewItem[]> {
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
  private getPagedData(data: DataTableCrewItem[]): DataTableCrewItem[] {
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
  private getSortedData(data: DataTableCrewItem[]): DataTableCrewItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'crewName': return compare(a.crewName, b.crewName, isAsc);
        case 'crewId': return compare(+a.crewId, +b.crewId, isAsc);
        case 'members': return compare(a.members, b.members, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
