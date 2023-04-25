import { Component } from '@angular/core';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductDataDataSource } from '../product-data/product-data-datasource';

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



  subtotalFields = [{ label: 'Sub Total', name: 'subTotal' },
  { label: 'Tax Inclusive (%)', name: 'taxInclusive' },
  { label: 'Tax Amount', name: 'taxAmount' },
  { label: 'Grand Total', name: 'grandTotal' }];
  dataSource: ProductDataDataSource;



  constructor(private matDialog: MatDialog) {
    this.dataSource = new ProductDataDataSource();
  }


  openDialog() {
    // Handle button click event here
    this.matDialog.open(InvoiceDialogComponent, {
      width: '30%',
      height: '70%',
    });
  }

  addProduct() {
    alert('Product Added')
  }


}
