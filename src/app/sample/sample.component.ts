import { Component } from '@angular/core';


export interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  tableData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' }
  ];
  data= {};
  
  tableStyles = [
    { backgroundColor: '#E3F2FD', color: '#1976D2', border: '1px solid #1976D2' },
    { backgroundColor: '#FFF8E1', color: '#FFC107', border: '1px solid #FFC107' },
    { backgroundColor: '#FCE4EC', color: '#E91E63', border: '1px solid #E91E63' }
  ];

  objectKeys = Object.keys;

  objectValue = Object.values;

  
}


