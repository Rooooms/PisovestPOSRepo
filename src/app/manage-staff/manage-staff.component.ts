import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { SharedService } from '../shared.service';
import { Staff } from '../models/staff.model';
import { StaffServiceService } from '../services/staff-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';


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


  constructor (
    public dialog: MatDialog, 
    private staffService: StaffServiceService,
    private datePipe: DatePipe,
    private sharedService: SharedService
    ){}

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

  dataSource!: MatTableDataSource<any>;
getColumns(){
return ['employeeName', 'employeePosition', 'employeeMobileNumber', 'employeeEmail', 'birthday', 'employeeAddress', 'datejoined', 'employeeExpectedSalary', 'actions'];
}
  ngOnInit(): void {
    this.getAllStaff();
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddStaffComponent);
    dialogRef.afterClosed().subscribe({
      next : (val) => {
        if (val){
          this.getAllStaff();
        }
      }
    })
  }
  openDialogEdit(data: any) {
    const dialogRef = this.dialog.open(AddStaffComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (staff) => {
        if (staff){
          this.getAllStaff();
        }
      },
    });
  }
  
  
  getAllStaff(){
    this.staffService.getAllStaff().subscribe({
      next: (staff) => {
        this.staffService.getAllStaff().subscribe({
          next: (staff) => {
            const formattedStaff = staff.map((s) => ({
              ...s,
              birthday: this.datePipe.transform(s.birthday, 'mediumDate'),
              datejoined: this.datePipe.transform(s.datejoined, 'mediumDate'),
            }));
            this.dataSource = new MatTableDataSource(formattedStaff);
          },
          error: console.log,
        });
      },
       error: console.log,
    });
  }

  deleteStaff(id: string ){
        this.staffService.deleteStaff(id).subscribe({
          next: (staff) =>{
            this.getAllStaff();
          },
          error: console.log,
        });
        
  }
  
}
