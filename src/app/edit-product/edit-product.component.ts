import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
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
      onSubmit() {
        // Handle form submission logic here, such as sending the form data to a server
        console.log(this.product);
      }
}
