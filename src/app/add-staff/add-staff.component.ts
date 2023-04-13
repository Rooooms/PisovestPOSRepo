import { Component } from '@angular/core';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {

  Staff = [
{
  placeholder: 'Full Name',
  type: 'text',
  name: 'Full Name',
},
{
  placeholder: 'Email',
  type: 'email',
  name: 'Email',
},
{
  placeholder: 'Mobile Phone',
  type: 'text',
  name: 'Mobile Phone',
},
{
  placeholder: 'Salary',
  type: 'int',
  name: 'Salary',
},
{
  placeholder: 'Position',
  type: 'text',
  name: 'Position',
},
{
  placeholder: 'Birthday',
  type: 'date',
  name: 'Birthday',
},
{
  placeholder: 'Date Joined',
  type: 'date',
  name: 'Date Joined',
}


  ];
  formData = {};
}
