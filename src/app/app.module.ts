import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { TestingComponent } from './testing/testing.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SampleComponent } from './sample/sample.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { PayslipComponent } from './payslip/payslip.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AddPositionComponent } from './add-position/add-position.component';
import { ManagePositionComponent } from './manage-position/manage-position.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PosComponent } from './pos/pos.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDataComponent } from './transaction-data/transaction-data.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import { SamplePosComponent } from './sample-pos/sample-pos.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
const appRoute: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'Home', component: HomepageComponent},
  {path: 'Sales', component: SalesReportComponent},
  {path: 'Transactions', component: TransactionListComponent},
  {path: 'POS', component: PosComponent}
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
    PayslipComponent,
    AddPositionComponent,
    ManagePositionComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    PosComponent,
    SidebarComponent,
    NavbarComponent,
    InvoiceDialogComponent,
    SalesReportComponent,
    SalesDataComponent,
    TransactionListComponent,
    TransactionDataComponent,
    PayslipComponent,
    NavbarComponent,
    SidebarComponent,
    TestingComponent,
    ProductAddEditComponent,
    CategoryAddEditComponent,
    CategoryListComponent,
    SamplePosComponent,
    ManageOrderComponent,
    AddPositionComponent,
    ManagePositionComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    DatePipe,
    MatSnackBarModule

  ],
  providers: [DatePipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
