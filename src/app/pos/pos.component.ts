import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../services/product-services/product.service';
import { CategoryService } from '../services/category-services/category.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PosDataSource, PosItem } from './pos-datasource';


@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  template: '<h1>{{ pageTitle }}</h1>',
})

export class POSComponent implements OnInit, AfterViewInit {

    // temporary data
dataObj: DataObj;
dataArr: DataObj[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PosItem>;
  dataSource: PosDataSource;





  public pageTitle: string;
  categories= [];
  posForm: FormGroup;
  totalForm: FormGroup;
  products = [];
  price = [];

  constructor(

    private sharedService: SharedService,
    private categoryService : CategoryService,
    private productService : ProductService,
    private _Pos: FormBuilder,
    private _Total: FormBuilder,
    ) {
      // this.dataSource = new PosDataSource();
      this.dataObj = new DataObj();

    }



  displayedColumns: string[] = ['Category', 'Product', 'Quantity', 'Price', 'Total', 'Action'];

  ngOnInit() {
        this.getAllEmployee();
    this.sharedService.pageName = 'Point of Sale';
    this.pageTitle = 'Point of Sale';


    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories //Fetches the Entire Category List.
      console.log('Categories are:' ,this.categories)
      console.log(this.dataSource)
    });


    this.posForm = this._Pos.group({
      categoryName: [''], // Initial value for the category select
      product: [''], // Initial value for the product select
      quantity: [''], // Initial value for the quantity input
      search: [''], // Initial value for the search input
      categoryId: [''],
    });

    this.totalForm = this._Total.group({
      subTotal: [''],
      taxInclusive: [{value: '12%'}],
      taxAmount: [{value: 887}], // Initial value for the price of the product
      GrandTotal: ['']
    });



}

 onSave(){

    this.dataArr.push(this.dataObj);


    const isData = localStorage.getItem("EmpData");
    if(isData == null){
      const newArr = [];
      newArr.push(this.dataObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));
      location.reload();
    }else
    {
      const oldData = JSON.parse(isData);
      oldData.push(this.dataObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData));
      location.reload();
    }
  }

  getAllEmployee(){
    const isData = localStorage.getItem("EmpData");
    if(isData != null){
      const localData = JSON.parse(isData);
      this.dataArr = localData;
    }
  }

onCategorySelected(selectedCategoryName : any){
  this.productService.getProductsofSelectedCategory(selectedCategoryName).subscribe(
    data => {
      this.products = data.filter(products => products.categoryName == selectedCategoryName);
      console.log(data);



      // this.price = data.filter(price => price.categoryName == selectedCategoryName)
      // console.log('price', this.price);
    }
  )
}






ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.table.dataSource = this.dataSource;
}

getPrice(){

}

checkout(){
  localStorage.clear()
  location.reload();
}

  fields = [
    {
      placeholder: 'Category',
        type: 'select',
        id: 'categoryName',
        name: 'categoryName',
        label: 'Category',
        value: 'categoryName',
    },
    {
      label: 'Product',
      type: 'select',
    },


    {
      label: 'Quantity',
      type: 'input',
    },

  ];



  subtotalFields = [
  {
    label: 'Sub Total',
    name: 'subTotal',
    value: '',
  },
  {
    label: 'Tax Inclusive (%)',
    name: 'taxInclusive',
    value: 12
  },
  {
    label: 'Tax Amount',
    name: 'taxAmount',
    value: 887,
  },
  {label: 'Grand Total',
  name: 'grandTotal',
  value: '',
}];



}



export class DataObj{
  category: string;
  product: string;
  quantity: number;
  price: number;
  total: number;



  constructor(){
    this.category = "";
    this.product = "";
    this.quantity = null;
    this.price = null;
    this.total = null;


  }


}
