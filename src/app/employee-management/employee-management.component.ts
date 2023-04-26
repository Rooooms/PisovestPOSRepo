import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})

export class EmployeeManagementComponent {
  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Employee Management';
    this.pageTitle = 'Employee Management';
}
}
