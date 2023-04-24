import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TransactionDataDataSource, TransactionDataItem } from './transaction-data-datasource';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  columnNames: { [key: string]: string } = {
    'id': 'ID',
    'dateTime': 'Date and Time',
    'code': 'Code',
    'total': 'Total',
    'tax': 'Tax',
    'quantity': 'Quantity',
    'action': 'Action'
  };

  transactionDisplay: string[] = ['id', 'dateTime', 'code', 'total', 'tax', 'quantity', 'action'];


  constructor() {
    this.dataSource = new TransactionDataDataSource();
  }


  onAddClicked(row: any) {
    // Handle button click event here
    alert('On Click')
  }



  // openDialog() {
  //   // Handle button click event here
  //   this.matDialog.open(InvoiceDialogComponent, {
  //     width: '30%',
  //     height: '90%',
  //   });
  // }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


}
