import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AlertdeleteComponent } from '../alertdelete/alertdelete.component';
import { ProductService } from '../services/product-services/product.service';
import { product } from '../Models/product.model';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';
import { SampleComponent } from '../sample/sample.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from '../services/core/core.service';
import { SampleService } from '../services/sample/sample.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  product: product[] = [];

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

dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor (private _dialog: MatDialog , private sampleservice: SampleService,
  private coreService : CoreService) {}

ngOnInit(): void {
    this.getProductList();
}


openAddEditForm(){
  const dialogRef = this._dialog.open(SampleComponent);
  dialogRef.afterClosed().subscribe({
    next : (product) =>{
      if (product){
        this.getProductList();  
      }
    }
  })
}

getProductList(){
  this.sampleservice.getProductList().subscribe({
    next: (product) => {

      console.log (product);
      this.dataSource = new MatTableDataSource(product);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: (product) =>{
      console.log(product)
    }
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
deleteProduct(id : string){
  this.sampleservice.deleteProduct(id).subscribe({
    next : (product) =>{
      this.coreService.openSnackBar('Product Deleted', 'done')
      this.getProductList();
    },
    error: console.log
  })
}

openEditForm(data : any){
 const dialogRef = this._dialog.open(SampleComponent, {
  data,
 });
 dialogRef.afterClosed().subscribe({
  next : (Product) =>{
    if (Product){
      this.getProductList();
    }
  }
})
}

}

