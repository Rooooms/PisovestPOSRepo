import { Component,Inject ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../services/core/core.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  product: FormGroup; 
  categories= [];

    constructor(private _productFb: FormBuilder , private productService : ProductService, 
      private _dialogRef : MatDialogRef<ProductAddEditComponent>, private categoryService : CategoryService,
      @Inject(MAT_DIALOG_DATA) public data : any,
      private coreService : CoreService
      ){
    this.product = this._productFb.group({
    id:'',
    categoryName: '',
    productName: '',
    productBrand: '',
    productDescription: '',
    productPrice: 0,
    productQuantity: 0,
  });
    }

    ngOnInit(): void {
        this.product.patchValue(this.data)
        this.categoryService.getCategoryList().subscribe((categories: any) => {
          this.categories = categories.map((category: any) => category.categoryName);
          console.log(this.categories);
        });
    }

    onFormSubmit(){
      if(this.product.valid){
        if(this.data){
          this.productService.updateProduct(this.product.value, this.data.id).subscribe({
            next : (val : any) => {
             
             this.coreService.openSnackBar('Product Update Successfully')
             this._dialogRef.close(true);
            },
            error:(err:any)=>{
              console.log(err);
            }
          })
        }
        
        else{
        this.productService.addProduct(this.product.value)        
        .subscribe({
          next : (val : any) => {
            console.log (this.product.value)
           this.coreService.openSnackBar('Product Added Successfully')
           this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.log(err);
          }
        })
      }
    }
    }
    Product = [
      {
        placeholder: 'Category',
        type: 'text',
        id: 'categoryName',
        name: 'categoryName',
        label: 'Category',
        value: 'categoryName',
      },
      {
        placeholder: 'Ex. Air Jordan 1 Low',
        type: 'text',
        id: 'productName',
        name: 'productName',
        label: 'Product Name',
      },
      {
        placeholder: 'Ex. Nike',
        type: 'text',
        id: 'productBrand',
        name: 'productBrand',
        label: 'Brand',
      },
      {
        placeholder: 'Ex. Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. With an iconic design that pairs perfectly with any fit, these kicks ensure youll always be on point.',
        type: 'string',
        id: 'productDescription',
        name: 'productDescription',
        label: 'Description',
      },
      {
        placeholder: '6,195',
        type: 'text',
        id: 'productPrice',
        name: 'productPrice',
        label: 'Price',
      },
      {
        placeholder: '10',
        type: 'text',
        id: 'productQuantity',
        name: 'productQuantity',
        label: 'Quantity',
      },
        ];
}
