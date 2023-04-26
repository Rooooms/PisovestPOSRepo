import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule } from '@angular/material/core';
import { TestingComponent } from './testing/testing.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import {MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SampleComponent } from './sample/sample.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { POSComponent } from './pos/pos.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDataComponent } from './transaction-data/transaction-data.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { PayslipComponent } from './payslip/payslip.component';
import { MatNativeDateModule,} from '@angular/material/core';
import { MatSort,} from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';


const appRoute: Routes = [
  {path: '', component: CardComponent},
  {path: 'Home', component: CardComponent},
  {path: 'Sales', component: SalesReportComponent},
  {path: 'Transactions', component: TransactionListComponent},
  {path: 'POS', component: POSComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductManagementComponent,
    CategoryListComponent,
    NavbarComponent,
    SidebarComponent,
    TestingComponent,
    EmployeeManagementComponent,
    AddStaffComponent,
    SidebarComponent,
    NavbarComponent,
    ManageStaffComponent,
    ManageSalaryComponent,
    AddSalaryComponent,
    SampleComponent,
    EditSalaryComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    POSComponent,
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
    ProductDataComponent,
    PayslipComponent,
    NavbarComponent,
    SidebarComponent,
    TestingComponent,
    ProductAddEditComponent,
    CategoryAddEditComponent,
    CategoryListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatIconModule,
    RouterModule.forRoot(appRoute),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,

  ],
  providers: [DatePipe],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
