import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @ViewChild('sidenav') sidenav: MatSidenav;

  menuItems: any[] = [
    { routerLink: [""], icon: "home", btnName: "Home" },
    { routerLink: ["/POS"], icon: "payments", btnName: "POS" },
    { routerLink: ["/product"], icon: "list", btnName: "Product Management" },
    { routerLink: ["/POS"], icon: "leaderboard", btnName: "Sales Report" },
    { routerLink: ["/POS"], icon: "receipt-long", btnName: "Transactions" },
    { routerLink: ["/employee"], icon: "person", btnName: "Employees" }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidenav.close();
      }
    });
  }

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
