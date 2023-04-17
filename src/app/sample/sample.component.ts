import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  data = [  { id: 1, CategoryName: 'Category 1', Description: 'Description 1' },  
            { id: 2, CategoryName: 'Category 2', Description: 'Description 2' },  
            { id: 3, CategoryName: 'Category 3', Description: 'Description 3' }];

dataName = [  { name: 'id', label: 'ID' },  
              { name: 'CategoryName', label: 'Category Name' },  
              { name: 'Description', label: 'Description' }];

getColumns() {
  return ['id', 'CategoryName', 'Description', 'actions'];
}

}
