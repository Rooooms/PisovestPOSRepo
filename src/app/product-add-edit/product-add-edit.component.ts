import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent {
  Product = [
    {
      placeholder: 'Category',
      type: 'text',
      name: 'Category',
    },
    {
      placeholder: 'Ex. Air Jordan 1 Low',
      type: 'text',
      name: 'Product Name',
    },
    {
      placeholder: 'Ex. Nike',
      type: 'text',
      name: 'Brand',
    },
    {
      placeholder: 'Ex. Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. With an iconic design that pairs perfectly with any fit, these kicks ensure youll always be on point.',
      type: 'string',
      name: 'Description',
    },
    {
      placeholder: '6,195',
      type: 'int',
      name: 'Price (₱)',
    },
    {
      placeholder: '10',
      type: 'int',
      name: 'Quantity',
    },
      ];
      formData = {};

      product: any = {};

      // Define the onSubmit method to handle form submission
      option = [
        { value: 'option1', label: 'Clothes' },
        { value: 'option2', label: 'Shoes' },
        { value: 'option3', label: 'Keyboard' }
      ];
    
      onSubmit() {
        
        console.log(this.formData);
      }

      constructor(private _product: FormBuilder){
       // this.Product = this._product

      }

}
