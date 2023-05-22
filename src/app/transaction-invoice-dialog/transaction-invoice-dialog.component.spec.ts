import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInvoiceDialogComponent } from './transaction-invoice-dialog.component';

describe('TransactionInvoiceDialogComponent', () => {
  let component: TransactionInvoiceDialogComponent;
  let fixture: ComponentFixture<TransactionInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionInvoiceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
