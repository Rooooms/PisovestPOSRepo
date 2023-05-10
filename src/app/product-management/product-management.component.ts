import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  public pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName = 'Product Management';
    this.pageTitle = 'Product Management';
  }
}
