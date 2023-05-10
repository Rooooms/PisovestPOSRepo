import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffServiceService } from '../services/staff-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../services/core.service';
import { Subscription } from 'rxjs';
import { PositionService } from '../services/position.service';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit, OnDestroy{
  
  private aStaffSubscription: Subscription = new Subscription();
  addstaff: FormGroup;
  position = [];

  constructor(
    private staffService : StaffServiceService, 
    private _Staff : FormBuilder,
    private _dialogRef: MatDialogRef<AddStaffComponent>,
    private positionService: PositionService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService : CoreService,
  ) {
    this.addstaff = this._Staff.group({
      id : '',
      employeeName: ['', Validators.required],
      employeeEmail: ['', Validators.email],
      employeeMobileNumber: new FormControl('', [Validators.required, Validators.pattern('^(09|\\+639)\\d{9}$')]),
      birthday : '',
      datejoined: '',
      positionName: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      positionId: [''],
    })
  }

  ngOnInit(): void {
    this.addstaff.patchValue(this.data);
    this.positionService.getAllPosition().subscribe((position: any) => {
      this.position = position.map((position: any) => position.positionName);
      });

      const fixDate = (date: Date) => {
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return date;
      };
      
      if (this.data?.datejoined) {
        this.addstaff.controls['birthday'].setValue(fixDate(new Date(this.data.birthday)));
        this.addstaff.controls['datejoined'].setValue(fixDate(new Date(this.data.datejoined)));
      }
  }

  ngOnDestroy(): void {
    this.aStaffSubscription.unsubscribe();
  }

    onFormSubmit(){
    
      if (this.addstaff.valid){
        if (this.addstaff.valid) {
          // Adjust the birthday and datejoined fields by adding one day
          const birthday = new Date(this.addstaff.value.birthday);
          birthday.setDate(birthday.getDate() + 1);
          const datejoined = new Date(this.addstaff.value.datejoined);
          datejoined.setDate(datejoined.getDate() + 1);
      
          // Set the adjusted values back into the form
          this.addstaff.patchValue({ birthday, datejoined });
        }

        if (this.data){
          this.staffService.updateStaff(this.data.id, this.addstaff.value).subscribe({
            next: (val: any) =>{
              console.log(val)
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
              console.log(val)
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
      placeholder: 'MM/DD/YYYY',
      type: 'date',
      name: 'datejoined',
      id: 'datejoined',
      hold: 'Date Joined'
    },
    {
      placeholder: 'ex. Manager',
      type: 'text',
      name: 'positionName',
      id: 'positionName',
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
    name: 'birthday',
    id: 'birthday',
    hold: 'Birthday'
  },
  
  
    ];
  }
  