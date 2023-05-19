import { Component, OnInit,  ViewChild  } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceService } from '../services/invoice.service';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit{
  categories= [];
  products = [];
  prices = [];
  productToAdd = [];
  id : any;
  selectedCategory: any;
  selectedProduct: any;
  selectedQuantity: any = 0;
  addedProducts: any[] = [];
  posForm: FormGroup;
  totalForm: FormGroup;
  invoiceForm:FormGroup;
  sales: any[] = []; // temporary array to hold sales data
  newcategories= [];
  totalPrice: number = 0;
  tax: number = 0.12;
  taxDeduction: number = 0;
  grandTotal: number = 0; 
  cash: number = 0;
  change: number = 0;
  salesDataSource: MatTableDataSource<any>;
  constructor(private categoryService : CategoryService, 
    private productService : ProductService,
    private invoiceService: InvoiceService,
    private coreService: CoreService,
    private _Pos: FormBuilder,
    private _Total:FormBuilder,
    private _Invoice:FormBuilder,
 
    ){}
   
    displayedColumns: string[] = ['Category', 'Product', 'Quantity', 'Price', 'Total', 'Action'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

  
  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories //Fetches the Entire Category List.
    });

    this.posForm = this._Pos.group({
      categoryName: [''], // Initial value for the category select
      product: [''], // Initial value for the product select
      quantity: 0,
      search: [''], // Initial value for the search input
      categoryId: [''],
    });

    this.totalForm = this._Total.group({
      totalPrice: [ 0],
      tax:'12%',
      taxDeduction: [ 0],
      grandTotal: [ 0],
      cash: [0],
      change: [0],
    });

    this.invoiceForm = this._Invoice.group({
      categoryName: [''], 
      product: [''], 
      quantity: 0,
      search: [''], 
      categoryId: [''],
      totalPrice: [0],
      tax: '12%',
      taxDeduction: [ 0],
      grandTotal: [ 0],
      productToAdd: this.productToAdd
    });

    this.salesDataSource = new MatTableDataSource<any>(this.sales);
    this.salesDataSource.paginator = this.paginator;

  }

  onCategorySelected(selectedCategoryId: any) {
    this.selectedCategory = selectedCategoryId;
    this.posForm.get('categoryId').setValue(selectedCategoryId); // set the value of the categoryId control
    this.productService.getProductsofSelectedCategory(selectedCategoryId).subscribe(
      data => {
        this.products = data.filter(products => products.categoryId == selectedCategoryId)
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

  if (!quantity||quantity==0) {
    return;
  }

  this.productService.getProductsofSelectedCategory(selectedCategory).subscribe((selectedCategory: any) => {
   
    const selectedProduct = product;
    
    const productToAdd = {
      categoryId: selectedProduct.categoryId,
      id: selectedProduct.id,
      Product: selectedProduct.productName,
      Category: categoryName,
      Quantity: quantity,
      Price: selectedProduct.productPrice,
      Total: selectedProduct.productPrice * quantity
      
    };
    

    this.sales.push(productToAdd);
    console.log(this.sales)
    this.posForm.reset();
    this.calculateTotals();
    this.salesDataSource.data = this.sales;

    
  });
  
}

onDeletedProduct(index: number) {
  this.sales.splice(index, 1); // Remove 1 element at index
  this.salesDataSource.data = this.sales; // Update the data source for the table
  this.calculateTotals();
}

calculateTotals() {
  const data = this.sales;
  let totalPrice = 0.00;
  let tax = 0.12;
  let taxDeduction = 0.00;
  let grandTotal = 0.00;
  let cash = 0; // Convert the input value to a number
  let change = 0.00;

  data.forEach((item: any) => {
    totalPrice += item.Quantity * item.Price; // Update property names here
  });

  taxDeduction = totalPrice * tax;
  grandTotal = totalPrice + taxDeduction;
  change = cash - grandTotal;

  this.totalPrice = parseFloat(totalPrice.toFixed(2));
  this.taxDeduction = parseFloat(taxDeduction.toFixed(2));
  this.grandTotal = parseFloat(grandTotal.toFixed(2));
  this.cash = parseFloat(cash.toFixed(2));
  this.change = parseFloat(change.toFixed(2));

}

calculateChanges() {
  this.change = this.cash - this.grandTotal;
}



keyPressNumbers(event) {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
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
    case 'totalPrice':
      break;
    case 'Tax Inclusive':
      break;
    case 'Tax Amount':
      break;
    case 'Grand Total':
      break;
    default:
      break;
  }
}



 onFormSubmit(){
  

  

  console.log(this.invoiceForm.value)
        // this.invoiceService.addInvoice(this.invoiceForm.value).subscribe({
        //   next: (val: any) => {
        //     console.log(this.invoiceForm)
        //     this.coreService.openSnackBar('Checkout Successfully');
        //   },
        //   error: (err: any) => {
        //     console.error(err);
        //   },
        // }); 
}


}