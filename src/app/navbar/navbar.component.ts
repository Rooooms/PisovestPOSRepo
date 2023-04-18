// import { Component, EventEmitter, Output } from '@angular/core';

// interface Page {
//   name: string;
//   route: string;
// }

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {

//   title: string = 'Pisovest';
//   pages: Page[] = [
//     { name: 'Home', route: ''},
//     { name: 'Point Of Sale', route: './POS'},
//     { name: 'Product List', route: './POS'},
//     { name: 'Sales Report', route: './POS'},
//     { name: 'Transactions', route: './POS'},
//     { name: 'Employee Management', route: './POS'},
//     { name: 'Dummy', route: './POS'}
//   ];

//   currentPage: Page | null = null;

//   @Output() toggleSidebarEvent = new EventEmitter<void>();

//   toggleSidebar() {
//     this.toggleSidebarEvent.emit();
//   }


//   showPageValue(page: Page) {
//     console.log('Clicked page:', page);
//     this.currentPage = page;
//   }
// }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
//import { Title } from '@angular/platform-browser';

interface Page {
  name: string;
  route: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  name:string = 'POS';

  ngOnInit() {
    console.log(this.name);
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });
  }

 //@Input () title : string = 'Pisovest'



  // pages: Page[] = [
  //   { name: 'Pisovest', route: '' },
  //   { name: 'Point Of Sale', route: './POS' },
  //   { name: 'Product List', route: './POS' },
  //   { name: 'Sales Report', route: './POS' },
  //   { name: 'Transactions', route: './POS' },
  //   { name: 'Employee Management', route: './POS' },
  //   { name: 'Dummy', route: './POS' }
  // ];
  // currentPage: Page | null = null;

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  // showPageValue(page: Page) {
  //   console.log('Clicked page:', page);
  //   this.currentPage = page;
  // }
}
