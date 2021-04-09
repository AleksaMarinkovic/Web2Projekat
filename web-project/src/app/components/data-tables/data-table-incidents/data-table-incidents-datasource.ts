import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableIncidentsItem {
  type: string;
  id: number;
  ETA: string;
  status: string;
  priority: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableIncidentsItem[] = [
  {id: 1, type: "1/2/2010", ETA: "3644324324", status: "Draft", priority:"Vladike Cirica 10"},
  {id: 2, type: "2/2/2011", ETA: "6534653465", status: "Draft", priority:"Safarikova 4"},
  {id: 3, type: "3/2/2012", ETA: "153476746", status: "Submitted", priority:"Suboticka 30"},
  {id: 4, type: "4/2/2013", ETA: "6547422778", status: "Draft", priority:"Mileve Maric 15"},
  {id: 5, type: "5/2/2014", ETA: "7456423545", status: "Submitted", priority:"Djordja Niksica Johana 1"},
  {id: 6, type: "1/2/2015", ETA: "3644324324", status: "Draft", priority:"Vladike Cirica 11"},
  {id: 7, type: "2/2/2016", ETA: "6534653465", status: "Draft", priority:"Safarikova 5"},
  {id: 8, type: "3/2/2017", ETA: "153476746", status: "Submitted", priority:"Suboticka 31"},
  {id: 9, type: "4/2/2018", ETA: "6547422778", status: "Draft", priority:"Mileve Maric 16"},
  {id: 10, type: "5/2/2019", ETA: "7456423545", status: "Submitted", priority:"Djordja Niksica Johana 2"},
  {id: 11, type: "1/2/2020", ETA: "3644324324", status: "Draft", priority:"Vladike Cirica 410"},
  {id: 12, type: "2/2/2021", ETA: "6534453465", status: "Submitted", priority:"Safarikova 14"},
  {id: 13, type: "3/2/2022", ETA: "153476746", status: "Submitted", priority:"Suboticka 330"},
  {id: 14, type: "4/2/2023", ETA: "6541222778", status: "Draft", priority:"Mileve Maric 165"},
  {id: 15, type: "5/2/2024", ETA: "7454423545", status: "Submitted", priority:"Djordja Niksica Johana 31"},
  {id: 16, type: "1/2/2025", ETA: "3644314324", status: "Draft", priority:"Vladike Cirica 140"},
  {id: 17, type: "2/2/2026", ETA: "6534513465", status: "Submitted", priority:"Safarikova 64"},
  {id: 18, type: "3/2/2027", ETA: "153436746", status: "Draft", priority:"Suboticka 330"},
  {id: 19, type: "4/2/2028", ETA: "654762778", status: "Draft", priority:"Mileve Maric 115"},
  {id: 20, type: "5/2/2029", ETA: "7456443545", status: "Submitted", priority:"Djordja Niksica Johana 21"},
  {id: 21, type: "1/2/2030", ETA: "3644524324", status: "Draft", priority:"Vladike Cirica 310"},
  {id: 22, type: "2/2/2031", ETA: "6534653465", status: "Submitted", priority:"Safarikova 54"},
  {id: 23, type: "3/2/2032", ETA: "153476746", status: "Submitted", priority:"Suboticka 320"},
  {id: 24, type: "4/2/2033", ETA: "6547422778", status: "Draft", priority:"Mileve Maric 154"},
  {id: 25, type: "5/2/2034", ETA: "7456423545", status: "Submitted", priority:"Djordja Niksica Johana 11"},
  {id: 26, type: "1/2/2035", ETA: "3644324324", status: "Submitted", priority:"Vladike Cirica 130"},
  {id: 27, type: "2/2/2036", ETA: "6534653465", status: "Draft", priority:"Safarikova 46"},
  {id: 28, type: "3/2/2037", ETA: "153476746", status: "Submitted", priority:"Suboticka 3043"},
  {id: 29, type: "4/2/2038", ETA: "6547422778", status: "Draft", priority:"Mileve Maric 115"},
  {id: 30, type: "5/2/2039", ETA: "7456423545", status: "Draft", priority:"Djordja Niksica Johana 41"},
  {id: 31, type: "1/2/2040", ETA: "3644324324", status: "Submitted", priority:"Vladike Cirica 550"},
  {id: 32, type: "2/2/2041", ETA: "6534653465", status: "Draft", priority:"Safarikova 34"},
  {id: 33, type: "3/2/2042", ETA: "153476746", status: "Submitted", priority:"Suboticka 301"},
  {id: 34, type: "4/2/2043", ETA: "6547422778", status: "Draft", priority:"Mileve Maric 125"},
  {id: 35, type: "5/2/2044", ETA: "7456423545", status: "Submitted", priority:"Djordja Niksica Johana 221"},
];

/**
 * Data source for the DataTableIncidents view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableIncidentsDataSource extends DataSource<DataTableIncidentsItem> {
  data: DataTableIncidentsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableIncidentsItem[]> {
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
  private getPagedData(data: DataTableIncidentsItem[]): DataTableIncidentsItem[] {
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
  private getSortedData(data: DataTableIncidentsItem[]): DataTableIncidentsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'type': return compare(a.type, b.type, isAsc);
        case 'priority': return compare(a.priority, b.priority, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'ETA': return compare(a.ETA, b.ETA, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
