import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { SharedService } from '../shared.service';
import { Staff } from '../models/staff.model';
import { StaffServiceService } from '../services/staff-service.service';
import { EditStaffComponent } from '../edit-staff/edit-staff.component';


@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})

export class ManageStaffComponent implements OnInit {

  public pageTitle: string;

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
    {name: 'employeeName', label: 'Full Name'},
    {name: 'employeePosition', label: 'Position'},
    {name: 'employeeMobileNumber', label: 'Mobile Number'},
    {name: 'employeeEmail', label: 'Email'},
    {name: 'birthday', label: 'Birthday'},
    {name: 'employeeAddress', label: 'Address'},
    {name: 'datejoined', label: 'Date Joined'},
    {name: 'employeeExpectedSalary', label: 'Expected Salary'},
  ]

getColumns(){
return ['employeeName', 'employeePosition', 'employeeMobileNumber', 'employeeEmail', 'birthday', 'employeeAddress', 'datejoined', 'employeeExpectedSalary', 'actions'];
}

  staff : Staff[] = [];
  // constructor (private staffService : StaffServiceService) {}

  constructor (public dialog: MatDialog, private staffService: StaffServiceService, private sharedService: SharedService){}
  openDialog() {
    const dialogRef = this.dialog.open(AddStaffComponent, {
      width: '40%',
      height: '50%',

    });
  }
  openDialogEdit() {
    this.dialog.open(EditStaffComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(AddStaffComponent);
  }

  ngOnInit(): void {
    
      this.staffService.getAllStaff().subscribe({
        next : (staff) => {
          this.staff = staff;
        },
        error: (response) => {
          console.log(response)
        }
      });

    this.sharedService.pageName = 'Manage Staff';
    this.pageTitle = 'Manage Staff';
  }
  
}

