import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent {

  data = [
{
  id: 1, CategoryName: 'Clothes', Description: 'Lorem Ipsum', action: 'n/a'
},
{
  id: 2, CategoryName: 'Shoes', Description: 'Lorem Ipsum', action: 'n/a'
},
{
  id: 3, CategoryName: 'Mouse', Description: 'Lorem Ipsum', action: 'n/a'
},
{
  id: 4, CategoryName: 'Accesories', Description: 'Lorem Ipsum', action: 'n/a'
},
  ];

  
  dataName = [
    {label: 'Id'},
    {label: 'Category Name'},
    {label: 'Description'},
    {label: 'Action'},

    

  ]

}

