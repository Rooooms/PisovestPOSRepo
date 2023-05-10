
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{
  categories= [];
  products = [];
  prices = [];
  id : any;
  selectedCategory: any;
  selectedProduct: any;
  selectedQuantity: any;
  addedProducts: any[] = [];
  posForm: FormGroup;
  sales: any[] = []; // temporary array to hold sales data
  newcategories= []	
  constructor(private categoryService : CategoryService, 
    private productService : ProductService,
    private _Pos: FormBuilder,
    ){}
  
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
  });
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
      label: 'input',
      id:'Quantity',
      name:'Quantity',
      type: 'number',
      value: 'number',
      placeholder: 'Quantity',
    }
  ];
}