import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

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
}
