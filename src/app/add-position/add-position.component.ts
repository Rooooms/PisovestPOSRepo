import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../services/core.service';
import { Subscription } from 'rxjs';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit, OnDestroy{

  
  private aPositionSubscription: Subscription = new Subscription();
  addposition: FormGroup;

  constructor(
    private positionService : PositionService, 
    private _Position : FormBuilder,
    private _dialogRef: MatDialogRef<AddPositionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService : CoreService,
  ) {
    this.addposition = this._Position.group({
      id : '',
      positionName: ['', Validators.required],
      expectedSalary: null,
    })
  }

  ngOnInit(): void {
    this.addposition.patchValue(this.data);
  }

    ngOnDestroy(): void {
        this.aPositionSubscription.unsubscribe();
    }

  onFormSubmit(){
    
    if (this.addposition.valid){
      if (this.data){
        
        this.positionService.updatePosition(this.data.id, this.addposition.value).subscribe({
          next: (val: any) =>{
            this.coreService.openSnackBar('Updated Successfully');
            this._dialogRef.close(true);      
          },
          error: (err: any) =>{
            console.error(err);
          },
        });
      }else{
        this.positionService.addPosition(this.addposition.value).subscribe({
          next:(val: any) => {
            this.coreService.openSnackBar('Added Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) =>{
            console.error(err);
          },
        });
      }
    }
  }


  Position = [
    {
      placeholder: 'ex. Intern',
      type: 'text',
      name: 'positionName',
      id: 'positionName',
      hold: 'Position'
    },
    {
      placeholder: 'XXXXXX',
      type: 'number',
      name: 'expectedSalary',
      id: 'expectedSalary',
      hold: 'Expected Salary'
    },
    ];


  }