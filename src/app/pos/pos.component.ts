import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  id : any;
  selectedCategory: any;
  selectedProduct: any;
  selectedQuantity: any;
  addedProducts: any[] = [];
  sales: any[] = []; // temporary array to hold sales data
  newcategories= []	
  posForm: FormGroup;
  totalForm: FormGroup;
  subTotal:any;
  taxInclusive = 0.12;
  taxAmount:any;
  grandTotal:any;
  // data: PosItem[] = STATIC_DATA;

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
      id:'productId',
      name:'productName',
      type: 'select',
      placeholder: 'Product',
    },
    {
      label: 'input',
      id:'Quantity',
      name:'Quantity',
      type: 'number',
      value: 'number',
      placeholder: 'Quantity',
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
  columnNames: {[key: string]: string} = {};

  displayedColumns: string[] = ['Category', 'Product', 'Quantity', 'Price', 'Total', 'Action'];

  ngOnInit(): void {
    this.sharedService.pageName = 'Point of Sale';
    this.pageTitle = 'Point of Sale';

    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories //Fetches the Entire Category List.
      console.log('Categories are:' ,this.categories)
      console.log(this.sales)
    });


    this.posForm = this._Pos.group({
      categoryName: [''], // Initial value for the category select
      product: [''], // Initial value for the product select
      quantity: ['', [Validators.required, Validators.min(1), Validators.max(1000)]], // Initial value for the quantity input
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
    this.table.dataSource = new MatTableDataSource(this.sales);

    this.calculateTotals();
  }


  onCategorySelected(selectedCategoryId : any){
    this.selectedCategory = selectedCategoryId;
    this.posForm.get('categoryId').setValue(selectedCategoryId); // set the value of the categoryId control
    this.productService.getProductsofSelectedCategory(selectedCategoryId).subscribe(
      data => {
        this.products = data.filter(products => products.categoryId == selectedCategoryId)
        console.log('Product', this.products);
      }
    )
  }

  onProductSelected(selectedProductId: any) {
    this.selectedProduct = selectedProductId;
  }

  onQuantitySelected(selectedQuantity: any) {
    this.selectedQuantity = selectedQuantity;
  }
  
  addProducts(productName: string) {
    const product = this.products.find(p => p.name === productName);
    if (product && this.selectedCategory) {
      this.selectedCategory.products.push(product);
    }
  }

  addProduct() {
    const product = this.posForm.value.product;
    const quantity = this.posForm.value.quantity;
    const categoryName = this.categories;
    
    console.log(`categoryName: ${categoryName}`);
    console.log(`product: ${product}`);
  
    const selectedCategory = this.categories.find(c => c.categoryId === categoryName);
  
    this.categoryService.getById(this.selectedCategory).subscribe((selectedCategory: any) => {
      const categoryName = selectedCategory.categoryName;
      console.log('Category name:', categoryName);
  
      const selectedProduct = product;
    
      const productToAdd = {
        id: selectedProduct.productId,
        productName: selectedProduct.productName,
        category: categoryName,
        quantity: quantity,
        price: selectedProduct.productPrice,
        total: selectedProduct.productPrice * quantity
      };
  
      this.sales.push(productToAdd); 
      this.posForm.reset();
      console.log(this.sales);
      this.calculateTotals();
    });
    
  }

  calculateTotals() {
    const data = this.sales;
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

  onAddProduct() {
    this.calculateTotals();
  }

  onDeletedProduct() {
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
        return merge(observableOf(this.sales), this.paginator.page, this.sort.sortChange)
          .pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.sales ]));
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
