import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { combineLatest } from 'rxjs';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [

{
  path: 'employee',
  component: EmployeeManagementComponent
},
{
  path: 'employee/add-staff',
  component: AddStaffComponent
},
// {
//   path: 'employee/edit-staff',
//   component: EditStaffComponent
// },
{
  path: 'employee/manage-staff',
  component: ManageStaffComponent
},
{
  path: 'sample',
  component: SampleComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
