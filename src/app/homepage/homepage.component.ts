// card.component.ts
import { Component} from '@angular/core';

interface Card {
  buttonText: string;
  value: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  cards: Card[] =[
    { buttonText: 'POS', value:'./POS'},
    { buttonText: 'Product List', value:'./POS'},
    { buttonText: 'Sales Report', value:'./POS'},
    { buttonText: 'Transactions', value:'./POS'},
    { buttonText: 'Employee Management', value:'./POS'},
    { buttonText: 'Dummy', value:'./POS'}
    //Add more items as needed
  ];
}
