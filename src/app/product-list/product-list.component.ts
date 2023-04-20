import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AlertdeleteComponent } from '../alertdelete/alertdelete.component';
import { ProductService } from '../services/product-services/product.service';
import { product } from '../Models/product.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  product: product[] = [];
  public pageTitle: string;

dataName = [  { name: 'categoryName', label: 'Category' },                           
              { name: 'productName', label: 'Product Name' },
              { name: 'productModel', label: 'Model' },
              { name: 'productBrand', label: 'Brand' }, 
              { name: 'productDescription', label: 'Description' }, 
              { name: 'productPrice', label: 'Price' },
              { name: 'productQuantity', label: 'Quantity' }, 
              { name: 'productStatus', label: 'Status' },];

getColumns() {
  return ['categoryName',  'productName', 'productBrand', 'productDescription', 'productPrice', 'productQuantity', 'productStatus', 'actions'];
}

      constructor(public dialog: MatDialog, private ProductService: ProductService, private sharedService : SharedService) {}

  ngOnInit(): void {
    this.ProductService.getAllProduct().subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.sharedService.pageName = 'Product List';
    this.pageTitle = 'Product List';
      
  }
  

  openDialog() {
      const dialogRef = this.dialog.open(AddProductComponent, {
        width: '30%',
        height: '58%',
      });
  }
  openDialogEdit(){
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '30%',
      height: '58%',
    });
  }
  openDialogAlertDelete(){
    this.dialog.open(AlertdeleteComponent);
  }
  // ALERT BOX
  // confirmDelete(): void {
  //   confirm("Are you sure you want to delete?")
  // }
    
}


