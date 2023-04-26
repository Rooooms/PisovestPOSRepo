import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CategoryService } from '../services/category-services/category.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  template: '<h1>{{ pageTitle }}</h1>',
})
export class POSComponent implements OnInit {
  public pageTitle: string;
  categories= [];

  constructor(
    private sharedService: SharedService,
    private categoryService : CategoryService,
    ) {}

  ngOnInit() : void {
    this.sharedService.pageName = 'Point of Sale';
    this.pageTitle = 'Point of Sale';

    this.categoryService.getCategoryList().subscribe((categories: any) => {
      this.categories = categories.map((category: any) => category.categoryName);
    });

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
      options: [
        { label: 'First option', value: 'one' },
        { label: 'Second option', value: 'two' },
      ]
    },
    {
      label: 'Quantity',
      type: 'input',
    },
    {
      label: 'Search',
      type: 'input',
    },
  ];



  subtotalFields = [  {label: 'Sub Total', name: 'subTotal'},
                      {label: 'Tax Inclusive (%)', name: 'taxInclusive'},
                      {label: 'Tax Amount', name: 'taxAmount'},
                      {label: 'Grand Total', name: 'grandTotal'}];


}
