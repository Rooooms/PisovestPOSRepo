import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageSalaryComponent } from './manage-salary.component';

describe('ManageSalaryComponent', () => {
  let component: ManageSalaryComponent;
  let fixture: ComponentFixture<ManageSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSalaryComponent);
  })
})