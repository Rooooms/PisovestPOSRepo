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
      next : (category) => {
        this.router.navigate(['categorylist'])
      }
    })
  }

  Category = [
    {
      placeholder: 'Ex. Clothes',
      type: 'string',
      name: 'Category Name',
    },
    {
      placeholder: 'Ex. Conspicuously new and unused',
      type: 'textbox',
      name: 'Category Description',
    }
      ];
      formData = {};

      category: any = {};

      
}
