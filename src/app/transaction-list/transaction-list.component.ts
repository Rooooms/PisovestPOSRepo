import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})


export class TransactionListComponent {
  public pageTitle: string;


  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Transaction List';
    this.pageTitle = 'Transaction List';

}


  //FOR HEADER
  displayedColumns: string[] = ['id', 'date', 'totalPrice', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //FOR FILTERING DATA
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




//INTERFACE FOR DATA
export interface PeriodicElement {
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


//FAKE DATA
const ELEMENT_DATA: PeriodicElement[] = [
  // {id: "adasd232", date: 'Hydrogen', totalPrice: 1.0079},

];
