import { Component , OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { AlertdeleteComponent } from '../alertdelete/alertdelete.component';
import { TestingComponent } from '../testing/testing.component';
import { category } from '../Models/category.model';
import { CategoryService } from '../services/category-services/category.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  public pageTitle: string;

  category: category[] = [];


dataName = [  { name: 'categoryName', label: 'Category Name'},
              { name: 'categoryDescription', label: 'Description'}];

getColumns() {
return ['categoryName', 'categoryDescription', 'actions'];
}

  constructor(public dialog: MatDialog, private categoryService: CategoryService, private sharedService: SharedService) {}

  openDialog() {
    this.dialog.open(AddCategoryComponent);
  }
  openDialogEdit(){

    this.dialog.open(EditCategoryComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(AlertdeleteComponent);
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (category) => {
        this.category = category;
      },
      error: (response) => {
        console.log(response);
      }
    });
    this.sharedService.pageName = 'Category List';
    this.pageTitle = 'Category LIst';
  }

}

