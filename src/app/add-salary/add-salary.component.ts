import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaryService } from '../services/salary.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffServiceService } from '../services/staff-service.service';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})

export class AddSalaryComponent implements OnInit {
  addsalary: FormGroup;
  employeeNames = [];

  
    
  constructor(
    private _dialogRef: MatDialogRef<AddSalaryComponent>, 
    private salaryService: SalaryService, 
    private nameService: StaffServiceService,
    private _Salary: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) 
  {
    this.addsalary = this._Salary.group({
      dateGiven: '0000-00-00',
      position: '',
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

  onFormSubmit() {
    if (this.addsalary.valid) {
      this.salaryService.addSalary(this.addsalary.value).subscribe({
        next: (val: any) => {
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
      placeholder: 'ex. Manager',
      type: 'string',
      name: 'position',
      id: 'position',
      hold: 'Position'
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
