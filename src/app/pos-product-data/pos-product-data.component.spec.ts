import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosProductDataComponent } from './pos-product-data.component';

describe('PosProductDataComponent', () => {
  let component: PosProductDataComponent;
  let fixture: ComponentFixture<PosProductDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosProductDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
