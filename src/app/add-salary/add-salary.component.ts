import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})


export class AddSalaryComponent {
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

      constructor(private dialog: MatDialog) { 
        
      }
    }
    
