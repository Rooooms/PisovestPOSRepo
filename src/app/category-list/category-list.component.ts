import { Component } from '@angular/core';

export interface PeriodicElement {
  category: string;
  id: number;
  description: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, category: 'Fashion', description: 'lorem ipsum', action: 'n/a'},
  {id: 2, category: 'Accesories', description: 'lorem ipsum', action: 'n/a'},
  {id: 3, category: 'Sports', description: 'lorem ipsum', action: 'n/a'},
  {id: 4, category: 'Home Tools', description: 'lorem ipsum', action: 'n/a'},
  {id: 5, category: 'Appliances', description: 'lorem ipsum', action: 'n/a'},
  {id: 6, category: 'Collectibles', description: 'lorem ipsum', action: 'n/a'},
  {id: 7, category: 'Furniture', description: 'lorem ipsum', action: 'n/a'},
  {id: 8, category: 'Bags', description: 'lorem ipsum', action: 'n/a'},
  {id: 9, category: 'Pet Supplies', description: 'lorem ipsum', action: 'n/a'},
  {id: 10, category: 'Audio', description: 'lorem ipsum', action: 'n/a'},
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['category', 'description', 'action'];
  
}
