import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CoreService } from '../services/core.service';
import { PositionService } from '../services/position.service';
import { AddPositionComponent } from '../add-position/add-position.component';

@Component({
  selector: 'app-manage-position',
  templateUrl: './manage-position.component.html',
  styleUrls: ['./manage-position.component.css']
})
export class ManagePositionComponent implements OnInit, OnDestroy {
  private positionSubscription :Subscription = new Subscription();
  constructor (
    public dialog: MatDialog, 
    private positionService: PositionService,
    private datePipe: DatePipe,
    private coreService: CoreService,
    ){}
    

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


  dataName = [
    {name: 'id', label: 'ID'},
    {name: 'positionName', label: 'Position'},
    {name: 'expectedSalary', label: 'Expected Salary'},
  ]
  dataSource!: MatTableDataSource<any>;
getColumns(){
return ['positionName','expectedSalary', 'actions'];
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  ngOnInit(): void {
    this.getAllPosition();
  }
  ngOnDestroy(): void {
    this.positionSubscription.unsubscribe();
}

  openDialog() {
    const dialogRef = this.dialog.open(AddPositionComponent);
    dialogRef.afterClosed().subscribe({
      next : (val) => {
        if (val){
          this.getAllPosition();
        }
      }
    })
  }
  openDialogEdit(data: any) {
    const dialogRef = this.dialog.open(AddPositionComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (position) => {
        if (position){
          this.getAllPosition();
        }
      },
    });
  }
  
  
  getAllPosition(){
    this.positionService.getAllPosition().subscribe({
      next: (position) => {
        this.positionService.getAllPosition().subscribe({
          next: (position) => {
            const formattedPosition = position.map((s) => ({
              ...s,
              birthday: this.datePipe.transform(s.birthday, 'mediumDate'),
              datejoined: this.datePipe.transform(s.datejoined, 'mediumDate'),
              
            }));
            this.dataSource = new MatTableDataSource(formattedPosition);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          },
          
          error: console.log,
        });
      },
       error: console.log,
    });
  }

  deletePosition(id: string ){
        this.positionService.deletePosition(id).subscribe({
          next: (position) =>{
            this.coreService.openSnackBar('Deleted Successfully');
            this.getAllPosition();
          },
          error: console.log,
        });
        
  }


}