import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AlertdeleteComponent } from '../alertdelete/alertdelete.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data = [  { Category: 'Category 1', Description: 'Description 1' , ProductName: 'Product 1', Brand: 'Brand 1', Quantity: 1, Status:"Available"},  
            { Category: 'Category 2', Description: 'Description 2' , ProductName: 'Product 2', Brand: 'Brand 2', Quantity: 3, Status:"Available"},  
            { Category: 'Category 3', Description: 'Description 3' , ProductName: 'Product 3', Brand: 'Brand 3', Quantity: 2, Status:"Available"}];

dataName = [  { name: 'Category', label: 'Category' },
              { name: 'ProductName', label: 'Product Name' },
              { name: 'Brand', label: 'Brand' }, 
              { name: 'Description', label: 'Description' }, 
              { name: 'Quantity', label: 'Quantity' }, 
              { name: 'Status', label: 'Status' },];

getColumns() {
  return ['ProductName', 'Category', 'Brand', 'Description', 'Quantity', 'Status', 'actions'];
}

      constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddProductComponent);
  }
  openDialogEdit(){
    this.dialog.open(EditProductComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(AlertdeleteComponent);
  }
  // ALERT BOX
  // confirmDelete(): void {
  //   confirm("Are you sure you want to delete?")
  // }
}
