import { Component, OnInit,  ViewChild  } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit{
  categories= [];
  products = [];
  prices = [];
  id : any;
  selectedCategory: any;
  selectedProduct: any;
  selectedQuantity: any = 0;
  addedProducts: any[] = [];
  posForm: FormGroup;
  totalForm: FormGroup;
  sales: any[] = []; // temporary array to hold sales data
  newcategories= [];
  subTotal: number = 0;
  taxInclusive: number = 0.12;
  taxAmount: number = 0;
  grandTotal: number = 0; 
  salesDataSource: MatTableDataSource<any>;
  constructor(private categoryService : CategoryService, 
    private productService : ProductService,
    private _Pos: FormBuilder,
    private _Total:FormBuilder,
    ){}
   
    displayedColumns: string[] = ['Category', 'Product', 'Quantity', 'Price', 'Total', 'Action'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

  
  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories //Fetches the Entire Category List.
      console.log('Categories are:' ,this.categories)
    });

    this.posForm = this._Pos.group({
      categoryName: [''], // Initial value for the category select
      product: [''], // Initial value for the product select
      quantity: [null, [Validators.required, Validators.min(1), Validators.max(this.selectedQuantity)]], // Initial value for the quantity input
      search: [''], // Initial value for the search input
      categoryId: [''],
    });

    this.totalForm = this._Total.group({
      subtotal: 0,
      taxInclusive: '12%',
      taxAmount: 0,
      grandTotal: 0,
    });

    this.salesDataSource = new MatTableDataSource(this.sales);
    this.salesDataSource.paginator = this.paginator;
  }

  getColumns(){
    return ['categoryName', 'product', 'quantity', 'categoryId'];
    }

  onCategorySelected(selectedCategoryId: any) {
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

  isReset: boolean = false;

addProduct() {
  const product = this.posForm.value.product;
  const quantity = this.posForm.value.quantity;
  const selectedCategory = this.categories.find(c => c.id === product.categoryId);
  const categoryName = selectedCategory.categoryName;
  
  console.log(`categoryName: ${categoryName}`);
  console.log(`product: ${product.productName}`);

  this.productService.getProductsofSelectedCategory(selectedCategory).subscribe((selectedCategory: any) => {
    console.log(`Category Name: ${categoryName}`);

    const selectedProduct = product;
  
    const productToAdd = {
      categoryId: selectedProduct.categoryId,
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
    this.salesDataSource = new MatTableDataSource(this.sales);
  });
}

onDeletedProduct(index: number) {
  this.sales.splice(index, 1); // Remove 1 element at index
  this.salesDataSource.data = this.sales; // Update the data source for the table
  this.calculateTotals();
  console.log(this.sales)
}

calculateTotals() {
  const data = this.sales;
  let subTotal = 0;
  let taxInclusive = .12;
  let taxAmount = 0;
  let grandTotal = 0;

  data.forEach((item: any) => {
    subTotal += item.quantity * item.price;
  });

  taxAmount = subTotal * taxInclusive;
  grandTotal = subTotal + taxAmount;

  this.subTotal = subTotal;
  this.taxAmount = taxAmount;
  this.grandTotal = grandTotal;
}


  
resetSales() {
    this.sales = [];
    this.isReset = true;
}
  
fields = [
    {
      placeholder: 'Category',
        type: 'select',
        id: 'categoryId',
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
      label: 'Quantity',
      id:'Quantity',
      name:'Quantity',
      type: 'number',
      value: 'number',
      placeholder: 'Quantity',
    }
];

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

}