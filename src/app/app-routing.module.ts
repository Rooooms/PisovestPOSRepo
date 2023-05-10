<<<<<<< HEAD
import { HomepageComponent } from './homepage/homepage.component';
import { POSComponent } from './pos/pos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { combineLatest } from 'rxjs';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { SampleComponent } from './sample/sample.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { ManagePositionComponent } from './manage-position/manage-position.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { SamplePosComponent } from './sample-pos/sample-pos.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


const routes: Routes = [

{
  path: 'employee',
  component: EmployeeManagementComponent
},
{
  path: 'employee/manage-staff',
  component: ManageStaffComponent
},
{
  path: 'sample',
  component: SampleComponent
},
{
  path: 'employee/manage-salary',
  component: ManageSalaryComponent
},
{
  path: 'employee/manage-staff/position',
  component:ManagePositionComponent
},
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
>>>>>>> parent of d257cf2 (Merge branch 'SirPat' into Develop)

  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'POS',
    component: POSComponent, //name: 'POS',
  },

  {
    path: 'employee',
    component: EmployeeManagementComponent
  },

  {
    path: 'employee/manage-staff',
    component: ManageStaffComponent
  },

  {
    path: 'sample',
    component: SampleComponent
  },

  {
    path: 'employee/manage-salary',
    component: ManageSalaryComponent
  },

  {
    path: 'sales-report',
    component: SalesReportComponent, //name: 'Sales Report'
  },

  {
    path: 'product-list',
    component: ProductManagementComponent, //name: 'Product List',
  },

  {
    path: 'transactions',
    component: TransactionListComponent, //name: 'Transactions',
  },

  {
    path: 'employee',
    component: EmployeeManagementComponent
  },

  {
  path: 'product',
  component: ProductManagementComponent
  },

  {
  path: 'productlist',
  component: ProductListComponent
  },

  {
  path: 'categorylist',
  component: CategoryListComponent
  },

  {
    path: 'addcategory',
    component: CategoryAddEditComponent
  },

  {
    path: 'addproduct',
    component: ProductAddEditComponent
  },

  {
    path: 'employee/manage-staff',
    component: ManageStaffComponent
  },

  {
    path: 'employee/manage-salary',
    component: ManageSalaryComponent
  },

  {
    path: 'sample-pos',
    component: SamplePosComponent
  },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
