import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffServiceService } from '../services/staff-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../services/core.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit, OnDestroy{
  
  private aStaffSubscription: Subscription = new Subscription();
  addstaff: FormGroup;

  constructor(
    private staffService : StaffServiceService, 
    private _Staff : FormBuilder,
    private _dialogRef: MatDialogRef<AddStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService : CoreService,
  ) {
    this.addstaff = this._Staff.group({
      id : '',
      employeeName: ['', Validators.required],
      employeeEmail: ['', Validators.email],
      employeeMobileNumber: new FormControl('', [Validators.required, Validators.pattern('^(09|\\+639)\\d{9}$')]),
      employeeExpectedSalary: null,
      birthday : '',
      datejoined: '',
      employeePosition: ['', Validators.required],
      employeeAddress: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.addstaff.patchValue(this.data);
    if (this.data?.datejoined) {
      this.addstaff.controls['birthday'].setValue(new Date(this.data.birthday));
      this.addstaff.controls['datejoined'].setValue(new Date(this.data.datejoined));
    }
  }
    ngOnDestroy(): void {
        this.aStaffSubscription.unsubscribe();
    }

  onFormSubmit(){
    
    if (this.addstaff.valid){
      if (this.data){
        
        this.staffService.updateStaff(this.data.id, this.addstaff.value).subscribe({
          next: (val: any) =>{
            this.coreService.openSnackBar('Updated Successfully');
            this._dialogRef.close(true);      
          },
          error: (err: any) =>{
            console.error(err);
          },
        });
      }else{
        this.staffService.addStaff(this.addstaff.value).subscribe({
          next:(val: any) => {
            this.coreService.openSnackBar('Added Successfully');
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
      placeholder: 'MM/DD/YYYY',
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
    placeholder: 'MM/DD/YYYY',
    type: 'date',
    name: 'datejoined',
    id: 'datejoined',
    hold: 'Date Joined'
  }
  
  
    ];


  }
  
