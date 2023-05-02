import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product-services/product.service';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from '../services/core/core.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

dataName = [  { name: 'categoryName', label: 'Category' },
              { name: 'productName', label: 'Product Name'},
              { name: 'productBrand', label: 'Brand' },
              { name: 'productDescription', label: 'Description'},
              { name: 'productPrice', label: 'Price'},
              { name: 'productQuantity', label: 'Quantity'},
              { name: 'productStatus', label: 'Status'},];

getColumns() {
  return ['categoryName',  'productName', 'productBrand', 'productDescription', 'productPrice', 'productQuantity', 'productStatus', 'actions'];
}

dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


constructor (private _dialog: MatDialog , private productservice: ProductService,
  private coreService : CoreService) {}

ngOnInit(): void {
    this.getProductList();
}


openAddEditForm(){
  const dialogRef = this._dialog.open(ProductAddEditComponent);
  dialogRef.afterClosed().subscribe({
    next : (product) =>{
      if (product){
        this.getProductList();
      }
    }
  })
}

getProductList(){
  this.productservice.getProductList().subscribe({
    next: (product) => {

      console.log (product);
      this.dataSource = new MatTableDataSource(product);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: (product) =>{
      console.log('error' , product)
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
  this.productservice.deleteProduct(id).subscribe({
    next : (product) =>{
      this.coreService.openSnackBar('Product Deleted', 'done')
      this.getProductList();
    },
    error: console.log
  })
}

openEditForm(data : any){
 const dialogRef = this._dialog.open(ProductAddEditComponent, {
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

