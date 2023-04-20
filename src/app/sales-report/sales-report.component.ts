import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent {
  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Sales Report';
    this.pageTitle = 'Sales Report';

}
}
