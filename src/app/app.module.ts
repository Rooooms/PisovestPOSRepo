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



const appRoute: Routes = [
  {path: '', component: CardComponent},
  {path: 'Home', component: CardComponent},
  {path: 'Sales', component: SalesReportComponent},
  {path: 'Transactions', component: TransactionsComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoute),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
