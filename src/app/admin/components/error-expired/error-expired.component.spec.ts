import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorExpiredComponent } from './error-expired.component';

describe('ErrorExpiredComponent', () => {
  let component: ErrorExpiredComponent;
  let fixture: ComponentFixture<ErrorExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
