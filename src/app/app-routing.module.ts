import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { combineLatest } from 'rxjs';
import { AddStaffComponent } from './add-staff/add-staff.component';

const routes: Routes = [

{
  path: 'employee',
  component: EmployeeManagementComponent
},
{
  path: 'add-staff',
  component: AddStaffComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
