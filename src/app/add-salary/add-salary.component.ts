import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaryService } from '../services/salary.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffServiceService } from '../services/staff-service.service';
import { CoreService } from '../services/core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})

export class AddSalaryComponent implements OnInit, OnDestroy {

  private aSalarySubscription: Subscription = new Subscription();

  addsalary: FormGroup;
  employeeNames = [];

  
    
  constructor(
    private _dialogRef: MatDialogRef<AddSalaryComponent>, 
    private salaryService: SalaryService, 
    private nameService: StaffServiceService,
    private _Salary: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService : CoreService,
  ) 
  {
    this.addsalary = this._Salary.group({
      dateGiven: [{ value: this.getDate()}],
      positionName: '',
      employeeName: '',
      deduction: null,
    })
  }

  

  ngOnInit(): void {
    this.addsalary.patchValue(this.data);

    this.nameService.getAllStaff().subscribe((employeeNames: any) => {
      this.employeeNames = employeeNames.map((name:any) => name.employeeName);
    });
    
  }
  
  ngOnDestroy(): void {
      this.aSalarySubscription.unsubscribe();
  }
  onFormSubmit() {
    const currentDate = new Date();
    this.addsalary.patchValue({ dateGiven: currentDate });
    
    if (this.addsalary.valid) {
      this.salaryService.addSalary(this.addsalary.value).subscribe({
        next: (val: any) => {
          this.coreService.openSnackBar('Added Successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }

  

  getMinDate(): Date {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 7);
    return cutoffDate;
  }
  getDate(): Date {
    return new Date();
  }
  
  
   
  Salary = [
    {
      placeholder: '',
      type: 'date',
      name: 'dateGiven',
      id: 'dateGiven',
      hold: 'Date Given'
    },
    {
      placeholder: '',
      type: 'string',
      name: 'employeeName',
      id: 'employeeName',
      hold: 'Name',
    },
    {
      placeholder: '',
      type: 'number',
      name: 'deduction',
      id: 'deduction',
      hold: 'Deduction'
    },
  ];
}