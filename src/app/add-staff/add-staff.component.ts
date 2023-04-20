import { Component } from '@angular/core';



@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {

  Staff = [
{
  placeholder: 'ex. Juan Dela Cruz ',
  type: 'text',
  name: 'Full Name',
},
{
  placeholder: 'ex. @example.com',
  type: 'email',
  name: 'Email',
},
{
  placeholder: '09XXXXXXXXX',
  type: 'text',
  name: 'Mobile Phone',
},
{
  placeholder: 'XXXXXX',
  type: 'int',
  name: 'Salary',
},
{
  placeholder: 'ex. Manager',
  type: 'text',
  name: 'Position',
},
{
  placeholder: 'ex. 2/F Bachrach Bldg. II Corner 23rd and, Railroad Dr, Port Area, Manila, 1000 Metro Manila',
  type: 'text',
  name: 'Address',
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
  onSubmit(){}
}
