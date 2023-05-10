import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TransactionDataItem {
 
  id: number;
  dateTime: number;
  code: number;
  total: number;
  tax: number;
  quantity: number;


}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TransactionDataItem[] = [
  {id: 1, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 2, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 3, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 1, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 2, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 3, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 1, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 2, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 3, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 1, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 2, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},
  {id: 3, dateTime: 12345, code: 123, total: 1, tax: 1, quantity: 4},



];

/**
 * Data source for the TransactionData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TransactionDataDataSource extends DataSource<TransactionDataItem> {
  data: TransactionDataItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TransactionDataItem[]> {
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
  private getPagedData(data: TransactionDataItem[]): TransactionDataItem[] {
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
  private getSortedData(data: TransactionDataItem[]): TransactionDataItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        // case 'name': return compare(a.name, b.name, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
