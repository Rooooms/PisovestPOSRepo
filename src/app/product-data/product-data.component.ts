import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductDataDataSource, ProductDataItem } from './product-data-datasource';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductDataItem>;
  dataSource: ProductDataDataSource;

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

  displayedColumns: string[] = ['category', 'product', 'quantity', 'price', 'total', 'action'];


  onAddClicked(row: any) {
    // Handle button click event here
    alert('Product Deleted')
  }

 

  constructor(private matDialog: MatDialog) {
    this.dataSource = new ProductDataDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog() {
    // Handle button click event here
    this.matDialog.open(InvoiceDialogComponent, {
      width: '30%',
      height: '70%',
    });
  }




}
