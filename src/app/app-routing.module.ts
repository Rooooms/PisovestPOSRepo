import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component'; 
import { CategoryListComponent } from './category-list/category-list.component';
import { AppComponent } from './app.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';

const routes: Routes = [

  
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
