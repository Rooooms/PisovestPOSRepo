import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { PayslipComponent } from '../payslip/payslip.component';
import { SalaryService } from '../services/salary.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CoreService } from '../services/core.service';


@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent implements OnInit, OnDestroy{

  private salarySubscription: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(
      public dialog: MatDialog, 
      private salaryService: SalaryService,
      private datePipe: DatePipe,
      private coreService : CoreService
      ){}

      dataName = [
        {name: 'id', label: 'Position'},
        {name: 'employeeName', label: 'Name'},
        {name: 'positionName', label: 'Position'},
        {name: 'salaries', label: 'Salary', type: 'number'},
        {name: 'deduction', label: 'Deduction', type: 'number'},
        {name: 'totalSalary', label: 'Total Salary', type: 'number'},
        {name: 'dateGiven', label: 'Paid Date'},
      ]

  dataSource!: MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColumns(){
    return [ 'dateGiven','employeeName','positionName', 'salaries', 'deduction', 'totalSalary', 'payslip', 'actions'];
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
    ngOnDestroy(): void {
        this.salarySubscription.unsubscribe();
    }

    getAllSalary(){
      this.salarySubscription = this.salaryService.getAllSalary().subscribe({
        next: (salary) => {
          this.salaryService.getAllSalary().subscribe({
            next: (salary) => {
              const formattedSalary = salary.map((s) => ({
                ...s,
                dateGiven: this.datePipe.transform(s.dateGiven, 'mediumDate'),
              }));
              this.dataSource = new MatTableDataSource(formattedSalary);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
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
          this.coreService.openSnackBar('Deleted Successfully');
          this.getAllSalary();
        },
        error: console.log,
      });
}

  openDialogPayslip(){
    const dialogRef = this.dialog.open(PayslipComponent);
  }

}
