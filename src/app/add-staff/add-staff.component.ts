import { Component, OnInit } from '@angular/core';
import { Staff } from '../models/staff.model';
import { StaffServiceService } from '../services/staff-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit{

  addStaffRequest : Staff = {
    id : 0,
    employeeName: '',
    employeeEmail: '',
    employeeMobileNumber: '',
    employeeExpectedSalary: 0,
    birthday : '2023-04-19T00:00:00.00',
    datejoined: '2023-04-19T00:00:00.0000',
    employeePosition: '',
    employeeAddress: '',
  }

  constructor(private staffService : StaffServiceService, private router : Router) {}
  
  ngOnInit(): void {
      
  }

  addStaff(): void{
    this.staffService.addStaff(this.addStaffRequest).subscribe({
      next : (staff) => {
        this.router.navigate(['employee/manage-staff'])
      }
    })
  }

  Staff = [
  
{
  placeholder: 'ex. Juan Dela Cruz ',
  type: 'text',
  name: 'employeeName',
  id: 'employeeName',
  hold: 'Name'
  
},
{
  placeholder: 'ex. @example.com',
  type: 'email',
  name: 'employeeEmail',
  id: 'employeeEmail',
  hold: 'Email'
},
{
  placeholder: '09XXXXXXXXX',
  type: 'text',
  name: 'employeeMobileNumber',
  id: 'employeeMobileNumber',
  hold: 'Mobile Number'
},
{
  placeholder: 'XXXXXX',
  type: 'number',
  name: 'employeeExpectedSalary',
  id: 'employeeExpectedSalary',
  hold: 'Expected Salary'
},
{
  placeholder: 'Birthday',
  type: 'date',
  name: 'birthday',
  id: 'birthday',
  hold: 'Birthday'
},
{
  placeholder: 'ex. Manager',
  type: 'text',
  name: 'employeePosition',
  id: 'employeePosition',
  hold: 'Position'
},
{
  placeholder: 'ex. 2/F Bachrach Bldg. II Corner 23rd and, Railroad Dr, Port Area, Manila, 1000 Metro Manila',
  type: 'text',
  name: 'employeeAddress',
  id: 'employeeAddress',
  hold: 'Address'
},

{
  placeholder: 'Date Joined',
  type: 'date',
  name: 'datejoined',
  id: 'datejoined',
  hold: 'Date Joined'
}


  ];
  formData = {};
  onSubmit(){}
}
