import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePosComponent } from './sample-pos.component';

describe('SamplePosComponent', () => {
  let component: SamplePosComponent;
  let fixture: ComponentFixture<SamplePosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
