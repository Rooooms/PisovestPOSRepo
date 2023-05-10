import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TransactionDataDataSource, TransactionDataItem } from './transaction-data-datasource';

@Component({
  selector: 'app-transaction-data',
  templateUrl: './transaction-data.component.html',
  styleUrls: ['./transaction-data.component.css']
})
export class TransactionDataComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TransactionDataItem>;
  dataSource: TransactionDataDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  transactionDisplay: string[] = ['id', 'dateTime', 'code', 'total', 'tax', 'quantity', 'action'];

  constructor() {
    this.dataSource = new TransactionDataDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
