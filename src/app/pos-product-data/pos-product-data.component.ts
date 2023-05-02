import { Component } from '@angular/core';
import { PosProduct } from './pos-product';
import { ApiCallServiceService } from './api-call-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pos-product-data',
  templateUrl: './pos-product-data.component.html',
  styleUrls: ['./pos-product-data.component.css']
})
export class PosProductDataComponent {


 listProducts!: PosProduct[];

 constructor(private apiCall: ApiCallServiceService){}

 ngOnInit() {
  this.fetchProduct()

 }

 dataSource: any;


 fetchProduct(){
  this.apiCall.getProduct().subscribe(data =>{
    this.listProducts = data
    this.dataSource = new MatTableDataSource(this.listProducts);
    console.log('Hi',this.listProducts)
  })
 }

 onDelete(){
  alert('deleted')
 }


  displayedColumns: string[] = ['categoryName', 'productName', 'productPrice' , 'productQuantity','productTotal', 'action'];
  // dataSource = ELEMENT_DATA;

}
