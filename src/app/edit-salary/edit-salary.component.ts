import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

      option = [
        { value: 'option1', label: 'Clothes' },
        { value: 'option2', label: 'Shoes' },
        { value: 'option3', label: 'Keyboard' }
      ];
      constructor(private dialog: MatDialog) { 
        
      }
    }
    
