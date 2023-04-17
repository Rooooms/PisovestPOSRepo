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
  ];
  i =0;
  
  dataName = [
    {label: 'Id'},
    {label: 'Full Name'},
    {label: 'Position'},
    {label: 'Mobile Number'},
    {label: 'Email'},
    {label: 'Birthday'},
    {label: 'Address'},
    {label: 'Date Joined'},
    {label: 'Action'},
  ]
  // dataName =[
  //   {
  //     name: 'id', label:'ID'
  //   },
  //   {
  //     name: 'fullName', label:'Full Name'
  //   },
  //   {
  //     name: 'position', label:'Position'
  //   },
  //   {
  //     name: 'mobile', label:'Mobile Number'
  //   },
  //   {
  //     name: 'email', label:'Email'
  //   },
  //   {
  //     name: 'birthday', label:'Birthday'
  //   },
  //   {
  //     name: 'address', label:'Address'
  //   },
  //   {
  //     name: 'dateJoined', label:'Date join ed'
  //   },
  // ];


  getColumns(){
    return ['id', 'fullName', 'position', 'mobile', 'email', 'birthday', 'address', 'dateJoined', 'action'];
  }

  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(AddStaffComponent);
  }

  headStyles = [
    { 
      backgroundColor: '#f2f2f2', 
      color: '#000000', 
      border: '2px solid #000000',
      padding: '20px',
      fontSize: '20px',
      width: '90%',
      'margin':"10px",
      'height': '60px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      
    }
  ];


  bodyStyles = [
    { 
    backgroundColor: '#f8f7ff', 
    color: '#black', 
    border: '1px solid #000000',
    'padding': '20px',
    'font-size': '20px',
    'margin': '10px',
    'width': '90%',
    'display':'column',
    'column-gap': '20px',
    
  }
  ]
  
}
  
