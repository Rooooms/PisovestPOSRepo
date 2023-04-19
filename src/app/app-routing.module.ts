import { HomepageComponent } from './homepage/homepage.component';
import { POSComponent } from './pos/pos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'POS',
    component: POSComponent, //name: 'POS',
  },

  {
    path: 'Sales Report',
    component: POSComponent, //name: 'Sales Report'
  },

  {
    path: 'Product List',
    component: POSComponent, //name: 'Product List',
  },

  {
    path: 'Transactions',
    component: POSComponent, //name: 'Transactions',
  },

  {
    path: 'Employee Management',
    component: POSComponent, //name: 'Employee Management',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
