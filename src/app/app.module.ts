import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { MatListModule } from '@angular/material/list';
import { SampleComponent } from './sample/sample.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductManagementComponent,
    AddCategoryComponent,
    CategoryListComponent,
    NavbarComponent,
    SidebarComponent,
    AddProductComponent,
    SampleComponent,
    EditCategoryComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }