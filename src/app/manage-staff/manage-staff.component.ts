import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})

export class ManageStaffComponent {

  data = [
{
  id: 1, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 2, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 3, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 4, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 4, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 4, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},
{
  id: 4, fullName: 'John', position: 'Doe', mobile:'09652344133' ,email: 'john@example.com' , birthday:'02/12/85', address:'Manila', dateJoined:'03/14/23', action: 'n/a'
},

  ];

  
  dataName = [
    {name: 'id', label: 'ID'},
    {name: 'fullName', label: 'Full Name'},
    {name: 'position', label: 'Position'},
    {name: 'mobile', label: 'Mobile Number'},
    {name: 'email', label: 'Email'},
    {name: 'birthday', label: 'Birthday'},
    {name: 'address', label: 'Address'},
    {name: 'dateJoined', label: 'Date Joined'},
  ]
  
getColumns(){
return ['fullName', 'position', 'mobile', 'email', 'birthday', 'address', 'dateJoined', 'actions'];
}

  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(AddStaffComponent, {
      width: '80%',
      height: '70%',

    });
  }
  openDialogEdit() {
    this.dialog.open(AddStaffComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(AddStaffComponent);
  }
  
}
  
