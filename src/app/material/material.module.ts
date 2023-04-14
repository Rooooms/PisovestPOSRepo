import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  FormsModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
