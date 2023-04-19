import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { Router } from '@angular/router';
import { category } from '../Models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  addCategoryRequest : category = { 
    id : '',
    categoryName : '',
    categoryDescription: ''
  }


  constructor (private categoryService : CategoryService, private router : Router){}

  ngOnInit(): void {
    
  }


  addCategory(): void{
    this.categoryService.addCategory(this.addCategoryRequest).subscribe({
      next : (staff) => {
        this.router.navigate(['categorylist'])
      }
    })
  }

  Category = [
    {
      placeholder: 'Category Name',
      type: 'string',
      name: 'categoryName',
    },
    {
      placeholder: 'Category Description',
      type: 'textbox',
      name: 'categoryDescription',
    }
      ];
      formData = {};

      category: any = {};

      
}
