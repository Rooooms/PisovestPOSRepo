import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  template: '<h1>{{ pageTitle }}</h1>',
})
export class POSComponent {
  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Point of Sale';
    this.pageTitle = 'Point of Sale';

}
  fields = [
    {
      label: 'Category',
      type: 'select',
      options: [
        { label: 'First option', value: 'one' },
        { label: 'Second option', value: 'two' },
      ],
    },
    {
      label: 'Product',
      type: 'select',
      options: [
        { label: 'First option', value: 'one' },
        { label: 'Second option', value: 'two' },
      ],
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
