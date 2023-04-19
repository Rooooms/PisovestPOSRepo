import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component'; 
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';

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
  path: 'addNewCategory',
  component: AddCategoryComponent
  },
   {
  path: 'categorylist',
  component: CategoryListComponent
  },
  {
    path: 'addcategory',
    component: AddCategoryComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
