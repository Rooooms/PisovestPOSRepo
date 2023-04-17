import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent {

  data = [  { CategoryName: 'Category 1', Description: 'Description 1' },  
            { CategoryName: 'Category 2', Description: 'Description 2' },  
            { CategoryName: 'Category 3', Description: 'Description 3' }];

dataName = [  { name: 'CategoryName', label: 'Category Name' },  
              { name: 'Description', label: 'Description' }];

getColumns() {
return ['CategoryName', 'Description', 'actions'];
}

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddCategoryComponent);
  }
  openDialogEdit(){
    this.dialog.open(EditCategoryComponent);
  }

}

