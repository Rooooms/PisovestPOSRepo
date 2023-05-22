import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements AfterViewInit {
  public pageTitle: string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  salesDataSource: MatTableDataSource<any>;

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
 


  constructor(private sharedService: SharedService) {
    this.salesDataSource = new MatTableDataSource<any>([]);
  }
  ngOnInit() {
    this.sharedService.pageName = 'Sales Report';
    this.pageTitle = 'Sales Report';
  }
  ngAfterViewInit(): void {
    this.salesDataSource.sort = this.sort;
    this.salesDataSource.paginator = this.paginator;
    this.table.dataSource = this.salesDataSource;
  }
}
