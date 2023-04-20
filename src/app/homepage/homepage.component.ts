// card.component.ts
import { Component} from '@angular/core';
import { SharedService } from '../shared.service';

interface Card {
  buttonText: string;
  value: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  template: '<h1>{{ pageTitle }}</h1>',
})

export class HomepageComponent {

  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Home';
    this.pageTitle = 'Home';

}

  cards: Card[] =[
    { buttonText: 'POS', value:'./POS'},
    { buttonText: 'Product Management', value:'./product'},
    { buttonText: 'Sales Report', value:'./POS'},
    { buttonText: 'Transactions', value:'./POS'},
    { buttonText: 'Employee Management', value:'./employee'},
    // { buttonText: 'Dummy', value:'./POS'}
    //Add more items as needed
  ];
}
