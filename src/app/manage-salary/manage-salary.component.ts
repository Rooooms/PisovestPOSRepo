import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { PayslipComponent } from '../payslip/payslip.component';
import { SalaryService } from '../services/salary.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent implements OnInit{

    constructor(
      public dialog: MatDialog, 
      private salaryService: SalaryService,
      private datePipe: DatePipe,
      ){}

      dataName = [
        {name: 'id', label: 'Position'},
        {name: 'employeeName', label: 'Name'},
        {name: 'position', label: 'Position'},
        {name: 'salaries', label: 'Salary', type: 'number'},
        {name: 'deduction', label: 'Deduction', type: 'number'},
        {name: 'totalSalary', label: 'Total Salary', type: 'number'},
        {name: 'dateGiven', label: 'Paid Date'},
      ]

  dataSource!: MatTableDataSource<any>;

  getColumns(){
    return [ 'dateGiven','employeeName','position', 'salaries', 'deduction', 'totalSalary', 'payslip', 'actions'];
  }

    ngOnInit(): void {
      this.getAllSalary();
    }
  
    openDialog() {
      const dialogRef = this.dialog.open(AddSalaryComponent);
      dialogRef.afterClosed().subscribe({
        next : (val) => {
          if (val){
            this.getAllSalary();
          }
        }
      })
    }

    getAllSalary(){
      this.salaryService.getAllSalary().subscribe({
        next: (salary) => {
          this.salaryService.getAllSalary().subscribe({
            next: (salary) => {
              const formattedSalary = salary.map((s) => ({
                ...s,
                dateGiven: this.datePipe.transform(s.dateGiven, 'mediumDate'),
              }));
              this.dataSource = new MatTableDataSource(formattedSalary);
            },
            error: console.log,
          });
        },
         error: console.log,
      });
    }

    deleteSalary(id: string ){
      console.log(id);
      this.salaryService.deleteSalary(id).subscribe({
        next: (salary) =>{
          this.getAllSalary();
        },
        error: console.log,
      });
}

  openDialogPayslip(){
    const dialogRef = this.dialog.open(PayslipComponent);
  }


  // onPageChange(event) {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   const endIndex = startIndex + event.pageSize;
  //   this.salary = this.getData(startIndex, endIndex);
  // }
  
  // getData(startIndex: number, endIndex: number) {
  //   return this.salary.slice(startIndex, endIndex);
  // }
}
