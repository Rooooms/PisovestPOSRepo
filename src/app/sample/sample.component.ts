import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
export interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  data = [  { id: 1, CategoryName: 'Category 1', Description: 'Description 1' },  
  { id: 2, CategoryName: 'Category 2', Description: 'Description 2' },  
  { id: 3, CategoryName: 'Category 3', Description: 'Description 3' }];

dataName = [  { name: 'id', label: 'ID' },  
    { name: 'CategoryName', label: 'Category Name' },  
    { name: 'Description', label: 'Description' }];

getColumns() {
return ['id', 'CategoryName', 'Description', 'actions'];
}

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddStaffComponent);
  }
  openDialogEdit() {
    this.dialog.open(AddStaffComponent);
  }

  

}

