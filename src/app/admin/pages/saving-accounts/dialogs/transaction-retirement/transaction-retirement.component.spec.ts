import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRetirementComponent } from './transaction-retirement.component';

describe('TransactionRetirementComponent', () => {
  let component: TransactionRetirementComponent;
  let fixture: ComponentFixture<TransactionRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRetirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
