import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{
  categories= [];
  products = []; 
  posForm: FormGroup;

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
      quantity: [''], // Initial value for the quantity input
      search: [''], // Initial value for the search input
      categoryId: [''],
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

  // addProductSelected(product : any){  
  //   this.productService.getProductbyId(product).subscribe(
  //     data =>{
  //       console.log('Product',this.products);
  //     }
  //   )
  // }
  
 

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
      id:'productName',
      name:'productName',
      type: 'select',
    },
    {
      label: 'Quantity',
      type: 'input',
    },
  ];

  
}


