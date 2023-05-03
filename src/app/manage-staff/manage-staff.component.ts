import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { SharedService } from '../shared.service';
import { Staff } from '../models/staff.model';
import { StaffServiceService } from '../services/staff-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CoreService } from '../services/core.service';


@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})

export class ManageStaffComponent implements OnInit, OnDestroy {
  private staffSubscription :Subscription = new Subscription();
  constructor (
    public dialog: MatDialog, 
    private staffService: StaffServiceService,
    private datePipe: DatePipe,
    private coreService: CoreService,
    ){}
    

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


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

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  ngOnInit(): void {
    this.getAllStaff();
  }
  ngOnDestroy(): void {
    this.staffSubscription.unsubscribe();
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
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
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
            this.coreService.openSnackBar('Deleted Successfully');
            this.getAllStaff();
          },
          error: console.log,
        });
        
  }
}
