import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffServiceService } from '../services/staff-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit{

 
  addstaff: FormGroup;

  constructor(
    private staffService : StaffServiceService, 
    private _Staff : FormBuilder,
    private _dialogRef: MatDialogRef<AddStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    ) {

  this.addstaff = this._Staff.group({
      id : '',
      employeeName: '',
      employeeEmail: '',
      employeeMobileNumber: '',
      employeeExpectedSalary: 0,
      birthday : '0000-00-00',
      datejoined: '0000-00-00',
      employeePosition: '',
      employeeAddress: '',
  })
  }
    ngOnInit(): void {
        this.addstaff.patchValue(this.data);
    }

  onFormSubmit(){
    if (this.addstaff.valid){
      if (this.data){
        this.staffService
        .updateStaff(this.data.id, this.addstaff.value)
        .subscribe({
          next: (val: any) =>{
                this._dialogRef.close(true);      
          },
          error: (err: any) =>{
            console.error(err);
          },
        });
      }else{
        this.staffService.addStaff(this.addstaff.value).subscribe({
          next:(val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) =>{
            console.error(err);
          },
        });
      }
    }
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
    placeholder: '00/00/0000',
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
    placeholder: '00/00/0000',
    type: 'date',
    name: 'datejoined',
    id: 'datejoined',
    hold: 'Date Joined'
  }
  
  
    ];


  }
  
