import { Component, OnInit,  ViewChild  } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceService } from '../services/invoice.service';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{
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
  table : any[];
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
      date: '2023-05-19T10:20:48.6783036+08:00',
      // purchaseQuantity: [0],
      totalPrice: [0],
      tax: '12%',
      taxDeduction: [0],
      grandTotal: [0],
      cash: [0],
      change: [0],
      purchaseItems: [0]['']

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
  
    if (!quantity || quantity == 0) {
      return;
    }
  
    this.productService.getProductsofSelectedCategory(selectedCategory).subscribe((selectedCategory: any) => {
      const selectedProduct = product;
    
      const productToAdd = {
        categoryId: selectedProduct.categoryId,
        productId: selectedProduct.id,
        Product: selectedProduct.productName,
        Category: categoryName,
        Quantity: quantity,
        Price: selectedProduct.productPrice,
        Total: selectedProduct.productPrice * quantity
      };
  
      this.sales.push(productToAdd);
      console.log(this.sales)
      this.calculateTotals();
      this.salesDataSource.data = this.sales;
      console.log(this.sales)

      // this.invoiceForm.patchValue({
      //   purchaseQuantity: productToAdd.Quantity,
      //   productId: productToAdd.id,
      // })

      const formData = {
        productName : Object.values(this.sales)[0]['Product'],
        productId : Object.values(this.sales)[0]['productId'],
        purchaseQuantity : Object.values(this.sales)[0]['Quantity'],
        purchasePrice : Object.values(this.sales)[0]['Price'],
        totalPrice : Object.values(this.sales)[0]['Total']
    };
      this.table.push(formData);
      // console.log(this.table);
  
      // this.table.splice(0, this.table.length); // Clear the array
      // this.sales.forEach((sale: any) => {
      //   const formData = [
      //     sale['productId'],
      //     sale['Product'],
      //     sale['Quantity'],
      //     sale['Price'],
      //     sale['Total']
      //   ];
      //   this.table.push(formData);
      // });
      
      console.log("table",this.table);
      this.posForm.reset();

     
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

  this.totalForm.patchValue({
    totalPrice: this.totalPrice,
    tax : 0.12,
    taxDeduction: this.taxDeduction,
    grandTotal: this.grandTotal,
  
  })

  console.log(this.totalForm.value)
}

calculateChanges() {
  this.change = this.cash - this.grandTotal;

  this.totalForm.patchValue({
    change: this.change,
  
  })
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


getMinDate(): Date {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 7);
  return cutoffDate;
}
getDate(): Date {
  return new Date();
}


 onFormSubmit(){
  const currentDate = new Date();
  this.invoiceForm.patchValue({ dateGiven: currentDate });
  

  // Assign the values from totalForm to invoiceForm controls
  this.invoiceForm.patchValue({

    totalPrice: this.totalForm.value.totalPrice,
    tax: this.totalForm.value.tax,
    taxDeduction: this.totalForm.value.taxDeduction,
    grandTotal: this.totalForm.value.grandTotal,
    cash: this.totalForm.value.cash,
    change: this.totalForm.value.change,
    purchaseItems: this.table
  });

  // console.log('invoice form', this.invoiceForm.value)
        this.invoiceService.addInvoice(this.invoiceForm.value).subscribe({    
          next: (val: any) => {
            console.log(val)
            this.coreService.openSnackBar('Checkout Successfully');
          },
          error: (err: any) => {
            console.error(err);
          },
        }); 

 }
}