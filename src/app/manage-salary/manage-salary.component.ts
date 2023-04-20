import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { EditSalaryComponent } from '../edit-salary/edit-salary.component';
import { PayslipComponent } from '../payslip/payslip.component';
export interface TableData{
  id: number;
  name: string;
  age: number;
  email: string;
}
@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent {

  data = [
    {
       position: 'Doe', fullName: 'John',  salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John', salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John',  salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John',  salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John',  salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John',  salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John', salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
    {
       position: 'Doe', fullName: 'John', salary:'4553' ,deduction: '500' , totalSalary:'4053', paidDate:'10/07/19', 
    },
      ];
  
      
      dataName = [
        {name: 'position', label: 'Position'},
        {name: 'fullName', label: 'Full Name'},
        {name: 'salary', label: 'Salary'},
        {name: 'deduction', label: 'Deduction'},
        {name: 'totalSalary', label: 'Total Salary'},
        {name: 'paidDate', label: 'Paid Date'},
      ]
      
  getColumns(){
    return ['position', 'fullName', 'salary', 'deduction', 'totalSalary', 'paidDate', 'payslip', 'actions'];
  }
  
  constructor(public dialog: MatDialog){}
  
  openDialog() {
    this.dialog.open(AddSalaryComponent);
  }
  openDialogEdit(): void {
    this.dialog.open(EditSalaryComponent);
  }
  openDialogAlertDelete(){
    this.dialog.open(EditSalaryComponent);
  }
  openDialogPayslip(){
    const dialogRef = this.dialog.open(PayslipComponent, {
      width: '40%',
      height: '40%',

    });
  }
  onPageChange(event) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.data = this.getData(startIndex, endIndex);
  }
  
  getData(startIndex: number, endIndex: number) {
    return this.data.slice(startIndex, endIndex);
  }
}
