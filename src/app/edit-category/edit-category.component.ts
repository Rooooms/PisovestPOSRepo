import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  Category = [
    {
      placeholder: 'Category Name',
      type: 'text',
      name: 'Category Name',
    },
    {
      placeholder: 'Category Description',
      type: 'string',
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
