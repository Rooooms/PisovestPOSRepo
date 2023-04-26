import { Component , OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../services/category-services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from '../services/core/core.service';
import { CategoryAddEditComponent } from '../category-add-edit/category-add-edit.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
   
dataName = [  { name: 'categoryName', label: 'Category Name'},  
              { name: 'categoryDescription', label: 'Description'}];

getColumns() {
return ['categoryName', 'categoryDescription', 'actions'];
}
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor (private _dialog: MatDialog , private categoryservice: CategoryService,
  private coreService : CoreService) {}

ngOnInit(): void {
    this.getCategoryList();
}


openAddEditForm(){
  const dialogRef = this._dialog.open(CategoryAddEditComponent);
  dialogRef.afterClosed().subscribe({
    next : (Category) =>{
      if (Category){
        this.getCategoryList();  
      }
    }
  })
}

getCategoryList(){
  this.categoryservice.getCategoryList().subscribe({
    next: (category) => {

      console.log (category);
      this.dataSource = new MatTableDataSource(category);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: (category) =>{
      console.log(category)
    }
  })
}

// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();        gawa ni romeo 
 
//   if (this.dataSource.paginator) {
//     this.dataSource.paginator.firstPage(); 
//   }
// }
deleteCategory(id : string){
  this.categoryservice.deleteCategory(id).subscribe({
    next : (category) =>{
      this.coreService.openSnackBar('Product Deleted', 'done')
      this.getCategoryList();
    },
    error: console.log
  });
}

openEditForm(data : any){
 const dialogRef = this._dialog.open(CategoryAddEditComponent, {
  data,
 });
 dialogRef.afterClosed().subscribe({
  next : (Category) =>{
    if (Category){
      this.getCategoryList();
    }
  }
})
}

}