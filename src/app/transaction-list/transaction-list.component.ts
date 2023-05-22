import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceServiceService} from 'src/app/transaction-list/invoice-service.service'
import { TransactionInvoiceDialogComponent } from '../transaction-invoice-dialog/transaction-invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})


export class TransactionListComponent {
  invoiceList!: invoice[];
  public pageTitle: string;
  invoiceId: any;
  invoiceDataService: any;




  constructor(private sharedService: SharedService, private invoiceApi: InvoiceServiceService,public dialog: MatDialog) {}

  ngOnInit() {
    this.sharedService.pageName = 'Transaction List';
    this.pageTitle = 'Transaction List';
    this.fetchInvoice();



}

  dataSource: any;

  fetchInvoice(){
    this.invoiceApi.getInvoice().subscribe(data=>{
      this.invoiceList = data
      this.dataSource = new MatTableDataSource(this.invoiceList)
      console.log("List of Invoice", this.invoiceList)
    })
  }


fetchInvoiceById(id: string): void {
  console.log("This is ID", id);
  this.invoiceApi.getInvoicebyID(id).subscribe((invoice: any) => {
    this.invoiceId = invoice;
    console.log("invoice", invoice);
    this.openDialog(invoice); // Pass the fetched invoice data to the openDialog method
  });
}

openDialog(invoiceData: any) {
  const dialogRef = this.dialog.open(TransactionInvoiceDialogComponent, {
    data: invoiceData // Pass the fetched invoice data as a parameter to the dialog component
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


  //FOR HEADER
  displayedColumns: string[] = ['id', 'date', 'totalPrice', 'action'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  //FOR FILTERING DATA
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}




//INTERFACE FOR DATA
export interface invoice {
    id: string,
    date: string,
    totalPrice: number,
    tax: number,
    taxDeduction: number,
    grandTotal: number,
    cash: number,
    change: number,
    purchaseItems: [
      {
        id: string,
        productName: string,
        purchaseQuantity: number,
        productPrice: number,
        totalPrice: number,
        invoiceId: string,
        productId: string,
      }
    ]

}

