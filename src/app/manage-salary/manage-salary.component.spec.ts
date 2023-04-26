import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/manage-salary/manage-salary.component.spec.ts
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
========
import { ProductAddEditComponent } from './product-add-edit.component';

describe('ProductAddEditComponent', () => {
  let component: ProductAddEditComponent;
  let fixture: ComponentFixture<ProductAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddEditComponent);
>>>>>>>> SirEdward:src/app/product-add-edit/product-add-edit.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
