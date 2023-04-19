import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from '../Models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

    categoryDetails : category = { 
    id : '',
    categoryName : '',
    categoryDescription: ''
  }

  constructor (private route: ActivatedRoute, private categoryService : CategoryService, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);

        if (id){
          //call the API
          this.categoryService.getCategory(id).subscribe({
            next: (response) => {
              this.categoryDetails = response;
            }
          });

        }
      }
    });
    
  }

  updateCategory(): void{
    this.categoryService.updateCategory(this.categoryDetails.id, this.categoryDetails).subscribe({
      next : (response) => {
        this.router.navigate(['categorylist'])
      }
    });
  }
  Category = [
    
    {
      placeholder: 'Category Name',
      type: 'text',
      name: 'categoryName',
    },
    {
      placeholder: 'Category Description',
      type: 'string',
      name: 'categoryDescription',
    }
      ];
      

      
}
