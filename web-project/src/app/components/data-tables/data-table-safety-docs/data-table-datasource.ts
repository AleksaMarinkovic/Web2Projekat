import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {  
  id: number;
  start_date : string;
  phone_number: number;
  status: string;
  address: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, start_date: "1/2/2010", phone_number: 3644324324, status: "Draft", address:"Vladike Cirica 10"},
  {id: 2, start_date: "2/2/2011", phone_number: 6534653465, status: "Draft", address:"Safarikova 4"},
  {id: 3, start_date: "3/2/2012", phone_number: 153476746, status: "Submitted", address:"Suboticka 30"},
  {id: 4, start_date: "4/2/2013", phone_number: 6547422778, status: "Draft", address:"Mileve Maric 15"},
  {id: 5, start_date: "5/2/2014", phone_number: 7456423545, status: "Submitted", address:"Djordja Niksica Johana 1"},
  {id: 6, start_date: "1/2/2015", phone_number: 3644324324, status: "Draft", address:"Vladike Cirica 11"},
  {id: 7, start_date: "2/2/2016", phone_number: 6534653465, status: "Draft", address:"Safarikova 5"},
  {id: 8, start_date: "3/2/2017", phone_number: 153476746, status: "Submitted", address:"Suboticka 31"},
  {id: 9, start_date: "4/2/2018", phone_number: 6547422778, status: "Draft", address:"Mileve Maric 16"},
  {id: 10, start_date: "5/2/2019", phone_number: 7456423545, status: "Submitted", address:"Djordja Niksica Johana 2"},
  {id: 11, start_date: "1/2/2020", phone_number: 3644324324, status: "Draft", address:"Vladike Cirica 410"},
  {id: 12, start_date: "2/2/2021", phone_number: 6534453465, status: "Submitted", address:"Safarikova 14"},
  {id: 13, start_date: "3/2/2022", phone_number: 153476746, status: "Submitted", address:"Suboticka 330"},
  {id: 14, start_date: "4/2/2023", phone_number: 6541222778, status: "Draft", address:"Mileve Maric 165"},
  {id: 15, start_date: "5/2/2024", phone_number: 7454423545, status: "Submitted", address:"Djordja Niksica Johana 31"},
  {id: 16, start_date: "1/2/2025", phone_number: 3644314324, status: "Draft", address:"Vladike Cirica 140"},
  {id: 17, start_date: "2/2/2026", phone_number: 6534513465, status: "Submitted", address:"Safarikova 64"},
  {id: 18, start_date: "3/2/2027", phone_number: 153436746, status: "Draft", address:"Suboticka 330"},
  {id: 19, start_date: "4/2/2028", phone_number: 654762778, status: "Draft", address:"Mileve Maric 115"},
  {id: 20, start_date: "5/2/2029", phone_number: 7456443545, status: "Submitted", address:"Djordja Niksica Johana 21"},
  {id: 21, start_date: "1/2/2030", phone_number: 3644524324, status: "Draft", address:"Vladike Cirica 310"},
  {id: 22, start_date: "2/2/2031", phone_number: 6534653465, status: "Submitted", address:"Safarikova 54"},
  {id: 23, start_date: "3/2/2032", phone_number: 153476746, status: "Submitted", address:"Suboticka 320"},
  {id: 24, start_date: "4/2/2033", phone_number: 6547422778, status: "Draft", address:"Mileve Maric 154"},
  {id: 25, start_date: "5/2/2034", phone_number: 7456423545, status: "Submitted", address:"Djordja Niksica Johana 11"},
  {id: 26, start_date: "1/2/2035", phone_number: 3644324324, status: "Submitted", address:"Vladike Cirica 130"},
  {id: 27, start_date: "2/2/2036", phone_number: 6534653465, status: "Draft", address:"Safarikova 46"},
  {id: 28, start_date: "3/2/2037", phone_number: 153476746, status: "Submitted", address:"Suboticka 3043"},
  {id: 29, start_date: "4/2/2038", phone_number: 6547422778, status: "Draft", address:"Mileve Maric 115"},
  {id: 30, start_date: "5/2/2039", phone_number: 7456423545, status: "Draft", address:"Djordja Niksica Johana 41"},
  {id: 31, start_date: "1/2/2040", phone_number: 3644324324, status: "Submitted", address:"Vladike Cirica 550"},
  {id: 32, start_date: "2/2/2041", phone_number: 6534653465, status: "Draft", address:"Safarikova 34"},
  {id: 33, start_date: "3/2/2042", phone_number: 153476746, status: "Submitted", address:"Suboticka 301"},
  {id: 34, start_date: "4/2/2043", phone_number: 6547422778, status: "Draft", address:"Mileve Maric 125"},
  {id: 35, start_date: "5/2/2044", phone_number: 7456423545, status: "Submitted", address:"Djordja Niksica Johana 221"},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableItem[]> {
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
  private getPagedData(data: DataTableItem[]): DataTableItem[] {
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
  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'start_date': return compare(a.start_date, b.start_date, isAsc);
        case 'phone_number': return compare(a.phone_number, b.phone_number, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
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
