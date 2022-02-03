import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSavingAccountsComponent } from './create-saving-accounts.component';

describe('CreateSavingAccountsComponent', () => {
  let component: CreateSavingAccountsComponent;
  let fixture: ComponentFixture<CreateSavingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSavingAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSavingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
