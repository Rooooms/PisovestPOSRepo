import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  Category = [
    {
      placeholder: 'Category Name',
      type: 'string',
      name: 'Category Name',
    },
    {
      placeholder: 'Category Description',
      type: 'textbox',
      name: 'Category Description',
    }
      ];
      formData = {};

      category: any = {};

      // Define the onSubmit method to handle form submission
      onSubmit() {
        // Handle form submission logic here, such as sending the form data to a server
        console.log(this.category);
      }
}
