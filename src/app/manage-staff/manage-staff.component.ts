
import { Component } from '@angular/core';
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

  
  dataName = [
    {label: 'Id'},
    {label: 'Full Name'},
    {label: 'Mobile Number'},
    {label: 'Email'},
    {label: 'Birthday'},
    {label: 'Address'},
    {label: 'Date Joined'},
    {label: 'Action'},
  ]

}
  