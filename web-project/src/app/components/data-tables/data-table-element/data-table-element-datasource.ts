import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableElementItem {
  name: string;
  id: number;
  type: string;
  coords: string;
  address: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableElementItem[] = [
  {id: 1, type: "Fuse", name: "Fuse1", coords: "N12313412/E43243423", address:"Vladike Cirica 10"},
  {id: 2, type: "Switch", name: "Switch1", coords: "N12354312/E4543243423", address:"Safarikova 4"},
  {id: 3, type: "Transformer", name: "Transformer1", coords: "N43313412/E464343423", address:"Suboticka 30"},
  {id: 4, type: "Disconnector", name: "Disconnector1", coords: "N153212/E523243423", address:"Mileve Maric 15"},
  {id: 5, type: "Fuse", name: "Fuse2", coords: "N12313412/E43243423", address:"Vladike Cirica 11"},
  {id: 6, type: "Switch", name: "Switch2", coords: "N12354312/E4543243423", address:"Safarikova 5"},
  {id: 7, type: "Transformer", name: "Transformer2", coords: "N43313412/E464343423", address:"Suboticka 31"},
  {id: 8, type: "Disconnector", name: "Disconnector2", coords: "N153212/E523243423", address:"Mileve Maric 16"},
  {id: 9, type: "Fuse", name: "Fuse3", coords: "N12313412/E43243423", address:"Vladike Cirica 12"},
  {id: 10, type: "Switch", name: "Switch3", coords: "N12354312/E4543243423", address:"Safarikova 3"},
  {id: 11, type: "Transformer", name: "Transformer3", coords: "N43313412/E464343423", address:"Suboticka 4"},
  {id: 12, type: "Disconnector", name: "Disconnector3", coords: "N153212/E523243423", address:"Mileve Maric 62"},
  {id: 13, type: "Fuse", name: "Fuse4", coords: "N12313412/E43243423", address:"Vladike Cirica 123"},
  {id: 14, type: "Switch", name: "Switch4", coords: "N12354312/E4543243423", address:"Safarikova 634"},
  {id: 15, type: "Transformer", name: "Transformer4", coords: "N43313412/E464343423", address:"Suboticka 22"},
  {id: 16, type: "Disconnector", name: "Disconnector4", coords: "N153212/E523243423", address:"Mileve Maric 11"},
  {id: 17, type: "Fuse", name: "Fuse5", coords: "N12313412/E43243423", address:"Vladike Cirica 7"},
  {id: 18, type: "Switch", name: "Switch5", coords: "N12354312/E4543243423", address:"Safarikova 54"},
  {id: 19, type: "Transformer", name: "Transformer5", coords: "N43313412/E464343423", address:"Suboticka 782"},
  {id: 20, type: "Disconnector", name: "Disconnector5", coords: "N153212/E523243423", address:"Mileve Maric 33"},
  {id: 21, type: "Fuse", name: "Fuse6", coords: "N12313412/E43243423", address:"Vladike Cirica 31"},
  {id: 22, type: "Switch", name: "Switch6", coords: "N12354312/E4543243423", address:"Safarikova 23"},
  {id: 23, type: "Transformer", name: "Transformer6", coords: "N43313412/E464343423", address:"Suboticka 43"},
  {id: 24, type: "Disconnector", name: "Disconnector6", coords: "N153212/E523243423", address:"Mileve Maric 151"},
];

/**
 * Data source for the DataTableElement view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableElementDataSource extends DataSource<DataTableElementItem> {
  data: DataTableElementItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableElementItem[]> {
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
  private getPagedData(data: DataTableElementItem[]): DataTableElementItem[] {
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
  private getSortedData(data: DataTableElementItem[]): DataTableElementItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        case 'coords': return compare(a.coords, b.coords, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
