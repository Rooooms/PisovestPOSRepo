import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from '../shared.service';

interface Page {
  name: string;
  route: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: '<nav>{{ pageName }}</nav>',
})

export class NavbarComponent implements OnInit{

  @Input () title : string = 'Pisovest'

  public pageName: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName$.subscribe((pageName) => {
      this.pageName = pageName;
    });
  }

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
