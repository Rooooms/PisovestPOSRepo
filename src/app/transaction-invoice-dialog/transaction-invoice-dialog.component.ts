import { Component,Inject } from '@angular/core';
import { InvoiceServiceService } from '../transaction-list/invoice-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { invoice } from '../transaction-list/transaction-list.component';

@Component({
  selector: 'app-transaction-invoice-dialog',
  templateUrl: './transaction-invoice-dialog.component.html',
  styleUrls: ['./transaction-invoice-dialog.component.css']
})
export class TransactionInvoiceDialogComponent {


  selectedInvoice: invoice | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedInvoice = data; // Assign the passed data to the selectedInvoice property



}

  printInvoice(): void {
    window.print(); // Print the current window or specific section
  }

}
