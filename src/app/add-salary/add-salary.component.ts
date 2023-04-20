import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salary } from '../models/salary.model';
import { SalaryService } from '../services/salary.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})


export class AddSalaryComponent implements OnInit {
  Salary = [
    {
      type: 'text',
      name: 'Position',
      
    },
    {
      type: 'text',
      name: 'Name',
    },
    {
      type: 'int',
      name: 'Salary',
    },
    {
      type: 'int',
      name: 'Deduction',
    },
    {
      type: 'int',
      name: 'Total Salary',
    },
  ];

    addSalaryRequest : Salary = {
      id: '',
      dateGiven:'0000-00-00T00:00:00.0000',
      salaries: 0,
      deduction: 0,
      totalSalary: 0,
      employeeName: ''
      
    }
    
    constructor(private dialog: MatDialog, private salaryService : SalaryService, private router
      : Router) {}
  ngOnInit(): void {
    
  }
  addSalary(): void{
    this.salaryService.addSalary(this.addSalaryRequest).subscribe({
      next : (salary) =>{
        this.router.navigate(['employee/manage-salary'])
      }
    })
  }
      
      formData = {};
      onSubmit(){}
      // option = [
      //   { value: 'option1', label: 'Clothes' },
      //   { value: 'option2', label: 'Shoes' },
      //   { value: 'option3', label: 'Keyboard' }
      // ];
      // name = [
      //   { value: 'option1', label: 'Edward' },
      //   { value: 'option2', label: 'Kyle' },
      //   { value: 'option3', label: 'Roms' }
      // ];

      option = [ {value : 'Intern', employee:[ 'Roms', 'Kyle', 'Yee' ] }, 
                 {value : 'Manager,' ,  employee :['Edward']}
    ]; 

      
  

    }
    
