import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PosDataSource, PosItem } from './pos-datasource';


@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  template: '<h1>{{ pageTitle }}</h1>',
})
export class POSComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PosItem>;
  dataSource: PosDataSource;

  public pageTitle: string;
  categories= [];
  posForm: FormGroup;
  totalForm: FormGroup;
  products = [];

  constructor(
    private sharedService: SharedService,
    private categoryService : CategoryService,
    private productService : ProductService,
    private _Pos: FormBuilder,
    private _Total: FormBuilder,
    ) {
      this.dataSource = new PosDataSource();
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

  ngOnInit() {
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
      subTotal: [''],
      taxInclusive: '12%',
      taxAmount: 887, // Initial value for the price of the product
      GrandTotal: ['']
    });

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

ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.table.dataSource = this.dataSource;
}

  fields = [
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

  ];



  subtotalFields = [  {label: 'Sub Total', name: 'subTotal',},
                      {label: 'Tax Inclusive (%)', name: 'taxInclusive'},
                      {label: 'Tax Amount', name: 'taxAmount'},
                      {label: 'Grand Total', name: 'grandTotal'}];


}
