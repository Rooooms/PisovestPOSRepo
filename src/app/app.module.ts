import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDataComponent } from './transaction-data/transaction-data.component';
import { PosComponent } from './pos/pos.component';
import { ProductDataComponent } from './product-data/product-data.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';






const appRoute: Routes = [
  {path: '', component: CardComponent},
  {path: 'Home', component: CardComponent},
  {path: 'Sales', component: SalesReportComponent},
  {path: 'Transactions', component: TransactionListComponent},
  {path: 'POS', component: PosComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    InvoiceDialogComponent,
    SalesReportComponent,
    TransactionsComponent,
    SalesDataComponent,
    TransactionListComponent,
    TransactionDataComponent,
    PosComponent,
    ProductDataComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoute),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
