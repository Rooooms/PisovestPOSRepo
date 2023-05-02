import { Component,Inject ,OnDestroy,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../services/core/core.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit , OnDestroy{
  private productSubscription: Subscription = new Subscription();
  product: FormGroup;
  categories= [];

    constructor(private _productFb: FormBuilder ,
      private productService : ProductService,
      private _dialogRef : MatDialogRef<ProductAddEditComponent>,
      private categoryService : CategoryService,
      @Inject(MAT_DIALOG_DATA) public data : any,
      private coreService : CoreService
      ){
    this.product = this._productFb.group({
    id:'',
    categoryName: '',
    productName: ['', Validators.required],
    productBrand: ['', Validators.required],
    productPrice: ['', [Validators.required, Validators.min(0.01), Validators.max(1000000)]],
    productQuantity: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    productDescription: '',
  });
    }

  ngOnDestroy(): void {
  this.productSubscription.unsubscribe();
}

    ngOnInit(): void {
        this.product.patchValue(this.data)
        this.categoryService.getCategoryList().subscribe((categories: any) => {
        this.categories = categories.map((category: any) => category.categoryName);

        });
    }


    onFormSubmit(){
      if (this.product.valid){
        if (this.data){
          console.log(this.data)
          this.productService.updateProduct(this.data.id, this.product.value).subscribe({

            next: (val: any) =>{
              this.coreService.openSnackBar('Product Update Successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) =>{
              console.error(err);
            },
          });
        }else{
          this.productService.addProduct(this.product.value).subscribe({
            next:(val: any) => {
              this.coreService.openSnackBar('Added Successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) =>{
              console.error(err);
            },
          });
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
        placeholder: '6,195',
        type: 'number',
        id: 'productPrice',
        name: 'productPrice',
        label: 'Price',
      },
      {
        placeholder: '10',
        type: 'number',
        id: 'productQuantity',
        name: 'productQuantity',
        label: 'Quantity',
      },
      {
        type: 'textarea',
        id: 'productDescription',
        name: 'productDescription',
        label: 'Description',
      },
        ];
}
