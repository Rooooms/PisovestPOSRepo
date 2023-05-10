import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Transactions';
    this.pageTitle = 'Transactions';

}
}
