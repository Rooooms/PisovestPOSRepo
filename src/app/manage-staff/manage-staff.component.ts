import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { Staff } from '../models/staff.model';
import { StaffServiceService } from '../services/staff-service.service';
import { EditStaffComponent } from '../edit-staff/edit-staff.component';
import { SampleComponent } from '../sample/sample.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})

export class ManageStaffComponent implements OnInit {
  constructor (
    public dialog: MatDialog, 
    private staffService: StaffServiceService,
    
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
  openDialogEdit() {
    this.dialog.open(EditStaffComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(SampleComponent);
  }

  ngOnInit(): void {
    this.getAllStaff();
  }

  getAllStaff(){
    this.staffService.getAllStaff().subscribe({
      next: (staff) => {
        this.dataSource = new MatTableDataSource(staff);
      },
       error: console.log,
    });
  }
  
}
  
