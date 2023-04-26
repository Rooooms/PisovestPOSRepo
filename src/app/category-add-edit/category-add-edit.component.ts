import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../services/category-services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../services/core/core.service';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css']
})
export class CategoryAddEditComponent implements OnInit{

  category: FormGroup; 
    

    constructor(private _categoryFb: FormBuilder , private categoryService : CategoryService, 
      private _dialogRef : MatDialogRef<CategoryAddEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data : any,
      private coreService : CoreService
      ){
        
    this.category = this._categoryFb.group({
    id: '',
    categoryName: '',
    categoryDescription: '',
  })
  }

    ngOnInit(): void {
        this.category.patchValue(this.data)
    }

    onFormSubmit(){
      if (this.category.valid){
        if (this.data){
          
          this.categoryService
          .updateCategory(this.data.id, this.category.value)
          .subscribe({
            next: (val: any) =>{
                  this.coreService.openSnackBar('Product Update Successfully')
                  this._dialogRef.close(true);      
            },
            error: (err: any) =>{
              console.error(err);
            },
          });
        }
        else{
        this.categoryService.addCategory(this.category.value).subscribe({
          next : (val : any) => {
           
           this.coreService.openSnackBar('Category Added Successfully')
           this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.log(err);
          },
        });
      }
    }
    }
    Category = [
      {
        placeholder: 'Ex. Clothes',
        type: 'string',
        name: 'categoryName',
        label: 'Category Name',
      },
      {
        placeholder: 'Ex. Conspicuously new and unused',
        type: 'textbox',
        name: 'categoryDescription',
        label: 'Category Description',
      }
        ];
}

