import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaryService } from '../services/salary.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})


export class AddSalaryComponent implements OnInit {
  

  addsalary: FormGroup;
    
    constructor(
      private _dialogRef: MatDialogRef<AddSalaryComponent>, 
      private salaryService : SalaryService, 
      private _Salary: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: any,
      ) {
  
      this.addsalary = this._Salary.group({
        dateGiven: '0000-00-00',
        position: '',
        employeeName: '',
        deduction: 0,
    })
    }

  ngOnInit(): void {
    this.addsalary.patchValue(this.data);
  }

  onFormSubmit(){
    if (this.addsalary.valid){
      if (this.data){
        this.salaryService
          .updateSalary(this.data.id, this.addsalary.value).subscribe({
            next: (val: any) =>{
              this._dialogRef.close(true);      
              }, error: (err: any) =>{
                console.error(err);
              },
            });
          }else{
            this.salaryService.addSalary(this.addsalary.value).subscribe({
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
          hold: 'Name'
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
    
