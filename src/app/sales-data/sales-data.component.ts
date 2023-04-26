import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SalesDataDataSource, SalesDataItem } from './sales-data-datasource';

@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.css']
})
export class SalesDataComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SalesDataItem>;
  dataSource: SalesDataDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['product', 'totalQuantity', 'totalGross', 'totalNet', 'refund', 'discount', 'tax', 'cost'];
  columnNames: {[key: string]: string} = {
    'product': 'Product',
    'totalQuantity': 'Total Quantity',
    'totalGross': 'Total Gross',
    'totalNet': 'Total Net',
    'refund': 'Refund',
    'discount': 'Discount',
    'tax': 'Tax',
    'cost': 'Cost',
  
  };

  salesDisplay: string[] = ['product', 'totalQuantity', 'totalGross', 'totalNet', 'refund', 'discount', 'tax', 'cost'];
 


  constructor() {
    this.dataSource = new SalesDataDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
