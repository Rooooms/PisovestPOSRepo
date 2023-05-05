import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../services/category-services/category.service';
import { ProductService } from '../services/product-services/product.service';
import { BillService } from '../services/bill/bill.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit{

  displayedColumns:string[] = ['name','category','price','quantity','total','edit',]
  dataS:any=[]
  manageOrderForm:any = FormGroup;
  categories: any = [];
  products: any = [];
  price: any;
  totalAmount:number = 0;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
  private categoryService:CategoryService,
  private productService:ProductService,
  private billService:BillService,
 ){}

  ngOnInit(): void {
    this.manageOrderForm = this.formBuilder.group({
      name:'',
      email:'',
      product:'',
      category:'',
      quantity:'',
      price:'',
      total: 0,

    })
  }
}
