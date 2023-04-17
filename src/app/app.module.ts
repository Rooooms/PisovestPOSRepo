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
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import {MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SampleComponent } from './sample/sample.component';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementComponent,
    AddStaffComponent,
    SidebarComponent,
    NavbarComponent,
    EditStaffComponent,
    ManageStaffComponent,
    SampleComponent,
    ManageSalaryComponent,
    AddSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }