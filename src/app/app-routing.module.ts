import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component'; 

const routes: Routes = [

  {
  path: '',
  component:ProductManagementComponent
  },
  {
  path: 'product',
  component: ProductManagementComponent
  },
  {
  path: 'productList',
  component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
