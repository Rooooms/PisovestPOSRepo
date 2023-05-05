import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


export interface PosItem {
  Category: string;
  Product: string;
  Quantity: number;
  Price: number;
  Total: number;
}

// TODO: replace this with real data from your application
const STATIC_DATA: PosItem[] = [
  {Category: 'apparel' , Product: 'shoes', Quantity: 134, Price: 4000, Total: 4000},
  {Category: 'apparel' , Product: 'skirt', Quantity: 1, Price: 600, Total: 600},
  {Category: 'apparel' , Product: 'pants', Quantity: 1, Price: 800, Total: 800},
  {Category: 'apparel' , Product: 'crew neck', Quantity: 1, Price: 500, Total: 500},
  {Category: 'apparel' , Product: 'hoodie', Quantity: 3, Price: 800, Total: 2400},
  {Category: 'apparel' , Product: 'shirt', Quantity: 1, Price: 400, Total: 400},
  {Category: 'apparel' , Product: 'socks', Quantity: 1, Price: 150, Total: 150},
  {Category: 'apparel' , Product: 'blouse', Quantity: 1, Price: 400, Total: 400},
  {Category: 'apparel' , Product: 'blouse', Quantity: 1, Price: 400, Total: 400},
];

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})

export class PosComponent extends DataSource<PosItem> implements  OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PosItem>;

  public pageTitle: string;
  categories= [];
  products = [];
  posForm: FormGroup;
  totalForm: FormGroup;
  subTotal:any;
  taxInclusive = 0.12;
  taxAmount:any;
  grandTotal:any;
  data: PosItem[] = STATIC_DATA;

  fields =
  [
    {
      placeholder: 'Category',
      type: 'select',
      id: 'categoryName',
      name: 'categoryName',
      label: 'Category',
      value: 'categoryName',
    },
    {
      label: 'Product',
      type: 'select',
    },
    {
      label: 'Quantity',
      type: 'input',
    },
    {
      label: 'Search',
      type: 'input',
    },
  ];

  constructor(
    private sharedService: SharedService,
    private categoryService : CategoryService,
    private productService : ProductService,
    private _Pos: FormBuilder,
    private _Total: FormBuilder,
    ) {
      super();
    }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  columnNames: {[key: string]: string} = {
    'id': 'ID',
    'dateTime': 'Date and Time',
    'code': 'Code',
    'total': 'Total',
    'tax': 'Tax',
    'quantity': 'Quantity',
    'Action': 'Action'
  };

  displayedColumns: string[] = ['Category', 'Product', 'Quantity', 'Price', 'Total', 'Action'];

  ngOnInit(): void {
    this.sharedService.pageName = 'Point of Sale';
    this.pageTitle = 'Point of Sale';

    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories //Fetches the Entire Category List.
      console.log('Categories are:' ,this.categories)
    });


    this.posForm = this._Pos.group({
      categoryName: [''], // Initial value for the category select
      product: [''], // Initial value for the product select
      quantity: [''], // Initial value for the quantity input
      search: [''], // Initial value for the search input
      categoryId: [''],
    });

    this.totalForm = this._Total.group({
      subtotal: 0,
      taxInclusive: '12%',
      taxAmount: 0,
      grandTotal: 0,
    });
  }

  ngAfterViewInit(): void {
    this.sort = this.sort;
    this.paginator = this.paginator;
    this.table.dataSource = new MatTableDataSource(this.data);

    this.calculateTotals();
  }


  onCategorySelected(selectedCategoryId : any){
    this.productService.getProductsofSelectedCategory(selectedCategoryId).subscribe(
      data => {
        this.products = data.filter(products => products.categoryId == selectedCategoryId)
        console.log('Product', this.products);
      }
    )
  }

  onAddClicked(row: any) {
    // Handle button click event here
    console.log('Add button clicked for row:', row);
  }

  calculateTotals() {
    const data = this.data;
    let subTotal = 0;
    let taxInclusive = .12;
    let taxAmount = 0;
    let grandTotal = 0;

    data.forEach((item: PosItem) => {
      subTotal += item.Quantity * item.Price;
    });

    taxAmount = subTotal * taxInclusive;
    grandTotal = subTotal + taxAmount;

    this.subTotal = subTotal;
    this.taxAmount = taxAmount;
    this.grandTotal = grandTotal;
  }

  onRowAdded() {
    this.calculateTotals();
  }

  onRowDeleted() {
    this.calculateTotals();
  }

  onChange(event: any) {
    const label = event.target.previousElementSibling.innerText;
    const value = event.target.value;

    switch (label) {
      case 'Subtotal':
        console.log('Subtotal:', value);
        break;
      case 'Tax Inclusive':
        console.log('Tax Inclusive:', value);
        break;
      case 'Tax Amount':
        console.log('Tax Amount:', value);
        break;
      case 'Grand Total':
        console.log('Grand Total:', value);
        break;
      default:
        break;
    }
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
