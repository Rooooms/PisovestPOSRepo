import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PosItem {
  Category: string;
  Product: string;
  Quantity: number;
  Price: number;
  Total: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PosItem[] = [
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 6000, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 7000, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 7000, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 5000, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 5435, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 2355, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 7455, Total: 1},
  {Category: 'apparel' , Product: 'shoes', Quantity: 1, Price: 7345, Total: 1},

];

/**
 * Data source for the ProductData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PosDataSource extends DataSource<PosItem> {
  data: PosItem[] = EXAMPLE_DATA;
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
  connect(): Observable<PosItem[]> {
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
  private getPagedData(data: PosItem[]): PosItem[] {
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
  private getSortedData(data: PosItem[]): PosItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'category': return compare(a.Category, b.Category, isAsc);
        case 'Price': return compare(+a.Price, +b.Price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
