import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentApprovalModalComponent } from './installment-approval-modal.component';

describe('InstallmentEditorModalComponent', () => {
  let component: InstallmentApprovalModalComponent;
  let fixture: ComponentFixture<InstallmentApprovalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentApprovalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentApprovalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
