import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { PayslipComponent } from './payslip/payslip.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementComponent,
    AddStaffComponent,
    SidebarComponent,
    NavbarComponent,
    ManageStaffComponent,
    ManageSalaryComponent,
    AddSalaryComponent,
    SampleComponent,
    PayslipComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    DatePipe
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }