import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.css']
})
export class EditSalaryComponent {
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
      formData = {};
      onSubmit(){}
    }
    
