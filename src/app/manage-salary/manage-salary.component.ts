import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { EditSalaryComponent } from '../edit-salary/edit-salary.component';
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
  
      
      dataName = [
        {name: 'fullName', label: 'Full Name'},
        {name: 'position', label: 'Position'},
        {name: 'salary', label: 'Salary'},
        {name: 'deduction', label: 'Deduction'},
        {name: 'totalSalary', label: 'Total Salary'},
        {name: 'paidDate', label: 'Paid Date'},
        {name: 'invoice', label: 'Invoice'},
      ]
      
  getColumns(){
    return ['fullName', 'position', 'salary', 'deduction', 'totalSalary', 'paidDate', 'invoice', 'actions'];
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
  onPageChange(event) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.data = this.getData(startIndex, endIndex);
  }
  
  getData(startIndex: number, endIndex: number) {
    return this.data.slice(startIndex, endIndex);
  }
}
