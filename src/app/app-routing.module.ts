import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component'; 
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  
  {
  path: 'product',
  component: ProductManagementComponent
  },
   {
  path: 'productList',
  component: ProductListComponent
  },
  {
  path: 'addNewCategory',
  component: AddCategoryComponent
  },
   {
  path: 'categorylist',
  component: CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
