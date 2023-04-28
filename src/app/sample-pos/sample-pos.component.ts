import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-pos',
  templateUrl: './sample-pos.component.html',
  styleUrls: ['./sample-pos.component.css']
})

export class SamplePosComponent {
  public pageTitle: string;
  categories= [];
  
  posForm: FormGroup;
  products = [];  

  constructor(
    private sharedService: SharedService,
    private categoryService : CategoryService,
    private productService : ProductService,
    private _Pos: FormBuilder,
  ){}

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
  }

  onCategorySelected(selectedCategoryId : any){
    this.productService.getProductsofSelectedCategory(selectedCategoryId).subscribe(
      data => {
        this.products = data.filter(products => products.categoryId == selectedCategoryId)
        console.log('Product', this.products);
      }
    )
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
      options: []
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



  subtotalFields = [  {label: 'Sub Total', name: 'subTotal'},
                      {label: 'Tax Inclusive (%)', name: 'taxInclusive'},
                      {label: 'Tax Amount', name: 'taxAmount'},
                      {label: 'Grand Total', name: 'grandTotal'}];


}
