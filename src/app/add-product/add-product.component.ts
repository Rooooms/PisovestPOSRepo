import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  Product = [
    {
      placeholder: 'Category',
      type: 'text',
      name: 'Category',
    },
    {
      placeholder: 'Product Name',
      type: 'text',
      name: 'Product Name',
    },
    {
      placeholder: 'Brand',
      type: 'text',
      name: 'Brand',
    },
    {
      placeholder: 'Description',
      type: 'string',
      name: 'Description',
    },
    {
      placeholder: 'Price',
      type: 'int',
      name: 'Price',
    },
    {
      placeholder: 'Quantity',
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
}
