import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertdeleteComponent } from './alertdelete.component';

describe('AlertdeleteComponent', () => {
  let component: AlertdeleteComponent;
  let fixture: ComponentFixture<AlertdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
