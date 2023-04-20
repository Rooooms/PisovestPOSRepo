import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { EditSalaryComponent } from '../edit-salary/edit-salary.component';
import { PayslipComponent } from '../payslip/payslip.component';
import { Salary } from '../models/salary.model';
import { SalaryService } from '../services/salary.service';
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
export class ManageSalaryComponent implements OnInit{

 
  
      
      dataName = [
        {name: 'id', label: 'Position'},
        {name: 'employeeName', label: 'Name'},
        {name: 'salaries', label: 'Salary'},
        {name: 'deduction', label: 'Deduction'},
        {name: 'totalSalary', label: 'Total Salary'},
        {name: 'dateGiven', label: 'Paid Date'},
      ]
      
  getColumns(){
    return [ 'dateGiven','employeeName', 'salaries', 'deduction', 'totalSalary', 'payslip', 'actions'];
  }

    salary : Salary[] = [];
  
  constructor(public dialog: MatDialog, private salaryService: SalaryService){}
  
  
  ngOnInit(): void {
    this.salaryService.getAllSalary().subscribe({
      next :(salary) => {
        this.salary = salary;
      },
      error: (response) =>{
        console.log(response)
      }
    });
  }
  
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
    this.salary = this.getData(startIndex, endIndex);
  }
  
  getData(startIndex: number, endIndex: number) {
    return this.salary.slice(startIndex, endIndex);
  }
}
