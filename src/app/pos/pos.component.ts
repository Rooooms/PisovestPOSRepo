import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent {

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
