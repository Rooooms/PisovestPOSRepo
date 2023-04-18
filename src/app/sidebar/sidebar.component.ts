import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  menuItems: any[] = [
    { routerLink: [""], icon: "home", btnName: "Home" },
    { routerLink: ["/POS"], icon: "payments", btnName: "POS" },
    { routerLink: ["/POS"], icon: "list", btnName: "Product List" },
    { routerLink: ["/POS"], icon: "leaderboard", btnName: "Sales Report" },
    { routerLink: ["/POS"], icon: "receipt-long", btnName: "Transactions" },
    { routerLink: ["/POS"], icon: "person", btnName: "Employees" }
  ];


  @ViewChild('sidenav') sidenav: MatSidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
