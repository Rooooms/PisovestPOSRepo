import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalaryService } from '../services/salary.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit, OnDestroy{
  private payslipSubscription :Subscription = new Subscription();
  constructor(
    private salaryService: SalaryService
    ){}
 


  ngOnInit(): void {
    this.getAllSalary();
  }
 
 ngOnDestroy(): void {
    this.payslipSubscription.unsubscribe
  }
   getAllSalary() {
    this.salaryService.getAllSalary().subscribe({
      next: (salary) => {
        console.log(salary)
      }
    })
  }

  
}
