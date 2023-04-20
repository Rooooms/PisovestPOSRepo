import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductDataDataSource, ProductDataItem } from './product-data-datasource';

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
  columnNames: {[key: string]: string} = {
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
    console.log('Add button clicked for row:', row);
  }
  
  constructor() {
    this.dataSource = new ProductDataDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
