import { Component,Inject ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SampleService } from '../services/sample/sample.service';
import { CoreService } from '../services/core/core.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  
    // employees: employees[]= [];
    product: FormGroup; 
    

    constructor(private _productFb: FormBuilder , private sampleService : SampleService, 
      private _dialogRef : MatDialogRef<SampleComponent>,
      @Inject(MAT_DIALOG_DATA) public data : any,
      private coreService : CoreService
      ){
    this.product = this._productFb.group({
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  });
    }

    ngOnInit(): void {
        this.product.patchValue(this.data)
    }

    onFormSubmit(){
      if(this.product.valid){
        if(this.data){
          this.sampleService.updateProduct(this.product.value, this.data.id).subscribe({
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
        this.sampleService.addProduct(this.product.value).subscribe({
          next : (val : any) => {
           
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

    option = [
      { value: 'option1', label: 'Clothes' },
      { value: 'option2', label: 'Shoes' },
      { value: 'option3', label: 'Keyboard' }
    ];
    Product = [
      {
        placeholder: 'Category',
        type: 'text',
        id: 'categoryName',
        name: 'Category',
      },
      {
        placeholder: 'Ex. Air Jordan 1 Low',
        type: 'text',
        id: 'productName',
        name: 'Product Name',
      },
      {
        placeholder: 'Ex. Nike',
        type: 'text',
        id: 'productBrand',
        name: 'Brand',
      },
      {
        placeholder: 'Ex. Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. With an iconic design that pairs perfectly with any fit, these kicks ensure youll always be on point.',
        type: 'string',
        id: 'productDescription',
        name: 'Description',
      },
      {
        placeholder: '6,195',
        type: 'int',
        id: 'productPrice',
        name: 'Price',
      },
      {
        placeholder: '10',
        type: 'int',
        id: 'productQuantity',
        name: 'Quantity',
      },
        ];
}
