import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent {

  data = [
    {
      id: 1, fullName: 'John', position: 'Doe', salary:'4553' ,deduction: '500' , totalSalary:'02/12/85', paidDate:'10/07/19', invoice:'n/a', action: 'n/a'
    },
    {
      id: 1, fullName: 'John', position: 'Doe', salary:'4553' ,deduction: '500' , totalSalary:'02/12/85', paidDate:'10/07/19', invoice:'n/a', action: 'n/a'
    },
    {
      id: 1, fullName: 'John', position: 'Doe', salary:'4553' ,deduction: '500' , totalSalary:'02/12/85', paidDate:'10/07/19', invoice:'n/a', action: 'n/a'
    },
    {
      id: 1, fullName: 'John', position: 'Doe', salary:'4553' ,deduction: '500' , totalSalary:'02/12/85', paidDate:'10/07/19', invoice:'n/a', action: 'n/a'
    },
      ];
      i =0;
      
      dataName = [
        {label: 'ID'},
        {label: 'Full Name'},
        {label: 'Position'},
        {label: 'Salary'},
        {label: 'Deduction'},
        {label: 'Total Salary'},
        {label: 'Paid Date'},
        {label: 'Invoice'},
        {label: 'Action'},
      ]
      
  getColumns(){
    return ['id', 'fullName', 'position', 'mobile', 'email', 'birthday', 'address', 'dateJoined', 'action'];
  }

  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(AddSalaryComponent);
  }

  headStyles = [
    { 
      backgroundColor: '#f2f2f2', 
      color: '#000000', 
      border: '2px solid #000000',
      padding: '20px',
      fontSize: '20px',
      width: '90%',
      'margin':"10px",
      'height': '60px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      
    }
  ];


  bodyStyles = [
    { 
    backgroundColor: '#f8f7ff', 
    color: '#black', 
    border: '1px solid #000000',
    'padding': '20px',
    'font-size': '20px',
    'margin': '10px',
    'width': '90%',
    'display':'column',
    'column-gap': '20px',
    
  }
  ]
  

}
